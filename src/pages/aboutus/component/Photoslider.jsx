import React, { useState, useRef } from "react";

import founder from "../resources/founder.svg";

const slides = [
  {
    image: founder,
    title: "Stephanie Sobral",
    description: "Founder & CEO, WebNest Media",
  },
  {
    image: founder,
    title: "Innovative Strategies",
    description: "We help businesses thrive with modern marketing.",
  },
  {
    image: founder,
    title: "Client-Centric Approach",
    description: "Your growth is our top priority.",
  },
  {
    image: founder,
    title: "Data-Driven Insights",
    description: "We analyze data to guide decisions.",
  },
  {
    image: founder,
    title: "Creative Campaigns",
    description: "Stand out in the market with our creativity.",
  },
];

const Photoslider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide(); // Swipe left
    }
    if (touchEndX.current - touchStartX.current > 50) {
      prevSlide(); // Swipe right
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Image Container */}
      <div
        className="relative w-[360px] h-[400px] max-lg:w-[350px] max-lg:h-[400px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`slide-${index}`}
           className={`absolute inset-0 mx-auto my-auto max-w-[70%] max-h-[90%] object-contain transition-opacity duration-500 ease-in-out ${
  slideIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
}`}

          />
        ))}

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute z-20 top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-70 transition"
        >
          &#10094;
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute z-20 top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-90 text-white px-3 py-1 rounded-full hover:bg-opacity-70 transition"
        >
          &#10095;
        </button>
      </div>

      {/* Text Section */}
      <div className="text-center max-w-[400px] mt-4">
        <p className="text-lg font-semibold">{slides[slideIndex].title}</p>
        <p className="text-sm text-gray-600">{slides[slideIndex].description}</p>
      </div>
    </div>
  );
};

export default Photoslider;
