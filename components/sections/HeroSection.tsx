'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Calendar, Users, Crown } from 'lucide-react'


const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-midnight via-gray-900 to-midnight pt-20">
      {/* Enhanced Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight/90 via-purple-900/20 to-midnight/90 z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
        {/* Dynamic overlay patterns */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-midnight/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-electric-gold/5 via-transparent to-neon-coral/5 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-ice-blue/3 to-transparent z-10"></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-float opacity-40`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#FF6B6B' : '#00D4FF',
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-30 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Hero Header Section */}
          <div className="text-center mb-16">
            {/* Enhanced Logo Section */}
            <div className={`mb-12 transition-all duration-2000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="relative inline-block">
                {/* Multi-layered glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-electric-gold/30 via-electric-gold/40 to-electric-gold/30 blur-3xl transform scale-125 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-coral/20 via-transparent to-ice-blue/20 blur-2xl transform scale-110"></div>
                
                <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-serif font-black text-gradient-gold mb-8 drop-shadow-2xl">
                  LUMINA
                  <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6">
                    <Crown className="w-8 h-8 md:w-12 md:h-12 text-electric-gold animate-pulse drop-shadow-2xl" />
                  </div>
                </h1>
                
                {/* Enhanced decorative elements */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  <div className="w-2 h-2 bg-electric-gold rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-neon-coral rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 bg-ice-blue rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
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
