import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {

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
      className="flex flex-col justify-between items-center text-center my-20 relative"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full opacity-10 animate-bounce-slow"></div>
      </div>

      <motion.div
        className="text-gray-600 inline-flex text-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-gray-200 shadow-soft"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay:0.2,duration: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1)" }}
      >
        <p className="font-medium">✨ Best text to image generator</p>
        <img src={assets.star_icon} alt="" className="animate-spin-slow" />
      </motion.div>

      <motion.h1 
        className="text-5xl max-w-[350px] sm:text-8xl sm:max-w-[700px] mx-auto mt-12 text-center font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-secondary-600 bg-clip-text text-transparent leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.2 }}
      >
        Turn text to{" "}
        <span className="relative">
          <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent animate-pulse-slow">
            image
          </span>
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </span>
        , in seconds.
      </motion.h1>

      <motion.p 
        className="text-center max-w-2xl mx-auto mt-8 text-lg text-gray-600 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds - just type, and watch the magic happen.
      </motion.p>

      <motion.button 
        onClick={onClickHandler} 
        className="group relative sm:text-lg text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 w-auto mt-10 px-12 py-4 flex items-center gap-3 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 font-semibold"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <span className="relative z-10">Generate Images</span>
        <img className="h-6 animate-bounce-slow" src={assets.star_group} alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
      </motion.button>

      <motion.div 
        className="flex flex-wrap justify-center mt-20 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {Array(6)
          .fill("")
          .map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                className="rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 cursor-pointer max-sm:w-12 sm:w-16 md:w-20 border-2 border-white/50"
                src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
                alt=""
                width={80}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="mt-6 text-gray-500 font-medium"
      >
        ✨ Generated images from Imagify
      </motion.p>
    </motion.div>
  );
};

export default Header;
