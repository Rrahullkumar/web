import React, { useEffect, useState } from 'react'
import Accordion from './component/Accordian'
import Conatctfrom from "../../components/contact/contactform";
import { FiPhone } from "react-icons/fi";

import Webnest_Logo from "./resources/Webnest_Logo.svg";
import difference from "./resources/difference.svg";
import bulb from "./resources/bulb.svg"
import team from "./resources/team.svg";
import founder from "./resources/founder.svg";

import Aboutcounter from "./component/aboutcounter"

import image1 from "./resources/image1.svg";
import image2 from "./resources/image2.svg";
import image3 from "./resources/image3.svg";
import image4 from "./resources/image4.svg";
import image5 from "./resources/image5.svg";
import image6 from "./resources/image6.svg";
import { useRef } from 'react';


const cards = [
  { icon: image1, title: "Client-Centric Approach" },
  { icon: image2, title: "Data-Driven Decisions" },
  { icon: image3, title: "Holistic Expertise" },
  { icon: image4, title: "Holistic Expertise" },
  { icon: image5, title: "Local & Global Insights" },
  { icon: image6, title: "Passionate Team" },

];

import  Photoslider  from "./component/Photoslider"

const AboutUS = () => {

  const wrapperRef = useRef();

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        setTrigger(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );


    if (wrapperRef.current) {
      observer1.observe(wrapperRef.current);
    }



    return () => {
      if (wrapperRef.current) {
        observer1.unobserve(wrapperRef.current);
      }

    };
  }, []);


  return (
    <div className=" mt-[120px] max-lg:mt-[50px]">

      <h4 className='text-center   text-[48px] leading-[100%]'> <span className='font-semibold text-green-500'> About </span> <span className='font-normal text-black'>US</span> </h4>



      <section className="max-w-[1440px] mt-[20px] w-full mx-auto pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px]  text-left  flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
        <div className="max-w-2xl  max-md:w-[100%]"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="100"
        >
          <h1 className="text-[52px] max-lg:text-[38px] font-bold text-[#000000]  mb-4">
            Few Words About WebNest Media
          </h1>
          <p className=" text-[black] text-[18px] mb-4">
            Best Digital Marketing Agency in Gurgaon, India. The Digital Marketing Company that gives it full commitment to grow your brand.
          </p>
          <p className=" text-[#000000] text-[18px]">
            WebNest Media is a digital marketing company in Gurgaon, working with awesome brands across India and worldwide. Our digital marketing experts do all things digital from SEO and PPC to social media marketing, SEM, and web development so you get the right services which you paid. We have a team of our services including SEO Executive, Web Developer, Graphic Designer, Social Media Experts & Content Writers. We also redesign and redevelopment of existing web sites.
          </p>
        </div>
        <div className="flex-shrink-0   max-xl:w-[50%] items-center justify-center">
          <img
            src={Webnest_Logo}

            alt="WebNest Media Logo"
            className="w-full "
          />
        </div>
      </section>


      <section className=" overflow-hidden max-w-[1440px] w-[100%] mx-auto pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] text-center mt-[56px]" ref={wrapperRef}
        onMouseEnter={() => setTrigger(true)}
      >

        <Aboutcounter trigger={trigger} />

      </section>




      <section className=" max-w-[1440px] w-[100%] mx-auto text-center pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] pb-10  relative z-10">

        <h4 className="text-sm uppercase tracking-widest text-[#9bc394] font-semibold">
          Vision & Mission
        </h4>
        <h1 className="text-[52px] max-lg:text-[38px] font-bold text-[black] mt-2 mb-4">
          What We Believe
        </h1>
        <p className="max-w-2xl mx-auto text-[18px] text-gray-600">
          Our vision is to empower businesses of all sizes to achieve success through data-driven decision making. We strive to be a leader in the digital space, delivering valuable results and innovative solutions.
        </p>
        <p className="max-w-2xl mx-auto text-[18px]  text-gray-600 mt-4">
          Our mission is to deliver exceptional digital marketing services that drive measurable business outcomes. We work with clients of all sizes and sectors, closely aligned with their mission and goals to deliver impactful results.
        </p>

      </section>



      <section className="
    
    max-w-[1440px] w-full mx-auto pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] text-left flex flex-col md:flex-row items-center justify-between gap-12
    
    ">

        <div className="flex-shrink-0   max-xl:w-[50%] items-center justify-center">
          <img
            src={bulb}
            alt="WebNest Media bulb"
            className="w-full "
          />
        </div>


        <div className="max-w-2xl max-md:w-[100%]">
          <h2 className="text-[52px] max-lg:text-[38px] font-bold text-gray-900 mb-4">
            Our Key to Excellence
          </h2>
          <p className=" text-gray-700 text-[18px] mb-4">
            At WebNest Media, our success stems from a simple yet powerful philosophy: innovation meets measurable results. We think that staying ahead in the ever-changing landscape of digital marketing requires ongoing evolution. Our team of passionate strategists, creative minds, and data-driven analysts are not just keeping pace with trends; we're setting them.
          </p>
          <p className="text-[18px] text-gray-700">
            We meticulously analyze market shifts, integrate cutting-edge technologies, and rigorously test every strategy to ensure it delivers tangible ROI for your business. Our commitment to continuous learning, combined with a deep understanding of your unique challenges, allows us to craft bespoke solutions that don't just meet expectations but exceed them. This dedication to forward-thinking strategies and unwavering client success is truly our key to excellence

          </p>
        </div>

      </section>


      <section className='mt-[96px] max-w-[1440px] w-[100%] mx-auto pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] '>
        <h6 className='text-[32px] font-semibold text-black leading-[120%] text-center'>Ready to Transform Your Digital Presence?</h6>
        <p className='text-[18px] text-black font-light text-center mt-[32px] mb-[128px] '> Whether you're looking to boost your search rankings, engage your social audience, or develop a comprehensive <br className='max-lg:hidden' /> digital strategy, WebNest Media is here to help.</p>


      </section>



<section className="max-w-[1440px] w-full mx-auto flex flex-col md:flex-row justify-center items-start gap-5 pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px]  overflow-hidden">
      {/* Left Side - Team Image and Description */}
      <div className="w-full md:w-1/2 text-center md:text-center">
        <img
          src={team}
          alt="Team"
          className="mb-6 w-full "
        />
        <p className="text-gray-700 text-base leading-relaxed">
          Our diverse team includes strategists, designers, developers, content creators,
          media buyers, analysts, and client success managers—all working seamlessly to deliver
          not just campaigns, but impactful digital experiences. We’re constantly optimizing our
          strategies to provide our clients with a smooth, transparent, and personalized journey
          from initial brief to measurable results.
        </p>
      </div>

      {/* Right Side - Slider */}
      <div className="w-full md:w-1/2 flex justify-center items-center overflow-hidden">
    <Photoslider/>
      </div>
    </section>
    

      <section className="  max-w-[1440px] mt-[50px] w-[100%] mx-auto conatctform flex flex-row items-center justify-center flex-wrap gap-10 max-lg:flex-col mb-10 pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16]">

        {/* Left Side: Text + Numbers */}
        <div className="w-[100%] max-lg:w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-[#5c945c] ">
            Work With Us and Take <br />Your Business to the Next Level
          </h3>
          <p className="text-[17px] text-black mt-5 mb-5 ">
            We provide the tools, expertise, and support you need to grow faster,
            reach more customers, and stay ahead of the competition.
            Let’s take your business to the next level—together.
          </p>


          <div className="space-y-2">
            <button className="getstarted-btnn w-[200px] flex items-center gap-2 px-4 py-2 rounded bg-[#5c945c] text-white">
              <FiPhone className="text-white" />
              <a href="tel:+919696964606" className="text-white">
                +91-9696964606
              </a>
            </button>

            <button className="getstarted-btnn w-[200px] flex items-center gap-2 px-4 py-2 rounded bg-[#5c945c] text-white">
              <FiPhone className="text-white" />
              <a href="tel:+919211676307" className="text-white">
                +91-9211676307
              </a>
            </button>
          </div>


        </div>



      </section>

      <section className=' max-w-[1440px] w-[100%] mx-auto  mt-[60px] mb-[50px] pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16]'>
        <h2 className='mt-[40px] text-[black] font-normal  text-center leading-[120%]
          text-[22px]           
    sm:text-[23px]        
    md:text-[36px]        
    xl:text-[44px]    
        '>Let's address your <span className='text-[#4CAF50] '>questions </span>today</h2>

        <Accordion />
      </section>




    </div>

  )
}

export default AboutUS
