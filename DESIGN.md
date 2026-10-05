# DESIGN.md — Neo-Brutalism Design System

## 1. Konsep & Design Direction

Neo-brutalism: raw, unpolished, high-contrast. Menolak halus dan subtle — justru merayakan bold borders, stark shadows, warna kontras, dan tipografi berat.

**Prinsip inti:**
1. **No border-radius** — semua sudut tegas
2. **Thick borders** — border-2 minimum, border-3 untuk emphasis
3. **Offset shadows** — shadow solid, bukan blur
4. **High contrast** — ink/paper, warna accent bold
5. **Bold typography** — font-bold/black untuk headings
6. **No gradients** — warna solid only
7. **Raw aesthetic** — jangan haluskan, biarkan brutal

---

## 2. Design Tokens

### Warna

| Token | Hex | Tailwind Class | Penggunaan |
|-------|-----|----------------|------------|
| `--ink` | `#111111` | `text-ink`, `border-ink`, `bg-ink` | Teks, border, shadow |
| `--paper` | `#FFFDF5` | `bg-paper` | Background utama (warm off-white) |
| `--paper-muted` | `#F3F0E6` | `bg-paper-muted` | Surface sekunder |
| `--white` | `#FFFFFF` | `bg-white` | Card, surface elevated |
| `--yellow` | `#FFE500` | `bg-yellow` | Primary highlight |
| `--pink` | `#FF1493` | `bg-pink` | Interactive emphasis |
| `--cyan` | `#00D9FF` | `bg-cyan` | Technical/info |
| `--green` | `#22F06B` | `bg-green` | Success/tutorials |
| `--red` | `#FF4B3E` | `bg-red` | Warnings |
| `--purple` | `#A66CFF` | `bg-purple` | Optional secondary |

**CSS Custom Properties** (di `global.css`):
```css
:root {
  --ink: #111111;
  --paper: #FFFDF5;
  --paper-muted: #F3F0E6;
  --white: #FFFFFF;
  --yellow: #FFE500;
  --pink: #FF1493;
  --cyan: #00D9FF;
  --green: #22F06B;
  --red: #FF4B3E;
  --purple: #A66CFF;
}
```

### Shadow

| Token | Value | Tailwind Class |
|-------|-------|----------------|
| `--shadow-sm` | `3px 3px 0 #111111` | `shadow-[3px_3px_0_#111111]` |
| `--shadow-md` | `5px 5px 0 #111111` | `shadow-[5px_5px_0_#111111]` |
| `--shadow-lg` | `7px 7px 0 #111111` | `shadow-[7px_7px_0_#111111]` |

**Hover effect**: `translate(3px, 3px)` + shadow `1px 1px 0 #111111`
```css
/* Tailwind */
hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[1px_1px_0_#111111]
```

### Border

| Tipe | Value | Tailwind Class |
|------|-------|----------------|
| Primary | `2px solid #111111` | `border-2 border-ink` |
| Featured | `3px solid #111111` | `border-[3px] border-ink` |
| Radius | `0` | `rounded-none` |

### Spacing

| Token | Value | Penggunaan |
|-------|-------|------------|
| `space-unit` | `4px` | Base unit |
| `container-pad` | `24px` (desktop), `20px` (tablet), `16px` (mobile) | Padding container |
| `article-measure` | `680-760px` | Lebar kolom artikel |

---

## 3. Typography

### Font Families

| Role | Font | Tailwind Class |
|------|------|----------------|
| Display | Space Grotesk / Archivo Black | `font-display` |
| Body | Inter | `font-sans` |
| Mono | JetBrains Mono | `font-mono` |

**Google Fonts import** (di `global.css` atau `<head>`):
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
```

### Type Scale

| Token | Size | Tailwind Class | Penggunaan |
|-------|------|----------------|------------|
| `xs` | `0.75rem` (12px) | `text-xs` | Caption, metadata |
| `sm` | `0.875rem` (14px) | `text-sm` | Badge, label |
| `md` | `1rem` (16px) | `text-base` | Body text |
| `lg` | `1.25rem` (20px) | `text-lg` | Subheading |
| `xl` | `1.75rem` (28px) | `text-xl` | H3 |
| `2xl` | `2.5rem` (40px) | `text-2xl` | H2 |
| `3xl` | `4rem` (64px) | `text-3xl` | H1 |
| `4xl` | `5.5rem` (88px) | `text-4xl` / `text-6xl` | Hero title |

### Article Typography

- **Body**: `17-19px`, `line-height: 1.65`
- **Measure**: `680-760px` max-width
- **Heading**: `font-display font-bold uppercase tracking-tight`

---

## 4. Background

### Graph Paper Grid

```css
/* Di body atau main wrapper */
background-color: #FFFDF5;
background-image:
  linear-gradient(rgba(17, 17, 17, 0.07) 1px, transparent 1px),
  linear-gradient(90deg, rgba(17, 17, 17, 0.07) 1px, transparent 1px);
background-size: 24px 24px;
```

**Tailwind arbitrary value**:
```html
<body class="bg-paper bg-[linear-gradient(rgba(17,17,17,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.07)_1px,transparent_1px)] bg-[length:24px_24px]">
```

---

## 5. Layout System

### Container

```css
/* Desktop */
max-width: 1180px;
padding-inline: 24px;

/* Tablet */
padding-inline: 20px;

/* Mobile */
padding-inline: 16px;
```

**Tailwind**:
```html
<div class="mx-auto max-w-[1180px] px-4 md:px-6 lg:px-6">
  <!-- content -->
</div>
```

### Grid

- **12-column grid** untuk layout utama
- **Gap**: `24px` (desktop), `16px` (mobile)
- **Article reading column**: `680-760px` max-width, centered

```html
<main class="mx-auto max-w-[1180px] px-4 md:px-6">
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
    <article class="lg:col-span-8 lg:col-start-3 max-w-[720px] mx-auto">
      <!-- article content -->
    </article>
  </div>
</main>
```

---

## 6. Komponen

### Header

```html
<header class="sticky top-0 z-50 border-b-[3px] border-ink bg-paper">
  <div class="mx-auto max-w-[1180px] px-4 md:px-6 py-4 flex items-center justify-between">
    <a href="/" class="font-display font-bold text-xl tracking-tight">BLOG</a>
    <nav class="hidden md:flex gap-6">
      <a href="/" class="font-bold hover:underline underline-offset-4">Home</a>
      <a href="/articles" class="font-bold hover:underline underline-offset-4">Articles</a>
      <a href="/about" class="font-bold hover:underline underline-offset-4">About</a>
    </nav>
  </div>
</header>
```

### Navigation

```html
<nav class="flex flex-wrap gap-2">
  <a href="/category/devops" class="border-2 border-ink bg-green px-3 py-1 text-sm font-bold hover:shadow-[3px_3px_0_#111111] transition-all">DEVOPS</a>
  <a href="/category/kubernetes" class="border-2 border-ink bg-cyan px-3 py-1 text-sm font-bold hover:shadow-[3px_3px_0_#111111] transition-all">KUBERNETES</a>
  <a href="/category/java" class="border-2 border-ink bg-pink px-3 py-1 text-sm font-bold hover:shadow-[3px_3px_0_#111111] transition-all">JAVA</a>
</nav>
```

### Badge

```html
<span class="inline-block border-2 border-ink bg-yellow px-3 py-1 text-sm font-bold uppercase tracking-wide">
  New
</span>
```

### Button

```html
<button class="border-2 border-ink bg-yellow px-6 py-3 font-bold shadow-[5px_5px_0_#111111] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[1px_1px_0_#111111] transition-all">
  Click Me
</button>
```

### Hero

```html
<section class="border-b-[3px] border-ink bg-paper py-16 md:py-24">
  <div class="mx-auto max-w-[1180px] px-4 md:px-6">
    <h1 class="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight leading-none">
      Hero Title
    </h1>
    <p class="mt-4 text-lg md:text-xl max-w-[680px]">
      Subtitle atau description dengan measure nyaman dibaca.
    </p>
  </div>
</section>
```

### FeaturedArticle

```html
<article class="border-[3px] border-ink bg-white p-6 md:p-8 shadow-[7px_7px_0_#111111]">
  <span class="inline-block border-2 border-ink bg-yellow px-3 py-1 text-sm font-bold uppercase">Featured</span>
  <h2 class="mt-4 font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">Article Title</h2>
  <p class="mt-2 text-md text-ink/80">Excerpt artikel...</p>
  <div class="mt-4 flex items-center gap-4 text-sm font-mono text-ink/60">
    <time>2024-01-15</time>
    <span>5 min read</span>
  </div>
</article>
```

### ArticleCard

```html
<article class="border-2 border-ink bg-white p-6 shadow-[5px_5px_0_#111111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[7px_7px_0_#111111] transition-all">
  <div class="flex items-center gap-2 mb-3">
    <span class="border-2 border-ink bg-cyan px-2 py-0.5 text-xs font-bold uppercase">Kubernetes</span>
    <time class="text-xs font-mono text-ink/60">2024-01-15</time>
  </div>
  <h3 class="font-display font-bold text-xl uppercase tracking-tight">Article Title</h3>
  <p class="mt-2 text-sm text-ink/70">Excerpt...</p>
</article>
```

### ArticleList

```html
<div class="flex flex-col gap-6">
  <article class="border-2 border-ink bg-white p-6 shadow-[5px_5px_0_#111111]">
    <!-- ArticleCard content -->
  </article>
  <!-- repeat -->
</div>
```

### CategoryCard

```html
<a href="/category/devops" class="block border-2 border-ink bg-green p-6 shadow-[5px_5px_0_#111111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[7px_7px_0_#111111] transition-all">
  <h3 class="font-display font-bold text-xl uppercase">DevOps</h3>
  <p class="mt-1 text-sm">12 articles</p>
</a>
```

### TagList

```html
<div class="flex flex-wrap gap-2">
  <a href="/tags/astro" class="border-2 border-ink bg-paper-muted px-3 py-1 text-sm font-bold hover:bg-yellow transition-colors">#astro</a>
  <a href="/tags/tailwind" class="border-2 border-ink bg-paper-muted px-3 py-1 text-sm font-bold hover:bg-yellow transition-colors">#tailwind</a>
</div>
```

### Callout

```html
<div class="border-2 border-ink bg-yellow p-4 shadow-[3px_3px_0_#111111]">
  <p class="font-bold">Note</p>
  <p class="mt-1 text-sm">Isi callout...</p>
</div>
```

### Quote

```html
<blockquote class="border-l-4 border-ink bg-paper-muted p-4 italic">
  <p class="text-lg">"Quote text..."</p>
  <cite class="mt-2 block text-sm font-bold not-italic">— Author Name</cite>
</blockquote>
```

### CodeBlock

```html
<div class="border-2 border-ink shadow-[5px_5px_0_#111111]">
  <div class="border-b-2 border-ink bg-ink px-4 py-2">
    <span class="font-mono text-sm text-white">terminal</span>
  </div>
  <pre class="bg-[#1a1a1a] p-4 overflow-x-auto"><code class="font-mono text-sm text-white">const hello = "world";</code></pre>
</div>
```

### ImageFrame

```html
<figure class="border-2 border-ink shadow-[5px_5px_0_#111111]">
  <img src="/image.jpg" alt="Description" class="w-full h-auto" />
  <figcaption class="border-t-2 border-ink bg-paper px-4 py-2 text-sm font-mono text-ink/70">
    Image caption
  </figcaption>
</figure>
```

### AuthorBlock

```html
<div class="flex items-center gap-4 border-2 border-ink bg-white p-4 shadow-[3px_3px_0_#111111]">
  <img src="/avatar.jpg" alt="Author" class="w-12 h-12 border-2 border-ink" />
  <div>
    <p class="font-bold">Author Name</p>
    <p class="text-sm text-ink/60">Bio singkat author</p>
  </div>
</div>
```

### ShareBar

```html
<div class="flex gap-2">
  <a href="#" class="border-2 border-ink bg-cyan px-4 py-2 text-sm font-bold hover:shadow-[3px_3px_0_#111111] transition-all">Twitter</a>
  <a href="#" class="border-2 border-ink bg-pink px-4 py-2 text-sm font-bold hover:shadow-[3px_3px_0_#111111] transition-all">Facebook</a>
  <a href="#" class="border-2 border-ink bg-green px-4 py-2 text-sm font-bold hover:shadow-[3px_3px_0_#111111] transition-all">LinkedIn</a>
</div>
```

### Pagination

```html
<nav class="flex justify-center gap-2">
  <a href="#" class="border-2 border-ink bg-white px-4 py-2 font-bold hover:bg-yellow transition-colors">1</a>
  <a href="#" class="border-2 border-ink bg-yellow px-4 py-2 font-bold">2</a>
  <a href="#" class="border-2 border-ink bg-white px-4 py-2 font-bold hover:bg-yellow transition-colors">3</a>
</nav>
```

### NewsletterBox

```html
<div class="border-[3px] border-ink bg-yellow p-6 md:p-8 shadow-[7px_7px_0_#111111]">
  <h3 class="font-display font-bold text-2xl uppercase">Newsletter</h3>
  <p class="mt-2 text-sm">Dapatkan update artikel terbaru.</p>
  <form class="mt-4 flex gap-2">
    <input type="email" placeholder="email@example.com" class="flex-1 border-2 border-ink bg-white px-4 py-2 focus:outline-none focus:ring-0" />
    <button type="submit" class="border-2 border-ink bg-ink text-white px-6 py-2 font-bold hover:bg-white hover:text-ink transition-colors">Subscribe</button>
  </form>
</div>
```

### Footer

```html
<footer class="border-t-[3px] border-ink bg-paper py-8">
  <div class="mx-auto max-w-[1180px] px-4 md:px-6">
    <div class="flex flex-col md:flex-row justify-between gap-4">
      <p class="text-sm font-mono text-ink/60">© 2024 Blog. All rights reserved.</p>
      <nav class="flex gap-4">
        <a href="/" class="text-sm font-bold hover:underline underline-offset-4">Home</a>
        <a href="/about" class="text-sm font-bold hover:underline underline-offset-4">About</a>
        <a href="/rss" class="text-sm font-bold hover:underline underline-offset-4">RSS</a>
      </nav>
    </div>
  </div>
</footer>
```

---

## 7. Kategori & Warna

| Kategori | Warna | Tailwind Class |
|----------|-------|----------------|
| DEVOPS | Green | `bg-green` |
| KUBERNETES | Cyan | `bg-cyan` |
| JAVA | Pink | `bg-pink` |
| LINUX | Yellow | `bg-yellow` |
| NOTE | Purple | `bg-purple` |
| GUIDE | Cyan | `bg-cyan` |
| LAB | Pink | `bg-pink` |

**Aturan**: Jangan komunikasikan kategori hanya dengan warna. Selalu sertakan teks label.

---

## 8. Callouts

| Variant | Background | Border | Penggunaan |
|---------|------------|--------|------------|
| Note | `bg-yellow` | `border-ink` | Catatan umum |
| Tip | `bg-green` | `border-ink` | Tips/saran |
| Warning | `bg-pink` atau `bg-red` | `border-ink` | Peringatan |
| Technical | `bg-cyan` | `border-ink` | Info teknis |

**Struktur**:
```html
<div class="border-2 border-ink bg-yellow p-4 shadow-[3px_3px_0_#111111]">
  <p class="font-bold uppercase text-sm">Note</p>
  <p class="mt-1 text-sm">Isi callout...</p>
</div>
```

---

## 9. Code Blocks

- **Background**: `#111111` atau `#1a1a1a`
- **Text**: Light monospace (`text-white` atau `text-gray-300`)
- **Label**: Terminal-style label di top bar
- **Border**: `border-2 border-ink` + `shadow-[5px_5px_0_#111111]`

```html
<div class="border-2 border-ink shadow-[5px_5px_0_#111111]">
  <div class="border-b-2 border-ink bg-ink px-4 py-2 flex items-center justify-between">
    <span class="font-mono text-sm text-white">bash</span>
    <button class="text-xs font-mono text-white/60 hover:text-white">copy</button>
  </div>
  <pre class="bg-[#1a1a1a] p-4 overflow-x-auto"><code class="font-mono text-sm text-white">$ npm install</code></pre>
</div>
```

---

## 10. Motion

| Element | Effect | Tailwind Class |
|---------|--------|----------------|
| Button press | Translate toward shadow | `hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[1px_1px_0_#111111]` |
| Card hover | Translate up 2-4px + increase shadow | `hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[7px_7px_0_#111111]` |
| Badge | Optional rotation | `hover:rotate-[-1deg]` atau `hover:rotate-[1deg]` |

**Larangan**:
- No parallax
- No blur animations
- No floating effects
- No smooth scroll (kecuali untuk anchor links)

---

## 11. Accessibility

- **Focus states**: `3px solid #00D9FF` outline
  ```css
  :focus-visible {
    outline: 3px solid #00D9FF;
    outline-offset: 2px;
  }
  ```
- **Color + text**: Jangan komunikasikan kategori hanya dengan warna — selalu sertakan teks label
- **Reduced motion**: Respect `prefers-reduced-motion`
  ```css
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```
- **Mobile padding**: Minimum `16px` side padding
- **Contrast**: Pastikan ratio kontras minimum 4.5:1 untuk teks normal

---

## 12. Dark Mode

**Strategi**: Invert paper/ink relationship, tetap vibrant untuk accent colors.

| Token | Light | Dark |
|-------|-------|------|
| Background | `bg-paper` (#FFFDF5) | `bg-[#0a0a0a]` atau `bg-gray-950` |
| Surface | `bg-white` | `bg-[#1a1a1a]` atau `bg-gray-900` |
| Text | `text-ink` (#111111) | `text-white` |
| Border | `border-ink` | `border-white` |
| Muted text | `text-ink/60` | `text-white/60` |
| Accent colors | Tetap sama | Tetap sama (vibrant) |

**Implementation**:
- Toggle via `ThemeSwitch` component
- Simpan preference di `localStorage`
- Default: `system` (ikuti OS preference)
- Tailwind: `darkMode: 'class'` di `tailwind.config.js`
- Semua komponen wajib support `dark:` variant

---

## 13. Implementasi

### Tailwind Configuration

```js
// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        paper: '#FFFDF5',
        'paper-muted': '#F3F0E6',
        yellow: '#FFE500',
        pink: '#FF1493',
        cyan: '#00D9FF',
        green: '#22F06B',
        red: '#FF4B3E',
        purple: '#A66CFF',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Archivo Black', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
```

### Global CSS

```css
/* src/styles/global.css */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-paper text-ink font-sans;
    background-image:
      linear-gradient(rgba(17, 17, 17, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(17, 17, 17, 0.07) 1px, transparent 1px);
    background-size: 24px 24px;
  }

  .dark body {
    @apply bg-[#0a0a0a] text-white;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  }

  :focus-visible {
    outline: 3px solid #00D9FF;
    outline-offset: 2px;
  }
}

@layer components {
  .container-blog {
    @apply mx-auto max-w-[1180px] px-4 md:px-6;
  }

  .article-body {
    @apply max-w-[720px] mx-auto;
    font-size: 17px;
    line-height: 1.65;
  }
}
```

### Astro Notes

- Setiap komponen wajib mengikuti pattern di atas
- Konsisten di light dan dark mode
- Gunakan `dark:` variant untuk semua warna
- Prose styling untuk article body via `@tailwindcss/typography` plugin atau custom CSS
- Font loading via `<head>` atau CSS import
