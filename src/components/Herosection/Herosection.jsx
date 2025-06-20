
import React from "react";
import ContactForm from "../contact/contactform";

const HeroSection = ({ backgroundImage, heading, highlight, paragraph }) => {
  return (
    <div
      className="w-full bg-cover bg-center relative flex items-center justify-center py-12 px-4 md:py-[59px] md:px-[43px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center w-full max-w-[1440px] mx-auto relative z-10">
        {/* Text Section */}
        <div className="text-center lg:text-left text-white max-w-xl px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {heading} <span className="text-green-400">{highlight}</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg">{paragraph}</p>
        </div>

        {/* Form Section */}
        <div className="w-full max-w-[621px] px-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
