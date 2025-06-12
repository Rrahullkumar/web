import React, { useState } from "react";
import Map from './resources/Map.svg'
import './contactus.css'
import { motion } from 'framer-motion';
import Contactus2 from './resources/Contactus2.svg'
const contactuspage = () => {
    const [submitting, setSubmitting] = useState(false);
        const [responseMsg, setResponseMsg] = useState("");
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setResponseMsg("");
    
        const formData = new FormData(e.target);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
            service: formData.get("service"),
        };
    
        try {
            const response = await fetch("https://webnestmedia.com/webnestmediacontac.php/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                const result = await response.json();
                setResponseMsg(result.message || "Form submitted successfully.");
                e.target.reset(); // ✅ Clear form fields
            } else {
                const errorText = await response.text();
                setResponseMsg("Submission failed: " + errorText);
            }
        } catch (error) {
            console.error("Submission error:", error);
            setResponseMsg("Submission failed. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };
    
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
                <p className="font-semibold text-sm text-black" ><a href="mailto:info@webnestmedia.com" >info@webnestmedia.com</a></p>
              </div>
              <div className="mb-8 border-b pb-6">
                <h3 className="text-xl font-semibold text-black mb-1">Sales</h3>
                <p className="text-sm text-gray-500 mb-2">Questions or queries? Get in touch!</p>
                <p className="font-semibold text-sm text-black" ><a href="mailto:info@webnestmedia.com" >Connect@webnestmedia.com</a></p>
              </div>
              <div className="mb-8 leading-[150%]">
                <h3 className="text-xl font-semibold text-black mb-1">Phone</h3>
                <p className="text-sm text-gray-500 mb-2">Mon–Fri from 9:00 AM to 6:00 PM</p>
                <p className="font-semibold text-sm text-black p-1"><a href="tel:+91-9696964606">+91-9696964606</a></p>
                <p className="font-semibold text-sm text-black p-1"><a href="tel:+91-9211676307">+91-9211676307</a></p>
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
                    name='name'
                    required
                    placeholder="Full name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                  />
                </div>
                <input
                  type="email"
                  name='email'
                  required
                  placeholder="you@company.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                />
                <input
                  type="tel"
                  name='phone'
                  required
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
      <div className="map w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.774447042441!2d77.03399687450147!3d28.426061993428554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf6f764144b85249%3A0x7e97ea72b8e32db7!2sWebnest%20Media!5e0!3m2!1sen!2sin!4v1749705098195!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

export default contactuspage;
