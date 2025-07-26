import React, { useContext, useEffect } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const BuyCredit = () => {
  const { user, backendUrl, loadCreditsData, token, setShowLogin } = useContext(AppContext)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const navigate = useNavigate()

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: 'Credits Purchase',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
  
        try {
          
          const {data} = await axios.post(backendUrl + '/api/user/verify-razor', response, {headers: {token}})
          if(data.success){
            loadCreditsData();
            navigate('/')
            toast.success('Credit Added')
          }


        } catch (error) {
          toast.error(error.message)
        }
      },
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true)
        return
      }

      console.log("Sending payment request:", { userId: user._id, planId })

      const { data } = await axios.post(
        backendUrl + '/api/user/pay-razor',
        { planId },
        { headers: { token } }
      )

      if (data.success) {
        initPay(data.order)
      } else {
        toast.error(data.message || "Something went wrong")
      }

    } catch (error) {
      console.error(error)
      toast.error(error.response?.data?.message || error.message)
    }
  }

  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
      <h1 className='text-3xl font-medium mb-10'>Choose a Plan</h1>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => (
          <div key={index} className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'>
            <img width={40} src={assets.logo_icon} alt='' />
            <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'>
              <span className='text-3xl font-medium'>₹{item.price}</span> / {item.credits} credits
            </p>
            <button
              onClick={() => paymentRazorpay(item.id)}
              className='w-full bg-gray-800 text-white mt-8 rounded-md py-2.5 min-w-52'>
              {user ? 'Purchase' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit
