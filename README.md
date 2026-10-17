# Personal Portfolio Website (v4)

A modern, highly performant, and responsive personal portfolio application built by **Fajar Fauzian** (@zianscode). Developed using Next.js 15, TypeScript, Tailwind CSS, and Framer Motion, this platform showcases full-stack web applications, mobile solutions, software design case studies, and career milestones.

---

## Technical Overview

- **Core Framework**: Next.js 15 (App Router Architecture)
- **UI & Logic**: React 18, TypeScript, Tailwind CSS, HeroUI
- **Animation & Motion**: Framer Motion
- **State & Real-time Services**: Firebase (Authentication & Firestore) for interactive chatroom features, SWR
- **Design System**: Glassmorphic UI aesthetics, curated Dark & Light themes, custom grid system

---

## Key Platform Features

### Responsive Adaptive Navigation
- Dedicated Desktop Vertical Sidebar for large screens (`>= 1024px`)
- Top Floating Glass Dock Navbar optimized for tablet viewports (`768px - 1023px`)
- Compact Mobile Header and Slide-over Drawer (`< 768px`)

### Featured Projects & Design Case Studies
- Comprehensive project catalog with detailed slug routes (`/projects/[slug]`)
- Multi-technology stack indicators and external links to GitHub repositories and Figma design files
- Interactive category filtering between Projects and Verified Certificates

### Real-Time Chatroom Component
- Live global chatroom powered by Firebase Firestore
- Google OAuth authentication via Firebase Auth
- Feature set including message editing, threaded replies, and message deletion

### Interactive Career & Education Timeline
- Professional work experience and education timeline with custom gradient indicators
- Dynamic resume download integration

---

## Architecture & Directory Structure

```
portfolio-v4/
├── public/                 # Static assets, project images, and media
├── src/
│   ├── app/                # Next.js App Router pages and layouts
│   │   ├── about/          # Personal profile and career timeline page
│   │   ├── blog/           # Blog posts and articles
│   │   ├── chatroom/       # Real-time community chatroom page
│   │   ├── contact/        # Contact form and social link cards
│   │   ├── projects/       # Projects catalog and individual slug routes
│   │   ├── roadmap/        # Learning and technical roadmap page
│   │   ├── layout.tsx      # Root layout wrapper
│   │   └── page.tsx        # Homepage hero section and highlights
│   ├── components/
│   │   ├── layout/         # App shell: root layout client, loading screen, JSON-LD
│   │   ├── navigation/     # Desktop sidebar, tablet navbar, mobile menu
│   │   ├── effects/        # Background effects (grid, shooting stars, particles)
│   │   ├── ui/             # Generic building blocks (marquee, typing text, divider)
│   │   ├── home/           # Hero, latest projects, services (+ services/ illustrations)
│   │   ├── about/          # Introduction, career timeline, skills, social media
│   │   ├── projects/       # Project grid/list cards, certificate cards, detail page
│   │   ├── contact/        # Social cards and email section
│   │   ├── chatroom/       # Message list, input, dialogs, floating chat button
│   │   ├── blog/           # Blog list, search, category filter
│   │   └── roadmap/        # Learning roadmap categories and items
│   ├── constants/          # External links (donate, dev.to profile)
│   ├── context/            # React context providers (dark mode)
│   ├── data/               # Static content: projects, certificates, skills, career, navigation
│   ├── hooks/              # Custom hooks (chatroom state, media queries)
│   ├── lib/                # Firebase and Google Tag Manager integrations
│   ├── styles/             # Global CSS
│   ├── types/              # TypeScript interfaces and type definitions
│   └── utils/              # Pure helpers (date formatting)
└── package.json            # Project dependencies and script declarations
```

---

## Getting Started

### Prerequisites

- Node.js version 18.17.0 or higher
- Package Manager: `npm`, `yarn`, `pnpm`, or `bun`

### Installation

1. Clone the repository:

```bash
git clone https://github.com/zianscode/portfolio-v.4.git
cd portfolio-v4
```

2. Install dependencies:

```bash
npm install
```

3. Configure Environment Variables:

Create a `.env.local` file in the root directory and define the required environment variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your web browser to view the application.

---

## Build and Production Deployment

To create an optimized production build:

```bash
npm run build
```

To run the production server locally:

```bash
npm run start
```

---

## Author & License

Developed and maintained by **Fajar Fauzian** (@zianscode).

This project is private and proprietary. All rights reserved.
