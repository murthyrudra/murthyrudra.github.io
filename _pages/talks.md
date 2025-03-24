---
layout: page
title: Invited Talks
permalink: /talks/
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: talks
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

{% for talk in paginator.posts %}

  <div class="talk">
    <h2>{{ talk.title }}</h2>
    <p>{{ talk.date | date: "%B %d, %Y" }}</p>
  </div>
{% endfor %}

<!-- Pagination Links -->
<div class="pagination">
  <span class="prev">{% if paginator.previous_page %}<a href="{{ paginator.previous_page_path }}">Previous</a>{% endif %}</span>
  <span class="next">{% if paginator.next_page %}<a href="{{ paginator.next_page_path }}">Next</a>{% endif %}</span>
</div>
