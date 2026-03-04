# BibTeX Publications Guide

This guide explains how to automatically populate your publications page using BibTeX entries.

## 📚 How It Works

The publications page reads BibTeX data from `js/publications-data.js` and generates HTML for each entry. This approach works both locally (avoiding CORS issues) and on GitHub Pages!

**Workflow:**
1. Edit `publications.bib` with your publications
2. Run `python convert_bib_to_js.py` to update the JavaScript file
3. Refresh your browser to see changes

## 📝 Adding Publications

### Step 1: Edit publications.bib

Add your BibTeX entries to the `publications.bib` file. The system supports these entry types:

- `@article` - Journal articles
- `@inproceedings` - Conference papers
- `@phdthesis` - PhD dissertations
- `@mastersthesis` - Master's theses
- `@techreport` - Technical reports
- `@book` - Books
- `@incollection` - Book chapters

### Step 2: Required Fields

Each entry should have:
- `title` - Paper title
- `author` - Authors (use "and" to separate multiple authors)
- `year` - Publication year

### Step 3: Optional Fields

Add these fields for better display:
- `url` - Link to PDF (adds "PDF" button)
- `code` - Link to code repository (adds "Code" button)
- `dataset` - Link to dataset (adds "Dataset" button)
- `abstract` - Paper abstract (displayed below title)
- `booktitle` - Conference/workshop name (for @inproceedings)
- `journal` - Journal name (for @article)
- `school` - University name (for @phdthesis)

## 📖 Example BibTeX Entry

```bibtex
@inproceedings{murthy2024multilingual,
  title={Multilingual Transfer Learning for Low-Resource NLP Tasks},
  author={Murthy, Rudra V and Bhattacharyya, Pushpak},
  booktitle={Proceedings of the Annual Meeting of the Association for Computational Linguistics (ACL)},
  year={2024},
  url={https://example.com/paper.pdf},
  code={https://github.com/username/repo},
  abstract={We propose a novel multilingual transfer learning framework that effectively borrows features from high-resource languages to improve performance on various NLP tasks in low-resource languages.}
}
```

## 🎨 Features

### Automatic Author Highlighting
The system automatically highlights your name (Rudra V. Murthy or Murthy, Rudra V) in **bold**.

### BibTeX Export
Each publication has a "BibTeX" button that shows the citation when clicked.

### Automatic Sorting
Publications are automatically sorted by year (newest first).

### Multiple Authors
Use "and" to separate authors:
```bibtex
author={Smith, John and Doe, Jane and Murthy, Rudra V}
```

Use "others" for et al.:
```bibtex
author={Murthy, Rudra V and others}
```

## 🔄 Updating Publications

### Method 1: Using the Python Script (Recommended)

1. Edit `publications.bib` with your new entries
2. Run the conversion script:
   ```bash
   python convert_bib_to_js.py
   ```
3. Refresh your browser

### Method 2: Manual Update

1. Edit `publications.bib`
2. Copy the entire content
3. Open `js/publications-data.js`
4. Replace the content between the backticks in `BIBTEX_DATA = \`...\``
5. Save and refresh

### Method 3: Direct Edit (Quick Changes)

For quick updates, you can directly edit `js/publications-data.js` without touching the .bib file.

## 🔧 Customization

### Changing Author Name
Edit `js/bibtex-parser.js` and update the `highlightMainAuthor` function:

```javascript
highlightMainAuthor(author) {
    if (author.includes('YOUR_LAST_NAME, YOUR_FIRST_NAME') || 
        author.includes('YOUR_FULL_NAME')) {
        return `<strong>${author}</strong>`;
    }
    return author;
}
```

### Adding New Link Types
Edit `js/bibtex-parser.js` in the `generatePublicationHTML` function:

```javascript
if (entry.slides) {
    links.push(`<a href="${entry.slides}" target="_blank"><i class="fas fa-file-powerpoint"></i> Slides</a>`);
}
```

Then add `slides` field to your BibTeX entries:
```bibtex
slides={https://example.com/slides.pdf}
```

## 🚀 Testing Locally

### No Server Needed!
The new approach works by opening HTML files directly:

1. Open `publications.html` in your web browser (double-click or drag to browser)
2. Publications should load immediately
3. Click the "BibTeX" button to verify citations display properly
4. Test all PDF/Code/Dataset links

### Using a Local Server (Optional)
If you prefer using a server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have npx)
npx http-server
```

Then visit `http://localhost:8000/publications.html`

## 📱 GitHub Pages Deployment

The BibTeX system works automatically on GitHub Pages:

1. Edit `publications.bib` with your entries
2. Run `python convert_bib_to_js.py`
3. Commit and push:
   ```bash
   git add publications.bib js/publications-data.js
   git commit -m "Update publications"
   git push
   ```
4. Wait 1-2 minutes for GitHub Pages to rebuild

## 🐛 Troubleshooting

### Publications not loading?
- Check browser console for errors (F12 → Console)
- Verify `publications.bib` is in the root directory
- Ensure BibTeX syntax is correct (matching braces, commas)

### Author name not highlighted?
- Check the name format in `highlightMainAuthor` function
- Try both "Last, First" and "First Last" formats

### BibTeX not displaying?
- Check that the `toggleBibtex` function is defined in `bibtex-parser.js`
- Verify the BibTeX entry has a unique key

### Special characters not displaying?
- Use LaTeX escapes: `{\"o}` for ö, `{\'e}` for é, etc.
- Or use Unicode directly in the BibTeX file

## 💡 Tips

1. **Keep it organized**: Group entries by year or type
2. **Use consistent keys**: e.g., `lastname2024keyword`
3. **Add abstracts**: They help visitors understand your work
4. **Link everything**: PDFs, code, datasets make your work more accessible
5. **Update regularly**: Keep your publications current

## 📚 Example publications.bib Structure

```bibtex
% Recent Publications (2024-2025)
@article{murthy2025granite,
  title={...},
  author={...},
  year={2025}
}

% Conference Papers (2020-2023)
@inproceedings{murthy2023embeddings,
  title={...},
  author={...},
  year={2023}
}

% Thesis
@phdthesis{murthy2020thesis,
  title={...},
  author={...},
  year={2020}
}
```

## 🔗 Resources

- [BibTeX Format Guide](http://www.bibtex.org/Format/)
- [Google Scholar](https://scholar.google.com) - Export citations as BibTeX
- [dblp](https://dblp.org) - Computer science bibliography with BibTeX export

---

**Need help?** Check the browser console for error messages or review the example entries in `publications.bib`.