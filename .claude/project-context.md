# Project Context and Architecture

## 🎯 Business Context

### Project Name: STEFFI
- **Type**: Professional/Business Website
- **Template Base**: AstroWind (heavily customized)
- **Target Audience**: Professional services/business clients
- **Primary Goal**: Professional web presence with blog capabilities

### Brand Identity
- **Theme**: Light-only mode (no dark theme)
- **Typography**: Inter (primary), EB Garamond, Cormorant Garamond, Libre Baskerville
- **Design Philosophy**: Clean, professional, performance-focused

## 🏛️ Technical Architecture

### Core Stack Decisions
```
Astro 5.0 → Static Site Generation for performance
Tailwind CSS → Utility-first styling approach
TypeScript → Type safety and better DX
MDX → Enhanced markdown for blog posts
```

### Component Architecture
```
src/components/
├── widgets/          # Full page sections
│   ├── Header.astro  # Navigation + branding
│   ├── Hero.astro    # Landing hero sections
│   ├── Footer.astro  # Site footer
│   └── ...          # Other page sections
├── ui/              # Reusable UI components
│   ├── Button.astro
│   ├── Form.astro
│   └── ...
├── blog/            # Blog-specific components
└── common/          # Utilities and meta components
```

### Page Structure
```
src/pages/
├── index.astro       # Homepage
├── about.astro       # About page
├── services.astro    # Services page
├── [...blog]/        # Dynamic blog routing
├── homes/           # Landing page variants
│   ├── saas.astro
│   ├── startup.astro
│   └── ...
└── landing/         # Marketing pages
```

## 🔌 Integration Points

### Analytics & SEO
- Google Analytics ready (configurable)
- Sitemap generation automatic
- RSS feed for blog
- Open Graph meta tags
- Twitter cards support

### Content Management
- **Blog Posts**: Markdown/MDX in `src/data/post/`
- **Images**: Optimized via Astro Image
- **Icons**: Tabler + Flat Color Icons sets

### Performance Features
- Lazy loading images
- Compressed assets in production
- Optimized critical CSS
- Static generation for speed

## 🎨 Styling System

### Tailwind Configuration
- Custom color schemes
- Typography plugin enabled
- Responsive utilities
- Dark mode capable (currently disabled)

### Custom Styles Location
- `src/assets/styles/tailwind.css` - Global styles
- `src/components/CustomStyles.astro` - CSS variables
- Component-level styles in `.astro` files

### Design Tokens
```css
/* Key variables from CustomStyles.astro */
--color-primary
--color-secondary
--font-family-sans
--font-family-serif
```

## 📐 Layout System

### Available Layouts
1. **Layout.astro** - Base HTML structure
2. **PageLayout.astro** - Standard pages
3. **MarkdownLayout.astro** - Blog posts
4. **LandingLayout.astro** - Marketing pages

### Layout Hierarchy
```
Layout.astro
└── PageLayout.astro
    └── Page Components
        └── Widgets
            └── UI Components
```

## 🚦 Routing Strategy

### Static Routes
- `/` → Homepage
- `/about` → About page
- `/services` → Services page
- `/pricing` → Pricing page

### Dynamic Routes
- `/blog` → Blog listing
- `/blog/[slug]` → Individual posts
- `/category/[category]` → Category archives
- `/tag/[tag]` → Tag archives

### Base Path Consideration
All routes prefixed with `/astrowind` for GitHub Pages

## 🔧 Development Guidelines

### Code Style
- ESLint + Prettier configured
- TypeScript for type safety
- Astro components for templates
- Minimal vanilla JavaScript

### Component Best Practices
1. Use `.astro` for static components
2. Import images for optimization
3. Leverage Astro's partial hydration
4. Keep components focused and reusable

### Performance Goals
- Lighthouse score 95+
- First Contentful Paint < 1s
- Cumulative Layout Shift < 0.1
- Total Blocking Time < 200ms

## 📦 Build Pipeline

### Development Build
```
npm run dev
↓
Vite Dev Server
↓
Hot Module Replacement
↓
http://localhost:4321
```

### Production Build
```
npm run build
↓
Static Generation
↓
Asset Optimization
↓
Compression
↓
dist/ folder
```

## 🔍 Current Customizations

### Modified from Template
1. Site configuration for STEFFI brand
2. Custom navigation structure
3. Added CV PDF functionality
4. New policies page
5. Theme locked to light mode
6. Base path set for GitHub Pages

### Pending Changes (Uncommitted)
- Multiple page modifications
- Navigation updates
- New assets added
- Layout adjustments

## 💡 Key Decisions Made

1. **Static over SSR**: Chose static generation for performance
2. **GitHub Pages**: Free hosting with custom domain potential
3. **Light Theme Only**: Simplified theme management
4. **MDX for Blog**: Enhanced content capabilities
5. **TypeScript**: Better development experience

## 🎯 Future Considerations

### Potential Enhancements
- Custom domain setup
- Enhanced analytics integration
- Newsletter functionality
- Contact form implementation
- Multi-language support

### Performance Optimizations
- Image CDN integration
- Service worker for offline
- Enhanced caching strategies
- Bundle size optimization

## 🔐 Security Considerations

### Current Measures
- No sensitive data in repository
- Static site (no server vulnerabilities)
- HTTPS via GitHub Pages
- Clean URL structure

### Best Practices
- Regular dependency updates
- No API keys in code
- Secure form submissions (when added)
- Content Security Policy headers