'use client'

import { useState } from 'react'
import { ChefHat, Star, Leaf, Flame, Snowflake, Wine } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('tasting')

  const menuCategories = [
    { id: 'tasting', name: 'Tasting Menu', icon: ChefHat },
    { id: 'molecular', name: 'Molecular Cocktails', icon: Flame },
    { id: 'seasonal', name: 'Seasonal Specials', icon: Leaf },
    { id: 'desserts', name: 'Dessert Journey', icon: Snowflake },
    { id: 'wine', name: 'Wine Pairings', icon: Wine }
  ]

  const tastingMenu = [
    {
      course: 1,
      name: "Amuse-Bouche Trilogy",
      description: "Spherified olive oil caviar, deconstructed gazpacho, and liquid nitrogen frozen herbs",
      ingredients: ["Olive Oil Spheres", "Tomato Essence", "Liquid Nitrogen", "Fresh Herbs"],
      allergens: ["Contains: None"],
      wine: "Champagne Dom Pérignon 2012"
    },
    {
      course: 2,
      name: "Ocean's Memory",
      description: "Raw scallop with sea foam, kelp powder, and crystallized sea salt",
      ingredients: ["Diver Scallops", "Sea Foam", "Kelp Powder", "Crystallized Salt"],
      allergens: ["Contains: Shellfish"],
      wine: "Sancerre Loire Valley 2021"
    },
    {
      course: 3,
      name: "Forest Floor Illusion",
      description: "Mushroom soil with truffle essence, edible moss, and pine-scented air",
      ingredients: ["Wild Mushrooms", "Black Truffle", "Edible Moss", "Pine Essence"],
      allergens: ["Contains: None"],
      wine: "Burgundian Pinot Noir 2019"
    },
    {
      course: 4,
      name: "Levitating Lobster",
      description: "Maine lobster suspended in aromatic vapor with citrus caviar",
      ingredients: ["Maine Lobster", "Citrus Caviar", "Aromatic Vapor", "Micro Greens"],
      allergens: ["Contains: Shellfish"],
      wine: "Chablis Premier Cru 2020"
    },
    {
      course: 5,
      name: "Time-Frozen Tuna",
      description: "Liquid nitrogen-frozen bluefin tuna with wasabi snow and soy glass",
      ingredients: ["Bluefin Tuna", "Wasabi Snow", "Soy Glass", "Liquid Nitrogen"],
      allergens: ["Contains: Fish, Soy"],
      wine: "Sake Junmai Daiginjo"
    },
    {
      course: 6,
      name: "Molecular Wagyu Symphony",
      description: "A5 Wagyu with spherified truffle essence and edible gold",
      ingredients: ["A5 Wagyu", "Truffle Spheres", "24k Gold", "Micro Vegetables"],
      allergens: ["Contains: None"],
      wine: "Barolo Brunate 2018"
    },
    {
      course: 7,
      name: "Garden of Eden",
      description: "Color-changing vegetables with edible soil and flower petals",
      ingredients: ["Heirloom Vegetables", "Edible Soil", "Flower Petals", "Herb Oil"],
      allergens: ["Contains: None"],
      wine: "Organic Biodynamic Riesling 2022"
    },
    {
      course: 8,
      name: "Phoenix Rising",
      description: "Duck breast that ignites tableside with cognac flames",
      ingredients: ["Duck Breast", "Cognac", "Phoenix Spices", "Flame Presentation"],
      allergens: ["Contains: Alcohol"],
      wine: "Châteauneuf-du-Pape 2017"
    },
    {
      course: 9,
      name: "Cheese Constellation",
      description: "Artisanal cheese selection with honey spheres and walnut dust",
      ingredients: ["Artisan Cheeses", "Honey Spheres", "Walnut Dust", "Grape Caviar"],
      allergens: ["Contains: Dairy, Nuts"],
      wine: "Port Vintage 2000"
    },
    {
      course: 10,
      name: "Pre-Dessert Palate",
      description: "Lemon verbena sorbet with effervescent bubbles",
      ingredients: ["Lemon Verbena", "Sorbet", "CO2 Bubbles", "Mint Crystals"],
      allergens: ["Contains: None"],
      wine: "Moscato d'Asti 2022"
    },
    {
      course: 11,
      name: "Gravity-Defying Chocolate",
      description: "Chocolate sphere that melts to reveal floating vanilla clouds",
      ingredients: ["Dark Chocolate", "Vanilla Clouds", "Berry Dust", "Edible Flowers"],
      allergens: ["Contains: Dairy"],
      wine: "Dessert Wine Sauternes 2018"
    },
    {
      course: 12,
      name: "Coffee Nebula",
      description: "Deconstructed coffee with sugar glass and cream foam",
      ingredients: ["Single Origin Coffee", "Sugar Glass", "Cream Foam", "Coffee Caviar"],
      allergens: ["Contains: Dairy"],
      wine: "Aged Rum Pairing"
    }
  ]

  const molecularCocktails = [
    {
      name: "Liquid Nitrogen Martini",
      description: "Classic martini frozen with liquid nitrogen, served with olive oil caviar",
      price: "$28",
      technique: "Liquid Nitrogen Freezing"
    },
    {
      name: "Spherified Mojito",
      description: "Mint and lime spheres that burst in your mouth with rum essence",
      price: "$24",
      technique: "Spherification"
    },
    {
      name: "Smoking Old Fashioned",
      description: "Whiskey cocktail served under a glass dome filled with aromatic smoke",
      price: "$32",
      technique: "Smoke Infusion"
    },
    {
      name: "Color-Changing Cosmopolitan",
      description: "Cocktail that changes color as you drink it with pH-sensitive ingredients",
      price: "$26",
      technique: "pH Color Change"
    }
  ]

  return (
    <div className="min-h-screen bg-midnight text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-gray-900 to-midnight"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-electric-gold rounded-full filter blur-3xl opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 mb-6">
            <ChefHat className="text-electric-gold" size={24} />
            <span className="text-electric-gold font-semibold tracking-wider">CULINARY ARTISTRY</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6">
            Our
            <span className="text-gradient-gold block">Menu</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Embark on a 12-course culinary journey that redefines the boundaries of taste, 
            texture, and visual artistry. Each dish is a masterpiece of molecular gastronomy.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {menuCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'glass-button shadow-glow-gold'
                      : 'glass-card hover:shadow-glow-gold'
                  }`}
                >
                  <IconComponent size={20} />
                  <span className="font-semibold">{category.name}</span>
                </button>
              )
            })}
          </div>

          {/* Tasting Menu */}
          {activeCategory === 'tasting' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-white mb-4">
                  12-Course Tasting Menu
                </h2>
                <p className="text-2xl text-electric-gold font-bold">$295 per person</p>
                <p className="text-lg text-gray-300 mt-2">Wine pairing available for additional $150</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {tastingMenu.map((dish, index) => (
                  <div key={index} className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-electric-gold rounded-full flex items-center justify-center text-midnight font-bold text-lg">
                          {dish.course}
                        </div>
                        <div>
                          <h3 className="text-xl font-serif font-bold text-white">{dish.name}</h3>
                          <div className="flex items-center space-x-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} className="text-electric-gold fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4">{dish.description}</p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-electric-gold mb-2">Key Ingredients:</h4>
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

                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">{dish.allergens[0]}</span>
                        <span className="text-neon-coral font-semibold">{dish.wine}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Molecular Cocktails */}
          {activeCategory === 'molecular' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-white mb-4">
                  Molecular Cocktail Experience
                </h2>
                <p className="text-lg text-gray-300">
                  Innovative cocktails that challenge perception and delight the senses
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {molecularCocktails.map((cocktail, index) => (
                  <div key={index} className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-serif font-bold text-white">{cocktail.name}</h3>
                      <span className="text-2xl font-bold text-electric-gold">{cocktail.price}</span>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-4">{cocktail.description}</p>
                    
                    <div className="flex items-center space-x-2">
                      <Flame size={16} className="text-neon-coral" />
                      <span className="text-sm text-neon-coral font-semibold">{cocktail.technique}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other categories would be implemented similarly */}
          {activeCategory !== 'tasting' && activeCategory !== 'molecular' && (
            <div className="text-center py-20">
              <div className="glass-card p-12 max-w-2xl mx-auto">
                <h3 className="text-3xl font-serif font-bold text-white mb-4">Coming Soon</h3>
                <p className="text-gray-300 leading-relaxed">
                  We're crafting something extraordinary for this section. 
                  Stay tuned for our latest culinary innovations.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Chef's Note */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 text-center">
            <div className="text-6xl text-electric-gold mb-4 font-script">"</div>
            <p className="text-xl text-gray-300 italic leading-relaxed mb-6">
              Our menu is not just a collection of dishes—it's a narrative of innovation, 
              tradition, and the relentless pursuit of culinary perfection. Each course 
              tells a story, each flavor creates a memory, and each meal becomes an 
              experience that transcends the ordinary.
            </p>
            <div className="text-electric-gold font-semibold text-lg">
              — Chef Marcus Aurelius, Executive Chef
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MenuPage
