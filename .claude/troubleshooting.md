# Troubleshooting Guide

## 🚨 Common Issues & Solutions

### Build & Development Issues

#### Error: "Cannot find module" or Import Errors
```bash
# Solution 1: Clear cache and reinstall
rm -rf .astro node_modules package-lock.json
npm install
npm run dev

# Solution 2: Check import paths
# Wrong: import Component from '../components/Component.astro'
# Right: import Component from '~/components/Component.astro'
```

#### Error: "Port 4321 already in use"
```bash
# Find and kill process
lsof -i :4321
kill -9 <PID>

# Or use different port
npm run dev -- --port 4322
```

#### TypeScript Errors
```bash
# Check TypeScript issues
npm run check:astro

# Common fixes:
# 1. Add type definitions
# 2. Check tsconfig.json paths
# 3. Restart TS server in VS Code (Cmd+Shift+P → "Restart TS Server")
```

### Styling Issues

#### Tailwind Classes Not Working
```astro
<!-- Wrong: Dynamic classes -->
<div class={`text-${color}-500`}></div>

<!-- Right: Full class names -->
<div class={color === 'red' ? 'text-red-500' : 'text-blue-500'}></div>

<!-- Or define in safelist (tailwind.config.js) -->
```

#### Custom Styles Not Applying
1. Check style scope:
```astro
<!-- Component styles -->
<style>
  /* Only affects this component */
  .my-class { }
</style>

<!-- Global styles -->
<style is:global>
  /* Affects entire site */
  .my-class { }
</style>
```

2. Check CustomStyles.astro is imported in Layout

### Image Issues

#### Images Not Loading
```astro
<!-- Wrong: Direct path -->
<img src="/src/assets/images/hero.jpg" />

<!-- Right: Import and use -->
---
import heroImage from '~/assets/images/hero.jpg';
import { Image } from 'astro:assets';
---
<Image src={heroImage} alt="Hero" />

<!-- For public folder images -->
<img src="/astrowind/image.png" />
```

#### Image Optimization Errors
```bash
# If sharp errors occur
npm uninstall sharp
npm install sharp

# For M1 Macs
npm install --platform=darwin --arch=x64 sharp
```

### Routing Issues

#### 404 Errors on GitHub Pages
```astro
<!-- Problem: Base path not included -->
<a href="/about">About</a>

<!-- Solution 1: Include base path -->
<a href="/astrowind/about">About</a>

<!-- Solution 2: Use utility function -->
---
import { getRelativeLink } from '~/utils/permalinks';
---
<a href={getRelativeLink('/about')}>About</a>
```

#### Blog Post URLs Not Working
Check `src/config.yaml`:
```yaml
apps:
  blog:
    post:
      permalink: '/%slug%' # Should include base path context
```

### Deployment Issues

#### GitHub Actions Failing
1. Check Actions tab for specific error
2. Common issues:
   - Node version mismatch (check `.nvmrc` or `package.json` engines)
   - Missing dependencies
   - Build script errors

#### Site Not Updating After Push
```bash
# Check deployment status
# https://github.com/marcgarnica13/astrowind/actions

# Force rebuild
git commit --allow-empty -m "Force rebuild"
git push origin main

# Clear GitHub Pages cache
# Settings → Pages → ... → "Unpublish site" → Republish
```

### Performance Issues

#### Slow Build Times
```bash
# Profile build
npm run build -- --verbose

# Solutions:
# 1. Reduce image sizes
# 2. Lazy load components
# 3. Check for large dependencies
```

#### Large Bundle Size
```bash
# Analyze bundle
npm run build
du -sh dist/
find dist -name "*.js" -size +100k -ls

# Solutions:
# 1. Dynamic imports for large components
# 2. Remove unused dependencies
# 3. Optimize images
```

### SEO & Meta Issues

#### Meta Tags Not Showing
1. Check Layout component includes metadata
2. Verify config.yaml has correct defaults
3. Use SEO testing tools

#### Sitemap Not Generating
```typescript
// Check astro.config.ts
export default defineConfig({
  site: 'https://marcgarnica13.github.io',
  base: '/astrowind',
  integrations: [
    sitemap(), // Must be included
  ],
});
```

### Blog Issues

#### Blog Posts Not Appearing
1. Check file location: `src/data/post/`
2. Verify frontmatter:
```markdown
---
publishDate: 2024-11-27T00:00:00Z  # Valid date
draft: false  # Not draft
title: "Post Title"  # Required
---
```

#### Categories/Tags Not Working
- Check config.yaml has them enabled
- Verify frontmatter includes valid category/tags
- Check URL structure matches config

### Form Issues

#### Contact Form Not Submitting
Since this is a static site, forms need external handling:
```astro
<!-- Use form service -->
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <!-- form fields -->
</form>

<!-- Or Netlify Forms (if deployed there) -->
<form name="contact" method="POST" data-netlify="true">
  <!-- form fields -->
</form>
```

## 🔍 Debugging Tools

### Browser DevTools
```javascript
// Add debug info to components
console.log('Component props:', Astro.props);
console.log('Current URL:', Astro.url);
console.log('Import meta:', import.meta.env);
```

### Astro Debug Mode
```bash
# Run with debug info
DEBUG=astro:* npm run dev

# Specific debug scopes
DEBUG=astro:build npm run build
```

### VS Code Extensions
Recommended for debugging:
- Astro extension
- Tailwind CSS IntelliSense
- Error Lens
- GitLens

## 📋 Debugging Checklist

When something goes wrong:

1. **Check browser console** for JavaScript errors
2. **Check terminal** for build errors
3. **Verify file paths** are correct
4. **Check git status** for unexpected changes
5. **Test in incognito** to rule out cache
6. **Try production build** locally:
   ```bash
   npm run build && npm run preview
   ```
7. **Check GitHub Actions** logs if deployment issue
8. **Verify base paths** if 404 errors
9. **Clear all caches** if styling issues
10. **Check network tab** for failed requests

## 🆘 Getting Help

### Error Message Reference
- `[vite] Internal server error` → Check imports and file paths
- `Expected ";" but found "}"` → Syntax error in component
- `Astro.glob is not a function` → Use import.meta.glob instead
- `Cannot read properties of undefined` → Check data exists before using

### Last Resort Steps
```bash
# Complete reset
rm -rf .astro node_modules dist package-lock.json
npm install
npm run dev

# If still broken, check:
# - Node version (18.17.1+)
# - npm version (latest)
# - Git status (clean?)
# - Operating system compatibility
```

### Community Resources
- [Astro Discord](https://astro.build/chat)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/astro)
- [GitHub Issues](https://github.com/withastro/astro/issues)
- [AstroWind Issues](https://github.com/onwidget/astrowind/issues)