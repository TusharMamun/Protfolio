import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [animateSkills, setAnimateSkills] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimateSkills(true), 500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

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

  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'fas fa-code',
      skills: [
        { name: 'React/Next.js', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Framer Motion', level: 85 }
      ]
    },
    {
      title: 'Backend',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js/Express', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'JWT Authentication', level: 80 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Firebase', level: 85 },
        { name: 'API Integration', level: 75 }
      ]
    },
    {
      title: 'Core Skills',
      icon: 'fas fa-brain',
      isSpecial: true,
      tags: [
        'JavaScript ES6+',
        'RESTful APIs',
        'Responsive Design',
        'Problem Solving',
        'Team Collaboration',
        'Clean Code'
      ]
    }
  ]

  const technologies = [
    { icon: 'fab fa-js', name: 'JavaScript', color: 'text-yellow-400' },
    { icon: 'fab fa-react', name: 'React', color: 'text-blue-400' },
    { icon: 'fab fa-node-js', name: 'Node.js', color: 'text-green-500' },
    { icon: 'fas fa-database', name: 'MongoDB', color: 'text-green-400' },
    { icon: 'fab fa-firebase', name: 'Firebase', color: 'text-yellow-500' },
    { icon: 'fab fa-git-alt', name: 'Git', color: 'text-orange-500' },
    { icon: 'fab fa-css3-alt', name: 'Tailwind', color: 'text-blue-500' },
    { icon: 'fas fa-magic', name: 'Framer', color: 'text-pink-500' }
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mastering the tools and technologies that power modern web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="glass-card p-6 text-center bento-item"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                <i className={`${category.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              
              {category.isSpecial ? (
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(55, 65, 81, 0.8)' }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress" 
                          initial={{ width: 0 }}
                          animate={animateSkills ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: skillIndex * 0.2 }}
                        />
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span>{skill.name}</span>
                        <motion.span 
                          className="font-bold gradient-text"
                          initial={{ opacity: 0 }}
                          animate={animateSkills ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: skillIndex * 0.2 + 1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Icons Grid */}
        <motion.div 
          className="mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Technology Stack</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                className="tech-icon text-center"
                whileHover={{ 
                  y: -10,
                  scale: 1.1,
                  filter: 'drop-shadow(0 10px 20px rgba(99, 102, 241, 0.3))'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-2 border border-gray-800 hover:border-gray-600 transition-colors">
                  <i className={`${tech.icon} text-3xl ${tech.color}`}></i>
                </div>
                <span className="text-sm text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div 
          className="mt-16 glass-card p-8 rounded-2xl max-w-4xl mx-auto"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl font-bold text-center mb-6">
            What I <span className="gradient-text">Bring</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'fas fa-rocket',
                title: 'Performance',
                description: 'Optimized applications with fast loading times and smooth user experiences.'
              },
              {
                icon: 'fas fa-shield-alt',
                title: 'Security',
                description: 'Implementing best practices for secure authentication and data protection.'
              },
              {
                icon: 'fas fa-mobile-alt',
                title: 'Responsive',
                description: 'Mobile-first designs that work perfectly across all devices and screen sizes.'
              }
            ].map((item, index) => (
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
        </motion.div>
      </div>
    </section>
  )
}

export default Skills