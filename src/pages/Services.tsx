import React from 'react'

const Services: React.FC = () => {
  const services = [
    {
      icon: '🏗️',
      title: 'Construction',
      description: 'Complete construction solutions for residential and commercial projects with quality materials and expert workmanship.',
      features: ['Residential Construction', 'Commercial Construction', 'Infrastructure Development', 'Project Planning']
    },
    {
      icon: '🔧',
      title: 'Maintenance',
      description: 'Professional maintenance services to keep your property in perfect condition year-round.',
      features: ['Regular Maintenance', 'Emergency Repairs', 'Preventive Care', '24/7 Support']
    },
    {
      icon: '💡',
      title: 'Consultation',
      description: 'Expert advice and consultation for all your construction and maintenance needs.',
      features: ['Design Consultation', 'Cost Estimation', 'Project Planning', 'Technical Advice']
    },
    {
      icon: '🏠',
      title: 'Residential Projects',
      description: 'Custom home construction and renovation services tailored to your specific needs and budget.',
      features: ['Custom Homes', 'Home Renovations', 'Interior Design', 'Landscaping']
    },
    {
      icon: '🏢',
      title: 'Commercial Projects',
      description: 'Professional commercial construction services for offices, retail spaces, and industrial buildings.',
      features: ['Office Buildings', 'Retail Spaces', 'Industrial Facilities', 'Warehouses']
    },
    {
      icon: '📋',
      title: 'Project Management',
      description: 'Complete project management from planning to execution, ensuring timely and quality delivery.',
      features: ['Project Planning', 'Timeline Management', 'Quality Control', 'Budget Management']
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="hero-gradient py-32">
        <div className="container-custom section-padding">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-hero text-gray-900 mb-8 text-balance">Our Services</h1>
            <p className="text-body-large text-gray-600">Professional construction solutions for all your needs</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-section-title text-gray-900 mb-6 text-balance">What We Offer</h2>
            <p className="text-body-large max-w-3xl mx-auto text-balance">
              Comprehensive construction services designed to meet your specific requirements and exceed your expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white p-12 rounded-3xl shadow-subtle card-hover border-subtle">
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gray-100 transition-colors duration-300">
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-light mb-6 text-gray-900">{service.title}</h3>
                  <p className="text-body mb-8">{service.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-medium text-gray-900 mb-4 text-lg">What's Included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-gray-900 rounded-full mr-4"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full text-gray-900 font-medium text-sm tracking-wide hover:text-gray-600 transition-colors duration-300 flex items-center justify-center">
                    Learn More
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-subtle">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-section-title text-gray-900 mb-6 text-balance">Our Process</h2>
            <p className="text-body-large max-w-3xl mx-auto text-balance">
              We follow a systematic approach to ensure every project is completed successfully and to your satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-light group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Consultation</h3>
              <p className="text-body">We discuss your requirements and understand your vision</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-light group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Planning</h3>
              <p className="text-body">Detailed project planning and timeline development</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-light group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Execution</h3>
              <p className="text-body">Professional execution with quality materials and workmanship</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-light group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Delivery</h3>
              <p className="text-body">Timely delivery and post-completion support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-section-title mb-8 text-balance">Ready to Get Started?</h2>
          <p className="text-body-large text-gray-300 mb-12 max-w-2xl mx-auto text-balance">
            Contact us today for a free consultation and quote. Let's discuss your project and see how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact" className="btn-primary">
              Get Free Quote
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

export default Services