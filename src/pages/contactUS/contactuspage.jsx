import React, { useState, useRef, useEffect } from "react";
import Map from "./resources/Map.svg";
import "./contactus.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import sales from "./resources/sales.svg";
import call from "./resources/call2.svg";
import chat from "./resources/chat2.svg";
import location from "./resources/location2.svg";
import Accordion from "./components/Accordian";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ContactUsPage = () => {
  const mapRef = useRef(null);

  const [submitting, setSubmitting] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const serviceOptions = [
    "Search Engine Marketing (SEM)",
    "Web Development",
    "Search Engine Optimization (SEO)",
    "Content Marketing",
    "Social Media Marketing (SMM)",
    "Affiliate Marketing",
  ];

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedServices((prevSelected) =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter((service) => service !== value)
    );
    setIsDropdownOpen(false);
  };

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
      services: selectedServices,
    };

    try {
      const response = await fetch(
        "https://webnestmedia.com/webnestmediacontac.php/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        setResponseMsg(result.message || "Form submitted successfully.");
        e.target.reset();
        setSelectedServices([]);
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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToMap = () => {
    mapRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      <Helmet>
        <link rel="canonical" href="https://webnestmedia.com/contact-us" />
      </Helmet>

      <div className=" flex flex-col justify-center items-center text-center  md:px-8 relative">
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

        <div className="bg-left max-lg:bg-center bg-no-repeat w-full flex justify-end container   " style={{ backgroundImage: `url(${Map})` }}>
        
          <div className="max-w-[26rem] max-lg:mx-auto  pb-[47px] pt-[30px] px-[44px]  max-lg:px-[16px]  max-lg:py-[25px] rounded-[20px]  backdrop-blur-md mt-10 border border-[#5c945c]">
            <h2 className="text-[#5c945c]  font-semibold max-lg:font-bold text-[26px] max-md:text-[22px] mb-4 max-lg:mb-6 text-center">
              Book a Free Consultation!{" "}
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="form-group mb-[17px]">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  className="w-full h-[42px] px-4 text-[#5c945c] bg-[#FFFFFF66] placeholder-[#5c945c] rounded-[16px] outline-none border border-[#5c945c]  focus:border-[#5c945c] transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div className="form-group mb-[17px]">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full h-[42px] px-4 text-[#5c945c] bg-[#FFFFFF66] placeholder-[#5c945c] rounded-[16px] outline-none border border-[#5c945c]  focus:border-[#5c945c] transition-all duration-200"
                />
              </div>

              {/* Phone */}
              <div className="form-group mb-[17px] ">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                  className="w-full h-[42px] px-4 text-[#5c945c] placeholder-[#5c945c] bg-[#FFFFFF66] rounded-[16px] outline-none border border-[#5c945c]  focus:border-[#5c945c] transition-all duration-200"
                />
              </div>

              {/* Dropdown with Checkboxes */}
              <div className="form-group mb-[17px] relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full text-left text-[#5c945c] bg-[#FFFFFF66] px-4 py-2 rounded-[16px] border border-[#5c945c] focus:border-[#5c945c] transition-all duration-200"
                >
                  {selectedServices.length > 0
                    ? `Selected: ${selectedServices.length} service(s)`
                    : "Select Services You Need"}
                </button>

                {/* Tags showing selected */}
                {/* {selectedServices.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {selectedServices.map((service) => (
                <span
                  key={service}
                  className="bg-green-600 text-white text-sm px-3 py-1 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
          )} */}

                {selectedServices.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedServices.map((service) => (
                      <span
                        key={service}
                        className="relative bg-green-600 text-white text-sm px-3 py-1 rounded-full pr-6"
                      >
                        {service}
                        <span
                          className="absolute top-[-6px] right-[-6px] w-5 h-5 bg-white text-red-700 font-semibold rounded-full flex items-center justify-center text-xs cursor-pointer"
                          onClick={() =>
                            setSelectedServices((prev) =>
                              prev.filter((s) => s !== service)
                            )
                          }
                        >
                          ✕
                        </span>
                      </span>
                    ))}
                  </div>
                )}

                {/* Dropdown */}
                {isDropdownOpen && (
                  // <div className="absolute z-999 backdrop-blur-md mt-2 w-full rounded-[16px] shadow-lg max-h-[200px] overflow-y-auto">
                  <div className="absolute z-[999] bg-black backdrop-blur-md mt-2 w-full rounded-[16px] shadow-lg max-h-[240px] ">
                    <div className="p-4 space-y-2">
                      {serviceOptions.map((service) => (
                        <label
                          key={service}
                          className="flex items-center text-white justify-between"
                        >
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              value={service}
                              checked={selectedServices.includes(service)}
                              onChange={handleCheckboxChange}
                              className="mr-2"
                            />
                            {service}
                          </div>
                          {selectedServices.includes(service) && (
                            <span className="text-white ml-2">✔️</span>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Message */}
              <div className="form-group mb-[17px] w-full">
                <textarea
                  name="message"
                  placeholder="I need your help"
                  className="w-full bg-[#FFFFFF66] h-20 rounded-[16px] px-4 py-3 outline-none resize-none text-[#5c945c]] placeholder-[#5c945c]  border border-[#5c945c]  focus:border-[#5c945c] transition-all duration-200"
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-end justify-end">
                <button
                  type="submit"
                  className="text-white max-w-[119px] w-full px-4 py-2 bg-[#4CAF50] border border-[#4CAF50] rounded-md"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </div>

              {/* Response Message */}
              {responseMsg && (
                <p className="text-green-500 mt-2">{responseMsg}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24 px-4 md:px-8 ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-start justify-between border border-white/30 backdrop-blur-md bg-white/30 rounded-2xl w-[19rem] p-6 gap-6 shadow-xl"
          >
            <LazyLoadImage
              src={sales}
              alt="Chat to sales"
              className="w-10 h-10"
            />
            <div>
              <p className="text-lg font-semibold text-left">Chat to sales</p>
              <p className="text-base mb-4">Speak to our friendly team</p>
              <motion.button
                whileHover={{ backgroundColor: "#4CAF50", color: "#fff" }}
                transition={{ duration: 0.4 }}
                className="text-base p-3 font-semibold rounded-lg border border-opacity-50 overflow-hidden relative"
              >
                <a
                  href="mailto:connect@webnestmedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WebNest Media  Conatct us page"
                >
                  connect@webnestmedia.com
                </a>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-start justify-between border border-white/30 backdrop-blur-md bg-white/30 rounded-2xl w-[19rem] p-6 gap-6 shadow-xl"
          >
            <LazyLoadImage
              src={chat}
              alt="Chat to support"
              className="w-10 h-10"
            />
            <div>
              <p className="text-lg font-semibold text-left">Chat to support</p>
              <p className="text-base mb-4">We're here to help</p>
              <motion.button
                whileHover={{ backgroundColor: "#4CAF50", color: "#fff" }}
                transition={{ duration: 0.4 }}
                className="text-base p-3 font-semibold rounded-lg border border-opacity-50 overflow-hidden relative"
              >
                <a
                  href="mailto:info@webnestmedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WebNest Media  info website "
                >
                  info@webnestmedia.com
                </a>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-start justify-between border border-white/30 backdrop-blur-md bg-white/30 rounded-2xl w-[19rem] p-6 gap-6 shadow-xl"
          >
            <LazyLoadImage
              src={location}
              alt="Visit our office"
              className="w-10 h-10"
            />
            <div>
              <p className="text-lg font-semibold text-left">
                Visit our office
              </p>
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
            className="flex flex-col items-start justify-between border border-white/30 backdrop-blur-md bg-white/30 rounded-2xl w-[19rem] p-6 gap-6 shadow-xl"
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
                <a
                  href="tel:+919696964606"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WebNest Media  Conatct us page"
                >
                  +91 9696964606
                </a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="px-4 md:px-8 mx-auto container ">
        <h2 className="text-[28px] md:text-[36px] text-center text-[#4CAF50] font-semibold mb-8 ">
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
};

export default ContactUsPage;
