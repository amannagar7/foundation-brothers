import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Toast from '../components/Toast'
import EnquiryForm from '../components/EnquiryForm'

const Home: React.FC = () => {
  const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);

  return (
    <div>
      {/* Hero Section - Apple-Like Split Design */}
      <section className="min-h-[70vh] sm:min-h-screen bg-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gray-100 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gray-100 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gray-100 rounded-full opacity-10"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 min-h-[60vh] sm:min-h-screen items-center py-12 sm:py-20">
            
            {/* Left Side - Client Relaxation */}
            <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
              <div className="relative group mb-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="w-64 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10 group-hover:shadow-3xl group-hover:shadow-gray-900/20 transition-all duration-500 group-hover:-translate-y-2">
                  <img 
                    src="/assets/hero-section-man-happy-sitting.jpg" 
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
            <div className="lg:col-span-1 flex flex-col items-center text-center px-2">
              <div className="max-w-2xl">
                <div className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-6 animate-fade-in-up">
                  Welcome to Excellence
                </div>
                <h1 className="text-4xl lg:text-6xl font-light text-gray-900 leading-tight mb-2 sm:mb-4 animate-fade-in-up">
                  Where Dreams
                </h1>
                <h2 className="text-5xl lg:text-7xl font-light text-gray-900 leading-tight mb-2 sm:mb-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <span className="font-medium bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">Meet Reality</span>
                </h2>
                <h3 className="text-4xl lg:text-6xl font-light text-gray-900 leading-tight animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  Foundation Brothers
                </h3>
              </div>
            </div>

            {/* Right Side - Professional Execution */}
            <div className="lg:col-span-1 flex flex-col items-center lg:items-end">
              <div className="relative group mb-6 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <div className="w-64 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10 group-hover:shadow-3xl group-hover:shadow-gray-900/20 transition-all duration-500 group-hover:-translate-y-2">
                  <img 
                    src="/assets/engineering-people-happy.jpg" 
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

        {/* Floating CTA - Bottom Left (Redesigned) */}
        <div className="fixed bottom-6 left-6 z-40 hidden md:block animate-fade-in-up" style={{animationDelay: '1s'}}>
          <button 
            onClick={() => setIsEnquiryFormOpen(true)}
            className="group"
          >
            <div className="flex items-center gap-3 bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-gray-900/10 p-3 pr-4 transition-all duration-300 group-hover:shadow-3xl group-hover:-translate-y-0.5">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                <img src="/assets/bottom-corner-cta.avif" alt="Experts" className="w-full h-full object-cover" />
                <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <div className="mr-2">
                <div className="text-[13px] font-medium text-gray-900 leading-tight">Book FREE Expert</div>
                <div className="text-[13px] font-medium text-gray-900 leading-tight">Consultation</div>
              </div>
              <div className="ml-auto">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white group-hover:bg-black transition-colors">→</span>
              </div>
            </div>
          </button>
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
                    src="/assets/indian-family-happy-with-home.jpg" 
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

      {/* Offerings - Auto-scrolling Cards (Apple-like) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-gray-900 mb-4 text-balance">We’re a leading construction company in Rajasthan</h2>
            <p className="text-lg text-gray-600">Our offerings include:</p>
          </div>

          {/* Marquee wrapper */}
          <div className="marquee marquee-mask">
            <div className="marquee-track gap-6">
              {/* Track 1 */}
              <div className="flex gap-6 px-1 py-2">
                {[
                  { title: 'Construction & Management', img: '/assets/construction-and-management.jpg' },
                  { title: 'Commercial Design', img: '/assets/commercial-design.jpg' },
                  { title: 'Interior Design & Construction', img: '/assets/interior-design-and-construction.jpg' },
                  { title: 'Home Design & Construction', img: '/assets/home-design-and-construction.jpg' },
                ].map((card, idx) => (
                  <div key={`a-${idx}`} className="min-w-[300px] w-[300px] bg-white rounded-2xl border border-gray-100 shadow-subtle overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="p-5">
                      <h3 className="text-xl font-light text-gray-900 mb-4 leading-snug">{card.title}</h3>
                    </div>
                    <div className="h-[200px] overflow-hidden">
                      <img src={card.img} alt={card.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-5">
                      <span className="text-sm font-medium text-gray-900 cursor-default select-none">Such projects →</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Track 2 (duplicate for seamless loop) */}
              <div className="flex gap-6 px-1 py-2">
                {[
                  { title: 'Construction & Management', img: '/assets/construction-and-management.jpg' },
                  { title: 'Commercial Design', img: '/assets/commercial-design.jpg' },
                  { title: 'Interior Design & Construction', img: '/assets/interior-design-and-construction.jpg' },
                  { title: 'Home Design & Construction', img: '/assets/home-design-and-construction.jpg' },
                ].map((card, idx) => (
                  <div key={`b-${idx}`} className="min-w-[300px] w-[300px] bg-white rounded-2xl border border-gray-100 shadow-subtle overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="p-5">
                      <h3 className="text-xl font-light text-gray-900 mb-4 leading-snug">{card.title}</h3>
                    </div>
                    <div className="h-[200px] overflow-hidden">
                      <img src={card.img} alt={card.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-5">
                      <span className="text-sm font-medium text-gray-900 cursor-default select-none">Such projects →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accomplishments Section - Apple-Like (placed directly after offerings) */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight animate-fade-in-up">Our accomplishments</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center">
            {/* Stat 1 */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight mb-2">120<span className="align-super text-2xl">*</span></div>
              <div className="text-gray-600 text-base md:text-lg">Days Guarantee To Build</div>
            </div>

            {/* Stat 2 */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight mb-2">50<span className="text-3xl">+</span></div>
              <div className="text-gray-600 text-base md:text-lg">Design Experts</div>
            </div>

            {/* Stat 3 */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight mb-2">250<span className="text-3xl">+</span></div>
              <div className="text-gray-600 text-base md:text-lg">Homes Constructed</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Projects - Tabbed Gallery (Images not clickable) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight mb-6">Latest Projects</h2>
            <TabsGallery />
          </div>
        </div>
      </section>

      {/* BIG BLOCK START: Trust + Transparency Group */}
      {/* Trust + Transparency (Dark hero for why choose) */}
      <section className="bg-black text-white py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/60 mb-5">Why choose Foundation Brothers</div>
              <h3 className="text-5xl md:text-6xl font-extralight tracking-tight leading-[1.05] mb-4">
                <span className="text-yellow-300">Trust</span> +<br />
                <span className="text-yellow-300">Transparency</span>
              </h3>
              <p className="text-3xl md:text-4xl font-light tracking-tight mb-8">Guaranteed</p>
              <p className="text-white/60 text-sm md:text-base">See how we achieve our promise ↓</p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-3xl bg-yellow-300/10" />
              <img src="/assets/Trust.png" alt="Trust and transparency" className="relative w-2/3 max-w-md md:max-w-lg mx-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Track real-time expenses & work progress */}
      <section className="bg-black text-white py-24">
        <div className="container-custom">
          <h3 className="text-3xl md:text-4xl font-light text-center mb-3">Track real-time expenses & work progress</h3>
          <p className="text-center text-white/70 mb-14">with our personalised mobile application</p>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-8 relative overflow-hidden grid sm:grid-cols-2 gap-6 items-start">
              <div>
                <div className="text-yellow-300 text-2xl font-light mb-2">Get daily updates</div>
                <div className="text-yellow-300 text-2xl font-light">straight from the site</div>
              </div>
              <div className="h-[220px] w-full overflow-hidden rounded-2xl">
                <img src="/assets/daily-updates.avif" alt="Daily updates" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            {/* Card 2 */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-8 relative overflow-hidden grid sm:grid-cols-2 gap-6 items-start">
              <div>
                <div className="text-yellow-300 text-2xl font-light mb-2">Track every transaction</div>
                <div className="text-yellow-300 text-2xl font-light">at your finger tip</div>
              </div>
              <div className="h-[220px] w-full overflow-hidden rounded-2xl">
                <img src="/assets/Track-every.avif" alt="Track every expense" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency in real-time */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <h3 className="text-3xl md:text-4xl font-light text-center mb-14">Transparency in real-time</h3>
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Dedicated PM */}
            <div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden grid sm:grid-cols-2 items-start">
              <div className="p-8 flex items-center">
                <div>
                  <h4 className="text-2xl font-light mb-4">Dedicated Project Manager</h4>
                  <p className="text-white/80">Choose us and get more than just a construction team; gain a dedicated project manager overseeing every detail from start to finish.</p>
                </div>
              </div>
              <div className="p-6">
                <div className="h-[220px] md:h-[260px] w-full overflow-hidden rounded-2xl">
                  <img src="/assets/Dedicated-Project-Manager.jpg" alt="Dedicated project manager" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
            {/* Cameras / monitor */}
            <div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden grid sm:grid-cols-2 items-start">
              <div className="p-8 flex items-center">
                <div>
                  <h4 className="text-2xl font-light mb-4">Track your construction progress in real‑time</h4>
                  <p className="text-white/80">24/7 camera surveillance and site monitoring right on your phone.</p>
                </div>
              </div>
              <div className="p-6">
                <div className="h-[220px] md:h-[260px] w-full overflow-hidden rounded-2xl">
                  <img src="/assets/Track-your-construction.avif" alt="Monitor construction" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Save on brokerage */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-light mb-6">Save on brokerage and extra fees</h3>
              <p className="text-white/80 text-lg mb-8">View our sample invoice to know how you can save money on extra brokerage.</p>
              <button className="btn-primary">Download Now</button>
            </div>
            <div className="p-6">
              <div className="h-[260px] md:h-[320px] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40 relative">
                <img src="/assets/save-on-brokerage.avif" alt="Save on brokerage" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BIG BLOCK END */}

      {/* How we turn your dreams into reality */}
      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Vertical listicle with endless scroll */}
          <div>
            <h2 className="text-section-title text-gray-900 mb-6 text-balance">How we turn your dreams into reality</h2>
            <div className="vmarquee vmarquee-mask rounded-3xl border border-gray-100 shadow-subtle h-[420px] md:h-[500px] lg:h-[520px]">
              <div className="vmarquee-track" style={{animationDuration: '26s'}}>
                {/* Track A */}
                <div className="space-y-4 p-3">
                  {[
                    {no:'01', title:'Client Consultation', sub:'Understanding your vision', img:'/assets/dreams/client-consultation.jpg'},
                    {no:'02', title:'Feasibility Study', sub:'Site and budget alignment', img:'/assets/dreams/feasibility-study.jpg'},
                    {no:'03', title:'Cost Estimation', sub:'Crystal-clear budgeting', img:'/assets/dreams/cost-estimation.jpg'},
                    {no:'04', title:'Material Sourcing', sub:'Trusted suppliers only', img:'/assets/dreams/material-sourcing.jpg'},
                    {no:'05', title:'Project Design', sub:'Plans that inspire', img:'/assets/dreams/project-design.jpg'},
                    {no:'06', title:'Construction Scheduling', sub:'Timeboxed and realistic', img:'/assets/dreams/construction-scheduling.jpg'},
                    {no:'07', title:'Project Finalising', sub:'Construction testing', img:'/assets/dreams/project-finalising.jpg'},
                    {no:'08', title:'Client Walkthrough', sub:'Project handover', img:'/assets/dreams/client-walkthrough.jpg'},
                    {no:'09', title:'Client Survey', sub:'Post‑construction services', img:'/assets/dreams/client-survey.jpg'},
                    {no:'10', title:'Free Maintainance', sub:'Complimentary care window', img:'/assets/dreams/free-maintanance.jpg'},
                  ].map((step) => (
                    <div key={step.no} className="group grid grid-cols-[56px_1fr] gap-3 items-center bg-white rounded-2xl border border-gray-100 p-3 hover:shadow-lg transition-all duration-300">
                      <div className="h-14 w-14 rounded-xl bg-yellow-300 text-gray-900 font-semibold flex items-center justify-center">
                        {step.no}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="min-w-[88px] w-[88px] h-[56px] rounded-xl overflow-hidden">
                          <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="text-lg font-medium text-gray-900 leading-tight">{step.title}</div>
                          <div className="text-sm text-gray-500">{step.sub}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Track B duplicate */}
                <div className="space-y-4 p-3">
                  {[
                    {no:'01', title:'Client Consultation', sub:'Understanding your vision', img:'/assets/dreams/client-consultation.jpg'},
                    {no:'02', title:'Feasibility Study', sub:'Site and budget alignment', img:'/assets/dreams/feasibility-study.jpg'},
                    {no:'03', title:'Cost Estimation', sub:'Crystal-clear budgeting', img:'/assets/dreams/cost-estimation.jpg'},
                    {no:'04', title:'Material Sourcing', sub:'Trusted suppliers only', img:'/assets/dreams/material-sourcing.jpg'},
                    {no:'05', title:'Project Design', sub:'Plans that inspire', img:'/assets/dreams/project-design.jpg'},
                    {no:'06', title:'Construction Scheduling', sub:'Timeboxed and realistic', img:'/assets/dreams/construction-scheduling.jpg'},
                    {no:'07', title:'Project Finalising', sub:'Construction testing', img:'/assets/dreams/project-finalising.jpg'},
                    {no:'08', title:'Client Walkthrough', sub:'Project handover', img:'/assets/dreams/client-walkthrough.jpg'},
                    {no:'09', title:'Client Survey', sub:'Post‑construction services', img:'/assets/dreams/client-survey.jpg'},
                    {no:'10', title:'Free Maintainance', sub:'Complimentary care window', img:'/assets/dreams/free-maintanance.jpg'},
                  ].map((step) => (
                    <div key={`b-${step.no}`} className="group grid grid-cols-[56px_1fr] gap-3 items-center bg-white rounded-2xl border border-gray-100 p-3 hover:shadow-lg transition-all duration-300">
                      <div className="h-14 w-14 rounded-xl bg-yellow-300 text-gray-900 font-semibold flex items-center justify-center">
                        {step.no}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="min-w-[88px] w-[88px] h-[56px] rounded-xl overflow-hidden">
                          <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="text-lg font-medium text-gray-900 leading-tight">{step.title}</div>
                          <div className="text-sm text-gray-500">{step.sub}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Right: Creative phases showcase */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-black text-white rounded-3xl p-6 overflow-hidden relative card-hover">
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-300/10 rounded-full blur-3xl"></div>
                <div className="text-2xl font-light mb-4">Phase - 1</div>
                <div className="h-56 rounded-2xl overflow-hidden border border-white/10">
                  <img src="/assets/dreams/cost-estimation.jpg" alt="Phase 1" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-subtle card-hover">
                <div className="text-2xl font-light mb-4">Phase - 2</div>
                <div className="h-56 rounded-2xl overflow-hidden">
                  <img src="/assets/dreams/client-consultation.jpg" alt="Phase 2" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="rounded-3xl p-6 bg-gray-900 text-white grid sm:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <div className="text-2xl font-light mb-2">Phase - 3</div>
                <p className="text-white/80">Weekly video updates, on‑site walkthroughs and milestone reviews keep you fully in control.</p>
              </div>
              <a href="#contact" className="btn-primary">Book FREE Consultation</a>
            </div>
          </div>
        </div>
      </section>

      {/* Extra benefits */}
      <section className="py-24 bg-black text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-light text-center tracking-tight mb-12">Extra benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-colors duration-300 animate-fade-in-up">
              <div className="mb-6 flex justify-center">
                {/* Key / delivery icon */}
                <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="8" y="48" width="56" height="16" rx="8" fill="#374151"/>
                  <rect x="16" y="64" width="40" height="8" rx="4" fill="#1F2937"/>
                  <circle cx="62" cy="34" r="12" fill="#FDE68A" stroke="#F59E0B" strokeWidth="3"/>
                  <rect x="30" y="30" width="25" height="8" rx="4" fill="#F59E0B"/>
                  <rect x="45" y="30" width="6" height="18" rx="2" fill="#F59E0B"/>
                </svg>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-medium">On time delivery,</div>
                <div className="text-lg font-medium">without fail</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-colors duration-300 animate-fade-in-up" style={{animationDelay:'0.05s'}}>
              <div className="mb-6 flex justify-center">
                {/* Wrench & screwdriver */}
                <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M50 22a12 12 0 1010 10l12 12-8 8-12-12A12 12 0 0150 22z" fill="#9CA3AF"/>
                  <rect x="20" y="56" width="36" height="8" rx="4" transform="rotate(-45 20 56)" fill="#F59E0B"/>
                  <rect x="30" y="46" width="8" height="20" rx="4" transform="rotate(-45 30 46)" fill="#FDE68A"/>
                </svg>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-medium">2 years</div>
                <div className="text-lg font-medium">free maintenance</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-colors duration-300 animate-fade-in-up" style={{animationDelay:'0.1s'}}>
              <div className="mb-6 flex justify-center">
                {/* Rupee with sheet */}
                <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M46 58c-10 0-18-8-18-18h20" stroke="#9CA3AF" strokeWidth="6" strokeLinecap="round"/>
                  <path d="M28 28h24M28 38h24" stroke="#9CA3AF" strokeWidth="6" strokeLinecap="round"/>
                  <rect x="50" y="46" width="24" height="24" rx="6" fill="#FDE68A" stroke="#F59E0B" strokeWidth="2"/>
                  <path d="M56 54h12M56 60h12M56 66h8" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-medium">Accurate</div>
                <div className="text-lg font-medium">budget estimation</div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-colors duration-300 animate-fade-in-up" style={{animationDelay:'0.15s'}}>
              <div className="mb-6 flex justify-center">
                {/* Bricks with rupee */}
                <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="18" y="50" width="24" height="12" rx="2" fill="#374151"/>
                  <rect x="28" y="38" width="24" height="12" rx="2" fill="#1F2937"/>
                  <rect x="44" y="54" width="24" height="12" rx="2" fill="#4B5563"/>
                  <path d="M20 56h6M30 44h6M46 60h6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 36h20" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-medium">Materials</div>
                <div className="text-lg font-medium">at wholesale rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free estimation enquiry */}
      <section className="section-padding pt-20 pb-24 bg-subtle">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Form */}
          <div className="rounded-3xl border border-gray-100 bg-white shadow-subtle p-10 animate-fade-in-up">
            <h3 className="text-4xl font-light text-gray-900 tracking-tight leading-tight mb-2">Send us your enquiry</h3>
            <p className="text-gray-600 mb-8">We’ll call you within 2 working days</p>
            <EstimationForm />
            <p className="text-xs text-gray-500 mt-4">By submitting, you agree to be contacted by Foundation Brothers.</p>
          </div>

          {/* Right: Visual + CTA */}
          <div className="rounded-3xl border border-gray-100 overflow-hidden relative bg-white group animate-fade-in-up self-center" style={{animationDelay:'0.1s'}}>
            <div className="aspect-[16/10] w-full">
              <ResponsiveEstimationImage />
            </div>
            <div className="absolute inset-0 grid place-items-center px-6">
              <button className="px-5 py-2.5 rounded-full bg-white/90 text-gray-900 backdrop-blur font-medium border border-gray-200 shadow-subtle hover:bg-white transition-colors">
                Get free estimation of your house
              </button>
            </div>
          </div>
        </div>
      </section> 
      
      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">A few things you may want to ask us</h2>
          </div>
          <FAQSection />
        </div>
      </section>

      {/* Enquiry Form Modal */}
      <EnquiryForm 
        isOpen={isEnquiryFormOpen} 
        onClose={() => setIsEnquiryFormOpen(false)} 
      />
    </div>
  )
}

export default Home

// Tabs Gallery Component
const TabsGallery: React.FC = () => {
  const tabs = ['Architecture', 'Interior', 'Residential', 'Commercial'] as const
  type Tab = typeof tabs[number]
  const [active, setActive] = useState<Tab>('Architecture')

  const imagesByTab: Record<Tab, string[]> = useMemo(() => ({
    Architecture: [
      '/assets/Architecture/Architecture-1.jpg',
      '/assets/Architecture/Architecture-2.jpg',
      '/assets/Architecture/Architecture-3.jpg',
      '/assets/Architecture/Architecture-4.jpg',
      '/assets/Architecture/Architecture-5.jpg',
      '/assets/Architecture/Architecture-6.jpg',
    ],
    Interior: [
      '/assets/interior/interior-1.jpg',
      '/assets/interior/interior-2.jpg',
      '/assets/interior/interior-3.jpg',
      '/assets/interior/interior-4.jpg',
      '/assets/interior/interior-5.jpg',
      '/assets/interior/interior-6.jpg',
    ],
    Residential: [
      '/assets/Residential/Residential-1.jpg',
      '/assets/Residential/Residential-2.jpg',
      '/assets/Residential/Residential-3.jpg',
      '/assets/Residential/Residential-4.jpg',
      '/assets/Residential/Residential-5.jpg',
      '/assets/Residential/Residential-6.jpg',
    ],
    Commercial: [
      '/assets/Commercial/Commercial-1.jpg',
      '/assets/Commercial/Commercial-2.jpg',
      '/assets/Commercial/Commercial-3.jpg',
      '/assets/Commercial/Commercial-4.jpg',
    ],
  }), [])

  const titleFromPath = (path: string) => {
    const file = path.split('/').pop() || ''
    const name = file.replace(/\.[^.]+$/, '')
    return name
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, (m) => m.toUpperCase())
  }

  const activeImages = imagesByTab[active]

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 border ${
              active === tab
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-900 border-gray-200 hover:border-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid (images not clickable) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeImages.map((src, idx) => (
          <div key={idx} className="rounded-3xl overflow-hidden shadow-subtle border border-gray-100 group">
            <div className="relative h-[240px] md:h-[280px] lg:h-[320px] overflow-hidden">
              <img src={src} alt={`${active} ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
              {/* Top-left pill tag */}
              <div className="absolute top-4 left-4 bg-white/90 text-gray-900 text-xs font-medium px-3 py-1 rounded-full shadow-sm backdrop-blur">
                {active}
              </div>
              {/* Bottom overlay with title and city */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="text-white text-base font-medium leading-tight">{titleFromPath(src)}</div>
                <div className="text-white/80 text-xs mt-1">Rajasthan</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// FAQ Section
type FaqItem = { q: string; a: string }
type FaqCategory = 'Offerings' | 'Process' | 'Tracking'

const FAQSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FaqCategory>('Offerings')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const data: Record<FaqCategory, FaqItem[]> = {
    Offerings: [
      {
        q: 'What exactly does Foundation Brothers handle for me?',
        a: 'Everything from soil testing to keys in hand. We design, procure materials at negotiated rates, execute with a dedicated PM, and keep you updated daily. You focus on decisions; we handle the grind.'
      },
      {
        q: 'Can you work with my architect or existing plan?',
        a: 'Yes. We happily collaborate with your architect or adapt your existing drawings. Our engineering team validates structure, optimizes BOQs, and prevents costly rework before execution starts.'
      },
      {
        q: 'Do you take small renovations as well?',
        a: 'We do—from kitchen upgrades to a full home facelift. The same project discipline applies: scope, timeline, and budget visibility so smaller jobs don’t spiral.'
      },
      {
        q: 'How do you price materials—cheap or premium?',
        a: 'Transparent tiers. We propose two to three curated options for each category (cement, steel, tiles, fixtures) and lock them in writing. No bait-and-switch, no vendor kickbacks.'
      }
    ],
    Process: [
      {
        q: 'What happens in the first 2 weeks after I contact you?',
        a: 'Day 1–3: requirement mapping and site visit. Day 4–7: feasibility + concept. Day 8–10: itemized estimate and timeline. Day 11–14: design freeze and contract sign-off.'
      },
      {
        q: 'Who is my single point of contact?',
        a: 'A dedicated Project Manager based in Jaipur, backed by a site engineer. Your PM is responsible for timelines, cost adherence, and weekly review calls.'
      },
      {
        q: 'How do you guarantee timelines?',
        a: 'We plan buffers at critical stages, sequence vendors early, and release materials just-in-time. Delays are flagged in the app with a recovery plan—not discovered at handover.'
      },
      {
        q: 'Can I customize mid-project?',
        a: 'Of course. The app raises a Change Request with cost/time impact so you can decide with full clarity. No hidden surprises.'
      }
    ],
    Tracking: [
      {
        q: 'How do I see where my money is going?',
        a: 'Every bill is uploaded with vendor name, rate, and quantity. You can audit the running BOQ anytime and export it for your records.'
      },
      {
        q: 'Do I get photo/video proof of progress?',
        a: 'Yes—daily photos, weekly video walkthroughs, and milestone checklists signed by the site engineer. Major pours and structural work are time‑stamped.'
      },
      {
        q: 'What about on‑site safety and compliance?',
        a: 'We enforce PPE, barricading, and debris management. Mandatory checklist verification before each stage ensures compliance with local norms.'
      },
      {
        q: 'If I am traveling, can my family review decisions?',
        a: 'Add family members to the app with approval rights. They can comment, approve selections, and download documents without chasing WhatsApp threads.'
      }
    ]
  }

  const tabs: FaqCategory[] = ['Offerings', 'Process', 'Tracking']
  const items = data[activeTab]

  return (
    <div className="rounded-3xl border border-gray-100 bg-white shadow-subtle p-4 md:p-6">
      {/* Tabs */}
      <div className="grid grid-cols-3 gap-3 mb-4 md:mb-6">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => { setActiveTab(t); setOpenIndex(0) }}
            className={`rounded-2xl px-4 py-3 text-sm md:text-base border transition-colors ${
              activeTab === t ? 'bg-black text-white border-black' : 'bg-white text-gray-900 border-gray-200 hover:border-gray-300'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="divide-y divide-gray-100">
        {items.map((it, idx) => {
          const open = openIndex === idx
          return (
            <div key={idx} className="py-4 md:py-5">
              <button
                onClick={() => setOpenIndex(open ? null : idx)}
                className="w-full flex items-start justify-between text-left gap-4"
              >
                <span className="text-lg md:text-xl text-gray-900 leading-snug">{it.q}</span>
                <span className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border ${open ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-300'} transition`}>
                  {open ? '−' : '+'}
                </span>
              </button>
              <div className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'} overflow-hidden`}>
                <div className="text-gray-600 text-base leading-relaxed pr-2">
                  {it.a}
                </div>
              </div>
            </div>
          )
        })}
      </div>
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
      "🏠 Awesome! Your dream home inquiry is on its way!",
      "✨ Fantastic! We're excited to help build your vision!",
      "🚀 Brilliant! Our experts will contact you soon!",
      "💫 Perfect! Your estimation request is received!",
      "🌟 Wonderful! We'll get back to you within 2 days!",
      "🎊 Excellent! Your project details are safely delivered!",
      "💎 Outstanding! We're thrilled to work with you!",
      "🔥 Incredible! Your home journey starts now!"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
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

// Responsive image
const ResponsiveEstimationImage: React.FC = () => {
  return (
    <img
      src="/assets/get-free-estimation-of-your-house.jpg"
      alt="Get free estimation of your house"
      className="w-full h-full object-cover"
    />
  )
}
