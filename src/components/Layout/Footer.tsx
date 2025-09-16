import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-4 gap-16">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src="/assets/logo.png" 
                  alt="Foundation Brothers" 
                  className="h-16 w-auto mr-5"
                />
                <span className="text-2xl font-light text-white tracking-tight">Foundation Brothers</span>
              </div>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Professional construction services in Jaipur, Rajasthan. Building dreams with quality, reliability, and excellence.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 text-gray-400 mb-8">
                <p className="flex items-center text-lg">
                  <span className="mr-3 text-xl">📧</span>
                  <span>info@foundationbrothers.in</span>
                </p>
                <p className="flex items-center text-lg">
                  <span className="mr-3 text-xl">📞</span>
                  <span>+91 7374940023</span>
                </p>
                <p className="flex items-center text-lg">
                  <span className="mr-3 text-xl">📍</span>
                  <span>Mansarovar, Jaipur, Rajasthan</span>
                </p>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-6">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <span className="text-xl">📘</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <span className="text-xl">📷</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <span className="text-xl">📺</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <span className="text-xl">💼</span>
                </a>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-xl font-light text-white mb-8">Our Services</h3>
              <ul className="space-y-4 text-gray-400">
                <li><Link to="/services" className="text-lg hover:text-white transition-colors duration-300">Construction</Link></li>
                <li><Link to="/services" className="text-lg hover:text-white transition-colors duration-300">Maintenance</Link></li>
                <li><Link to="/services" className="text-lg hover:text-white transition-colors duration-300">Consultation</Link></li>
                <li><Link to="/services" className="text-lg hover:text-white transition-colors duration-300">Project Management</Link></li>
                <li><Link to="/services" className="text-lg hover:text-white transition-colors duration-300">Residential Projects</Link></li>
                <li><Link to="/services" className="text-lg hover:text-white transition-colors duration-300">Commercial Projects</Link></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-xl font-light text-white mb-8">Company</h3>
              <ul className="space-y-4 text-gray-400">
                <li><Link to="/about" className="text-lg hover:text-white transition-colors duration-300">About Us</Link></li>
                <li><Link to="/projects" className="text-lg hover:text-white transition-colors duration-300">Our Projects</Link></li>
                <li><Link to="/contact" className="text-lg hover:text-white transition-colors duration-300">Contact Us</Link></li>
                <li><a href="#" className="text-lg hover:text-white transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="text-lg hover:text-white transition-colors duration-300">Testimonials</a></li>
                <li><a href="#" className="text-lg hover:text-white transition-colors duration-300">Blog</a></li>
              </ul>
            </div>
            
            {/* Quick Contact & Legal */}
            <div>
              <h3 className="text-xl font-light text-white mb-8">Quick Contact</h3>
              
              {/* WhatsApp Button */}
              <div className="mb-10">
                <a 
                  href="https://wa.me/917374940023" 
                  className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-gray-100 transition-all duration-300 hover:shadow-lg mb-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-3 text-lg">💬</span>
                  <span>Chat on WhatsApp</span>
                </a>
                <p className="text-gray-400 text-lg">Get instant response for your queries</p>
              </div>
              
              {/* Legal Links */}
              <div className="space-y-4 text-gray-400">
                <h4 className="font-light text-white text-lg mb-4">Legal</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-lg hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                  <li><a href="#" className="text-lg hover:text-white transition-colors duration-300">Terms & Conditions</a></li>
                  <li><a href="#" className="text-lg hover:text-white transition-colors duration-300">Refund Policy</a></li>
                  <li><a href="#" className="text-lg hover:text-white transition-colors duration-300">Disclaimer</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="mt-20 pt-12 border-t border-gray-800">
            <div className="max-w-lg mx-auto text-center">
              <h3 className="text-2xl font-light text-white mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-8 text-lg">Get the latest updates on our projects and services</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-4 bg-gray-800 text-white rounded-l-full focus:outline-none focus:ring-2 focus:ring-white/20 border border-gray-700"
                />
                <button className="bg-white text-gray-900 px-8 py-4 rounded-r-full font-medium text-sm tracking-wide hover:bg-gray-100 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="bg-gray-950 text-gray-500 py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-lg">&copy; 2024 Foundation Brothers. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors duration-300 text-lg">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300 text-lg">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300 text-lg">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
