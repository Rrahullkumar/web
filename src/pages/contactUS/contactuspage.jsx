import React, { useState, useRef } from "react";
import Map from './resources/Map.svg';
import './contactus.css';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet";
import sales from './resources/sales.svg';
import call from './resources/call2.svg';
import chat from './resources/chat2.svg';
import location from './resources/location2.svg';
import Accordion from "./components/Accordian";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const ContactUsPage = () => {
  const mapRef = useRef(null);

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
        e.target.reset();
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

  const scrollToMap = () => {
    mapRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="">
      <Helmet>
        <link rel="canonical" href="https://webnestmedia.com/contact-us" />
      </Helmet>

      <div className=" flex flex-col justify-center items-center text-center px-4 md:px-8 relative">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-base text-[#4CAF50] mt-[50px] max-md:mt-[30px] font-semibold"
        >
          Contact Us
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[32px] md:text-[52px] font-extrabold mb-4"
        >
          Get in touch with our team
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg mb-10 px-4"
        >
          We have the team and know-how to scale your business 10X faster
        </motion.h2>

        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          src={Map}
          alt="Map"
          className="w-full max-w-[900px]"
        />
      </div>

      <div className="max-w-[1440px] mx-auto max-md:mt-[50px]">
        <div className="contactcard grid grid-cols-1 max-md:place-items-center md:grid-cols-2 lg:grid-cols-4 gap-5 mb-24 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-start justify-between border border-white/30 backdrop-blur-md bg-white/30 rounded-2xl w-[310px] p-6 gap-6 shadow-xl"
          >
              <LazyLoadImage src={sales} alt="Chat to sales" className="w-10 h-10" />
            <div>
              <p className="text-lg font-semibold text-left">Chat to sales</p>
              <p className="text-base mb-4">Speak to our friendly team</p>
              <motion.button
                whileHover={{ backgroundColor: "#4CAF50", color: "#fff" }}
                transition={{ duration: 0.4 }}
                className="text-base p-3 font-semibold rounded-lg border border-opacity-50 overflow-hidden relative"
              >
                <a href="mailto:connect@webnestmedia.com" target="_blank" rel="noopener noreferrer">connect@webnestmedia.com</a>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-start justify-between border border-white/30 backdrop-blur-md bg-white/30 rounded-2xl w-[310px] p-6 gap-6 shadow-xl"
          >
              <LazyLoadImage src={chat} alt="Chat to support" className="w-10 h-10" />
            <div>
              <p className="text-lg font-semibold text-left">Chat to support</p>
              <p className="text-base mb-4">We're here to help</p>
              <motion.button
                whileHover={{ backgroundColor: "#4CAF50", color: "#fff" }}
                transition={{ duration: 0.4 }}
                className="text-base p-3 font-semibold rounded-lg border border-opacity-50 overflow-hidden relative"
              >
                <a href="mailto:info@webnestmedia.com" target="_blank" rel="noopener noreferrer">info@webnestmedia.com</a>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-start justify-between border border-white/30 backdrop-blur-md bg-white/30 rounded-2xl w-[310px] p-6 gap-6 shadow-xl"
          >
              <LazyLoadImage src={location} alt="Visit our office" className="w-10 h-10" />
            <div>
              <p className="text-lg font-semibold text-left">Visit our office</p>
              <p className="text-base mb-4">Visit our office HQ</p>
              <motion.button
                whileHover={{ backgroundColor: "#4CAF50", color: "#fff" }}
                transition={{ duration: 0.5 }}
                className="text-base p-3 font-semibold rounded-lg border border-opacity-50 overflow-hidden relative"
                onClick={scrollToMap}
              >
                View Location
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-start justify-between border border-white/30 backdrop-blur-md bg-white/30 rounded-2xl w-[310px] p-6 gap-6 shadow-xl"
          >
              <LazyLoadImage src={call} alt="Call us" className="w-10 h-10" />
            <div>
              <p className="text-lg font-semibold text-left">Call us</p>
              <p className="text-base mb-4">Speak to our friendly team</p>
              <motion.button
                whileHover={{ backgroundColor: "#4CAF50", color: "#fff" }}
                transition={{ duration: 0.4 }}
                className="text-base p-3 font-semibold rounded-lg border border-opacity-50 overflow-hidden relative"
              >
                <a href="tel:+919696964606" target="_blank" rel="noopener noreferrer">+91 9696964606</a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="px-4 md:px-8 mx-auto max-w-[1440px]">
        <h2
         
          className="text-[28px] md:text-[36px] text-center text-[#4CAF50] font-semibold mb-8 "
        >
          Frequently Asked Questions
        </h2>

        <Accordion />

        
      </div>
      <div ref={mapRef} className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.7746026210107!2d77.03657179999999!3d28.4260573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf6f764144b85249%3A0x7e97ea72b8e32db7!2sWebnest%20Media!5e0!3m2!1sen!2sin!4v1751022529639!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Webnest Media Location"
          />
        </div>
    </div>
  );
}

export default ContactUsPage;
