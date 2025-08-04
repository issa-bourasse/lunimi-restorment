'use client'

import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-midnight border-t border-glass-border">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-midnight"></div>
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-electric-gold rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-neon-coral rounded-full filter blur-3xl opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-4xl font-serif font-bold text-gradient-gold mb-4">
              LUMINA
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Where Culinary Art Meets Digital Innovation. Experience the future of fine dining 
              with our molecular gastronomy techniques and AI-powered flavor profiling.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="glass-card p-3 hover:shadow-glow-gold transition-all duration-300 group">
                <Instagram size={20} className="text-white group-hover:text-electric-gold" />
              </a>
              <a href="#" className="glass-card p-3 hover:shadow-glow-coral transition-all duration-300 group">
                <Facebook size={20} className="text-white group-hover:text-neon-coral" />
              </a>
              <a href="#" className="glass-card p-3 hover:shadow-glow-blue transition-all duration-300 group">
                <Twitter size={20} className="text-white group-hover:text-ice-blue" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={18} className="text-electric-gold flex-shrink-0" />
                <div>
                  <p>123 Culinary Avenue</p>
                  <p>Downtown NYC, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} className="text-electric-gold flex-shrink-0" />
                <div>
                  <p>(555) 123-4567</p>
                  <p className="text-sm text-gray-400">Reservations</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} className="text-electric-gold flex-shrink-0" />
                <div>
                  <p>hello@lumina-restaurant.com</p>
                  <p className="text-sm text-gray-400">General Inquiries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-electric-gold flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <div className="space-y-1">
                    <p><span className="font-medium">Dinner Service</span></p>
                    <p className="text-sm">Tuesday - Saturday</p>
                    <p className="text-sm">6:00 PM - 11:00 PM</p>
                  </div>
                  
                  <div className="mt-4 space-y-1">
                    <p><span className="font-medium">Chef&apos;s Table</span></p>
                    <p className="text-sm">By Reservation Only</p>
                    <p className="text-sm">Wednesday - Saturday</p>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm text-neon-coral">Closed Sundays & Mondays</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="glass-card p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-serif font-bold text-white mb-4">
              Stay Connected
            </h4>
            <p className="text-gray-300 mb-6">
              Be the first to know about new menu items, exclusive events, and special offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold"
              />
              <button className="glass-button px-6 py-3 text-white font-semibold hover:text-midnight transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} LUMINA Restaurant. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-electric-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-electric-gold transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-electric-gold transition-colors duration-300">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
