import React, { useState } from 'react'

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Modern Residential Villa',
      category: 'residential',
      description: 'Beautiful 3BHK villa with modern amenities and contemporary design.',
      year: '2023',
      image: '🏠',
      features: ['3 BHK', 'Modern Design', 'Premium Materials', 'Landscaping']
    },
    {
      id: 2,
      title: 'Office Complex',
      category: 'commercial',
      description: 'Multi-story office building with modern facilities and parking.',
      year: '2023',
      image: '🏢',
      features: ['Multi-story', 'Parking', 'Modern Facilities', 'Energy Efficient']
    },
    {
      id: 3,
      title: 'Apartment Complex',
      category: 'residential',
      description: 'Luxury apartment complex with 24/7 security and amenities.',
      year: '2022',
      image: '🏘️',
      features: ['Luxury Units', '24/7 Security', 'Amenities', 'Prime Location']
    },
    {
      id: 4,
      title: 'Building Renovation',
      category: 'maintenance',
      description: 'Complete renovation and modernization of existing structure.',
      year: '2023',
      image: '🔧',
      features: ['Complete Renovation', 'Modernization', 'Structural Upgrades', 'Interior Design']
    },
    {
      id: 5,
      title: 'Retail Space',
      category: 'commercial',
      description: 'Modern retail complex with multiple shops and parking facilities.',
      year: '2022',
      image: '🏪',
      features: ['Multiple Shops', 'Parking', 'Modern Design', 'High Footfall']
    },
    {
      id: 6,
      title: 'Custom Home',
      category: 'residential',
      description: 'Bespoke home design and construction as per client requirements.',
      year: '2023',
      image: '🏡',
      features: ['Custom Design', 'Premium Materials', 'Smart Home', 'Landscaping']
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'maintenance', label: 'Maintenance' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div>
      {/* Page Header */}
      <section className="hero-gradient py-32">
        <div className="container-custom section-padding">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-hero text-gray-900 mb-8 text-balance">Our Projects</h1>
            <p className="text-body-large text-gray-600">Showcasing our quality work and successful completions</p>
          </div>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-12 bg-subtle">
        <div className="container-custom">
          <div className="flex justify-center gap-4 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-300 border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group">
                <div className="bg-white rounded-3xl shadow-subtle overflow-hidden card-hover border-subtle">
                  <div className="h-64 bg-gray-50 flex items-center justify-center text-8xl">
                    {project.image}
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-light text-gray-900">{project.title}</h3>
                      <span className="text-sm text-gray-500 flex items-center">
                        <span className="mr-2">📅</span>
                        {project.year}
                      </span>
                    </div>
                    <p className="text-body mb-6">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-3 text-lg">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full text-gray-900 font-medium text-sm tracking-wide hover:text-gray-600 transition-colors duration-300 flex items-center justify-center">
                      View Details
                      <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-3xl font-light text-gray-900 mb-4">No Projects Found</h3>
              <p className="text-body-large">Try selecting a different category to view more projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Stats */}
      <section className="section-padding bg-subtle">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-section-title text-gray-900 mb-6 text-balance">Project Statistics</h2>
            <p className="text-body-large max-w-3xl mx-auto text-balance">
              Our track record speaks for itself - delivering quality projects on time and within budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="text-6xl font-light text-gray-900 mb-4 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-lg text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-light text-gray-900 mb-4 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-lg text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-light text-gray-900 mb-4 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-lg text-gray-600">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-light text-gray-900 mb-4 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-lg text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-section-title mb-8 text-balance">Ready to Start Your Project?</h2>
          <p className="text-body-large text-gray-300 mb-12 max-w-2xl mx-auto text-balance">
            Let's discuss your project requirements and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact" className="btn-primary">
              Start Your Project
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

export default Projects