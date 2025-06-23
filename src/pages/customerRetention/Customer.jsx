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
import HeroSection from '../../components/Herosection/Herosection'
import topimage from './resources/topimage.svg'
import Newcontact from '../../components/Newcontact/Newcontact'
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
      <div className='mt-[77px] max-lg:mt-0'>
        <HeroSection
          backgroundImage={topimage}
          heading="Customer Retention Company"
          highlight="In Gurgaon"
          paragraph="Let’s take your website from hidden to high-ranking with smart SEO, search-friendly content, and organic growth."
        />
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

            <p className="text-lg relative">
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




        <div className="lmc4 max-w-[1440px] w-[100%] mx-auto px-[40px] max-lg:px-[16px]">
          <h2 className='text-[48px] max-lg:text-[38px] font-semibold mb-10'>How We Help You to <br />increase customer retention</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] max-lg:gap-8 px-[5px] py-[20px] justify-center max-w-[960px] mx-auto place-items-center">

            {/* Card 1 */}
            <div className="relative w-[298px] h-[250px]  box-md:shadow-md p-[24px] text-center rounded-[8px] lg:transition-all duration-300 lg:hover:shadow-md flex flex-col justify-center items-center">
              {/* Corner Borders */}
              <div className="absolute top-0 left-0 w-[20px] h-[20px] border-t-2 border-l-2 border-black"></div>
              <div className="absolute top-0 right-0 w-[20px] h-[20px] border-t-2 border-r-2 border-black"></div>
              <div className="absolute bottom-0 left-0 w-[20px] h-[20px] border-b-2 border-l-2 border-black"></div>
              <div className="absolute bottom-0 right-0 w-[20px] h-[20px] border-b-2 border-r-2 border-black"></div>

              <div className="w-full h-full relative flex flex-col justify-start max-lg:justify-center items-center">
                <img src={image1} alt="" className='w-[48px] h-[48px] mb-[16px]' />
                <h3 className="text-lg font-semibold mb-[12px]">Create Custom Retention Strategies</h3>
                <p className="text-sm text-[#555] leading-[1.5]">We tailor every plan to match your business goals, audience, and industry for maximum results.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-[298px] h-[250px]  box-md:shadow-md p-[24px] text-center rounded-[8px] lg:transition-all duration-300 lg:hover:shadow-md flex flex-col justify-center items-center">
              <div className="absolute top-0 left-0 w-[20px] h-[20px] border-t-2 border-l-2 border-black"></div>
              <div className="absolute top-0 right-0 w-[20px] h-[20px] border-t-2 border-r-2 border-black"></div>
              <div className="absolute bottom-0 left-0 w-[20px] h-[20px] border-b-2 border-l-2 border-black"></div>
              <div className="absolute bottom-0 right-0 w-[20px] h-[20px] border-b-2 border-r-2 border-black"></div>

              <div className="w-full h-full relative flex flex-col justify-start max-lg:justify-center items-center">
                <img src={image2} alt="" className='w-[48px] h-[48px] mb-[16px]' />
                <h3 className="text-lg font-semibold mb-[12px]">Run Targeted Email & SMS Campaigns</h3>
                <p className="text-sm text-[#555] leading-[1.5]">Stay connected with your customers through personalized, automated follow-ups that drive repeat sales.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative w-[298px] h-[250px]  box-md:shadow-md p-[24px] text-center rounded-[8px] lg:transition-all duration-300 lg:hover:shadow-md flex flex-col justify-center items-center">
              <div className="absolute top-0 left-0 w-[20px] h-[20px] border-t-2 border-l-2 border-black"></div>
              <div className="absolute top-0 right-0 w-[20px] h-[20px] border-t-2 border-r-2 border-black"></div>
              <div className="absolute bottom-0 left-0 w-[20px] h-[20px] border-b-2 border-l-2 border-black"></div>
              <div className="absolute bottom-0 right-0 w-[20px] h-[20px] border-b-2 border-r-2 border-black"></div>

              <div className="w-full h-full relative flex flex-col justify-start max-lg:justify-center items-center">
                <img src={image3} alt="" className='w-[48px] h-[48px] mb-[16px]' />
                <h3 className="text-lg font-semibold mb-[12px]">Implement Loyalty & Reward Programs</h3>
                <p className="text-sm text-[#555] leading-[1.5]">We help you build trust and reward loyal customers so they keep coming back.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative w-[298px] h-[250px] box-md:shadow-md p-[24px] text-center rounded-[8px] lg:transition-all duration-300 lg:hover:shadow-md flex flex-col justify-center items-center">
              <div className="absolute top-0 left-0 w-[20px] h-[20px] border-t-2 border-l-2 border-black"></div>
              <div className="absolute top-0 right-0 w-[20px] h-[20px] border-t-2 border-r-2 border-black"></div>
              <div className="absolute bottom-0 left-0 w-[20px] h-[20px] border-b-2 border-l-2 border-black"></div>
              <div className="absolute bottom-0 right-0 w-[20px] h-[20px] border-b-2 border-r-2 border-black"></div>

              <div className="w-full h-full relative flex flex-col justify-start max-lg:justify-center items-center">
                <img src={image4} alt="" className='w-[48px] h-[48px] mb-[16px]' />
                <h3 className="text-lg font-semibold mb-[12px]">Analyze Customer Behavior & Insights</h3>
                <p className="text-sm text-[#555] leading-[1.5]">Understand what your customers want and when—so you can serve them better.</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="relative w-[298px] h-[250px]  box-md:shadow-md p-[24px] text-center rounded-[8px] lg:transition-all duration-300 lg:hover:shadow-md flex flex-col justify-center items-center">
              <div className="absolute top-0 left-0 w-[20px] h-[20px] border-t-2 border-l-2 border-black"></div>
              <div className="absolute top-0 right-0 w-[20px] h-[20px] border-t-2 border-r-2 border-black"></div>
              <div className="absolute bottom-0 left-0 w-[20px] h-[20px] border-b-2 border-l-2 border-black"></div>
              <div className="absolute bottom-0 right-0 w-[20px] h-[20px] border-b-2 border-r-2 border-black"></div>

              <div className="w-full h-full relative flex flex-col justify-start max-lg:justify-center items-center">
                <img src={image5} alt="" className='w-[48px] h-[48px] mb-[16px]' />
                <h3 className="text-lg font-semibold mb-[12px]">Boost Customer Engagement & Satisfaction</h3>
                <p className="text-sm text-[#555] leading-[1.5]">From first purchase to post-sale care, we help you create a consistent and meaningful customer experience.</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="relative w-[298px] h-[250px]  box-md:shadow-md p-[24px] text-center rounded-[8px] lg:transition-all duration-300 lg:hover:shadow-md flex flex-col justify-center items-center">
              <div className="absolute top-0 left-0 w-[20px] h-[20px] border-t-2 border-l-2 border-black"></div>
              <div className="absolute top-0 right-0 w-[20px] h-[20px] border-t-2 border-r-2 border-black"></div>
              <div className="absolute bottom-0 left-0 w-[20px] h-[20px] border-b-2 border-l-2 border-black"></div>
              <div className="absolute bottom-0 right-0 w-[20px] h-[20px] border-b-2 border-r-2 border-black"></div>

              <div className="w-full h-full relative flex flex-col justify-start max-lg:justify-center items-center">
                <img src={image6} alt="" className='w-[48px] h-[48px] mb-[16px]' />
                <h3 className="text-lg font-semibold mb-[12px]">Local Focus, National Impact</h3>
                <p className="text-sm text-[#555] leading-[1.5]">Whether you’re in Gurgaon or anywhere in India, our customer retention services are built to grow with you.</p>
              </div>
            </div>

          </div>
        </div>







        <div className="lmc5 flex flex-row max-lg:flex-col max-w-[1440px] w-[100%] mx-auto px-[40px] max-lg:px-[16px] mt-24">
          {/* Left Section */}
          <div className="lmc5_left w-[70%] max-lg:w-full pr-0 mb-[20px] ">
            <h2 className="text-[32px] max-lg:text-[38px] lg:text-[48px] mb-[24px] lg:mb-[32px] leading-tight font-semibold">
              How We Help You to <br />
              increase customer retention
            </h2>

            {/* Mobile Image: Visible only on mobile */}
            <div className="block lg:hidden mb-6">
              <img src={c5image} alt="Customer Retention" className="w-full h-auto object-contain" />
            </div>

            <p className="text-lg max-lg:text-base">
              Customer retention is one of the most critical growth motorists for any business. While acquiring new customers is important, retaining your living bones is further cost-effective, builds trust, and leads to long-term profitability.
              <br />
              <br />
              <br />
            </p>

            <h2 className='text-lg max-lg:text-base'>Then’s why it matters</h2>

            <ol className="mt-[32px] lg:mt-[44px] max-lg:mx-auto max-lg:text-left">
              {/* Point 1 */}
              <li className="mb-[20px] lg:mb-[28px] max-lg:mb-[16px]">
                <h2 className="font-medium text-[24px] max-lg:text-[20px] lg:text-[32px] mb-[8px] lg:mb-[12px]">1. Lower Acquisition Costs</h2>
                <p className="text-base max-lg:text-sm">
                  It costs 5x more to acquire a new client than to retain an being one. fastening on retention helps you save on marketing and deals charges.
                </p>
              </li>

              {/* Point 2 */}
              <li className="mb-[20px] lg:mb-[28px] max-lg:mb-[16px]">
                <h2 className="font-medium text-[24px] max-lg:text-[20px] lg:text-[32px] mb-[8px] lg:mb-[12px]">2. Advanced Customer Continuance Value (CLV)</h2>
                <p className="text-base max-lg:text-sm">
                  Constant customers tend to spend more over time, adding their overall value to your business.
                </p>
              </li>

              {/* Point 3 */}
              <li className="mb-[20px] lg:mb-[28px] max-lg:mb-[16px]">
                <h2 className="font-medium text-[24px] max-lg:text-[20px] lg:text-[32px] mb-[8px] lg:mb-[12px]">3. More Brand fidelity</h2>
                <p className="text-base max-lg:text-sm">
                  Satisfied customers are more likely to stick with your brand, relate to others, and become brand lawyers.
                </p>
              </li>

              {/* Point 4 */}
              <li className="mb-[20px] lg:mb-[28px] max-lg:mb-[16px]">
                <h2 className="font-medium text-[24px] max-lg:text-[20px] lg:text-[32px] mb-[8px] lg:mb-[12px]">4. Stronger connections</h2>
                <p className="text-base max-lg:text-sm">
                  Retention strategies allow you to make meaningful connections through substantiated gests, offers, and support.
                </p>
              </li>

              {/* Point 5 */}
              <li className="mb-[20px] lg:mb-[28px] max-lg:mb-[16px]">
                <h2 className="font-medium text-[24px] max-lg:text-[20px] lg:text-[32px] mb-[8px] lg:mb-[12px]">5. Sustainable Growth</h2>
                <p className="text-base max-lg:text-sm">
                  A high retention rate creates a stable profit sluice, allowing you to plan and gauge with confidence.
                </p>
              </li>
            </ol>
          </div>

          {/* Right Section: Visible only on Desktop */}
          <div className="lmc5_right sticky top-[200px] max-lg:hidden h-fit self-start">
            <img src={c5image} alt="Customer Retention" className="w-full h-auto object-contain" />
          </div>
        </div>



        <Newcontact></Newcontact>
        <div className="lmc6 mt-[120px]">

          <p className=" mb-[50px] font-medium text-[32px] leading-[40px] ml-[40px] stroke-custom fill-custom">Lets address your <span className='text-[#409338]'>questions</span> today!</p>

          <Accordion />
        </div>

      </div>
    </>
  )
}

export default Lead
