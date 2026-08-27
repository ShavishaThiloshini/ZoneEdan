# 🌊 ZoneEdan

### Find Your Little Eden

ZoneEdan is a Sri Lanka-focused travel and tourism website designed to help people discover beautiful, peaceful, and water-related destinations while keeping their travel budget in mind.

From waterfalls and beaches to lagoons, rivers, lakes, and hidden escapes, ZoneEdan makes it easier to discover places where you can slow down, explore, and reconnect with nature.

---

## ✨ Features

- 🌊 Discover beautiful water-related destinations
- 🇱🇰 Sri Lanka-focused destination discovery
- 🔎 Search destinations
- 🎯 Filter destinations based on different preferences
- 💰 Explore budget-friendly places
- 🌿 Discover peaceful destinations
- 🏞️ View detailed destination information
- ❤️ Save favorite destinations
- 📱 Fully responsive design
- ✨ Smooth and subtle UI interactions
- 📚 Curated travel collections
- 📝 Travel stories and destination content

---

## 🎯 Project Goal

The main goal of ZoneEdan is to make travel discovery easier for people who are looking for:

- Peaceful places
- Beautiful natural environments
- Water-related destinations
- Budget-friendly travel options
- Less crowded travel experiences

The project initially focuses on Sri Lanka, with the possibility of expanding to other destinations in the future.

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React

### Data & Browser Storage

- Local JavaScript data
- LocalStorage for saved destinations

### Development Tools

- Git
- GitHub
- ESLint / Oxlint
- npm

### Deployment

- Netlify

---

## 🎨 Design Direction

ZoneEdan follows a nature-inspired visual direction based around:

- 🌊 Teal and green tones
- 🌿 Natural colors
- 🏝️ Water-inspired visuals
- ✨ Clean layouts
- 🌱 Calm and peaceful interactions

The typography uses carefully selected Google Fonts to create a more distinctive visual identity instead of relying heavily on common fonts.

---

## 📂 Project Structure

```text
ZoneEdan/
│
├── public/
│   ├── images/
│   └── ...
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── layouts/
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── screenshots/
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

> The exact folder structure may vary depending on the current implementation.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd ZoneEdan
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL shown in your terminal.

---

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📱 Responsive Design

ZoneEdan is designed to work across:

- 📱 Mobile devices
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktop screens

The interface adapts its layouts, typography, navigation, cards, filters, and content sections according to the screen size.

---

## ❤️ Favorites

ZoneEdan uses browser `localStorage` to save users' favorite destinations.

This allows saved destinations to remain available after refreshing the browser without requiring user authentication or a backend database.

---

## 🗺️ Destination Discovery

Users can explore destinations using:

- Search
- Destination categories
- Water types
- Budget preferences
- Peace-related criteria
- Other available filters

The goal is to make destination discovery simple and enjoyable.

---

## 🇱🇰 Initial Destination Focus

The first version of ZoneEdan focuses on water-related destinations in Sri Lanka, including:

- 🏖️ Beaches
- 💦 Waterfalls
- 🌊 Lagoons
- 🏞️ Lakes
- 🛶 Rivers
- 🏝️ Islands
- 🏄 Surfing destinations
- 💧 Natural water escapes

---

## 📚 Project Documentation

The project was planned and documented before and during development.

The following documents define the project's requirements, architecture, design, flow, and implementation:

1. [Project Requirement Document](./PRD.md)
2. [Technical Requirement Document](./TRD.md)
3. [App Flow Document](./APP_FLOW.md)
4. [UI/UX Design Brief](./UI_UX_DESIGN_BRIEF.md)
5. [Backend Schema Document](./BACKEND_SCHEMA.md)
6. [Implementation Plan](./IMPLEMENTATION_PLAN.md)

> Note: The Backend Schema Document is retained as part of the project's planning documentation, although the current version does not require a backend/database implementation.

---

## 🧪 Quality & Testing

Before deployment, the application was reviewed for:

- Responsive layouts
- Navigation
- Destination discovery
- Search
- Filters
- Destination details
- Favorites
- Image loading
- Mobile usability
- Desktop usability
- Route handling
- UI consistency
- Basic accessibility
- Production build

---

## 🚀 Deployment

ZoneEdan is deployed as a frontend application.

### Production Build

```bash
npm run build
```

### Deployment Platform

**Netlify**

### Live Demo

https://zoneedan.netlify.app

---

## 🔮 Future Improvements

Potential future versions of ZoneEdan may include:

- 🗺️ Interactive maps
- ⭐ Destination reviews and ratings
- 🧳 Trip planning
- 📍 Nearby destination recommendations
- 👤 User accounts
- ☁️ Cloud-based favorites
- 🤖 Personalized destination recommendations
- 🌍 Expansion beyond Sri Lanka
- 📊 More advanced travel insights

These features are not part of the current MVP.

---

## 🎓 What I Learned

Building ZoneEdan helped me improve my understanding of:

- React component architecture
- Tailwind CSS
- Responsive UI development
- Client-side routing
- Search and filtering logic
- Browser localStorage
- Reusable components
- UI/UX implementation
- Project documentation
- Git and GitHub workflows
- Production deployment

One of the main lessons from this project was the importance of planning before development.

Creating the PRD, TRD, App Flow, UI/UX Design Brief, Backend Schema, and Implementation Plan helped turn an initial idea into a structured project.

---

## ⚛️ React + Vite

ZoneEdan was created using React and Vite.

This template provides a minimal setup to get React working in Vite with HMR and Oxlint rules.

### Official React Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/)

### React Compiler

The React Compiler is not enabled on this project because of its impact on development and build performance.

To learn more, see the [React Compiler documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the Oxlint Configuration

For production applications, consider using TypeScript with type-aware lint rules enabled.

See the [Vite React TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for more information.

---

## 👩‍💻 Author

**Shavisha Thiloshini**

Software Engineering Student

- GitHub: https://github.com/ShavishaThiloshini
- LinkedIn: https://www.linkedin.com/in/shavisha-thiloshini-16062b3a3

---

## 📄 License

This project is created for learning, portfolio, and demonstration purposes.

---

# 🌊 ZoneEdan

### Find Your Little Eden.