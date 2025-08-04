'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Gift, Heart, Star, Calendar, CreditCard, Mail, Download } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const GiftCardsPage = () => {
  const [selectedAmount, setSelectedAmount] = useState(250)
  const [deliveryMethod, setDeliveryMethod] = useState('email')

  const giftCardOptions = [
    {
      amount: 150,
      title: 'Tasting Experience',
      description: 'Perfect for a memorable dinner for two',
      popular: false
    },
    {
      amount: 250,
      title: 'Signature Journey',
      description: 'Complete dining experience with wine pairings',
      popular: true
    },
    {
      amount: 450,
      title: 'Chef\'s Table',
      description: 'Exclusive chef\'s table experience',
      popular: false
    },
    {
      amount: 750,
      title: 'Ultimate Experience',
      description: 'Private dining with full culinary journey',
      popular: false
    }
  ]

  const occasions = [
    {
      icon: Heart,
      title: 'Anniversary',
      description: 'Celebrate love with an unforgettable culinary experience',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Gift,
      title: 'Birthday',
      description: 'Make birthdays extraordinary with molecular gastronomy',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Star,
      title: 'Corporate Gifts',
      description: 'Impress clients and reward employees with luxury dining',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Calendar,
      title: 'Special Occasions',
      description: 'Perfect for graduations, promotions, and celebrations',
      image: 'https://images.unsplash.com/photo-1482275548304-a58859dc31b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  const features = [
    {
      icon: Mail,
      title: 'Instant Delivery',
      description: 'Email delivery within minutes of purchase'
    },
    {
      icon: Calendar,
      title: 'No Expiration',
      description: 'Gift cards never expire and retain full value'
    },
    {
      icon: CreditCard,
      title: 'Flexible Amounts',
      description: 'Choose from preset amounts or enter custom value'
    },
    {
      icon: Download,
      title: 'Beautiful Design',
      description: 'Elegant digital cards perfect for any occasion'
    }
  ]

  return (
    <div className="min-h-screen bg-midnight text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-gray-900 to-midnight"></div>
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-electric-gold rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-neon-coral rounded-full filter blur-3xl opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 mb-6">
            <Gift className="text-electric-gold" size={24} />
            <span className="text-electric-gold font-semibold tracking-wider">PERFECT GIFTS</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6">
            Gift
            <span className="text-gradient-gold block">Cards</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Give the gift of extraordinary culinary experiences. Our gift cards open doors to 
            molecular gastronomy, chef&apos;s table experiences, and unforgettable dining memories.
          </p>
        </div>
      </section>

      {/* Gift Card Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Choose Your
              <span className="text-gradient-coral block">Amount</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Select from our curated experiences or choose a custom amount
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {giftCardOptions.map((option, index) => (
              <div
                key={option.amount}
                className={`glass-card p-6 rounded-2xl transition-all duration-500 cursor-pointer relative ${
                  selectedAmount === option.amount ? 'ring-2 ring-electric-gold shadow-glow-gold' : 'hover:scale-105'
                }`}
                onClick={() => setSelectedAmount(option.amount)}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-electric-gold text-midnight px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-electric-gold mb-2">
                    ${option.amount}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="max-w-md mx-auto">
            <div className="glass-card p-6 rounded-2xl text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Custom Amount</h3>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-electric-gold text-lg font-bold">$</span>
                <input
                  type="number"
                  min="50"
                  max="2000"
                  value={selectedAmount}
                  onChange={(e) => setSelectedAmount(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-electric-gold"
                />
              </div>
              <p className="text-gray-400 text-sm mt-2">Minimum $50, Maximum $2,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect Occasions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-midnight to-gray-900"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Perfect for Every
              <span className="text-gradient-blue block">Occasion</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Whether it&apos;s a romantic anniversary or corporate appreciation, our gift cards create lasting memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {occasions.map((occasion, index) => {
              const IconComponent = occasion.icon
              return (
                <div key={index} className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500">
                  <div className="relative h-48">
                    <Image
                      src={occasion.image}
                      alt={occasion.title}
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
                    <h3 className="text-2xl font-serif font-bold text-white mb-3">{occasion.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{occasion.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Why Choose Our
              <span className="text-gradient-gold block">Gift Cards</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-500">
                  <div className="w-16 h-16 bg-electric-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-midnight" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Purchase Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-gray-900 to-midnight"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Purchase Your
              <span className="text-gradient-coral block">Gift Card</span>
            </h2>
            <p className="text-lg text-gray-300">
              Complete your purchase and share the gift of extraordinary dining
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <form className="space-y-8">
              {/* Gift Card Details */}
              <div className="border-b border-glass-border pb-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">Gift Card Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Amount</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-electric-gold text-lg font-bold">$</span>
                      <input
                        type="number"
                        value={selectedAmount}
                        onChange={(e) => setSelectedAmount(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white font-bold focus:outline-none focus:ring-2 focus:ring-electric-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Delivery Method</label>
                    <select 
                      value={deliveryMethod}
                      onChange={(e) => setDeliveryMethod(e.target.value)}
                      className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-gold"
                    >
                      <option value="email" className="bg-midnight">Email Delivery</option>
                      <option value="print" className="bg-midnight">Print at Home</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Recipient Information */}
              <div className="border-b border-glass-border pb-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">Recipient Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Recipient Name</label>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Recipient Email</label>
                    <input
                      type="email"
                      placeholder="recipient@example.com"
                      className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-white font-semibold mb-2">Personal Message</label>
                  <textarea
                    rows={4}
                    placeholder="Add a personal message to make this gift extra special..."
                    className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Purchaser Information */}
              <div className="border-b border-glass-border pb-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">Your Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Your Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Your Email</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-gold"
                  />
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-glass-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Order Summary</h3>
                <div className="flex justify-between items-center text-lg">
                  <span className="text-gray-300">Gift Card Amount:</span>
                  <span className="text-electric-gold font-bold">${selectedAmount}</span>
                </div>
                <div className="flex justify-between items-center text-lg mt-2">
                  <span className="text-gray-300">Processing Fee:</span>
                  <span className="text-white">$0</span>
                </div>
                <div className="border-t border-glass-border mt-4 pt-4">
                  <div className="flex justify-between items-center text-2xl font-bold">
                    <span className="text-white">Total:</span>
                    <span className="text-electric-gold">${selectedAmount}</span>
                  </div>
                </div>
              </div>

              {/* Purchase Button */}
              <div className="text-center">
                <button className="glass-button px-12 py-4 text-lg font-semibold text-white hover:text-midnight transition-all duration-300 shadow-glow-gold">
                  Purchase Gift Card
                </button>
                <p className="text-gray-400 text-sm mt-4">
                  Secure payment processing • No expiration date • Instant delivery
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">Do gift cards expire?</h3>
              <p className="text-gray-300">No, our gift cards never expire and retain their full value indefinitely.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">Can gift cards be used for any experience?</h3>
              <p className="text-gray-300">Yes, gift cards can be used for dining, chef&apos;s table experiences, private events, and any other services at LUMINA.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">What if the bill is less than the gift card amount?</h3>
              <p className="text-gray-300">Any remaining balance stays on the gift card for future use. We can also provide a new gift card with the remaining balance.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">Can I purchase gift cards over the phone?</h3>
              <p className="text-gray-300">Yes, call us at (555) 123-4567 and our team will be happy to help you purchase gift cards over the phone.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default GiftCardsPage
