import React from 'react'
import logo from './assets/logo.png'
import phoneImg from './assets/phoneImg.png'
import aiIcon from './assets/aiVector.svg'
import mobileIcon from './assets/phoneVector.svg'
import designIcon from './assets/designVector.svg'
import aiIcon2 from './assets/aiImg.png'
import dataIcon2 from './assets/data.png'
import peopleIcon2 from './assets/people.png'
import techBg from './assets/techBg.png'

const App = () => {
  return (
    <>
      <div className="bg-[#0C0C0C] text-white">
        {/* Header */}
        <header className="flex justify-between items-center md:px-20 px-10 py-6">
          <div className="flex items-center">
            <img src={logo} alt="CN Logo" className="w-16 h-16" />
          </div>
          <nav>
            <a href="#contact" className="text-white hover:text-gray-300 transition-colors text-2xl">
              Contact
            </a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center px-8 md:py-20 py-10">
          <div className="text-center max-w-5xl">
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              AI-powered mobile apps for<br className='md:block hidden' />
              <span >a smarter future</span>
            </h1>
            <p className="text-xl md:text-[21px] mb-4 text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Campus Next develops next-generation mobile apps, fusing advanced<br className='md:block hidden' />
              AI with intuitive, human-centered design.
            </p>
          </div>
        </main>
      </div>

      {/* What We Do Section */}
      <section className="bg-[#1A1A1A] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-8xl font-bold uppercase mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-300 text-center">
              We craft sophisticated mobile experiences that blend cutting- <br />edge artificial intelligence with timeless design principles.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Integration Card */}
            <div className="bg-[#0D0D0D] rounded-xl p-8 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6">
                <img src={aiIcon} alt="" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI Integration</h3>
              <p className="text-[#4B5563] leading-relaxed">
                Seamlessly integrate artificial intelligence into mobile applications that think, learn, and adapt to user behavior.
              </p>
            </div>

            {/* Mobile Excellence Card */}
            <div className="bg-[#0D0D0D] rounded-xl p-8 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6">
                <img src={mobileIcon} alt="" />
              </div>
              <h3 className="text-xl font-bold mb-4">Mobile Excellence</h3>
              <p className="text-[#4B5563] leading-relaxed">
                Create native and cross-platform applications that deliver exceptional performance and user experience.
              </p>
            </div>

            {/* Design Systems Card */}
            <div className="bg-[#0D0D0D] rounded-xl p-8 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6">
                <img src={designIcon} alt="" />
              </div>
              <h3 className="text-xl font-bold mb-4">Design Systems</h3>
              <p className="text-[#4B5563] leading-relaxed">
                Develop comprehensive design systems that ensure consistency and scalability across all digital touchpoints.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className='bg-[#0D0D0D] text-white py-20'>
        <div className='mx-auto px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl md:text-[100px] md:text-5xl font-bold'>
              Future-Ready Solutions
            </h2>
          </div>
          <img src={phoneImg} alt="" />
          <p className="text-xl md:text-[20px] mb-4 text-gray-300 leading-relaxed max-w-3xl mx-auto text-center">
            Every application we create represents the perfect harmony between intelligent functionality and sophisticated design, setting new standards for mobile innovation.
          </p>
        </div>
      </section>

      {/* Technology Meets Intuition Section */}
      <section className="relative h-[475px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={techBg} alt="Technology Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-[475px] px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent mb-8 leading-tight" style={{
              WebkitTextStroke: '0.5px white',
              textStroke: '0.5px white',
              color: 'transparent'
            }}>
              Where Technology
              Meets Intuition
            </h1>
          </div>
        </div>
      </section>

      {/* HOW Section */}
      <section className="bg-[#1F1F1F] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-8xl font-bold uppercase mb-6">
              How?
            </h2>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* AI at the core */}
            <div className="text-left">
              <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                <img src={aiIcon2} alt="" />
              </div>
              <h3 className="text-4xl font-bold mb-4">AI, at the core.</h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                Artificial intelligence is the engine of our innovation, making our applications smarter, faster, and more intuitive for everyone.
              </p>
            </div>

            {/* Guided by Data */}
            <div className="text-left">
              <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                <img src={dataIcon2} alt="" />
              </div>
              <h3 className="text-4xl font-bold mb-4">Guided by Data.</h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                We leverage data to inform every decision, refine our products, and unlock sustainable, meaningful growth for our partners.
              </p>
            </div>

            {/* Made for People */}
            <div className="text-left">
              <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                <img src={peopleIcon2} alt="" />
              </div>
              <h3 className="text-4xl font-bold mb-4">Made for People.</h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                Our technology feels human. Every feature is designed to be simple, genuinely useful, and a delight to interact with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="bg-[#1A1A1A] text-white pt-16 pb-6">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-[#9CA3AF] mb-8">
            Let's build the future together.
          </p>

          <div className="space-y-2 mb-12">
            <p className="text-white text-lg">
              hello@campusnext.com
            </p>
            <p className="text-[#9CA3AF] text-lg">
              123 Innovation Drive, Tech City, 90210
            </p>
          </div>

        </div>
        <div className="border-t border-gray-600 pt-6">
          <p className="text-gray-400 text-sm text-center">
            © 2025 Campus Next. All rights reserved.
          </p>
        </div>
      </section>
    </>
  )
}

export default App