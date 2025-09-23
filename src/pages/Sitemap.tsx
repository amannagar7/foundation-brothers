import React from 'react'
import { Link } from 'react-router-dom'

const Sitemap: React.FC = () => {
  const pages = [
    { path: '/', title: 'Home', description: 'Foundation Brothers homepage' },
    { path: '/about', title: 'About Us', description: 'Learn about our company, mission, and leadership team' },
    { path: '/services', title: 'Services', description: 'Our construction and design services' },
    { path: '/projects', title: 'Projects', description: 'Featured projects showcase' },
    { path: '/all-projects', title: 'All Projects', description: 'Complete portfolio of our work' },
    { path: '/careers', title: 'Careers', description: 'Join our team and explore career opportunities' },
    { path: '/learn', title: 'Learn', description: 'Educational resources and blog posts' },
    { path: '/contact', title: 'Contact Us', description: 'Get in touch with our team' },
    { path: '/privacy', title: 'Privacy Policy', description: 'Our privacy policy and data protection' },
    { path: '/terms', title: 'Terms of Service', description: 'Terms and conditions of our services' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sitemap</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Navigate through all the pages on our website. Find everything you need to know about Foundation Brothers.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pages.map((page, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <Link 
                  to={page.path} 
                  className="block group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {page.description}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span className="mr-2">Visit page</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help Finding Something?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              If you can't find what you're looking for, feel free to contact us directly. We're here to help!
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sitemap
