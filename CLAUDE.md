# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kaaysamp is a landing page for a Senegalese social network mobile app. The site showcases app features, screenshots, testimonials, ambassadors, and includes a contact form.

## Commands

- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Architecture

### Tech Stack
- React 19 with Vite 7
- Tailwind CSS 4 (via @tailwindcss/vite plugin)
- Framer Motion for animations
- Lucide React for icons

### Project Structure

```
src/
├── components/
│   ├── landing/     # Page sections (HeroSection, FeaturesSection, etc.)
│   └── ui/          # Reusable UI components (Button, Input, Textarea)
├── lib/
│   └── utils.js     # Utility functions (cn for class merging)
├── pages/
│   └── Home.jsx     # Main landing page composing all sections
├── App.jsx          # Root component
└── main.jsx         # Entry point
```

### Import Alias
The `@` alias maps to `src/` directory (configured in vite.config.js).

### UI Components
Located in `src/components/ui/`, these use `class-variance-authority` for variant styling and `cn()` utility for class merging.

### Landing Sections
Each section in `src/components/landing/` is a self-contained React component with its own styling and animations. The Home page imports and composes them in order.

### Styling Conventions
- Primary brand color: `#2eb87f` (emerald green)
- Use Tailwind utility classes
- Gradients commonly use `from-[#2eb87f] to-emerald-600`
- Animations use Framer Motion's `motion` components
