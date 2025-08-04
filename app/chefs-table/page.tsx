'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChefHat, Clock, Users, Star, Camera, Wine, Utensils, Award } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const ChefsTablePage = () => {
  const [selectedExperience, setSelectedExperience] = useState('signature')

  const experiences = [
    {
      id: 'signature',
      name: 'Signature Experience',
      duration: '3.5 hours',
      price: '$450 per person',
      capacity: '6 guests maximum',
      description: 'Our flagship chef\'s table experience featuring 15 courses with wine pairings'
    },
    {
      id: 'masterclass',
      name: 'Culinary Masterclass',
      duration: '4 hours',
      price: '$550 per person',
      capacity: '4 guests maximum',
      description: 'Hands-on cooking experience with our executive chef and personalized recipes'
    },
    {
      id: 'seasonal',
      name: 'Seasonal Journey',
      duration: '3 hours',
      price: '$395 per person',
      capacity: '8 guests maximum',
      description: 'Seasonal menu highlighting the finest ingredients of the current season'
    }
  ]

  const experienceHighlights = [
    {
      icon: ChefHat,
      title: 'Interactive Cooking',
      description: 'Watch our chefs create molecular gastronomy masterpieces right before your eyes'
    },
    {
      icon: Wine,
      title: 'Sommelier Pairings',
      description: 'Expert wine selections paired with each course by our master sommelier'
    },
    {
      icon: Camera,
      title: 'Behind the Scenes',
      description: 'Exclusive access to our kitchen and cooking techniques'
    },
    {
      icon: Utensils,
      title: 'Personalized Menu',
      description: 'Custom dishes created based on your preferences and dietary needs'
    }
  ]

  const chefProfiles = [
    {
      name: 'Marcus Aurelius',
      role: 'Executive Chef',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      awards: ['3 Michelin Stars', 'James Beard Award', 'World\'s 50 Best'],
      specialty: 'Molecular Gastronomy',
      bio: 'With over 20 years of culinary excellence, Chef Marcus brings innovation and artistry to every dish.'
    },
    {
      name: 'Isabella Chen',
      role: 'Sous Chef',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      awards: ['Rising Star Award', 'Culinary Excellence'],
      specialty: 'Seafood Innovation',
      bio: 'Isabella\'s expertise in seafood preparation and presentation creates unforgettable oceanic experiences.'
    }
  ]

  const sampleMenu = [
    {
      course: 'Amuse-Bouche',
      dish: 'Liquid Nitrogen Olive',
      technique: 'Spherification',
      description: 'Extra virgin olive oil transformed into caviar-like spheres that burst with flavor'
    },
    {
      course: 'First Course',
      dish: 'Deconstructed Caesar',
      technique: 'Foam & Gelification',
      description: 'Classic Caesar salad reimagined with parmesan foam and anchovy glass'
    },
    {
      course: 'Second Course',
      dish: 'Levitating Scallop',
      technique: 'Magnetic Levitation',
      description: 'Seared scallop suspended above sea foam using culinary magnetism'
    },
    {
      course: 'Third Course',
      dish: 'Forest Floor',
      technique: 'Edible Soil',
      description: 'Mushroom "soil" with truffle essence and edible moss'
    },
    {
      course: 'Main Course',
      dish: 'Wagyu Transformation',
      technique: 'Sous Vide & Torching',
      description: 'A5 Wagyu cooked to perfection with molecular accompaniments'
    },
    {
      course: 'Dessert',
      dish: 'Chocolate Sphere',
      technique: 'Tempered Chocolate',
      description: 'Hollow chocolate sphere that melts to reveal hidden dessert inside'
    }
  ]

  return (
    <div className="min-h-screen bg-midnight text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-gray-900 to-midnight"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-electric-gold rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-neon-coral rounded-full filter blur-3xl opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 mb-6">
            <ChefHat className="text-electric-gold" size={24} />
            <span className="text-electric-gold font-semibold tracking-wider">EXCLUSIVE EXPERIENCE</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6">
            Chef&apos;s
            <span className="text-gradient-gold block">Table</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Step into our kitchen for an intimate culinary journey where artistry meets innovation. 
            Watch master chefs create molecular gastronomy masterpieces exclusively for you.
          </p>
        </div>
      </section>

      {/* Experience Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Choose Your
              <span className="text-gradient-coral block">Experience</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Each experience is carefully crafted to provide unique insights into our culinary artistry
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`glass-card p-8 rounded-2xl transition-all duration-500 cursor-pointer ${
                  selectedExperience === exp.id ? 'ring-2 ring-electric-gold shadow-glow-gold' : 'hover:scale-105'
                }`}
                onClick={() => setSelectedExperience(exp.id)}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{exp.name}</h3>
                  <div className="text-3xl font-bold text-electric-gold mb-2">{exp.price}</div>
                  <div className="flex justify-center space-x-4 text-sm text-gray-300 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{exp.capacity}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>

                <button className="w-full glass-button py-3 text-white font-semibold hover:text-midnight transition-all duration-300">
                  Reserve Experience
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-midnight to-gray-900"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              What Makes It
              <span className="text-gradient-blue block">Special</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experienceHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <div key={index} className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-500">
                  <div className="w-16 h-16 bg-electric-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-midnight" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{highlight.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Meet the Chefs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Meet Your
              <span className="text-gradient-coral block">Chefs</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Learn from world-renowned culinary masters who will guide you through each technique
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {chefProfiles.map((chef, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                  <div className="relative">
                    <Image
                      src={chef.image}
                      alt={chef.name}
                      width={128}
                      height={128}
                      className="w-32 h-32 rounded-full object-cover border-4 border-electric-gold"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 glass-card px-3 py-1 text-sm text-electric-gold font-semibold">
                      {chef.specialty}
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{chef.name}</h3>
                    <p className="text-neon-coral font-semibold mb-4">{chef.role}</p>
                    
                    <div className="space-y-2 mb-4">
                      {chef.awards.map((award, i) => (
                        <div key={i} className="flex items-center justify-center md:justify-start space-x-2 text-sm text-gray-300">
                          <Award size={16} className="text-electric-gold" />
                          <span>{award}</span>
                        </div>
                      ))}
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">{chef.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Menu */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-gray-900 to-midnight"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Sample
              <span className="text-gradient-gold block">Journey</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A glimpse into the culinary techniques and artistry you&apos;ll experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleMenu.map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-electric-gold font-semibold">{item.course}</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-electric-gold fill-current" />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-white mb-2">{item.dish}</h3>
                
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs bg-neon-coral bg-opacity-20 border border-neon-coral rounded-full text-neon-coral">
                    {item.technique}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Reserve Your
              <span className="text-gradient-coral block">Seat</span>
            </h2>
            <p className="text-lg text-gray-300">
              Chef&apos;s table experiences are available Wednesday through Saturday by reservation only
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Experience Type</label>
                  <select className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-gold">
                    <option value="" className="bg-midnight">Select experience</option>
                    <option value="signature" className="bg-midnight">Signature Experience</option>
                    <option value="masterclass" className="bg-midnight">Culinary Masterclass</option>
                    <option value="seasonal" className="bg-midnight">Seasonal Journey</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Number of Guests</label>
                  <select className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-gold">
                    <option value="" className="bg-midnight">Select guests</option>
                    <option value="2" className="bg-midnight">2 guests</option>
                    <option value="4" className="bg-midnight">4 guests</option>
                    <option value="6" className="bg-midnight">6 guests</option>
                    <option value="8" className="bg-midnight">8 guests</option>
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
                    <option value="6:00" className="bg-midnight">6:00 PM</option>
                    <option value="6:30" className="bg-midnight">6:30 PM</option>
                    <option value="7:00" className="bg-midnight">7:00 PM</option>
                    <option value="7:30" className="bg-midnight">7:30 PM</option>
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
                <label className="block text-white font-semibold mb-2">Special Requests or Dietary Restrictions</label>
                <textarea
                  rows={4}
                  placeholder="Any allergies, dietary preferences, or special requests..."
                  className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold resize-none"
                ></textarea>
              </div>

              <div className="text-center">
                <button className="glass-button px-12 py-4 text-lg font-semibold text-white hover:text-midnight transition-all duration-300 shadow-glow-gold">
                  Request Reservation
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <div className="glass-card p-6 inline-block">
              <h3 className="text-xl font-semibold text-white mb-2">Questions about Chef&apos;s Table?</h3>
              <p className="text-gray-300 mb-4">Our culinary concierge is here to help</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:555-123-4567" className="glass-button px-6 py-2 text-white font-semibold hover:text-midnight transition-all duration-300">
                  Call (555) 123-4567
                </a>
                <a href="mailto:chefstable@lumina-restaurant.com" className="glass-card px-6 py-2 text-white font-semibold hover:text-electric-gold transition-all duration-300">
                  Email Chef&apos;s Table
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ChefsTablePage
