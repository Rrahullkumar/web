
import React, { useState, useEffect, useRef } from "react";
import "./contactform.css";


const ContactForm = () => {
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

  return (
    <div className="max-w-[590px] backdrop-blur-md  w-full mx-auto pb-[47px] pt-[30px] px-[44px]  max-lg:px-[16px]  max-lg:py-[16px] rounded-[20px] border border-[#FFFFFF73] ">
      <h2 className="text-gray-300 shadow-sm font-semibold text-[26px] mb-4 text-center">Book a Free Consultation! </h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group mb-[17px]">
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
            className="w-full h-[42px] px-4 max-lg:px-2 text-white placeholder-white bg-[#FFFFFF66] rounded-[16px] outline-none border border-transparent  focus:border-white transition-all duration-200"

          />
        </div>

        {/* Email */}
        <div className="form-group mb-[17px]">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full h-[42px] px-4 text-white bg-[#FFFFFF66] placeholder-white rounded-[16px] outline-none border border-transparent  focus:border-white transition-all duration-200"

          />
        </div>

        {/* Phone */}
        <div className="form-group mb-[17px] ">
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
            className="w-full h-[42px] px-4 text-white placeholder-white bg-[#FFFFFF66] rounded-[16px] outline-none border border-transparent  focus:border-white transition-all duration-200"

          />
        </div>

        {/* Dropdown with Checkboxes */}
        <div className="form-group mb-[17px] relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full text-left text-white bg-[#FFFFFF66] px-4 py-2 rounded-[16px] border border-transparent focus:border-white transition-all duration-200"
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
            className="w-full bg-[#FFFFFF66] rounded-[16px] px-4 py-3 outline-none resize-none text-white placeholder-white  border border-transparent  focus:border-white transition-all duration-200"

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
        {responseMsg && <p className="text-green-500 mt-2">{responseMsg}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
