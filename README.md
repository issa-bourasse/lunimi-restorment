# LUMINA Restaurant - Next.js Landing Page

A stunning, modern restaurant landing page built with Next.js 14, featuring cutting-edge 2025 design trends including glassmorphism effects, dark luxury theme, and advanced animations.

## 🌟 Features

### Design & UI
- **Glassmorphism Effects**: Semi-transparent containers with backdrop blur
- **Dark Luxury Theme**: Deep midnight black with electric gold accents
- **Advanced Typography**: Gradient text effects and kinetic typography
- **Responsive Design**: Mobile-first approach with perfect tablet/desktop adaptation
- **Smooth Animations**: Framer Motion powered interactions

### Sections
- **Hero Section**: Full-screen immersive experience with parallax background
- **Signature Dishes**: Interactive gallery with 3D card effects
- **Restaurant Atmosphere**: Split-screen design with immersive imagery
- **Chef Team**: Award-winning culinary team showcase
- **Reservation System**: Beautiful booking interface
- **Location & Contact**: Interactive map and contact information

### Technical Features
- **Next.js 14**: Latest App Router with server components
- **TypeScript**: Full type safety
- **Tailwind CSS**: Custom glassmorphism utilities
- **Framer Motion**: Professional animations
- **Optimized Images**: Next.js Image optimization with WebP support
- **SEO Optimized**: Meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliant

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lumina-restaurant
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
lumina-restaurant/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with fonts and metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx   # Responsive navigation with glassmorphism
│   │   └── Footer.tsx       # Footer with contact info and newsletter
│   └── sections/
│       ├── HeroSection.tsx           # Hero with animated elements
│       ├── SignatureDishes.tsx       # Interactive dish showcase
│       ├── RestaurantAtmosphere.tsx  # Atmosphere and ambiance
│       ├── ChefTeam.tsx             # Chef profiles and philosophy
│       ├── ReservationExperience.tsx # Booking form
│       └── LocationContact.tsx       # Location and contact info
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration with custom utilities
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🎨 Design System

### Colors
- **Midnight**: `#0A0A0A` - Primary background
- **Electric Gold**: `#FFD700` - Premium highlights
- **Neon Coral**: `#FF6B6B` - Food imagery accents
- **Ice Blue**: `#00D4FF` - Interactive elements

### Typography
- **Primary**: Inter (sans-serif)
- **Headings**: Playfair Display (serif)
- **Accents**: Dancing Script (cursive)

### Glassmorphism Effects
- **Glass Card**: `rgba(255, 255, 255, 0.1)` with 20px backdrop blur
- **Glass Button**: Interactive buttons with hover effects
- **Glass Border**: `rgba(255, 255, 255, 0.2)` subtle borders

## 🔧 Customization

### Updating Content
- Restaurant information: Edit content in component files
- Images: Replace URLs in component files with your own images
- Colors: Modify the color palette in `tailwind.config.js`

### Adding New Sections
1. Create a new component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Update navigation links in `components/layout/Navigation.tsx`

## 📱 Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance
- **Lazy Loading**: Images load as they enter viewport
- **Code Splitting**: Components load only when needed
- **Optimized Assets**: WebP images, minified CSS/JS
- **Core Web Vitals**: Optimized for Google's performance metrics

## 🌐 SEO Features
- **Meta Tags**: Comprehensive social media and search optimization
- **Structured Data**: Restaurant schema markup for rich snippets
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Automatic sitemap generation

## 🎯 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License
This project is licensed under the MIT License.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ for the future of fine dining digital experiences**
