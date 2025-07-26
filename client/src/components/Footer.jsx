import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
      className='relative mt-32 py-12 border-t border-gray-200 bg-white/50 backdrop-blur-sm'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-r from-accent-100 to-primary-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          
          {/* Logo and description */}
          <motion.div 
            className="flex flex-col items-center md:items-start gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src={assets.logo} 
              alt='Imagify Logo' 
              width={150}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <p className='text-sm text-gray-600 text-center md:text-left max-w-md'>
              Transform your imagination into stunning visuals with AI-powered text-to-image generation.
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className='text-sm text-gray-500 mb-2'>
              Copyright © 2025 krishna.dev | All rights reserved.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-gray-400">
              <span className="hover:text-primary-600 cursor-pointer transition-colors duration-300">Privacy Policy</span>
              <span className="hover:text-primary-600 cursor-pointer transition-colors duration-300">Terms of Service</span>
              <span className="hover:text-primary-600 cursor-pointer transition-colors duration-300">Contact</span>
            </div>
          </motion.div>

          {/* Social media */}
          <motion.div 
            className='flex gap-4'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="group relative"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={assets.facebook_icon} 
                alt='Facebook' 
                width={40} 
                className="cursor-pointer transition-all duration-300 group-hover:drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-primary-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
            </motion.div>
            
            <motion.div
              className="group relative"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={assets.twitter_icon} 
                alt='Twitter' 
                width={40} 
                className="cursor-pointer transition-all duration-300 group-hover:drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-secondary-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
            </motion.div>
            
            <motion.div
              className="group relative"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={assets.instagram_icon} 
                alt='Instagram' 
                width={40} 
                className="cursor-pointer transition-all duration-300 group-hover:drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-accent-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div 
          className="mt-8 pt-6 border-t border-gray-100 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-gray-400">
            Made with ❤️ by the Imagify team
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer