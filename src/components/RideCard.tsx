import React from 'react'
import { motion } from 'framer-motion'
import { Car, Clock, DollarSign, MapPin, Star } from 'lucide-react'

interface RideCardProps {
  rideType: string
  description: string
  price: number
  time: number
  icon: React.ComponentType<any>
  color: string
  isSelected?: boolean
  onClick?: () => void
  features?: string[]
}

const RideCard: React.FC<RideCardProps> = ({
  rideType,
  description,
  price,
  time,
  icon: Icon,
  color,
  isSelected = false,
  onClick,
  features = []
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative cursor-pointer transition-all duration-200 ${
        isSelected ? 'ring-2 ring-uber-green ring-offset-2' : ''
      }`}
      onClick={onClick}
    >
      <div className={`card ${isSelected ? 'bg-uber-green/5 border-uber-green' : 'hover:shadow-uber-hover'}`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-uber-black">{rideType}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-uber-black">${price}</div>
            <div className="text-sm text-gray-500">base price</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Est. time</span>
            </div>
            <span className="font-medium text-uber-black">{time} min</span>
          </div>

          {features.length > 0 && (
            <div className="pt-3 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {isSelected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-uber-green rounded-full flex items-center justify-center"
          >
            <div className="w-3 h-3 bg-white rounded-full" />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default RideCard 