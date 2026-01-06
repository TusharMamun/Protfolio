import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentSlide, setCurrentSlide] = useState(0)

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

  const mainTestimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Project Manager",
      company: "HealthTech Solutions",
      image: "/images/client1.svg",
      rating: 5,
      text: "Tushar delivered our blood donation platform ahead of schedule. His attention to detail and problem-solving skills are exceptional. The JWT authentication system he implemented is rock-solid."
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Owner",
      company: "Gourmet Bistro",
      image: "/images/client2.svg",
      rating: 4.5,
      text: "The restaurant website Tushar built for us has increased our online reservations by 65%. The Framer Motion animations create a seamless user experience that our customers love."
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "CEO",
      company: "Creative Digital Agency",
      image: "/images/client3.svg",
      rating: 5,
      text: "Working with Tushar on our agency website was a game-changer. His expertise in React and modern animations transformed our online presence. Highly recommended!"
    }
  ]

  const additionalTestimonials = [
    {
      id: 4,
      name: "David Rodriguez",
      role: "Tech Lead",
      company: "Startup Inc.",
      rating: 5,
      text: "Exceptional backend developer. The MongoDB schemas and Express routes he designed are efficient and scalable."
    },
    {
      id: 5,
      name: "Emma Thompson",
      role: "Product Manager",
      company: "TechCorp",
      rating: 4.5,
      text: "Tushar's clean code and documentation made our project maintenance a breeze. Great communication throughout."
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Founder",
      company: "E-commerce Store",
      rating: 5,
      text: "Responsive, professional, and delivered beyond expectations. Will definitely work with him again."
    }
  ]

  const trustStats = [
    { value: "100%", label: "Project Success" },
    { value: "24/7", label: "Support Available" },
    { value: "5★", label: "Average Rating" },
    { value: "100%", label: "Client Satisfaction" }
  ]

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>)
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>)
    }

    return stars
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % additionalTestimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + additionalTestimonials.length) % additionalTestimonials.length)
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-t from-black via-gray-900/20 to-black" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See what clients and colleagues say about working with me
          </p>
        </motion.div>

        {/* Main Testimonial Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {mainTestimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="testimonial-card glass-card p-6"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)'
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-start mb-4">
                <div className="quote-icon mr-3">
                  <i className="fas fa-quote-left text-2xl"></i>
                </div>
                <div className="star-rating flex mb-2">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <div className="client-image rounded-full overflow-hidden mr-4 relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Testimonials Slider */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">More Feedback</h3>
            
            <div className="relative">
              {/* Testimonial Content */}
              <motion.div 
                className="min-h-[200px] flex items-center justify-center"
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center max-w-2xl">
                  <div className="star-rating flex mb-4 justify-center">
                    {renderStars(additionalTestimonials[currentSlide].rating)}
                  </div>
                  <p className="text-gray-300 mb-6 text-lg italic">
                    "{additionalTestimonials[currentSlide].text}"
                  </p>
                  <div>
                    <h4 className="font-bold text-white text-lg">
                      {additionalTestimonials[currentSlide].name}
                    </h4>
                    <p className="text-gray-400">
                      {additionalTestimonials[currentSlide].role}, {additionalTestimonials[currentSlide].company}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Slider Controls */}
              <div className="flex justify-center space-x-4 mt-6">
                <motion.button 
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fas fa-chevron-left"></i>
                </motion.button>
                
                {/* Dots Indicator */}
                <div className="flex items-center space-x-2">
                  {additionalTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-indigo-500' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                
                <motion.button 
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fas fa-chevron-right"></i>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {trustStats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="text-3xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials