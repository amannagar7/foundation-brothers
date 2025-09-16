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

  const scrollToContact = () => {
    if (location.pathname === '/contact') {
      const contactSection = document.getElementById('contact-form')
      contactSection?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/contact'
    }
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* Top Information Bar - Apple-Like */}
      <div className="bg-gray-50/60 border-b border-gray-100/50">
        <div className="container-custom">
          <div className="flex justify-between items-center py-3 text-xs text-gray-600">
            {/* Contact Information */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 hover:text-gray-900 transition-colors duration-300 cursor-pointer group">
                <span className="text-gray-400 group-hover:text-gray-600">📧</span>
                <span>info@foundationbrothers.in</span>
                <button 
                  onClick={() => copyToClipboard('info@foundationbrothers.in')}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-300 ml-1"
                >
                  📋
                </button>
              </div>
              
              <div className="flex items-center space-x-2 hover:text-gray-900 transition-colors duration-300 cursor-pointer group">
                <span className="text-gray-400 group-hover:text-gray-600">📞</span>
                <span>+91 7374940023</span>
                <button 
                  onClick={() => copyToClipboard('+91 7374940023')}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-300 ml-1"
                >
                  📋
                </button>
              </div>
              
              <div className="flex items-center space-x-2 hover:text-gray-900 transition-colors duration-300 cursor-pointer group">
                <span className="text-gray-400 group-hover:text-gray-600">🔧</span>
                <span>Maintenance: +91 7374940023</span>
                <button 
                  onClick={() => copyToClipboard('+91 7374940023')}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-300 ml-1"
                >
                  📋
                </button>
              </div>
            </div>
            
            {/* Right Side Actions */}
            <div className="flex items-center space-x-6">
              {/* Free Quote Badge */}
              <div className="bg-gray-900 text-white px-3 py-1.5 rounded-full text-xs font-medium tracking-wide">
                FREE QUOTE
              </div>
              
              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/917374940023" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-gray-900 transition-colors duration-300 group"
              >
                <span className="text-green-600 group-hover:text-green-700">💬</span>
                <span className="font-medium">Book appointment now</span>
                <span className="text-gray-400 group-hover:text-gray-600 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Clean & Minimalist */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center py-6">
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center group">
              <img 
                src="/assets/logo.png" 
                alt="Foundation Brothers" 
                className="h-12 w-auto mr-4 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-2xl font-light text-gray-900 tracking-tight">Foundation Brothers</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-12">
              <Link 
                to="/" 
                className={`text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 ${isActive('/') ? 'text-gray-900' : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 ${isActive('/about') ? 'text-gray-900' : ''}`}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 ${isActive('/services') ? 'text-gray-900' : ''}`}
              >
                Services
              </Link>
              <Link 
                to="/projects" 
                className={`text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 ${isActive('/projects') ? 'text-gray-900' : ''}`}
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className={`text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 ${isActive('/contact') ? 'text-gray-900' : ''}`}
              >
                Contact
              </Link>
            </nav>
            
            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                to="/projects" 
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                Portfolio
              </Link>
              
              <Link 
                to="/contact" 
                className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-2xl text-gray-600 hover:text-gray-800 transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className={`text-sm font-medium py-2 ${isActive('/') ? 'text-gray-900' : 'text-gray-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`text-sm font-medium py-2 ${isActive('/about') ? 'text-gray-900' : 'text-gray-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/services" 
                  className={`text-sm font-medium py-2 ${isActive('/services') ? 'text-gray-900' : 'text-gray-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/projects" 
                  className={`text-sm font-medium py-2 ${isActive('/projects') ? 'text-gray-900' : 'text-gray-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link 
                  to="/contact" 
                  className={`text-sm font-medium py-2 ${isActive('/contact') ? 'text-gray-900' : 'text-gray-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
              <div className="mt-6 flex flex-col space-y-3">
                <Link 
                  to="/projects" 
                  className="text-sm font-medium text-gray-600 text-center py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-gray-900 text-white text-center py-2.5 rounded-full text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
