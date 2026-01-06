import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: "Blood Donation Application",
      description: "A comprehensive life-saving platform connecting blood donors with recipients in real-time. Implemented secure JWT-based authentication and Firebase integration for real-time donor tracking, reducing coordination time by 40%.",
      image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "Full-Stack",
      categoryColor: "bg-red-500/20 text-red-300",
      overlayColor: "from-red-500/10 to-red-500/40",
      iconColor: "bg-red-500/80",
      icons: [
        { icon: "fas fa-heartbeat", color: "text-white" },
        { icon: "fas fa-users", color: "text-white" }
      ],
      technologies: [
        { name: "React", icon: "fab fa-react", color: "text-blue-400" },
        { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
        { name: "MongoDB", icon: "fas fa-database", color: "text-green-400" },
        { name: "Express", icon: "fas fa-server", color: "text-purple-500" },
        { name: "JWT Auth", icon: "fas fa-shield-alt", color: "text-yellow-400" },
        { name: "Firebase", icon: "fab fa-firebase", color: "text-yellow-500" },
        { name: "Tailwind CSS", icon: "fab fa-css3-alt", color: "text-blue-500" }
      ],
      features: [
        "Real-time donor matching system",
        "Secure JWT authentication",
        "Firebase integration for auth",
        "Admin dashboard with analytics"
      ],
      links: {
        frontend: "https://github.com/TusharMamun/Assingment-11-BlodeDonation-Applicaiton-Fontend-",
        backend: "https://github.com/TusharMamun/Assingment-11-BlodeDonation-Applicaiton-BackEnd",
        live: "https://blooddonationapplication-ca7f0.web.app/"
      },
      isLarge: true
    },
    {
      id: 2,
      title: "Modern Restaurant Website",
      description: "A high-performance restaurant website built with Next.js, featuring dynamic menus, reservation system, and smooth animations.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Next.js",
      categoryColor: "bg-blue-500/20 text-blue-300",
      overlayColor: "from-blue-500/10 to-blue-500/40",
      iconColor: "bg-blue-500/80",
      icons: [{ icon: "fas fa-utensils", color: "text-white" }],
      technologies: [
        { name: "Next.js", icon: "fab fa-js", color: "text-yellow-400" },
        { name: "Tailwind CSS", icon: "fab fa-css3-alt", color: "text-blue-500" },
        { name: "Framer Motion", icon: "fas fa-magic", color: "text-pink-500" },
        { name: "Responsive", icon: "fas fa-mobile-alt", color: "text-green-400" }
      ],
      links: {
        github: "https://github.com/TusharMamun/RestruentProject",
        live: "https://github.com/TusharMamun/RestruentProject"
      }
    },
    {
      id: 3,
      title: "Task Management Application",
      description: "A full-stack task management application with user authentication, real-time updates, and dashboard analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "MERN Stack",
      categoryColor: "bg-green-500/20 text-green-300",
      overlayColor: "from-green-500/10 to-green-500/40",
      iconColor: "bg-green-500/80",
      icons: [{ icon: "fas fa-tasks", color: "text-white" }],
      technologies: [
        { name: "React", icon: "fab fa-react", color: "text-blue-400" },
        { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
        { name: "MongoDB", icon: "fas fa-database", color: "text-green-400" },
        { name: "Firebase", icon: "fab fa-firebase", color: "text-yellow-500" },
        { name: "Express", icon: "fas fa-server", color: "text-purple-500" }
      ],
      links: {
        github: "https://github.com/TusharMamun/Assingment-8-Hero-Application.git",
        live: "https://astounding-faun-f22596.netlify.app/"
      }
    },
    {
      id: 4,
      title: "Creative Agency Landing Page",
      description: "A visually stunning agency website with smooth animations, responsive design, and modern UI components.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "React + Framer",
      categoryColor: "bg-purple-500/20 text-purple-300",
      overlayColor: "from-purple-500/10 to-purple-500/40",
      iconColor: "bg-purple-500/80",
      icons: [{ icon: "fas fa-paint-brush", color: "text-white" }],
      technologies: [
        { name: "React.js", icon: "fab fa-react", color: "text-blue-400" },
        { name: "Framer Motion", icon: "fas fa-magic", color: "text-pink-500" },
        { name: "Tailwind CSS", icon: "fab fa-css3-alt", color: "text-blue-500" },
        { name: "Responsive", icon: "fas fa-mobile-alt", color: "text-green-400" }
      ],
      links: {
        github: "https://github.com/TusharMamun/Project-3.5.git",
        live: "https://project-3-5-5dg5.vercel.app/"
      }
    }
  ]

  return (
    <section id="projects" className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Innovative solutions built with modern technologies and best practices
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className={`${project.isLarge ? 'lg:col-span-2' : ''}`}
              variants={itemVariants}
            >
              <motion.div 
                className="glass-card p-6 md:p-8 bento-item"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {project.isLarge ? (
                  // Large Project Layout
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Project Image */}
                    <div className="lg:w-2/5">
                      <div className="rounded-xl overflow-hidden border border-gray-700 relative group">
                        <div 
                          className="h-70 bg-cover bg-center relative transition-all duration-500 group-hover:scale-105"
                          style={{ backgroundImage: `url('${project.image}')` }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-b ${project.overlayColor}`}></div>
                          <div className="absolute bottom-4 left-4 z-10">
                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            <span className={`px-3 py-1 rounded-full ${project.categoryColor} text-sm font-medium project-tech-badge`}>
                              {project.category}
                            </span>
                          </div>
                          {/* Overlay icons */}
                          <div className="absolute top-4 right-4 z-10 flex space-x-2">
                            {project.icons.map((iconItem, iconIndex) => (
                              <div key={iconIndex} className={`w-10 h-10 rounded-full ${project.iconColor} flex items-center justify-center`}>
                                <i className={`${iconItem.icon} ${iconItem.color}`}></i>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="lg:w-3/5">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <span className={`px-3 py-1 rounded-full ${project.categoryColor} text-sm font-medium`}>
                          {project.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-6">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span 
                            key={techIndex}
                            className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 flex items-center text-sm"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <i className={`${tech.icon} ${tech.color} mr-1`}></i>
                            {tech.name}
                          </motion.span>
                        ))}
                      </div>

                      {/* Features */}
                      {project.features && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                          {project.features.map((feature, featureIndex) => (
                            <motion.div 
                              key={featureIndex}
                              className="flex items-center"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <i className="fas fa-check-circle text-green-500 mr-2"></i>
                              <span className="text-sm">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {/* Links */}
                      <div className="flex flex-wrap gap-4">
                        {project.links.frontend && (
                          <motion.a 
                            href={project.links.frontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <i className="fab fa-github"></i>
                            <span>Frontend Code</span>
                          </motion.a>
                        )}
                        {project.links.backend && (
                          <motion.a 
                            href={project.links.backend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <i className="fas fa-code"></i>
                            <span>Backend Code</span>
                          </motion.a>
                        )}
                        {project.links.github && (
                          <motion.a 
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <i className="fab fa-github"></i>
                            <span>GitHub</span>
                          </motion.a>
                        )}
                        <motion.a 
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 gradient-bg hover:shadow-xl px-4 py-2 rounded-lg transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="fas fa-external-link-alt"></i>
                          <span>Live Demo</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Regular Project Layout
                  <>
                    {/* Project Banner */}
                    <div className="rounded-xl overflow-hidden border border-gray-700 mb-6 relative group">
                      <div 
                        className="h-70 bg-cover bg-center relative transition-all duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url('${project.image}')` }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-b ${project.overlayColor}`}></div>
                        <div className="absolute bottom-4 left-4 z-10">
                          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                          <span className={`px-3 py-1 rounded-full ${project.categoryColor} text-sm project-tech-badge`}>
                            {project.category}
                          </span>
                        </div>
                        {/* Overlay icon */}
                        <div className="absolute top-4 right-4 z-10">
                          <div className={`w-10 h-10 rounded-full ${project.iconColor} flex items-center justify-center`}>
                            <i className={`${project.icons[0].icon} ${project.icons[0].color}`}></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span 
                            key={techIndex}
                            className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 flex items-center text-sm"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <i className={`${tech.icon} ${tech.color} mr-1`}></i>
                            {tech.name}
                          </motion.span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <motion.a 
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="fab fa-github"></i>
                          <span>GitHub</span>
                        </motion.a>
                        <motion.a 
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-2 gradient-bg hover:shadow-xl px-4 py-2 rounded-lg transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="fas fa-external-link-alt"></i>
                          <span>Live Demo</span>
                        </motion.a>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects