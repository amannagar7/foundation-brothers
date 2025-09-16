import React from 'react'

const About: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="hero-gradient py-32">
        <div className="container-custom section-padding">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-hero text-gray-900 mb-8 text-balance">About Foundation Brothers</h1>
            <p className="text-body-large text-gray-600">Building excellence since our foundation</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-section-title text-gray-900 mb-8 text-balance">Our Story</h2>
              <div className="spacing-content">
                <p className="text-body-large text-balance">
                  Foundation Brothers was established with a vision to provide exceptional construction services in Jaipur, Rajasthan. 
                  We combine traditional craftsmanship with modern techniques to deliver outstanding results that exceed our clients' expectations.
                </p>
                <p className="text-body-large text-balance">
                  Our team of experienced professionals is dedicated to quality, reliability, and customer satisfaction in every project we undertake. 
                  We believe that every construction project is an opportunity to build lasting relationships and create something truly special.
                </p>
                <p className="text-body-large text-balance">
                  From residential homes to commercial complexes, we have the expertise and commitment to bring your vision to life with 
                  precision and excellence.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-12">
              <div className="grid grid-cols-2 gap-12">
                <div className="text-center">
                  <div className="text-5xl font-light text-gray-900 mb-3">50+</div>
                  <div className="text-lg text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-light text-gray-900 mb-3">5+</div>
                  <div className="text-lg text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-light text-gray-900 mb-3">100%</div>
                  <div className="text-lg text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-light text-gray-900 mb-3">24/7</div>
                  <div className="text-lg text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-subtle">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-section-title text-gray-900 mb-6 text-balance">Why Choose Us</h2>
            <p className="text-body-large max-w-3xl mx-auto text-balance">
              We are committed to delivering exceptional construction services that meet the highest standards of quality and professionalism.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                <span className="text-4xl">👥</span>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Experienced Team</h3>
              <p className="text-body">Skilled professionals with years of industry experience</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Quality Materials</h3>
              <p className="text-body">We use only the finest materials for lasting results</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                <span className="text-4xl">⏰</span>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Timely Delivery</h3>
              <p className="text-body">Projects completed on time and within budget</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Reliable Service</h3>
              <p className="text-body">Consistent, dependable service you can trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-section-title mb-8 text-balance">Ready to Work With Us?</h2>
          <p className="text-body-large text-gray-300 mb-12 max-w-2xl mx-auto text-balance">
            Let's discuss your project and see how we can help bring your construction vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact" className="btn-primary">
              Get In Touch
            </a>
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

export default About