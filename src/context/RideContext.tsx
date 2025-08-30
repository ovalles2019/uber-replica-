import React, { createContext, useContext, useReducer, ReactNode } from 'react'

export interface Location {
  lat: number
  lng: number
  address: string
}

export interface RideRequest {
  pickup: Location | null
  destination: Location | null
  rideType: 'UberX' | 'UberXL' | 'UberBlack' | 'UberPool'
  estimatedPrice: number
  estimatedTime: number
}

interface RideState {
  currentRide: RideRequest | null
  isBooking: boolean
  isRideActive: boolean
  driverInfo: {
    name: string
    rating: number
    car: string
    plate: string
    eta: number
  } | null
}

type RideAction =
  | { type: 'SET_PICKUP'; payload: Location }
  | { type: 'SET_DESTINATION'; payload: Location }
  | { type: 'SET_RIDE_TYPE'; payload: RideRequest['rideType'] }
  | { type: 'CALCULATE_PRICE'; payload: { price: number; time: number } }
  | { type: 'START_BOOKING' }
  | { type: 'BOOKING_SUCCESS'; payload: RideRequest }
  | { type: 'START_RIDE' }
  | { type: 'COMPLETE_RIDE' }
  | { type: 'CANCEL_RIDE' }
  | { type: 'SET_DRIVER_INFO'; payload: RideState['driverInfo'] }

const initialState: RideState = {
  currentRide: null,
  isBooking: false,
  isRideActive: false,
  driverInfo: null,
}

function rideReducer(state: RideState, action: RideAction): RideState {
  switch (action.type) {
    case 'SET_PICKUP':
      return {
        ...state,
        currentRide: {
          ...state.currentRide,
          pickup: action.payload,
        } as RideRequest,
      }
    case 'SET_DESTINATION':
      return {
        ...state,
        currentRide: {
          ...state.currentRide,
          destination: action.payload,
        } as RideRequest,
      }
    case 'SET_RIDE_TYPE':
      return {
        ...state,
        currentRide: {
          ...state.currentRide,
          rideType: action.payload,
        } as RideRequest,
      }
    case 'CALCULATE_PRICE':
      return {
        ...state,
        currentRide: {
          ...state.currentRide,
          estimatedPrice: action.payload.price,
          estimatedTime: action.payload.time,
        } as RideRequest,
      }
    case 'START_BOOKING':
      return { ...state, isBooking: true }
    case 'BOOKING_SUCCESS':
      return {
        ...state,
        currentRide: action.payload,
        isBooking: false,
      }
    case 'START_RIDE':
      return { ...state, isRideActive: true }
    case 'COMPLETE_RIDE':
      return {
        ...state,
        isRideActive: false,
        currentRide: null,
        driverInfo: null,
      }
    case 'CANCEL_RIDE':
      return {
        ...state,
        isBooking: false,
        currentRide: null,
        driverInfo: null,
      }
    case 'SET_DRIVER_INFO':
      return { ...state, driverInfo: action.payload }
    default:
      return state
  }
}

interface RideContextType {
  state: RideState
  dispatch: React.Dispatch<RideAction>
  setPickup: (location: Location) => void
  setDestination: (location: Location) => void
  setRideType: (type: RideRequest['rideType']) => void
  calculatePrice: () => void
  bookRide: () => void
  cancelRide: () => void
}

const RideContext = createContext<RideContextType | undefined>(undefined)

export function RideProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(rideReducer, initialState)

  const setPickup = (location: Location) => {
    dispatch({ type: 'SET_PICKUP', payload: location })
  }

  const setDestination = (location: Location) => {
    dispatch({ type: 'SET_DESTINATION', payload: location })
  }

  const setRideType = (type: RideRequest['rideType']) => {
    dispatch({ type: 'SET_RIDE_TYPE', payload: type })
  }

  const calculatePrice = () => {
    if (state.currentRide?.pickup && state.currentRide?.destination) {
      // Simulate price calculation based on distance
      const distance = Math.sqrt(
        Math.pow(state.currentRide.destination.lat - state.currentRide.pickup.lat, 2) +
        Math.pow(state.currentRide.destination.lng - state.currentRide.pickup.lng, 2)
      ) * 111 // Rough conversion to km
      
      const basePrice = 2.5
      const pricePerKm = 1.5
      const estimatedPrice = basePrice + (distance * pricePerKm)
      const estimatedTime = Math.round(distance * 2) // Rough estimate: 2 min per km
      
      dispatch({ type: 'CALCULATE_PRICE', payload: { price: estimatedPrice, time: estimatedTime } })
    }
  }

  const bookRide = () => {
    if (state.currentRide?.pickup && state.currentRide?.destination) {
      dispatch({ type: 'START_BOOKING' })
      
      // Simulate booking process
      setTimeout(() => {
        dispatch({ type: 'BOOKING_SUCCESS', payload: state.currentRide! })
        
        // Simulate driver assignment
        setTimeout(() => {
          dispatch({
            type: 'SET_DRIVER_INFO',
            payload: {
              name: 'John Smith',
              rating: 4.8,
              car: 'Toyota Camry 2020',
              plate: 'ABC-123',
              eta: 3,
            },
          })
        }, 2000)
      }, 1500)
    }
  }

  const cancelRide = () => {
    dispatch({ type: 'CANCEL_RIDE' })
  }

  const value: RideContextType = {
    state,
    dispatch,
    setPickup,
    setDestination,
    setRideType,
    calculatePrice,
    bookRide,
    cancelRide,
  }

  return <RideContext.Provider value={value}>{children}</RideContext.Provider>
}

export function useRide() {
  const context = useContext(RideContext)
  if (context === undefined) {
    throw new Error('useRide must be used within a RideProvider')
  }
  return context
} 