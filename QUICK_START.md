# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: View Your Website Locally
Simply **double-click** `index.html` or drag it to your browser. No server needed!

### Step 2: Add Your Publications
1. Edit `publications.bib` with your BibTeX entries
2. Run: `python convert_bib_to_js.py`
3. Refresh your browser

### Step 3: Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then enable GitHub Pages in repository Settings → Pages.

---

## 📝 Adding Publications

### Easy Way: Export from Google Scholar
1. Find your paper on [Google Scholar](https://scholar.google.com)
2. Click **"Cite"** → **"BibTeX"**
3. Copy the BibTeX entry
4. Paste into `publications.bib`
5. Add optional fields:
   ```bibtex
   url={https://link-to-pdf.com},
   code={https://github.com/your-repo},
   abstract={Your paper abstract}
   ```
6. Run: `python convert_bib_to_js.py`
7. Refresh browser!

### Example Entry
```bibtex
@inproceedings{yourname2025,
  title={Your Amazing Paper Title},
  author={Your Name and Coauthor Name},
  booktitle={Conference Name (CONF)},
  year={2025},
  url={https://example.com/paper.pdf},
  code={https://github.com/username/repo},
  abstract={Brief description of your work}
}
```

---

## 🎨 Customization

### Update Your Info
Edit these files:
- `index.html` - Your bio, research summary
- `blog.html` - Your blog posts
- `talks.html` - Your presentations
- `projects.html` - Your projects

### Change Colors
Edit `css/style.css`:
```css
:root {
    --primary-color: #2c3e50;    /* Main color */
    --secondary-color: #3498db;  /* Links */
    --accent-color: #e74c3c;     /* Highlights */
}
```

### Add Your Photo
1. Add your photo to `assets/profile.jpg`
2. Or update the path in `index.html`

---

## 🔧 Troubleshooting

### Publications not showing?
1. Check that `js/publications-data.js` exists
2. Open browser console (F12) for errors
3. Make sure you ran `python convert_bib_to_js.py`

### CORS Error?
✅ **Fixed!** The new system uses embedded JavaScript data, so it works when opening HTML files directly.

### Want to use a local server anyway?
```bash
python -m http.server 8000
```
Visit: `http://localhost:8000`

---

## 📚 Documentation

- **BIBTEX_GUIDE.md** - Complete BibTeX documentation
- **SETUP.md** - Detailed setup and deployment guide
- **README.md** - Project overview

---

## 💡 Pro Tips

1. **Keep publications.bib updated** - It's your source of truth
2. **Run the converter after edits** - `python convert_bib_to_js.py`
3. **Test locally first** - Open HTML files before deploying
4. **Commit both files** - Always commit both `.bib` and `.js` files
5. **Use meaningful commit messages** - e.g., "Add ICML 2025 paper"

---

## 🎉 You're Ready!

Your website is ready to use. Just:
1. ✅ Add your content
2. ✅ Test locally (double-click index.html)
3. ✅ Push to GitHub
4. ✅ Enable GitHub Pages
5. ✅ Share your new website!

**Need help?** Check the detailed guides or open an issue on GitHub.