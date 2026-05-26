# Localization Guide

This portfolio website supports full localization between English (LTR) and Arabic (RTL).

## How Localization Works

### 1. Translation Files

Located in `src/locales/`:
- `en.json` - English translations
- `ar.json` - Arabic translations

### 2. Language Context

The `LanguageContext` (`src/contexts/LanguageContext.tsx`) provides:
- Current language (`en` or `ar`)
- Toggle function to switch languages
- Translation object (`t`) with all content
- RTL flag for layout adjustments

### 3. Font Switching

Fonts automatically change based on language:

**English (LTR):**
- Primary: Inter
- Secondary: Poppins

**Arabic (RTL):**
- Primary: Tajawal
- Secondary: Cairo

### 4. Layout Direction

The `dir` attribute on the HTML root element automatically switches:
- `dir="ltr"` for English
- `dir="rtl"` for Arabic

### 5. Tailwind RTL Classes

Use Tailwind's RTL utilities for directional spacing:

```jsx
// Instead of:
className="ml-4"

// Use:
className="ms-4"  // margin-start (left in LTR, right in RTL)

// Or with explicit RTL support:
className="ml-4 rtl:mr-4 rtl:ml-0"
```

Common RTL patterns:
- `rtl:space-x-reverse` - Reverse horizontal spacing
- `rtl:text-right` - Text alignment
- `rtl:flex-row-reverse` - Reverse flex direction

### 6. Adding New Content

To add new translatable content:

1. Add the key to both `en.json` and `ar.json`:

```json
// en.json
{
  "newSection": {
    "title": "My New Section",
    "description": "This is a new section"
  }
}

// ar.json
{
  "newSection": {
    "title": "قسمي الجديد",
    "description": "هذا قسم جديد"
  }
}
```

2. Use in your component:

```tsx
const { t } = useLanguage();

return (
  <h2>{t.newSection.title}</h2>
  <p>{t.newSection.description}</p>
);
```

### 7. Best Practices

#### DO:
✅ Use semantic spacing utilities (ms, me, ps, pe)
✅ Test both LTR and RTL layouts
✅ Keep translation keys consistent across languages
✅ Use `space-x-reverse` for flex spacing in RTL
✅ Handle directional icons (arrows, chevrons)

#### DON'T:
❌ Hardcode left/right margins
❌ Assume text direction
❌ Use directional CSS properties directly
❌ Forget to translate user-facing strings
❌ Mix LTR and RTL content in the same section

### 8. Testing Localization

1. Click the language toggle (Globe icon) in the header
2. Verify that:
   - All text is translated
   - Layout direction changes
   - Fonts switch appropriately
   - Spacing and alignment are correct
   - Animations work in both directions

### 9. Adding More Languages

To add additional languages (e.g., French):

1. Create `src/locales/fr.json`
2. Update `LanguageContext.tsx`:
```tsx
type Language = 'en' | 'ar' | 'fr';

const translations = {
  en: enTranslations,
  ar: arTranslations,
  fr: frTranslations,
};
```
3. Update the language toggle logic
4. Add font support in CSS

## Common RTL Patterns

### Flex Layouts
```tsx
<div className="flex space-x-4 rtl:space-x-reverse">
  {/* Items will reverse in RTL */}
</div>
```

### Text Alignment
```tsx
<p className="text-left rtl:text-right">
  This text aligns based on direction
</p>
```

### Margins and Padding
```tsx
<div className="ml-4 rtl:mr-4 rtl:ml-0">
  Margin switches sides in RTL
</div>
```

### Icons
```tsx
// For directional icons like arrows
<ChevronRight className="rtl:rotate-180" />
```

## Accessibility

- Language is set on the `<html>` element via `lang` attribute
- Text direction is set via `dir` attribute
- Screen readers respect language and direction
- Keyboard navigation works correctly in both directions

## Performance

- Translations are loaded at build time
- Font files are optimized by Google Fonts
- Language preference is cached in localStorage
- No runtime translation overhead

---

For questions or issues, please contact: azzamaladnani@gmail.com
