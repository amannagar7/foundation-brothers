import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-start">
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
                  <span>info.foundationbrothers@gmail.com</span>
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
                  href="https://facebook.com/foundationbrothers" 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-300"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com/foundationbrothers" 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-300"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@foundationbrothers" 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-300"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/foundationbrothers" 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-300"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            
            
            {/* Company */}
            <div className="sm:col-span-1">
            {/* Company */}
            <div className="sm:col-span-1">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Company</h3>
              <ul className="space-y-3 text-gray-700">
                <li><Link to="/about" className="hover:text-gray-900 transition-colors">About Us</Link></li>
                <li><Link to="/projects" className="hover:text-gray-900 transition-colors">Our Projects</Link></li>
                <li><Link to="/contact" className="hover:text-gray-900 transition-colors">Contact Us</Link></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            {/* Quick Contact & Legal */}
            <div className="sm:col-span-1">
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
                  <li><Link to="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="hover:text-gray-900 transition-colors">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="bg-gray-50 text-gray-600 py-8 border-t border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <p className="text-center md:text-left">&copy; 2025 Foundation Brothers. All rights reserved.</p>
            <div className="flex justify-center md:justify-end space-x-6">
              <Link to="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
              <a href="#" className="hover:text-gray-900 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
