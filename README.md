# Rudra V. Murthy - Personal Website

A clean, modern personal website built for GitHub Pages featuring sections for About, Blog, Invited Talks, Publications, and Projects.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean Navigation**: Easy-to-use navigation menu with mobile support
- **Multiple Pages**:
  - Home/About page with profile and research summary
  - Blog with personal posts and reflections
  - Invited Talks showcasing presentations and speaking engagements
  - Publications listing research papers and academic work
  - Projects highlighting research and development work
- **Social Media Integration**: Links to GitHub, LinkedIn, Google Scholar, and email
- **Modern UI**: Clean, professional design with smooth animations

## 📁 Project Structure

```
.
├── index.html          # Home/About page
├── blog.html           # Blog posts
├── talks.html          # Invited talks and presentations
├── publications.html   # Research publications
├── projects.html       # Research projects
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── script.js      # JavaScript for navigation and interactions
├── assets/
│   └── profile.jpg    # Profile photo (add your own)
└── README.md          # This file
```

## 🚀 Getting Started

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```

2. Open `index.html` in your web browser to view the site locally.

3. Edit the HTML files to customize the content with your information.

### Adding Your Profile Photo

1. Add your profile photo to the `assets/` directory and name it `profile.jpg`
2. Or update the image path in `index.html`:
   ```html
   <img src="assets/your-photo-name.jpg" alt="Rudra V. Murthy">
   ```

## 🌐 Deploying to GitHub Pages

### Method 1: Using GitHub Settings (Recommended)

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to your repository on GitHub
3. Click on **Settings** → **Pages**
4. Under "Source", select the branch (usually `main`) and folder (`/ (root)`)
5. Click **Save**
6. Your site will be published at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Method 2: Using GitHub Actions

Create a file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## ✏️ Customization Guide

### Updating Content

1. **Personal Information**: Edit `index.html` to update your bio, research summary, and contact information
2. **Blog Posts**: Add new blog posts in `blog.html` following the existing structure
3. **Talks**: Update `talks.html` with your speaking engagements
4. **Publications**: Add your papers in `publications.html`
5. **Projects**: Showcase your work in `projects.html`

### Styling

- Main colors and styles are defined in `css/style.css`
- CSS variables at the top of the file control the color scheme:
  ```css
  :root {
      --primary-color: #2c3e50;
      --secondary-color: #3498db;
      --accent-color: #e74c3c;
  }
  ```

### Adding New Pages

1. Create a new HTML file (e.g., `cv.html`)
2. Copy the structure from an existing page
3. Add a navigation link in all pages:
   ```html
   <li><a href="cv.html">CV</a></li>
   ```

## 🔧 Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📧 Contact

- **Email**: rudramurthy.iisc@gmail.com
- **LinkedIn**: [Rudra Murthy](https://www.linkedin.com/in/rudra-murthy-96521a45)
- **GitHub**: [murthyrudra](https://github.com/murthyrudra)
- **Google Scholar**: [Profile](https://scholar.google.com/citations?user=5bjj_9cAAAAJ)

## 🙏 Acknowledgments

- Inspired by academic portfolio websites
- Icons from [Font Awesome](https://fontawesome.com/)
- Design principles from modern web development best practices

---

**Note**: Remember to replace placeholder content with your actual information before deploying!