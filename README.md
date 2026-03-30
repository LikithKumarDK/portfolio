# Frontend Architect Portfolio

A modern, high-performance professional portfolio website built with Next.js 16. Designed with a consistent, high-end editorial-architectural (Neo-Brutalist) design language to highlight 6+ years of experience in Frontend Architecture.

## ✨ Features

- **Neo-Brutalist Design:** A striking, editorial-architectural visual language with precise structural grids.
- **Interactive UI:** Smooth, mechanical UI elements and micro-interactions powered by Framer Motion.
- **Fully Responsive:** Meticulous alignment and vertical rhythm optimized for all screen sizes.
- **Modern Tech Stack:** Built with the latest Next.js (App Directory), React 19, and Tailwind CSS v4.
- **Sectioned Architecture:** Modular design featuring specialized sections for Hero, About, Skills, Experience, Education, and Contact.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & `clsx` / `tailwind-merge`
- **Animations:** [Framer Motion](https://framer.com/motion)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Language:** TypeScript

## 📁 Project Structure

```text
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind configuration
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main landing page assembling all sections
└── components/
    ├── Navbar.tsx       # Main site navigation
    └── sections/        # Modular page sections
        ├── Hero.tsx
        ├── About.tsx
        ├── Skills.tsx
        ├── Experience.tsx
        ├── Education.tsx
        └── Contact.tsx
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd Portfolio
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

- `npm run dev` - Runs the app in the development mode.
- `npm run build` - Builds the app for production to the `.next` folder.
- `npm run start` - Starts the production server.
- `npm run lint` - Runs ESLint to catch coding errors and enforce styling rules.

## 🎨 Design Philosophy

This project aims to deliver a cohesive, professional, and performant user experience. By refining the structural grid and implementing interactive, mechanical UI elements, the portfolio perfectly reflects the expertise and precision expected of a Senior Frontend Architect.
