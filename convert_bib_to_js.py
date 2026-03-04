#!/usr/bin/env python3
"""
Convert publications.bib to publications-data.js
This script reads your BibTeX file and generates the JavaScript data file.

Usage:
    python convert_bib_to_js.py

This will read publications.bib and update js/publications-data.js
"""

import os
import sys


def convert_bib_to_js(bib_file="publications.bib", js_file="js/publications-data.js"):
    """Convert BibTeX file to JavaScript data file"""

    # Check if bib file exists
    if not os.path.exists(bib_file):
        print(f"Error: {bib_file} not found!")
        sys.exit(1)

    # Read BibTeX content
    with open(bib_file, "r", encoding="utf-8") as f:
        bibtex_content = f.read()

    # Create JavaScript file content
    js_content = f"""/**
 * Publications Data
 * This file contains the BibTeX data as a JavaScript string
 * This avoids CORS issues when testing locally
 * 
 * To update: Edit publications.bib and run: python convert_bib_to_js.py
 */

const BIBTEX_DATA = `
{bibtex_content.strip()}
`;
"""

    # Write JavaScript file
    with open(js_file, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"✅ Successfully converted {bib_file} to {js_file}")
    print(f"📝 {len(bibtex_content)} characters written")
    print(f"🔄 Refresh your browser to see the changes!")


if __name__ == "__main__":
    convert_bib_to_js()

# Made with Bob
