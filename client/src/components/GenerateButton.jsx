import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const GenerateButton = () => {

  const {user,setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()

   const onClickHandler = () => {
    if(user){
        navigate('/result')
    }else{
        setShowLogin(true)
    }
   }

  return (
    <motion.div 
      className='pb-20 text-center relative'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-accent-200 to-primary-200 rounded-full opacity-10 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6'>
          See the magic.{" "}
          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Try Now
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Ready to transform your ideas into stunning visuals? Start creating your masterpiece today!
        </p>
      </motion.div>

      <motion.button 
        onClick={onClickHandler} 
        className='group relative inline-flex items-center gap-3 px-12 py-4 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold text-lg shadow-glow hover:shadow-glow-lg transition-all duration-300'
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <span className="relative z-10">Generate Images</span>
        <motion.img 
          src={assets.star_group} 
          alt=''
          className='h-6 relative z-10'
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
      </motion.button>

      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-xl">⚡</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Lightning Fast</h3>
          <p className="text-gray-600 text-sm">Generate images in seconds</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-xl">🎨</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">High Quality</h3>
          <p className="text-gray-600 text-sm">Stunning, detailed results</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-xl">🔒</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Secure & Private</h3>
          <p className="text-gray-600 text-sm">Your data is protected</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default GenerateButton