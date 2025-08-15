import Potfolio from './Potfolio'
import About from './About'
import  Contact  from './Contact'
import { Link } from 'react-router-dom'
import setup from '../assets/img/PortfolioImg/Setup.jpg'

function Hero() {
    
  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-30"></div>
        <img
          src={setup}
          alt="Wedding videography background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in-up">
        <h1 className="font-serif font-black text-5xl md:text-7xl text-gray-800 mb-6 leading-tight">
          Crafting Timeless
          <span className="block text-purple-600">Memories</span>
          <span className="block text-4xl md:text-5xl font-normal">Through the Lens</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Elegant videography for your most cherished moments. Your story, beautifully told.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href='https://www.instagram.com/anurag_video_mixing_zone?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
            target='_blank'
          >
            View Our Work
          </a>

          <a href='https://www.instagram.com/anu_pixelverse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
            variant="outline"
            size="lg"
            className="border-gray-300 text-gray-700 hover:bg-gray-500 hover:text-white transition-all duration-200 px-8 py-4 text-lg flex items-center gap-2 bg-transparent"
            target='_blank'
          >
            Watch Reel
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    <Potfolio/>
    <About/>
    <Contact/>
    </>
  )
}

export default Hero