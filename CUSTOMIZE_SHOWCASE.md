# Quick Reference: Customizing the Premium Showcase

## 🎨 Common Customizations

### Change Auto-Rotation Speed
**File**: `components/PremiumSchemeShowcase.jsx`
```javascript
// Line ~80 - Change from 5000ms to desired time
setInterval(() => {
  setCurrent((prev) => (prev + 1) % SLIDES.length);
}, 5000);  // ← Change this value
```

### Change Slide Height
**File**: `styles/PremiumSchemeShowcase.module.css`
```css
/* Line ~135 */
.slider {
  height: 500px;  /* ← Change to desired height */
}
```

### Modify Colors
**File**: `styles/PremiumSchemeShowcase.module.css`
```css
/* Line ~6-7 */
--primary-blue: #0057b8;      /* ← Primary color */
--accent-gold: #ffc107;       /* ← Accent color */
```

### Add/Remove Slides
**File**: `components/PremiumSchemeShowcase.jsx`
```javascript
// Line ~17-80 - Add new slide object to SLIDES array
const SLIDES = [
  {
    id: 'new-slide',
    title: 'New Scheme',
    // ... other properties
  },
  // ... existing slides
];
```

### Change Button Text
**File**: `components/PremiumSchemeShowcase.jsx`
```javascript
// In SLIDES array, modify cta1 and cta2 labels
cta1: { label: 'New Label', href: '/path', variant: 'primary' },
```

---

## 📱 Responsive Breakpoints

**File**: `styles/PremiumSchemeShowcase.module.css`

```css
/* Tablet (768px and down) */
@media (max-width: 768px) { }

/* Mobile (480px and down) */
@media (max-width: 480px) { }
```

---

## 🎬 Animation Adjustments

### Change Transition Duration
**File**: `components/PremiumSchemeShowcase.jsx`
```javascript
// Line ~96 - Increase/decrease duration
transition={{ duration: 0.5 }}  // ← Change this
```

### Change Zoom Effect
**File**: `components/PremiumSchemeShowcase.jsx`
```javascript
// In imageVariants
enter: {
  scale: 1.05,  // ← Change from 1.05 to desired scale
},
```

### Change Button Animations
**File**: `styles/PremiumSchemeShowcase.module.css`
```css
/* Line ~370 */
.btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);  /* ← Modify timing */
}
```

---

## 🌈 Theme Variations

### Dark Mode (Optional)
```css
/* Add to .showcase */
@media (prefers-color-scheme: dark) {
  --card-bg: #1a1a1a;
  --text-primary: #fff;
  /* ... more dark variables */
}
```

### Different Color Scheme
Change all scheme colors in SLIDES array:
```javascript
color: '#YourHexColor'  // Change per slide
```

---

## 🔧 Troubleshooting

### Issue: Slides not rotating
- Check if `AUTO_MS` interval is correct (line ~80)
- Verify `isPaused` state is not stuck

### Issue: Images not loading
- Verify image paths in `/public/images/`
- Check file names match exactly (case-sensitive on Linux)
- Use Next.js Image component (already done)

### Issue: Animations stuttering
- Check browser GPU acceleration is enabled
- Reduce animation duration
- Check for heavy components below

### Issue: Mobile layout broken
- Check viewport meta tag in `_document.jsx`
- Verify media queries in CSS module
- Test in Chrome DevTools mobile mode

---

## 📊 Performance Tips

1. **Image Optimization**
   - Use PNG/WebP for best quality
   - Compress images before upload
   - Recommended: 1200x800px minimum

2. **Animation Performance**
   - Avoid `will-change: transform` on many elements
   - Use `transform: translateX()` instead of `left/right`
   - Test on low-end devices

3. **Bundle Size**
   - Framer Motion adds ~40KB gzipped (already cached)
   - CSS Modules are tree-shakeable
   - No additional dependencies needed

---

## 🎯 Migration Notes

### From Old HomeShowcase
- All SLIDES data is built-in (no need to import)
- Auto-rotation enabled by default
- Mobile detection automatic
- Responsive grid included

### Breaking Changes
- Image names must match exactly
- Slide IDs must be unique
- Color format: hex (e.g., #0057B8)

---

## 📚 Component Props

```javascript
<PremiumSchemeShowcase 
  embedded={false}  // true = compact padding for embedded use
/>
```

---

## 🔗 Related Files

- **Hero Component**: `components/Hero.jsx` (imports this)
- **Home Page**: `pages/index.jsx` (uses `<Hero homeShowcase />`)
- **Images**: `/public/images/` (Rent-a-roof.jpeg, PM-Suryaghar.jpeg, etc.)

---

## 💡 Advanced Customizations

### Add Sound on Slide Change
```javascript
// Add in goToSlide function
const audio = new Audio('/sounds/chime.mp3');
audio.play();
```

### Add Analytics Tracking
```javascript
// In goToSlide function
analytics.track('Slide Changed', {
  slideId: SLIDES[index].id,
  slideNumber: index + 1
});
```

### Add Loading State
```javascript
// Add useState before component return
const [loading, setLoading] = useState(false);
// Use in image loading: onLoadingComplete={() => setLoading(false)}
```

### Add Swipe Support (Mobile)
```javascript
// Use react-use-gesture or Framer Motion gesture detection
// Add drag handlers to motion.div
```

---

## ✅ Testing Checklist

- [ ] All 4 slides display correctly
- [ ] Auto-rotation works (5 seconds)
- [ ] Next/Previous buttons work
- [ ] Dot navigation works
- [ ] Progress bar animates
- [ ] Mobile layout looks good
- [ ] Buttons are clickable
- [ ] No console errors
- [ ] Images load quickly
- [ ] Animations are smooth

---

## 📝 CSS Variables Available

```css
--primary-blue: #0057b8
--accent-gold: #ffc107
--card-bg: #fff
--text-primary: #1a1a1a
--text-secondary: #666
--border-light: rgba(0, 0, 0, 0.1)
--shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.08)
--shadow-md: 0 12px 32px rgba(0, 0, 0, 0.15)
--shadow-lg: 0 20px 48px rgba(0, 0, 0, 0.2)
```

---

## 🚀 Deployment Notes

- ✅ Framer Motion is already installed
- ✅ No environment variables needed
- ✅ Works with Next.js 14 on Vercel
- ✅ Image optimization automatic
- ✅ CSS Modules tree-shaken in build

---

**Last Updated**: 2026-06-04
**Component Status**: ✅ Production Ready
**Next.js Version**: 14.2.35+
**Framer Motion**: 11.18.2+
