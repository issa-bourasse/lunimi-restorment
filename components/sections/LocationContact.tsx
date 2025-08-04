'use client'

import { MapPin, Phone, Mail, Clock, Car, Train } from 'lucide-react'

const LocationContact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-gray-900 to-midnight"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-ice-blue rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-electric-gold rounded-full filter blur-3xl opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 mb-6">
            <MapPin className="text-ice-blue" size={24} />
            <span className="text-ice-blue font-semibold tracking-wider">FIND US</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Visit
            <span className="text-gradient-blue block">LUMINA</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Located in the heart of downtown NYC, LUMINA offers an easily accessible fine dining 
            destination with convenient parking and transportation options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Our Location</h3>
            
            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-800 rounded-xl mb-6 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-electric-gold mx-auto mb-4" />
                <p className="text-gray-300">Interactive Map</p>
                <p className="text-sm text-gray-400">Google Maps Integration</p>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="text-electric-gold flex-shrink-0 mt-1" size={20} />
                <div className="text-gray-300">
                  <p className="font-semibold text-white">Address</p>
                  <p>123 Culinary Avenue</p>
                  <p>Downtown NYC, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Car className="text-electric-gold flex-shrink-0 mt-1" size={20} />
                <div className="text-gray-300">
                  <p className="font-semibold text-white">Parking</p>
                  <p>Complimentary valet service</p>
                  <p>Self-parking available nearby</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Train className="text-electric-gold flex-shrink-0 mt-1" size={20} />
                <div className="text-gray-300">
                  <p className="font-semibold text-white">Public Transit</p>
                  <p>2 blocks from Union Square Station</p>
                  <p>Multiple subway lines accessible</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-electric-gold flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white">Reservations</p>
                    <p className="text-gray-300">(555) 123-4567</p>
                    <p className="text-sm text-gray-400">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-electric-gold flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-300">hello@lumina-restaurant.com</p>
                    <p className="text-sm text-gray-400">General inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-electric-gold flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white">Private Events</p>
                    <p className="text-gray-300">events@lumina-restaurant.com</p>
                    <p className="text-sm text-gray-400">Special occasions & corporate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center space-x-2">
                <Clock className="text-electric-gold" size={24} />
                <span>Hours of Operation</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-glass-border">
                  <span className="text-gray-300">Tuesday - Thursday</span>
                  <span className="text-white font-semibold">6:00 PM - 10:00 PM</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-glass-border">
                  <span className="text-gray-300">Friday - Saturday</span>
                  <span className="text-white font-semibold">6:00 PM - 11:00 PM</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-glass-border">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-neon-coral font-semibold">Closed</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Monday</span>
                  <span className="text-neon-coral font-semibold">Closed</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-glass-white rounded-lg">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-electric-gold">Chef&apos;s Table:</span> Available Wednesday - Saturday by special reservation only
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-serif font-bold text-white mb-4">Ready to Experience LUMINA?</h3>
            <p className="text-gray-300 mb-6">
              Join us for an unforgettable culinary journey that will redefine your understanding of fine dining.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-button px-8 py-4 text-lg font-semibold text-white hover:text-midnight transition-all duration-300">
                Make Reservation
              </button>
              <button className="glass-card px-8 py-4 text-lg font-semibold text-white hover:text-electric-gold transition-all duration-300">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationContact
