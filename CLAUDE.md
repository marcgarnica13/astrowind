# CLAUDE.md - Project Context for Claude Code

## Project: STEFFI AstroWind Website

### 🎯 Project Purpose
This is a personal/business website built on the AstroWind template, customized for the STEFFI brand. The site is deployed to GitHub Pages and serves as a professional web presence.

### 🏗️ Architecture Overview

#### Technology Stack
- **Framework**: Astro 5.0 (Static Site Generation)
- **Styling**: Tailwind CSS with custom configuration
- **Language**: TypeScript
- **Build Tool**: Vite
- **Package Manager**: npm
- **Deployment**: GitHub Pages via GitHub Actions

#### Key Dependencies
- `astro`: Core framework
- `@astrojs/tailwind`: Tailwind CSS integration
- `@astrojs/mdx`: MDX support for enhanced markdown
- `astro-icon`: Icon system using Tabler and Flat Color Icons
- `astro-compress`: Production optimization
- `@astrolib/seo`: SEO utilities
- `@astrolib/analytics`: Analytics integration

### 📁 Project Structure

```
/home/marc/Development/steffi/astrowind/
├── src/
│   ├── assets/          # Static assets (images, styles, PDFs)
│   ├── components/      # Reusable Astro components
│   │   ├── blog/       # Blog-specific components
│   │   ├── common/     # Shared utilities
│   │   ├── ui/         # UI primitives
│   │   └── widgets/    # Page sections (Hero, Footer, etc.)
│   ├── content/        # Content collections config
│   ├── data/           # Blog posts and data files
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   ├── utils/          # Helper functions
│   ├── config.yaml     # Site configuration
│   └── navigation.ts   # Navigation structure
├── public/             # Static files served directly
├── dist/               # Build output (git-ignored)
└── .github/workflows/  # CI/CD configuration
```

### 🔧 Development Workflow

#### Essential Commands
```bash
# Development
npm run dev          # Start dev server (http://localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality (ALWAYS run before committing)
npm run check        # Run all checks
npm run check:astro  # Check Astro files
npm run check:eslint # Check ESLint
npm run check:prettier # Check formatting
npm run fix          # Auto-fix issues
npm run fix:eslint   # Fix ESLint issues
npm run fix:prettier # Fix formatting
```

#### Git Workflow
1. Make changes
2. Run `npm run check` to ensure code quality
3. Fix any issues with `npm run fix`
4. Commit changes
5. Push to `main` branch to trigger deployment

### 🚀 Deployment

#### GitHub Pages Configuration
- **Repository**: marcgarnica13/astrowind
- **Deploy Branch**: main
- **Build Output**: dist/
- **Site URL**: https://marcgarnica13.github.io/astrowind
- **Base Path**: /astrowind (configured in config.yaml)

#### Deployment Process
1. Push changes to `main` branch
2. GitHub Actions workflow triggers automatically
3. Builds the site using `npm run build`
4. Deploys to GitHub Pages
5. Site updates at https://marcgarnica13.github.io/astrowind

#### Manual Deployment
```bash
npm run build       # Build the site
# The dist/ folder contains the built site
# GitHub Actions handles the actual deployment
```

### ⚙️ Configuration

#### Main Configuration (src/config.yaml)
- Site name: STEFFI
- Base URL: /astrowind
- Theme: light:only
- Blog enabled with custom permalinks
- Google site verification configured

#### Important Files to Know
- `src/config.yaml`: Main site configuration
- `src/navigation.ts`: Navigation menu structure
- `astro.config.ts`: Astro build configuration
- `.github/workflows/actions.yaml`: GitHub Pages deployment

### 🎨 Customization Points

#### Styling
- `src/assets/styles/tailwind.css`: Global styles
- `src/components/CustomStyles.astro`: Custom CSS variables
- `tailwind.config.js`: Tailwind configuration

#### Content
- `src/data/post/`: Blog posts (Markdown/MDX)
- `src/pages/`: Static pages
- `src/assets/images/`: Image assets

### 📝 Current Project State

#### Modified Files (Uncommitted)
- Multiple page files updated
- Navigation structure modified
- New CV PDF added (src/assets/cv.pdf)
- New policies page created

#### Deployment Status
- GitHub Actions configured and working
- Site live at GitHub Pages
- Automatic deployment on push to main

### 🚨 Important Notes

1. **Always run checks before committing**: Use `npm run check` and fix issues
2. **Base path**: Remember the `/astrowind` base path for internal links
3. **Image optimization**: Use Astro's Image component for performance
4. **Blog permalinks**: Currently set to `/%slug%` pattern
5. **Node version**: Requires Node 18.17.1+ or 20.3.0+ or 21.0.0+

### 🔍 Debugging Tips

1. **Build errors**: Check `npm run check:astro` first
2. **Styling issues**: Verify Tailwind classes and custom styles
3. **Deployment issues**: Check GitHub Actions logs
4. **404 errors**: Verify base path in links
5. **Image issues**: Ensure proper imports and optimization

### 🎯 Common Tasks

#### Adding a New Page
1. Create file in `src/pages/`
2. Use appropriate layout from `src/layouts/`
3. Update navigation in `src/navigation.ts`

#### Adding a Blog Post
1. Create MDX/MD file in `src/data/post/`
2. Include required frontmatter
3. Use existing posts as templates

#### Updating Site Metadata
1. Edit `src/config.yaml`
2. Update SEO defaults and social cards

### 📚 Resources
- [Astro Documentation](https://docs.astro.build)
- [AstroWind Template](https://github.com/onwidget/astrowind)
- [Tailwind CSS](https://tailwindcss.com/docs)