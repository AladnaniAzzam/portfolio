# Profile Image Setup Guide

## 📸 Adding Your Profile Picture

### Required Image Specifications

#### **File Location**
Place your profile picture at:
```
public/assets/images/azzam_profile.jpg
```

#### **Image Requirements**
- **Format**: JPG, JPEG, or PNG (JPG recommended for smaller file size)
- **Dimensions**: 
  - Minimum: 600x600 pixels
  - Recommended: 1000x1000 pixels (for Retina displays)
  - Maximum: 2000x2000 pixels
- **Aspect Ratio**: 1:1 (Perfect Square)
- **File Size**: 
  - Recommended: < 500 KB
  - Maximum: 1 MB
- **Quality**: High resolution, professional headshot

#### **Image Composition Guidelines**
- ✅ Face centered in the frame
- ✅ Good lighting (well-lit, no harsh shadows)
- ✅ Professional attire
- ✅ Clean background (solid color or subtle gradient preferred)
- ✅ Head and shoulders visible
- ✅ Friendly, professional expression
- ✅ High contrast (stands out in both light and dark mode)

---

## 🎨 Current Implementation

### Responsive Sizing
The image adapts to different screen sizes:

| Device | Size | Viewport |
|--------|------|----------|
| Mobile (< 320px) | 192px × 192px | Extra small phones |
| Mobile (320px - 480px) | 224px × 224px | Standard phones |
| Tablet (480px - 768px) | 256px × 256px | Large phones/small tablets |
| Tablet (768px - 1024px) | 288px × 288px | iPads |
| Laptop (1024px - 1280px) | 320px × 320px | Laptops |
| Desktop (1280px+) | 384px × 384px | Large screens |

### Visual Effects

#### **Light Mode:**
- Gradient border: Blue → Cyan → Emerald
- White inner ring
- Slate ring on image
- Clean shadow

#### **Dark Mode:**
- Gradient border: Cyan → Blue → Emerald (lighter)
- Dark slate inner ring
- Darker ring on image
- Glowing effect

#### **Hover Effects:**
- Image scales up 110%
- Border ring changes color
- Glow opacity increases
- Smooth 500ms-700ms transitions

---

## 🚀 Quick Setup

### Option 1: Use Your Own Photo

1. **Prepare your photo:**
   ```bash
   # Resize to 1000x1000 (using ImageMagick)
   convert your_photo.jpg -resize 1000x1000^ -gravity center -extent 1000x1000 azzam_profile.jpg
   
   # Or crop to square (Photoshop, GIMP, etc.)
   # Ensure it's 1:1 aspect ratio
   ```

2. **Optimize the file:**
   ```bash
   # Using ImageMagick to reduce file size
   convert azzam_profile.jpg -quality 85 -strip azzam_profile.jpg
   
   # Or use online tools:
   # - TinyJPG.com
   # - Squoosh.app
   # - CompressJPEG.com
   ```

3. **Place the file:**
   ```bash
   # Copy to the correct location
   cp azzam_profile.jpg public/assets/images/
   ```

### Option 2: Use a Placeholder Avatar

Until you have a professional photo, use a placeholder:

#### **AI-Generated Avatar Services:**
- [DiceBear Avatars](https://avatars.dicebear.com/) - Free AI avatars
- [UI Avatars](https://ui-avatars.com/) - Text-based avatars
- [Boring Avatars](https://boringavatars.com/) - Unique generated avatars

#### **Example Placeholder URLs:**
```html
<!-- AI Generated Avatar (DiceBear) -->
<img src="https://api.dicebear.com/7.x/avataaars/svg?seed=AzzamAdnan" />

<!-- Text-based Avatar (UI Avatars) -->
<img src="https://ui-avatars.com/api/?name=Azzam+Adnan&size=1000&background=0ea5e9&color=fff&bold=true" />

<!-- Professional Stock Photo (Unsplash) -->
<img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1000&h=1000&fit=crop" />
```

#### **Update the image src in Hero.tsx:**
```tsx
<img
  src="https://ui-avatars.com/api/?name=Azzam+Adnan&size=1000&background=0ea5e9&color=fff&bold=true"
  alt="Azzam Adnan Abdalghani - IT Engineer & Full-Stack Developer"
  // ... rest of props
/>
```

---

## 📱 Testing Your Image

After adding your image, test it:

### **Visual Checks:**
- [ ] Image loads correctly
- [ ] No distortion or stretching
- [ ] Centered properly on mobile
- [ ] Positioned correctly on desktop
- [ ] Looks good in light mode
- [ ] Looks good in dark mode
- [ ] Hover effect works smoothly
- [ ] Border glow is visible
- [ ] Responsive sizes work at all breakpoints

### **Performance Checks:**
- [ ] Image loads quickly (< 2 seconds on 3G)
- [ ] File size is optimized (< 500 KB)
- [ ] No layout shift on load
- [ ] Retina display looks crisp

### **Browser Testing:**
- [ ] Chrome (Desktop & Mobile)
- [ ] Firefox
- [ ] Safari (Desktop & iOS)
- [ ] Edge

---

## 🎨 Customization Options

### Change Border Shape

#### **Perfect Circle (Current):**
```tsx
className="rounded-full"
```

#### **Squircle (Smooth Rounded Square):**
```tsx
className="rounded-3xl"  // or rounded-2xl
```

#### **Hexagon (Advanced):**
Use custom CSS with clip-path:
```css
.hexagon {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
```

### Change Glow Colors

Update the gradient in Hero.tsx:

#### **Purple/Pink Theme:**
```tsx
className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"
```

#### **Orange/Red Theme:**
```tsx
className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"
```

#### **Monochrome Theme:**
```tsx
className="bg-gradient-to-r from-gray-400 via-slate-400 to-zinc-400"
```

---

## 🐛 Troubleshooting

### Image Not Showing?

1. **Check file path:**
   ```bash
   # Verify file exists
   ls -la public/assets/images/azzam_profile.jpg
   ```

2. **Check file permissions:**
   ```bash
   # Make sure it's readable
   chmod 644 public/assets/images/azzam_profile.jpg
   ```

3. **Clear browser cache:**
   - Chrome: Ctrl+Shift+R (Cmd+Shift+R on Mac)
   - Hard refresh to reload images

4. **Check browser console:**
   - Open DevTools (F12)
   - Look for 404 errors
   - Verify the image URL

### Image Looks Stretched?

- Ensure your image is **square** (1:1 aspect ratio)
- Use `object-cover` class (already applied)
- Crop your image before uploading

### Image Too Large (Slow Loading)?

1. **Compress the image:**
   - Use [TinyJPG](https://tinyjpg.com/)
   - Or [Squoosh](https://squoosh.app/)

2. **Reduce dimensions:**
   - 1000x1000 is sufficient
   - No need for 4000x4000

3. **Convert to WebP:**
   ```bash
   # Using ImageMagick
   convert azzam_profile.jpg -quality 85 azzam_profile.webp
   ```

### Hover Effect Not Working?

- Ensure you're on a device with a mouse (hover doesn't work on touch)
- Check that `group` class is on the parent
- Verify `group-hover:` classes are present

---

## 📸 Professional Photo Tips

### **Hiring a Photographer:**
- Look for headshot specialists
- Bring 2-3 outfit options
- Ask for digital files in high resolution
- Request both color and black & white versions

### **DIY Professional Photo:**
1. **Lighting:**
   - Natural light (near a window)
   - Soft, diffused light (not direct sunlight)
   - Face the light source

2. **Background:**
   - Solid color wall (white, gray, or blue)
   - Clean and uncluttered
   - Sufficient distance from wall (avoid shadows)

3. **Camera:**
   - Use a good smartphone camera (iPhone 12+, Pixel 6+)
   - Use portrait mode if available
   - Set a timer and use a tripod or stable surface

4. **Composition:**
   - Eyes at 1/3 from top of frame
   - Leave some space above head
   - Frame from chest up
   - Look directly at camera
   - Slight smile (approachable but professional)

5. **Editing:**
   - Adjust brightness/contrast
   - Light retouching (remove blemishes)
   - Don't over-edit (keep it natural)
   - Save at high quality

---

## 🎯 Best Practices

✅ **DO:**
- Use a high-quality, professional photo
- Ensure good lighting and clarity
- Wear professional attire
- Use a clean, simple background
- Smile naturally
- Optimize file size
- Test on multiple devices

❌ **DON'T:**
- Use selfies or casual photos
- Use group photos (crop yourself)
- Use heavily filtered images
- Use outdated photos (> 2 years old)
- Use images with distracting backgrounds
- Upload massive file sizes (> 1 MB)
- Forget to test on mobile

---

## 📞 Need Help?

If you need assistance with image preparation:
- **Email**: azzamaladnani@gmail.com
- **Online Tools**: See "Option 2" above for placeholder services

---

**Your professional photo is ready! 📸**
