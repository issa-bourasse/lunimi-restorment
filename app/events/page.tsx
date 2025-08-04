'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Users, Calendar, Star, Gift, Camera, Music, Utensils, Wine } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const EventsPage = () => {
  const [selectedPackage, setSelectedPackage] = useState('intimate')

  const eventPackages = [
    {
      id: 'intimate',
      name: 'Intimate Celebration',
      capacity: '2-8 guests',
      price: '$200 per person',
      features: [
        'Private dining room',
        'Personalized menu consultation',
        'Dedicated sommelier',
        'Custom floral arrangements',
        'Professional photography'
      ]
    },
    {
      id: 'corporate',
      name: 'Corporate Excellence',
      capacity: '10-25 guests',
      price: '$175 per person',
      features: [
        'Executive boardroom dining',
        'AV equipment included',
        'Business lunch or dinner options',
        'Networking cocktail hour',
        'Branded menu cards'
      ]
    },
    {
      id: 'celebration',
      name: 'Grand Celebration',
      capacity: '20-50 guests',
      price: '$150 per person',
      features: [
        'Full restaurant buyout option',
        'Live entertainment coordination',
        'Custom cake and dessert station',
        'Professional event planning',
        'Valet parking service'
      ]
    }
  ]

  const eventTypes = [
    {
      icon: Gift,
      title: 'Anniversary Dinners',
      description: 'Celebrate your special milestones with an unforgettable culinary experience',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Users,
      title: 'Corporate Events',
      description: 'Impress clients and colleagues with sophisticated business dining',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Star,
      title: 'Birthday Celebrations',
      description: 'Make birthdays extraordinary with personalized culinary artistry',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Calendar,
      title: 'Holiday Gatherings',
      description: 'Create magical holiday memories with seasonal specialty menus',
      image: 'https://images.unsplash.com/photo-1482275548304-a58859dc31b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  const additionalServices = [
    {
      icon: Camera,
      title: 'Professional Photography',
      description: 'Capture every moment with our in-house photographer',
      price: 'From $500'
    },
    {
      icon: Music,
      title: 'Live Entertainment',
      description: 'Curated musicians and performers for your event',
      price: 'From $800'
    },
    {
      icon: Wine,
      title: 'Sommelier Experience',
      description: 'Dedicated wine expert for tastings and pairings',
      price: 'From $300'
    },
    {
      icon: Utensils,
      title: 'Chef\'s Table Experience',
      description: 'Interactive dining with live cooking demonstrations',
      price: 'From $1,200'
    }
  ]

  return (
    <div className="min-h-screen bg-midnight text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-gray-900 to-midnight"></div>
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-neon-coral rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-electric-gold rounded-full filter blur-3xl opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 mb-6">
            <Users className="text-neon-coral" size={24} />
            <span className="text-neon-coral font-semibold tracking-wider">PRIVATE EXPERIENCES</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6">
            Private
            <span className="text-gradient-coral block">Events</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your special occasions into extraordinary culinary experiences. 
            From intimate celebrations to grand corporate events, we create unforgettable moments.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Celebrate in
              <span className="text-gradient-gold block">Style</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Every occasion deserves a unique culinary experience tailored to your vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => {
              const IconComponent = event.icon
              return (
                <div key={index} className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500">
                  <div className="relative h-48">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <IconComponent className="text-electric-gold mb-2" size={32} />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Event Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-midnight to-gray-900"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Event
              <span className="text-gradient-blue block">Packages</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose from our curated packages or let us create a custom experience just for you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {eventPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`glass-card p-8 rounded-2xl transition-all duration-500 cursor-pointer ${
                  selectedPackage === pkg.id ? 'ring-2 ring-electric-gold shadow-glow-gold' : 'hover:scale-105'
                }`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-300 mb-4">{pkg.capacity}</p>
                  <div className="text-3xl font-bold text-electric-gold">{pkg.price}</div>
                </div>

                <div className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <Star size={16} className="text-electric-gold fill-current flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 glass-button py-3 text-white font-semibold hover:text-midnight transition-all duration-300">
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Additional
              <span className="text-gradient-coral block">Services</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Enhance your event with our premium add-on services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-500">
                  <div className="w-16 h-16 bg-electric-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-midnight" size={24} />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-electric-gold font-bold">{service.price}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Event Planning Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-gray-900 to-midnight"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Plan Your
              <span className="text-gradient-gold block">Event</span>
            </h2>
            <p className="text-lg text-gray-300">
              Let our event specialists create the perfect experience for your special occasion
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Event Type</label>
                  <select className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-gold">
                    <option value="" className="bg-midnight">Select event type</option>
                    <option value="anniversary" className="bg-midnight">Anniversary</option>
                    <option value="birthday" className="bg-midnight">Birthday</option>
                    <option value="corporate" className="bg-midnight">Corporate Event</option>
                    <option value="holiday" className="bg-midnight">Holiday Celebration</option>
                    <option value="other" className="bg-midnight">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Guest Count</label>
                  <select className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-gold">
                    <option value="" className="bg-midnight">Number of guests</option>
                    <option value="2-8" className="bg-midnight">2-8 guests</option>
                    <option value="10-25" className="bg-midnight">10-25 guests</option>
                    <option value="20-50" className="bg-midnight">20-50 guests</option>
                    <option value="50+" className="bg-midnight">50+ guests</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-gold"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Preferred Time</label>
                  <select className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-gold">
                    <option value="" className="bg-midnight">Select time</option>
                    <option value="lunch" className="bg-midnight">Lunch (12:00 PM - 3:00 PM)</option>
                    <option value="dinner" className="bg-midnight">Dinner (6:00 PM - 10:00 PM)</option>
                    <option value="evening" className="bg-midnight">Late Evening (8:00 PM - 12:00 AM)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Contact Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Event Details & Special Requests</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your vision, dietary restrictions, special accommodations, or any other details..."
                  className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold resize-none"
                ></textarea>
              </div>

              <div className="text-center">
                <button className="glass-button px-12 py-4 text-lg font-semibold text-white hover:text-midnight transition-all duration-300 shadow-glow-gold">
                  Submit Event Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-300 mb-6">
              Our event specialists are available to help you plan the perfect celebration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:555-123-4567" className="glass-button px-8 py-3 text-white font-semibold hover:text-midnight transition-all duration-300">
                Call (555) 123-4567
              </a>
              <a href="mailto:events@lumina-restaurant.com" className="glass-card px-8 py-3 text-white font-semibold hover:text-electric-gold transition-all duration-300">
                Email Events Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default EventsPage
