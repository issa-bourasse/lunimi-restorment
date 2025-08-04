'use client'

import Image from 'next/image'
import { Camera, Users, Utensils, Wine } from 'lucide-react'

const RestaurantAtmosphere = () => {
  return (
    <section id="atmosphere" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-midnight to-gray-900"></div>
      <div className="absolute top-1/3 left-0 w-48 h-48 bg-ice-blue rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-electric-gold rounded-full filter blur-3xl opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 mb-6">
            <Camera className="text-ice-blue" size={24} />
            <span className="text-ice-blue font-semibold tracking-wider">DINING EXPERIENCE</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Immersive
            <span className="text-gradient-blue block">Atmosphere</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Step into a world where every detail has been crafted to create an unforgettable sensory journey. 
            Our restaurant combines cutting-edge design with intimate luxury.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="glass-card p-4 rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Restaurant Interior"
                width={800}
                height={256}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Bar Area"
                  width={400}
                  height={128}
                  className="w-full h-32 object-cover rounded-xl"
                />
              </div>
              <div className="glass-card p-4 rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Private Dining"
                  width={400}
                  height={128}
                  className="w-full h-32 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="glass-card p-3 rounded-lg">
                  <Users className="text-electric-gold" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Intimate Seating</h3>
                  <p className="text-gray-300">
                    Our carefully designed dining spaces accommodate 2-8 guests with perfect acoustics for conversation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="glass-card p-3 rounded-lg">
                  <Utensils className="text-neon-coral" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Open Kitchen</h3>
                  <p className="text-gray-300">
                    Watch our culinary artists at work through our glass-walled kitchen with live cooking demonstrations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="glass-card p-3 rounded-lg">
                  <Wine className="text-ice-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Wine Cellar</h3>
                  <p className="text-gray-300">
                    Temperature-controlled wine cellar with over 500 selections from renowned vineyards worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="glass-button px-8 py-4 text-lg font-semibold text-white hover:text-midnight transition-all duration-300">
              Take Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RestaurantAtmosphere
