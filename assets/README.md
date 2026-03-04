# Assets Directory

This directory contains images and other assets for your website.

## 📸 Required Images

### Profile Photo
- **File**: `profile.jpg`
- **Size**: 300x300px (or larger, will be resized)
- **Format**: JPG, PNG, or WebP
- **Description**: Your professional photo for the homepage

### Character Icons (Optional)
For the Pinky and Brain quote on the homepage:

- **File**: `pinky.png`
- **Size**: 40x40px to 100x100px
- **Format**: PNG (with transparent background recommended)
- **Description**: Image of Pinky from "Pinky and the Brain"

- **File**: `brain.png`
- **Size**: 40x40px to 100x100px
- **Format**: PNG (with transparent background recommended)
- **Description**: Image of Brain from "Pinky and the Brain"

## 🎨 Image Guidelines

### Profile Photo
- Use a professional, high-quality photo
- Good lighting and clear background
- Centered face composition
- Square aspect ratio works best

### Character Icons
- Use official artwork or fan art (check licensing)
- Transparent background (PNG) looks best
- Clear, recognizable character images
- Circular crop works well with the styling

## 📥 Where to Find Images

### Pinky and Brain Images
You can find character images from:
1. **Official Warner Bros. sources** (check licensing)
2. **Fan art sites** (with permission)
3. **Screenshot from the show** (fair use for personal sites)
4. **Icon/emoji versions** from various sources

### Recommended Sources
- [Wikimedia Commons](https://commons.wikimedia.org/)
- [DeviantArt](https://www.deviantart.com/) (with artist permission)
- Official Warner Bros. press kits

## 🔧 Adding Images

### Method 1: Direct Copy
1. Save your images to this `assets/` directory
2. Name them exactly as specified above
3. Refresh your browser

### Method 2: Different Names
If you use different filenames, update `index.html`:
```html
<img src="assets/your-pinky-image.png" alt="Pinky" class="character-icon">
<img src="assets/your-brain-image.png" alt="Brain" class="character-icon">
```

## 🎯 Fallback Behavior

If images are not found:
- Profile photo: Shows a placeholder
- Character icons: Falls back to text labels ("Pinky:" and "Brain:")

This ensures your site works even without the images!

## 📝 Image Optimization Tips

1. **Compress images** before uploading (use TinyPNG or similar)
2. **Use appropriate formats**:
   - JPG for photos
   - PNG for icons/logos with transparency
   - WebP for modern browsers (optional)
3. **Keep file sizes small** (< 500KB for profile, < 100KB for icons)
4. **Use descriptive alt text** for accessibility

## 🚀 Quick Setup

```bash
# Add your images to this directory
cp ~/Downloads/my-photo.jpg assets/profile.jpg
cp ~/Downloads/pinky-icon.png assets/pinky.png
cp ~/Downloads/brain-icon.png assets/brain.png

# Commit and push
git add assets/
git commit -m "Add profile and character images"
git push
```

---

**Note**: The `.gitkeep` file in this directory ensures the folder is tracked by Git even when empty. You can delete it once you add your images.