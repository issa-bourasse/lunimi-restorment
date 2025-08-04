'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Calendar, Users } from 'lucide-react'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-gradient z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-electric-gold rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-neon-coral rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-ice-blue rounded-full animate-float opacity-50" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-electric-gold rounded-full animate-float opacity-30" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Logo Animation */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-8xl md:text-9xl font-serif font-bold text-gradient-gold mb-4 animate-glow">
            LUMINA
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-electric-gold to-transparent mx-auto"></div>
        </div>

        {/* Tagline */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            Where Culinary Art Meets Digital Innovation
          </p>
        </div>

        {/* Hero Statement */}
        <div className={`mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
            Experience the
            <span className="text-gradient-coral block mt-2">
              Future of Fine Dining
            </span>
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="glass-button px-8 py-4 text-lg font-semibold text-white hover:text-midnight transition-all duration-300 flex items-center space-x-2 group">
              <Calendar size={20} />
              <span>Reserve Your Table</span>
              <div className="w-0 group-hover:w-2 h-2 bg-electric-gold rounded-full transition-all duration-300"></div>
            </button>
            
            <button className="glass-card px-8 py-4 text-lg font-semibold text-white hover:text-electric-gold transition-all duration-300 flex items-center space-x-2 group">
              <Users size={20} />
              <span>Private Events</span>
              <div className="w-0 group-hover:w-2 h-2 bg-neon-coral rounded-full transition-all duration-300"></div>
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className={`mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-gradient-gold mb-2">★★★</div>
              <div className="text-sm text-gray-300">Michelin Stars</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-gradient-coral mb-2">12</div>
              <div className="text-sm text-gray-300">Course Tasting Menu</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-gradient-blue mb-2">AI</div>
              <div className="text-sm text-gray-300">Flavor Profiling</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-400 tracking-wider">DISCOVER MORE</span>
            <ChevronDown size={24} className="text-electric-gold animate-bounce" />
          </div>
        </div>
      </div>

      {/* Ambient Lighting Effects */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-midnight to-transparent z-20"></div>
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-electric-gold rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute top-1/3 right-0 w-24 h-24 bg-neon-coral rounded-full filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
    </section>
  )
}

export default HeroSection
