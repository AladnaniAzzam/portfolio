# 🚀 Getting Started - Quick Start Guide

Welcome! This guide will help you get the portfolio up and running in **under 5 minutes**.

## ⚡ Super Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser to http://localhost:5173
```

**That's it!** Your portfolio is now running locally. 🎉

---

## 📋 Complete Setup Guide

### Step 1: Prerequisites

Ensure you have:
- ✅ **Node.js** (v18 or higher) - [Download here](https://nodejs.org)
- ✅ **npm** or **yarn** (comes with Node.js)
- ✅ **Code editor** (VS Code recommended)
- ✅ **Git** (optional, for version control)

**Check your versions:**
```bash
node --version  # Should be v18 or higher
npm --version   # Should be 8 or higher
```

---

### Step 2: Installation

```bash
# Navigate to project directory
cd portfolio-website

# Install all dependencies
npm install

# Wait for installation to complete (~30 seconds)
```

**What gets installed:**
- React & React DOM
- TypeScript
- Vite (build tool)
- Tailwind CSS
- Lucide React (icons)
- All development dependencies

---

### Step 3: Development

```bash
# Start the development server
npm run dev
```

**You should see:**
```
VITE v7.3.2  ready in X ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

**Open your browser to:** `http://localhost:5173`

---

### Step 4: Explore the Portfolio

Test all features:
- ✅ Click the **Theme Toggle** (Sun/Moon icon) - See dark/light mode
- ✅ Click the **Language Toggle** (Globe icon) - Switch between English/Arabic
- ✅ Scroll through all sections
- ✅ Try the mobile menu (resize browser window)
- ✅ Click navigation links
- ✅ Test the contact form
- ✅ Try the "Scroll to Top" button

---

## 🎨 First Customizations (Optional)

### Update Your Name

**File: `src/locales/en.json`**
```json
{
  "hero": {
    "name": "Your Full Name Here"
  }
}
```

**File: `src/locales/ar.json`**
```json
{
  "hero": {
    "name": "اسمك الكامل هنا"
  }
}
```

**Save the files** and the page will auto-reload!

---

### Change Theme Colors

**File: `src/components/Hero.tsx`** (or any component)

Find:
```tsx
className="bg-gradient-to-r from-blue-600 to-cyan-500"
```

Change to:
```tsx
className="bg-gradient-to-r from-purple-600 to-pink-500"
```

**Try different color combinations:**
- `from-emerald-600 to-teal-500` (Green)
- `from-orange-600 to-red-500` (Orange)
- `from-indigo-600 to-purple-500` (Purple)

---

## 🏗️ Building for Production

When ready to deploy:

```bash
# Build the project
npm run build

# Preview the production build locally
npm run preview
```

**Build output:**
```
dist/
└── index.html  (~300 KB, ~82 KB gzipped)
```

This is your production-ready website!

---

## 🌐 Quick Deploy (5 minutes)

### Option 1: Vercel (Recommended)

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)**

3. **Click "Import Project"**

4. **Select your GitHub repository**

5. **Click "Deploy"** (Vercel auto-detects Vite)

6. **Done!** Your site is live at `your-project.vercel.app`

### Option 2: Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Go to [netlify.com](https://netlify.com)**

3. **Drag and drop** the `dist` folder

4. **Done!** Your site is live!

---

## 📚 Next Steps

Now that you're up and running:

### 1. **Personalize Content**
Read: [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)
- Update personal information
- Add your CV
- Modify sections

### 2. **Understand Features**
Read: [FEATURES.md](FEATURES.md)
- Learn about all features
- Understand components
- See design system

### 3. **Deploy to Production**
Read: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- Choose hosting platform
- Configure custom domain
- Optimize SEO

### 4. **Explore Localization**
Read: [LOCALIZATION_GUIDE.md](LOCALIZATION_GUIDE.md)
- Understand i18n
- Add more languages
- RTL best practices

---

## 🎯 Quick Command Reference

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Useful Commands
```bash
npm install          # Install dependencies
npm install [package]  # Install new package
rm -rf node_modules  # Clean install (if issues)
```

---

## 🐛 Troubleshooting

### "npm not found"
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org)

### "Port 5173 already in use"
**Solution:** 
```bash
# Kill the process
npx kill-port 5173

# Or change port in vite.config.ts
```

### "Module not found"
**Solution:**
```bash
# Clean install
rm -rf node_modules
npm install
```

### "Build fails"
**Solution:**
```bash
# Check TypeScript errors
npm run build

# Fix any reported errors
```

### Page doesn't auto-reload
**Solution:**
1. Check console for errors
2. Restart dev server (Ctrl+C, then `npm run dev`)
3. Clear browser cache

---

## 💡 Pro Tips

### 1. **Use Browser DevTools**
- Press **F12** to open DevTools
- Test responsive design
- Check console for errors
- Debug JavaScript

### 2. **Hot Module Replacement (HMR)**
- Changes auto-reload instantly
- No need to refresh browser
- State is preserved

### 3. **VS Code Extensions**
Install these for better development:
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **TypeScript and JavaScript Language Features**
- **Prettier - Code formatter**

### 4. **Git Commits**
```bash
# Commit frequently
git add .
git commit -m "Update: description of changes"
```

### 5. **Test Both Languages**
Always test changes in:
- ✅ English mode
- ✅ Arabic mode (RTL)
- ✅ Both themes (dark/light)

---

## 📊 Project Status Checklist

Track your progress:

### Initial Setup
- [ ] Installed Node.js
- [ ] Cloned/downloaded project
- [ ] Ran `npm install`
- [ ] Started dev server
- [ ] Viewed in browser

### Exploration
- [ ] Tested theme toggle
- [ ] Tested language toggle
- [ ] Scrolled through all sections
- [ ] Tested mobile view
- [ ] Tried navigation links

### Customization
- [ ] Updated personal name
- [ ] Changed contact info
- [ ] Updated education details
- [ ] Modified skills list
- [ ] Updated experience
- [ ] Added projects

### Production
- [ ] Built successfully
- [ ] Tested production build
- [ ] Added CV file
- [ ] Deployed to hosting
- [ ] Configured custom domain (optional)

---

## 🎓 Learning Path

### Beginner Level
1. ✅ Get it running (this guide)
2. 📖 Read [README.md](README.md)
3. 🎨 Try [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)

### Intermediate Level
4. 📚 Study [FEATURES.md](FEATURES.md)
5. 🌍 Explore [LOCALIZATION_GUIDE.md](LOCALIZATION_GUIDE.md)
6. 🚀 Deploy using [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

### Advanced Level
7. 🔧 Modify components
8. ➕ Add new sections
9. 🎯 Optimize performance
10. 🌐 Add more languages

---

## 📞 Get Help

### Documentation
- 📖 [DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md) - Find any guide

### Common Questions
- **Q: How do I change colors?**
  A: See CUSTOMIZATION_GUIDE.md → "Colors & Branding"

- **Q: How do I deploy?**
  A: See DEPLOYMENT_GUIDE.md → Choose a platform

- **Q: How do I add content?**
  A: See CUSTOMIZATION_GUIDE.md → "Content Customization"

- **Q: Where do I add my CV?**
  A: See public/README_CV.md

### Contact Support
- **Email:** azzamaladnani@gmail.com
- **Phone:** +966 557662446

---

## ✅ Quick Checklist

Before you start coding:
- [ ] Read this guide completely
- [ ] Installed all prerequisites
- [ ] Project running locally
- [ ] Tested all features
- [ ] Understand basic structure

Before deploying:
- [ ] Updated all personal information
- [ ] Tested both languages
- [ ] Tested both themes
- [ ] Build successful
- [ ] CV added (if desired)

---

## 🎉 You're Ready!

**Congratulations!** You now have:
- ✅ A running development environment
- ✅ Understanding of basic structure
- ✅ Knowledge of where to customize
- ✅ Path to deployment

**Next:** Choose your path
- 🎨 **Customize it** → [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)
- 📚 **Learn more** → [FEATURES.md](FEATURES.md)
- 🚀 **Deploy it** → [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

---

## 🌟 Tips for Success

1. **Start Small** - Make one change at a time
2. **Test Often** - Check after each change
3. **Save Backups** - Use Git commits
4. **Read Docs** - Comprehensive guides available
5. **Ask Questions** - Contact for help

---

**Happy Building! 🚀**

*Your professional portfolio awaits!*

---

**Built with ❤️ using React + TypeScript + Vite + Tailwind CSS**

Contact: azzamaladnani@gmail.com
