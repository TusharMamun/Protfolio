import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="pt-24 pb-16 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center px-3 py-1 rounded-full bg-gray-900/50 border border-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
              <span className="text-sm">Available for opportunities</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="block">Crafting</span>
              <span className="block gradient-text">Scalable Full-Stack</span>
              <span className="block">Solutions</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I'm <span className="font-semibold text-white">Tushar Mamun</span>, a passionate Full-Stack Developer specializing in <span className="font-semibold text-white">MERN Stack & Next.js</span>. I build high-performance web applications with cutting-edge technologies.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button 
                onClick={() => scrollToSection('contact')}
                className="gradient-bg text-white font-medium py-3 px-8 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Let's Connect
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="border border-gray-700 text-white font-medium py-3 px-8 rounded-full hover:bg-gray-900 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </button>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="flex flex-wrap gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">4+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5★</div>
                <div className="text-gray-400">Client Rating</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Profile Image */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Floating Background Elements */}
              <motion.div 
                className="absolute -top-6 -left-6 w-64 h-64 rounded-full gradient-bg opacity-20 blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full bg-purple-500 opacity-20 blur-3xl"
                animate={{ 
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Profile Container */}
              <motion.div 
                className="relative glass-card p-2 rounded-2xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Profile Image */}
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-gray-800">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-900/50 to-purple-900/50 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-20"></div>
                    <div className="text-center relative z-10">
                      <div className="w-48 h-48 rounded-full mx-auto mb-4 overflow-hidden border-4 border-gray-700">
                        <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
                          <i className="fas fa-code text-6xl text-gray-300"></i>
                        </div>
                      </div>
                      <div className="gradient-text font-bold text-xl">Tushar Mamun</div>
                      <div className="text-gray-400">Full-Stack Developer</div>
                    </div>
                  </div>
                </div>
                
                {/* Tech Badges */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-gray-900 border border-gray-700 rounded-full p-3"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fab fa-react text-2xl text-blue-400"></i>
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-gray-900 border border-gray-700 rounded-full p-3"
                  whileHover={{ scale: 1.1, rotate: -360 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fab fa-node-js text-2xl text-green-500"></i>
                </motion.div>
                <motion.div 
                  className="absolute bottom-8 -right-6 bg-gray-900 border border-gray-700 rounded-lg p-3"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fab fa-js text-2xl text-yellow-400"></i>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero