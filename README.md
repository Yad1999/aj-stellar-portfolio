# [AJ Stellar Portfolio Website ✨](https://aj-stellar-portfolio.vercel.app/)
## Overview

This is a modern, responsive portfolio website built with React, Vite, and Tailwind CSS. It features a space/stellar theme with custom animations and theming support (Light/Dark mode). The project uses a component-based architecture for maintainability and scalability.

## Tech Stack

- **Framework**: React 19 + Vite
- **Routing**: React Router DOM (v7)
- **Styling**: Tailwind CSS v4, Vanilla CSS (with CSS variables for theming)
- **Icons**: Lucide React
- **UI Components**: Radix UI (Toast), Class Variance Authority (CVA), tailwind-merge, clsx

## Folder Structure & Contents

```text
c:\aj-stellar-portfolio\
├── public/                 # Static assets
├── src/                    # Source code
│   ├── assets/             # Project-specific assets
│   ├── components/         # Reusable UI components
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── NavBar.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── StarBackground.jsx  # Renders stars and meteors
│   │   └── ThemeToggle.jsx     # Handles Light/Dark mode toggling
│   ├── lib/                # Utility functions and helpers
│   ├── pages/              # Route components
│   │   ├── Home.jsx        # Main landing page assembling the sections
│   │   └── NotFound.jsx    # 404 Error page
│   ├── App.jsx             # Main application component & Routing setup
│   ├── index.css           # Global styles, Tailwind setup, animations, theming
│   └── main.jsx            # Application entry point
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # (Replaced largely by Tailwind v4 inline CSS)
└── vite.config.js          # Vite configuration
```

## Styling System

The project relies on a custom design system implemented in `src/index.css`. 

### Theming (Light/Dark Mode)

Uses CSS variables for dynamic theming.
- **Light Mode (Default)**: 
  - Background: `hsl(210 40% 98%)` (Very light grayish-blue)
  - Foreground: `hsl(222 47% 11%)`
  - Primary: `hsl(250 47% 60%)`
- **Dark Mode (`.dark` class)**:
  - Background: `hsl(222 47% 4%)` (Deep dark blue/black)
  - Foreground: `hsl(213 31% 91%)`
  - Primary: `hsl(250 65% 65%)`

### Custom Utilities & Animations

The `index.css` file provides custom Tailwind utilities to enforce the "Stellar" theme:
- `@utility text-glow`: Adds a purple/primary text shadow glow.
- `@utility card-hover`: Applies a hover scale (`1.02`) and shadow.
- `@utility cosmic-button`: A styled button with hover/active states and a primary glow effect.
- `@utility star` & `@utility meteor`: Core components for the space background visual effect.

**Animations**:
- `float`: Gentle vertical translation.
- `pulse-subtle`: Opacity fading for stars/elements.
- `fade-in`: Delay-based entry animations for staggered rendering.
- `meteor`: Diagonal translation for shooting stars.

## Recent Updates

- **Dynamic Light Mode**: Replaced the static light mode with a vibrant, animated "Sky and Clouds" aesthetic, complete with massive, slowly drifting clouds (`CloudBackground.jsx`).
- **Frosted Glass Cards**: Upgraded the light mode cards to use a premium Glassmorphism effect (`backdrop-blur`) that allows the sky gradient to shine through.
- **Color Contrast Overhaul**: Switched the primary branding to a high-contrast Yellow (`#FFDB00`) for light mode, and updated typography to pure white and crisp light gray for maximum legibility against the sky.
- **Isolated Theming**: Configured `.light-only` and `.dark-only` utility classes to flawlessly transition between the deep space dark mode and the airy sky light mode without styling overlap.
