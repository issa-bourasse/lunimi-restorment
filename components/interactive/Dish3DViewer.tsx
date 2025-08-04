'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { RotateCcw, ZoomIn, ZoomOut, Eye, Sparkles } from 'lucide-react'

interface Dish3DViewerProps {
  dish: {
    id: number
    name: string
    image: string
    ingredients: string[]
    description: string
    price: string
  }
  isActive: boolean
  onClose: () => void
}

const Dish3DViewer = ({ dish, isActive, onClose }: Dish3DViewerProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showIngredients, setShowIngredients] = useState(false)
  const [assemblyStep, setAssemblyStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const lastMouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (isActive) {
      setIsAnimating(true)
      const timer = setTimeout(() => setIsAnimating(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [isActive])

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    lastMouse.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    
    const deltaX = e.clientX - lastMouse.current.x
    const deltaY = e.clientY - lastMouse.current.y
    
    setRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }))
    
    lastMouse.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const resetView = () => {
    setRotation({ x: 0, y: 0 })
    setZoom(1)
  }

  const startAssemblyAnimation = () => {
    setAssemblyStep(0)
    const interval = setInterval(() => {
      setAssemblyStep(prev => {
        if (prev >= dish.ingredients.length - 1) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 800)
  }

  if (!isActive) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="glass-card max-w-6xl w-full max-h-[90vh] overflow-hidden rounded-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white">{dish.name}</h3>
            <p className="text-electric-gold font-bold text-xl">{dish.price}</p>
          </div>
          <button
            onClick={onClose}
            className="glass-button p-3 hover:bg-red-500/20 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* 3D Viewer */}
          <div className="space-y-4">
            <div
              ref={containerRef}
              className="relative h-96 bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* 3D Dish Container */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${zoom})`,
                  transition: isAnimating ? 'transform 1s ease-out' : 'none'
                }}
              >
                {/* Main Dish Image */}
                <div className="relative">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    width={320}
                    height={320}
                    className="w-80 h-80 object-cover rounded-full shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.5))',
                      animation: isAnimating ? 'float 2s ease-in-out infinite' : 'none'
                    }}
                  />
                  
                  {/* Floating Ingredient Particles */}
                  {showIngredients && dish.ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className="absolute text-xs bg-electric-gold text-black px-2 py-1 rounded-full font-semibold"
                      style={{
                        top: `${20 + (index * 15)}%`,
                        left: `${10 + (index * 20)}%`,
                        transform: `rotate(${index * 45}deg)`,
                        animation: `float 3s ease-in-out infinite ${index * 0.5}s`,
                        opacity: assemblyStep >= index ? 1 : 0.3
                      }}
                    >
                      {ingredient}
                    </div>
                  ))}

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-gold/20 to-neon-coral/20 animate-pulse"></div>
                </div>
              </div>

              {/* Assembly Steps Indicator */}
              {showIngredients && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-card p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles size={16} className="text-electric-gold" />
                      <span className="text-sm font-semibold text-white">Assembly Step {assemblyStep + 1}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-electric-gold to-neon-coral h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((assemblyStep + 1) / dish.ingredients.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setZoom(prev => Math.max(0.5, prev - 0.2))}
                className="glass-button p-3 hover:shadow-glow-gold transition-all"
              >
                <ZoomOut size={20} />
              </button>
              
              <button
                onClick={() => setZoom(prev => Math.min(2, prev + 0.2))}
                className="glass-button p-3 hover:shadow-glow-gold transition-all"
              >
                <ZoomIn size={20} />
              </button>
              
              <button
                onClick={resetView}
                className="glass-button p-3 hover:shadow-glow-gold transition-all"
              >
                <RotateCcw size={20} />
              </button>
              
              <button
                onClick={() => setShowIngredients(!showIngredients)}
                className={`glass-button p-3 transition-all ${showIngredients ? 'shadow-glow-gold' : ''}`}
              >
                <Eye size={20} />
              </button>
            </div>
          </div>

          {/* Details Panel */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-electric-gold mb-3">Description</h4>
              <p className="text-gray-300 leading-relaxed">{dish.description}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-electric-gold mb-3">Ingredients Breakdown</h4>
              <div className="space-y-2">
                {dish.ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-500 ${
                      showIngredients && assemblyStep >= index
                        ? 'bg-electric-gold/20 border border-electric-gold/30'
                        : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      showIngredients && assemblyStep >= index ? 'bg-electric-gold' : 'bg-gray-500'
                    }`}></div>
                    <span className="text-white font-medium">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={startAssemblyAnimation}
                className="w-full glass-button py-3 text-white font-semibold hover:shadow-glow-gold transition-all"
              >
                <Sparkles size={20} className="inline mr-2" />
                Watch Assembly Animation
              </button>
              
              <button className="w-full bg-gradient-to-r from-electric-gold to-neon-coral py-3 rounded-lg text-black font-bold hover:shadow-glow-gold transition-all">
                Add to Tasting Menu
              </button>
            </div>

            {/* Nutritional Info */}
            <div className="glass-card p-4">
              <h4 className="text-lg font-semibold text-electric-gold mb-3">Experience Details</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Preparation:</span>
                  <span className="text-white ml-2">45 min</span>
                </div>
                <div>
                  <span className="text-gray-400">Technique:</span>
                  <span className="text-white ml-2">Molecular</span>
                </div>
                <div>
                  <span className="text-gray-400">Temperature:</span>
                  <span className="text-white ml-2">Warm</span>
                </div>
                <div>
                  <span className="text-gray-400">Pairing:</span>
                  <span className="text-white ml-2">Wine Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dish3DViewer
