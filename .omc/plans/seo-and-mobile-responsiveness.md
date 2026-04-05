# Plan: SEO Meta Tags & Mobile Responsiveness

**Date:** 2026-04-05
**Scope:** SEO metadata across all public pages + mobile CSS fixes for broken layouts
**Estimated complexity:** MEDIUM
**Files touched:** ~10 files (1 CSS, ~9 page files)

---

## Context

The DevilOfTech site currently has:
- A basic `metadata` export in `src/app/layout.tsx` with title, description, and keywords -- but NO title template, NO Open Graph tags, NO Twitter card.
- Static `metadata` on some pages (about, projects, skills, experience, achievements, contact) with only a `title` field.
- `generateMetadata` on `projects/[slug]/page.tsx` returning only title.
- Blog post page (`blog/[slug]/page.tsx`) and videos page have NO metadata export at all.
- Blog listing page and news/resources pages have NO metadata.
- The about page hero uses an inline `gridTemplateColumns: '1fr 400px'` that is NOT covered by the existing `.about-hero-grid` media query (the class exists in CSS with a responsive rule, but the page uses an inline style instead of the class).
- The homepage "latest video" grid uses inline `gridTemplateColumns: '1fr 340px'` with a `.latest-video-grid` class; the CSS has a media query for this class but it uses `!important` to override the inline style.
- The project detail page (`projects/[slug]/page.tsx`) has an inline `gridTemplateColumns: '1fr 340px'` with NO responsive handling at all.
- No `public/` directory exists yet (needed for static OG image).

---

## Work Objectives

### Part 1: SEO Meta Tags
### Part 2: Mobile Responsiveness Fixes

---

## Guardrails

**Must Have:**
- All public pages must have proper title, description, OG, and Twitter meta tags
- All fixed-width grid layouts must collapse to single column on mobile
- Use Next.js `metadata` / `generateMetadata` APIs (static export for static pages, async function for dynamic pages)
- Use a static OG image fallback (no image generation library)

**Must NOT Have:**
- No new npm dependencies
- No changes to admin pages (desktop-only is acceptable)
- No changes to data models or API routes
- No `next/og` or `@vercel/og` image generation

---

## Task Flow

### Step 1: Create static OG image and public directory (Priority: HIGH)

**Files:**
- Create `public/og-default.png` (1200x630 branded image -- dark background with DevilOfTech logo/text and tagline)

**Acceptance criteria:**
- `public/og-default.png` exists at 1200x630 resolution
- The image is a simple branded card (can be created manually or as a placeholder)

> **Note to executor:** Create a simple placeholder PNG. The brand owner can replace it later with a designed asset. A solid dark background (#100c08) with "DevilOfTech" text in gold/ember is sufficient.

---

### Step 2: Root layout -- title template + OG + Twitter defaults (Priority: HIGH)

**File:** `src/app/layout.tsx`

**Changes to the `metadata` export:**
```
export const metadata: Metadata = {
  metadataBase: new URL('https://deviloftech.com'),   // <-- SET TO ACTUAL DOMAIN
  title: {
    default: 'DevilOfTech -- Tech, AI & Coding',
    template: '%s | DevilOfTech',
  },
  description: 'Your go-to source for tech news, AI insights, and coding knowledge. Videos, articles, and curated resources from DevilOfTech.',
  keywords: ['tech', 'AI', 'coding', 'youtube', 'deviloftech', 'software engineering'],
  openGraph: {
    type: 'website',
    siteName: 'DevilOfTech',
    locale: 'en_US',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'DevilOfTech -- Tech, AI & Coding' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-default.png'],
  },
  robots: { index: true, follow: true },
}
```

**Acceptance criteria:**
- `metadataBase` is set (executor should confirm actual production domain or use a placeholder)
- Title uses template format so child pages render as "Page Title | DevilOfTech"
- OG image, type, siteName, locale are set
- Twitter card is `summary_large_image` with fallback image
- All existing child pages that export `metadata = { title: 'About -- DevilOfTech' }` can be simplified to just `title: 'About'` since the template appends "| DevilOfTech"

---

### Step 3: Add metadata to all static public pages (Priority: MEDIUM)

For each page below, update or add a static `metadata` export with `title` and `description`. The title template from the root layout will append "| DevilOfTech" automatically.

| File | title | description |
|---|---|---|
| `src/app/about/page.tsx` | `'About'` | `'Meet Abhishek -- senior software engineer and tech content creator behind DevilOfTech.'` |
| `src/app/projects/page.tsx` | `'Projects'` | `'Open-source projects and production systems built by DevilOfTech.'` |
| `src/app/experience/page.tsx` | `'Experience'` | `'Professional experience and career timeline of the engineer behind DevilOfTech.'` |
| `src/app/skills/page.tsx` | `'Skills'` | `'Technical skills and tools used by DevilOfTech -- from React and Node to AI and cloud.'` |
| `src/app/achievements/page.tsx` | `'Achievements'` | `'Key milestones and accomplishments from the DevilOfTech journey.'` |
| `src/app/contact/page.tsx` | `'Contact'` | `'Get in touch with DevilOfTech for collaborations, questions, or just to say hello.'` |
| `src/app/blog/page.tsx` | `'Blog'` | `'Articles on AI, coding tutorials, tech news, and software engineering insights.'` |
| `src/app/videos/page.tsx` | `'Videos'` | `'Watch DevilOfTech videos -- deep dives, tutorials, and tech news breakdowns.'` |
| `src/app/news/page.tsx` | `'News'` | `'Curated tech and AI news with commentary from DevilOfTech.'` |
| `src/app/resources/page.tsx` | `'Resources'` | `'Curated tools, courses, and libraries recommended by DevilOfTech.'` |

**Acceptance criteria:**
- Every public (non-admin) page has both `title` and `description` in its metadata export
- Title values do NOT include "-- DevilOfTech" suffix (the template handles it)
- Page titles render in browser tab as "About | DevilOfTech", "Blog | DevilOfTech", etc.

---

### Step 4: Dynamic metadata for blog posts and project detail (Priority: HIGH)

**File:** `src/app/blog/[slug]/page.tsx`

Add a `generateMetadata` function:
- Title: `post.title` (template will append "| DevilOfTech")
- Description: `post.excerpt` (truncated to ~160 chars)
- OG image: `post.thumbnail` if it exists, otherwise falls back to root default `/og-default.png`
- OG type: `'article'`
- Include `article:published_time` from `post.publishedAt`
- Include `article:tag` from `post.tags`

**File:** `src/app/projects/[slug]/page.tsx`

Expand existing `generateMetadata`:
- Add `description: project.description` (truncated to ~160 chars)
- Add `openGraph.images` using project's first image from `project.images[]` if available, else default

**Acceptance criteria:**
- Blog post shares on social media show the post title, excerpt, and thumbnail
- Project detail shares show project name and description
- Pages with no thumbnail/image gracefully fall back to the default OG image
- The `generateMetadata` function handles the `notFound` case (return minimal metadata when post/project is null)

---

### Step 5: Fix about page hero -- use CSS class instead of inline grid (Priority: HIGH)

**Problem:** The about page hero at `src/app/about/page.tsx` line 39 uses an inline style `gridTemplateColumns: '1fr 400px'` which cannot be overridden by the existing `.about-hero-grid` media query in globals.css.

**File:** `src/app/about/page.tsx`

**Change:** Replace the inline grid div:
```
// FROM (line 39):
<div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 72, alignItems: 'center' }}>

// TO:
<div className="about-hero-grid">
```

The CSS class `.about-hero-grid` already exists in globals.css (lines 751-765) with:
- `grid-template-columns: 1fr 400px; gap: 72px; align-items: center;`
- A `@media (max-width: 900px)` rule that collapses to `1fr` and centers the photo at `max-width: 320px`

Also add the `photo-col` class to the photo wrapper div (the right column `<RevealWrapper>` around the photo) so the existing `.about-hero-grid .photo-col` CSS rule applies.

**Acceptance criteria:**
- About page hero stacks vertically on screens under 900px
- Photo column centers at max 320px width on mobile
- Desktop layout unchanged (1fr 400px grid with 72px gap)

---

### Step 6: Fix project detail page -- add responsive grid (Priority: HIGH)

**Problem:** `src/app/projects/[slug]/page.tsx` line 71 uses inline `gridTemplateColumns: '1fr 340px'` with no responsive handling. This creates horizontal overflow on mobile.

**File:** `src/app/globals.css`

**Add a new class and media query:**
```css
/* PROJECT DETAIL BODY GRID */
.project-detail-grid {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 60px;
  align-items: start;
}
@media (max-width: 900px) {
  .project-detail-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
```

**File:** `src/app/projects/[slug]/page.tsx`

**Change:** Replace the inline grid div at line 71:
```
// FROM:
<div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 60, alignItems: 'start' }}>

// TO:
<div className="project-detail-grid">
```

**Acceptance criteria:**
- Project detail page stacks description above stats on screens under 900px
- No horizontal scrollbar on mobile
- Desktop layout unchanged

---

### Step 7: Audit remaining inline grids for mobile safety (Priority: LOW)

**Already handled by existing CSS:**
- Homepage `latest-video-grid` (line 96 in page.tsx): Already has `@media (max-width: 900px)` rule in globals.css line 781-783 using `!important` to override inline style. This works but is fragile. **Recommended:** Same pattern as Step 5 -- move inline styles to the `.latest-video-grid` class in CSS and remove inline `style` attribute. Not critical since the `!important` override works.

**Safe as-is (auto-fill/minmax patterns):**
- Homepage blog posts grid: `repeat(auto-fill, minmax(300px, 1fr))` -- auto-responsive, no fix needed
- About page detail cards: `repeat(auto-fill, minmax(260px, 1fr))` -- auto-responsive, no fix needed

**Admin pages -- no action needed:**
- Admin grids all use `auto-fill`/`minmax` patterns and admin is desktop-only

**Acceptance criteria:**
- (Optional) If executor chooses to refactor `latest-video-grid` to use class instead of inline+`!important`, test that the video section still collapses to single column on mobile
- All public-facing pages verified to have no horizontal overflow at 375px viewport width

---

## Success Criteria

1. Every public page has proper `<title>` (via template), `<meta name="description">`, and Open Graph tags when inspected in browser dev tools
2. Sharing any page URL on Twitter/LinkedIn/Facebook shows: branded title, description, and OG image
3. Blog post shares show the post-specific title, excerpt, and thumbnail
4. About page hero stacks vertically on mobile (test at 375px width)
5. Project detail page stacks vertically on mobile (test at 375px width)
6. No horizontal scrollbar on any public page at 375px viewport width
7. All existing desktop layouts remain unchanged

---

## Priority Order for Implementation

1. **Step 1** -- Create public/og-default.png (blocker for OG tags)
2. **Step 2** -- Root layout metadata (highest SEO impact, enables all child pages)
3. **Step 5** -- About page hero mobile fix (most visible breakage)
4. **Step 6** -- Project detail mobile fix (second most visible breakage)
5. **Step 4** -- Dynamic metadata for blog/project detail (high SEO value)
6. **Step 3** -- Static page metadata (completeness)
7. **Step 7** -- Optional cleanup of latest-video-grid inline styles
