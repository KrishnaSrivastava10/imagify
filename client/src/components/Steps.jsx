import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
  return (
    <motion.div 
      className='flex flex-col items-center justify-center my-32 relative'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-accent-200 to-primary-200 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className='text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent'>
          How it works
        </h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
          Transform words into stunning images in just three simple steps
        </p>
      </motion.div>

      <div className='space-y-6 w-full max-w-4xl'>
        {stepsData.map((item, index) => (
          <motion.div 
            key={index} 
            className='group relative'
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className='flex items-center gap-6 p-8 bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-glow border border-gray-100 hover:border-primary-200 transition-all duration-300 rounded-2xl cursor-pointer relative overflow-hidden'>
              {/* Step number badge */}
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-glow">
                  {index + 1}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
              </div>
              
              <div className='flex-1'>
                <h2 className='text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-300'>
                  {item.title}
                </h2>
                <p className='text-gray-600 text-lg leading-relaxed'>
                  {item.description}
                </p>
              </div>

              <motion.img 
                width={60} 
                src={item.icon} 
                alt={item.title}
                className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-secondary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to action */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-600 mb-4">
          Ready to create your masterpiece?
        </p>
        <div className="flex items-center justify-center gap-2 text-primary-600 font-semibold">
          <span>✨</span>
          <span>Start creating now</span>
          <span>✨</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Steps