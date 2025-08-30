import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react'

export type NotificationType = 'success' | 'error' | 'info' | 'warning'

interface NotificationProps {
  type: NotificationType
  title: string
  message?: string
  isVisible: boolean
  onClose: () => void
  duration?: number
}

const Notification: React.FC<NotificationProps> = ({
  type,
  title,
  message,
  isVisible,
  onClose,
  duration = 5000
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />
      case 'info':
        return <Info className="w-5 h-5 text-blue-500" />
      default:
        return <Info className="w-5 h-5 text-blue-500" />
    }
  }

  const getColors = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800'
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800'
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800'
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800'
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800'
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`fixed top-4 right-4 z-50 max-w-sm w-full p-4 rounded-lg border shadow-uber ${getColors()}`}
        >
          <div className="flex items-start space-x-3">
            {getIcon()}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium">{title}</h4>
              {message && (
                <p className="mt-1 text-sm opacity-90">{message}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Notification 