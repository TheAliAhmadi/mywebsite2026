# Ali Ahmadi - Personal Academic Website

A clean, modern academic website built with [Astro](https://astro.build) and deployed on [Cloudflare Pages](https://pages.cloudflare.com).

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Building for Production

```bash
npm run build
```

### Deploy to Cloudflare

```bash
npm run deploy
```

## �� Project Structure

```
src/
├── components/
│   ├── BaseHead.astro    # HTML <head> with meta tags
│   ├── Header.astro      # Navigation header
│   └── Footer.astro      # Site footer
├── pages/
│   ├── index.astro       # Home page
│   ├── research.astro    # Research publications
│   ├── teaching.astro    # Teaching experience
│   ├── cv.astro          # CV viewer/download
│   └── contact.astro     # Contact form
├── styles/
│   └── global.css        # Global styles
└── consts.ts             # Site constants
public/
├── profile.jpg           # Profile photo (add your own)
└── AliAhmadi_CV.pdf      # CV PDF file (add your own)
```

## ⚙️ Configuration

Edit `src/consts.ts` to update:
- Site title and description
- Email address
- Social media links
- Office location

## 📝 Adding Your Files

1. **Profile Photo**: Add your photo as `public/profile.jpg`
2. **CV PDF**: Add your CV as `public/AliAhmadi_CV.pdf`

## 🎨 Customization

### Colors
Edit the CSS variables in `src/styles/global.css`:
```css
:root {
  --primary: #0067FF;
  --primary-hover: #005EE9;
  /* ... other variables */
}
```

### Contact Form
The contact form uses [Formspree](https://formspree.io). Update the form action in `src/pages/contact.astro` with your Formspree endpoint.

## 📄 License

MIT License - feel free to use this as a template for your own academic website.

---

Built with ❤️ using Astro
