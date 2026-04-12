# 🏋️‍♂️ IronTrack

[![Live Preview](https://img.shields.io/badge/Live%20Preview-Visit%20App-4f46e5?style=for-the-badge&logo=vercel)](https://irontrack-app.vercel.app/)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

A comprehensive gym management platform and performance tracker tailored for **CrossFit boxes** and their athletes. IronTrack bridges the gap between complex administrative tasks and personal fitness growth, allowing owners to manage their business while athletes crush their PRs.

---

## 📋 Table of Contents

- [Demo](#-demo)
- [Key Features](#-key-features)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Integrations](#-integrations)
- [Local Setup](#-local-setup)

---

## 🚀 Demo

🔗 **[Launch IronTrack App →](https://irontrack-app.vercel.app/)**

---

## 💎 Key Features

### 🏢 For Gym Administrators
* **WOD Management:** Create and schedule Workouts of the Day with specific scoring types (AMRAP, EMOM, RFT).
* **Member CRM:** Track attendance, manage member status, and handle digital contracts.
* **Billing & Payments:** Automated invoicing and payment tracking.
* **Communication:** Direct community updates and bulk email notifications.

### 🏋️ For Athletes
* **Personal Dashboard:** Real-time view of upcoming classes and daily WODs.
* **PR Tracker:** Log your progress on lifting and gymnastic movements.
* **Class Booking:** One-tap registration for sessions to avoid overbooked classes.
* **Community Leaderboard:** See how you stack up against the box community.

---

## 📁 Project Structure

```text
irontrack-app/
├── app/                # Next.js App Router (Pages & Layouts)
├── components/         # Reusable UI components (Buttons, Modals, Cards)
│   ├── dashboard/      # Specific views for Admin/Athlete
│   └── shared/         # Common UI elements
├── lib/                # Utility functions and API configurations
├── public/             # Static assets (images, icons)
├── styles/             # Tailwind global configurations
└── types/              # TypeScript interfaces and types
