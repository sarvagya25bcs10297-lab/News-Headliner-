# 📰 NewsReader — Latest Headlines

A modern, interactive news-reading application built with **React** and **Vite**. Stay updated with the latest headlines from multiple categories, track your reading progress, and enjoy a polished UI with smooth animations and dark mode support.

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Custom_Properties-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Features

- **📡 Live News Fetching** — Fetches top headlines from [NewsAPI](https://newsapi.org/) across 7 categories using React's `useEffect` hook.
- **🗂️ Category Filtering** — Filter articles by General, Business, Technology, Entertainment, Sports, Health, and Science.
- **📖 Expand to Read** — Click any card to expand and view the article description.
- **✅ Mark as Read** — Mark articles as read with a visual strikethrough effect; progress is persisted in `localStorage`.
- **📊 Read Progress Tracker** — A live read count badge with an animated progress bar in the header.
- **🌙 Dark Mode** — Toggle between light and dark themes with smooth transitions and floating gradient orbs.
- **🎨 Interactive UI** — Micro-animations, glassmorphism, gradient accents, skeleton loading, staggered card entrances, and more.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | Component-based UI |
| **Vite 8** | Lightning-fast dev server & bundler |
| **Vanilla CSS** | Custom design system with CSS variables |
| **NewsAPI** | Real-time news data |
| **localStorage** | Persisting read article state |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sarvagya25bcs10297-lab/News-Headliner-.git
   cd News-Headliner-
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to `http://localhost:5173` to view the app.

---

## 📁 Project Structure

```
end-project/
├── index.html                  # Entry HTML with Google Fonts
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── public/
│   ├── favicon.svg             # App favicon
│   └── icons.svg               # SVG icon sprite
└── src/
    ├── main.jsx                # React entry point
    ├── index.css               # Global reset & base typography
    ├── App.jsx                 # Root component with state management
    ├── App.css                 # Design system (CSS variables, layout)
    ├── hooks/
    │   └── useNews.js          # Custom hook for fetching & managing news
    └── components/
        ├── Header.jsx          # App header with read count & theme toggle
        ├── Header.css
        ├── CategoryBar.jsx     # Sticky category filter bar
        ├── CategoryBar.css
        ├── NewsCard.jsx        # Expandable news article card
        ├── NewsCard.css
        ├── NewsList.jsx        # Article list with loading/error states
        └── NewsList.css
```

---

## 🎨 Design Highlights

### Light Mode
- Clean, minimal layout with soft shadows
- Indigo-violet gradient accents
- Warm neutral backgrounds

### Dark Mode
- Deep space color palette (`#0C0C1D`)
- Floating gradient orbs (animated background blobs)
- Glowing accent shadows on interactive elements

### Micro-Interactions
- 🎯 **Staggered card entrance** — Cards slide in one-by-one on load
- ✨ **Gradient border glow** — Cards glow with a gradient outline on hover
- 🔍 **Image zoom** — Thumbnails subtly zoom on card hover
- 💫 **Shine sweep** — Buttons and category pills have a light sweep animation
- 🎪 **Bouncy transitions** — Spring-physics on buttons and toggles
- 📊 **Skeleton loading** — Shimmer placeholders while data loads
- 🏷️ **Category badge morph** — Badges turn gradient on hover
- 📎 **Animated underline** — Links reveal an underline on hover

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint for code quality |

---

## 🔑 API Configuration

This app uses the [NewsAPI](https://newsapi.org/) to fetch headlines. The API key is configured in `src/hooks/useNews.js`. 

> **Note:** The free tier of NewsAPI blocks direct browser requests (CORS). The app automatically falls back to a CORS proxy (`allorigins.win`) if the direct request fails.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ using React + Vite
</p>
