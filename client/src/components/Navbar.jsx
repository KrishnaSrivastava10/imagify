import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const Navbar = () => {

  const {user, setShowLogin, logout, credit} = useContext(AppContext)

  const navigate = useNavigate();

  return (
    <motion.div 
      className='flex items-center justify-between py-6 relative'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link to='/'>
        <motion.img 
          src={assets.logo} 
          alt="Imagify Logo" 
          className="w-28 sm:w-32 lg:w-40 hover:scale-105 transition-transform duration-300" 
          whileHover={{ scale: 1.05 }}
        />
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-3 sm:gap-4"> 
            <motion.button 
              onClick={()=>navigate('/buy')} 
              className="group flex items-center gap-2 bg-gradient-to-r from-primary-50 to-secondary-50 hover:from-primary-100 hover:to-secondary-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-primary-200 hover:border-primary-300 transition-all duration-300 shadow-soft hover:shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                <img className='w-5 animate-pulse-slow' src={assets.credit_star} alt="" />
                <p className="text-xs sm:text-sm font-semibold text-gray-700">Credits: {credit}</p>
            </motion.button>
            <p className="text-gray-700 max-sm:hidden pl-4 font-medium">Hi, {user.name} 👋</p>
            <div className="relative group">
                <motion.img 
                  src={assets.profile_icon} 
                  className='w-10 drop-shadow hover:drop-shadow-lg transition-all duration-300 cursor-pointer' 
                  alt="Profile" 
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute hidden group-hover:block top-0 right-0 z-20 pt-12 animate-fade-in-down">
                    <ul className="list-none m-0 p-3 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-glow text-sm min-w-[120px]">
                        <li 
                          onClick={logout} 
                          className="py-2 px-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors duration-200 flex items-center gap-2"
                        >
                          <span>🚪</span> Logout
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        ) : (
          <div className='flex items-center gap-3 sm:gap-6'>
            <motion.p 
              onClick={()=>navigate('/buy')} 
              className="cursor-pointer text-gray-600 hover:text-primary-600 font-medium transition-colors duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
               Pricing
            </motion.p>
            <motion.button 
              onClick={()=>setShowLogin(true)} 
              className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-semibold rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
               Login
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
