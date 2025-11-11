# Portfolio 2025

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS, featuring an interactive AI chatbot.

## Features

- 🎨 Modern, responsive design with smooth animations
- 🌓 Dark mode support
- 💬 Interactive chatbot assistant
- 📱 Mobile-friendly navigation
- ⚡ Fast performance with Next.js
- 🎯 Sections: Hero, About, Skills, Projects, Contact

## Tech Stack

- **Framework:** Next.js 16
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Rishabh-Saha/portfolio-2025.git
cd portfolio-2025
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio-2025/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Projects.tsx     # Projects section
│   ├── Contact.tsx      # Contact form
│   └── Chatbot.tsx      # AI chatbot
└── public/              # Static assets
```

## Customization

To customize the portfolio for yourself:

1. Update personal information in `components/Hero.tsx`
2. Modify the About section in `components/About.tsx`
3. Add your skills in `components/Skills.tsx`
4. Showcase your projects in `components/Projects.tsx`
5. Update contact links in `components/Contact.tsx`
6. Customize chatbot responses in `components/Chatbot.tsx`

## Features in Detail

### Interactive Chatbot
The chatbot can answer questions about:
- Skills and technologies
- Projects and experience
- Contact information
- Work opportunities

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly navigation

### Smooth Animations
- Fade-in effects on scroll
- Hover transitions
- Smooth scrolling between sections

## License

ISC

## Author

Rishabh Saha

---

Built with ❤️ using Next.js, React, and Tailwind CSS
