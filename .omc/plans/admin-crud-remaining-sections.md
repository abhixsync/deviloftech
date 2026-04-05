# Admin CRUD: Experience, Skills, Achievements, Education, Contact Submissions

**Date:** 2026-04-05
**Complexity:** MEDIUM
**Scope:** 5 new admin sections, ~22 new files across pages + API routes

---

## Context

The site already has working admin CRUD for Blog Posts, Videos, News, Resources, Projects, and Profile. All follow a consistent pattern:

- **List page:** `src/app/admin/{section}/page.tsx` -- 'use client', fetches from `/api/admin/{section}`, renders card list with Edit/Delete actions, "+ New" button
- **New page:** `src/app/admin/{section}/new/page.tsx` -- uses AdminFormShell + AdminField primitives, POSTs to `/api/admin/{section}`
- **Edit page:** `src/app/admin/{section}/[id]/page.tsx` -- loads via GET `/api/admin/{section}/{id}`, PUTs on save
- **API collection route:** `src/app/api/admin/{section}/route.ts` -- GET (list sorted) + POST (validate + create)
- **API item route:** `src/app/api/admin/{section}/[id]/route.ts` -- GET + PUT + DELETE, params is `Promise<{ id: string }>` (Next.js 16 async params)
- **Sidebar nav:** `navItems` array in `src/app/admin/layout.tsx`
- **Types:** interfaces in `src/types/index.ts` (already defined for all 5 models)
- **Models:** Mongoose models in `src/lib/models/*.ts` (already defined for all 5)
- **DB helper:** `connectDB()` from `@/lib/mongodb` (uses `connection()` from `next/server`)
- **JSON serialization:** all API responses use `JSON.parse(JSON.stringify(doc))` to strip Mongoose metadata

No new models, types, or shared components need to be created. This is purely replicating the existing pattern for 5 additional sections.

---

## Guardrails

**Must Have:**
- Follow the exact existing pattern (client components, same styling, same API shape)
- Use existing AdminForm primitives (AdminFormShell, AdminField, AdminInput, AdminTextarea, AdminSelect, AdminToggle)
- Use existing types from `@/types` (IExperience, ISkill, IAchievement, IEducation, IContactSubmission)
- Use existing Mongoose models from `@/lib/models/*`
- Sort lists by `sortOrder` ascending (except Contact: by `createdAt` descending)
- Validate required fields server-side before create/update

**Must NOT Have:**
- No new shared components or abstractions -- just replicate the pattern per section
- No drag-and-drop reordering -- sortOrder is a plain numeric input
- No rich text editors -- plain textarea for description fields
- No changes to existing files other than `layout.tsx` (sidebar navItems)

---

## Task Flow

### Step 1: Add sidebar nav entries

**File:** `src/app/admin/layout.tsx`

Add 5 entries to the `navItems` array (after the Profile entry):

```
{ href: '/admin/experience', label: 'Experience', icon: '💼' }
{ href: '/admin/skills', label: 'Skills', icon: '🧠' }
{ href: '/admin/achievements', label: 'Achievements', icon: '🏆' }
{ href: '/admin/education', label: 'Education', icon: '🎓' }
{ href: '/admin/contact', label: 'Messages', icon: '📬' }
```

**Acceptance:** All 5 items appear in the admin sidebar and highlight correctly when active.

---

### Step 2: Experience CRUD (standard pattern)

**Files to create (5):**

| File | Purpose |
|------|---------|
| `src/app/admin/experience/page.tsx` | List page |
| `src/app/admin/experience/new/page.tsx` | New form |
| `src/app/admin/experience/[id]/page.tsx` | Edit form |
| `src/app/api/admin/experience/route.ts` | GET list + POST |
| `src/app/api/admin/experience/[id]/route.ts` | GET + PUT + DELETE |

**Model:** `Experience` from `@/lib/models/Experience`
**Type:** `IExperience` from `@/types`

**Form fields:**

| Field | Component | Required | Notes |
|-------|-----------|----------|-------|
| period | AdminInput | yes | e.g. "2023 - Present" |
| role | AdminInput | yes | e.g. "Senior Developer" |
| company | AdminInput | yes | |
| location | AdminInput | no | default '' |
| description | AdminTextarea (rows=6) | yes | |
| pills | AdminInput | no | Comma-separated string; split to string[] on save, join on load |
| sortOrder | AdminInput (type="number") | no | default 0 |

**API specifics:**
- GET list: `Experience.find({}).sort({ sortOrder: 1 }).lean()`
- POST validate: `role`, `company`, `period`, `description` required
- pills handling: accept string[] from client (split comma-separated in the form component, same pattern as blog post tags)

**List page display:** Show role + company as title line, period as subtitle, Edit/Delete actions.

**Acceptance:** Can create, list, edit, and delete experience entries. sortOrder controls list ordering.

---

### Step 3: Skills CRUD (nested tags array)

**Files to create (5):**

| File | Purpose |
|------|---------|
| `src/app/admin/skills/page.tsx` | List page |
| `src/app/admin/skills/new/page.tsx` | New form |
| `src/app/admin/skills/[id]/page.tsx` | Edit form |
| `src/app/api/admin/skills/route.ts` | GET list + POST |
| `src/app/api/admin/skills/[id]/route.ts` | GET + PUT + DELETE |

**Model:** `Skill` from `@/lib/models/Skill`
**Type:** `ISkill` from `@/types`

**Form fields:**

| Field | Component | Required | Notes |
|-------|-----------|----------|-------|
| clusterTitle | AdminInput | yes | e.g. "Frontend", "Backend" |
| sortOrder | AdminInput (type="number") | no | default 0 |
| tags | **Custom inline UI** | no | See below |

**Special UI -- Tags editor:**

This is the one section that needs a small custom inline UI within the form (NOT a new shared component -- just JSX in the form page itself):

- Render a list of current tags as removable chips: `tagName [x]` with a hot indicator (fire icon or color) if `isHot`
- "Add tag" row: an AdminInput for tag name + an AdminToggle for "Hot" + an "Add" button
- Removing a tag removes it from the local state array
- The tags array `{ name: string, isHot: boolean }[]` is sent directly to the API as JSON

**API specifics:**
- GET list: `Skill.find({}).sort({ sortOrder: 1 }).lean()`
- POST validate: `clusterTitle` required
- tags array is stored as-is (array of `{ name, isHot }` objects)

**List page display:** Show clusterTitle, tag count as subtitle (e.g. "8 tags"), Edit/Delete actions.

**Acceptance:** Can create skill clusters, add/remove tags with hot flag, edit, delete. Tags persist correctly as `{ name, isHot }[]`.

---

### Step 4: Achievements CRUD (standard pattern)

**Files to create (5):**

| File | Purpose |
|------|---------|
| `src/app/admin/achievements/page.tsx` | List page |
| `src/app/admin/achievements/new/page.tsx` | New form |
| `src/app/admin/achievements/[id]/page.tsx` | Edit form |
| `src/app/api/admin/achievements/route.ts` | GET list + POST |
| `src/app/api/admin/achievements/[id]/route.ts` | GET + PUT + DELETE |

**Model:** `Achievement` from `@/lib/models/Achievement`
**Type:** `IAchievement` from `@/types`

**Form fields:**

| Field | Component | Required | Notes |
|-------|-----------|----------|-------|
| icon | AdminInput | yes | Single emoji/character, e.g. "🏅" |
| title | AdminInput | yes | |
| description | AdminTextarea (rows=3) | yes | |
| year | AdminInput | yes | e.g. "2024" |
| sortOrder | AdminInput (type="number") | no | default 0 |

**API specifics:**
- GET list: `Achievement.find({}).sort({ sortOrder: 1 }).lean()`
- POST validate: `icon`, `title`, `description`, `year` required

**List page display:** Show icon + title as title line, year as subtitle, Edit/Delete actions.

**Acceptance:** Can create, list, edit, and delete achievements. All 4 required fields validated server-side.

---

### Step 5: Education CRUD (standard pattern)

**Files to create (5):**

| File | Purpose |
|------|---------|
| `src/app/admin/education/page.tsx` | List page |
| `src/app/admin/education/new/page.tsx` | New form |
| `src/app/admin/education/[id]/page.tsx` | Edit form |
| `src/app/api/admin/education/route.ts` | GET list + POST |
| `src/app/api/admin/education/[id]/route.ts` | GET + PUT + DELETE |

**Model:** `Education` from `@/lib/models/Education`
**Type:** `IEducation` from `@/types`

**Form fields:**

| Field | Component | Required | Notes |
|-------|-----------|----------|-------|
| badge | AdminInput | yes | Emoji/icon character, e.g. "🎓" |
| degree | AdminInput | yes | e.g. "B.Tech Computer Science" |
| institution | AdminInput | yes | |
| year | AdminInput | yes | e.g. "2020" |
| sortOrder | AdminInput (type="number") | no | default 0 |

**API specifics:**
- GET list: `Education.find({}).sort({ sortOrder: 1 }).lean()`
- POST validate: `badge`, `degree`, `institution`, `year` required

**List page display:** Show badge + degree as title line, institution + year as subtitle, Edit/Delete actions.

**Acceptance:** Can create, list, edit, and delete education entries. All 4 required fields validated server-side.

---

### Step 6: Contact Submissions viewer (read-only + mark-as-read)

**Files to create (2):**

| File | Purpose |
|------|---------|
| `src/app/admin/contact/page.tsx` | List page with inline detail |
| `src/app/api/admin/contact/route.ts` | GET list |
| `src/app/api/admin/contact/[id]/route.ts` | PUT (toggle read) + DELETE |

**(3 files total)**

**Model:** `ContactSubmission` from `@/lib/models/ContactSubmission`
**Type:** `IContactSubmission` from `@/types`

**No new/edit forms.** This is a read-only viewer.

**List page UI:**
- Header: "Contact Messages" with no "+ New" button
- Each card shows: name, email, subject, truncated message preview, timestamp (createdAt formatted), read/unread indicator
- Unread items have a subtle left border highlight (ember color, similar to sidebar active state)
- Clicking a card expands it inline to show the full message (toggle expand, no separate page)
- Each card has two actions:
  - "Mark Read" / "Mark Unread" toggle -- calls PUT `/api/admin/contact/{id}` with `{ read: true/false }`
  - "Delete" -- calls DELETE `/api/admin/contact/{id}` with confirmation prompt

**API specifics:**
- GET list: `ContactSubmission.find({}).sort({ createdAt: -1 }).lean()`
- PUT: toggle `read` field only (ignore any other fields in body for safety)
- DELETE: `ContactSubmission.findByIdAndDelete(id)`
- No POST route (submissions come from the public contact form)

**Acceptance:** Can view all contact submissions sorted newest-first, expand to read full message, toggle read status, delete submissions. No create/edit functionality.

---

## File Summary

| # | New Files | Section |
|---|-----------|---------|
| 1 | 0 (edit only) | Sidebar nav entries in layout.tsx |
| 2 | 5 | Experience CRUD |
| 3 | 5 | Skills CRUD |
| 4 | 5 | Achievements CRUD |
| 5 | 5 | Education CRUD |
| 6 | 3 | Contact submissions viewer |
| **Total** | **23 new files + 1 edit** | |

---

## Success Criteria

1. All 5 new sections appear in the admin sidebar and highlight when active
2. Experience, Achievements, Education follow the identical CRUD pattern as Blog Posts (list/new/edit/delete)
3. Skills CRUD works with the nested tags array (add/remove tags with hot flag)
4. Contact submissions are read-only with mark-as-read toggle and delete
5. All API routes validate required fields and return proper error responses
6. All lists sort by sortOrder (asc) except Contact which sorts by createdAt (desc)
7. No regressions to existing admin sections
