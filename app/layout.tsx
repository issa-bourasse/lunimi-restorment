import type { Metadata } from 'next'
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const dancing = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing',
})

export const metadata: Metadata = {
  title: 'LUMINA - Where Culinary Art Meets Digital Innovation',
  description: 'Experience the Future of Fine Dining at LUMINA. Ultra-modern fine dining with molecular gastronomy, AI-powered flavor profiling, and an unforgettable luxury dining experience.',
  keywords: 'fine dining, luxury restaurant, molecular gastronomy, tasting menu, chef table, premium dining',
  authors: [{ name: 'LUMINA Restaurant' }],
  openGraph: {
    title: 'LUMINA - Where Culinary Art Meets Digital Innovation',
    description: 'Experience the Future of Fine Dining at LUMINA',
    url: 'https://lumina-restaurant.com',
    siteName: 'LUMINA Restaurant',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LUMINA Restaurant - Fine Dining Experience',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUMINA - Where Culinary Art Meets Digital Innovation',
    description: 'Experience the Future of Fine Dining at LUMINA',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${dancing.variable}`}>
      <body className={`${inter.className} bg-midnight text-white antialiased`}>
        <div className="min-h-screen">
          {children}
        </div>
        {/* Particle Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-electric-gold rounded-full animate-particle opacity-30"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-neon-coral rounded-full animate-particle opacity-40" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-ice-blue rounded-full animate-particle opacity-35" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-electric-gold rounded-full animate-particle opacity-25" style={{animationDelay: '6s'}}></div>
        </div>
      </body>
    </html>
  )
}
