# 📁 YOUR PORTFOLIO WEBSITE — FILE GUIDE

## Folder Structure

```
your-site/
│
├── index.html          ← Main homepage (research feed)
├── holdings.html       ← Holdings page
├── data.js             ← ⭐ YOUR DATA FILE — edit this to update everything
│
└── posts/
    ├── bbca-thesis.html        ← Sample post (thesis)
    ├── tlkm-q3-update.html     ← Sample post (update)
    ├── goto-research.html      ← Sample post (research)
    └── [your-new-posts].html   ← Your future posts go here
```

---

## How to Update Your Portfolio

### → Change AUM, stats, milestones, holdings
Open `data.js` and edit the values. Comments inside guide you.
Upload the updated file to GitHub. Done.

### → Add a new research post

1. Make a copy of any existing file in the `posts/` folder
2. Rename it (e.g. `bmri-thesis.html`)
3. Edit the content inside (title, date, ticker, body text)
4. Add an entry to the `posts: [...]` array in `data.js`
5. Upload BOTH files to GitHub

Example entry to add in data.js:
```js
{
  id: "bmri-thesis",
  type: "thesis",           // "thesis", "update", or "research"
  ticker: "BMRI",
  date: "2026-02-20",
  title: "BMRI: Undervalued State Bank with Improving ROE",
  excerpt: "One-line summary of your analysis here.",
  file: "posts/bmri-thesis.html"
},
```

---

## Post File Editing Cheatsheet

Inside each post HTML file, look for these sections to edit:

| What to change | Where to find it |
|---|---|
| Post type badge | `<span class="post-tag thesis">` → change "thesis" to "update" or "research" |
| Ticker | `<span class="post-ticker">BBCA</span>` |
| Date | `<span class="article-date">10 November 2025</span>` |
| Title | `<h1 class="article-title">...</h1>` |
| Summary | `<p class="article-excerpt">...</p>` |
| Key metrics box | The `<div class="key-metrics">` block (delete if not needed) |
| Article body | Everything inside `<div class="article-body">` |

### Text formatting inside the article body:
- `<h2>Section Title</h2>` — main section header
- `<h3>Sub-section</h3>` — smaller header
- `<p>Your paragraph text.</p>` — regular paragraph
- `<strong>bold text</strong>` — bold emphasis
- `<blockquote>A quote or key insight</blockquote>` — highlighted quote box
- `<ul><li>Point one</li><li>Point two</li></ul>` — bullet list

---

## How to Upload to GitHub (Quick Reference)

1. Go to your repository on github.com
2. Click **"Add file"** → **"Upload files"**
3. Drag all your files/folders in
4. Click **"Commit changes"**

For updating a single file:
1. Click the file name in your repository
2. Click the **pencil icon** (Edit)
3. Make your changes
4. Click **"Commit changes"**
