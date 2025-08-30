import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Car, 
  Clock, 
  Shield, 
  Star, 
  ArrowRight, 
  MapPin, 
  Users,
  Zap
} from 'lucide-react'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Car,
      title: 'Multiple Ride Options',
      description: 'Choose from UberX, UberXL, UberBlack, or UberPool based on your needs and budget.'
    },
    {
      icon: Clock,
      title: 'Quick Pickup',
      description: 'Get picked up in minutes with our efficient driver matching system.'
    },
    {
      icon: Shield,
      title: 'Safe Rides',
      description: 'All drivers are verified and rides are tracked for your safety.'
    },
    {
      icon: Star,
      title: 'Top Rated',
      description: 'Rate your driver and provide feedback to maintain quality service.'
    }
  ]

  const stats = [
    { number: '10M+', label: 'Happy Riders' },
    { number: '500K+', label: 'Active Drivers' },
    { number: '150+', label: 'Cities Served' },
    { number: '99.9%', label: 'Uptime' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-uber-black via-gray-900 to-uber-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Ride,{' '}
              <span className="text-uber-green">Anytime</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience seamless transportation with our elegant ride-sharing platform. 
              Book your ride in seconds and enjoy the journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ride"
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2 group"
              >
                Book a Ride
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                View Map
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-20 right-20 w-32 h-32 bg-uber-green/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-primary-500/20 rounded-full blur-xl"
        />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-uber-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-uber-black mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've built the most intuitive and reliable ride-sharing experience for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-uber-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-uber-green/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-uber-green" />
                </div>
                <h3 className="text-xl font-semibold text-uber-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-uber-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-uber-black mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-uber-green to-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join millions of users who trust our platform for their daily transportation needs.
            </p>
            <Link
              to="/ride"
              className="inline-flex items-center gap-2 bg-white text-uber-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Zap className="w-5 h-5" />
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-uber-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-uber-black mb-6">
                About This Project
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                This is a portfolio project that demonstrates modern web development skills including:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-uber-green" />
                  React with TypeScript for type safety
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-uber-green" />
                  Modern state management with Context API
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-uber-green" />
                  Interactive maps and location services
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-uber-green" />
                  Beautiful UI with Tailwind CSS and Framer Motion
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-uber-green/20 to-primary-500/20 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-uber-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <Car className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-uber-black mb-4">
                    Portfolio Showcase
                  </h3>
                  <p className="text-gray-600">
                    This project demonstrates full-stack development capabilities, 
                    modern UI/UX design principles, and responsive web development.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage 