'use client'

import { useState, useEffect } from 'react'
import { Users, Clock, Calendar, MapPin, Wifi, Star } from 'lucide-react'

interface Table {
  id: number
  seats: number
  position: { x: number; y: number }
  status: 'available' | 'occupied' | 'reserved'
  type: 'standard' | 'premium' | 'vip'
  features: string[]
  nextAvailable?: string
}

const TableAvailability = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [selectedTime, setSelectedTime] = useState('19:00')
  const [selectedTable, setSelectedTable] = useState<Table | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const [tables, setTables] = useState<Table[]>([
    // VIP Section
    { id: 1, seats: 2, position: { x: 20, y: 20 }, status: 'available', type: 'vip', features: ['Window View', 'Private Service', 'Wine Cellar Access'] },
    { id: 2, seats: 4, position: { x: 60, y: 25 }, status: 'occupied', type: 'vip', features: ['Chef\'s View', 'Premium Location'], nextAvailable: '21:30' },
    { id: 3, seats: 6, position: { x: 20, y: 60 }, status: 'available', type: 'vip', features: ['Private Booth', 'Sommelier Service'] },
    
    // Premium Section
    { id: 4, seats: 2, position: { x: 45, y: 45 }, status: 'available', type: 'premium', features: ['Garden View', 'Quiet Zone'] },
    { id: 5, seats: 4, position: { x: 70, y: 50 }, status: 'reserved', type: 'premium', features: ['Central Location'], nextAvailable: '20:00' },
    { id: 6, seats: 2, position: { x: 35, y: 70 }, status: 'available', type: 'premium', features: ['Intimate Setting'] },
    
    // Standard Section
    { id: 7, seats: 2, position: { x: 15, y: 40 }, status: 'available', type: 'standard', features: ['Cozy Atmosphere'] },
    { id: 8, seats: 4, position: { x: 55, y: 70 }, status: 'occupied', type: 'standard', features: ['Family Friendly'], nextAvailable: '21:00' },
    { id: 9, seats: 2, position: { x: 75, y: 30 }, status: 'available', type: 'standard', features: ['Quick Service'] },
    { id: 10, seats: 6, position: { x: 40, y: 15 }, status: 'available', type: 'standard', features: ['Group Dining'] },
  ])

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTables(prev => prev.map(table => {
        // Randomly change some table statuses
        if (Math.random() < 0.1) {
          const statuses: ('available' | 'occupied' | 'reserved')[] = ['available', 'occupied', 'reserved']
          const newStatus = statuses[Math.floor(Math.random() * statuses.length)]
          return { ...table, status: newStatus }
        }
        return table
      }))
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 500)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const getTableColor = (table: Table) => {
    switch (table.status) {
      case 'available':
        return table.type === 'vip' ? 'bg-electric-gold' : table.type === 'premium' ? 'bg-neon-coral' : 'bg-green-500'
      case 'occupied':
        return 'bg-red-500'
      case 'reserved':
        return 'bg-yellow-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getTableSize = (seats: number) => {
    switch (seats) {
      case 2: return 'w-8 h-8'
      case 4: return 'w-12 h-12'
      case 6: return 'w-16 h-16'
      default: return 'w-10 h-10'
    }
  }

  const availableTables = tables.filter(t => t.status === 'available')
  const occupiedTables = tables.filter(t => t.status === 'occupied')
  const reservedTables = tables.filter(t => t.status === 'reserved')

  return (
    <div className="glass-card p-8 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-serif font-bold text-white mb-2">Live Table Availability</h3>
          <p className="text-gray-300">Real-time restaurant floor plan</p>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-gray-300">Live Updates</span>
        </div>
      </div>

      {/* Date and Time Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-white font-semibold mb-2 flex items-center space-x-2">
            <Calendar size={16} className="text-electric-gold" />
            <span>Date</span>
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-4 py-2 bg-glass-white border border-glass-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-gold"
          />
        </div>
        <div>
          <label className="block text-white font-semibold mb-2 flex items-center space-x-2">
            <Clock size={16} className="text-electric-gold" />
            <span>Time</span>
          </label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full px-4 py-2 bg-glass-white border border-glass-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-gold"
          >
            {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map(time => (
              <option key={time} value={time} className="bg-midnight">{time}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Restaurant Floor Plan */}
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 mb-6 h-96 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-gray-700"></div>
            ))}
          </div>
        </div>

        {/* Restaurant Elements */}
        <div className="absolute top-4 left-4 right-4 h-8 bg-gradient-to-r from-electric-gold/20 to-neon-coral/20 rounded-lg flex items-center justify-center">
          <span className="text-xs text-white font-semibold">Kitchen & Chef&apos;s Counter</span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 h-6 bg-gradient-to-r from-ice-blue/20 to-electric-gold/20 rounded-lg flex items-center justify-center">
          <span className="text-xs text-white font-semibold">Bar & Lounge Area</span>
        </div>

        {/* Tables */}
        {tables.map((table) => (
          <div
            key={table.id}
            className={`absolute rounded-full cursor-pointer transition-all duration-500 ${getTableSize(table.seats)} ${getTableColor(table)} ${
              isAnimating ? 'animate-pulse' : ''
            } ${selectedTable?.id === table.id ? 'ring-4 ring-white scale-110' : 'hover:scale-105'}`}
            style={{
              left: `${table.position.x}%`,
              top: `${table.position.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            onClick={() => setSelectedTable(table)}
          >
            <div className="w-full h-full flex items-center justify-center">
              <Users size={table.seats === 2 ? 12 : table.seats === 4 ? 16 : 20} className="text-white" />
            </div>
            
            {/* Table Number */}
            <div className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {table.id}
            </div>
          </div>
        ))}

        {/* Legend */}
        <div className="absolute top-4 right-4 space-y-2">
          <div className="flex items-center space-x-2 text-xs">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-white">Available</span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-white">Occupied</span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-white">Reserved</span>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-green-500 mb-1">{availableTables.length}</div>
          <div className="text-sm text-gray-300">Available</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-red-500 mb-1">{occupiedTables.length}</div>
          <div className="text-sm text-gray-300">Occupied</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-yellow-500 mb-1">{reservedTables.length}</div>
          <div className="text-sm text-gray-300">Reserved</div>
        </div>
      </div>

      {/* Selected Table Details */}
      {selectedTable && (
        <div className="glass-card p-6 border border-electric-gold/30">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-white">Table {selectedTable.id}</h4>
            <div className="flex items-center space-x-2">
              <Users size={16} className="text-electric-gold" />
              <span className="text-white">{selectedTable.seats} seats</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Status:</span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                selectedTable.status === 'available' ? 'bg-green-500/20 text-green-400' :
                selectedTable.status === 'occupied' ? 'bg-red-500/20 text-red-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {selectedTable.status.charAt(0).toUpperCase() + selectedTable.status.slice(1)}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-300">Type:</span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                selectedTable.type === 'vip' ? 'bg-electric-gold/20 text-electric-gold' :
                selectedTable.type === 'premium' ? 'bg-neon-coral/20 text-neon-coral' :
                'bg-ice-blue/20 text-ice-blue'
              }`}>
                {selectedTable.type.toUpperCase()}
              </span>
            </div>

            {selectedTable.nextAvailable && (
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Next Available:</span>
                <span className="text-electric-gold font-semibold">{selectedTable.nextAvailable}</span>
              </div>
            )}

            <div>
              <span className="text-gray-300 block mb-2">Features:</span>
              <div className="flex flex-wrap gap-2">
                {selectedTable.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {selectedTable.status === 'available' && (
              <button className="w-full bg-gradient-to-r from-electric-gold to-neon-coral py-3 rounded-lg text-black font-bold hover:shadow-glow-gold transition-all mt-4">
                Reserve This Table
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default TableAvailability
