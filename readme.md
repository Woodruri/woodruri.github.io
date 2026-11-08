# woodruri.github.io

Source for my portfolio site, live at **https://woodruri.github.io**.

It's a static site (plain HTML, CSS and JavaScript, no build step) served by GitHub Pages.

## Updating content

| What | Where |
| --- | --- |
| Projects | `js/projects.js`: add an object to `projectsArray` (`featured: true` gives it a large card) |
| Skills | `js/skills.js`: edit `skillsArray` |
| About, contact and hero text | `index.html` |
| Colors and theme | CSS variables at the top of `css/style.css` |

## Running locally

```sh
python -m http.server 8000
# then open http://localhost:8000
```

## Deploying changes

GitHub Pages caches files for about 10 minutes. After changing CSS or JS, bump the `?v=` number on its `<link>`/`<script>` tag in `index.html` so returning visitors get the new version.
