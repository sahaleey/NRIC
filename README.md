# 🎓 Nahjurrashad Islamic College (NRIC) Website

![Project Banner](public/images/logo.jpg)

> The official institutional website for **Nahjurrashad Islamic College**, built to provide a modern digital presence for students, faculty, and the community.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## 🚀 Overview

This is a Single Page Application (SPA) designed to showcase the college's academic programs, faculty details, gallery, and admission information. It focuses on performance, accessibility, and a smooth user experience using modern web technologies.

## 🛠️ Tech Stack

* **Core:** [React](https://react.dev/) (via Vite for fast build times)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS framework)
* **Animations:** [Framer Motion](https://www.framer.com/motion/) (Smooth transitions and entry effects)
* **Routing:** React Router DOM
* **Deployment:** Vercel

## ✨ Key Features

* **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
* **Dynamic Content:** Includes an 'Announcements Ticker' and 'Verse of the Day' feature.
* **Interactive UI:** Custom sliders for Trust Members and Faculty using Framer Motion.
* **Optimized Assets:** Modern image formats (WebP/AVIF) for faster loading.
* **SEO Friendly:** Includes basic SEO setup and sitemap generation.

## 📦 Project Structure

We follow a modular directory structure to keep things organized:

```bash
src/
├── components/      # Reusable UI components (Navbar, Footer, Loaders)
├── data/           # Static data files (Faculty lists, Gallery JSON, Verses)
├── hooks/          # Custom React hooks (e.g., useVerseOfTheDay)
├── pages/          # Individual page views (Home, About, Academics)
├── sections/       # Page-specific sections (Hero, StatsBar, ContactCTA)
└── assets/         # Source assets
