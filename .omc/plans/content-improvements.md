# Content Improvements Plan

**Date:** 2026-04-05
**Scope:** 3 features across ~10 files
**Estimated complexity:** MEDIUM

---

## Context

The deviloftech site is a Next.js 16 + MongoDB content brand site with an admin dashboard. Blog post content is currently stored as plain text and rendered with `white-space: pre-wrap`. Thumbnails are text-input-only (paste a URL). The admin dashboard shows counts but no recent items.

### Key Files Investigated

| File | Role |
|------|------|
| `src/app/blog/[slug]/page.tsx` | Public blog post renderer (server component) |
| `src/app/admin/posts/new/page.tsx` | New post form (client component) |
| `src/app/admin/posts/[id]/page.tsx` | Edit post form (client component) |
| `src/app/admin/page.tsx` | Admin dashboard (client component) |
| `src/app/api/admin/upload/route.ts` | Existing file upload endpoint (saves to `public/uploads/`) |
| `src/app/api/admin/posts/route.ts` | Posts API (GET returns all, sorted by `createdAt: -1`) |
| `src/app/api/admin/videos/route.ts` | Videos API (GET returns all, sorted by `publishedAt: -1`) |
| `src/app/api/admin/news/route.ts` | News API (GET returns all, sorted by `publishedAt: -1`) |
| `src/app/api/admin/resources/route.ts` | Resources API (GET returns all, sorted by `sortOrder: 1, createdAt: -1`) |
| `src/components/admin/AdminForm.tsx` | Shared admin form components |
| `src/lib/models/BlogPost.ts` | Mongoose schema (content is `String`) |
| `src/types/index.ts` | TypeScript interfaces |

---

## Work Objective 1: Markdown Support in Blog Posts

### Guardrails

- **Must have:** Render markdown (headings, bold, italic, links, code blocks, lists, images, blockquotes) on the public blog page.
- **Must have:** Sanitize HTML output to prevent XSS.
- **Must NOT have:** A rich-text / WYSIWYG editor in admin. Keep the plain `<AdminTextarea>`.
- **Must NOT have:** Database schema changes. Content field stays as `String`; it just holds markdown now instead of plain text.

### npm Packages to Install

| Package | Purpose | Size |
|---------|---------|------|
| `react-markdown` | Render markdown as React components | ~12KB gzipped |
| `remark-gfm` | GitHub Flavored Markdown (tables, strikethrough, task lists) | ~3KB gzipped |

No sanitization library needed -- `react-markdown` uses an AST-based renderer (not `dangerouslySetInnerHTML`) and is safe by default.

### Task Flow

**Step 1: Install packages**

```
npm install react-markdown remark-gfm
```

**Step 2: Create a `MarkdownRenderer` client component**

- **Create:** `src/components/blog/MarkdownRenderer.tsx`
- This is a `'use client'` component that wraps `<ReactMarkdown>` with the `remark-gfm` plugin.
- Apply the site's existing design tokens for typography:
  - Headings: `var(--cinzel)` font, `var(--parchment)` color, appropriate sizes
  - Body text: `var(--serif)`, 17px, line-height 1.85
  - Code blocks: `var(--mono)` font, `rgba(44,36,32,0.5)` background, `var(--gold)` text, border matching site aesthetic
  - Inline code: same mono font, subtle ember/gold background
  - Links: `var(--gold)` color with hover underline
  - Blockquotes: left border in `var(--ember)`, italic, dimmed text
  - Lists: proper indentation, `var(--parchment)` bullets/numbers
  - Tables (via remark-gfm): bordered with gold-tinted borders, mono header font
  - Images: max-width 100%, rounded corners, border matching thumbnail style
- Keep it simple: use inline styles consistent with the rest of the site (the codebase uses inline styles, not Tailwind utility classes for content).

**Step 3: Update the public blog post page**

- **Modify:** `src/app/blog/[slug]/page.tsx`
- Replace the content `<div>` (line 67-69) that currently renders `{post.content}` with `white-space: pre-wrap`.
- Change it to: render `<MarkdownRenderer content={post.content} />` instead.
- Remove the `whiteSpace: 'pre-wrap'` style from that div.
- Keep all surrounding styles (font-family, font-size on the wrapper) as fallback context.

**Step 4: Add a helper hint to the admin textarea**

- **Modify:** `src/app/admin/posts/new/page.tsx` and `src/app/admin/posts/[id]/page.tsx`
- Change the Content field label from `"Content"` to `"Content (Markdown supported)"`.
- Change the placeholder from `"Full post content..."` to `"Write in Markdown... # Heading, **bold**, *italic*, \`code\`, [link](url)"`.
- No other admin changes needed.

### Acceptance Criteria

- [ ] A blog post with markdown content (headings, bold, code blocks, links, lists) renders correctly on the public page.
- [ ] Plain text posts (no markdown) still display correctly (markdown is a superset of plain text).
- [ ] No XSS possible via markdown content.
- [ ] Admin textarea still works as a plain text editor with no behavior change.
- [ ] Code blocks render with monospace font and distinct background.

### Gotchas

- `react-markdown` requires a client component (`'use client'`) because it uses React hooks internally. The blog post page itself is a server component, so `MarkdownRenderer` must be a separate client component imported into it.
- Existing posts with plain text will render fine since markdown treats plain text as paragraphs. The only visual change: line breaks within a paragraph may collapse (markdown requires double newline for paragraph breaks). If this is a problem, consider adding `remark-breaks` plugin -- but only if real content breaks.

---

## Work Objective 2: Thumbnail Upload for Blog Posts

### Guardrails

- **Must have:** Upload button next to the thumbnail URL input that uploads via existing `/api/admin/upload` endpoint.
- **Must have:** Preview of selected/uploaded thumbnail image.
- **Must NOT have:** New API endpoint. Reuse existing upload route.
- **Must NOT have:** Changes to the BlogPost schema. The `thumbnail` field stays as a plain string URL.

### npm Packages to Install

None. Uses existing `fetch` + `FormData` APIs.

### Task Flow

**Step 1: Create a reusable `ThumbnailUpload` component**

- **Create:** `src/components/admin/ThumbnailUpload.tsx`
- `'use client'` component.
- Props: `value: string` (current thumbnail URL), `onChange: (url: string) => void`.
- Layout (vertical stack):
  1. **Preview area:** If `value` is non-empty, show the image at max-height 200px with rounded corners and the site's gold-tinted border. If empty, show a dashed-border placeholder box with "No thumbnail" text.
  2. **Controls row** (horizontal flex, gap 12):
     - **Upload button:** Styled as `btn-ghost`. Label: "Upload Image". Triggers a hidden `<input type="file" accept="image/*">`.
     - **URL input:** The existing `AdminInput` for manual URL entry (keep this as fallback).
  3. **Upload state:** Show "Uploading..." text while the fetch is in progress. Show error text (styled like existing form errors) if upload fails.
- Upload logic:
  - On file select, create `FormData`, append the file, POST to `/api/admin/upload`.
  - On success, call `onChange(response.url)` to set the thumbnail field.
  - On error, show the error message from the response.

**Step 2: Replace thumbnail field in new post form**

- **Modify:** `src/app/admin/posts/new/page.tsx`
- Import `ThumbnailUpload` from `@/components/admin/ThumbnailUpload`.
- Replace the current `AdminField label="Thumbnail URL"` + `AdminInput` block (line 66-68) with:
  ```
  <AdminField label="Thumbnail">
    <ThumbnailUpload value={form.thumbnail} onChange={v => set('thumbnail', v)} />
  </AdminField>
  ```

**Step 3: Replace thumbnail field in edit post form**

- **Modify:** `src/app/admin/posts/[id]/page.tsx`
- Same change as Step 2: replace the `AdminField label="Thumbnail URL"` + `AdminInput` block (line 73-75) with the `ThumbnailUpload` component.

### Acceptance Criteria

- [ ] Clicking "Upload Image" opens a file picker filtered to images.
- [ ] Selecting a valid image uploads it and shows a preview.
- [ ] The uploaded URL is saved to the post's `thumbnail` field on form submit.
- [ ] Manual URL entry still works (paste a URL, see preview).
- [ ] Upload errors (wrong type, too large) display clearly.
- [ ] Preview updates immediately after successful upload.

### Gotchas

- The upload endpoint returns `{ url: "/uploads/filename.ext" }` -- a relative path. This works fine since both admin and public pages are on the same origin.
- Max file size is 5MB (enforced server-side). Consider adding a client-side check too for faster feedback.
- Allowed types: JPG, PNG, WEBP, GIF (enforced server-side). The `accept="image/*"` attribute on the file input provides a first filter.

---

## Work Objective 3: Dashboard Improvements

### Guardrails

- **Must have:** Show the 3 most recent items from each content type.
- **Must have:** Quick-add links for each content type (these already exist -- keep them).
- **Must have:** Keep existing total counts.
- **Must NOT have:** New API routes. Add a `?limit=N` query param to existing GET endpoints.
- **Must NOT have:** Complex pagination or infinite scroll.

### npm Packages to Install

None.

### Task Flow

**Step 1: Add `?limit` query param support to all 4 admin API GET endpoints**

- **Modify:** `src/app/api/admin/posts/route.ts`
- **Modify:** `src/app/api/admin/videos/route.ts`
- **Modify:** `src/app/api/admin/news/route.ts`
- **Modify:** `src/app/api/admin/resources/route.ts`

For each, update the `GET` handler:
- Accept `NextRequest` parameter (posts route already has it in POST; add it to GET signature).
- Parse `url.searchParams.get('limit')`.
- If `limit` is provided and is a valid positive integer, apply `.limit(Number(limit))` to the Mongoose query.
- If no limit param, return all items as before (backward compatible).

Example pattern for each:
```
export async function GET(req: NextRequest) {
  await connectDB()
  const limit = req.nextUrl.searchParams.get('limit')
  let query = Model.find({}).sort({ ... })
  if (limit && Number(limit) > 0) query = query.limit(Number(limit))
  const items = await query.lean()
  return NextResponse.json(JSON.parse(JSON.stringify(items)))
}
```

**Step 2: Add a new `/api/admin/dashboard` endpoint**

- **Create:** `src/app/api/admin/dashboard/route.ts`
- Single GET endpoint that fetches counts + recent 3 items from all 4 collections in parallel.
- Returns shape:
  ```
  {
    posts:     { count: number, recent: IBlogPost[] },
    videos:    { count: number, recent: IVideo[] },
    news:      { count: number, recent: INewsItem[] },
    resources: { count: number, recent: IResource[] }
  }
  ```
- Uses `Promise.all` with `countDocuments()` and `find().sort().limit(3).lean()` for each collection.
- This replaces the 4 separate API calls the dashboard currently makes, reducing to 1 round trip.

**Step 3: Rewrite the admin dashboard to show recent items**

- **Modify:** `src/app/admin/page.tsx`
- Replace the current 4x `fetch` calls with a single `fetch('/api/admin/dashboard')`.
- Keep the existing count tiles at the top (same layout, same styling).
- Below the count tiles and above the quick-add buttons, add a "Recent Activity" section:
  - Section header: "RECENT ACTIVITY" in mono/eyebrow style.
  - 4 columns (or 2x2 on smaller screens) using CSS grid, one per content type.
  - Each column:
    - Column header: content type name (e.g., "BLOG POSTS") in mono, with the type's color accent.
    - List of up to 3 recent items, each showing:
      - **Posts:** title, category badge, date, published status dot
      - **Videos:** title, category, date
      - **News:** headline, source name, date
      - **Resources:** name, category, free/paid badge
    - Each item links to its edit page (e.g., `/admin/posts/{_id}`).
    - "View all" link at bottom of each column linking to the list page (e.g., `/admin/posts`).
  - Style items with the same dark card aesthetic used by the count tiles: `rgba(44,36,32,0.5)` background, gold-tinted borders, mono labels.
- Keep the existing quick-add buttons at the bottom.

### Acceptance Criteria

- [ ] Dashboard loads with a single API call instead of 4.
- [ ] Count tiles still show correct totals.
- [ ] Each content type shows its 3 most recent items with title/headline, date, and category.
- [ ] Each recent item links to its edit page.
- [ ] "View all" links go to the correct list pages.
- [ ] Quick-add buttons remain at the bottom.
- [ ] The `?limit` param on individual API routes works correctly (returns limited results when set, all results when omitted).
- [ ] Empty state: if a content type has 0 items, the column shows "No items yet" instead of an empty list.

### Gotchas

- The dashboard currently fetches ALL items just to count them (e.g., `posts.length`). The new `/api/admin/dashboard` endpoint uses `countDocuments()` which is much more efficient.
- The `?limit` param addition to existing routes is a non-breaking change -- existing callers that don't pass it get the same behavior.
- Resources sort by `sortOrder: 1, createdAt: -1` (not purely by date). The "recent 3" for resources should use `createdAt: -1` sort instead for the dashboard to show genuinely recent items.

---

## Files Summary

### New Files (3)

| File | Purpose |
|------|---------|
| `src/components/blog/MarkdownRenderer.tsx` | Client component wrapping react-markdown with site styles |
| `src/components/admin/ThumbnailUpload.tsx` | Client component for image upload + preview |
| `src/app/api/admin/dashboard/route.ts` | Aggregated dashboard data endpoint |

### Modified Files (7)

| File | Change |
|------|--------|
| `src/app/blog/[slug]/page.tsx` | Replace pre-wrap text with MarkdownRenderer |
| `src/app/admin/posts/new/page.tsx` | Swap thumbnail input for ThumbnailUpload; update content label/placeholder |
| `src/app/admin/posts/[id]/page.tsx` | Swap thumbnail input for ThumbnailUpload; update content label/placeholder |
| `src/app/admin/page.tsx` | Rewrite to use dashboard endpoint, add recent items section |
| `src/app/api/admin/posts/route.ts` | Add ?limit query param to GET |
| `src/app/api/admin/videos/route.ts` | Add ?limit query param to GET |
| `src/app/api/admin/news/route.ts` | Add ?limit query param to GET |
| `src/app/api/admin/resources/route.ts` | Add ?limit query param to GET |

### npm Install

```
npm install react-markdown remark-gfm
```

---

## Recommended Execution Order

1. **Markdown support** (Objective 1) -- standalone, no dependencies on other work.
2. **Thumbnail upload** (Objective 2) -- standalone, no dependencies on other work.
3. **Dashboard improvements** (Objective 3) -- standalone, but best done last since it touches the most files.

All three can also be executed in parallel by different agents since they touch different files (no conflicts except both Objectives 1 and 2 modify the new/edit post forms -- coordinate the label changes).

---

## Success Criteria

- Blog posts with markdown content render with proper formatting (headings, code blocks, links, lists, images).
- Thumbnail upload works end-to-end: pick file, upload, see preview, save post, see thumbnail on public page.
- Admin dashboard shows counts + 3 recent items per type in a single API call.
- No regressions: existing plain-text posts display correctly, manual thumbnail URL entry still works, quick-add buttons remain functional.
