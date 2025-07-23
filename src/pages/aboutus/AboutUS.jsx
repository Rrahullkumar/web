import  { useEffect, useState } from 'react'
import Accordion from './component/Accordian'


import Webnest_Logo from "../../assets/newlogo.svg";

import bulb from "./resources/bulb.svg"

import Aboutcounter from "./component/aboutcounter"

// import image1 from "./resources/image1.svg";
// import image2 from "./resources/image2.svg";
// import image3 from "./resources/image3.svg";
// import image4 from "./resources/image4.svg";
// import image5 from "./resources/image5.svg";
// import image6 from "./resources/image6.svg";
import { useRef } from 'react';

import AboutTesimonial  from "./component/aboutTestimonial"

// const cards = [
//   { icon: image1, title: "Client-Centric Approach" },
//   { icon: image2, title: "Data-Driven Decisions" },
//   { icon: image3, title: "Holistic Expertise" },
//   { icon: image4, title: "Holistic Expertise" },
//   { icon: image5, title: "Local & Global Insights" },
//   { icon: image6, title: "Passionate Team" },

// ];

// import  Photoslider  from "./component/Photoslider"
import { LazyLoadImage } from 'react-lazy-load-image-component';


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
    <div className=" max-lg:mt-[50px]">

      <h4 data-aos="fade-up"  className='text-center   text-[52px] lg:pt-[60px] mb-[20px]  max-lg:text-[38px]   leading-[100%]'> <span className='font-semibold text-green-500'> About </span> <span className='font-normal text-black'>US</span> </h4>



      <section className="max-w-[1440px] mt-[96px] max-md:mt-[50px] w-full mx-auto pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px]  text-left  flex flex-col md:flex-row items-center  gap-[106px] max-lg:gap-5  overflow-hidden">
        <div className="max-w-2xl  max-md:w-[100%]"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="100"
        >
          <h1 data-aos="fade-up"  className="text-[48px] max-md:text-center max-lg:text-[34px] leading-[120%] font-semibold text-[#000000]  mb-4 max-lg:mb-8">
            Few Words About WebNest Media
          </h1>
          <p data-aos="fade-up"  className=" text-[black] text-base max-md:text-base mb-4 max-md:text-center max-md:mb-2">
            Best Digital Marketing Agency in Gurgaon, India. The Digital Marketing Company that gives it full commitment to grow your brand.
          </p>
          <p data-aos="fade-up"  className=" text-[#000000] text-base max-md:text-center max-md:text-base ">
            WebNest Media is a digital marketing company in Gurgaon, working with awesome brands across India and worldwide. Our digital marketing experts do all things digital from SEO and PPC to social media marketing, SEM, and web development so you get the right services which you paid. We have a team of our services including SEO Executive, Web Developer, Graphic Designer, Social Media Experts & Content Writers. We also redesign and redevelopment of existing web sites.
          </p>
        </div>
        <div data-aos="fade-up"  className="flex-shrink-0 max-md:w-[80%] max-md:mt-10 max-md: w-max-xl:w-[40%] items-start justify-start">
            <LazyLoadImage
            src={Webnest_Logo}

            alt="WebNest Media Logo"
            className="w-[400px] max-md:w-full "
          />
        </div>
      </section>


      <section data-aos="fade-up" className=" overflow-hidden max-w-[1440px] w-[100%]  mx-auto pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] text-center mt-[96px] mb-[96px] max-md:mt-[50px]" ref={wrapperRef}
        onMouseEnter={() => setTrigger(true)}
      >

        <Aboutcounter  trigger={trigger} />

      </section>




      <section className=" max-w-[1440px] w-[100%] mx-auto text-center pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] pb-10  relative z-10">

        <h4 data-aos="fade-up" className="text-sm uppercase tracking-widest text-[#9bc394] font-semibold">
          Vision & Mission
        </h4>
        <h1 data-aos="fade-up" className="text-[52px] max-lg:text-[38px] font-semibold text-[black] mt-2 mb-4">
          What We Believe
        </h1>
        <p data-aos="fade-up" className="max-w-2xl mx-auto text-base text-gray-600">
          Our vision is to empower businesses of all sizes to achieve success through data-driven decision making. We strive to be a leader in the digital space, delivering valuable results and innovative solutions.
        </p>
        <p data-aos="fade-up" className="max-w-2xl mx-auto text-base  text-gray-600 mt-4">
          Our mission is to deliver exceptional digital marketing services that drive measurable business outcomes. We work with clients of all sizes and sectors, closely aligned with their mission and goals to deliver impactful results.
        </p>

      </section>



      <section className="
    
    max-w-[1440px] mb-[96px] max-md:mb-10 mt-[96px] max-lg:mt-[10px] w-full mx-auto pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] text-left flex flex-col md:flex-row items-center justify-evenly gap-12 max-lg:gap-5
    
    ">

        <div data-aos="fade-up" className="flex-shrink-0   max-xl:w-[40%] items-center justify-center">
            <LazyLoadImage
            src={bulb}
            alt="WebNest Media bulb"
             className="lg:w-[85%]"
          />
        </div>


        <div className="max-w-2xl max-md:w-[100%]">
          <h2 data-aos="fade-up" className="text-[52px] max-lg:text-[38px] max-lg:text-center font-semibold text-gray-900 mb-8">
            Our Key to Excellence
          </h2>
          <p data-aos="fade-up" className=" text-gray-700 text-base max-md:text-center mb-4">
            At WebNest Media, our success stems from a simple yet powerful philosophy: innovation meets measurable results. We think that staying ahead in the ever-changing landscape of digital marketing requires ongoing evolution. Our team of passionate strategists, creative minds, and data-driven analysts are not just keeping pace with trends; we're setting them.
          </p>
          <p data-aos="fade-up" className="text-base text-gray-700 max-md:text-center">
            We meticulously analyze market shifts, integrate cutting-edge technologies, and rigorously test every strategy to ensure it delivers tangible ROI for your business. Our commitment to continuous learning, combined with a deep understanding of your unique challenges, allows us to craft bespoke solutions that don't just meet expectations but exceed them. This dedication to forward-thinking strategies and unwavering client success is truly our key to excellence

          </p>
        </div>

      </section>


      {/* <section className='mt-[96px] max-w-[1440px] w-[100%] mx-auto pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] '>
        <h6 data-aos="fade-up" className='text-[32px] font-semibold text-black leading-[120%] text-center'>Ready to Transform Your Digital Presence?</h6>
        <p data-aos="fade-up" className='text-base text-black font-light text-center mt-[32px] lg:mb-[96p`x] mb-10 '> Whether you're looking to boost your search rankings, engage your social audience, or develop a comprehensive <br className='max-lg:hidden' /> digital strategy, WebNest Media is here to help.</p>


      </section> */}


{/* 
<section data-aos="fade-up" className="max-w-[1440px] w-full mx-auto flex flex-col md:flex-row justify-center items-start gap-5 pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px]  overflow-hidden">
   
      <div className="w-full md:w-1/2 text-center md:text-center">
         <LazyLoadImage
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

 
      <div className="w-full md:w-1/2 flex justify-center items-center overflow-hidden">
    <Photoslider/>
      </div>
    </section> */}

    <section  className=" flex flex-col md:flex-row justify-center    overflow-hidden">
   
   <AboutTesimonial />
   </section>

    

      <section className=' max-w-[1440px] w-[100%] mx-auto  mt-[5px] mb-[50px] pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16]'>
      
      <h2 className='mt-[40px] text-[black] font-normal  text-center leading-[120%]
          text-[32px]           
      
        '>Let's address your <span className='text-[#4CAF50] '>questions </span>today</h2>

        <Accordion />  
      </section>

      
    </div>

  )
}

export default AboutUS
