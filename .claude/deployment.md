# Deployment Guide for STEFFI AstroWind

## 🚀 Quick Deploy Commands

### Deploy to GitHub Pages (Primary Method)
```bash
# Ensure all changes are committed
git add .
git commit -m "Your commit message"

# Push to main branch (triggers automatic deployment)
git push origin main
```

### Pre-Deployment Checklist
```bash
# 1. Run all quality checks
npm run check

# 2. Fix any issues
npm run fix

# 3. Build locally to test
npm run build
npm run preview  # Test at http://localhost:4321

# 4. If all good, commit and push
git add .
git commit -m "Deploy: your changes description"
git push origin main
```

## 🔄 Deployment Pipeline

### GitHub Actions Workflow
Location: `.github/workflows/actions.yaml`

**Triggers:**
- Push to `main` branch
- Manual trigger from GitHub Actions tab

**Process:**
1. Checkout repository
2. Install dependencies (npm)
3. Build site with Astro
4. Deploy to GitHub Pages

**Monitor Deployment:**
- Go to: https://github.com/marcgarnica13/astrowind/actions
- Check the latest workflow run
- Green checkmark = Success
- Red X = Failed (check logs)

## 🌐 Deployment Platforms

### GitHub Pages (Currently Active)
- **URL**: https://marcgarnica13.github.io/astrowind
- **Branch**: Deployed from `main`
- **Build**: Automated via GitHub Actions
- **SSL**: Automatic HTTPS

### Vercel (Alternative)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Configuration: `vercel.json`
- Clean URLs enabled
- Cache headers configured
- Trailing slashes disabled

### Netlify (Alternative)
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Production deploy
netlify deploy --prod
```

Configuration: `netlify.toml`
- Build command: `npm run build`
- Publish directory: `dist`
- Pretty URLs disabled

## 📊 Post-Deployment Verification

### 1. Check Site Availability
```bash
# Check if site is up
curl -I https://marcgarnica13.github.io/astrowind

# Should return HTTP 200
```

### 2. Verify Key Pages
- Homepage: /astrowind
- About: /astrowind/about
- Services: /astrowind/services
- Blog: /astrowind/blog

### 3. Check Console Errors
1. Open browser DevTools (F12)
2. Navigate through pages
3. Check Console tab for errors
4. Check Network tab for 404s

### 4. Test Mobile Responsiveness
1. Use browser responsive mode
2. Test key breakpoints
3. Verify navigation menu

## 🔧 Troubleshooting Deployment

### Build Fails Locally
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Clear Astro cache
rm -rf .astro

# Try building again
npm run build
```

### GitHub Actions Fails
1. Check Actions tab for error logs
2. Common issues:
   - Node version mismatch
   - Missing dependencies
   - Build errors

### 404 Errors After Deployment
- Check base path in `src/config.yaml`
- Ensure it matches: `/astrowind`
- Verify internal links use proper base path

### CSS/JS Not Loading
- Check browser console for errors
- Verify asset paths in build
- Check cache headers in deployment config

## 🔐 Environment Variables

### Local Development
Create `.env` file:
```env
# Analytics (if needed)
PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Other configs
PUBLIC_SITE_URL=https://marcgarnica13.github.io/astrowind
```

### Production
Set in deployment platform:
- GitHub Pages: Use repository secrets
- Vercel: Environment variables in dashboard
- Netlify: Environment variables in dashboard

## 📈 Performance Optimization

### Before Deployment
```bash
# Run compression
npm run build

# Check bundle size
du -sh dist/

# Analyze large files
find dist -type f -size +100k -exec ls -lh {} \;
```

### Cache Strategy
Assets in `/_astro/` are cached for 1 year:
- Immutable cache headers
- Hashed filenames
- Safe for long-term caching

## 🔄 Rollback Procedure

### GitHub Pages
```bash
# Find previous good commit
git log --oneline

# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push --force origin main
```

### Quick Hotfix
```bash
# Create hotfix branch
git checkout -b hotfix/issue-name

# Make fixes
# ... edit files ...

# Test locally
npm run build && npm run preview

# Merge to main
git checkout main
git merge hotfix/issue-name
git push origin main
```

## 📝 Deployment Checklist

- [ ] Run `npm run check` - all passing
- [ ] Run `npm run build` locally - succeeds
- [ ] Test with `npm run preview`
- [ ] Check responsive design
- [ ] Verify all links work
- [ ] Commit all changes
- [ ] Push to main branch
- [ ] Monitor GitHub Actions
- [ ] Verify live site
- [ ] Check browser console for errors