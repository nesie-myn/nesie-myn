# Eisen Joy Alva

Digital Marketing Analyst connecting enterprise technology, design, and practical business thinking.

This repository contains my personal portfolio website in `docs/`.

## Publish with GitHub Pages

The files are ready for branch-based publication. Hosting must be enabled separately:

1. Open this repository's **Settings → Pages**.
2. Choose **Deploy from a branch**.
3. Select branch **main** and folder **/docs**, then **Save**.
4. Wait for the deployment to finish; use the URL GitHub displays.

Expected address after successful publication: https://nesie-myn.github.io/nesie-myn/

## Editing the website

| File | What to change |
| --- | --- |
| `docs/portfolio-links.js` | Paste approved project-material links, including Google Drive sharing links. |
| `docs/index.html` | Name, biography, visible sections, email links, and page metadata. |
| `docs/app.js` | Project descriptions and Field Notes text. |
| `docs/style.css` | Colors, fonts, spacing, layout, and mobile styles. |
| `docs/assets/` | Website images and icons. |
| `docs/sitemap.xml` | Published page URLs; update if the domain or site path changes. |

In GitHub, open a file, select Edit, make changes, then commit. Once Pages is configured,
commits to the publishing branch trigger deployment. No build tools are needed.

## Google Drive links and images

Paste a Drive sharing URL into the matching entry in `docs/portfolio-links.js`.
The corresponding project reader will show **View project materials** when a link is set.
The visitor still needs permission in Google Drive. Test the link while signed out.

A Google Drive sharing URL opens a preview page; it does not automatically embed an image.
For an image displayed directly on the website, place an optimized JPG, PNG, WebP, or SVG
in `docs/assets/` and reference it with `<img src="assets/your-image.webp" alt="Description">`.
Keep only approved public materials in this public repository.

## Google Search

Typing a URL into Google Search does not submit it for indexing. After the site is public:

1. Add its exact published address as a URL-prefix property in Google Search Console.
2. Verify ownership using Google's HTML verification file in `docs/`, or insert Google's
   verification meta tag at the marked location in `docs/index.html`.
3. Submit the published `sitemap.xml` URL and use URL Inspection to request indexing.

Indexing and rankings are not guaranteed. This repository does not claim that verification
or indexing has already been completed.

## Design and content

Project covers are illustrative studies. TRT work is marked as ongoing/in development;
eLaundry is a family-business contribution. No unverified performance metrics are claimed.
The website uses plain HTML, CSS, JavaScript, and original SVG artwork.

Contact: alva.eisenjoy@gmail.com
