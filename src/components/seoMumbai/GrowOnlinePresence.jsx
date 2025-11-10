import React from 'react'
import newlogo from "../../pages/seo/resources/newsseologo.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GrowOnlinePresence = () => {
  return (
    <section data-aos="fade-up" className="max-lg:mt-10 mt-24 container px-10 max-lg:px-[16px] flex flex-row-reverse max-lg:flex-col-reverse lg:items-center lg:justify-between mx-auto">

      {/* Image Section */}
      <div className="max-w-[440px] w-full max-lg:w-[80%] mx-auto max-lg:my-10">
        <LazyLoadImage
          src={newlogo}
          alt="WebNest Media Logo"
          className="w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-[60%]">
        <h2 className="text-[52px] max-lg:text-[36px] font-semibold">
          Grow Your Online Presence with the Best SEO Company in Mumbai
        </h2>
        <br />
        <p className="text-base mt-2 font-manrope">
          Having a website is only a part of the equation when it comes to online visibility. What matters is the ability to be found where your target audience is looking. When people look for your goods or services, an SEO agency in Mumbai helps your business go to the top of the list.
        </p>

        <p className="text-base mt-5 font-manrope">
          Our main goals are to improve your site's content, optimize it, and find the correct keywords that will actually work. Our top aim is to help your business stand out in the Mumbai digital marketplace by managing local rankings and making the customer experience better.
        </p>

        {/* CTA Button */}
        <div className="flex gap-3 mt-8">
          {/* <Link to="/about-us" aria-label="Learn more about our SEO Services"> */}
          <button
            onClick={() => scrollToSection("seoservice")}
            className="uiverse-button"
            aria-label="Scroll to SEO Service section"
          >
            Learn More
          </button>

          {/* </Link> */}
        </div>
      </div>
    </section>
  )
}

export default GrowOnlinePresence