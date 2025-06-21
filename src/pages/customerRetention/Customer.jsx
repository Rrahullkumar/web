import React, { useState, useRef, useEffect } from 'react'
import c2image from './resources/c2image.svg'
import './customer.css'
import c3image from './resources/c3image.svg'
import image1 from './resources/image1.svg'
import image2 from './resources/image2.svg'
import image3 from './resources/image3.svg'
import image4 from './resources/image4.svg'
import image5 from './resources/image5.svg'
import image6 from './resources/image6.svg'
import c5image from './resources/c5image.svg'
import Accordion from './Components/Accordian'
import Conatctfrom from '../../components/contact/contactform';
import { FiPhone } from 'react-icons/fi';
import { Helmet } from 'react-helmet'
const Lead = () => {

  return (

    <>


      <Helmet>




        <title>Top Customer Retention Agency in Gurgaon | WebNest Media</title>
        <meta name="description" content="Keep your best customers coming back with simple and effective retention strategies. WebNest Media helps you boost loyalty, reduce churn, and grow your business." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebNest Media" />
        <link rel="canonical" href="https://webnestmedia.com/customer-retention" />
      </Helmet>
      <div className='mt-[100px]'>

        <div className="lmc2 mt-[150px] max-w-[1440px] w-[100%] mx-auto px-[40px] max-lg:px-[16px]">
          <h2 className='text-[52px] max-lg:text-[36px] lg:text-center mb-[12px] font-semibold'>Boost Customer Retention with Tried- <br /> and- <span className='text-[#388E3C]'>True Growth Techniques</span></h2>
          <p className='text-lg lg:text-center mb-[40px]'>We are a leading customer retention agency in India, helping businesses in Gurgaon, Delhi, and beyond keep their customers happy and engaged.</p>
          <img src={c2image} alt="" className='block mx-auto lg:w-[1200px] lg:h-[493px] ' />
        </div>
        <div className="lmc3 max-w-[1440px] w-[100%] mx-auto px-[40px] mt-24 max-lg:px-[16px] flex flex-col lg:flex-row mb-[96px]">
          <div className="lmc3_left flex flex-col w-full lg:w-[80%]">
            <h2 className="text-[48px] max-lg:text-[38px] mb-[30px] font-semibold">
              What is customer retention? Sounds heavy? No stress, we’ve got you covered!
            </h2>

            <p className="text-[16px] relative">
              <span className="lg:hidden float-right w-[60%] ml-4 mb-2">
                <img src={c3image} alt="" className="w-full h-auto" />
              </span>
              The goal of customer retention is to keep your current clients satisfied, involved, and returning for more. It entails developing genuine relationships with those who already trust your business rather than concentrating just on acquiring new leads. Think of it like this: ever noticed how your favorite online store remembers your preferences, gives you exclusive offers, and checks in with personalized emails? That’s customer retention in action!
              <br /> <br />
              We provide customer retention strategies in India that help businesses whether in Gurgaon, Delhi, or anywhere else reduce churn, increase repeat purchases, and turn first-time buyers into loyal fans. It is essential to long-term company success, cost-effective, and brand-building.
            </p>
          </div>

          {/* Image shown only in desktop */}
          <div className="lmc3_right hidden lg:flex w-[673.72px] h-[389px] items-center justify-center">
            <img src={c3image} alt="" className="" />
          </div>
        </div>




        <div className="lmc4 ml-[40px]">
          <h2 className='text-[48px] font-semibold'>How We Help You to <br />increase customer retention</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] px-[5px] py-[10px] max-w-[960px] mx-auto">

            <div className="w-[298px] h-[326px] border-none p-[24px] text-center rounded-[8px] relative transition-all duration-300 hover:shadow-md flex flex-col justify-center items-center">
              <div className="w-full h-full relative flex flex-col justify-start items-center">
                <img src={image1} alt="" className='w-[48px] h-[48px] mb-[16px]' />
                <h3 className="text-[18px] font-semibold mb-[12px]">Create Custom Retention Strategies</h3>
                <p className="text-[14px] text-[#555] leading-[1.5]">We tailor every plan to match your business goals, audience, and industry for maximum results.</p>
              </div>
            </div>

            <div className="w-[298px] h-[326px] border-none p-[24px] text-center rounded-[8px] relative transition-all duration-300 hover:shadow-md flex flex-col justify-center items-center">
              <div className="w-full h-full relative flex flex-col justify-start items-center">
                <img src={image2} alt="" className='w-[48px] h-[48px] mb-[16px]' />
                <h3 className="text-[18px] font-semibold mb-[12px]">Run Targeted Email & SMS Campaigns</h3>
                <p className="text-[14px] text-[#555] leading-[1.5]">Stay connected with your customers through personalized, automated follow-ups that drive repeat sales.</p>
              </div>
            </div>

            <div className="w-[298px] h-[326px] border-none p-[24px] text-center rounded-[8px] relative transition-all duration-300 hover:shadow-md flex flex-col justify-center items-center">
              <div className="w-full h-full relative flex flex-col justify-start items-center">
                <img src={image3} alt="" className='w-[48px] h-[48px] mb-[16px]' />
                <h3 className="text-[18px] font-semibold mb-[12px]">Implement Loyalty & Reward Programs</h3>
                <p className="text-[14px] text-[#555] leading-[1.5]">We help you build trust and reward loyal customers so they keep coming back.</p>
              </div>
            </div>

            <div className="w-[298px] h-[326px] border-none p-[24px] text-center rounded-[8px] relative transition-all duration-300 hover:shadow-md flex flex-col justify-center items-center">
              <div className="w-full h-full relative flex flex-col justify-start items-center">
                <img src={image4} alt="" className='w-[48px] h-[48px] mb-[16px]' />
                <h3 className="text-[18px] font-semibold mb-[12px]">Analyze Customer Behavior & Insights</h3>
                <p className="text-[14px] text-[#555] leading-[1.5]">Understand what your customers want and when—so you can serve them better.</p>
              </div>
            </div>

            <div className="w-[298px] h-[326px] border-none p-[24px] text-center rounded-[8px] relative transition-all duration-300 hover:shadow-md flex flex-col justify-center items-center">
              <div className="w-full h-full relative flex flex-col justify-start items-center">
                <img src={image5} alt="" className='w-[48px] h-[48px] mb-[16px]' />
                <h3 className="text-[18px] font-semibold mb-[12px]">Boost Customer Engagement & Satisfaction</h3>
                <p className="text-[14px] text-[#555] leading-[1.5]">From first purchase to post-sale care, we help you create a consistent and meaningful customer experience.</p>
              </div>
            </div>

            <div className="w-[298px] h-[326px] border-none p-[24px] text-center rounded-[8px] relative transition-all duration-300 hover:shadow-md flex flex-col justify-center items-center">
              <div className="w-full h-full relative flex flex-col justify-start items-center">
                <img src={image6} alt="" className='w-[48px] h-[48px] mb-[16px]' />
                <h3 className="text-[18px] font-semibold mb-[12px]">Local Focus, National Impact</h3>
                <p className="text-[14px] text-[#555] leading-[1.5]">Whether you’re in Gurgaon or anywhere in India, our customer retention services are built to grow with you.</p>
              </div>
            </div>

          </div>
        </div>






        <div className="lmc5 flex flex-row  ml-[20px] mr-[20px] ">
          <div className="lmc5_left w-[70%] pr-0 mb-[20px] ">
            <h2 className="text-[32px] lg:text-[48px] mb-[24px] lg:mb-[32px] leading-tight font-semibold">
              How We Help You to <br />
              increase customer retention
            </h2>
            <p className="text-[16px]">
              Customer retention is one of the most critical growth motorists for any business. While acquiring new customers is important, retaining your living bones is further cost-effective, builds trust, and leads to long-term profitability.
              <br />
              <br />
              <br />
              Then’s why it matters
            </p>
            <ol className="mt-[32px] lg:mt-[44px]">
              <li className="mb-[20px] lg:mb-[28px]">
                <h2 className="font-medium text-[24px] mb-[8px] ">1. Lower Acquisition Costs</h2>
                <p className="text-[16px]">
                  It costs 5x more to acquire a new client than to retain an being one. fastening on retention helps you save on marketing and deals charges.
                </p>
              </li>
              <li className="mb-[20px] lg:mb-[28px]">
                <h2 className="font-medium text-[24px] lg:text-[32px] mb-[8px] lg:mb-[12px]">2. Advanced Customer Continuance Value (CLV)</h2>
                <p className="text-[16px]">
                  Constant customers tend to spend more over time, adding their overall value to your business.
                </p>
              </li>
              <li className="mb-[20px] lg:mb-[28px]">
                <h2 className="font-medium text-[24px] lg:text-[32px] mb-[8px] lg:mb-[12px]">3. More Brand fidelity</h2>
                <p className="text-[16px]">
                  Satisfied customers are more likely to stick with your brand, relate to others, and become brand lawyers.
                </p>
              </li>
              <li className="mb-[20px] lg:mb-[28px]">
                <h2 className="font-medium text-[24px] lg:text-[32px] mb-[8px] lg:mb-[12px]">4. Stronger connections</h2>
                <p className="text-[16px]">
                  Retention strategies allow you to make meaningful connections through substantiated gests, offers, and support.
                </p>
              </li>
              <li className="mb-[20px] lg:mb-[28px]">
                <h2 className="font-medium text-[24px] lg:text-[32px] mb-[8px] lg:mb-[12px]">5. Sustainable Growth</h2>
                <p className="text-[16px]">
                  A high retention rate creates a stable profit sluice, allowing you to plan and gauge with confidence.
                </p>
              </li>
            </ol>
          </div>

          <div className="lmc5_right sticky top-[200px] h-fit self-start">
            <img src={c5image} alt="" className="w-full h-auto object-contain" />
          </div>
        </div>

        <div className="container6 mt-[96px] ">
          <div className="conatctform flex flex-row items-center justify-center flex-wrap gap-10 max-lg:flex-col mb-10 px-5 py-10">

            {/* Left Side: Text + Numbers */}
            <div className="w-[45%] max-lg:w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5c945c]">
                Work With Us and Take <br />Your Business to the Next Level
              </h3>
              <p className="text-[17px] text-black mt-5 mb-5">
                We provide the tools, expertise, and support you need to grow faster,
                <br /> reach more customers, and stay ahead of the competition.
                <br /> Let’s take your business to the next level—together.
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

            {/* Right Side: Contact Form */}
            <div className="w-[45%] max-lg:w-full">
              <Conatctfrom className="w-full" /> {/* Corrected component name */}
            </div>
          </div>

        </div>
        <div className="lmc6 mt-[120px]">

          <p className=" mb-[50px] font-medium text-[32px] leading-[40px] ml-[40px] stroke-custom fill-custom">Lets address your <span className='text-[#409338]'>questions</span> today!</p>

          <Accordion />
        </div>

      </div>
    </>
  )
}

export default Lead
