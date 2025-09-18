import React from 'react'

const About: React.FC = () => {
  const values = [
    { title: 'Integrity', color: 'bg-teal-700', icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-white"><path fill="currentColor" d="M12 2l7 4v6c0 5-3.5 9-7 10c-3.5-1-7-5-7-10V6l7-4z"/></svg>
    ), desc: 'Upholding trust and transparency' },
    { title: 'Innovation', color: 'bg-teal-700', icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-white"><path fill="currentColor" d="M12 2a7 7 0 0 1 7 7c0 2.6-1.4 4.4-3 5.6V18h-8v-3.4C6.4 13.4 5 11.6 5 9a7 7 0 0 1 7-7z"/></svg>
    ), desc: 'Pushing creative boundaries' },
    { title: 'Sustainability', color: 'bg-teal-700', icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-white"><path fill="currentColor" d="M12 2C7 2 3 6 3 11c0 5 4 10 9 11c5-1 9-6 9-11c0-5-4-9-9-9zm0 4c2 0 4 2 4 4c0 3-4 6-4 6s-4-3-4-6c0-2 2-4 4-4z"/></svg>
    ), desc: 'Prioritizing eco-friendly solutions' },
    { title: 'Collaboration', color: 'bg-teal-700', icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-white"><path fill="currentColor" d="M12 12a4 4 0 1 0-4-4a4 4 0 0 0 4 4Zm0 2c-4 0-8 2-8 5v3h16v-3c0-3-4-5-8-5Z"/></svg>
    ), desc: 'Working as a united team' },
    { title: 'Excellence', color: 'bg-teal-700', icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-white"><path fill="currentColor" d="m12 2l2.4 4.9L20 8l-4 3.9L17 18l-5-2.6L7 18l1-6.1L4 8l5.6-1.1L12 2z"/></svg>
    ), desc: 'Striving for top-tier quality' },
  ]

  const leaders = [
    // Co-founders and MDs
    { img: '/assets/co-founder/ER-Aman-Nagar.jpeg', name: 'ER. Aman Nagar', role: 'Co‑Founder & MD' },
    { img: '/assets/co-founder/ER-Shahrukh-Khan.jpg', name: 'ER. Shahrukh Khan', role: 'Co‑Founder & MD' },
    { img: '/assets/co-founder/ER-Ravi-Batra.jpg', name: 'ER. Ravi Batra', role: 'Co‑Founder & MD' },
    // Core leadership team (requested profiles retained)
    { img: '/assets/Aarav-Sharma.jpg', name: 'Aarav Sharma', role: 'Architect' },
    { img: '/assets/Rajeev-Gupta.jpg', name: 'Rajeev Gupta', role: 'Architect' },
    { img: '/assets/Vikram-Singh.jpg', name: 'Vikram Singh', role: 'Site Lead' },
    { img: '/assets/Manish-Kumar.jpg', name: 'Manish Kumar', role: 'Founding Team Member' },
    { img: '/assets/Aditya-Verma.jpg', name: 'Aditya Verma', role: 'Senior Engineer' },
    { img: '/assets/Pradeep-Yadav.jpg', name: 'Pradeep Yadav', role: 'Procurement Lead' },
    { img: '/assets/Ravi-Patel.jpg', name: 'Ravi Patel', role: 'Sr. Supervisor' },
    { img: '/assets/Rohit-Saini.jpg', name: 'Rohit Saini', role: 'Project Engineer' },
    { img: '/assets/Anurag-Saxena.jpg', name: 'Anurag Saxena', role: 'Planning Engineer' },
    { img: '/assets/Gaurav-Puri.jpg', name: 'Gaurav Puri', role: 'Finance Lead' },
    { img: '/assets/Nitin-Rajput.jpg', name: 'Nitin Rajput', role: 'Quality Lead' },
  ]

  return (
    <div>
      {/* Hero Section - Background Image */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] overflow-hidden">
        <img src="/assets/about-us-hero-section.png" alt="About us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container-custom py-24 md:py-32">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">About Us</h1>
            <p className="text-lg md:text-xl text-white/90">We are a design‑first construction company crafting modern, sustainable spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section (same styling as Homepage accomplishments) */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">Our accomplishments</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center">
            <div>
              <div className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight mb-2">120<span className="align-super text-2xl">*</span></div>
              <div className="text-gray-600 text-base md:text-lg">Days Guarantee To Build</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight mb-2">50<span className="text-3xl">+</span></div>
              <div className="text-gray-600 text-base md:text-lg">Design Experts</div>
              </div>
            <div>
              <div className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight mb-2">250<span className="text-3xl">+</span></div>
              <div className="text-gray-600 text-base md:text-lg">Homes Constructed</div>
            </div>
              </div>
            </div>
      </section>

      {/* Mission & Story */}
      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          <div className="rounded-3xl border border-gray-100 shadow-subtle overflow-hidden bg-white">
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img src="/assets/Our-Mission.jpg" alt="Our Mission" className="w-full h-full object-cover" />
                </div>
            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">To deliver innovative, sustainable, and client-centric design solutions that enhance living and working environments.</p>
                </div>
              </div>
          <div className="rounded-3xl border border-gray-100 shadow-subtle overflow-hidden bg-white">
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img src="/assets/Our-Story.jpg" alt="Our Story" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600">Founded in 2015, we’ve grown from a small team into a leading design firm, driven by passion and excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values we hold */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-section-title text-gray-900 mb-10">Values we hold</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <div key={i} className="group perspective-1000">
                <div className="relative h-48 rounded-2xl shadow-subtle transition-transform duration-500 transform-gpu [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className={`absolute inset-0 ${v.color} rounded-2xl flex flex-col items-center justify-center text-white [backface-visibility:hidden]`}>
                    {v.icon}
                    <div className="mt-3 text-lg font-medium">{v.title}</div>
          </div>
                  {/* Back */}
                  <div className="absolute inset-0 rounded-2xl bg-white text-gray-900 p-5 grid place-items-center [transform:rotateY(180deg)] [backface-visibility:hidden] border border-gray-100">
                    <div className="text-center text-sm text-gray-700">{v.desc}</div>
              </div>
            </div>
              </div>
            ))}
          </div>
          </div>
      </section>


      {/* Leadership */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-section-title text-gray-900 mb-8">Leadership</h2>
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-subtle mb-10">
            <img src="/assets/leadership-hero-image.jpg" alt="Leadership" className="w-full h-[320px] md:h-[420px] object-cover" />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {leaders.map((m, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-subtle overflow-hidden">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
              </div>
                <div className="p-5">
                  <div className="text-lg font-medium text-gray-900">{m.name}</div>
                  <div className="text-sm text-gray-600">{m.role}</div>
            </div>
              </div>
            ))}
          </div>
              </div>
      </section>

      {/* Safety Compliance we always follow - moved after Leadership, teal styling */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-section-title text-gray-900 mb-4">Safety Compliance we always follow</h2>
            <p className="text-body-large text-gray-600">We prioritize safety at every stage to ensure a secure and efficient work environment.</p>
            </div>
            
          <div className="marquee marquee-mask">
            <div className="marquee-track gap-6">
              <div className="flex gap-6 px-1 py-2">
                {[
                  { title: 'Safe working environment', icon: 'hardhat' },
                  { title: 'Site inspections', icon: 'checklist' },
                  { title: 'Regular safety audits', icon: 'search' },
                  { title: 'Industry best practices', icon: 'gear' },
                  { title: 'Training Programs', icon: 'book' },
                ].map((card, idx) => (
                  <div key={`tsa-${idx}`} className="min-w-[260px] w-[260px] rounded-2xl border border-teal-700 shadow-subtle bg-teal-700 text-white overflow-hidden">
                    <div className="p-5 h-[150px] grid place-items-center bg-teal-600">
                      {card.icon === 'hardhat' && (
                        <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor"><path d="M19 13V9a7 7 0 0 0-14 0v4a5 5 0 0 0-3 4v2h20v-2a5 5 0 0 0-3-4Zm-10 0V9a5 5 0 0 1 10 0v4H9Z"/></svg>
                      )}
                      {card.icon === 'checklist' && (
                        <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor"><path d="M7 4h10v2H7V4Zm0 4h10v2H7V8Zm0 4h10v2H7v-2Zm-2.5-6l1.5 1.5L8 5.5L6.5 4L4.5 6Zm0 8l1.5 1.5L8 13.5L6.5 12L4.5 14Z"/></svg>
                      )}
                      {card.icon === 'search' && (
                        <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor"><path d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16Zm0 2a6 6 0 1 0 0 12a6 6 0 0 0 0-12Zm9 15l-5-5l1.5-1.5l5 5L19 19Z"/></svg>
                      )}
                      {card.icon === 'gear' && (
                        <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor"><path d="M12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8Zm9 4l2 1l-2 1a8.7 8.7 0 0 1-1 2l1 2l-2 2l-2-1a8.7 8.7 0 0 1-2 1l-1 2h-4l-1-2a8.7 8.7 0 0 1-2-1l-2 1l-2-2l1-2a8.7 8.7 0 0 1-1-2l-2-1l2-1a8.7 8.7 0 0 1 1-2l-1-2l2-2l2 1a8.7 8.7 0 0 1 2-1l1-2h4l1 2a8.7 8.7 0 0 1 2 1l2-1l2 2l-1 2a8.7 8.7 0 0 1 1 2Z"/></svg>
                      )}
                      {card.icon === 'book' && (
                        <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor"><path d="M3 5a3 3 0 0 1 3-3h12v18H6a3 3 0 0 0-3 3V5Zm3-1a1 1 0 0 0-1 1v12a4 4 0 0 1 3-1h9V4H6Z"/></svg>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="text-sm font-medium leading-snug">{card.title}</div>
                    </div>
              </div>
                ))}
            </div>
            
              <div className="flex gap-6 px-1 py-2">
                {[
                  { title: 'Safe working environment', icon: 'hardhat' },
                  { title: 'Site inspections', icon: 'checklist' },
                  { title: 'Regular safety audits', icon: 'search' },
                  { title: 'Industry best practices', icon: 'gear' },
                  { title: 'Training Programs', icon: 'book' },
                ].map((card, idx) => (
                  <div key={`tsb-${idx}`} className="min-w-[260px] w-[260px] rounded-2xl border border-teal-700 shadow-subtle bg-teal-700 text-white overflow-hidden">
                    <div className="p-5 h-[150px] grid place-items-center bg-teal-600">
                      {card.icon === 'hardhat' && (
                        <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor"><path d="M19 13V9a7 7 0 0 0-14 0v4a5 5 0 0 0-3 4v2h20v-2a5 5 0 0 0-3-4Zm-10 0V9a5 5 0 0 1 10 0v4H9Z"/></svg>
                      )}
                      {card.icon === 'checklist' && (
                        <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor"><path d="M7 4h10v2H7V4Zm0 4h10v2H7V8Zm0 4h10v2H7v-2Zm-2.5-6l1.5 1.5L8 5.5L6.5 4L4.5 6Zm0 8l1.5 1.5L8 13.5L6.5 12L4.5 14Z"/></svg>
                      )}
                      {card.icon === 'search' && (
                        <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor"><path d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16Zm0 2a6 6 0 1 0 0 12a6 6 0 0 0 0-12Zm9 15l-5-5l1.5-1.5l5 5L19 19Z"/></svg>
                      )}
                      {card.icon === 'gear' && (
                        <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor"><path d="M12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8Zm9 4l2 1l-2 1a8.7 8.7 0 0 1-1 2l1 2l-2 2l-2-1a8.7 8.7 0 0 1-2 1l-1 2h-4l-1-2a8.7 8.7 0 0 1-2-1l-2 1l-2-2l1-2a8.7 8.7 0 0 1-1-2l-2-1l2-1a8.7 8.7 0 0 1 1-2l-1-2l2-2l2 1a8.7 8.7 0 0 1 2-1l1-2h4l1 2a8.7 8.7 0 0 1 2 1l2-1l2 2l-1 2a8.7 8.7 0 0 1 1 2Z"/></svg>
                      )}
                      {card.icon === 'book' && (
                        <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor"><path d="M3 5a3 3 0 0 1 3-3h12v18H6a3 3 0 0 0-3 3V5Zm3-1a1 1 0 0 0-1 1v12a4 4 0 0 1 3-1h9V4H6Z"/></svg>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="text-sm font-medium leading-snug">{card.title}</div>
              </div>
            </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About