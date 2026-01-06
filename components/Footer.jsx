import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const socialLinks = [
    {
      icon: 'fab fa-linkedin-in',
      url: 'https://www.linkedin.com/in/tusharmamun',
      color: 'hover:text-blue-500'
    },
    {
      icon: 'fab fa-github',
      url: 'https://github.com/TusharMamun',
      color: 'hover:text-gray-300'
    },
    {
      icon: 'fab fa-whatsapp',
      url: 'https://wa.me/your-number',
      color: 'hover:text-green-500'
    },
    {
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/tusharmamun',
      color: 'hover:text-blue-400'
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-8 border-t border-gray-800 bg-black/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand and Description */}
          <motion.div 
            className="mb-6 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button 
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform mb-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Tushar Mamun
            </motion.button>
            <p className="text-gray-400">Full-Stack Developer & UI/UX Designer</p>
            <p className="text-gray-500 text-sm mt-1">Building digital experiences with modern technologies</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center gap-6">
              {['About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors ${social.color}`}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="mb-4 md:mb-0">
              &copy; {currentYear} Tushar Mamun. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4">
              <span>Made with</span>
              <motion.i 
                className="fas fa-heart text-red-500"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.i>
              <span>and</span>
              <div className="flex items-center space-x-1">
                <i className="fab fa-react text-blue-400"></i>
                <span>Next.js</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full gradient-bg text-white shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <i className="fas fa-arrow-up"></i>
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer