/**
 * Simple BibTeX Parser for Publications Page
 * Parses BibTeX entries and generates HTML
 */

class BibtexParser {
    constructor() {
        this.entries = [];
    }

    /**
     * Parse BibTeX content
     */
    parse(bibtexContent) {
        this.entries = [];

        // Match all BibTeX entries
        const entryRegex = /@(\w+)\{([^,]+),\s*([\s\S]*?)\n\}/g;
        let match;

        while ((match = entryRegex.exec(bibtexContent)) !== null) {
            const type = match[1];
            const key = match[2];
            const content = match[3];

            const entry = {
                type: type,
                key: key,
                ...this.parseFields(content)
            };

            this.entries.push(entry);
        }

        return this.entries;
    }

    /**
     * Parse individual fields from BibTeX entry
     */
    parseFields(content) {
        const fields = {};
        const fieldRegex = /(\w+)\s*=\s*\{([^}]*)\}/g;
        let match;

        while ((match = fieldRegex.exec(content)) !== null) {
            const fieldName = match[1].toLowerCase();
            const fieldValue = match[2].trim();
            fields[fieldName] = fieldValue;
        }

        return fields;
    }

    /**
     * Format author names
     */
    formatAuthors(authors) {
        if (!authors) return '';

        // Split by 'and'
        const authorList = authors.split(' and ').map(a => a.trim());

        if (authorList.length === 1) {
            return this.highlightMainAuthor(authorList[0]);
        } else if (authorList.length === 2) {
            return `${this.highlightMainAuthor(authorList[0])} and ${this.highlightMainAuthor(authorList[1])}`;
        } else {
            const firstAuthors = authorList.slice(0, -1).map(a => this.highlightMainAuthor(a)).join(', ');
            const lastAuthor = this.highlightMainAuthor(authorList[authorList.length - 1]);
            return `${firstAuthors}, and ${lastAuthor}`;
        }
    }

    /**
     * Highlight main author (Rudra V. Murthy or Murthy, Rudra V)
     */
    highlightMainAuthor(author) {
        if (author.includes('Murthy, Rudra') || author.includes('Rudra V') || author === 'others') {
            if (author === 'others') {
                return 'et al.';
            }
            return `<strong>${author}</strong>`;
        }
        return author;
    }

    /**
     * Get venue name based on entry type and fields
     */
    getVenue(entry) {
        if (entry.type === 'article' && entry.journal) {
            return entry.journal;
        } else if (entry.type === 'inproceedings' && entry.booktitle) {
            return entry.booktitle;
        } else if (entry.type === 'phdthesis' && entry.school) {
            return entry.school;
        }
        return '';
    }

    /**
     * Generate HTML for a single publication
     */
    generatePublicationHTML(entry) {
        const title = entry.title || 'Untitled';
        const authors = this.formatAuthors(entry.author);
        const year = entry.year || '';
        const venue = this.getVenue(entry);
        const abstract = entry.abstract || '';

        let html = `
        <div class="publication-item">
            <h3>${title}</h3>
            <div class="publication-meta">
                ${authors}${venue ? ' | ' + year + ' | ' + venue : ' | ' + year}
            </div>`;

        if (abstract) {
            html += `<p>${abstract}</p>`;
        }

        // Add links
        const links = [];
        if (entry.url) {
            links.push(`<a href="${entry.url}" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a>`);
        }
        if (entry.code) {
            links.push(`<a href="${entry.code}" target="_blank"><i class="fas fa-code"></i> Code</a>`);
        }
        if (entry.dataset) {
            links.push(`<a href="${entry.dataset}" target="_blank"><i class="fas fa-database"></i> Dataset</a>`);
        }

        // Add BibTeX button
        const bibtexId = `bibtex-${entry.key}`;
        links.push(`<a href="#" onclick="toggleBibtex('${bibtexId}'); return false;"><i class="fas fa-quote-right"></i> BibTeX</a>`);

        if (links.length > 0) {
            html += `<div class="publication-links">${links.join('\n')}</div>`;
        }

        // Add hidden BibTeX
        html += `
            <div id="${bibtexId}" class="bibtex-entry" style="display: none;">
                <pre>${this.generateBibtex(entry)}</pre>
            </div>
        </div>`;

        return html;
    }

    /**
     * Generate BibTeX string from entry
     */
    generateBibtex(entry) {
        let bibtex = `@${entry.type}{${entry.key},\n`;

        const fields = ['title', 'author', 'booktitle', 'journal', 'school', 'year', 'url', 'code', 'dataset'];

        fields.forEach(field => {
            if (entry[field]) {
                bibtex += `  ${field} = {${entry[field]}},\n`;
            }
        });

        bibtex += '}';
        return bibtex;
    }

    /**
     * Generate HTML for all publications
     */
    generateAllPublicationsHTML() {
        // Sort by year (descending)
        const sortedEntries = [...this.entries].sort((a, b) => {
            return parseInt(b.year || 0) - parseInt(a.year || 0);
        });

        return sortedEntries.map(entry => this.generatePublicationHTML(entry)).join('\n');
    }
}

/**
 * Toggle BibTeX visibility
 */
function toggleBibtex(id) {
    const element = document.getElementById(id);
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}

/**
 * Load and parse BibTeX data
 */
async function loadPublications() {
    try {
        let bibtexContent;

        // Try to use embedded data first (works locally and on GitHub Pages)
        if (typeof BIBTEX_DATA !== 'undefined') {
            bibtexContent = BIBTEX_DATA;
        } else {
            // Fallback to fetching the .bib file (only works on server)
            const response = await fetch('publications.bib');
            bibtexContent = await response.text();
        }

        const parser = new BibtexParser();
        parser.parse(bibtexContent);

        const publicationsContainer = document.getElementById('publications-container');
        if (publicationsContainer) {
            publicationsContainer.innerHTML = parser.generateAllPublicationsHTML();
        }
    } catch (error) {
        console.error('Error loading publications:', error);
        const publicationsContainer = document.getElementById('publications-container');
        if (publicationsContainer) {
            publicationsContainer.innerHTML = `
                <div class="publication-item">
                    <h3>Error Loading Publications</h3>
                    <p>Unable to load publications. This might be due to:</p>
                    <ul>
                        <li>CORS restrictions when opening HTML files directly (use a local server)</li>
                        <li>Missing publications-data.js file</li>
                        <li>Invalid BibTeX syntax</li>
                    </ul>
                    <p><strong>Solution:</strong> Make sure <code>publications-data.js</code> is loaded before <code>bibtex-parser.js</code></p>
                </div>
            `;
        }
    }
}

// Load publications when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadPublications);
} else {
    loadPublications();
}

// Made with Bob
