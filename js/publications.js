/* Lightweight publication browser. Source of truth remains publications.bib. */
(() => {
  const container = document.getElementById('publications-container');
  const input = document.getElementById('publication-search');
  const count = document.getElementById('publication-count');
  if (!container || !input || !count) return;

  const escapeHtml = value => String(value || '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[char]);
  const clean = value => (value || '').replace(/[{}]/g, '').replace(/\s+/g, ' ').trim();
  const field = (entry, name) => {
    const match = entry.match(new RegExp(`\\b${name}\\s*=\\s*[{"]([\\s\\S]*?)[}"]\\s*(?:,|$)`, 'i'));
    return clean(match?.[1]);
  };
  const parse = bibtex => bibtex.split(/\n(?=@)/).map(entry => ({
    title: field(entry, 'title'), authors: field(entry, 'author'), venue: field(entry, 'booktitle') || field(entry, 'journal'), year: field(entry, 'year')
  })).filter(item => item.title).sort((a, b) => Number(b.year) - Number(a.year));

  function render(items) {
    count.textContent = `${items.length} publication${items.length === 1 ? '' : 's'}`;
    if (!items.length) { container.innerHTML = '<p class="empty-state">No publications match that search.</p>'; return; }
    let currentYear = '';
    container.innerHTML = items.map(item => {
      const year = item.year || 'Earlier work';
      const yearHeading = year !== currentYear ? `<h3 class="publication-year">${escapeHtml(year)}</h3>` : '';
      currentYear = year;
      return `${yearHeading}<article class="publication-item"><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.authors)}</p><p class="publication-venue">${escapeHtml(item.venue)}</p></article>`;
    }).join('');
  }

  // Browsers block fetch() for file:// pages. Use the generated embedded copy
  // when previewing locally; GitHub Pages always reads the .bib source directly.
  const source = window.location.protocol === 'file:' && typeof BIBTEX_DATA !== 'undefined'
    ? Promise.resolve(BIBTEX_DATA)
    : fetch('publications.bib').then(response => {
      if (!response.ok) throw new Error('Could not load publications');
      return response.text();
    });

  source.then(text => {
    const publications = parse(text);
    render(publications);
    input.addEventListener('input', () => {
      const query = input.value.toLowerCase().trim();
      render(query ? publications.filter(item => Object.values(item).join(' ').toLowerCase().includes(query)) : publications);
    });
  }).catch(() => {
    container.innerHTML = '<p class="empty-state">Publications could not be loaded. Please refresh the page or view <a href="publications.bib">the BibTeX file</a>.</p>';
    count.textContent = '';
  });
})();
