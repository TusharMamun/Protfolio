import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const skills = [
    { name: 'React.js', icon: 'fab fa-react', color: 'text-blue-400' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500' },
    { name: 'MongoDB', icon: 'fas fa-database', color: 'text-green-400' },
    { name: 'JavaScript ES6+', icon: 'fab fa-js', color: 'text-yellow-400' },
    { name: 'Tailwind CSS', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
    { name: 'Firebase', icon: 'fas fa-fire', color: 'text-yellow-500' }
  ]

  const subjects = [
    'Programming Fundamentals',
    'Database Management Systems',
    'Web Technologies',
    'Software Engineering'
  ]

  const philosophyItems = [
    {
      icon: 'fas fa-hands-helping',
      title: 'Hands-On Practice',
      description: 'Learning by building real projects and solving practical problems.'
    },
    {
      icon: 'fas fa-sync-alt',
      title: 'Continuous Growth',
      description: 'Always updating skills with latest technologies and best practices.'
    },
    {
      icon: 'fas fa-project-diagram',
      title: 'Project-Based Learning',
      description: 'Applying theoretical knowledge to build complete, functional applications.'
    }
  ]

  return (
    <section id="education" className="py-16 md:py-24 bg-gradient-to-b from-gray-900/30 to-black" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuous learning journey to master modern web technologies
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="glass-card p-8 rounded-2xl" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Academic <span className="gradient-text">Journey</span>
            </h3>
            
            <div className="timeline">
              {/* Current Education */}
              <motion.div 
                className="timeline-item education-card"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold mb-1">Full-Stack Web Development Course</h4>
                      <div className="flex items-center text-gray-400 mb-2">
                        <i className="fas fa-university mr-2"></i>
                        <span>Programming Hero</span>
                        <span className="mx-2">•</span>
                        <i className="far fa-calendar-alt mr-2"></i>
                        <span>2023 - Present</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium mt-2 md:mt-0">
                      <i className="fas fa-spinner fa-spin mr-1"></i> Currently Enrolled
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    Comprehensive full-stack development course covering modern technologies including MERN stack, Next.js, TypeScript, and advanced web development concepts.
                  </p>
                  
                  {/* Skills Learned */}
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2">Skills & Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <motion.span 
                          key={index}
                          className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm flex items-center"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <i className={`${skill.icon} ${skill.color} mr-1`}></i>
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Progress */}
                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Course Progress</span>
                      <span className="text-sm font-bold gradient-text">75%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress" 
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '75%' } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Diploma */}
              <motion.div 
                className="timeline-item education-card"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold mb-1">Diploma in Computer Science & Technology</h4>
                      <div className="flex items-center text-gray-400 mb-2">
                        <i className="fas fa-university mr-2"></i>
                        <span>Bangladesh Technical Education Board</span>
                        <span className="mx-2">•</span>
                        <i className="far fa-calendar-alt mr-2"></i>
                        <span>2019 - 2023</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mt-2 md:mt-0">
                      <i className="fas fa-check-circle mr-1"></i> Completed
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    Completed 4-year diploma program covering fundamental computer science concepts including programming, database management, web development, and software engineering principles.
                  </p>
                  
                  {/* Key Subjects */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {subjects.map((subject, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        <span>{subject}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Achievement */}
                  <motion.div 
                    className="mt-4 p-4 rounded-lg bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center">
                      <i className="fas fa-award text-yellow-400 text-xl mr-3"></i>
                      <div>
                        <h5 className="font-semibold">Achievement</h5>
                        <p className="text-gray-300 text-sm">Graduated with distinction in web development projects</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <motion.div 
          className="max-w-6xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 
            className="text-2xl font-bold mb-8 text-center"
            variants={itemVariants}
          >
            Professional <span className="gradient-text">Certifications</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Programming Hero Certification */}
            <motion.div 
              className="cert-badge glass-card p-6 rounded-2xl education-card"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mr-4">
                  <i className="fas fa-code text-2xl text-white"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Full-Stack Web Development</h4>
                  <p className="text-gray-400 text-sm">Programming Hero</p>
                  <div className="flex items-center mt-2">
                    <span className="px-2 py-1 rounded bg-green-500/20 text-green-300 text-xs mr-2">
                      <i className="fas fa-spinner fa-spin mr-1"></i> In Progress
                    </span>
                    <span className="text-xs text-gray-400">
                      <i className="far fa-clock mr-1"></i> Estimated Completion: 2024
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">
                Comprehensive certification covering modern web development stack including React, Node.js, MongoDB, Express.js, and deployment strategies.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {[
                    { icon: 'fab fa-react', color: 'text-blue-400' },
                    { icon: 'fab fa-node-js', color: 'text-green-500' },
                    { icon: 'fas fa-database', color: 'text-green-400' }
                  ].map((tech, index) => (
                    <div key={index} className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                      <i className={`${tech.icon} ${tech.color}`}></i>
                    </div>
                  ))}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold gradient-text">75%</div>
                  <div className="text-xs text-gray-400">Completion</div>
                </div>
              </div>
            </motion.div>

            {/* JavaScript Certification */}
            <motion.div 
              className="cert-badge glass-card p-6 rounded-2xl education-card"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center mr-4">
                  <i className="fab fa-js text-2xl text-white"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">JavaScript Mastery</h4>
                  <p className="text-gray-400 text-sm">Online Certification</p>
                  <div className="flex items-center mt-2">
                    <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-300 text-xs mr-2">
                      <i className="fas fa-check-circle mr-1"></i> Completed
                    </span>
                    <span className="text-xs text-gray-400">
                      <i className="far fa-calendar-alt mr-1"></i> 2023
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">
                Advanced JavaScript concepts including ES6+ features, asynchronous programming, DOM manipulation, and modern JS patterns.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {[
                    { icon: 'fab fa-js', color: 'text-yellow-400' },
                    { icon: 'fas fa-mobile-alt', color: 'text-green-400' },
                    { icon: 'fas fa-code', color: 'text-blue-400' }
                  ].map((tech, index) => (
                    <div key={index} className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                      <i className={`${tech.icon} ${tech.color}`}></i>
                    </div>
                  ))}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold gradient-text">92%</div>
                  <div className="text-xs text-gray-400">Score</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div 
          className="mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">
              My <span className="gradient-text">Learning Philosophy</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {philosophyItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                    <i className={`${item.icon} text-2xl text-white`}></i>
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education