import React from 'react'
import { useEffect, useRef, useState } from 'react';
import './Orm.css';
import timer from "../../pages/Orm/resourse/timer.svg"
import Conatctfrom from "../../components/contact/contactform";
import brand1 from "./resourse/brand1.svg";
import brand2 from "./resourse/brand2.svg";
import brand3 from "./resourse/brand3.svg";
import brand4 from "./resourse/brand4.svg";
import brand5 from "./resourse/brand5.svg";
import brand6 from "./resourse/brand6.svg";
import brand7 from "./resourse/brand7.svg";
import brand8 from "./resourse/brand8.svg";
import { FiPhone } from "react-icons/fi";
import iot from "./resourse/iot.svg"
import Accordian from "./component/Accordian"
import bannerimage from "./resourse/bannerimage.svg"
import topimage from "./resourse/topimage.svg";
import { Helmet } from 'react-helmet';
import Newcontact from '../../components/Newcontact/Newcontact';
import c1image from './resourse/c1image.svg'
import HeroSection from '../../components/Herosection/Herosection';
const Orm = () => {
  const services = [
    {
      "title": "Brand Monitoring",
      "description": "Constantly track mentions of your brand across search engines, review sites, blogs, and social media to ensure a quick response to any negative or misleading content.",
      "image": brand1
    },
    {
      "title": "Review Management",
      "description": "Helps manage and respond to online reviews on platforms like Google, Yelp, and Trustpilot. Encourages positive reviews and addresses negative ones professionally to maintain brand trust.",
      "image": brand2
    },
    {
      "title": "Search Engine Reputation Management (SERM)",
      "description": "Improves the visibility of positive content and pushes down negative search results on Google and other search engines to influence what people see first.",
      "image": brand3
    },
    {
      "title": "Content Creation & Promotion",
      "description": "Creates high-quality, positive content—like blogs, articles, press releases, and profiles—that enhances your brand’s online presence and credibility.",
      "image": brand4
    },
    {
      "title": "Crisis Management",
      "description": "Handles reputation crises such as viral complaints, false accusations, or sudden negative publicity with rapid response strategies and damage control.",
      "image": brand5
    },
    {
      "title": "Social Media Reputation Management",
      "description": "Monitors and manages your presence on platforms like Facebook, Instagram, LinkedIn, and Twitter to ensure positive engagement and timely responses to criticism.",
      "image": brand6
    },
    {
      "title": "Negative Content Removal or Suppression",
      "description": "Works to legally remove false or defamatory content where possible or suppress it through SEO strategies to minimize its visibility.",
      "image": brand7
    },
    {
      "title": "Personal Reputation Management",
      "description": "Tailored ORM services for public figures, executives, influencers, or celebrities to maintain a clean, professional online image.",
      "image": brand8
    },
    {
      "title": "Online Review Generation Campaigns",
      "description": "Implements strategies to collect and showcase genuine positive reviews from satisfied customers, helping to build social proof.",
      "image": brand8
    }
  ]


  return (

    <>


      <Helmet>
        <title>Online Reputation Management (ORM) Services</title>
        <meta name="description" content="WebNest Media is one of the best Online Reputation Management Company that protects your brand's image from negative search results. We Protect, Monitor, and Enhance." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebNest Media" />
        <link rel="canonical" href="https://webnestmedia.com/online-reputation-management" />

      </Helmet>

      <div className=' max-lg:mt-[0px] w-[100%] mx-auto 
  '>
        <div className="topsection">
          <HeroSection
            backgroundImage={c1image}
            heading="Online Research Management Company"
            highlight="In Gurgaon"
            paragraph="Take control of your online narrative with expert reputation management that highlights your strengths and wins customer trust.
"
          />
        </div>


        {/* 
      <section>
        <img src={bannerimage} />
      </section> */}

        {/* <section className='text-center h-[80px] '>

        <h2 className="heading-styled relative h-[60px] text-[40px]  bg-yellow font-bold text-black px-4 py-1  ">
          {text}
        </h2>
      </section> */}


        <div className='max-w-[1440px] mx-auto px-10 max-lg:px-4 lg:py-10 lg:pb-24'>

          {/* Desktop Layout */}
          <div className="flex flex-row justify-between items-start max-lg:flex-col max-lg:gap-8 gap-5">

            {/* Text Block */}
            <div className="flex-1">

              <h2 className='text-[44px] max-lg:text-[34px] mb-3 font-semibold'>
                Online Reputation <span className='text-[#4CAF50]'>Management Services?</span>
              </h2>

              <h3 className='text-lg font-semibold mb-12'>
                Rebuild Your Reputation with India’s best Online Reputation Management Expert
              </h3>

              {/* Paragraph with Floating Image on Mobile */}
              <p className='text-base '>
                {/* Float only on Mobile */}
                <img
                  src={timer}
                  alt="Online Reputation"
                  className='w-[35%] lg:hidden max-lg:mt-3 float-right ml-4 mb-4 rounded-[20px] max-lg:block max-lg:float-right max-lg:w-[55%] max-lg:h-72'
                />

                Whether your business is being unfairly targeted by competitors or naturally receiving mixed reviews due to a large customer base, our online reputation management services are designed to help you regain control.

                <br /><br className='' />

                We are a results-focused online reputation management company in India, driven by strategy, experience, and modern digital tools. With a skilled team and reliable systems in place, we work diligently to protect and uplift your brand’s online image.

                <br /><br />

                From handling dissatisfied customers to managing negative feedback from former employees or competitive sabotage, we offer discreet solutions trusted by businesses, influencers, and public figures alike.

                <br /><br />

                Our ORM services continuously track, manage, and improve your digital reputation while offering valuable insights into public sentiment. Your brand’s credibility matters — our solutions ensure that what people see online reflects the best version of your business.
              </p>

            </div>

            {/* Image for Desktop (Hidden on Mobile) */}
            <div className="w-[35%] max-lg:hidden">
              <img
                src={timer}
                alt=" ORM services"
                className='w-full h-auto rounded-[20px] object-contain'
              />
            </div>

          </div>

        </div>








        <section className='max-w-[1440px] mx-auto px-10 max-lg:px-4 mt-24 max-lg:mt-10'>

          <div className="flex max-lg:flex-col gap-6 justify-between">

            <div className="w-[667px]  max-lg:w-[100%] lg:sticky lg:top-[200px] self-start max-lg:sticky-unset">
              <h6 className='text-[46px] max-md:text-[34px] max-lg:text-[26px]  text-[black] font-semibold'>Types of Online Reputation Management Services</h6>
              <p className='text-base mt-[32px] text-[black] font-normal max-lg:mb-4'>As India’s no. 1 online reputation management, We keep you updated about what is being said about your business or brand online by managing, tracking, and reporting on the most crucial elements of your online reputation. </p>
            </div>




            <div className="w-[507px] max-lg:w-full cursor-pointer" data-aos="fade-up">



              {services.map((service, index) => {
                return (
                  <div key={index} className="flex items-start max-md:flex-col gap-4 mb-7 ">

                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-[61px] h-[52px] object-cover rounded-lg"
                    />

                    <div className='border-b-[1px] border-black pb-8'>
                      <h6 className="text-[31px]  text-[#000000] pb-5">{service.title}</h6>
                      <p className="text-base font-normal text-[#333333]">{service.description}</p>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>


        </section>



        <section className="max-w-[1440px] mx-auto px-10 max-lg:px-4 flex flex-col lg:flex-row items-start justify-between mt-[96px] max-lg:mt-10 gap-8">

  {/* Text Section */}
  <div className="w-full lg:w-[60%] flex flex-col order-1 lg:order-none">

    {/* Heading */}
    <h5 className="leading-tight text-5xl max-lg:text-[34px] max-lg:font-semibold mb-6">
      Why Your Business Needs Reputation Management
    </h5>

    {/* Image - Mobile position */}
    <div className="w-full flex justify-center mt-6 mb-6 lg:hidden">
      <img
        src={iot}
        alt="Business Needs Reputation Management"
        className="w-full max-w-[440px] h-auto rounded-lg object-contain"
      />
    </div>

    {/* Paragraph */}
    <p className="text-base font-normal mt-[24px] leading-relaxed">
      Your online reputation has the power to make or break your business in the modern digital age. Whether it’s a small comment on social media or a review on Google, customers are forming opinions about your brand before ever speaking to you. That’s why reputation management is no longer optional—it’s essential.
      <br className="hidden lg:inline" />
      A single negative article or poor review can push potential customers toward competitors, even if your product or service is top-notch. Reputation management helps control the narrative, ensures positive visibility, and builds trust with your audience.
      <br className="hidden lg:inline" /> <br />
      With effective reputation management, you can:
    </p>

    {/* List */}
    <ul className="flex flex-wrap text-base text-[#333] pl-[30px] mt-[12px]">
      <li className='list-disc'>Monitor what people are saying about your brand</li>
      <li className='list-disc'>Respond to negative feedback before it escalates</li>
      <li className='list-disc'>Promote positive content and customer experiences</li>
      <li className='list-disc'>Enhance your brand’s credibility and trustworthiness</li>
      <li className='list-disc'>Protect your business from online attacks and misinformation</li>
    </ul>

    {/* Closing Paragraph */}
    <p className="mt-[20px] text-[16px] font-normal leading-relaxed">
      In short, reputation management safeguards your most valuable asset—your brand image—and turns perception into profit.
    </p>

  </div>

  {/* Image - Desktop position */}
  <div className="w-full lg:w-[40%] flex justify-center lg:justify-center lg:flex">
    <img
      src={iot}
      alt="Reputation Management Illustration"
      className="w-full max-w-[440px] h-auto rounded-lg object-contain"
    />
  </div>

</section>



        <Newcontact></Newcontact>
        <section className='max-w-[1440x] px-10 max-lg:px-'>

          <h2 className='mt-[40px] text-[black] font-normal leading-[160%]
          text-[22px]           
    sm:text-[23px]        
    md:text-[36px]        
    xl:text-[44px]    
        '>Let's address your <span className='text-[#4CAF50] '>questions </span>today</h2>

          <Accordian />
        </section>



      </div>
    </>
  )
}

export default Orm
