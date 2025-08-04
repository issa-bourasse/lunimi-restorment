'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Car, Train, Send, MessageCircle, Calendar } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      primary: '(555) 123-4567',
      secondary: 'Available 24/7 for reservations',
      color: 'electric-gold'
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'hello@lumina-restaurant.com',
      secondary: 'We respond within 2 hours',
      color: 'neon-coral'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      primary: 'Chat with our team',
      secondary: 'Available daily 10 AM - 10 PM',
      color: 'ice-blue'
    },
    {
      icon: Calendar,
      title: 'Book Online',
      primary: 'Instant reservations',
      secondary: 'Real-time availability',
      color: 'electric-gold'
    }
  ]

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'reservation', label: 'Reservation' },
    { value: 'events', label: 'Private Events' },
    { value: 'chefs-table', label: 'Chef\'s Table' },
    { value: 'gift-cards', label: 'Gift Cards' },
    { value: 'media', label: 'Media & Press' },
    { value: 'careers', label: 'Careers' },
    { value: 'feedback', label: 'Feedback' }
  ]

  const officeHours = [
    { day: 'Monday', hours: 'Closed', status: 'closed' },
    { day: 'Tuesday - Thursday', hours: '6:00 PM - 10:00 PM', status: 'open' },
    { day: 'Friday - Saturday', hours: '6:00 PM - 11:00 PM', status: 'open' },
    { day: 'Sunday', hours: 'Closed', status: 'closed' }
  ]

  const departments = [
    {
      title: 'Reservations',
      email: 'reservations@lumina-restaurant.com',
      phone: '(555) 123-4567',
      description: 'Table bookings and dining inquiries'
    },
    {
      title: 'Private Events',
      email: 'events@lumina-restaurant.com',
      phone: '(555) 123-4568',
      description: 'Corporate events and special celebrations'
    },
    {
      title: 'Chef\'s Table',
      email: 'chefstable@lumina-restaurant.com',
      phone: '(555) 123-4569',
      description: 'Exclusive culinary experiences'
    },
    {
      title: 'Media Relations',
      email: 'media@lumina-restaurant.com',
      phone: '(555) 123-4570',
      description: 'Press inquiries and partnerships'
    }
  ]

  return (
    <div className="min-h-screen bg-midnight text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-gray-900 to-midnight"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-ice-blue rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-electric-gold rounded-full filter blur-3xl opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 mb-6">
            <MessageCircle className="text-ice-blue" size={24} />
            <span className="text-ice-blue font-semibold tracking-wider">GET IN TOUCH</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6">
            Contact
            <span className="text-gradient-blue block">LUMINA</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We&apos;re here to make your dining experience extraordinary. Reach out to us for reservations,
            private events, or any questions about our culinary journey.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              How to
              <span className="text-gradient-gold block">Reach Us</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <div key={index} className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-500 group">
                  <div className={`w-16 h-16 bg-${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-${method.color.split('-')[0]} transition-all duration-300`}>
                    <IconComponent className="text-midnight" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-electric-gold font-bold mb-2">{method.primary}</p>
                  <p className="text-gray-300 text-sm">{method.secondary}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Location */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-midnight to-gray-900"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-serif font-bold text-white mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-300">
                  Fill out the form below and we&apos;ll get back to you as soon as possible
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                        className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Inquiry Type</label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-gold"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value} className="bg-midnight">
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief subject line"
                      className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold resize-none"
                      required
                    ></textarea>
                  </div>

                  <button className="w-full glass-button py-4 text-lg font-semibold text-white hover:text-midnight transition-all duration-300 flex items-center justify-center space-x-2">
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Location & Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">Visit Us</h3>
                
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

              {/* Hours */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center space-x-2">
                  <Clock className="text-electric-gold" size={24} />
                  <span>Hours of Operation</span>
                </h3>
                
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-glass-border last:border-b-0">
                      <span className="text-gray-300">{schedule.day}</span>
                      <span className={`font-semibold ${schedule.status === 'open' ? 'text-white' : 'text-neon-coral'}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-glass-white rounded-lg">
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold text-electric-gold">Chef&apos;s Table:</span> Available Wednesday - Saturday by special reservation only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Department
              <span className="text-gradient-coral block">Contacts</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Connect directly with the right team for your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500">
                <h3 className="text-xl font-serif font-bold text-white mb-3">{dept.title}</h3>
                <p className="text-gray-300 mb-4">{dept.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail size={16} className="text-electric-gold" />
                    <a href={`mailto:${dept.email}`} className="text-electric-gold hover:text-white transition-colors duration-300">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={16} className="text-electric-gold" />
                    <a href={`tel:${dept.phone}`} className="text-white hover:text-electric-gold transition-colors duration-300">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-gray-900 to-midnight"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">What are your reservation policies?</h3>
              <p className="text-gray-300">We recommend booking at least 2 weeks in advance. Same-day reservations may be available by calling directly.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">Do you accommodate dietary restrictions?</h3>
              <p className="text-gray-300">Absolutely! Please inform us of any allergies or dietary preferences when making your reservation, and our chefs will create a personalized experience.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">Is there a dress code?</h3>
              <p className="text-gray-300">We maintain an elegant atmosphere. Business casual to formal attire is recommended. No shorts, flip-flops, or athletic wear please.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">Can I bring my own wine?</h3>
              <p className="text-gray-300">We offer an extensive wine collection, but corkage is available for special bottles with a $50 fee per bottle.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
