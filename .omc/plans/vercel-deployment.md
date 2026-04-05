# Vercel Deployment + Persistent File Uploads Plan

**Date:** 2026-04-05
**Scope:** Deploy deviloftech Next.js 16 site to Vercel with Cloudflare R2 for file storage
**Complexity:** MEDIUM (3 files to change, 1 new file, infrastructure setup)

---

## Context

The site is a Next.js 16.2.2 portfolio/brand site with:
- MongoDB (via Mongoose) for data storage
- Admin panel protected by `proxy.ts` (Next.js 16 middleware) + cookie-based auth
- Single file upload endpoint at `src/app/api/admin/upload/route.ts` using `fs/promises` writeFile to `public/uploads/`
- Contact form emails via Resend
- Four MongoDB models store image URLs as strings: `Profile.photo`, `BlogPost.thumbnail`, `Video.thumbnail`, `Project.images[]`
- Only the admin profile page uses the upload API; other image fields accept pasted URLs

### Critical Issue

The current upload approach writes files to `public/uploads/` on the local filesystem. Vercel serverless functions have an ephemeral, read-only filesystem -- uploaded files will be lost on every deployment and between function invocations. This MUST be replaced before deployment.

---

## Environment Variables (Complete Inventory)

| Variable | Source File | Required | Description |
|---|---|---|---|
| `MONGODB_URI` | `src/lib/mongodb.ts` | YES | MongoDB Atlas connection string (defaults to localhost) |
| `ADMIN_PASSWORD` | `src/proxy.ts`, `src/app/api/admin/login/route.ts` | YES | Admin panel password (defaults to `deviloftech-admin` -- INSECURE) |
| `RESEND_API_KEY` | `src/app/api/contact/route.ts` | Optional | Resend email API key for contact form notifications |
| `CONTACT_EMAIL_TO` | `src/app/api/contact/route.ts` | Optional | Recipient email for contact form submissions |
| `R2_ACCESS_KEY_ID` | NEW -- upload route | YES | Cloudflare R2 S3-compatible access key |
| `R2_SECRET_ACCESS_KEY` | NEW -- upload route | YES | Cloudflare R2 secret key |
| `R2_ENDPOINT` | NEW -- upload route | YES | R2 endpoint URL (e.g. `https://<account_id>.r2.cloudflarestorage.com`) |
| `R2_BUCKET_NAME` | NEW -- upload route | YES | R2 bucket name (e.g. `deviloftech-uploads`) |
| `R2_PUBLIC_URL` | NEW -- upload route | YES | Public URL base for serving files (e.g. `https://cdn.deviloftech.com` or `https://pub-xxx.r2.dev`) |

---

## Step 1: Set Up Cloudflare R2 Bucket

**What:** Create an R2 bucket and configure public access.

**Tasks:**
1. In Cloudflare dashboard (or via MCP tool `r2_bucket_create`), create bucket named `deviloftech-uploads`
2. Enable public access on the bucket (R2 Settings > Public Access > Allow Access)
   - This gives you a `pub-xxx.r2.dev` public URL, OR
   - Connect a custom subdomain like `cdn.deviloftech.com` if you have the domain on Cloudflare
3. Create an R2 API token with Object Read & Write permissions scoped to the `deviloftech-uploads` bucket
   - This generates `Access Key ID` and `Secret Access Key`
4. Note down the S3 endpoint: `https://<cloudflare_account_id>.r2.cloudflarestorage.com`

**Acceptance Criteria:**
- Bucket exists and is publicly readable
- You have `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_ENDPOINT`, and the public URL

---

## Step 2: Rewrite Upload Route to Use R2

**What:** Replace `fs/promises` writeFile with S3-compatible PUT to Cloudflare R2.

**File:** `src/app/api/admin/upload/route.ts`

**Tasks:**
1. Install the AWS S3 SDK (lightweight): `npm install @aws-sdk/client-s3`
2. Rewrite the upload route:
   - Remove `fs/promises` and `path` imports
   - Create an `S3Client` configured with R2 credentials from env vars
   - Use `PutObjectCommand` to upload the buffer to R2 with the generated filename
   - Set `ContentType` from the file's MIME type
   - Return the full public URL: `${process.env.R2_PUBLIC_URL}/${filename}`
3. Keep existing validation logic (allowed types, 5MB size limit, filename generation) unchanged
4. The response shape changes from `{ url: "/uploads/filename.jpg" }` to `{ url: "https://cdn.deviloftech.com/filename.jpg" }`

**Impact on consumers:** The admin profile page (`src/app/admin/profile/page.tsx`) uses `data.url` from the response and stores it in MongoDB. Since it already stores the full string, switching from a relative path to an absolute URL works seamlessly -- the `<img src={form.photo}>` tags will render the R2 URL. No frontend changes needed.

**Acceptance Criteria:**
- Upload route no longer imports `fs/promises`
- Uploaded files land in R2 bucket
- Response returns full R2 public URL
- Existing images already stored in MongoDB (as relative `/uploads/...` paths) will 404 -- see Step 5 for migration

---

## Step 3: Vercel Project Setup and Deployment

**What:** Configure and deploy to Vercel.

**Tasks:**
1. **Connect repo to Vercel:**
   - Link the GitHub repository via Vercel dashboard or `vercel` CLI
   - Framework preset: Next.js (auto-detected)
   - Build command: `npm run build` (default, uses `next build`)
   - Output directory: `.next` (default, auto-detected)
   - Install command: `npm install` (default)

2. **Set environment variables in Vercel dashboard** (Settings > Environment Variables):
   - `MONGODB_URI` = your MongoDB Atlas connection string (must be Atlas or other cloud-hosted MongoDB, NOT localhost)
   - `ADMIN_PASSWORD` = a strong, unique password (NOT the default `deviloftech-admin`)
   - `RESEND_API_KEY` = your Resend API key (if using contact email)
   - `CONTACT_EMAIL_TO` = recipient email address (if using contact email)
   - `R2_ACCESS_KEY_ID` = from Step 1
   - `R2_SECRET_ACCESS_KEY` = from Step 1
   - `R2_ENDPOINT` = from Step 1
   - `R2_BUCKET_NAME` = `deviloftech-uploads`
   - `R2_PUBLIC_URL` = public URL from Step 1

3. **`next.config.ts` -- no changes required.** The current config is empty/default and works fine on Vercel. No `output: 'export'` or `output: 'standalone'` needed (Vercel handles Next.js natively).

4. **MongoDB Atlas network access:** Ensure the Atlas cluster allows connections from `0.0.0.0/0` (or Vercel's IP ranges) since Vercel functions use dynamic IPs.

**Acceptance Criteria:**
- `vercel deploy` (or automatic deploy from push) completes without build errors
- Site loads at the Vercel-assigned URL
- Admin login works with the configured password
- Contact form submissions save to MongoDB Atlas

---

## Step 4: Create `.env.example` File

**What:** Document all environment variables for developer onboarding.

**File:** `.env.example` (new file at project root)

**Content to include:**
```
# MongoDB (required)
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/deviloftech

# Admin Authentication (required -- change from default!)
ADMIN_PASSWORD=change-me-to-a-strong-password

# Resend Email (optional -- contact form notifications)
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL_TO=you@example.com

# Cloudflare R2 Storage (required for file uploads)
R2_ACCESS_KEY_ID=your-r2-access-key-id
R2_SECRET_ACCESS_KEY=your-r2-secret-access-key
R2_ENDPOINT=https://your-account-id.r2.cloudflarestorage.com
R2_BUCKET_NAME=deviloftech-uploads
R2_PUBLIC_URL=https://pub-xxx.r2.dev
```

**Acceptance Criteria:**
- File exists at project root
- Every `process.env.*` reference in the codebase has a corresponding entry
- File contains no real secrets (only placeholder values)

---

## Step 5: Migrate Existing Uploaded Images (if any)

**What:** Handle any images previously uploaded to `public/uploads/` that are now referenced in MongoDB.

**Tasks:**
1. Check MongoDB for any documents with `/uploads/` paths:
   - `Profile` documents with `photo` starting with `/uploads/`
   - `BlogPost` documents with `thumbnail` starting with `/uploads/`
   - etc.
2. If such records exist:
   - Manually upload those files from `public/uploads/` to the R2 bucket (via Cloudflare dashboard or `wrangler r2 object put`)
   - Update the MongoDB documents to use the new R2 public URLs
3. If no records exist (fresh database), skip this step.
4. Optionally delete `public/uploads/` directory and add it to `.gitignore` since it is no longer used.

**Acceptance Criteria:**
- No MongoDB documents reference `/uploads/` relative paths
- All previously uploaded images are accessible via R2 public URLs
- `public/uploads/` is removed or gitignored

---

## Security Notes

- **ADMIN_PASSWORD default is insecure:** The code falls back to `deviloftech-admin` if the env var is unset. This is fine for local dev but MUST be overridden in Vercel.
- **Cookie stores the password directly:** `login/route.ts` line 12 sets the cookie value to the raw password string, and `proxy.ts` line 9 compares it directly. This is a weak auth pattern (the password travels in every request as a cookie). Acceptable for a personal brand site but worth noting for future hardening (switch to a signed JWT or random session token).
- **R2 credentials:** Store `R2_SECRET_ACCESS_KEY` only in Vercel env vars, never in code or `.env` committed to git.

---

## Alternative: Vercel Blob Instead of R2

If you want a simpler setup without Cloudflare:

1. Install `@vercel/blob` package
2. Use `put()` from `@vercel/blob` in the upload route (fewer lines of code than S3 SDK)
3. Requires `BLOB_READ_WRITE_TOKEN` env var (auto-provisioned when you add Vercel Blob storage to your project)
4. Files are served from `*.public.blob.vercel-storage.com`
5. Tradeoff: Vercel Blob has usage-based pricing; R2 has generous free tier (10GB storage, 10M reads/month free)

The R2 approach is recommended given you already have Cloudflare MCP and the free tier is more generous.

---

## Files Changed Summary

| File | Action |
|---|---|
| `src/app/api/admin/upload/route.ts` | Rewrite: replace fs/promises with @aws-sdk/client-s3 |
| `package.json` | Add dependency: `@aws-sdk/client-s3` |
| `.env.example` | New file: document all env vars |
| `.gitignore` | Add `public/uploads/` entry |
| `next.config.ts` | No changes needed |
| `src/proxy.ts` | No changes needed |
| All frontend files | No changes needed (URLs stored in MongoDB work as absolute URLs) |
