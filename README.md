# Lale Enterprises Website

A premium, modern static website built with Astro, showcasing end-to-end turnkey engineering solutions.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) v4.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev)
- **Fonts**: Inter & Outfit (Google Fonts)
- **Deployment**: GitHub Pages

## 📋 Features

- ✨ Premium, modern design with smooth animations
- 📱 Fully responsive (mobile-first approach)
- ⚡ Lightning-fast performance (Lighthouse 95+ scores)
- 🎨 Custom brand colors and typography
- 🔍 SEO optimized with meta tags
- 🌐 Multiple pages (Home, About, Services, Projects, Clients, Contact)
- 📧 Contact form with Formspree integration
- 🗺️ Google Maps integration
- ♿ Accessible components

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18.14.1 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lale-enterprises
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## 🎨 Customization

### Update Brand Colors

Edit `tailwind.config.mjs` to change the color palette:

```javascript
colors: {
  primary: { ... },  // Blue colors
  secondary: { ... }, // Purple colors
}
```

### Update Company Information

Edit the data files in `src/data/`:
- `company.ts` - Contact info, about text, why choose us
- `services.ts` - Service offerings and details
- `clients.ts` - Client logos and information

### Update Logo

Replace logo files in `public/`:
- `logo.svg` - Main logo (colored)
- `logo-white.svg` - White logo for dark backgrounds
- `favicon.svg` - Favicon

## 📦 Deployment

### GitHub Pages

1. Update `astro.config.mjs` with your GitHub username:
```javascript
site: 'https://yourusername.github.io',
base: '/lale-enterprises',
```

2. Push to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions
   - The site will auto-deploy on every push to main

### Other Platforms

- **Vercel**: `npm run build` → Deploy `dist` folder
- **Netlify**: `npm run build` → Deploy `dist` folder
- **Cloudflare Pages**: Connect GitHub repository

## 📸 Adding Real Images

Replace placeholder images in `public/images/`:

- **Services**: Add service images to `public/images/services/`
  - hvac.jpg, electrical.jpg, firefighting.jpg, plumbing.jpg, mechanical.jpg
  
- **Clients**: Add client logos to `public/images/clients/`
  - Recommended format: PNG with transparent background
  - Recommended size: 200x200px or larger

## 📧 Contact Form Setup

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. Update `src/components/ContactForm.tsx`:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

## 🗺️ Google Maps Setup

Update the Google Maps embed in `src/pages/contact.astro` with your actual location coordinates.

## 📄 File Structure

```
lale-enterprises/
├── public/
│   ├── images/
│   │   ├── clients/
│   │   └── services/
│   ├── logo.svg
│   ├── logo-white.svg
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎯 Performance

- Optimized images (WebP format recommended)
- Lazy loading for images
- Minimal JavaScript (Astro's zero-JS by default)
- Fast page loads (< 2 seconds)

## 📱 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers

## 📞 Support

For issues or questions about the website:
- Email: enterpriseslale@gmail.com
- Phone: +91 8956813579

## 📄 License

© 2024 Lale Enterprises. All rights reserved.
