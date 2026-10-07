#!/usr/bin/env node
/**
 * Regenerates public/static/images/og-default.png from the real hero component.
 *
 *   npm run og                 # builds, then captures
 *   npm run og -- --no-build   # capture against an existing dist/
 *
 * Why a script and not a committed screenshot: the card is the hero, so it has
 * to be regenerated whenever the hero changes. Rendering /og-card (which imports
 * the same Hero.astro the home page uses) means the social image cannot silently
 * drift away from the page it depicts.
 *
 * It serves dist/ itself as plain static files rather than reusing a dev or
 * preview server: those inject the Vite client and the Astro dev toolbar, which
 * would end up baked into the social card.
 */
import { spawn } from 'node:child_process';
import { createReadStream, existsSync, mkdirSync, renameSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = resolve(ROOT, 'dist');
const OUT = resolve(ROOT, 'public/static/images/og-default.png');
const PORT = Number(process.env.OG_PORT || 4399);
const CARD_PATH = '/og-card/';
const CARD_URL = `http://127.0.0.1:${PORT}${CARD_PATH}`;
const WIDTH = 1200;
const HEIGHT = 630;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.json': 'application/json',
};

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);

function findChrome() {
  for (const candidate of CHROME_CANDIDATES) {
    if (candidate && existsSync(candidate)) return candidate;
  }
  throw new Error('No Chrome/Chromium found. Set CHROME_PATH to the executable and re-run.');
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function run(cmd, args) {
  return new Promise((ok, fail) => {
    const p = spawn(cmd, args, { cwd: ROOT, stdio: 'inherit' });
    p.on('error', fail);
    p.on('exit', (code) => (code === 0 ? ok() : fail(new Error(`${cmd} exited ${code}`))));
  });
}

/** Serves dist/ on a loopback port. No injected scripts, no dev toolbar. */
function serveDist() {
  const server = createServer((req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let filePath = join(DIST, normalize(urlPath).replace(/^(\.\.[/\\])+/, ''));

    if (existsSync(filePath) && statSync(filePath).isDirectory()) filePath = join(filePath, 'index.html');
    if (!existsSync(filePath)) {
      res.writeHead(404, { 'content-type': 'text/plain' });
      res.end('not found');
      return;
    }
    res.writeHead(200, { 'content-type': MIME[extname(filePath)] || 'application/octet-stream' });
    createReadStream(filePath).pipe(res);
  });

  return new Promise((ok, fail) => {
    server.on('error', fail);
    server.listen(PORT, '127.0.0.1', () => ok(server));
  });
}

async function capture() {
  const chrome = findChrome();
  const userDataDir = resolve(ROOT, 'node_modules/.cache/og-chrome');
  const tmpOut = OUT.replace(/\.png$/, '.tmp.png');
  mkdirSync(dirname(OUT), { recursive: true });

  // Headless Chrome's screenshot mode occasionally fails to self-exit on macOS,
  // so the run is bounded rather than trusted to terminate: kill it once the
  // file has been written and stopped growing.
  const proc = spawn(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-extensions',
      '--disable-component-update',
      '--user-data-dir=' + userDataDir,
      '--force-device-scale-factor=1',
      `--window-size=${WIDTH},${HEIGHT}`,
      '--virtual-time-budget=8000',
      `--screenshot=${tmpOut}`,
      CARD_URL,
    ],
    { cwd: ROOT, stdio: 'ignore', detached: false }
  );

  const deadline = Date.now() + 60000;
  let lastSize = -1;
  let stableFor = 0;

  while (Date.now() < deadline) {
    await sleep(400);
    if (!existsSync(tmpOut)) continue;
    const { size } = statSync(tmpOut);
    if (size > 0 && size === lastSize) {
      stableFor += 400;
      if (stableFor >= 800) break;
    } else {
      stableFor = 0;
    }
    lastSize = size;
  }

  proc.kill('SIGKILL');
  await sleep(150);

  if (!existsSync(tmpOut)) throw new Error('Chrome produced no screenshot');
  const { size } = statSync(tmpOut);
  if (size === 0) throw new Error('Chrome produced an empty screenshot');

  renameSync(tmpOut, OUT);
  return { out: OUT, size };
}

const cardHtml = join(DIST, 'og-card', 'index.html');

// Build only when needed. Rebuilding every run was the slow part, and the card
// only changes when the hero or the styles do.
if (process.argv.includes('--build') || !existsSync(cardHtml)) {
  await run('npm', ['run', 'build']);
}
if (!existsSync(cardHtml)) {
  throw new Error(`dist${CARD_PATH} missing — run "npm run build" first.`);
}

const server = await serveDist();

const start = Date.now();
try {
  const { out, size } = await capture();
  console.log(
    `og image written: ${out} (${WIDTH}x${HEIGHT}, ${(size / 1024).toFixed(0)} KB) in ${Date.now() - start}ms`
  );
} finally {
  server.close();
}
