import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRide } from '../context/RideContext'
import { 
  MapPin, 
  Car, 
  Clock, 
  DollarSign, 
  Users, 
  Star,
  Navigation,
  Phone,
  X,
  CheckCircle
} from 'lucide-react'
import MapPlaceholder from '../components/MapPlaceholder'

const RidePage: React.FC = () => {
  const { state, setPickup, setDestination, setRideType, calculatePrice, bookRide, cancelRide } = useRide()
  const [showMap, setShowMap] = useState(false)
  const [pickupInput, setPickupInput] = useState('')
  const [destinationInput, setDestinationInput] = useState('')
  const [selectedRideType, setSelectedRideType] = useState<'UberX' | 'UberXL' | 'UberBlack' | 'UberPool'>('UberX')

  const rideTypes = [
    {
      id: 'UberX',
      name: 'UberX',
      description: 'Affordable rides for 1-4 people',
      price: 1.0,
      icon: Car,
      color: 'bg-uber-green'
    },
    {
      id: 'UberXL',
      name: 'UberXL',
      description: 'Spacious rides for groups up to 6',
      price: 1.5,
      icon: Users,
      color: 'bg-primary-500'
    },
    {
      id: 'UberBlack',
      name: 'UberBlack',
      description: 'Premium rides with professional drivers',
      price: 2.5,
      icon: Star,
      color: 'bg-uber-black'
    },
    {
      id: 'UberPool',
      name: 'UberPool',
      description: 'Share rides and save money',
      price: 0.7,
      icon: Users,
      color: 'bg-purple-500'
    }
  ]

  // Simulated locations for demo
  const suggestedLocations = [
    { name: 'San Francisco Airport', lat: 37.6213, lng: -122.3790 },
    { name: 'Downtown San Francisco', lat: 37.7749, lng: -122.4194 },
    { name: 'Golden Gate Bridge', lat: 37.8199, lng: -122.4783 },
    { name: 'Fisherman\'s Wharf', lat: 37.8080, lng: -122.4177 }
  ]

  const handleLocationSelect = (location: any, type: 'pickup' | 'destination') => {
    const locationObj = {
      lat: location.lat,
      lng: location.lng,
      address: location.name
    }
    
    if (type === 'pickup') {
      setPickup(locationObj)
      setPickupInput(location.name)
    } else {
      setDestination(locationObj)
      setDestinationInput(location.name)
    }
  }

  const handleRideTypeSelect = (type: 'UberX' | 'UberXL' | 'UberBlack' | 'UberPool') => {
    setSelectedRideType(type)
    setRideType(type)
  }

  const handleCalculatePrice = () => {
    if (state.currentRide?.pickup && state.currentRide?.destination) {
      calculatePrice()
    }
  }

  useEffect(() => {
    if (state.currentRide?.pickup && state.currentRide?.destination) {
      handleCalculatePrice()
    }
  }, [state.currentRide?.pickup, state.currentRide?.destination])

  return (
    <div className="min-h-screen bg-uber-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Booking Form */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold text-uber-black mb-2">Book Your Ride</h1>
              <p className="text-gray-600">Choose your pickup and destination to get started</p>
            </motion.div>

            {/* Pickup Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card"
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-2 text-uber-green" />
                Pickup Location
              </label>
              <input
                type="text"
                placeholder="Enter pickup address"
                value={pickupInput}
                onChange={(e) => setPickupInput(e.target.value)}
                className="input-field"
              />
              <div className="mt-3 space-y-2">
                <p className="text-sm text-gray-600">Suggested locations:</p>
                {suggestedLocations.map((location) => (
                  <button
                    key={location.name}
                    onClick={() => handleLocationSelect(location, 'pickup')}
                    className="block w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {location.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Destination Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card"
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Navigation className="w-4 h-4 inline mr-2 text-primary-500" />
                Destination
              </label>
              <input
                type="text"
                placeholder="Enter destination address"
                value={destinationInput}
                onChange={(e) => setDestinationInput(e.target.value)}
                className="input-field"
              />
              <div className="mt-3 space-y-2">
                <p className="text-sm text-gray-600">Suggested locations:</p>
                {suggestedLocations.map((location) => (
                  <button
                    key={location.name}
                    onClick={() => handleLocationSelect(location, 'destination')}
                    className="block w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {location.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Ride Type Selection */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card"
            >
              <h3 className="text-lg font-semibold text-uber-black mb-4">Choose Ride Type</h3>
              <div className="space-y-3">
                {rideTypes.map((rideType) => (
                  <button
                    key={rideType.id}
                    onClick={() => handleRideTypeSelect(rideType.id as any)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedRideType === rideType.id
                        ? 'border-uber-green bg-uber-green/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full ${rideType.color} flex items-center justify-center`}>
                          <rideType.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-uber-black">{rideType.name}</div>
                          <div className="text-sm text-gray-600">{rideType.description}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Base price</div>
                        <div className="font-semibold text-uber-black">${rideType.price}x</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Price and Time Estimate */}
            {state.currentRide?.estimatedPrice && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card bg-gradient-to-r from-uber-green/10 to-primary-500/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-uber-black">Trip Summary</h3>
                  <CheckCircle className="w-6 h-6 text-uber-green" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Estimated Price:</span>
                    <span className="text-2xl font-bold text-uber-black">
                      ${state.currentRide.estimatedPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Estimated Time:</span>
                    <span className="font-semibold text-uber-black">
                      {state.currentRide.estimatedTime} min
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Book Ride Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button
                onClick={bookRide}
                disabled={!state.currentRide?.pickup || !state.currentRide?.destination || state.isBooking}
                className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.isBooking ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Finding Driver...
                  </div>
                ) : (
                  'Book Ride'
                )}
              </button>
            </motion.div>
          </div>

          {/* Right Panel - Map and Ride Status */}
          <div className="lg:col-span-2 space-y-6">
            {/* Enhanced Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}

            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Interactive Map</p>
                  <p className="text-gray-400 text-sm">Mapbox integration would go here</p>
                </div>
              </div>
              
              {/* Map Controls */}
              <div className="absolute top-4 right-4 space-y-2">
                <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Navigation className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </motion.div>

            {/* Ride Status */}
            <AnimatePresence>
              {state.currentRide && !state.isBooking && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="card"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-uber-black">Ride Details</h3>
                    <button
                      onClick={cancelRide}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-uber-green rounded-full"></div>
                      <div>
                        <p className="font-medium text-uber-black">Pickup</p>
                        <p className="text-sm text-gray-600">{state.currentRide.pickup?.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-uber-black">Destination</p>
                        <p className="text-sm text-gray-600">{state.currentRide.destination?.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Car className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-uber-black">Ride Type</p>
                        <p className="text-sm text-gray-600">{state.currentRide.rideType}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Driver Info */}
            <AnimatePresence>
              {state.driverInfo && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="card bg-gradient-to-r from-uber-green/10 to-primary-500/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-uber-black">Your Driver</h3>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{state.driverInfo.rating}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-uber-green rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {state.driverInfo.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-uber-black">{state.driverInfo.name}</p>
                        <p className="text-sm text-gray-600">{state.driverInfo.car}</p>
                        <p className="text-sm text-gray-600">Plate: {state.driverInfo.plate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">ETA: {state.driverInfo.eta} min</span>
                      </div>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-uber-green text-white rounded-lg hover:bg-uber-green/90 transition-colors">
                        <Phone className="w-4 h-4" />
                        <span>Call</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RidePage 