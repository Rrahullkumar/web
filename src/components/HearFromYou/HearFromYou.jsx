import React, { useState, useEffect } from "react";
import bgImage from "./resources/webnestbgImage.png";

const ContactSection = () => {
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    
    const services = [
        "CRM/Customize CRM Software",
        "Google Ads/PPC", 
        "Web Development (Customize Web Design and Development)",
        "Meta Ads",
        "Email Marketing",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentServiceIndex((prevIndex) => 
                (prevIndex + 1) % services.length
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [services.length]);

    return (
        <div className="w-full container mx-auto flex flex-col lg:flex-row my-8 md:my-16 lg:my-20 xl:my-20">
            {/* Left side */}
            <div
                className="w-full lg:w-1/2 h-80 lg:h-96 flex items-center justify-center text-white 
                   bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
            >   
                <div className="text-left flex flex-col gap-5">
                    <h2 className="text-xl lg:text-[3.1rem]  font-bold mb-3 leading-tight">
                        We'd Love to<br />
                        Hear from you
                    </h2>
                    <div className="space-y-1 lg:space-y-3">
                        <p className="text-xs lg:text-base xl:text-lg">
                            <span className="font-semibold">Email:</span>{" "}
                            info@webnestmedia.com
                        </p>
                        <p className="text-xs lg:text-base xl:text-lg">
                            <span className="font-semibold">Phone no.:</span> +91 9696 964 606
                        </p>
                    </div>
                </div>
            </div>

            {/* Right side */}
            <div className="w-full lg:w-1/2 h-80 lg:h-96 flex flex-col p-3 lg:p-6 bg-[#0062410D] overflow-hidden">

                <h3 className="text-base lg:text-lg xl:text-xl font-medium mb-2 lg:mb-4 text-black">
                    Say Hi! And tell us about your Idea!
                </h3>

                <form className="flex-1 flex flex-col justify-between h-full">
                    <div className="space-y-2 lg:space-y-3">
                        {/* Name + Email */}
                        <div className="flex flex-col md:flex-row gap-2 lg:gap-3">
                            <input
                                type="text"
                                placeholder="Name"
                                className="flex-1 px-2 py-1.5 lg:px-3 lg:py-2 rounded-xl bg-transparent text-black border border-[#DADADA] 
                           focus:outline-none focus:ring-1 focus:ring-green-600 text-xs lg:text-sm"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 px-2 py-1.5 lg:px-3 lg:py-2 rounded-xl bg-transparent text-black border border-[#DADADA]
                           focus:outline-none focus:ring-1 focus:ring-green-600 text-xs lg:text-sm"
                            />
                        </div>

                        {/* Contact + Services */}
                        <div className="flex flex-col md:flex-row gap-2 lg:gap-3">
                            <input
                                type="text"
                                placeholder="Contact"
                                className="flex-1 px-2 py-1.5 lg:px-3 lg:py-2 rounded-xl bg-transparent text-black border border-[#DADADA] 
                           focus:outline-none focus:ring-1 focus:ring-green-600 text-xs lg:text-sm"
                            />
                            <input
                                type="text"
                                placeholder={`Services : ${services[currentServiceIndex]}`}
                                className="flex-1 px-2 py-1.5 lg:px-3 lg:py-2 rounded-xl bg-transparent text-black border border-[#DADADA] 
                           focus:outline-none focus:ring-1 focus:ring-green-600 text-xs lg:text-sm"
                            />
                        </div>

                        {/* Message */}
                        <textarea
                            placeholder="Message"
                            rows="3"
                            className="w-full px-2 py-1.5 lg:px-3 lg:py-2 rounded-xl bg-transparent text-black border border-gray-300 
                         resize-none focus:outline-none focus:ring-1 focus:ring-green-600 text-xs lg:text-sm"
                        ></textarea>
                    </div>

                    {/* Submit button */}
                    <div className="flex justify-end mt-2 lg:mt-4">
                        <button
                            type="submit"
                            className="px-4 py-1.5 lg:px-6 lg:py-2 rounded-xl text-white font-semibold text-xs lg:text-sm
                         bg-[#006241] hover:bg-green-900 transition-colors duration-200"
                        >
                            Submit
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ContactSection;
