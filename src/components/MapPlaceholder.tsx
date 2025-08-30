import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Navigation, ZoomIn, ZoomOut, Crosshair } from 'lucide-react'

interface MapPlaceholderProps {
  className?: string
  onLocationSelect?: (lat: number, lng: number) => void
}

const MapPlaceholder: React.FC<MapPlaceholderProps> = ({ 
  className = '', 
  onLocationSelect 
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [zoom, setZoom] = useState(1)

  const handleLocationClick = (lat: number, lng: number) => {
    if (onLocationSelect) {
      setIsLoading(true)
      setTimeout(() => {
        onLocationSelect(lat, lng)
        setIsLoading(false)
      }, 1000)
    }
  }

  const demoLocations = [
    { name: 'Airport', lat: 37.6213, lng: -122.3790, color: 'bg-blue-500' },
    { name: 'Downtown', lat: 37.7749, lng: -122.4194, color: 'bg-green-500' },
    { name: 'Bridge', lat: 37.8199, lng: -122.4783, color: 'bg-purple-500' },
    { name: 'Wharf', lat: 37.8080, lng: -122.4177, color: 'bg-orange-500' }
  ]

  return (
    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 ${className}`}>
      {/* Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-60" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Demo Locations */}
      <div className="relative z-10 p-6">
        <div className="text-center mb-6">
          <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
          <p className="text-gray-500">Click on locations to select them</p>
        </div>

        {/* Location Pins */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {demoLocations.map((location, index) => (
            <motion.button
              key={location.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleLocationClick(location.lat, location.lng)}
              className="group relative"
            >
              <div className={`w-4 h-4 ${location.color} rounded-full mx-auto mb-2 animate-pulse`} />
              <div className="text-center">
                <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                  {location.name}
                </div>
                <div className="text-xs text-gray-500">
                  {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Map Controls */}
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
            className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={() => setZoom(Math.min(2, zoom + 0.1))}
            className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={() => setZoom(1)}
            className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            title="Reset Zoom"
          >
            <Crosshair className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Zoom Level Display */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-500">
            Zoom: {(zoom * 100).toFixed(0)}%
          </span>
        </div>
      </div>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 flex items-center justify-center"
          >
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 border-2 border-uber-green border-t-transparent rounded-full animate-spin" />
                <span className="text-sm font-medium text-gray-700">Selecting location...</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Map Controls Overlay */}
      <div className="absolute top-4 right-4 space-y-2">
        <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
          <Navigation className="w-5 h-5 text-gray-600" />
        </button>
        <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
          <MapPin className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  )
}

export default MapPlaceholder 