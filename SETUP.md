# Quick Setup Guide for Your GitHub Pages Website

## 📋 Prerequisites
- A GitHub account
- Git installed on your computer

## 🚀 Quick Start (5 minutes)

### Step 1: Initialize Git Repository
```bash
cd /Users/rudramurthy/Documents/GitHub/RudraMurthy
git init
git add .
git commit -m "Initial commit: Personal website with blog, talks, publications, and projects"
```

### Step 2: Create GitHub Repository
1. Go to [GitHub](https://github.com) and log in
2. Click the **+** icon in the top right → **New repository**
3. Name it: `RudraMurthy` (or any name you prefer)
4. **Important**: Do NOT initialize with README, .gitignore, or license (we already have these)
5. Click **Create repository**

### Step 3: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/RudraMurthy.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment

Your site will be live at: `https://YOUR_USERNAME.github.io/RudraMurthy/`

## ✏️ Customization Checklist

### Before Going Live:
- [ ] Add your profile photo to `assets/profile.jpg`
- [ ] Update personal information in `index.html`
- [ ] Review and update blog posts in `blog.html`
- [ ] Add your actual talks in `talks.html`
- [ ] Add your real publications in `publications.html`
- [ ] Update projects in `projects.html`
- [ ] Verify all social media links are correct
- [ ] Test the website locally by opening `index.html` in a browser

### Optional Enhancements:
- [ ] Add Google Analytics tracking code
- [ ] Set up a custom domain (if you have one)
- [ ] Add more blog posts
- [ ] Include project screenshots
- [ ] Add publication PDFs to the repository

## 🎨 Customizing Colors

Edit `css/style.css` and change these variables:

```css
:root {
    --primary-color: #2c3e50;    /* Main dark color */
    --secondary-color: #3498db;  /* Links and accents */
    --accent-color: #e74c3c;     /* Highlights */
}
```

## 📱 Testing

### Local Testing:
1. Open `index.html` in your browser
2. Click through all navigation links
3. Test on mobile by resizing your browser window
4. Check all external links work

### After Deployment:
1. Visit your GitHub Pages URL
2. Test all pages and links
3. Check mobile responsiveness
4. Share with friends for feedback!

## 🔄 Making Updates

After making changes to your website:

```bash
git add .
git commit -m "Description of your changes"
git push
```

GitHub Pages will automatically update your site within 1-2 minutes.

## 🆘 Troubleshooting

### Site not showing up?
- Wait 2-3 minutes after enabling GitHub Pages
- Check that GitHub Pages is enabled in Settings → Pages
- Verify the branch is set to `main` and folder to `/ (root)`

### Images not loading?
- Make sure your profile photo is in the `assets/` folder
- Check the file name matches what's in `index.html`
- Use relative paths (e.g., `assets/profile.jpg`)

### Navigation not working on mobile?
- Clear your browser cache
- Check that `js/script.js` is loading correctly

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 💡 Tips

1. **Regular Updates**: Keep your content fresh by regularly updating your blog and projects
2. **SEO**: Add relevant meta descriptions to each page
3. **Performance**: Optimize images before uploading (use tools like TinyPNG)
4. **Backup**: Keep a local copy of your website files
5. **Analytics**: Consider adding Google Analytics to track visitors

## 🎉 You're All Set!

Your personal website is ready to go live. Remember to:
1. Add your profile photo
2. Customize the content
3. Push to GitHub
4. Enable GitHub Pages
5. Share your new website!

Good luck! 🚀