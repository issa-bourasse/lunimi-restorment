'use client'

import Image from 'next/image'
import { Award, Star, Users } from 'lucide-react'

const ChefTeam = () => {
  const chefs = [
    {
      name: "Marcus Aurelius",
      role: "Executive Chef",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      awards: ["3 Michelin Stars", "James Beard Award", "World's 50 Best"],
      specialty: "Molecular Gastronomy"
    },
    {
      name: "Isabella Chen",
      role: "Sous Chef",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      awards: ["Rising Star Award", "Culinary Excellence"],
      specialty: "Seafood Innovation"
    },
    {
      name: "Alexandre Dubois",
      role: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      awards: ["Best Pastry Chef", "Innovation Award"],
      specialty: "Dessert Artistry"
    }
  ]

  return (
    <section id="chef" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-gray-900 to-midnight"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 mb-6">
            <Users className="text-neon-coral" size={24} />
            <span className="text-neon-coral font-semibold tracking-wider">CULINARY MASTERS</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Meet Our
            <span className="text-gradient-coral block">Chef Team</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our world-renowned culinary team brings decades of experience and innovation to every dish, 
            creating unforgettable dining experiences that push the boundaries of gastronomy.
          </p>
        </div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {chefs.map((chef, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-500">
              <div className="relative mb-6">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-electric-gold"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 glass-card px-3 py-1 text-sm text-electric-gold font-semibold">
                  {chef.specialty}
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-white mb-2">{chef.name}</h3>
              <p className="text-neon-coral font-semibold mb-4">{chef.role}</p>
              
              <div className="space-y-2">
                {chef.awards.map((award, i) => (
                  <div key={i} className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                    <Award size={16} className="text-electric-gold" />
                    <span>{award}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="glass-card p-8 text-center">
          <h3 className="text-3xl font-serif font-bold text-white mb-6">Our Culinary Philosophy</h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            &ldquo;We believe that cooking is an art form that engages all the senses. Every dish tells a story,
            every flavor creates a memory, and every meal becomes an experience that transcends the ordinary.
            Our commitment to innovation, sustainability, and excellence drives us to constantly push the
            boundaries of what&apos;s possible in the culinary world.&rdquo;
          </p>
          <div className="mt-6 text-electric-gold font-semibold">
            — The LUMINA Culinary Team
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChefTeam
