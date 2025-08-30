import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MapPin, Menu, User } from 'lucide-react'

const Header: React.FC = () => {
  const location = useLocation()

  return (
    <header className="bg-uber-white shadow-uber sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-uber-black rounded-full flex items-center justify-center">
              <span className="text-uber-white font-bold text-lg">U</span>
            </div>
            <span className="text-xl font-bold text-uber-black">Uber Replica</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/'
                  ? 'text-uber-black'
                  : 'text-gray-600 hover:text-uber-black'
              }`}
            >
              Home
            </Link>
            <Link
              to="/ride"
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/ride'
                  ? 'text-uber-black'
                  : 'text-gray-600 hover:text-uber-black'
              }`}
            >
              Book a Ride
            </Link>
            <a
              href="#about"
              className="text-sm font-medium text-gray-600 hover:text-uber-black transition-colors duration-200"
            >
              About
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-uber-black transition-colors duration-200">
              <MapPin className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-uber-black transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>
            <button className="md:hidden p-2 text-gray-600 hover:text-uber-black transition-colors duration-200">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 