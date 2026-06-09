# Alex Chub - Frontend Developer Portfolio

One-page portfolio focused on React, TypeScript, product interfaces, SPA architecture and UI infrastructure.

## Preview

The website uses a dark visual style with:

- sticky desktop sidebar;
- responsive mobile navigation;
- animated hero section;
- project cards with filters;
- experience timeline;
- interactive tech map;
- value cards;
- contact section;
- smooth scrolling and active section highlighting.

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- GitHub Pages
- GitHub Actions

## Main sections

- Hero
- Projects
- Experience
- Skills
- Why Hire Me
- Contact

## Project structure

```text
src/
  app/
    App.tsx
    main.tsx

  assets/
    port_logo.png

  components/
    layout/
      SiteLayout.tsx
      Sidebar.tsx
      MobileNav.tsx
      Section.tsx

    projects/
      ProjectCard.tsx
      ProjectFilter.tsx
      ProjectModal.tsx
      ProjectPreview.tsx

    sections/
      HeroSection.tsx
      ProjectsSection.tsx
      ExperienceSection.tsx
      SkillsSection.tsx
      WhyHireMeSection.tsx
      ContactSection.tsx

    skills/
      SkillMap.tsx

    ui/
      Badge.tsx
      Button.tsx
      Card.tsx
      GlowBackground.tsx
      Reveal.tsx
      ScrollProgress.tsx
      SectionTitle.tsx

  data/
    profile.ts
    projects.ts
    experience.ts
    skills.ts

  hooks/
    useActiveSection.ts
    useCopyToClipboard.ts
    useScrollProgress.ts

  styles/
    globals.css

  types/
    content.ts

  utils/
    accent.ts
    cn.ts
    scrollToSection.ts
```

## Getting started

Clone the repository:

```bash
git clone https://github.com/Chuppy101/alex-portfolio.git
cd alex-portfolio
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open the local URL from the terminal, usually:

```text
http://localhost:5173/
```

## Available scripts

Start local development:

```bash
npm run dev
```

Run TypeScript check:

```bash
npm run typecheck
```

Run ESLint:

```bash
npm run lint
```

Build production version:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```