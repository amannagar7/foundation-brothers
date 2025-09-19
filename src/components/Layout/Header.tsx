import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // You could add a toast notification here
      console.log('Copied to clipboard:', text)
    })
  }


  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* Top Information Bar - Reidius Infra Style */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Mobile: horizontal chips */}
          <div className="sm:hidden py-2 text-[12px] text-gray-900">
            <div className="flex gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">
              <a href="mailto:info.foundationbrothers@gmail.com" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50">
                <span>📧</span>
                <span>Email</span>
              </a>
              <a href="tel:+917374940023" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50">
                <span>📞</span>
                <span>Call</span>
              </a>
              <button onClick={() => copyToClipboard('+91 7374940023')} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50">
                <span>🔧</span>
                <span>Maint.</span>
              </button>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-400 text-black font-semibold">FREE</span>
              <a href="https://wa.me/917374940023" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50">
                <span>💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Desktop / tablet: full bar */}
          <div className="hidden sm:flex sm:justify-between sm:items-center py-3 text-xs text-gray-900">
            {/* Contact Information */}
            <div className="flex items-center gap-x-8">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">📧</span>
                <span>Email: info.foundationbrothers@gmail.com</span>
                <button onClick={() => copyToClipboard('info.foundationbrothers@gmail.com')} className="text-gray-400 hover:text-gray-600 transition-colors duration-300 ml-1">📋</button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">📞</span>
                <span>Contact: +91 7374940023</span>
                <button onClick={() => copyToClipboard('+91 7374940023')} className="text-gray-400 hover:text-gray-600 transition-colors duration-300 ml-1">📋</button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">🔧</span>
                <span>Maintenance: +91 7374940023</span>
                <button onClick={() => copyToClipboard('+91 7374940023')} className="text-gray-400 hover:text-gray-600 transition-colors duration-300 ml-1">📋</button>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-400 text-black px-3 py-1.5 rounded-full text-xs font-bold tracking-wide">FREE</div>
              <a href="https://wa.me/917374940023" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-700 transition-colors duration-300 group">
                <span className="text-green-500 group-hover:text-green-600">💬</span>
                <span className="font-medium">Book appointment now</span>
                <span className="text-gray-500 group-hover:text-gray-700 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Reidius Infra Style */}
      <header className="bg-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-6">
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center group">
              <img 
                src="/assets/logo.png" 
                alt="Foundation Brothers" 
                className="h-8 sm:h-10 w-auto mr-2 sm:mr-3 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-lg sm:text-2xl font-bold text-gray-900 tracking-tight">Foundation Brothers</span>
            </Link>
            
            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex space-x-12">
              <Link 
                to="/all-projects" 
                className={`text-sm font-medium hover:text-gray-900 transition-colors duration-300 ${isActive('/all-projects') ? 'text-gray-900 font-bold' : 'text-gray-600'}`}
              >
                All Projects
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium hover:text-gray-900 transition-colors duration-300 ${isActive('/about') ? 'text-gray-900 font-bold' : 'text-gray-600'}`}
              >
                About Us
              </Link>
              <Link 
                to="/careers" 
                className={`text-sm font-medium hover:text-gray-900 transition-colors duration-300 ${isActive('/careers') ? 'text-gray-900 font-bold' : 'text-gray-600'}`}
              >
                Careers
              </Link>
              <Link 
                to="/contact" 
                className={`text-sm font-medium hover:text-gray-900 transition-colors duration-300 ${isActive('/contact') ? 'text-gray-900 font-bold' : 'text-gray-600'}`}
              >
                Contact
              </Link>
              <Link 
                to="/learn" 
                className={`text-sm font-medium hover:text-gray-900 transition-colors duration-300 ${isActive('/learn') ? 'text-gray-900 font-bold' : 'text-gray-600'}`}
              >
                Learn
              </Link>
            </nav>
            
            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center">
              <button className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Download Portfolio</span>
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-2xl text-gray-600 hover:text-gray-800 transition p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-3">
              <nav className="flex flex-col space-y-2">
                <Link 
                  to="/all-projects" 
                  className={`text-sm font-medium py-2 ${isActive('/all-projects') ? 'text-gray-900 font-bold' : 'text-gray-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  All Projects
                </Link>
                <Link 
                  to="/about" 
                  className={`text-sm font-medium py-2 ${isActive('/about') ? 'text-gray-900 font-bold' : 'text-gray-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/careers" 
                  className={`text-sm font-medium py-2 ${isActive('/careers') ? 'text-gray-900 font-bold' : 'text-gray-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link 
                  to="/contact" 
                  className={`text-sm font-medium py-2 ${isActive('/contact') ? 'text-gray-900 font-bold' : 'text-gray-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  to="/learn" 
                  className={`text-sm font-medium py-2 ${isActive('/learn') ? 'text-gray-900 font-bold' : 'text-gray-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Learn
                </Link>
              </nav>
              <div className="mt-4 flex flex-col space-y-3">
                <button className="flex items-center justify-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Download Portfolio</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
