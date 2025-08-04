'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChefHat, Star, Clock, Eye, Sparkles } from 'lucide-react'
import Dish3DViewer from '@/components/interactive/Dish3DViewer'

const SignatureDishes = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [selectedDish, setSelectedDish] = useState<any>(null)
  const [show3DViewer, setShow3DViewer] = useState(false)

  const dishes = [
    {
      id: 1,
      name: "Molecular Wagyu Symphony",
      description: "A5 Wagyu beef with spherified truffle essence, deconstructed vegetables, and gold leaf",
      price: "$185",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      chef: "Chef Marcus",
      prepTime: "45 min",
      rating: 5,
      ingredients: ["A5 Wagyu", "Black Truffle", "Micro Greens", "24k Gold"]
    },
    {
      id: 2,
      name: "Levitating Lobster Cloud",
      description: "Maine lobster suspended in aromatic vapor with citrus caviar and sea foam",
      price: "$165",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      chef: "Chef Isabella",
      prepTime: "35 min",
      rating: 5,
      ingredients: ["Maine Lobster", "Citrus Caviar", "Sea Foam", "Aromatic Vapor"]
    },
    {
      id: 3,
      name: "Time-Frozen Tuna Tornado",
      description: "Liquid nitrogen-frozen bluefin tuna with wasabi snow and soy glass shards",
      price: "$145",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      chef: "Chef Hiroshi",
      prepTime: "30 min",
      rating: 5,
      ingredients: ["Bluefin Tuna", "Wasabi Snow", "Soy Glass", "Liquid Nitrogen"]
    },
    {
      id: 4,
      name: "Gravity-Defying Dessert",
      description: "Chocolate sphere that melts to reveal floating vanilla clouds and berry stardust",
      price: "$85",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      chef: "Chef Amélie",
      prepTime: "25 min",
      rating: 5,
      ingredients: ["Dark Chocolate", "Vanilla Clouds", "Berry Dust", "Edible Flowers"]
    },
    {
      id: 5,
      name: "Phoenix Rising Flambé",
      description: "Duck breast that ignites tableside with cognac flames and phoenix spice blend",
      price: "$155",
      image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      chef: "Chef Alexandre",
      prepTime: "40 min",
      rating: 5,
      ingredients: ["Duck Breast", "Cognac", "Phoenix Spices", "Flame Presentation"]
    },
    {
      id: 6,
      name: "Quantum Vegetable Garden",
      description: "Vegetables that change color and flavor as you eat, with edible soil and flower petals",
      price: "$125",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      chef: "Chef Sofia",
      prepTime: "35 min",
      rating: 5,
      ingredients: ["Color-Changing Vegetables", "Edible Soil", "Flower Petals", "Micro Herbs"]
    }
  ]

  return (
    <section id="dishes" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-gray-900 to-midnight"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-neon-coral rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-electric-gold rounded-full filter blur-3xl opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 mb-6">
            <ChefHat className="text-electric-gold" size={24} />
            <span className="text-electric-gold font-semibold tracking-wider">SIGNATURE CREATIONS</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Culinary
            <span className="text-gradient-coral block">Masterpieces</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Each dish is a work of art, crafted with molecular gastronomy techniques and the finest ingredients from around the world. Experience flavors that defy physics and ignite your senses.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={dish.id}
              className={`glass-card p-6 rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer group ${
                activeCard === dish.id ? 'ring-2 ring-electric-gold shadow-glow-gold' : ''
              }`}
              onMouseEnter={() => setActiveCard(dish.id)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Dish Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 glass-card px-3 py-1 text-electric-gold font-bold">
                  {dish.price}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-1">
                  {[...Array(dish.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-electric-gold fill-current" />
                  ))}
                </div>
              </div>

              {/* Dish Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-white group-hover:text-gradient-gold transition-all duration-300">
                  {dish.name}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {dish.description}
                </p>

                {/* Chef & Time Info */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <ChefHat size={16} />
                    <span>{dish.chef}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>{dish.prepTime}</span>
                  </div>
                </div>

                {/* Ingredients */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-electric-gold">Key Ingredients:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dish.ingredients.map((ingredient, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-glass-white border border-glass-border rounded-full text-gray-300"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button 
                    onClick={() => {
                      setSelectedDish(dish)
                      setShow3DViewer(true)
                    }}
                    className="w-full glass-button py-3 text-white font-semibold hover:text-midnight transition-all duration-300 group-hover:shadow-glow-gold flex items-center justify-center space-x-2"
                  >
                    <Eye size={18} />
                    <span>View in 3D</span>
                    <Sparkles size={16} className="animate-pulse" />
                  </button>
                  
                  <button className="w-full bg-gradient-to-r from-electric-gold to-neon-coral py-3 rounded-lg text-black font-bold hover:shadow-glow-gold transition-all">
                    Add to Tasting Menu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chef's Note */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <div className="text-6xl text-electric-gold mb-4 font-script">&ldquo;</div>
            <p className="text-xl text-gray-300 italic leading-relaxed mb-4">
              Each dish tells a story of innovation, tradition, and the endless pursuit of culinary perfection. 
              We don&apos;t just serve food; we create experiences that linger in your memory long after the last bite.
            </p>
            <div className="text-electric-gold font-semibold">
              — Executive Chef Marcus Aurelius
            </div>
          </div>
        </div>

        {/* 3D Dish Viewer Modal */}
        <Dish3DViewer
          dish={selectedDish}
          isActive={show3DViewer}
          onClose={() => {
            setShow3DViewer(false)
            setSelectedDish(null)
          }}
        />
      </div>
    </section>
  )
}

export default SignatureDishes
