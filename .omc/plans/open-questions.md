# Open Questions

## vercel-deployment - 2026-04-05
- [ ] Do you have a MongoDB Atlas cluster already, or does one need to be created? -- Vercel cannot reach localhost MongoDB
- [ ] Do you have a custom domain for R2 (e.g. `cdn.deviloftech.com`) or will the default `pub-xxx.r2.dev` URL suffice? -- Affects the `R2_PUBLIC_URL` value and image URLs stored in MongoDB
- [ ] Are there any existing uploaded images in `public/uploads/` that need migration to R2? -- If yes, they must be manually re-uploaded before the old relative paths stop working
- [ ] Should the admin auth be hardened (JWT/session token instead of raw password in cookie) before going live, or is the current pattern acceptable for a personal brand site? -- Security tradeoff vs. scope creep
- [ ] Is Resend already set up with a verified domain, or should contact email be deferred to post-launch? -- Optional feature, can be enabled later by adding env vars

## Content Improvements - 2026-04-05
- [ ] Existing plain-text posts with single line breaks: markdown collapses single `\n` into spaces (requires `\n\n` for paragraph breaks). If existing posts rely on single line breaks for formatting, the `remark-breaks` plugin should be added. -- Affects visual fidelity of legacy content.
- [ ] Should the MarkdownRenderer support syntax highlighting in code blocks (e.g., via `rehype-highlight` or `rehype-prism-plus`)? This adds ~5-15KB but makes code-heavy tutorial posts much more readable. -- Affects developer audience experience.
- [ ] Resources "recent 3" sort: the dashboard plan recommends `createdAt: -1` for recency, but the resources list page uses `sortOrder: 1, createdAt: -1`. Should the dashboard match the list page sort or prioritize recency? -- Affects what "recent" means for resources.

## SEO and Mobile Responsiveness - 2026-04-05
- [ ] What is the production domain for `metadataBase`? (e.g., `https://deviloftech.com` or a Vercel preview URL) -- Required for OG image absolute URLs to resolve correctly. Using `https://deviloftech.com` as placeholder.
- [ ] Should the static OG image (`og-default.png`) be a simple text-on-dark placeholder, or does the brand owner want to provide a designed asset before launch? -- Affects whether executor creates a quick placeholder or waits.
- [ ] The homepage latest-video-grid uses inline styles overridden by `!important` in CSS. Should this be refactored to match the class-based pattern (like the about-hero-grid fix), or is the current `!important` approach acceptable? -- Low priority but affects code consistency.
- [ ] Are there any additional social media handles (Twitter/X) that should be included in the Twitter card metadata (`twitter:site`, `twitter:creator`)? -- Would improve Twitter card attribution.
