// import React, { useState } from "react";
// import "./contactform.css";

// const ContactForm = () => {
//     const [submitting, setSubmitting] = useState(false);
//     const [responseMsg, setResponseMsg] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setResponseMsg("");

//     const formData = new FormData(e.target);
//     const data = {
//         name: formData.get("name"),
//         email: formData.get("email"),
//         phone: formData.get("phone"),
//         message: formData.get("message"),
//         service: formData.get("service"),
//     };

//     try {
//         const response = await fetch("https://webnestmedia.com/webnestmediacontac.php/contact", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         });

//         if (response.ok) {
//             const result = await response.json();
//             setResponseMsg(result.message || "Form submitted successfully.");
//             e.target.reset(); // ✅ Clear form fields
//         } else {
//             const errorText = await response.text();
//             setResponseMsg("Submission failed: " + errorText);
//         }
//     } catch (error) {
//         console.error("Submission error:", error);
//         setResponseMsg("Submission failed. Please try again.");
//     } finally {
//         setSubmitting(false);
//     }
// };

//     return (
//        <div className="max-w-[621px] w-[100%] mx-auto    pt-[47px] pr-[44px] pl-[44px] pb-[47px]  rounded-[20px] border border-1-[#FFFFFF73] ">

//             <form onSubmit={handleSubmit}>

//                 <div className="form-group  mb-[17px]    ">
//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="Enter your full name"
//                         required
//                         className="w-[100%] h-[42px] px-4  text-[white] bg-[#FFFFFF66]  rounded-[16px] outline-none border-none"
//                     />
//                 </div>

//                 <div className="form-group mb-[17px]   ">
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Enter your email"
//                         required
//                         className="w-[100%] h-[42px] px-4 text-[white]   bg-[#FFFFFF66] rounded-[16px] outline-none   border-none"
//                     />
//                 </div>

//                 <div className="form-group mb-[17px]  ">
//                     <input
//                         type="tel"
//                         name="phone"
//                         placeholder="Enter your phone number"
//                         required
//                         className="w-[100%] px-4 text-[white]  h-[42px]  bg-[#FFFFFF66] rounded-[16px] outline-none border-none"
//                     />
//                 </div>

//                 <div className="form-group mb-[17px]   ">
//                     <select
//                         name="service"
//                         required
//                         className="w-full h-[42px]  px-4  bg-[#5c945c] rounded-[16px] text-white outline-none border-none appearance-none"
//                     >
//                         <option value="">Select a service</option>
//                         <option>Search Engine Marketing (SEM)</option>
//                         <option>Search Engine Optimization (SEO)</option>
//                         <option>Social Media Marketing (SMM)</option>
//                         <option>Web Development</option>
//                         <option>Content Marketing</option>
//                         <option>Affiliate Marketing</option>
//                     </select>
//                 </div>

//                 <div className="form-group mb-[17px]   w-[100%]">
//                    <textarea
//   name="message"
//   placeholder="I need your help"
//   className="w-full  bg-[#FFFFFF66] rounded-[16px] px-4 py-3 outline-none resize-none text-white placeholder-white"
// />

//                 </div>

//              <div className="flex items-end justify-end">
//                    <button
//                     type="submit"
//                     className="text-[white] max-w-[119px] w-[100%]  px-4 py-2 bg-[#4CAF50] border border-1-[#4CAF50]   rounded-md"
//                     disabled={submitting}
//                 >
//                     {submitting ? "Submitting..." : "Submit"}
//                 </button>
//              </div>

//                 {responseMsg && <p className="text-green-500 mt-2">{responseMsg}</p>}
//             </form>
//         </div>
//     );
// };

// export default ContactForm;




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
    "Search Engine Optimization (SEO)",
    "Social Media Marketing (SMM)",
    "Web Development",
    "Content Marketing",
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
    <div className="max-w-[621px] backdrop-blur-md  w-full mx-auto pt-[47px] px-[44px] pb-[47px] rounded-[20px] border border-[#FFFFFF73] ">
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group mb-[17px]">
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
         className="w-full h-[42px] px-4 text-white placeholder-white bg-[#FFFFFF66] rounded-[16px] outline-none border border-transparent  focus:border-white transition-all duration-200"

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
          {selectedServices.length > 0 && (
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
