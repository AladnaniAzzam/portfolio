# Customization Guide

This guide will help you customize the portfolio website for your own use or for other clients.

## 🎨 Quick Personalization

### 1. Personal Information

Edit the translation files to update all personal information:

**File: `src/locales/en.json`**

```json
{
  "hero": {
    "name": "Your Full Name",
    "title": "Your Professional Title",
    "intro": "Your professional introduction...",
    // Update contact info
  },
  "contact": {
    "info": {
      "email": "your.email@example.com",
      "phone": "+123 456789",
      "location": "Your Location"
    }
  }
}
```

**File: `src/locales/ar.json`** - Update with Arabic translations

### 2. Colors & Branding

**Primary Colors** (`src/index.css`):

```css
/* Replace gradient colors throughout */
.bg-gradient-to-r {
  /* Change from-blue-600 to-cyan-500 to your colors */
  from: #0EA5E9; /* Your primary color */
  to: #06B6D4;   /* Your secondary color */
}
```

**Tailwind Config** (if needed):

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#yourcolor',
        secondary: '#yourcolor',
        accent: '#yourcolor',
      }
    }
  }
}
```

### 3. Logo/Initials

**File: `src/components/Header.tsx`**

```tsx
{language === 'en' ? 'YI' : 'ي.ا'} // Your initials
```

**File: `src/components/LoadingScreen.tsx`**

```tsx
<span className="text-4xl font-bold text-white">YI</span>
```

### 4. Social Links

**File: `src/components/Contact.tsx`**

```tsx
<a
  href="https://www.linkedin.com/in/your-profile"
  // Update all social media links
>
```

---

## 📝 Content Customization

### Education

**File: `src/locales/en.json`**

```json
"education": {
  "degree": "Your Degree",
  "university": "Your University",
  "year": "Graduation Year",
  "gpa": "Your GPA/Grade"
}
```

### Certifications

Add or remove certifications:

```json
"certs": [
  "Your Certification 1",
  "Your Certification 2",
  "Your Certification 3"
]
```

### Skills

Modify skill categories and items:

```json
"skills": {
  "categories": {
    "mobile": {
      "title": "Your Category",
      "skills": ["Skill 1", "Skill 2", "Skill 3"]
    }
    // Add, remove, or modify categories
  }
}
```

### Experience

Update work history:

```json
"roles": [
  {
    "title": "Your Job Title",
    "company": "Company Name",
    "period": "Start - End",
    "location": "Location",
    "highlights": [
      "Achievement 1",
      "Achievement 2"
    ]
  }
]
```

### Projects

Showcase your projects:

```json
"items": [
  {
    "name": "Project Name",
    "description": "Project description...",
    "tech": ["Tech1", "Tech2", "Tech3"],
    "type": "Project Type"
  }
]
```

---

## 🎨 Design Customization

### Fonts

**Change English Fonts:**

1. Go to [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Update `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

4. Update `src/contexts/LanguageContext.tsx`:

```tsx
root.style.fontFamily = "'YourFont', sans-serif";
```

**Change Arabic Fonts:**

Follow the same process with Arabic-compatible fonts like:
- Almarai
- Amiri
- Lateef
- Scheherazade

### Color Schemes

**Blue/Cyan (Current)**
```
Primary: #0EA5E9, #3B82F6
Accent: #06B6D4, #10B981
```

**Purple/Pink Alternative**
```
from-purple-600 to-pink-500
from-purple-700 to-pink-600
```

**Green/Teal Alternative**
```
from-emerald-600 to-teal-500
from-emerald-700 to-teal-600
```

**Orange/Red Alternative**
```
from-orange-600 to-red-500
from-orange-700 to-red-600
```

### Animations

**Adjust Animation Speed:**

```css
/* src/index.css */
.animate-fadeInUp {
  animation: fadeInUp 1.2s ease-out forwards; /* Change 0.8s to your speed */
}
```

**Disable Animations:**

Remove animation classes from components or add:

```css
* {
  animation: none !important;
  transition: none !important;
}
```

---

## 🖼️ Adding Images

### Hero Background Image

1. Add image to `public/images/hero-bg.jpg`
2. Update Hero component:

```tsx
<section
  style={{
    backgroundImage: 'url(/images/hero-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
```

### Profile Picture

1. Add image to `public/images/profile.jpg`
2. Add to About or Hero section:

```tsx
<img
  src="/images/profile.jpg"
  alt="Your Name"
  className="w-48 h-48 rounded-full mx-auto mb-8"
/>
```

### Project Screenshots

1. Add images to `public/images/projects/`
2. Update Projects component with image URLs

---

## 🔧 Advanced Customization

### Add New Section

1. Create component: `src/components/YourSection.tsx`

```tsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const YourSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="your-section" className="py-20">
      <div className="container mx-auto px-4">
        <h2>{t.yourSection.title}</h2>
        {/* Your content */}
      </div>
    </section>
  );
};
```

2. Add translations to `en.json` and `ar.json`:

```json
"yourSection": {
  "title": "Your Section Title",
  "content": "Your content..."
}
```

3. Import and add to `App.tsx`:

```tsx
import { YourSection } from './components/YourSection';

// In return statement
<YourSection />
```

4. Add navigation link in `Header.tsx`

### Custom Contact Form

To connect a backend:

1. Install axios: `npm install axios`
2. Update Contact component:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await axios.post('/api/contact', formData);
    alert('Message sent successfully!');
  } catch (error) {
    alert('Error sending message');
  }
};
```

### Add More Languages

1. Create `src/locales/fr.json` (French example)
2. Update `LanguageContext.tsx`:

```tsx
import frTranslations from '../locales/fr.json';

type Language = 'en' | 'ar' | 'fr';

const translations = {
  en: enTranslations,
  ar: arTranslations,
  fr: frTranslations,
};
```

3. Update language toggle UI to include new option

### SEO Optimization

**Add meta tags to `index.html`:**

```html
<head>
  <!-- Essential Meta Tags -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Name | Your Title</title>
  <meta name="description" content="Your professional description" />
  <meta name="keywords" content="your, keywords, here" />
  <meta name="author" content="Your Name" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourwebsite.com/" />
  <meta property="og:title" content="Your Name - Portfolio" />
  <meta property="og:description" content="Your description" />
  <meta property="og:image" content="https://yourwebsite.com/preview.jpg" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://yourwebsite.com/" />
  <meta property="twitter:title" content="Your Name - Portfolio" />
  <meta property="twitter:description" content="Your description" />
  <meta property="twitter:image" content="https://yourwebsite.com/preview.jpg" />

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/favicon.png" />
</head>
```

---

## 🎯 Component-Specific Customization

### Header

**Make logo clickable to external site:**

```tsx
<a
  href="https://yourwebsite.com"
  target="_blank"
  rel="noopener noreferrer"
>
  {language === 'en' ? 'YI' : 'ي.ا'}
</a>
```

### Skills

**Change skill categories:**

```tsx
// Update categoryIcons in Skills.tsx
const categoryIcons: Record<string, React.ReactNode> = {
  yourCategory: <YourIcon className="w-6 h-6" />,
};

// Update categoryColors
const categoryColors: Record<string, string> = {
  yourCategory: 'from-your-color to-your-color',
};
```

### Projects

**Add live demo links:**

```tsx
<a
  href={project.liveUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  <ExternalLink className="w-4 h-4" />
  <span>Live Demo</span>
</a>
```

**Add GitHub links:**

```tsx
<a
  href={project.githubUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  Source Code
</a>
```

---

## 📱 Mobile Customization

### Adjust Mobile Menu

**File: `src/components/Header.tsx`**

```tsx
// Change menu animation
className="lg:hidden py-4 animate-fadeInDown"

// Adjust mobile breakpoint
className="hidden xl:flex" // Changes from lg to xl
```

### Mobile-Specific Styles

```tsx
<div className="
  text-base     // Mobile
  sm:text-lg    // Tablet
  lg:text-xl    // Desktop
">
```

---

## 🧪 Testing Customizations

### Checklist

- [ ] Update all personal information
- [ ] Test in both English and Arabic
- [ ] Check dark and light modes
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check form submission
- [ ] Test CV download
- [ ] Validate responsive design
- [ ] Check browser compatibility
- [ ] Review loading speed

### Browser Testing

Test in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Device Testing

Test on:
- iPhone (Safari)
- Android (Chrome)
- iPad/Tablet
- Desktop (various sizes)

---

## 📚 Resources

### Design Inspiration
- [Dribbble](https://dribbble.com)
- [Behance](https://behance.net)
- [Awwwards](https://awwwards.com)

### Color Palettes
- [Coolors](https://coolors.co)
- [Adobe Color](https://color.adobe.com)
- [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)

### Icons
- [Lucide Icons](https://lucide.dev)
- [Heroicons](https://heroicons.com)
- [Font Awesome](https://fontawesome.com)

### Fonts
- [Google Fonts](https://fonts.google.com)
- [Font Pair](https://fontpair.co)

---

## 🆘 Common Issues

### Colors Not Changing

1. Clear Tailwind cache: `rm -rf node_modules/.vite`
2. Rebuild: `npm run dev`
3. Check class names are correct

### Translations Not Showing

1. Verify JSON syntax is correct
2. Check translation keys match
3. Restart dev server

### Images Not Loading

1. Ensure images are in `public/` folder
2. Use correct path: `/images/name.jpg` (no `public/`)
3. Check file extensions match

---

## 💡 Pro Tips

1. **Keep It Simple**: Don't over-customize at once
2. **Test Frequently**: Check changes in both languages
3. **Mobile First**: Always test mobile view
4. **Performance**: Keep bundle size under 500KB
5. **Accessibility**: Maintain color contrast ratios
6. **SEO**: Update meta tags for better search visibility
7. **Backup**: Commit to Git before major changes

---

**Need help? Contact: azzamaladnani@gmail.com**

**Happy Customizing! 🎨**
