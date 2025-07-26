import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div 
      className='flex flex-col items-center justify-center my-32 py-16 relative'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary-200 to-primary-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-accent-200 to-secondary-200 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className='text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-secondary-600 bg-clip-text text-transparent'>
          Customer Testimonials
        </h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
          See what our amazing users are saying about their experience
        </p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
        {testimonialsData.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className='group relative'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className='bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft hover:shadow-glow border border-gray-100 hover:border-secondary-200 transition-all duration-300 relative overflow-hidden h-full'>
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-4xl text-secondary-200 opacity-30">
                "
              </div>
              
              <div className='flex flex-col items-center text-center relative z-10'>
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className='rounded-full w-16 h-16 object-cover border-4 border-white shadow-glow' 
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </motion.div>
                
                <h2 className='text-xl font-bold text-gray-800 mb-2'>{testimonial.name}</h2>
                <p className='text-secondary-600 font-medium mb-4'>{testimonial.role}</p>
                
                <div className='flex justify-center mb-6'>
                  {Array(testimonial.stars).fill().map((item, starIndex) => (
                    <motion.img 
                      key={starIndex} 
                      src={assets.rating_star} 
                      alt="star" 
                      className="w-5 h-5"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + starIndex * 0.1, duration: 0.3 }}
                    />
                  ))}
                </div>
                
                <p className='text-gray-600 leading-relaxed italic'>
                  "{testimonial.text}"
                </p>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-50/30 to-primary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats section */}
      <motion.div
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <div className="text-4xl font-bold text-primary-600 mb-2">10K+</div>
          <div className="text-gray-600">Happy Users</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-secondary-600 mb-2">50K+</div>
          <div className="text-gray-600">Images Generated</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-accent-600 mb-2">4.9★</div>
          <div className="text-gray-600">Average Rating</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Testimonials