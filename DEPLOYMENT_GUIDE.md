# Deployment Guide

This guide will help you deploy your portfolio to various hosting platforms.

## 📦 Building for Production

Before deploying, always build the project:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🚀 Deployment Options

### 1. Vercel (Recommended)

**Fastest and easiest deployment for React apps**

#### Method A: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

#### Method B: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel auto-detects Vite configuration
6. Click "Deploy"

#### Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Add your custom domain
3. Update DNS records as instructed

---

### 2. Netlify

#### Method A: Drag & Drop

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to the deploy zone

#### Method B: Git Integration

1. Push code to GitHub
2. Go to Netlify dashboard
3. Click "New site from Git"
4. Select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

#### Custom Domain
1. Go to Domain settings
2. Add custom domain
3. Follow DNS configuration steps

---

### 3. GitHub Pages

#### Setup

1. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/repository-name"
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/repository-name/', // Your repo name
  plugins: [react()],
});
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages:
   - Go to repository Settings
   - Pages section
   - Source: `gh-pages` branch

---

### 4. AWS S3 + CloudFront

#### Prerequisites
- AWS Account
- AWS CLI configured

#### Steps

1. Build the project:
```bash
npm run build
```

2. Create S3 bucket:
```bash
aws s3 mb s3://your-portfolio-bucket
```

3. Configure bucket for static hosting:
```bash
aws s3 website s3://your-portfolio-bucket \
  --index-document index.html \
  --error-document index.html
```

4. Upload build:
```bash
aws s3 sync dist/ s3://your-portfolio-bucket --delete
```

5. Set bucket policy for public access

6. (Optional) Configure CloudFront for CDN

---

### 5. Firebase Hosting

#### Setup

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Initialize Firebase:
```bash
firebase init hosting
```

3. Configuration:
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub auto-deploys: `Optional`

4. Deploy:
```bash
npm run build
firebase deploy
```

---

## 🔧 Configuration Tips

### Environment Variables

If you need environment variables:

1. Create `.env.production`:
```
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=azzamaladnani@gmail.com
```

2. Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Performance Optimization

Already included in the build:
✅ Code splitting
✅ Minification
✅ Tree shaking
✅ Asset optimization
✅ Gzip compression (via hosting)

### SEO Optimization

Before deploying:

1. Update `index.html` meta tags:
```html
<meta name="description" content="Your description">
<meta name="keywords" content="keywords">
<meta property="og:title" content="Azzam Adnan - Portfolio">
<meta property="og:description" content="Description">
<meta property="og:image" content="URL to preview image">
```

2. Add `robots.txt` in `public/`:
```
User-agent: *
Allow: /

Sitemap: https://yoursite.com/sitemap.xml
```

3. Add `sitemap.xml` in `public/`

### Custom Domain Setup

After deployment:

1. Purchase domain from:
   - Namecheap
   - GoDaddy
   - Google Domains
   - Cloudflare

2. Add DNS records:
   - For Vercel/Netlify: Follow their DNS instructions
   - For S3: CNAME or A record
   - For GitHub Pages: CNAME file in repo root

3. Enable HTTPS (automatic on most platforms)

---

## 📊 Post-Deployment Checklist

✅ Test all sections and navigation
✅ Verify language switching works
✅ Check dark/light mode toggle
✅ Test on mobile devices
✅ Verify contact form (if backend added)
✅ Check CV download link
✅ Test all external links
✅ Verify responsive design
✅ Check loading times
✅ Test on different browsers

---

## 🔍 Analytics (Optional)

Add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🆘 Troubleshooting

### Build Fails
- Check Node.js version (v18+)
- Clear cache: `rm -rf node_modules && npm install`
- Check for TypeScript errors

### 404 Errors on Refresh
- Configure rewrites for single-page app
- Vercel: Automatic
- Netlify: Add `_redirects` file
- S3: Set error document to `index.html`

### Slow Loading
- Enable CDN (CloudFront, Vercel Edge)
- Optimize images
- Check bundle size: `npm run build`

---

## 📞 Support

For deployment issues:
- Email: azzamaladnani@gmail.com
- Check hosting provider documentation
- Review build logs for errors

**Good luck with your deployment! 🚀**
