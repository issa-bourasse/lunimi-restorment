'use client'

import { useState, useEffect } from 'react'
import { Star, Trophy, Gift, Crown, Flame, Sparkles, Award, Target } from 'lucide-react'

interface Achievement {
  id: string
  name: string
  description: string
  icon: any
  unlocked: boolean
  progress: number
  maxProgress: number
  reward: string
}

interface LoyaltyData {
  points: number
  level: number
  nextLevelPoints: number
  totalVisits: number
  favoriteDishe: string
  achievements: Achievement[]
}

const LoyaltySystem = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [loyaltyData, setLoyaltyData] = useState<LoyaltyData>({
    points: 2450,
    level: 3,
    nextLevelPoints: 3000,
    totalVisits: 12,
    favoriteDishe: 'Molecular Wagyu Symphony',
    achievements: [
      {
        id: 'first-visit',
        name: 'First Taste',
        description: 'Complete your first dining experience',
        icon: Star,
        unlocked: true,
        progress: 1,
        maxProgress: 1,
        reward: '50 Points'
      },
      {
        id: 'tasting-master',
        name: 'Tasting Master',
        description: 'Complete 5 full tasting menus',
        icon: Crown,
        unlocked: true,
        progress: 5,
        maxProgress: 5,
        reward: 'Free Dessert'
      },
      {
        id: 'molecular-explorer',
        name: 'Molecular Explorer',
        description: 'Try 10 different molecular dishes',
        icon: Sparkles,
        unlocked: false,
        progress: 7,
        maxProgress: 10,
        reward: 'Chef\'s Special'
      },
      {
        id: 'wine-connoisseur',
        name: 'Wine Connoisseur',
        description: 'Complete 3 wine pairing experiences',
        icon: Trophy,
        unlocked: false,
        progress: 2,
        maxProgress: 3,
        reward: 'Private Sommelier Session'
      },
      {
        id: 'social-butterfly',
        name: 'Social Butterfly',
        description: 'Share 5 dining experiences on social media',
        icon: Target,
        unlocked: false,
        progress: 3,
        maxProgress: 5,
        reward: '200 Points'
      },
      {
        id: 'platinum-member',
        name: 'Platinum Member',
        description: 'Reach 5000 loyalty points',
        icon: Award,
        unlocked: false,
        progress: 2450,
        maxProgress: 5000,
        reward: 'VIP Chef\'s Table Experience'
      }
    ]
  })

  const [showPointsAnimation, setShowPointsAnimation] = useState(false)

  const levelNames = ['Novice', 'Enthusiast', 'Connoisseur', 'Expert', 'Master Chef']
  const levelColors = ['#6B7280', '#F59E0B', '#EF4444', '#8B5CF6', '#F59E0B']

  const progressPercentage = (loyaltyData.points / loyaltyData.nextLevelPoints) * 100

  const simulatePointsEarned = (points: number) => {
    setShowPointsAnimation(true)
    setLoyaltyData(prev => ({
      ...prev,
      points: prev.points + points
    }))
    setTimeout(() => setShowPointsAnimation(false), 2000)
  }

  const redeemReward = (pointsCost: number, rewardName: string) => {
    if (loyaltyData.points >= pointsCost) {
      setLoyaltyData(prev => ({
        ...prev,
        points: prev.points - pointsCost
      }))
      alert(`Successfully redeemed: ${rewardName}!`)
    }
  }

  const rewards = [
    { name: 'Free Appetizer', points: 500, icon: '🥗', available: true },
    { name: 'Complimentary Dessert', points: 750, icon: '🍰', available: true },
    { name: 'Wine Pairing Upgrade', points: 1000, icon: '🍷', available: true },
    { name: 'Chef\'s Special Dish', points: 1500, icon: '👨‍🍳', available: true },
    { name: 'Private Dining Experience', points: 3000, icon: '🏆', available: loyaltyData.points >= 3000 },
    { name: 'Cooking Class with Chef', points: 5000, icon: '🎓', available: loyaltyData.points >= 5000 }
  ]

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="glass-button p-4 rounded-full shadow-glow-gold hover:scale-110 transition-all duration-300 group"
        >
          <div className="relative">
            <Crown size={24} className="text-electric-gold" />
            <div className="absolute -top-2 -right-2 bg-neon-coral text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
              {loyaltyData.level}
            </div>
          </div>
        </button>
        
        {showPointsAnimation && (
          <div className="absolute bottom-16 right-0 animate-fade-in-up">
            <div className="glass-card px-4 py-2 text-electric-gold font-bold">
              +50 Points!
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Crown size={32} className="text-electric-gold" />
              <div className="absolute -top-1 -right-1 bg-neon-coral text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {loyaltyData.level}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-white">LUMINA Loyalty</h2>
              <p className="text-electric-gold font-semibold">{levelNames[loyaltyData.level - 1]} Member</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="glass-button p-3 hover:bg-red-500/20 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10">
          {[
            { id: 'overview', name: 'Overview', icon: Star },
            { id: 'achievements', name: 'Achievements', icon: Trophy },
            { id: 'rewards', name: 'Rewards', icon: Gift }
          ].map((tab) => {
            const IconComponent = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-4 transition-all ${
                  activeTab === tab.id
                    ? 'bg-electric-gold/20 text-electric-gold border-b-2 border-electric-gold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <IconComponent size={20} />
                <span className="font-semibold">{tab.name}</span>
              </button>
            )
          })}
        </div>

        <div className="p-6 max-h-96 overflow-y-auto">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Points & Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-6 text-center">
                  <div className="text-4xl font-bold text-electric-gold mb-2">
                    {loyaltyData.points.toLocaleString()}
                  </div>
                  <div className="text-gray-300">Loyalty Points</div>
                  <button
                    onClick={() => simulatePointsEarned(50)}
                    className="mt-3 text-sm glass-button px-4 py-2 hover:shadow-glow-gold transition-all"
                  >
                    Simulate +50 Points
                  </button>
                </div>

                <div className="glass-card p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-semibold">Level Progress</span>
                    <span className="text-electric-gold font-bold">Level {loyaltyData.level}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                    <div
                      className="bg-gradient-to-r from-electric-gold to-neon-coral h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-400">
                    {loyaltyData.nextLevelPoints - loyaltyData.points} points to next level
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-neon-coral mb-1">{loyaltyData.totalVisits}</div>
                  <div className="text-sm text-gray-300">Total Visits</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-ice-blue mb-1">
                    {loyaltyData.achievements.filter(a => a.unlocked).length}
                  </div>
                  <div className="text-sm text-gray-300">Achievements</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-electric-gold mb-1">
                    ${(loyaltyData.points * 0.01).toFixed(0)}
                  </div>
                  <div className="text-sm text-gray-300">Rewards Value</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-gradient-coral mb-1">A+</div>
                  <div className="text-sm text-gray-300">Taste Score</div>
                </div>
              </div>

              {/* Favorite Dish */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-electric-gold mb-3">Your Culinary Profile</h3>
                <div className="flex items-center space-x-4">
                  <Flame size={24} className="text-neon-coral" />
                  <div>
                    <div className="text-white font-semibold">Favorite Dish</div>
                    <div className="text-gray-300">{loyaltyData.favoriteDishe}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="space-y-4">
              {loyaltyData.achievements.map((achievement) => {
                const IconComponent = achievement.icon
                const progressPercentage = (achievement.progress / achievement.maxProgress) * 100
                
                return (
                  <div
                    key={achievement.id}
                    className={`glass-card p-6 transition-all duration-300 ${
                      achievement.unlocked ? 'ring-2 ring-electric-gold shadow-glow-gold' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full ${
                        achievement.unlocked ? 'bg-electric-gold/20' : 'bg-gray-700'
                      }`}>
                        <IconComponent
                          size={24}
                          className={achievement.unlocked ? 'text-electric-gold' : 'text-gray-400'}
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className={`font-semibold ${
                            achievement.unlocked ? 'text-electric-gold' : 'text-white'
                          }`}>
                            {achievement.name}
                          </h4>
                          {achievement.unlocked && (
                            <div className="flex items-center space-x-1 text-electric-gold">
                              <Trophy size={16} />
                              <span className="text-sm font-bold">UNLOCKED</span>
                            </div>
                          )}
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-3">{achievement.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex-1 mr-4">
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full transition-all duration-500 ${
                                  achievement.unlocked
                                    ? 'bg-gradient-to-r from-electric-gold to-neon-coral'
                                    : 'bg-gray-600'
                                }`}
                                style={{ width: `${progressPercentage}%` }}
                              ></div>
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                              {achievement.progress}/{achievement.maxProgress}
                            </div>
                          </div>
                          
                          <div className="text-sm font-semibold text-neon-coral">
                            {achievement.reward}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Rewards Tab */}
          {activeTab === 'rewards' && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Redeem Your Points</h3>
                <p className="text-gray-300">Transform your loyalty into unforgettable experiences</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rewards.map((reward, index) => (
                  <div
                    key={index}
                    className={`glass-card p-6 transition-all duration-300 ${
                      reward.available ? 'hover:scale-105 cursor-pointer' : 'opacity-50'
                    }`}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-3xl">{reward.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{reward.name}</h4>
                        <div className="text-electric-gold font-bold">{reward.points} Points</div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => reward.available && redeemReward(reward.points, reward.name)}
                      disabled={!reward.available}
                      className={`w-full py-3 rounded-lg font-semibold transition-all ${
                        reward.available
                          ? 'bg-gradient-to-r from-electric-gold to-neon-coral text-black hover:shadow-glow-gold'
                          : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {reward.available ? 'Redeem Now' : 'Insufficient Points'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoyaltySystem
