import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src="/assets/logo.png" 
                  alt="Foundation Brothers" 
                  className="h-12 w-auto mr-4"
                />
                <span className="text-2xl font-light text-gray-900 tracking-tight">Foundation Brothers</span>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Professional construction services in Jaipur, Rajasthan. Building dreams with quality, reliability, and excellence.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-gray-600 mb-8">
                <p className="flex items-center">
                  <span className="mr-3 text-xl">📧</span>
                  <span>info@foundationbrothers.in</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-3 text-xl">📞</span>
                  <span>+91 7374940023</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-3 text-xl">📍</span>
                  <span>Mansarovar, Jaipur, Rajasthan</span>
                </p>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <span className="text-xl">📘</span>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <span className="text-xl">📷</span>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <span className="text-xl">📺</span>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <span className="text-xl">💼</span>
                </a>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Our Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li><Link to="/services" className="hover:text-gray-900 transition-colors">Construction</Link></li>
                <li><Link to="/services" className="hover:text-gray-900 transition-colors">Maintenance</Link></li>
                <li><Link to="/services" className="hover:text-gray-900 transition-colors">Consultation</Link></li>
                <li><Link to="/services" className="hover:text-gray-900 transition-colors">Project Management</Link></li>
                <li><Link to="/services" className="hover:text-gray-900 transition-colors">Residential Projects</Link></li>
                <li><Link to="/services" className="hover:text-gray-900 transition-colors">Commercial Projects</Link></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Company</h3>
              <ul className="space-y-3 text-gray-700">
                <li><Link to="/about" className="hover:text-gray-900 transition-colors">About Us</Link></li>
                <li><Link to="/projects" className="hover:text-gray-900 transition-colors">Our Projects</Link></li>
                <li><Link to="/contact" className="hover:text-gray-900 transition-colors">Contact Us</Link></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Testimonials</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            {/* Quick Contact & Legal */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Quick Contact</h3>
              
              {/* WhatsApp Button */}
              <div className="mb-8">
                <a 
                  href="https://wa.me/917374940023" 
                  className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-full font-medium text-sm tracking-wide hover:bg-black transition-all duration-300 mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2 text-lg">💬</span>
                  <span>Chat on WhatsApp</span>
                </a>
                <p className="text-gray-600 text-sm">Get instant response for your queries</p>
              </div>
              
              {/* Legal Links */}
              <div className="space-y-4 text-gray-700">
                <h4 className="text-sm uppercase tracking-widest text-gray-500">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Refund Policy</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Disclaimer</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="mt-16 pt-10 border-t border-gray-200">
            <div className="max-w-lg mx-auto text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-3">Stay Updated</h3>
              <p className="text-gray-600 mb-6">Get the latest updates on our projects and services</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-4 bg-gray-50 text-gray-900 rounded-l-full focus:outline-none focus:ring-2 focus:ring-gray-900/10 border border-gray-200"
                />
                <button className="bg-gray-900 text-white px-8 py-4 rounded-r-full font-medium text-sm tracking-wide hover:bg-black transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="bg-gray-50 text-gray-600 py-8 border-t border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="">&copy; 2024 Foundation Brothers. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
