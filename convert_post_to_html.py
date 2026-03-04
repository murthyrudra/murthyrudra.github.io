import os
import yaml
import markdown
from datetime import datetime
import re

ROOT_DIR = "/Users/rudramurthy/Documents/MyWebpage/murthyrudra.github.io/_posts"  # folder containing markdown files


def make_images_collapsible(html):

    pattern = r'<img alt="(.*?)" src="(.*?)"\s*/?>'

    def replacer(match):
        src = match.group(1)
        alt = match.group(2)

        return f"""
<details class="blog-image">
    <summary>Show image</summary>
    <img src="{alt}" alt="{src}" style="max-width:100%; height:auto;">
</details>
"""

    return re.sub(pattern, replacer, html)


def parse_md_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        text = f.read()

    parts = text.split("---")

    if len(parts) < 3:
        return None

    frontmatter = yaml.safe_load(parts[1])
    body = "---".join(parts[2:]).strip()

    return frontmatter, body


def format_date(date_str):
    try:
        dt = datetime.fromisoformat(str(date_str))
        return dt.strftime("%B %d, %Y")
    except:
        return str(date_str)


def generate_html(meta, body):

    title = meta.get("title", "Untitled")
    date = format_date(meta.get("date"))

    # convert markdown body to HTML
    body_html = markdown.markdown(body)
    body_html = make_images_collapsible(body_html)

    # generate id from title
    post_id = title.lower().replace(" ", "-")

    html = f"""
<article class="blog-post" id="{post_id}">
    <h3>{title}</h3>

    <div class="blog-post-meta">
        <i class="far fa-calendar"></i> {date}
    </div>

    <div class="blog-post-content">
        {body_html}
    </div>
</article>
"""

    return html


def process_directory(root):

    snippets = []

    for dirpath, _, filenames in os.walk(root):
        for file in filenames:
            if file.endswith(".md"):

                path = os.path.join(dirpath, file)

                parsed = parse_md_file(path)
                if not parsed:
                    continue

                meta, body = parsed
                if meta is None:
                    continue
                snippets.append(generate_html(meta, body))

    return "\n".join(snippets)


if __name__ == "__main__":

    html_output = process_directory(ROOT_DIR)

    with open("blog_snippets.html", "w", encoding="utf-8") as f:
        f.write(html_output)

    print("HTML snippets written to blog_snippets.html")
