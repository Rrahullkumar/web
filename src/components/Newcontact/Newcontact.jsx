import React from 'react';
import seocontactimage from './Resources/mailbox.svg';
import seocontactphoneicon from './Resources/seocontactphoneicon.svg';
import seolocation from './Resources/seolocation.svg';
import SeoConatct from './Resources/seoconatct.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Newcontact = () => {
  return (
    <>
      {/* Custom Background Position for Mobile */}
      <style>
        {`
          @media (max-width: 768px) {
            .contact-bg {
              background-position: 90% center !important;
              background-size: cover !important;
            }
          }
          @media (min-width: 769px) {
            .contact-bg {
              background-position: 30% center !important;
              background-size: cover !important;
            }
          }
        `}
      </style>

      <section className="relative w-full overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-cover contact-bg overflow-hidden"
          style={{
            backgroundImage: `url(${SeoConatct})`,
          }}
          aria-hidden="true"
        ></div>

        {/* Hidden Lazy Load Image for SEO */}
        <LazyLoadImage
          src={SeoConatct}
          alt="Contact Us image"
          className="hidden"
          aria-hidden="true"
          // loading="lazy"
        />

        {/* Foreground Content */}
        <div className="relative w-full max-w-7xl mx-auto flex flex-col pl-[40px] pr-[40px] max-lg:pl-[40px] max-lg:pr-[16px] py-10 max-lg:py-6 max-md:py-4">
          
          {/* Section Title */}
          <div className="w-full">
            <p className="uppercase text-[16px] max-md:text-[18px] font-normal leading-[160%] mb-4 text-white">
              Contact Us
            </p>
            <h6 className="text-[32px] max-lg:text-[18px]  font-normal leading-[130%] text-white mt-5">
              Let’s make the web talk about
              <br className="max-md:hidden" />
              your project
            </h6>
          </div>

          {/* Sub Heading */}
          <h3 className="text-[24px] max-lg:text-[16px]  font-normal leading-[130%] text-white mt-12 max-lg:mt-6 max-md:mt-4">
            Get a Free Consultation
          </h3>

          {/* Phone */}
          <div className="flex items-center gap-3 mt-3 max-md:mt-2">
            <LazyLoadImage src={seocontactphoneicon} alt="Phone" className="w-5 h-5" />
            <a
              href="tel:+919696964606"
              className="text-[24px] max-lg:text-[16px]  font-normal leading-[130%] text-white"
            >
              +91 9696964606
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 mt-2 mb-2">
            <LazyLoadImage src={seocontactimage} alt="Email" className="w-5 h-5" />
            <a
              href="mailto:info@webnest.in"
              className="text-[18px] max-md:text-[14px] font-normal leading-[130%] text-white"
            >
              info@webnestmedia.com
            </a>
          </div>

          {/* Location */}
         <div className="flex gap-3 mt-2 w-full max-w-[40%] max-md:max-w-[80%] max-sm:max-w-full">

            <LazyLoadImage src={seolocation} alt="Location" className="w-5 h-5 mt-1" />
            <span className="text-[18px] max-md:text-[14px] font-normal leading-[130%] text-white">
              1st Floor Orchid Business Park,
              Near Subhash Chowk, Sector 48,
              Gurugram, Haryana 122001
            </span>
          </div>
        </div>


      </section>
    </>
  );
};

export default Newcontact;
