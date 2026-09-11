# Mukesh Choudhary — Portfolio Website

A modern, production-ready personal portfolio website built with React, Vite, Tailwind CSS, and a Node.js/Express backend for the contact form.

**Live at:** [mukeshchoudhary.dev](https://mukeshchoudhary.dev) *(replace with your URL)*

---

## Features

- Dark-themed, responsive design optimized for mobile, tablet, and desktop
- Hero section with abstract developer visual and social links
- About, Skills, Experience, Projects, Education, and Certifications sections
- Working contact form that sends emails via Gmail SMTP
- Resume download button (replace `frontend/public/resume.pdf`)
- Centralized data file — edit one file to update all content
- Rate limiting, CORS, Helmet security on the backend
- Frontend validation + backend validation on the contact form
- SEO meta tags and Open Graph metadata
- Accessible: semantic HTML, focus states, ARIA labels, reduced-motion support

---

## Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | React 18, Vite, Tailwind CSS        |
| Icons     | Lucide React                        |
| Backend   | Node.js, Express                    |
| Email     | Nodemailer (Gmail SMTP)             |
| Security  | Helmet, CORS, express-rate-limit, express-validator |

---

## Folder Structure

```
portfolio/
├── frontend/
│   ├── public/
│   │   ├── resume.pdf          ← Place your resume here
│   │   ├── favicon.svg
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── SectionWrapper.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   └── ProjectCard.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Profiles.jsx
│   │   │   ├── Resume.jsx
│   │   │   └── Contact.jsx
│   │   ├── data/
│   │   │   └── portfolioData.js  ← Edit this to update content
│   │   ├── hooks/
│   │   │   ├── useScrollSpy.js
│   │   │   └── useIntersection.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── contactController.js
│   │   ├── middleware/
│   │   │   ├── rateLimiter.js
│   │   │   └── validateContact.js
│   │   ├── routes/
│   │   │   └── contact.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn
- A Gmail account (for contact form emails)

---

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd portfolio
```

---

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Create your environment file:
```bash
cp .env.example .env
```

Edit `frontend/.env`:
```env
VITE_BACKEND_URL=http://localhost:5000
```

Start the development server:
```bash
npm run dev
```

Frontend runs at: **http://localhost:5173**

---

### 3. Backend Setup

```bash
cd backend
npm install
```

Create your environment file:
```bash
cp .env.example .env
```

Edit `backend/.env` with your real values:
```env
PORT=5000
FRONTEND_URL=http://localhost:5173
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
CONTACT_RECEIVER_EMAIL=mukeshch1767@gmail.com
NODE_ENV=development
```

Start the backend:
```bash
npm run dev
```

Backend runs at: **http://localhost:5000**

---

### 4. Gmail App Password (REQUIRED for contact form)

Do NOT use your normal Gmail password. Use a Gmail App Password:

1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already)
3. Go to **App Passwords** (search for it)
4. Select app: **Mail** → Device: **Other** → Name: "Portfolio"
5. Copy the 16-character password
6. Paste it into `backend/.env` as `EMAIL_PASSWORD`

---

## Content Management

**All your portfolio content lives in one file:**

```
frontend/src/data/portfolioData.js
```

### How to add a new project

Open `portfolioData.js` and add a new object to the `projects` array:

```js
{
  id: 3,                           // unique number
  title: "My New Project",
  description: [
    "What the project does.",
    "Key features implemented.",
  ],
  tech: ["React", "Node.js", "MongoDB"],
  duration: "Jan 2026 – Mar 2026",
  github: "https://github.com/mukeshch77/my-project",  // or null
  demo: "https://myproject.vercel.app",                // or null
  image: "/projects/my-project.png",                   // or null
},
```

To add a project screenshot: put the image in `frontend/public/projects/` and reference it as `/projects/my-project.png`.

---

### How to add a new skill

Open `portfolioData.js` and add the skill string to the appropriate category in `skillGroups`:

```js
{
  category: "Backend Development",
  icon: "Server",
  skills: ["Spring Boot", "RESTful APIs", "Node.js", "Docker"],  // ← add here
},
```

To add a completely new skill category, copy an existing group object and give it a new `category` name and an icon from this list: `Code2`, `Server`, `Database`, `Brain`, `BookOpen`, `Wrench`.

---

### How to update social links

In `portfolioData.js`, edit the `social` object:

```js
export const social = {
  github: "https://github.com/mukeshch77",
  linkedin: "https://linkedin.com/in/mukeshch77",
  leetcode: "https://leetcode.com/mukeshch77",
};
```

---

### How to replace your resume

Simply replace the file:
```
frontend/public/resume.pdf
```

Keep the filename as `resume.pdf`. The download button will automatically serve the new file.

---

## Building for Production

### Frontend

```bash
cd frontend
npm run build
```

Output: `frontend/dist/` — upload this to Vercel, Netlify, or any static host.

---

## Deployment

### Frontend — Vercel (recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo
3. Set **Root Directory** to `frontend`
4. Add environment variable:
   - `VITE_BACKEND_URL` = `https://your-backend.onrender.com`
5. Click **Deploy**

Your site will be live at a `.vercel.app` URL. You can add a custom domain in Vercel settings.

---

### Backend — Render (recommended free tier)

1. Go to [render.com](https://render.com) → **New Web Service**
2. Connect your GitHub repo
3. Set:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node src/server.js`
4. Add environment variables (from your `backend/.env`):
   - `PORT` = `5000`
   - `FRONTEND_URL` = `https://your-site.vercel.app`
   - `EMAIL_USER` = your Gmail address
   - `EMAIL_PASSWORD` = your Gmail App Password
   - `CONTACT_RECEIVER_EMAIL` = `mukeshch1767@gmail.com`
   - `NODE_ENV` = `production`
5. Deploy

After deploying the backend, update `VITE_BACKEND_URL` in Vercel to your Render URL, then redeploy the frontend.

---

### Connecting Frontend to Backend

After deployment, update the CORS setting in `backend/src/server.js`:

```js
const allowedOrigins = [
  'http://localhost:5173',
  'https://mukeshchoudhary.vercel.app',  // ← your Vercel URL
  'https://mukeshchoudhary.dev',          // ← custom domain if you have one
];
```

---

### Custom Domain

1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In Vercel: go to **Settings → Domains** → add your domain
3. Update your domain's DNS to point to Vercel's servers (Vercel gives you instructions)
4. Update `FRONTEND_URL` in Render to your custom domain
5. Update the `allowedOrigins` in `backend/src/server.js`

---

## Security Notes

- Never commit `.env` files to Git
- The `.gitignore` already excludes `.env`
- Contact form has rate limiting (5 requests per 15 minutes per IP)
- All inputs are validated and sanitized on the backend
- CORS restricts requests to known frontend URLs only
- Helmet adds security HTTP headers
- Gmail App Password is used instead of your account password

---

## Questions?

Email: mukeshch1767@gmail.com  
GitHub: https://github.com/mukeshch77  
LinkedIn: https://linkedin.com/in/mukeshch77
