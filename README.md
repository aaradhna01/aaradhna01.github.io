# Aradhana Singh - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with optimized layouts for all screen sizes
- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Accessibility**: Keyboard navigation, focus states, and high contrast support
- **Performance**: Optimized for Lighthouse scores ≥95
- **Modern UI**: Clean, card-based design with subtle shadows and hover effects

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Font**: Inter (Google Fonts)
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd aradhana-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects showcase
│   ├── Education.tsx   # Education timeline
│   ├── Certifications.tsx # Certifications
│   ├── Contact.tsx     # Contact form and info
│   └── Footer.tsx      # Footer
├── hooks/              # Custom React hooks
│   └── useTheme.ts     # Theme management
├── config/             # Configuration files
│   └── site.ts         # Site configuration
├── App.tsx             # Main App component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## ⚙️ Configuration

Edit `src/config/site.ts` to update:

- Personal information
- Contact details
- Skills and technologies
- Projects data
- Education history
- Social media links

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Accent colors for different sections

### Typography

The website uses the Inter font family. You can change this in:
- `index.html` (Google Fonts link)
- `tailwind.config.js` (font family configuration)

### Animations

Framer Motion animations can be customized in individual components. Each section has entrance animations and hover effects.

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project and configure build settings

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
3. Run: `npm run deploy`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)

## 🔧 Performance Optimization

- Lazy loading for images
- Optimized bundle size with Vite
- Efficient CSS with Tailwind's purge
- Preconnect to external resources
- Optimized fonts loading

## 📊 Lighthouse Scores

Target scores (actual scores may vary):
- Performance: ≥95
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

Aradhana Singh - [aaradhnas32@gmail.com](mailto:aaradhnas32@gmail.com)

Project Link: [https://github.com/aaradhna01/portfolio](https://github.com/aaradhna01)

---

Built with ❤️ using React and Tailwind CSS
