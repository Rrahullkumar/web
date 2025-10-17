import React, { useEffect, useState, useRef } from 'react';

const contactfooter = () => {
    const [submitting, setSubmitting] = useState(false);
    const [responseMsg, setResponseMsg] = useState("");
    const [selectedServices, setSelectedServices] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const headingRef = useRef(null);
    const [animateKey, setAnimateKey] = useState(0);

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
        setSelectedServices((prev) =>
            checked ? [...prev, value] : prev.filter((service) => service !== value)
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
            const response = await fetch("https://webnestmedia.in/webnestmediacontac.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimateKey((prev) => prev + 1);
                    }
                });
            },
            { threshold: 0.5 }
        );
        if (headingRef.current) observer.observe(headingRef.current);
        return () => observer.disconnect();
    }, []);

    const headingText = "Connect Now";

    return (
        <div id="contact" className="bg-[#C6CFFF20] ">
            <div className="flex flex-col items-center justify-center max-md:mx-4 md:mx-48 max-md:px-4 md:px-10 py-14 max-md:py-4">
                
                {/* ✅ Animated Heading */}
                <div className="text-center mb-16">
                    <p ref={headingRef} className="max-md:text-4xl md:text-6xl lg:text-6xl mt-6 leading-tight flex justify-center flex-wrap">
                        {headingText.split("").map((char, index) => (
                            <span
                                key={`${animateKey}-${index}`}
                                className="text-black font-black inline-block bounce-letter"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animationDuration: "0.6s",
                                    animationIterationCount: 1,
                                    animationFillMode: "forwards",
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </p>
                </div>

                {/* ✅ Responsive Form */}
                <form onSubmit={handleSubmit} className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold uppercase">Name</label>
                        <input name="name" type="text" required placeholder="Let’s start with your name…" className="bg-transparent border-b-2 border-black focus:outline-none placeholder:text-black/50 py-2" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold uppercase">Email</label>
                        <input name="email" type="email" required placeholder="Best email to reach you." className="bg-transparent border-b-2 border-black focus:outline-none placeholder:text-black/50 py-2" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold uppercase">Phone</label>
                        <input name="phone" type="tel" required placeholder="Your number (promise we won’t spam)." className="bg-transparent border-b-2 border-black focus:outline-none placeholder:text-black/50 py-2" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold uppercase">Your Brand</label>
                        <textarea name="message" rows="1" required placeholder="Tell us everything. We’re all ears…" className="bg-transparent border-b-2 border-black focus:outline-none placeholder:text-black/50 py-2 resize-none"></textarea>
                    </div>

                    {/* ✅ Services Dropdown (Responsive width) */}
                    <div className="col-span-1 md:col-span-2 relative">
                        <label className="text-sm font-semibold uppercase">Services</label>
                        <div className="relative mt-2" ref={dropdownRef}>
                            <button type="button" className="w-full md:w-[50%] text-left bg-[white] border border-black py-3 px-4 rounded-lg" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                {selectedServices.length > 0 ? selectedServices.join(", ") : "Select services"}
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute z-50 bg-white text-black border border-black mt-2 w-full md:w-[50%] rounded-xl shadow-lg max-h-60 overflow-y-auto">
                                    {serviceOptions.map((service) => (
                                        <label key={service} className="flex items-center p-3 hover:bg-gray-100 cursor-pointer">
                                            <input type="checkbox" value={service} checked={selectedServices.includes(service)} onChange={handleCheckboxChange} className="mr-2" />
                                            {service}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ✅ Submit */}
                    <div className="col-span-1 md:col-span-2 flex flex-col items-center mt-4">
                        <button type="submit" disabled={submitting} className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition">
                            {submitting ? "Submitting..." : "Submit"}
                        </button>
                        {responseMsg && <p className="text-center mt-4 text-black font-medium">{responseMsg}</p>}
                    </div>
                </form>
            </div>

            {/* 🎨 Bouncy Animation */}
            <style>{`
                @keyframes letterBounce {
                    0% { transform: scale(1); }
                    30% { transform: scale(1.4); }
                    60% { transform: scale(0.9); }
                    100% { transform: scale(1); }
                }
                .bounce-letter {
                    animation-name: letterBounce;
                    animation-timing-function: ease-out;
                }
            `}</style>
        </div>
    );
};

export default contactfooter;
