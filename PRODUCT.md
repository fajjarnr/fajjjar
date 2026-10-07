# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences of equal weight, both confirmed:

1. **Fellow DevOps / platform engineers** — practitioners running OpenShift,
   Kubernetes, Linux, and cloud infrastructure day to day. They arrive from a
   search or a shared link looking for a concrete operational answer: how
   something actually behaves in production, what broke, what the fix cost.
2. **Recruiters and prospective clients** — people evaluating whether Fajar is
   worth a conversation. They skim rather than read: the About page, the shape
   of the writing, the specificity of the claims.

Neither audience gets a separate product. The same surface must satisfy a
practitioner's depth test and an evaluator's credibility skim.

## Product Purpose

A personal engineering blog that is also the primary professional credibility
surface. It exists to publish practitioner-grade writing on platform
engineering, and to make the author's competence legible to anyone evaluating
him.

Success is both, not one:

- engineers read, find it useful, and come back or subscribe;
- a recruiter or prospective client sees enough evidence to reach out.

## Positioning

Written from live production work on Red Hat OpenShift at architect level —
multi-cluster operations, automation, and incident handling — rather than
paraphrased from documentation. The site's tagline states the position
directly, now stated in English: *"Keep the platform boring"* — the SRE
position that reliable infrastructure is uneventful infrastructure.

[INFERRED] The build itself is part of the argument: a fully static Astro
output, near-zero shipped JavaScript, typed content collections, and a
documented design system are visible evidence of platform craft, not just a
container for posts. Nothing here is a claim a neighboring tutorial blog could
truthfully copy, because the underlying work is not theirs.

## Operating Context

- Posts are authored as Markdown/MDX in `src/content/blog/` with typed
  frontmatter validated by a content collection schema; a frontmatter typo
  fails the build.
- Static build (`astro build`) deployed to Cloudflare Pages via
  `wrangler.toml` (`pages_build_output_dir = ./dist`).
- Author profiles live in `src/content/authors/`; project entries in
  `src/content/projects/` as data collection JSON.
- The blog is one part of a larger professional presence (CV, LinkedIn,
  portfolio) rather than the whole of it; those surfaces are outside this
  repo's scope.

## Capabilities and Constraints

Confirmed technical facts:

- Astro 5, `output: 'static'`, Tailwind CSS 3, deployed to Cloudflare Pages.
- Content: blog (Markdown/MDX), authors, projects — all typed collections.
- Rendering pipeline: `remark-math` + `rehype-katex` for math,
  `rehype-prism-plus` for build-time syntax highlighting (Astro's built-in
  Shiki is deliberately disabled so the rehype plugin sees the code blocks),
  `remark-github-blockquote-alert` for GitHub-style callouts.
- Integrated features, all confirmed as intended to ship:
  - comments via giscus (env-configured);
  - newsletter via Buttondown (env-configured);
  - analytics — provider not yet chosen among Plausible, Umami, Simple
    Analytics, Google Analytics, PostHog (all wired, none enabled);
  - site search backed by a generated `search.json`.
- Language standard: **English** for all content, UI, and metadata. The
  previous mixed state (Indonesian body, `en-us` metadata) was scaffold drift;
  it has been converted — the hero, site description, author bio, and About
  career block are now English throughout.
- Contact details in `siteMetadata.ts` are placeholders (`fajar@example.com`,
  example social URLs) and must be replaced with real values before launch.

## Brand Commitments

- Name and identity: **Fajar**, header title `FAJAR.DEV`, site `fajjjar.my.id`.
  Real professional facts to preserve: DevOps / Platform Engineer at PT
  Mastersystem Infotama, Red Hat Certified Architect in OpenShift plus five
  further Red Hat OpenShift specialist certifications.
- Voice: direct, operational, first-person practitioner. Claims are specific
  and earned; no marketing register.
- Existing binding visual constraint: the deliberate, loud neo-brutalist
  identity (hard borders, solid offset shadows, zero border-radius, high
  contrast) documented in `DESIGN.md`. Recorded here as a commitment, not
  expanded into a visual brief — design decisions belong to new-work.

## Evidence on Hand

**Every current piece of content is scaffold and must not be treated as
production truth:** all 7 blog posts (`code-highlighting`, `github-alerts`,
`images-in-posts`, `introducing-this-blog`, `markdown-guide`,
`math-typesetting`, `nested-route-example`) are framework feature demos; all 4
project entries are placeholders; the `sparrowhawk` author profile is a
fictional guest writer; the `default` author's bio is real but its email and
social URLs are placeholders.

Real and usable: the professional facts listed under Brand Commitments, and
the assets in `public/static/images/` (logo, avatars, twitter card).

Absences future work must not fabricate: no real posts, no analytics history,
no subscriber count, no testimonials, no client logos, no press.

## Product Principles

1. **Practitioner-first.** Every post is grounded in work actually done.
   Documentation summaries and tutorial paraphrase do not qualify.
2. **Serve both audiences with one artifact.** Write deep enough for a
   practitioner; keep the surface skimmable and specific enough that an
   evaluator can judge competence without reading everything.
3. **The site is the demo.** Build quality — static output, minimal
   JavaScript, typed content, documented design system, accessibility — is
   itself evidence and must hold up to the same standard as the writing.
4. **Calm by default.** Prefer stability, predictability, and low operational
   surface over novelty, in both the writing and the site's behavior.
5. **One language.** English throughout, so content compounds in reach and the
   site reads coherently to a global evaluator.

## Accessibility & Inclusion

Committed standard, already documented in `DESIGN.md` and implemented in
`src/styles/global.css`:

- WCAG AA contrast for body text; colour never carries meaning alone —
  categories and tags always ship a text label.
- Visible `:focus-visible` outline (3px cyan, 2px offset).
- `prefers-reduced-motion` respected.
- Light/dark parity across every component; preference persisted, default
  `system`.
- Minimum 16px side padding on mobile.
