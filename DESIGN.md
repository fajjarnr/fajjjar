---
name: fajjjar.my.id
description: A practitioner's control room for platform engineering — loud ink on graph paper, every accent a signal.
colors:
  console-black: "#111111"
  chart-paper: "#FFFDF5"
  graph-shade: "#F3F0E6"
  panel-white: "#FFFFFF"
  caution-yellow: "#FFE500"
  alert-magenta: "#FF1493"
  alert-magenta-text: "#E01281"
  telemetry-cyan: "#00D9FF"
  nominal-green: "#22F06B"
  fault-red: "#FF4B3E"
  fault-red-light: "#FF9580"
  auxiliary-violet: "#A66CFF"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2.25rem, 8vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  body-large:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.02em"
  code:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  post-h3:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  numeral:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "11rem"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.025em"
rounded:
  none: "0"
spacing:
  unit: "4px"
  gap: "16px"
  gap-lg: "24px"
  container-inline: "16px"
  container-inline-md: "24px"
  section-block: "32px"
  article-measure: "720px"
  shell: "1180px"
components:
  button-primary:
    backgroundColor: "{colors.alert-magenta}"
    textColor: "{colors.console-black}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.panel-white}"
    textColor: "{colors.console-black}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-icon:
    backgroundColor: "{colors.caution-yellow}"
    textColor: "{colors.console-black}"
    rounded: "{rounded.none}"
    size: "44px"
  tag:
    backgroundColor: "{colors.telemetry-cyan}"
    textColor: "{colors.console-black}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  card:
    backgroundColor: "{colors.panel-white}"
    textColor: "{colors.console-black}"
    rounded: "{rounded.none}"
    padding: "24px"
  readout:
    backgroundColor: "{colors.panel-white}"
    textColor: "{colors.console-black}"
    rounded: "{rounded.none}"
    padding: "12px"
  input:
    backgroundColor: "{colors.panel-white}"
    textColor: "{colors.console-black}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  nav-link:
    backgroundColor: "{colors.chart-paper}"
    textColor: "{colors.console-black}"
    rounded: "{rounded.none}"
    padding: "8px 0"
---

# Design System: fajjjar.my.id

## Overview

**Creative North Star: "The Control Room"**

A calm operations console drawn on graph paper. The palette is loud on purpose — cyan, magenta, yellow, green read as instrument states, not decoration — but the system that carries them is disciplined: one container width, one border weight family, one shadow vocabulary, one accent per signal. Nothing on the page is ambient. Every surface is bounded by a black rule, every element sits on the grid, and every colored block is labelled in monospace. It should feel like a readout you trust at 3am, not a page that is trying to impress you.

Density is high and typographic, closer to a printed specification than a marketing page. Display type is set heavy and uppercase in Space Grotesk; metadata, counts, badges and labels are set in JetBrains Mono so they read as machine output rather than prose. Body copy is Inter at a comfortable measure. The system never softens: no blur, no gradient fill, no rounded corner, no drop shadow without an offset. Where the print aesthetic would normally be a costume, here it is load-bearing — a hard black rule around a card is also what tells you the card is a card.

The register is **calm operations**: bright signals, ordered layout, no ornament that does not carry information. The one confirmed rejection is muted low-contrast palettes — this system earns its calm from legibility and order, not from desaturation.

**Key Characteristics:**
- Hard black rules (2–4px) bound every surface; nothing floats unboxed.
- Solid offset shadows with zero blur; depth is displacement, not light.
- Zero border-radius anywhere; corners are always square.
- Colour is signal: each accent carries one recurring meaning and always ships a text label.
- Monospace for anything that reads as data; display grotesk for anything that reads as a heading.
- Graph-paper ground at 24px, visible in both themes.

## Colors

A high-chroma signal palette on warm off-white stock, bound together by near-black ink. Every accent is light enough to carry black text at AA or better.

### Primary
- **Alert Magenta** (#FF1493): the action colour. Primary buttons, featured badges, the "Featured" flag, and prose links in the dark theme. Reserved for things the visitor should act on or notice; it is the loudest colour in the system and the most rationed (5.19:1 with ink, which is why it stays at full chroma on dark grounds).
- **Alert Magenta Text** (#E01281): the light-theme tier of the same hue, scaled to 88% lightness. Prose links in article body only. Full-chroma magenta is 3.64:1 on Panel White and 3.57:1 on Chart Paper — both under the 4.5:1 floor this system commits to — while this tier reads 4.59:1 on Panel White and 4.51:1 on Chart Paper.
- **Caution Yellow** (#FFE500): the state and utility colour. Sticky header strip, tag badges, topic chips, icon buttons, newsletter accents, selection highlight. Also the default focus ring's contrast partner. Highest-legibility accent in the set (14.8:1 with ink).

### Secondary
- **Telemetry Cyan** (#00D9FF): informational role. Post-layout badges on the home feed, the search/tag chips, the "All tags" back link, project metadata tags, and every readout tag except a fault. Reads as readout, not alarm (11.12:1 with ink).
- **Nominal Green** (#22F06B): positive counts and utilities — the "N posts" counter, the scroll-to-top button, share buttons, and "what I write about" chips (12.36:1 with ink).
- **Fault Red** (#FF4B3E): the fault signal. The readout tag on a missing route, an empty result set, or an unavailable search index; also one of the rotating project-index accents. Reserved for warnings and error states; do not expand it into decorative duty (5.69:1 with ink).
- **Fault Red Light** (#FF9580): the syntax-highlighting tier. Used only for regex, `important`, and variable tokens inside code blocks, where the palette needs a fourth warm step that stays legible on the `#111111` code ground.
- **Auxiliary Violet** (#A66CFF): defined and available, currently unused in the shipped UI. Held for a future note/category role (5.58:1 with ink).

### Neutral
- **Console Black** (#111111): body text in light theme, body background in dark theme, and the universal border/shadow colour. The system's spine.
- **Chart Paper** (#FFFDF5): the light-theme ground. Warm, not white; the graph-paper grid is drawn over it at 7% ink.
- **Graph Shade** (#F3F0E6): secondary surface — code spans, table headers, the featured card's right panel, blockquote fills.
- **Panel White** (#FFFFFF): elevated surfaces — cards, article containers, inputs, sidebar panels. Distinct from Chart Paper so panels read as raised.

### Named Rules
**The One Signal Rule.** Each accent colour carries exactly one recurring meaning and is never used as general decoration. Magenta means act, cyan means information, green means nominal, red means fault, yellow means state/utility. A new accent role needs a new decision, not a reassignment.

**The Never Colour Alone Rule.** Colour never communicates category or state by itself. Every coloured chip, badge, and tag ships a text label; the label carries the meaning and the colour only reinforces it.

**The Contrast Floor Rule.** No text is set in an accent-on-accent or accent-on-paper combination. Ink on any accent is the default; the lowest ratio in the shipped set is magenta at 5.19:1, still above the 4.5:1 normal-text floor.

## Typography

**Display Font:** Space Grotesk (with sans-serif fallback)
**Body Font:** Inter (with sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (with monospace fallback)

**Character:** A heavy geometric grotesk set in uppercase for structure, a neutral humanist sans for reading, and a terminal monospace for anything that behaves like data. The pairing reads as instrument labelling: the grotesk names the section, the mono reports the values, the sans explains.

### Hierarchy
- **Display** (900, clamp(2.25rem, 8vw, 4.5rem), line-height 0.95, tracking -0.025em, uppercase): hero headlines and the 404 numeral. Set to fill the container; line breaks are deliberate (one word or phrase per line).
- **Headline** (900, 1.875rem / 2.5rem at sm, line-height 1.15, uppercase): page titles and section headers ("Latest writing", "Posts tagged …", blog index h1).
- **Title** (900, 1.25rem / 1.5rem at sm, line-height 1.25, uppercase): card and post-list headings, project titles, post-footer h2s.
- **Body** (400, 1rem, line-height 1.7): default prose. Article body is set at 1.0625rem (17px) with line-height 1.65 and a 720px measure.
- **Body Large** (700, 1.125rem / 1.25rem at sm, line-height 1.6): hero subtitles, page descriptions, intro paragraphs. Bold at this size is a deliberate weight shift, not emphasis.
- **Label** (700, 0.75rem, line-height 1.2, tracking 0.02em, uppercase, monospace): dates, reading time, counts, badges, chips, nav eyebrows, form labels. The workhorse of the system.
- **Code / Small** (400, 0.875rem, JetBrains Mono): inline `code`, pre blocks, table headers, and the small metadata runs in prose. The one step below Label, used only where the mono face is already carrying the element.
- **Post H3** (900, 1.5rem, line-height 1.25, uppercase): third-level headings inside article prose, below the 1.875rem H2 rule.

### Named Rules
**The Mono-For-Data Rule.** Anything a machine would produce — timestamps, counts, reading time, identifiers, tags, status badges — is set in JetBrains Mono, uppercase, bold, at 0.75rem. Anything a human wrote is set in Inter or Space Grotesk. Never mix the two roles inside one element.

**The Uppercase Structure Rule.** All headings at Headline level and above are uppercase. Uppercase is what separates a heading from a sentence in this system; do not set a headline in sentence case.

## Layout

A single 1180px shell (`max-w-[1180px]`) centred with 16px inline padding on mobile and 24px from `sm` up. Every page is built from `SectionContainer` blocks inside that shell — no full-bleed content except the hero band.

The home page is a vertical stack of ruled bands: a yellow ticker strip, the hero, a topic-filter strip on Graph Shade, then SectionContainer blocks for featured, latest writing, and the focus callout. Each band is separated by a 2–4px black rule rather than whitespace alone.

The home hero is a two-column grid from `lg` up: the positioning copy on the left (fluid), the topology schematic on the right at a 520px ceiling, 64px gap. Below `lg` it collapses to one column with the diagram under the call-to-action row.

Article pages switch to a two-column grid at `lg`: a fluid main column and a fixed 320px sidebar (`lg:grid-cols-[1fr_320px]`, 40px gap) holding the sticky table of contents, tags, and share panel at `top-24`. Below `lg` the sidebar disappears entirely and the article takes the full width.

The article prose column sits directly on the graph-paper ground with no panel of its own. The reading progress hairline runs full-bleed across the top of the viewport, above the header, in Alert Magenta.

Grids step 1 → 2 columns at `sm` for post and project lists, 1 → 2 → 3 at `sm`/`lg` for the tag index. The featured card on the blog index is a 1 → 2 column split at `md`, with the metadata panel in Graph Shade on the right.

Vertical rhythm is carried by `SectionContainer`'s `py-8` (32px) plus explicit `mt-*` steps at 3, 4, 5, 6, 8, 10, 12 and 16 (12–64px). The system does not use a modular scale; spacing is chosen per composition from the 4px unit.

## Elevation & Depth

A hybrid, and the split is strict. Cards, buttons, chips, and inputs use **structural** depth: a solid offset shadow with zero blur (`box-shadow: Npx Npx 0 <colour>`) that reads as physical displacement, not ambient light. Hover moves the element *toward* its shadow (translate 3px, 3px) while the shadow shrinks to 1px — the element presses down into the page. There is no lift-on-hover anywhere in the system.

Modal surfaces and overlays use the one **ambient** treatment: the search modal backdrop is `rgba(0,0,0,0.7)` with no blur. That is the entire ambient vocabulary.

### Shadow Vocabulary
- **Brutal XS** (`box-shadow: 1px 1px 0 var(--shadow-color)`): the resting state after a press, and the hover target for small controls.
- **Brutal SM** (`box-shadow: 3px 3px 0 var(--shadow-color)`): small controls at rest — tags, social icons, share buttons, related-post cards.
- **Brutal MD** (`box-shadow: 5px 5px 0 var(--shadow-color)`): the default for cards, panels, sidebar blocks, inputs, and icon buttons.
- **Brutal LG** (`box-shadow: 7px 7px 0 var(--shadow-color)`): the emphasis tier — featured cards, project cards, newsletter, article banners, readout panels.

`--shadow-color` is `#111111` in light theme and `rgba(255, 253, 245, 0.25)` in dark, so the same shadow classes work in both themes with reduced weight on dark grounds.

### Named Rules
**The Press Rule.** Hover always moves an element toward its shadow and shrinks the shadow; it never grows it, never blurs it, and never lifts the element off the page. The transition is `translate(3px, 3px)` with the shadow dropping one tier.

**The Zero-Blur Rule.** Every shadow in the system has a 0px blur radius and a 0px spread. Blur is banned; if depth needs to read stronger, increase the offset or the tier, not the softness.

## Motion

The world is an instrument panel, so nothing springs and nothing floats. Things power on, read out, and land. One arrival curve carries the whole system — `cubic-bezier(0.16, 1, 0.3, 1)`, a decelerating settle with no overshoot — and three durations: 120ms for feedback, 200ms for a state change, 380ms for a surface settling. Bounce and elastic curves are not in the vocabulary; a thing that lands is not a thing that bounces.

Motion is limited to `transform`, `opacity`, `stroke-dashoffset`, and the reading progress bar's `width` — the one property whose animation *is* the meaning, since a progress bar that does not grow is not a progress bar.

The one authored sequence is the hero schematic's **boot**: the control plane powers on, the wires draw outward from it in the order the eye follows them, junctions land on the bus, the cluster frames drop into place, the status chips fill, and only then does the sync loop begin at 1.35s. Everything after it is supporting feedback — the search dialog settling down from above, scroll-to-top sliding in from its own edge, search hits landing in sequence, sections rising 16px.

### Named Rules
**The Power-On Rule.** Arrivals are finite and land once; the only loop in the system is the hero sync pulse. An element either powers on and stays, or is the sync pulse. No second loop, no idle shimmer, no ambient drift.

**The Wait-Hidden Rule.** Anything that animates in must be invisible before its turn. An infinite loop with a delay needs `backwards` fill; a delayed entrance needs `both`. A magenta square sitting on a wire while the rest of the diagram is still booting is the bug this rule exists to prevent.

**The Cost-When-Unseen Rule.** A decorative loop pauses when it scrolls out of view or the tab is hidden, and stops entirely under `prefers-reduced-motion`. Nothing animates where nobody is looking.

## Shapes

**Zero border-radius, everywhere.** `rounded-none` is not a default that was left alone — it is the system's form language. Every button, card, input, badge, chip, tag, image, avatar, and panel has square corners. There is no `border-radius` declaration anywhere in the shipped CSS.

Borders are the primary structural device, in a four-step weight family:
- **2px** — the default rule for cards, chips, buttons, inputs, panels, and tag badges.
- **3px** — the sticky header's bottom rule, mobile nav panel, image frames, the featured banner, and the comment/newsletter section heading rules.
- **4px** — page-level dividers: footer top, home hero bottom, section header underlines, the blog-index hero rule.
- **2px dashed** — empty states only (no posts, no projects, no search results).

Border colour is Console Black in light theme and Chart Paper in dark, always via the `dark:border-paper` variant. Images are framed with a 2–3px border plus a Brutal MD/LG shadow; avatars use a 2px border (4px on the About hero).

## Components

### Buttons
- **Shape:** square (0 radius), 2px Console Black border, uppercase display type at `font-black`.
- **Primary:** Alert Magenta background, Console Black text, 12px × 24px padding, Brutal MD at rest. Used for the main action on a surface ("Read the blog", "View all posts", "Subscribe").
- **Secondary:** Panel White background (Console Black in dark), Console Black/Chart Paper text, same padding and shadow tier. Used for the paired alternative action ("About me").
- **Icon buttons:** 44×44px minimum (search, theme toggle, mobile menu), Caution Yellow background, Brutal MD, 20px inline SVG icon. Green variant for scroll-to-top.
- **Hover / Focus:** `translate(3px, 3px)` with the shadow dropping to Brutal XS. `:active` presses a further 2px with a 1px shadow. Focus is the global 3px Telemetry Cyan ring at 3px offset plus a 6px cyan glow at 20% opacity — never removed, never replaced by a border change.

### Chips (tags, topics, badges)
- **Style:** 2px black border, uppercase JetBrains Mono at 0.75rem/700, square corners, Brutal SM or none depending on tier. Background carries the signal: Telemetry Cyan for tags, Caution Yellow for post tags and featured badges, Alert Magenta for the "Featured" flag, Nominal Green for counts.
- **State:** hover presses (`translate(2–3px)`), shadow drops to none or XS, and background shifts to Caution Yellow for neutral chips. Tag chips have a 44px minimum height where they are the primary tap target.

### Cards / Containers
- **Corner Style:** square (0 radius).
- **Background:** Panel White on Chart Paper ground; Console Black in dark theme.
- **Border:** 2px Console Black (3px for the featured/banner tier).
- **Shadow Strategy:** Brutal MD default, Brutal LG for the featured and project tiers — see Elevation & Depth.
- **Internal Padding:** 24px (`p-6`), stepping to 32px (`p-8`) for featured and hero cards.
- **Hover:** press 3px with shadow to Brutal XS; headings underline rather than change colour.

### Inputs / Fields
- **Style:** 2px black border, Panel White background (Console Black in dark), square corners, bold Inter text, Brutal MD shadow, 12px × 16px padding.
- **Focus:** `outline: none` on the element plus the global 3px cyan `:focus-visible` ring. The field never changes border colour or background on focus.
- **Placeholder:** `text-ink/50` in light, `text-paper/50` in dark, normal weight — a deliberate de-emphasis, and the one place in the system that sits below the AA text floor.
- **Error / Disabled:** not yet defined; the newsletter form is the only live input.

### Navigation
- **Header:** sticky at `top-0`, z-50, Chart Paper background, 3px black bottom rule. Wordmark in Space Grotesk 900 uppercase at `text-xl`. Desktop links in Space Grotesk bold with a transparent 2px underline that fills on hover. Search and theme controls form one right-aligned cluster (12px apart, with the 44px yellow menu button joining it below `md`); they are never separated by the nav's space distribution. Mobile collapses the links into a full-width stacked panel of bordered links.
- **Footer:** 4px top rule, three-column grid (brand + social, Navigate, Topics), Chart Paper ground. Links carry a persistent 2px underline that thickens to 4px on hover.
- **Sidebar (article):** sticky at `top-24`, three bordered Panel White blocks — table of contents, tags, share. Hidden below `lg`.

### Signature Component: Ruled Section Band
The recurring home-page pattern: a full-width band bounded by a 2–4px black rule, optionally tinted (Caution Yellow ticker, Graph Shade topic strip), containing a single 1180px-shell row. It is what gives the home page its specification-sheet rhythm and is the system's main structural signature — reach for it before inventing a new section container.

### Signature Component: Console Readout
The instrument vocabulary for *states*, not pages: an empty filter or search result set, a missing route, an unavailable index. A readout is a Panel White box (`.readout`) with a mono header row naming the signal in a bordered accent tag, then a mono body reporting machine values. `readout--info` is cyan (informational), `readout--fault` is red (nothing found or nothing available). `readout--flush` drops the frame and shadow for a readout that sits inside an existing panel.

**The Signal Word Rule.** A readout's tag states the state in words — `Index`, `Query`, `No signal`, `Fault` — and never appears as colour alone. The accent reinforces the word; it does not replace it.

**The Data Case Rule.** Readout chrome is uppercase mono, but a value the reader supplied or a real path keeps its own case: a requested path renders `/blog/nope/`, not `/BLOG/NOPE/`. Uppercase is for labels, never for data.

**The Instrument, Not Container Rule.** A readout marks a moment the visitor must read or act on. Do not wrap ordinary page content in one, and do not stack readouts; a page has one instrument or none.


### Signature Component: Topology Schematic
The hero's second column: the positioning line drawn as the thing it describes. One Control Plane (Telemetry Cyan, because it is the information hub) syncing down a bus to three clusters — two reporting `NOMINAL` on Nominal Green, one reporting `FAULT` on Fault Red — inside the same readout frame as every other instrument. Pure geometry: straight connectors, square junctions, flat fills, no curves, no gradients, no perspective. It is labelled `ILLUSTRATIVE`, and every label states what the drawing means, so it is read as a schematic rather than as a picture of a real cluster.

**The Diagram, Not Illustration Rule.** Imagery in this system is drawn as a diagram or not at all. Shapes carry meaning, labels carry the meaning in words, and the palette is limited to ink plus the signal accents. No shaded, perspectived, or figure-bearing illustration; no decorative geometry standing in for one.

**The Boot Rule.** The schematic powers on before it syncs: control plane, then wires drawn outward in reading order, then junction squares, then cluster frames, then status chips, and only then the sync pulse — which is the system's single looping animation, linear, 2.4s, and paused whenever it is offscreen or the tab is hidden. Do not add a second loop, and do not shorten the boot below ~1.3s: the sequence is the positioning line performed, not an entrance effect.

## Do's and Don'ts

### Do:
- **Do** bound every surface with a 2–4px Console Black rule. An unboxed surface is not part of this system.
- **Do** use solid offset shadows from the Brutal XS/SM/MD/LG ladder with 0px blur, and move the element toward the shadow on hover.
- **Do** keep every corner at 0 radius — buttons, cards, inputs, avatars, images, badges alike.
- **Do** set machine-produced text (dates, counts, reading time, tags, badges) in uppercase JetBrains Mono at 0.75rem/700.
- **Do** pair every accent colour with a text label; colour reinforces meaning, it never carries it alone.
- **Do** set ink on accent, never accent on accent, and keep the pairing at or above 4.5:1.
- **Do** use the 1180px shell and `SectionContainer` for page structure, and the 720px measure for article body.
- **Do** report states through a console readout — a named signal tag plus the machine values — and keep the reader's own data in its original case.

### Don't:
- **Don't** introduce muted or low-contrast palettes — the confirmed rejection for this system. Calm comes from order and legibility, not desaturation.
- **Don't** add blur to any shadow, or use a diffuse drop shadow in place of an offset one.
- **Don't** round a corner, even by 2px, on any component.
- **Don't** use gradients as fills. (The only gradient in the codebase is the unused `.card::before` hover border sweep, which is dead CSS and not part of the system.)
- **Don't** lift an element on hover; hover presses toward the shadow, it never floats.
- **Don't** use Alert Magenta as general decoration — it is the action colour and stays rationed.
- **Don't** set body copy in Space Grotesk or headings in JetBrains Mono; the three families have fixed roles.
