# Common Tasks & Quick Reference

## 🚀 Daily Development Tasks

### Start Development
```bash
# Start dev server
npm run dev

# Open in browser
# http://localhost:4321/astrowind
```

### Before Committing
```bash
# Run all checks
npm run check

# Fix issues automatically
npm run fix

# Manual review if needed
npm run check:prettier
npm run fix:prettier
```

## 📝 Content Management

### Add a New Blog Post
```bash
# 1. Create new post file
touch src/data/post/my-new-post.md

# 2. Add frontmatter
```
```markdown
---
publishDate: 2024-11-27T00:00:00Z
title: "Your Post Title"
excerpt: "Brief description for listings"
image: ~/assets/images/your-image.jpg
category: "tutorials"
tags:
  - astro
  - web development
metadata:
  canonical: https://marcgarnica13.github.io/astrowind/my-new-post
---

Your content here...
```

### Add a New Page
```bash
# 1. Create page file
touch src/pages/new-page.astro

# 2. Use template:
```
```astro
---
import Layout from '~/layouts/PageLayout.astro';
import Hero from '~/components/widgets/Hero.astro';

const metadata = {
  title: 'New Page',
};
---

<Layout metadata={metadata}>
  <Hero
    title="Page Title"
    subtitle="Page subtitle"
  />
  <!-- Add more widgets here -->
</Layout>
```

### Update Navigation
Edit `src/navigation.ts`:
```typescript
export const headerData = {
  links: [
    { text: 'Home', href: '/astrowind' },
    { text: 'New Page', href: '/astrowind/new-page' }, // Add here
    // ...
  ],
};
```

## 🎨 Styling Changes

### Add Custom Colors
Edit `src/components/CustomStyles.astro`:
```astro
<style is:global>
  :root {
    --color-custom: #your-color;
  }
</style>
```

### Modify Typography
Edit `src/assets/styles/tailwind.css`:
```css
.custom-heading {
  @apply text-4xl font-bold text-primary;
}
```

## 🖼️ Working with Images

### Add and Optimize Images
```astro
---
// In your .astro file
import { Image } from 'astro:assets';
import myImage from '~/assets/images/my-image.jpg';
---

<Image 
  src={myImage} 
  alt="Description"
  width={800}
  height={600}
/>
```

### Add Images to Public Folder
```bash
# For images that don't need processing
cp image.svg public/
# Reference as: /astrowind/image.svg
```

## 🔧 Common Fixes

### Clear Cache Issues
```bash
# Clear Astro cache
rm -rf .astro

# Clear node modules
rm -rf node_modules package-lock.json
npm install
```

### Fix Build Errors
```bash
# Check for TypeScript errors
npm run check:astro

# Check import paths
# Ensure using ~ alias properly
# Wrong: import from '../../../components/Button'
# Right: import from '~/components/ui/Button.astro'
```

### Fix 404 Errors
1. Check base path in links:
   - Wrong: `href="/about"`
   - Right: `href="/astrowind/about"`

2. Or use Astro's built-in:
   ```astro
   ---
   import { getRelativeLink } from '~/utils/permalinks';
   ---
   <a href={getRelativeLink('/about')}>About</a>
   ```

## 🚀 Deployment Tasks

### Quick Deploy
```bash
# Ensure everything committed
git add .
git commit -m "feat: add new feature"
git push origin main

# Monitor deployment
# https://github.com/marcgarnica13/astrowind/actions
```

### Emergency Rollback
```bash
# Revert last commit
git revert HEAD
git push origin main

# Or reset to known good state
git log --oneline  # Find good commit
git reset --hard <commit-hash>
git push --force origin main
```

## 📊 Performance Checks

### Local Performance Test
```bash
# Build and preview
npm run build
npm run preview

# Open Chrome DevTools
# Run Lighthouse audit
# Check scores
```

### Bundle Size Check
```bash
# After build
du -sh dist/
ls -la dist/_astro/*.js | head -10
```

## 🐛 Debugging

### Check Current State
```bash
# Git status
git status

# Check running ports
lsof -i :4321

# Check node version
node --version  # Should be 18.17.1+
```

### Common Error Messages

**"Cannot find module '~/...'"**
- Check tsconfig.json paths
- Restart dev server

**"Build failed"**
- Run `npm run check`
- Check error logs
- Clear cache and rebuild

**"Hydration mismatch"**
- Check for browser-only code
- Use `client:only` directive
- Wrap in `<Fragment client:load>`

## 🎯 Quick Component Templates

### Widget Template
```astro
---
import WidgetWrapper from '~/components/ui/WidgetWrapper.astro';
import Headline from '~/components/ui/Headline.astro';

const {
  title = '',
  subtitle = '',
  tagline = '',
  id,
  isDark = false,
  classes = {},
  bg = await Astro.slots.has('bg') ? await Astro.slots.render('bg') : null,
} = Astro.props;
---

<WidgetWrapper id={id} isDark={isDark} containerClass={classes?.container} bg={bg}>
  <Headline title={title} subtitle={subtitle} tagline={tagline} />
  <!-- Your content here -->
</WidgetWrapper>
```

### UI Component Template
```astro
---
export interface Props {
  text?: string;
  href?: string;
  class?: string;
}

const { text = 'Button', href, class: className = '' } = Astro.props;
---

{href ? (
  <a href={href} class={`btn ${className}`}>
    {text}
  </a>
) : (
  <button class={`btn ${className}`}>
    {text}
  </button>
)}
```

## 🔑 Environment Variables

### Development
```bash
# Create .env file
echo "PUBLIC_GA_ID=G-XXXXXXX" > .env

# Use in code
const gaId = import.meta.env.PUBLIC_GA_ID;
```

### Production
Set in GitHub Secrets:
1. Go to Settings → Secrets
2. Add `PUBLIC_GA_ID`
3. Reference in workflow

## 📱 Testing Checklist

- [ ] Desktop view (1920x1080)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px)
- [ ] Navigation menu works
- [ ] Images load properly
- [ ] Links work correctly
- [ ] Forms submit (if any)
- [ ] No console errors
- [ ] Page loads fast
- [ ] SEO meta tags present