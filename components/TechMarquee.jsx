import { motion } from 'framer-motion'

const TechMarquee = () => {
  const technologies = [
    { icon: 'fab fa-js', name: 'JavaScript', color: 'text-yellow-400' },
    { icon: 'fab fa-react', name: 'React.js', color: 'text-blue-400' },
    { icon: 'fab fa-node-js', name: 'Node.js', color: 'text-green-500' },
    { icon: 'fas fa-database', name: 'MongoDB', color: 'text-green-400' },
    { icon: 'fab fa-firebase', name: 'Firebase', color: 'text-yellow-500' },
    { icon: 'fab fa-git-alt', name: 'Git', color: 'text-orange-500' },
    { icon: 'fas fa-server', name: 'Express.js', color: 'text-purple-500' },
    { icon: 'fab fa-css3-alt', name: 'Tailwind CSS', color: 'text-blue-500' },
    { icon: 'fas fa-magic', name: 'Framer Motion', color: 'text-pink-500' },
  ]

  return (
    <section className="py-8 bg-gradient-to-r from-gray-900/50 to-black/50">
      <div className="overflow-hidden">
        <motion.div 
          className="flex space-x-12 px-12"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {/* First set */}
          {technologies.map((tech, index) => (
            <div key={`first-${index}`} className="flex items-center space-x-2 whitespace-nowrap">
              <i className={`${tech.icon} text-3xl ${tech.color}`}></i>
              <span className="text-lg font-medium">{tech.name}</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {technologies.map((tech, index) => (
            <div key={`second-${index}`} className="flex items-center space-x-2 whitespace-nowrap">
              <i className={`${tech.icon} text-3xl ${tech.color}`}></i>
              <span className="text-lg font-medium">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechMarquee