import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section - Apple-Like Split Design */}
      <section className="min-h-screen bg-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gray-100 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gray-100 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gray-100 rounded-full opacity-10"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 min-h-screen items-center py-20">
            
            {/* Left Side - Client Relaxation */}
            <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
              <div className="relative group mb-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="w-80 h-96 rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10 group-hover:shadow-3xl group-hover:shadow-gray-900/20 transition-all duration-500 group-hover:-translate-y-2">
                  <img 
                    src="/assets/Hero Section Man Happy Sitting.jpg" 
                    alt="Happy client relaxing" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/10 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/5 group-hover:to-white/10 transition-all duration-500"></div>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="bg-gray-900 text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg group-hover:shadow-xl">
                    Your Peace of Mind
                  </div>
                </div>
              </div>
            </div>

            {/* Center - Main Value Proposition */}
            <div className="lg:col-span-1 flex flex-col items-center text-center">
              <div className="max-w-2xl">
                <div className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-6 animate-fade-in-up">
                  Welcome to Excellence
                </div>
                <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-4 animate-fade-in-up">
                  Where Dreams
                </h1>
                <h2 className="text-6xl lg:text-7xl font-light text-gray-900 leading-tight mb-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <span className="font-medium bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">Meet Reality</span>
                </h2>
                <h3 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  Foundation Brothers
                </h3>
              </div>
            </div>

            {/* Right Side - Professional Execution */}
            <div className="lg:col-span-1 flex flex-col items-center lg:items-end">
              <div className="relative group mb-6 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <div className="w-80 h-96 rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10 group-hover:shadow-3xl group-hover:shadow-gray-900/20 transition-all duration-500 group-hover:-translate-y-2">
                  <img 
                    src="/assets/engineering people happy.jpg" 
                    alt="Professional engineering team" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/10 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/5 group-hover:to-white/10 transition-all duration-500"></div>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="bg-gray-900 text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg group-hover:shadow-xl">
                    Expert Craftsmanship
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating CTA - Bottom Right */}
        <div className="fixed bottom-8 right-8 z-40 hidden lg:block animate-fade-in-up" style={{animationDelay: '1s'}}>
          <div className="bg-white rounded-2xl shadow-2xl shadow-gray-900/20 overflow-hidden border border-gray-100 hover:shadow-3xl hover:shadow-gray-900/30 transition-all duration-500 hover:-translate-y-1">
            <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 px-6 py-4">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full border-2 border-white shadow-sm"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full border-2 border-white shadow-sm"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full border-2 border-white shadow-sm"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Book FREE Expert</p>
                  <p className="text-sm font-medium text-gray-900">Consultation!</p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800">
              <Link 
                to="/contact" 
                className="block w-full text-center bg-white text-gray-900 px-6 py-3 rounded-xl font-medium text-sm hover:bg-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Family & Trust Section - Apple-Like */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="order-2 lg:order-1">
              <div className="max-w-lg">
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-8 text-balance tracking-tight">
                  Building trust,<br />
                  one foundation at a time
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 tracking-wide">
                  Real families. Real homes. Real results. 
                  We understand what matters most to you.
                </p>
                <Link 
                  to="/about" 
                  className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/25 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Learn More
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Right Side - Family Image */}
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-gray-900/10 group-hover:shadow-3xl group-hover:shadow-gray-900/20 transition-all duration-500">
                  <img 
                    src="/assets/Indian family happy with home.jpg" 
                    alt="Happy Indian family with their new home" 
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/5 transition-all duration-500"></div>
                </div>
                
                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl shadow-gray-900/20 p-6 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="text-center">
                    <div className="text-3xl font-light text-gray-900 mb-1">500+</div>
                    <div className="text-sm text-gray-600 font-medium">Happy Families</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-section-title text-gray-900 mb-6 text-balance">Our Services</h2>
            <p className="text-body-large max-w-3xl mx-auto text-balance">
              Comprehensive construction solutions tailored to meet your specific needs and exceed your expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group">
              <div className="bg-white p-12 rounded-3xl shadow-subtle card-hover border-subtle">
                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gray-100 transition-colors duration-300">
                  <span className="text-4xl">🏗️</span>
                </div>
                <h3 className="text-2xl font-light mb-6 text-gray-900">Construction</h3>
                <p className="text-body mb-8">
                  Complete construction solutions for residential and commercial projects with quality materials and expert workmanship.
                </p>
                <Link to="/services" className="text-gray-900 font-medium text-sm tracking-wide hover:text-gray-600 transition-colors duration-300">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-12 rounded-3xl shadow-subtle card-hover border-subtle">
                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gray-100 transition-colors duration-300">
                  <span className="text-4xl">🔧</span>
                </div>
                <h3 className="text-2xl font-light mb-6 text-gray-900">Maintenance</h3>
                <p className="text-body mb-8">
                  Professional maintenance services to keep your property in perfect condition year-round.
                </p>
                <Link to="/services" className="text-gray-900 font-medium text-sm tracking-wide hover:text-gray-600 transition-colors duration-300">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-12 rounded-3xl shadow-subtle card-hover border-subtle">
                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gray-100 transition-colors duration-300">
                  <span className="text-4xl">💡</span>
                </div>
                <h3 className="text-2xl font-light mb-6 text-gray-900">Consultation</h3>
                <p className="text-body mb-8">
                  Expert advice and consultation for all your construction and maintenance needs.
                </p>
                <Link to="/services" className="text-gray-900 font-medium text-sm tracking-wide hover:text-gray-600 transition-colors duration-300">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-subtle">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-section-title text-gray-900 mb-8 text-balance">Why Choose Foundation Brothers?</h2>
              <p className="text-body-large mb-12 text-balance">
                With years of experience and a commitment to excellence, we deliver construction solutions that stand the test of time.
              </p>
              
              <div className="spacing-content">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-3">Experienced Team</h3>
                    <p className="text-body">Our skilled professionals bring years of expertise to every project.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-3">Quality Materials</h3>
                    <p className="text-body">We use only the finest materials to ensure lasting results.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-3">Timely Delivery</h3>
                    <p className="text-body">We complete projects on time and within budget.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-3">Competitive Pricing</h3>
                    <p className="text-body">Fair and transparent pricing for all our services.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-light mb-8">Ready to Start Your Project?</h3>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                Get a free consultation and quote for your construction needs. Our experts are ready to help you bring your vision to life.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-center">
                  <span className="mr-4 text-xl">📞</span>
                  <span className="text-lg">+91 7374940023</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-4 text-xl">📧</span>
                  <span className="text-lg">info@foundationbrothers.in</span>
                </div>
              </div>
              <Link 
                to="/contact" 
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-section-title mb-8 text-balance">Ready to Build Something Amazing?</h2>
          <p className="text-body-large text-gray-300 mb-12 max-w-2xl mx-auto text-balance">
            Let's discuss your project and turn your construction dreams into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
            <a 
              href="https://wa.me/917374940023" 
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
