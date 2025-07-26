import React, { useContext } from 'react'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import { Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'

const App = () => {

  const {showLogin} = useContext(AppContext);

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden' >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="relative z-10">
        <ToastContainer position='bottom-right'/>
        <Navbar />
        {showLogin && <Login />}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/result' element={<Result/>}/>
          <Route path='/buy' element={<BuyCredit/>}/>
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App