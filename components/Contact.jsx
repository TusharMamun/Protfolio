import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'contact@tusharmamun.com',
      color: 'text-blue-400'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Available for Remote Work',
      color: 'text-green-400'
    }
  ]

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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-gray-400">
              Have a project in mind? Let's discuss how we can work together
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Contact Info */}
            <motion.div 
              className="glass-card p-8 rounded-2xl"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mr-4">
                      <i className={`${info.icon} text-white`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className={`${social.icon} text-xl`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <motion.button 
                  onClick={() => scrollToSection('projects')}
                  className="w-full flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fas fa-folder-open"></i>
                  <span>View My Work</span>
                </motion.button>
                
                <motion.button 
                  className="w-full flex items-center justify-center space-x-2 border border-gray-700 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fas fa-download"></i>
                  <span>Download Resume</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="glass-card p-8 rounded-2xl"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    required
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    required
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                    required
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-bg text-white font-medium py-3 rounded-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* Contact Tips */}
              <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
                <div className="flex items-start">
                  <i className="fas fa-lightbulb text-yellow-400 text-lg mr-3 mt-1"></i>
                  <div>
                    <h5 className="font-semibold mb-1">Quick Response</h5>
                    <p className="text-gray-300 text-sm">
                      I typically respond within 24 hours. For urgent projects, feel free to reach out via WhatsApp or LinkedIn.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="mt-16 text-center"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your <span className="gradient-text">Project</span>?
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Whether you need a complete web application, a landing page, or technical consultation, 
                I'm here to help bring your ideas to life with modern technologies and best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  onClick={() => scrollToSection('projects')}
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-full transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-eye"></i>
                  <span>See My Work</span>
                </motion.button>
                <motion.button 
                  className="flex items-center space-x-2 gradient-bg text-white font-medium py-3 px-6 rounded-full hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-calendar-alt"></i>
                  <span>Schedule a Call</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact