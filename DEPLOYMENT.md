---
title: Deployment Guide
tags:
  - deployment
  - vercel
  - cloudflare
---

# Deployment Guide

This document covers deploying the deviloftech Next.js 16 site to Vercel with Cloudflare R2 for persistent file storage.

## Prerequisites

- Vercel account (free tier works)
- MongoDB Atlas cluster (free M0 works)
- Cloudflare account with R2 enabled (free tier: 10 GB storage, 10M reads/month)

---

## Step 1: Set Up Cloudflare R2 Bucket

> [!tip] Free Tier
> R2 has a generous free tier: 10 GB storage, 10 million Class B (read) operations, and 1 million Class A (write) operations per month — no egress fees.

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com)
2. Navigate to **R2 Object Storage** in the left sidebar
3. Click **Create bucket** and name it `deviloftech-uploads`
4. After creation, go to **Settings** > **Public access** > enable **Allow Access**
   - This gives you a public URL in the format `https://pub-xxxx.r2.dev`
   - Optionally connect a custom subdomain (e.g. `cdn.deviloftech.com`) if your domain is on Cloudflare
5. Create an R2 API token:
   - Go to **R2** > **Manage R2 API tokens** > **Create API token**
   - Set permissions: **Object Read & Write**
   - Scope to the `deviloftech-uploads` bucket
   - Save the **Access Key ID** and **Secret Access Key** — they are shown only once
6. Note your **Cloudflare Account ID** (visible in the right sidebar of any Cloudflare dashboard page)

---

## Step 2: Set Up MongoDB Atlas

> [!warning] Network Access Required
> Vercel serverless functions use dynamic IPs. You must allow connections from anywhere.

1. Create a free **M0** cluster on [MongoDB Atlas](https://cloud.mongodb.com) if you don't have one
2. Go to **Network Access** > **Add IP Address** > enter `0.0.0.0/0` (allow from anywhere)
3. Go to **Database Access** > create a user with **readWrite** permissions on your database
4. Go to **Clusters** > **Connect** > **Drivers** and copy the connection string
   - Replace `<password>` with your database user's password
   - Replace `myFirstDatabase` with `deviloftech`
   - Example: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/deviloftech`

---

## Step 3: Deploy to Vercel

### Connect the Repository

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework preset will be auto-detected as **Next.js**
4. Leave build settings as defaults:
   - Build command: `npm run build`
   - Output directory: `.next`
   - Install command: `npm install`

### Configure Environment Variables

In **Vercel** > **Project Settings** > **Environment Variables**, add all of the following:

| Variable | Value | Notes |
|---|---|---|
| `MONGODB_URI` | `mongodb+srv://...` | From Atlas connection string |
| `ADMIN_PASSWORD` | *(strong unique password)* | Do NOT use the default |
| `RESEND_API_KEY` | `re_xxxxxxxxxxxx` | Optional — contact form emails |
| `CONTACT_EMAIL_TO` | `you@example.com` | Optional — contact form recipient |
| `R2_ACCOUNT_ID` | Your Cloudflare Account ID | From Cloudflare dashboard sidebar |
| `R2_ACCESS_KEY_ID` | From Step 1 | R2 API token access key |
| `R2_SECRET_ACCESS_KEY` | From Step 1 | R2 API token secret key |
| `R2_BUCKET_NAME` | `deviloftech-uploads` | Must match bucket name exactly |
| `NEXT_PUBLIC_R2_PUBLIC_URL` | `https://pub-xxxx.r2.dev` | Public URL from R2 bucket settings |
| `NEXT_PUBLIC_APP_URL` | `https://deviloftech.com` | Your production domain |

> [!warning] Security
> `ADMIN_PASSWORD` defaults to `deviloftech-admin` if unset — this is insecure. Always set a strong password in production.

### Deploy

Click **Deploy**. Vercel will build and deploy automatically. Subsequent pushes to `main` will trigger automatic redeployments.

---

## Step 4: Custom Domain (Optional)

1. In Vercel project settings, go to **Domains**
2. Add your domain (e.g. `deviloftech.com`)
3. Follow Vercel's DNS instructions (add CNAME or A records at your DNS provider)
4. SSL is provisioned automatically

---

## Local Development

Copy `.env.example` to `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

For local development, R2 env vars can be left blank. The upload route will fall back to saving files in `public/uploads/` locally.

---

## Environment Variables Reference

See `.env.example` at the project root for a full list with placeholder values.
