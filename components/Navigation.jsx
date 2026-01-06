import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed w-full z-50 py-4 border-b border-gray-800 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-black/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
        >
          Tushar Mamun
        </button>
        
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'education', 'projects', 'skills', 'testimonials', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="nav-link capitalize hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => scrollToSection('contact')}
            className="gradient-bg text-white px-6 py-2 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Hire Me
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-xl p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-black/95 backdrop-blur-md py-4">
          <div className="flex flex-col space-y-4 px-8">
            {['home', 'about', 'education', 'projects', 'skills', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="py-2 border-b border-gray-800 text-left capitalize hover:text-indigo-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation