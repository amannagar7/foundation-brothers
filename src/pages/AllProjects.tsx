import React, { useState } from 'react'
import Footer from '../components/Layout/Footer'
import Toast from '../components/Toast'

const AllProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Commercial')

  const categories = ['Architecture', 'Interior', 'Residential', 'Commercial']

  // Project data for different categories
  const projectData = {
    Architecture: [
      { name: 'Rajesh Kumar', location: 'Jaipur', image: '/assets/Architecture/Architecture-1.jpg' },
      { name: 'Sanjay Chaudhary ji', location: 'Mansarovar, Jaipur', image: '/assets/Architecture/Architecture-2.jpg' },
      { name: 'Amit Sharma', location: 'C-Scheme, Jaipur', image: '/assets/Architecture/Architecture-3.jpg' },
      { name: 'Priya Singh', location: 'Vaishali Nagar, Jaipur', image: '/assets/Architecture/Architecture-4.jpg' },
      { name: 'Vikram Mehta', location: 'Bani Park, Jaipur', image: '/assets/Architecture/Architecture-5.jpg' },
      { name: 'Rekha Agarwal', location: 'Malviya Nagar, Jaipur', image: '/assets/Architecture/Architecture-6.jpg' }
    ],
    Interior: [
      { name: 'Puneet Kumawat', location: 'Jaipur', image: '/assets/interior/interior-1.jpg' },
      { name: 'DR.SULBHA JI', location: 'Bharatpur', image: '/assets/interior/interior-2.jpg' },
      { name: 'Anita Sharma', location: 'Mansarovar, Jaipur', image: '/assets/interior/interior-3.jpg' },
      { name: 'Rohit Verma', location: 'C-Scheme, Jaipur', image: '/assets/interior/interior-4.jpg' },
      { name: 'Mahesh Kumar', location: 'Ajmer', image: '/assets/interior/interior-5.jpg' },
      { name: 'Neha Singh', location: 'Udaipur', image: '/assets/interior/interior-6.jpg' }
    ],
    Residential: [
      { name: 'Amit Sharma', location: 'Delhi', image: '/assets/Residential/Residential-1.jpg' },
      { name: 'Priya Patel', location: 'Mumbai', image: '/assets/Residential/Residential-2.jpg' },
      { name: 'Rahul Meena', location: 'Jaipur', image: '/assets/Residential/Residential-3.jpg' },
      { name: 'Sneha Agarwal', location: 'Gurugram', image: '/assets/Residential/Residential-4.jpg' },
      { name: 'Vivek Saini', location: 'Pune', image: '/assets/Residential/Residential-5.jpg' },
      { name: 'Harshita Jain', location: 'Ahmedabad', image: '/assets/Residential/Residential-6.jpg' }
    ],
    Commercial: [
      { name: 'Vijay Enterprises', location: 'Bangalore', image: '/assets/Commercial/Commercial-1.jpg' },
      { name: 'Sharma & Co.', location: 'Chennai', image: '/assets/Commercial/Commercial-2.jpg' },
      { name: 'Nirvana Retail', location: 'Hyderabad', image: '/assets/Commercial/Commercial-3.jpg' },
      { name: 'BlueLeaf Offices', location: 'Pune', image: '/assets/Commercial/Commercial-4.jpg' },
    ]
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
  }

  // Hero image per category
  const heroImageByCategory: Record<string, string> = {
    Architecture: '/assets/all-projects-hero-section.avif',
    Interior: '/assets/Interior-hero-section.avif',
    Residential: '/assets/residential-tab.avif',
    Commercial: '/assets/commercial.avif',
  }

  const heroSrc = heroImageByCategory[activeCategory] ?? heroImageByCategory.Architecture

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        {/* Background Image (Dynamic) */}
        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
          <img 
            src={heroSrc} 
            alt={`${activeCategory} hero`} 
            className="w-full h-full object-cover object-center"
          />
          
          {/* Bottom Fade Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
        </div>

        {/* Category Buttons */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-full px-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-white text-black border border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section (Dynamic) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeCategory === 'Architecture' && (
            <>
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Architectural design & planning</h2>
                <p className="text-lg text-gray-600 max-w-4xl">Architectural design creates cohesive, functional structures that balance aesthetics, culture, environment, and technology, combining creativity with practical functionality to inspire and serve occupants effectively.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { image: '/assets/contextual-integration.jpg', title: 'Contextual Integration', description: 'harmonizing with surroundings and culture' },
                  { image: '/assets/Structural-Integrity.jpg', title: 'Structural Integrity', description: 'ensuring durability, stability, and safety' },
                  { image: '/assets/sustainability.jpg', title: 'Sustainability', description: 'using eco-friendly, energy-efficient materials' },
                  { image: '/assets/Regulatory-Bylaws.jpg', title: 'Regulatory Bylaws', description: 'following codes and standards' },
                ].map((card, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                      <p className="text-gray-600 text-sm">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeCategory === 'Interior' && (
            <>
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Interior design & renovation</h2>
                <p className="text-lg text-gray-600 max-w-4xl">Interior design focuses on creating functional, aesthetic, and comfortable indoor spaces by optimizing layouts, materials, lighting, and décor to meet occupants' needs and enhance their experience.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { image: '/assets/Space-Optimization.jpg', title: 'Space Optimization', description: 'maximizing utility and comfort within the available space' },
                  { image: '/assets/Ergonomics.jpg', title: 'Ergonomics', description: 'ensuring furniture provides maximum comfort and support' },
                  { image: '/assets/Lighting-Design.jpg', title: 'Lighting Design', description: 'natural and artificial lighting for functionality & ambiance' },
                  { image: '/assets/Color-Psychology.jpg', title: 'Color Psychology', description: 'enhancing mood through color schemes' },
                  { image: '/assets/Flow-and-Connectivity.jpg', title: 'Flow and Connectivity', description: 'seamless room transitions' },
                ].map((card, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                      <p className="text-gray-600 text-sm">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeCategory === 'Residential' && (
            <>
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Residential home construction</h2>
                <p className="text-lg text-gray-600 max-w-4xl">Residential construction blends personal comfort, modern efficiency, and cultural identity into homes that reflect lifestyle needs and ensure lasting value for families.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { image: '/assets/privacy-&-comfort.jpg', title: 'Privacy & Comfort', description: 'creating serene, secure living spaces' },
                  { image: '/assets/Lifestyle-Alignment.jpg', title: 'Lifestyle Alignment', description: 'tailoring homes to personal routines' },
                  { image: '/assets/Energy-Efficiency.jpg', title: 'Energy Efficiency', description: 'using sustainable, cost-saving technologies' },
                  { image: '/assets/Storage-Solutions.jpg', title: 'Storage Solutions', description: 'maximizing space with smart design' },
                  { image: '/assets/Cultural-Reflection.jpg', title: 'Cultural Reflection', description: 'incorporating local heritage and values' },
                ].map((card, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                      <p className="text-gray-600 text-sm">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeCategory === 'Commercial' && (
            <>
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Commercial building design & construction</h2>
                <p className="text-lg text-gray-600 max-w-4xl">Commercial design focuses on creating functional, adaptable, and brand-aligned spaces that enhance business operations, customer satisfaction, and long-term growth.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                {[
                  { image: '/assets/Brand-Identity.jpg', title: 'Brand Identity', description: 'reflecting corporate values and aesthetics' },
                  { image: '/assets/space-efficiency.jpg', title: 'Space Efficiency', description: 'optimizing layouts for productivity' },
                  { image: '/assets/customer-experience.jpg', title: 'Customer Experience', description: 'designing inviting and functional spaces' },
                  { image: '/assets/traffic-flow.jpg', title: 'Traffic Flow', description: 'managing movement for convenience' },
                  { image: '/assets/compliance-&-safety.jpg', title: 'Compliance & Safety', description: 'adhering to regulations and safety standards' },
                  { image: '/assets/scalability.jpg', title: 'Scalability', description: 'supporting future expansion needs' },
                ].map((card, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                      <p className="text-gray-600 text-sm">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Projects Section (Dynamic) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Projects
          </h2>
          
          {/* Projects Grid */}
          {['Architecture','Interior','Residential','Commercial'].includes(activeCategory) ? (
            <div className={`grid gap-8 ${activeCategory === 'Commercial' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
              {projectData[activeCategory as keyof typeof projectData].map((project, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.name}</h3>
                    <p className="text-gray-600 text-sm">{project.location}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-white shadow-lg p-10 text-center text-gray-600">Projects for {activeCategory.toLowerCase()} will appear here soon.</div>
          )}
        </div>
      </section>

      {/* Explore Other Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Explore other categories
          </h2>
          
          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                category: 'Interior', 
                image: '/assets/interior/interior-1.jpg', 
                title: 'Interior design' 
              },
              { 
                category: 'Residential', 
                image: '/assets/Residential/Residential-1.jpg', 
                title: 'Residences design' 
              },
              { 
                category: 'Commercial', 
                image: '/assets/Commercial/Commercial-1.jpg', 
                title: 'Commercial design' 
              }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(item.category)}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  activeCategory === item.category ? 'ring-2 ring-gray-900' : ''
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Form */}
            <div className="bg-yellow-400 rounded-3xl p-10">
              <h3 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-2">
                Send us your enquiry, get a call back from us
              </h3>
              <p className="text-gray-800 mb-8 text-lg">We'll call you within 2 working days</p>
              <EstimationForm />
              <p className="text-xs text-gray-700 mt-4">By submitting, you agree to be contacted by Foundation Brothers.</p>
            </div>

            {/* Right: Visual + CTA */}
            <div className="bg-gray-100 rounded-3xl overflow-hidden relative group">
              <div className="aspect-[16/10] w-full">
                <img
                  src="/assets/get-free-estimation-of-your-house.jpg"
                  alt="Get free estimation of your house"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Talk to our experts, We offer FREE consultation</h3>
                <p className="text-white/90 mb-8 text-lg">Tell us more about your project, Let us understand your project</p>
                <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors">
                  Get free Estimation of your house
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

// Form component with full functionality
const EstimationForm: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState<"idle"|"sending"|"ok"|"error">("idle");
  const [showToast, setShowToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");
  const [toastType, setToastType] = React.useState<"success"|"error">("success");

  const getSuccessMessage = () => {
    const messages = [
      "🏗️ Amazing! Your project inquiry is on its way!",
      "✨ Fantastic! We're excited to work on your project!",
      "🚀 Brilliant! Our team will contact you soon!",
      "💫 Perfect! Your project details are received!",
      "🌟 Wonderful! We'll get back to you within 2 days!",
      "🎊 Excellent! Your vision is safely delivered!",
      "💎 Outstanding! We're thrilled to build with you!",
      "🔥 Incredible! Your project journey starts now!"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("http://localhost:5174/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to send");
      }
      setStatus("ok");
      setName(""); setEmail(""); setPhone(""); setMessage("");
      
      // Show success toast
      setToastMessage(getSuccessMessage());
      setToastType("success");
      setShowToast(true);
    } catch (err: any) {
      setStatus("error");
      
      // Show error toast
      setToastMessage("Oops! Something went wrong. Please try again.");
      setToastType("error");
      setShowToast(true);
    }
  };

  return (
    <>
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
          duration={4000}
        />
      )}
      <form onSubmit={onSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition"
      />
      <textarea
        rows={5}
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition"
      />
      <button 
        type="submit" 
        disabled={status === "sending"}
        className="w-full bg-gray-900 text-white rounded-xl py-3 font-medium hover:bg-gray-800 disabled:opacity-60 transition"
      >
        {status === "sending" ? "Sending..." : "Submit"}
      </button>
    </form>
    </>
  )
}

export default AllProjects
