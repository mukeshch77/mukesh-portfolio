# Quick Setup Guide — Mukesh Choudhary Portfolio

## Prerequisites
- Node.js 18+ (download from nodejs.org)
- npm (comes with Node.js)
- A Gmail account

---

## Step 1 — Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Opens at: http://localhost:5173

---

## Step 2 — Backend

```bash
cd backend
npm install
cp .env.example .env
# → Now edit backend/.env with your details (see Step 3)
npm run dev
```

Runs at: http://localhost:5000

---

## Step 3 — Three Things to Configure

### A) Your Resume PDF
Put your resume PDF file at:
```
frontend/public/resume.pdf
```
Rename it exactly to `resume.pdf`. The download button on the site will serve it automatically.

### B) Gmail App Password (so contact form sends emails)
1. Go to https://myaccount.google.com/security
2. Turn on 2-Step Verification if not already on
3. Search for "App Passwords" in the search bar
4. Create one → App: Mail, Device: Other, name it "Portfolio"
5. Copy the 16-character password shown
6. Open `backend/.env` and fill in:
```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx   ← the 16-char app password
CONTACT_RECEIVER_EMAIL=mukeshch1767@gmail.com
```

### C) Connect Frontend to Backend (after deploying)
When you deploy to Vercel + Render, update `frontend/.env`:
```
VITE_BACKEND_URL=https://your-backend.onrender.com
```
While developing locally, keep it as:
```
VITE_BACKEND_URL=http://localhost:5000
```

---

## Step 4 — Adding a New Project Later
Open `frontend/src/data/portfolioData.js` and add to the `projects` array:
```js
{
  id: 3,
  title: "Your Project Name",
  description: ["What it does.", "Key feature 2."],
  tech: ["React", "Node.js"],
  duration: "Jan 2026 – Mar 2026",
  github: "https://github.com/mukeshch77/project",  // or null
  demo: null,
  image: null,
}
```

## Step 5 — Adding a New Skill
Open `frontend/src/data/portfolioData.js`, find the right category in `skillGroups`, and add the skill string to the `skills` array.

---

## Deployment

| Service | What to deploy | Folder |
|---------|---------------|--------|
| Vercel  | Frontend      | `frontend/` |
| Render  | Backend       | `backend/` |

Full deployment instructions are in README.md.
