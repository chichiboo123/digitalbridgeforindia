# 🌉 Digital Bridge for India — 고민해결 프렌즈 / समस्या-समाधान मित्र

A tiny, offline-friendly **static web platform** that bundles four playful,
child-focused mini-apps behind one hub. Built to help kids around the world
solve their small everyday worries — big buttons, big pictures, and full
**Korean / Hindi / English** support so language is never a barrier.

The whole thing is plain HTML/CSS/JS with no build step. It ships to GitHub
Pages as-is.

---

## 📱 The apps

| App | File | What it does |
| --- | --- | --- |
| 🏃 **Global Exercise** (글로벌 운동 / ग्लोबल एक्सरसाइज़) | `global-exercise.html` | Suggests a random exercise and runs a simple 1/3/5-minute workout timer. |
| 🎈 **Nolpang** (놀팡 / नोलपंग) | `nolpang.html` | A "playtime bank" — finish chores/homework to earn minutes, then spend them on play ideas. |
| 📝 **Homework Helper** (숙제챙겨 / होमवर्क हेल्पर) | `homework-helper.html` | A one-tap daily homework checklist with a progress bar and a celebration when everything's done. |
| 🎤 **Cheer Your Speech** (너의 발표를 응원해 / बोलो, हम साथ हैं!) | `shipdae.html` | Random speaking tips and encouraging words for kids who feel nervous presenting; tips can be saved. |

`index.html` is the **hub**: it shows the four cards and opens each app inside
an in-page iframe viewer.

---

## 🌏 Languages (i18n)

- Supported: **Korean (`ko`)**, **Hindi (`hi`)**, **English (`en`)**.
- Default language is **Hindi**.
- Every app carries its own `translations` object, and all keys are present in
  all three languages (verified — no missing keys, arrays kept in sync).
- The chosen language is shared across the hub and every app via the
  `localStorage` key **`dbfi_lang`**, and is also passed to each app through a
  `?lang=` URL parameter when opened from the hub.

## 🔤 Fonts

- **Pretendard GOV** is the single unified typeface for both body text and
  titles (Korean + Latin), loaded from jsDelivr.
- Titles use Pretendard GOV **bold (800)** where the design calls for emphasis.
- **Noto Sans Devanagari** is kept as a fallback so Hindi renders correctly
  (Pretendard has no Devanagari glyphs).

## 🎨 UI notes

- **Word-aware line breaks:** `word-break: keep-all` is applied so Korean text
  wraps on word (어절) boundaries instead of breaking mid-word.
- **"Open" call-to-action** on each hub card is a pill-style button (no arrow).
- Fully responsive; on phones each app fills the screen, on desktop it renders
  as a centered phone-sized frame.
- Offline-friendly: state (saved playtime, completed homework, saved tips,
  language) persists in `localStorage`.

---

## 🚀 Run locally

No dependencies to install — it's a static site.

```bash
# serve the folder (any static server works)
npm start          # -> python3 -m http.server 8000
# then open http://localhost:8000
```

## ✅ Validate

A small validator checks that all required files exist, each page has a
DOCTYPE + mobile viewport, inline scripts parse, no stray Korean leaks outside
the i18n scripts, and the hub links to every app:

```bash
npm test           # node scripts/validate-static-site.js
```

## 📦 Deploy

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which
publishes the repository root to **GitHub Pages**. A `.nojekyll` file is
present so Pages serves the files verbatim.

---

## 🗂 Project structure

```
.
├── index.html              # Hub (app launcher + language switch)
├── global-exercise.html    # 🏃 exercise recommender + timer
├── nolpang.html            # 🎈 playtime bank
├── homework-helper.html    # 📝 homework checklist
├── shipdae.html            # 🎤 speech-confidence helper
├── card-news.html          # English intro card-news (shareable one-pager)
├── scripts/
│   └── validate-static-site.js
├── .github/workflows/deploy-pages.yml
├── package.json
└── .nojekyll
```

---

_Created by [Chichiboo](https://litt.ly/chichiboo)._
