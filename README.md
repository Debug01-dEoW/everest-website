# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
# Victory Composite Industries - Architectural Website

A premium, full-stack architectural website featuring a dynamic portfolio, automated lead generation, and an Express/SQLite backend.

## 🚀 Features
- **Architectural Design**: High-end visuals and smooth GSAP animations.
- **Dynamic Portfolio**: Projects managed via SQLite database.
- **Lead Alerts**: Automated email notifications for every contact inquiry.
- **Full-Stack**: React/Vite frontend + Node.js/Express backend.

## 💻 Local Setup

### 1. Prerequisites
- Node.js installed on your machine.
- A Gmail App Password (for email alerts).

### 2. Run the Frontend
```bash
cd everest-website
npm install
npm run dev
```

### 3. Run the Backend
```bash
cd everest-website/server
npm install
node server.js
```

## 🌐 Deployment (Render.com)
Details are provided in the [Render Quickstart Guide](.system_generated/logs/render_quickstart.md).

1. Push this code to GitHub.
2. Connect the `server` folder to a Render Web Service.
3. Connect the root to a Render Static Site.
4. Set `VITE_API_BASE_URL` on the frontend and `EMAIL_PASS` on the backend.
for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
