import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const values = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovative Solutions',
      description: 'Leveraging latest technologies to solve complex problems creatively.'
    },
    {
      icon: 'fas fa-code',
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code.'
    },
    {
      icon: 'fas fa-users',
      title: 'Collaborative',
      description: 'Working effectively in teams and communicating clearly with clients.'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Fast Delivery',
      description: 'Meeting deadlines without compromising on quality.'
    }
  ]

  const hobbies = [
    { icon: 'fas fa-book', name: 'Tech Reading', color: 'text-blue-400' },
    { icon: 'fas fa-gamepad', name: 'Gaming', color: 'text-green-400' },
    { icon: 'fas fa-music', name: 'Music', color: 'text-pink-400' },
    { icon: 'fas fa-plane', name: 'Travel', color: 'text-yellow-400' },
    { icon: 'fas fa-utensils', name: 'Cooking', color: 'text-red-400' },
    { icon: 'fas fa-film', name: 'Movies', color: 'text-purple-400' }
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with code
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column: Image and Personal Info */}
          <motion.div variants={itemVariants}>
            <div className="glass-card p-8 rounded-2xl">
              {/* Profile Image */}
              <div className="w-48 h-48 rounded-full mx-auto mb-8 overflow-hidden border-4 border-gray-700 relative">
                <img
                  src="/images/Profile.png"
                  alt="Tushar Mamun"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log('About: Profile.png failed to load, trying fallback...');
                    e.target.src = "/images/profile.svg";
                  }}
                />
                {/* Status Badge */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                  <i className="fas fa-check text-white"></i>
                </div>
              </div>

              {/* Personal Info */}
              <div className="space-y-4">
                {[
                  { icon: 'fas fa-user', label: 'Full Name', value: 'Tushar Mamun', color: 'text-indigo-400' },
                  { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Available Worldwide (Remote)', color: 'text-green-400' },
                  { icon: 'fas fa-graduation-cap', label: 'Education', value: 'Diploma in Computer Science & Technology', color: 'text-yellow-400' },
                  { icon: 'fas fa-briefcase', label: 'Experience', value: '2+ Years in Web Development', color: 'text-pink-400' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4`}>
                      <i className={`${item.icon} ${item.color}`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.label}</h4>
                      <p className="text-gray-400">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Download CV Button */}
              <div className="mt-8 text-center">
                <motion.button 
                  className="inline-flex items-center gradient-bg text-white font-medium py-3 px-6 rounded-full hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-download mr-2"></i>
                  Download Resume
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story and Details */}
          <motion.div variants={itemVariants}>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">
                My <span className="gradient-text">Journey</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Hello! I'm Tushar Mamun, a passionate Full-Stack Developer with expertise in the MERN stack, Next.js, and modern web technologies. My journey in web development began with a Diploma in Computer Science, and I'm currently enhancing my skills through the Programming Hero Full-Stack Development course.
              </p>
              <p className="text-gray-300 mb-6">
                I specialize in building complete web solutions from frontend to backend, with a keen eye for design and user experience. My approach combines technical expertise with creative problem-solving to deliver exceptional digital products.
              </p>
            </div>

            {/* Values & Approach */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">
                My <span className="gradient-text">Approach</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div 
                    key={index}
                    className="glass-card p-4 rounded-xl"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                      <i className={`${value.icon} text-white`}></i>
                    </div>
                    <h4 className="font-bold mb-2">{value.title}</h4>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Beyond <span className="gradient-text">Coding</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby, index) => (
                  <motion.span 
                    key={index}
                    className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 flex items-center cursor-pointer"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(55, 65, 81, 0.8)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <i className={`${hobby.icon} mr-2 ${hobby.color}`}></i>
                    {hobby.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection