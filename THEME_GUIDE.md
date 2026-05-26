# 🎨 دليل استخدام الثيم (Theme Guide)

## ✅ تم إصلاح الثيم الداكن والفاتح

تم تكوين الموقع بنجاح لدعم الوضع الداكن والفاتح باستخدام Tailwind CSS.

---

## 🌓 كيفية استخدام الثيم

### التبديل بين الأوضاع

1. **من الموقع**: اضغط على أيقونة الشمس/القمر في الزاوية العلوية اليمنى
   - 🌙 القمر = الوضع الداكن
   - ☀️ الشمس = الوضع الفاتح

2. **الثيم الافتراضي**: الوضع الداكن (يمكن تغييره من ThemeContext.tsx)

3. **التخزين**: يتم حفظ اختيارك في localStorage تلقائياً

---

## 🎨 الألوان المستخدمة

### الوضع الفاتح (Light Mode)
```css
الخلفية الأساسية: #ffffff (أبيض)
الخلفية الثانوية: #f8fafc (رمادي فاتح جداً)
النص الأساسي: #1f2937 (رمادي داكن)
النص الثانوي: #6b7280 (رمادي متوسط)
```

### الوضع الداكن (Dark Mode)
```css
الخلفية الأساسية: #0f172a (أزرق داكن)
الخلفية الثانوية: #1e293b (أزرق رمادي)
النص الأساسي: #f9fafb (أبيض تقريباً)
النص الثانوي: #9ca3af (رمادي فاتح)
```

---

## 💻 كيفية استخدام الثيم في الكود

### في Components

استخدم كلاسات Tailwind مع `dark:` prefix:

```tsx
// خلفية متكيفة
<div className="bg-white dark:bg-slate-900">

// نص متكيف
<p className="text-gray-900 dark:text-white">

// حدود متكيفة
<div className="border-gray-200 dark:border-slate-700">

// hover متكيف
<button className="hover:bg-gray-100 dark:hover:bg-slate-800">
```

### أمثلة شائعة

```tsx
// Card Component
<div className="bg-white dark:bg-slate-800 
                rounded-xl p-6 
                border border-gray-200 dark:border-slate-700">
  <h3 className="text-gray-900 dark:text-white">العنوان</h3>
  <p className="text-gray-600 dark:text-gray-400">النص</p>
</div>

// Button Component
<button className="bg-blue-600 hover:bg-blue-700 
                   dark:bg-cyan-500 dark:hover:bg-cyan-600 
                   text-white">
  زر
</button>

// Input Component
<input className="bg-white dark:bg-slate-800 
                  text-gray-900 dark:text-white 
                  border-gray-300 dark:border-slate-700" />
```

---

## ⚙️ التكوين

### tailwind.config.js
```javascript
export default {
  darkMode: 'class', // تفعيل الوضع الداكن بالـ class
  // ...
}
```

### ThemeContext.tsx
```typescript
// تغيير الثيم الافتراضي
const [theme, setTheme] = useState<Theme>(() => {
  const saved = localStorage.getItem('theme') as Theme;
  return saved || 'dark'; // غير 'dark' إلى 'light' للوضع الفاتح افتراضياً
});
```

---

## 🔧 التخصيص

### تغيير الألوان الأساسية

في `src/index.css`:

```css
:root {
  --bg-primary: #ffffff;      /* لون الخلفية الفاتحة */
  --bg-secondary: #f8fafc;    /* لون الخلفية الثانوية */
  --text-primary: #1f2937;    /* لون النص */
  --text-secondary: #6b7280;  /* لون النص الثانوي */
}

.dark {
  --bg-primary: #0f172a;      /* لون الخلفية الداكنة */
  --bg-secondary: #1e293b;    /* لون الخلفية الثانوية */
  --text-primary: #f9fafb;    /* لون النص */
  --text-secondary: #9ca3af;  /* لون النص الثانوي */
}
```

### إضافة ألوان مخصصة في Tailwind

في `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'custom-light': '#yourcolor',
      'custom-dark': '#yourcolor',
    }
  }
}
```

استخدامها:
```tsx
<div className="bg-custom-light dark:bg-custom-dark">
```

---

## 🎯 أفضل الممارسات

### ✅ افعل:
- استخدم دائماً `dark:` مع كلاسات الألوان
- اختبر في كلا الوضعين
- حافظ على التباين الجيد للنصوص
- استخدم ألوان Tailwind الجاهزة

### ❌ لا تفعل:
- لا تستخدم ألوان ثابتة فقط
- لا تنس إضافة `dark:` للخلفيات
- لا تستخدم ألوان فاتحة جداً على خلفية فاتحة

---

## 🧪 اختبار الثيم

### خطوات الاختبار:

1. **افتح الموقع**
   ```bash
   npm run dev
   ```

2. **اختبر التبديل**
   - اضغط على زر الثيم (شمس/قمر)
   - تأكد من تغيير الألوان

3. **اختبر الحفظ**
   - بدّل الثيم
   - أعد تحميل الصفحة
   - يجب أن يبقى الثيم كما اخترته

4. **اختبر جميع الأقسام**
   - Hero Section ✓
   - About ✓
   - Skills ✓
   - Experience ✓
   - Projects ✓
   - Contact ✓
   - Footer ✓

---

## 🔍 استكشاف الأخطاء

### الثيم لا يتغير؟

1. **تأكد من tailwind.config.js**
   ```javascript
   darkMode: 'class'
   ```

2. **تحقق من console للأخطاء**
   - افتح DevTools (F12)
   - تحقق من Console

3. **امسح الـ cache**
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

### الألوان خاطئة؟

1. **تحقق من الكلاسات**
   - تأكد من استخدام `dark:` قبل الكلاس

2. **أعد بناء المشروع**
   ```bash
   npm run build
   ```

### الثيم لا يُحفظ؟

1. **تحقق من localStorage**
   - افتح DevTools
   - Application → Local Storage
   - يجب أن ترى `theme: "dark"` أو `"light"`

2. **تحقق من ThemeContext**
   - تأكد من أن ThemeProvider موجود في App.tsx

---

## 📱 الثيم على الموبايل

الثيم يعمل تلقائياً على جميع الأجهزة:
- ✅ iPhone
- ✅ Android
- ✅ iPad
- ✅ جميع المتصفحات

---

## 🎨 اقتراحات تصميم

### للوضع الفاتح:
- استخدم ألوان ناعمة ومريحة للعين
- حافظ على تباين جيد
- استخدم ظلال خفيفة

### للوضع الداكن:
- استخدم ألوان داكنة لكن ليست سوداء تماماً
- الأزرق الداكن أفضل من الأسود
- استخدم ألوان فاتحة للنصوص

---

## 🔗 موارد مفيدة

- [Tailwind Dark Mode Docs](https://tailwindcss.com/docs/dark-mode)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)

---

## ✅ قائمة التحقق

قبل النشر:
- [ ] اختبار التبديل بين الأوضاع
- [ ] اختبار جميع الأقسام في الوضع الفاتح
- [ ] اختبار جميع الأقسام في الوضع الداكن
- [ ] التأكد من حفظ الاختيار
- [ ] اختبار على الموبايل
- [ ] التأكد من التباين الجيد للنصوص
- [ ] اختبار في متصفحات مختلفة

---

## 📞 الدعم

إذا واجهت مشاكل:
- **Email**: azzamaladnani@gmail.com
- **راجع**: [DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md)

---

**تم إصلاح الثيم بنجاح! 🎉**

الآن يمكنك:
- ✅ التبديل بين الوضع الداكن والفاتح
- ✅ حفظ اختيارك تلقائياً
- ✅ استخدام الثيم في جميع المكونات

**استمتع بالتطوير! 🚀**
