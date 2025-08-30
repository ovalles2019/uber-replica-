import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RidePage from './pages/RidePage'
import Header from './components/Header'
import ErrorBoundary from './components/ErrorBoundary'
import { RideProvider } from './context/RideContext'

function App() {
  return (
    <ErrorBoundary>
      <RideProvider>
        <Router>
          <div className="min-h-screen bg-uber-gray">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/ride" element={<RidePage />} />
            </Routes>
          </div>
        </Router>
      </RideProvider>
    </ErrorBoundary>
  )
}

export default App 