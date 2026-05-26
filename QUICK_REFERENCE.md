# ⚡ Quick Reference Guide

Your go-to cheat sheet for common tasks and commands.

## 🎯 Most Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build

# Installation
npm install              # Install all dependencies
npm install <package>    # Add new package
```

## 📁 File Locations Quick Map

```
Key Files You'll Edit Most:
├── src/locales/en.json         # English content
├── src/locales/ar.json         # Arabic content
├── index.html                  # Page title, meta tags
├── public/                     # Static files (CV, images)
└── src/components/             # UI components

Components:
├── Header.tsx                  # Navigation bar
├── Hero.tsx                    # Top banner section
├── About.tsx                   # About/education section
├── Skills.tsx                  # Skills showcase
├── Experience.tsx              # Work history
├── Projects.tsx                # Portfolio projects
├── Contact.tsx                 # Contact form
└── Footer.tsx                  # Bottom section
```

## 🎨 Common Customizations

### Update Your Name
```json
// src/locales/en.json
"hero": {
  "name": "Your Name Here"
}
```

### Change Email
```json
// src/locales/en.json
"contact": {
  "info": {
    "email": "your@email.com"
  }
}
```

### Add a Skill
```json
// src/locales/en.json
"skills": {
  "categories": {
    "mobile": {
      "skills": ["Skill 1", "Skill 2", "YOUR NEW SKILL"]
    }
  }
}
```

### Change Primary Color
```tsx
// Find in any component:
from-blue-600 to-cyan-500

// Change to:
from-purple-600 to-pink-500
```

## 🌍 Language Toggle

**Location:** Top-right corner (Globe icon)
- English ↔ Arabic
- Auto-switches fonts and layout direction

## 🌓 Theme Toggle

**Location:** Top-right corner (Sun/Moon icon)
- Light ↔ Dark mode
- Smooth color transitions

## 🔧 Quick Fixes

### Server won't start?
```bash
rm -rf node_modules
npm install
npm run dev
```

### Changes not showing?
1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear cache
3. Restart dev server

### Build fails?
```bash
npm run build
# Read error messages
# Fix TypeScript errors shown
```

## 📊 Important Breakpoints

```css
Mobile:     < 640px  (sm)
Tablet:     640-1024px (md, lg)
Desktop:    > 1024px (xl, 2xl)
```

## 🎨 Color Class Quick Reference

```tsx
// Primary Blues
from-blue-600 to-cyan-500    // Main brand
from-blue-700 to-cyan-600    // Darker variant

// Success/Actions
from-emerald-600 to-teal-500 // Green theme

// Backgrounds
bg-white dark:bg-slate-900   // Adaptive background
bg-slate-50 dark:bg-slate-800 // Card backgrounds

// Text
text-gray-900 dark:text-white      // Primary text
text-gray-600 dark:text-gray-400   // Secondary text
```

## 📝 Translation Structure

```json
{
  "nav": {},        // Navigation menu
  "hero": {},       // Hero section
  "about": {},      // About section
  "skills": {},     // Skills section
  "experience": {}, // Experience section
  "projects": {},   // Projects section
  "contact": {},    // Contact section
  "footer": {},     // Footer
  "common": {}      // Shared text
}
```

## 🚀 Deployment Quick Steps

### Vercel (Fastest)
```bash
1. Push to GitHub
2. Go to vercel.com
3. Import project
4. Deploy (auto-detected)
```

### Netlify (Easiest)
```bash
1. npm run build
2. Go to netlify.com
3. Drag dist/ folder
4. Done!
```

## 💡 Pro Tips

| Task | Shortcut/Tip |
|------|--------------|
| Find in files | `Ctrl+Shift+F` (VS Code) |
| Format code | `Shift+Alt+F` (VS Code) |
| Find component | Search `.tsx` files |
| Find text | Search `.json` files |
| Quick nav | Click section in browser |

## 🎯 Testing Checklist

Quick test before deploying:
- [ ] Test in English
- [ ] Test in Arabic (RTL)
- [ ] Try dark mode
- [ ] Try light mode
- [ ] Test on mobile (DevTools)
- [ ] Check all links
- [ ] Test contact form
- [ ] Verify build succeeds

## 📞 Quick Contact

**Email:** azzamaladnani@gmail.com
**Phone:** +966 557662446

## 📚 Documentation Quick Links

| Need to... | Read this |
|-----------|-----------|
| Get started | [GETTING_STARTED.md](GETTING_STARTED.md) |
| Customize content | [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) |
| Deploy | [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) |
| Add languages | [LOCALIZATION_GUIDE.md](LOCALIZATION_GUIDE.md) |
| See all features | [FEATURES.md](FEATURES.md) |
| Find anything | [DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md) |

## 🔑 Key Component Props

### Skills Categories
```typescript
mobile, backend, frontend, database, 
devops, erp, desktop, design
```

### Theme Values
```typescript
'light' | 'dark'
```

### Language Values
```typescript
'en' | 'ar'
```

## ⚙️ Environment Variables (if needed)

Create `.env`:
```env
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=your@email.com
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🎨 Icon Reference

Using Lucide React:
```tsx
import { IconName } from 'lucide-react';

<IconName className="w-5 h-5" />
```

Common icons in project:
- Sun, Moon (theme)
- Globe (language)
- Mail, Phone, MapPin (contact)
- Download (CV)
- Menu, X (mobile menu)

## 📱 Responsive Utilities

```tsx
// Visibility
hidden md:block              // Hide on mobile, show on tablet+
block md:hidden              // Show on mobile, hide on tablet+

// Sizing
text-base md:text-lg lg:text-xl
px-4 md:px-6 lg:px-8

// Layout
flex-col md:flex-row        // Stack on mobile, row on tablet+
```

## 🔄 Common Patterns

### Gradient Button
```tsx
className="bg-gradient-to-r from-blue-600 to-cyan-500 
  hover:from-blue-700 hover:to-cyan-600 
  text-white px-8 py-4 rounded-xl"
```

### Card with Hover
```tsx
className="bg-white dark:bg-slate-800 
  rounded-xl p-6 
  border border-gray-200 dark:border-slate-700
  hover:border-blue-500 dark:hover:border-cyan-500
  transition-all duration-300 hover:shadow-xl"
```

### RTL-Safe Spacing
```tsx
className="space-x-4 rtl:space-x-reverse"
className="ml-4 rtl:mr-4 rtl:ml-0"
```

---

**Print this page and keep it handy while developing! 📌**

Last updated: 2025
