import React from 'react'
import Map from './resources/Map.svg'
import './contactus.css'
import { motion } from 'framer-motion';
import Contactus2 from './resources/Contactus2.svg'
const contactuspage = () => {
  return (
    <div className='mt-[140px] max-w-[1440px] w-[100%] mx-auto'>
      <div className="cc1">
  <motion.h1
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  className='text-[52px] ml-[40px] font-bold leading-15 mb-[10px]'
>
  <span className='highlight'>Contact</span> our team to <br />find out more
</motion.h1>

  <div className='flex flex-row mt-[20px]'>
    
    {/* LEFT SIDE: Map */}
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="cc1left ml-[40px] mt-[20px] h-auto"
    >
      <img src={Map} alt="" className='w-[986px]' />
    </motion.div>

    {/* RIGHT SIDE: Info */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="cc2right"
    >
      <div className="max-w-sm mx-auto p-6">
        <div className="mb-8 border-b pb-6">
          <h3 className="text-xl font-semibold text-black mb-1">Support</h3>
          <p className="text-sm text-gray-500 mb-2">Our friendly team is here to help.</p>
          <p className="font-semibold text-sm text-black">support@sans.com</p>
        </div>
        <div className="mb-8 border-b pb-6">
          <h3 className="text-xl font-semibold text-black mb-1">Sales</h3>
          <p className="text-sm text-gray-500 mb-2">Questions or queries? Get in touch!</p>
          <p className="font-semibold text-sm text-black">sales@sans.com</p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-black mb-1">Phone</h3>
          <p className="text-sm text-gray-500 mb-2">Mon–Fri from 8am to 5pm.</p>
          <p className="font-semibold text-sm text-black">+1 (435) 345-7655</p>
        </div>
      </div>
    </motion.div>

  </div>
</div>
      <div className="cc2">
         <div className="relative w-full min-h-screen  flex items-center  px-4 py-16">
            {/* Background Image */}
            <div className="absolute right-0 top-2 w-3/5 h-full z-0 flex justify-end">
              <img
                src={Contactus2} // Replace with your actual image
                alt="Background"
                className="w-[80%] object-contain "
              />
            </div>

            {/* Form Container */}
            <div className="relative z-10 bg-white border border-gray-200 shadow-2xl max-w-md w-full h-[550px] p-8 border-r-2 ml-[120px] rounded-2xl">
              <h2 className="text-2xl font-bold mb-2">Let’s level up your brand</h2>
              <p className="text-sm text-gray-600 mb-6">
                You can reach us anytime{" "}
                <a href="info@webnestmedia.com" className="text-blue-500">
                  info@webnestmedia.com
                </a>
              </p>
              <form className="space-y-4">
                <div className="flex gap-4">

                  <input
                    type="text"
                    placeholder="First name"
                    className="w-1/2 border border-gray-300 rounded-md px-4 py-2 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-1/2 border border-gray-300 rounded-md px-4 py-2 text-sm"
                  />
                </div>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                />
                <input
                  type="tel"
                  placeholder="+91 XXXXXXXXXXX"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                />
                
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select a service</option>
                  <option value="sem">Search Engine Marketing (SEM)</option>
                  <option value="seo">Search Engine Optimization (SEO)</option>
                  <option value="webDesign">Social Media Marketing (SMM)</option>
                  <option value="webDevelopment">Web Development</option>
                  <option value="contentMarketing">Content Marketing</option>
                  <option value="affiliateMarketing">Affiliate Marketing</option>
                </select>

                <textarea
                  placeholder="Leave us a message..."
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm h-28 resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="bg-black text-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-gray-900"
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>

              
      </div>
    </div>
  )
}

export default contactuspage;
