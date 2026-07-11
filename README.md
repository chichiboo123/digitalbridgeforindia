# 🌉 Digital Bridge for India — 고민해결 프렌즈 / समस्या-समाधान मित्र

A tiny, offline-friendly **static web platform** that bundles four playful, child-focused mini-apps behind one hub. Built to help kids around the world solve small everyday worries with big buttons, big pictures, and full **Korean / Hindi / English** support.

작고 오프라인 친화적인 **정적 웹 플랫폼**입니다. 하나의 허브 안에 어린이를 위한 네 가지 미니 앱을 모았습니다. 큰 버튼과 큰 그림, **한국어 / 힌디 / 영어** 지원으로 전 세계 아이들의 작은 일상 고민을 쉽게 해결하도록 돕습니다.

The project is plain HTML/CSS/JavaScript with no build step, and it can be served directly from the repository root.

이 프로젝트는 빌드 과정이 없는 순수 HTML/CSS/JavaScript로 구성되어 있으며, 저장소 루트 그대로 정적 파일로 서비스할 수 있습니다.

---

## 📱 Apps / 앱 구성

| App / 앱 | File / 파일 | What it does / 기능 |
| --- | --- | --- |
| 🏃 **Global Exercise** (글로벌 운동 / ग्लोबल एक्सरसाइज़) | `global-exercise.html` | Suggests a random exercise and runs quick 1/3/5-minute workout timers. / 랜덤 운동을 추천하고 1분·3분·5분 운동 타이머를 실행합니다. |
| 🎈 **Nolpang** (놀팡 / नोलपंग) | `nolpang.html` | A playtime bank: complete tasks to earn minutes, then spend them on play ideas. / 할 일·숙제를 끝내면 놀이 시간을 벌고, 모은 시간을 놀이 아이디어에 사용할 수 있는 “놀이 시간 저금통”입니다. |
| 📝 **Homework Helper** (숙제챙겨 / होमवर्क हेल्पर) | `homework-helper.html` | A daily homework checklist with progress tracking and celebration feedback. / 오늘의 숙제를 체크하고 진행률을 확인하며, 모두 완료하면 축하 메시지를 보여줍니다. |
| 🎤 **Cheer Your Speech** (너의 발표를 응원해 / बोलो, हम साथ हैं!) | `shipdae.html` | Gives speaking tips, encouragement, and saved favorite tips for nervous presenters. / 발표가 떨리는 아이에게 말하기 팁과 응원 문구를 제공하고 마음에 드는 팁을 저장할 수 있습니다. |

`index.html` is the app hub. It shows the four app cards and opens each app in an in-page iframe viewer.

`index.html`은 앱 허브입니다. 네 개의 앱 카드를 보여주고, 선택한 앱을 페이지 안의 iframe 뷰어에서 엽니다.

`card-news.html` is a shareable English card-news introduction page for presenting the project.

`card-news.html`은 프로젝트를 소개하기 위한 공유용 영어 카드뉴스 페이지입니다.

---

## 🌏 Languages and state / 언어와 상태 관리

- Supported languages: **Korean (`ko`)**, **Hindi (`hi`)**, and **English (`en`)**.
- 지원 언어: **한국어(`ko`)**, **힌디(`hi`)**, **영어(`en`)**.
- The default language is **Hindi**.
- 기본 언어는 **힌디**입니다.
- The shared language preference is stored in `localStorage` under **`dbfi_lang`**.
- 공통 언어 설정은 `localStorage`의 **`dbfi_lang`** 키에 저장됩니다.
- When an app is opened from the hub, the current language is also passed through the `?lang=` URL parameter.
- 허브에서 앱을 열 때 현재 언어가 `?lang=` URL 파라미터로도 전달됩니다.
- App data is kept locally in the browser where needed, such as Nolpang playtime/tasks, Homework Helper completion state, and saved speech tips.
- 놀팡의 놀이 시간·할 일, 숙제챙겨의 완료 상태, 발표 앱의 저장한 팁 등 필요한 데이터는 브라우저에 로컬로 저장됩니다.

---

## 🔤 Fonts / 폰트

- **Pretendard GOV** is used as the main typeface for Korean, English, and shared UI text.
- **Pretendard GOV**를 한국어·영어 및 공통 UI 텍스트의 기본 글꼴로 사용합니다.
- **Noto Sans Devanagari** is included as a Hindi fallback because Pretendard GOV does not include Devanagari glyphs.
- **Noto Sans Devanagari**는 Pretendard GOV에 없는 데바나가리 문자를 위한 힌디 폴백 글꼴입니다.
- Pages use word-aware wrapping (`word-break: keep-all`) so Korean words do not break awkwardly mid-word.
- 한국어 단어가 중간에서 어색하게 끊기지 않도록 어절 중심 줄바꿈(`word-break: keep-all`)을 적용합니다.

---

## 🎨 UI and behavior / UI 및 동작

- Kid-friendly interaction: large cards, large buttons, simple screens, and minimal typing.
- 어린이 친화적인 상호작용: 큰 카드와 버튼, 단순한 화면, 최소한의 입력으로 구성했습니다.
- Responsive layout: apps fill the phone screen and appear in a centered phone-like frame on wider screens.
- 반응형 레이아웃: 모바일에서는 화면을 꽉 채우고, 넓은 화면에서는 가운데 정렬된 휴대폰 프레임처럼 보입니다.
- Offline-friendly static experience: core app logic runs in the browser without a server API.
- 오프라인 친화적인 정적 경험: 핵심 앱 로직은 서버 API 없이 브라우저에서 실행됩니다.
- The hub uses a sticky header, language switch, app-card launcher, and in-page back/home controls for the iframe viewer.
- 허브는 고정 헤더, 언어 전환 버튼, 앱 카드 런처, iframe 뷰어의 뒤로/홈 컨트롤을 제공합니다.

---

## 🚀 Run locally / 로컬 실행

No dependencies are required for the site itself. Use any static server from the repository root.

사이트 자체에는 별도 의존성이 필요하지 않습니다. 저장소 루트에서 원하는 정적 서버로 실행하면 됩니다.

```bash
npm start
# runs: python3 -m http.server 8000
# open: http://localhost:8000
```

---

## ✅ Validate / 검증

The validator checks required files, HTML basics, mobile viewport tags, inline script syntax, visible Korean fallback text outside i18n scripts, and hub links to the app pages.

검증 스크립트는 필수 파일, HTML 기본 구조, 모바일 viewport 태그, 인라인 스크립트 문법, i18n 스크립트 밖의 노출 한국어 fallback 텍스트, 허브의 앱 링크를 확인합니다.

```bash
npm test
# runs: node scripts/validate-static-site.js
```

---

## 📦 Deploy / 배포

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which publishes the repository root to **GitHub Pages**. The `.nojekyll` file ensures GitHub Pages serves the static files verbatim.

`main` 브랜치에 push하면 `.github/workflows/deploy-pages.yml`이 실행되어 저장소 루트를 **GitHub Pages**에 배포합니다. `.nojekyll` 파일은 GitHub Pages가 정적 파일을 있는 그대로 제공하도록 보장합니다.

---

## 🗂 Project structure / 프로젝트 구조

```text
.
├── index.html              # Hub / 앱 런처 및 언어 전환
├── global-exercise.html    # 🏃 Exercise recommender and timer / 운동 추천 및 타이머
├── nolpang.html            # 🎈 Playtime bank / 놀이 시간 저금통
├── homework-helper.html    # 📝 Homework checklist / 숙제 체크리스트
├── shipdae.html            # 🎤 Speech-confidence helper / 발표 자신감 도우미
├── card-news.html          # Shareable English intro cards / 공유용 영어 소개 카드뉴스
├── scripts/
│   └── validate-static-site.js
├── .github/workflows/deploy-pages.yml
├── package.json
└── .nojekyll
```

---

_Created by [Chichiboo](https://litt.ly/chichiboo)._
