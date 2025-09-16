import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
    
    setIsSubmitting(false)
    alert('Message sent successfully! We\'ll get back to you soon.')
  }

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '')
    if (phoneNumber.length > 0) {
      if (phoneNumber.startsWith('91')) {
        return '+' + phoneNumber
      } else if (phoneNumber.startsWith('0')) {
        return '+91' + phoneNumber.substring(1)
      } else {
        return '+91' + phoneNumber
      }
    }
    return value
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setFormData(prev => ({
      ...prev,
      phone: formatted
    }))
  }

  return (
    <div>
      {/* Page Header */}
      <section className="hero-gradient py-32">
        <div className="container-custom section-padding">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-hero text-gray-900 mb-8 text-balance">Contact Us</h1>
            <p className="text-body-large text-gray-600">Get in touch for your construction needs</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <div>
              <h2 className="text-section-title text-gray-900 mb-12 text-balance">Get In Touch</h2>
              
              {/* Contact Details */}
              <div className="spacing-content mb-12">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-3xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-3">Phone</h3>
                    <p className="text-body-large">+91 7374940023</p>
                    <p className="text-gray-500 mt-2">Available 24/7 for emergencies</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-3xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-3">Email</h3>
                    <p className="text-body-large">info@foundationbrothers.in</p>
                    <p className="text-gray-500 mt-2">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-3xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-3">Address</h3>
                    <p className="text-body-large">Mansarovar, Jaipur, Rajasthan, India</p>
                    <p className="text-gray-500 mt-2">Visit us for a consultation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-3xl">🔧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-3">Maintenance</h3>
                    <p className="text-body-large">+91 7374940023</p>
                    <p className="text-gray-500 mt-2">Dedicated maintenance support</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-2xl font-light text-gray-900 mb-4">Quick Contact via WhatsApp</h3>
                <p className="text-body mb-6">Get instant response for your queries</p>
                <a 
                  href="https://wa.me/917374940023" 
                  className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-3 text-lg">💬</span>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-section-title text-gray-900 mb-12 text-balance">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900/20 focus:border-gray-400 transition-all duration-300 text-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900/20 focus:border-gray-400 transition-all duration-300 text-lg"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900/20 focus:border-gray-400 transition-all duration-300 text-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900/20 focus:border-gray-400 transition-all duration-300 text-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900/20 focus:border-gray-400 transition-all duration-300 text-lg"
                  >
                    <option value="">Select a service</option>
                    <option value="construction">Construction</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900/20 focus:border-gray-400 transition-all duration-300 text-lg"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 text-white py-6 px-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="mr-3 text-xl">📤</span>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gray-900 mb-6 text-balance">Find Us</h2>
            <p className="text-body-large">Visit our office in Mansarovar, Jaipur</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-subtle overflow-hidden">
            <div className="h-96 bg-gray-50 flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl mb-6">📍</span>
                <h3 className="text-2xl font-light text-gray-900 mb-4">Interactive Map</h3>
                <p className="text-body-large text-gray-600">Mansarovar, Jaipur, Rajasthan, India</p>
                <p className="text-gray-500 mt-4">Map integration can be added here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact