import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
  return (
    <motion.div 
      className='flex flex-col items-center justify-center my-32 p-6 md:px-28 relative'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-accent-200 to-primary-200 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className='text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent'>
          Create AI Images
        </h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
          Turn your imagination into stunning visuals with cutting-edge AI technology
        </p>
      </motion.div>

      <div className='flex flex-col gap-12 md:gap-20 md:flex-row items-center max-w-7xl mx-auto'>
        <motion.div
          className="relative group"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.img 
            src={assets.sample_img_1} 
            alt='AI Generated Image' 
            className='w-80 xl:w-96 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 border-4 border-white' 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            ✨ AI Generated
          </div>
        </motion.div>
        
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight'>
            Introducing the{" "}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              AI-Powered Text to Image Generator
            </span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Easily bring your ideas to life with our advanced AI image generator. Whether you need stunning visuals for your projects or unique imagery that captures your vision, our tool transforms your text into eye-catching images with just a few clicks. 
              <span className="font-semibold text-primary-600"> Imagine it, describe it, and watch it come to life instantly.</span>
            </p>
            
            <p>
              Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don't yet exist can be visualized effortlessly. 
              <span className="font-semibold text-secondary-600"> Powered by advanced AI technology, the creative possibilities are limitless!</span>
            </p>
          </div>

          {/* Feature highlights */}
          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="font-medium text-gray-700">Instant Generation</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="font-medium text-gray-700">High Quality Output</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="font-medium text-gray-700">Unlimited Creativity</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="font-medium text-gray-700">Easy to Use</span>
            </div>
          </motion.div>
        </motion.div> 
      </div>
    </motion.div>
  )
}
 
export default Description