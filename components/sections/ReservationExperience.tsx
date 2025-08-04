'use client'

import { useState } from 'react'
import { Calendar, Clock, Users, Phone, MapPin } from 'lucide-react'
import TableAvailability from '@/components/interactive/TableAvailability'

const ReservationExperience = () => {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [partySize, setPartySize] = useState(2)
  const [showTableView, setShowTableView] = useState(false)

  const timeSlots = [
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', 
    '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ]

  return (
    <section id="reservations" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-midnight to-gray-900"></div>
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-electric-gold rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-neon-coral rounded-full filter blur-3xl opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 mb-6">
            <Calendar className="text-electric-gold" size={24} />
            <span className="text-electric-gold font-semibold tracking-wider">BOOK YOUR TABLE</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Reserve Your
            <span className="text-gradient-gold block">Experience</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Secure your table at LUMINA and embark on a culinary journey that will redefine your 
            understanding of fine dining. Every reservation is an invitation to extraordinary.
          </p>
        </div>

        {/* Toggle View Buttons */}
        <div className="flex justify-center mb-8">
          <div className="glass-card p-2 rounded-full">
            <div className="flex space-x-2">
              <button
                onClick={() => setShowTableView(false)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  !showTableView 
                    ? 'bg-electric-gold text-black shadow-glow-gold' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Quick Booking
              </button>
              <button
                onClick={() => setShowTableView(true)}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center space-x-2 ${
                  showTableView 
                    ? 'bg-electric-gold text-black shadow-glow-gold' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <MapPin size={18} />
                <span>Table Selection</span>
              </button>
            </div>
          </div>
        </div>

        {/* Reservation Form or Table View */}
        <div className="max-w-4xl mx-auto">
          {!showTableView ? (
            <div className="glass-card p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Date Selection */}
              <div>
                <label className="block text-white font-semibold mb-4 flex items-center space-x-2">
                  <Calendar size={20} className="text-electric-gold" />
                  <span>Select Date</span>
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-gold"
                />
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-white font-semibold mb-4 flex items-center space-x-2">
                  <Clock size={20} className="text-electric-gold" />
                  <span>Select Time</span>
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-gold"
                >
                  <option value="">Choose time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time} className="bg-midnight">
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              {/* Party Size */}
              <div>
                <label className="block text-white font-semibold mb-4 flex items-center space-x-2">
                  <Users size={20} className="text-electric-gold" />
                  <span>Party Size</span>
                </label>
                <select
                  value={partySize}
                  onChange={(e) => setPartySize(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-gold"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => (
                    <option key={size} value={size} className="bg-midnight">
                      {size} {size === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Guest Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold"
              />
            </div>

            <div className="mt-6">
              <label className="block text-white font-semibold mb-2">Special Requests</label>
              <textarea
                rows={4}
                placeholder="Dietary restrictions, celebrations, or special accommodations..."
                className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold resize-none"
              ></textarea>
            </div>

              {/* Submit Button */}
              <div className="mt-8 text-center">
                <button className="glass-button px-12 py-4 text-lg font-semibold text-white hover:text-midnight transition-all duration-300 shadow-glow-gold">
                  Confirm Reservation
                </button>
              </div>
            </div>
          ) : (
            <TableAvailability />
          )}

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <div className="glass-card p-6 inline-block">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={20} className="text-electric-gold" />
                <div>
                  <p className="font-semibold">Need assistance?</p>
                  <p>Call us at (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReservationExperience
