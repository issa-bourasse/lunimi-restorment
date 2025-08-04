'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Chef\'s Table', href: '/chefs-table' },
    { name: 'Private Events', href: '/events' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-card backdrop-blur-glass' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-serif font-bold text-gradient-gold">
              LUMINA
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-electric-gold transition-colors duration-300 px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Phone size={16} />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <MapPin size={16} />
              <span>Downtown NYC</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="glass-button p-2 rounded-md text-white hover:text-electric-gold transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-card backdrop-blur-glass border-t border-glass-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-electric-gold block px-3 py-2 text-base font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="border-t border-glass-border pt-4 mt-4">
              <div className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300">
                <MapPin size={16} />
                <span>Downtown NYC</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
