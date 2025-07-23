// import React from 'react'
// import Conatctfrom from "../../components/contact/contactform";
// import { FiPhone } from "react-icons/fi";
import Accordian from "./component/Accordian";
import c1image from './resources/c1image.png'
import icon1 from './resources/icon1.svg'
import icon2 from './resources/icon2.svg'
import icon3 from './resources/icon3.svg'
import icon4 from './resources/icon4.svg'
import icon5 from './resources/icon5.svg'
import m3image from './resources/m3image.svg'
// import m5img from './resources/m5img.svg'
import m6img from './resources/m6img.svg'
import m66img from './resources/m66img.svg'
import m7img from './resources/m7img.svg'
import m8img from './resources/m8img.svg'
import HeroSection from '../../components/Herosection/Herosection';

import { Helmet } from 'react-helmet';
// import HeroSection from '../../components/Herosection/Herosection';
import topimage from './resources/topimage.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';


const MarketingResearch = () => {


  return (

    <>


      <Helmet>

        <title>Market Research and Insights Company in Gurgaon | WebNest Media</title>
        <meta name="description" content="WebNest Media offers expert market research and insights. Gain a clear understanding of your audience, industry, and competitors." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebNest Media" />
        <link rel="canonical" href="https://webnestmedia.com/market-research-insights" />


{/* 

        <meta property="og:title" content="Market Research and Insights Company in Gurgaon | WebNest Media " />
        <meta property="og:description" content="WebNest Media offers expert market research and insights. Gain a clear understanding of your audience, industry, and competitors." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webnestmedia.com/market-research-insights" />
        <meta property="og:image" content="https://webnestmedia.com/assets/c1image-BqeSZwwV.svg" />
        <meta property="og:site_name" content="WebNest Media" />
 */}


      </Helmet>

      <div className=' ' >
        <HeroSection
          backgroundImage={topimage}
          heading="Marketing Research Insight Company"
          highlight="in Gurgaon"
          paragraph="Let’s take your website from hidden to high-ranking with smart SEO, search-friendly content, and organic growth."
        />
        <div className="mr1 max-w-[1440px] w-[100%] mx-auto flex flex-row max-md:flex-col px-[40px] max-md:px-[16px] items-center gap-4 mt-24 max-md:mt-10">

          {/* Left Section */}
          <div className="mr1left w-[60%] max-md:w-[100%]">

            {/* Heading */}
            <h2 data-aos="fade-up" className='text-[52px] font-semibold max-md:text-3xl mb-[36px]'>
              Let’s Decode Your Market Research Together
            </h2>

            {/* Mobile Image Below Heading */}
            <div data-aos="fade-up" className="block lg:hidden w-[80%] mx-auto mt-6 mb-6">
              <LazyLoadImage src={c1image} alt="Market Research" className="w-full h-auto rounded-lg" />
            </div>

            {/* Paragraph */}
            <p data-aos="fade-up" className='text-base'>
              Market research is evolving rapidly in today’s tech-driven world. With endless tools, platforms, and data streams available, brands and agencies often find themselves overwhelmed—not by a lack of information, but by too much of it. That’s where WebNest Media steps in.
              <br /> <br />
              We offer end-to-end insight market research solutions. From customer journey mapping, advanced data collection, and survey automation to deep-dive analytics, dashboard creation, and trend forecasting—we cover the full spectrum. Our experienced market research analysts use a smart blend of human insight and advanced technologies like AI/ML, predictive analytics, automation tools, and cloud-based data platforms to deliver research that doesn’t just inform, it drives results.
              <br /> <br />
              As a trusted market research company in Gurgaon, we understand local market dynamics while delivering insights that scale nationally.
              <br />
              Let WebNest Media be your strategic research partner. As a leading market research company in India, we help you cut through the noise, uncover what truly matters, and make smarter, faster decisions that fuel sustainable growth.
            </p>
          </div>

          {/* Desktop Image */}
          <div className="mr1right hidden lg:block">
            <LazyLoadImage src={c1image} alt="WebNest Media Market Research" />
          </div>

        </div>
        <div className="mr2 max-w-[1440px] px-[40px] max-md:px-[16px] w-[100%] mx-auto flex flex-col justify-center items-center mt-[96px] max-md:mt-10">
          <h2 className='text-[52px] max-md:text-3xl font-semibold text-center lg:w-[50%] mb-14'><span className='text-[#4caf50]'>Importance of</span> Market Research & Insights</h2>
          <div className="flex flex-col lg:flex-row gap-10 max-md:gap-6 justify-between lg:items-start">
            <div data-aos="fade-up"  className="mrcard flex flex-col gap-12 max-md:gap-8 items-center max-lg:border-b max-lg:p-8 ">

              <LazyLoadImage src={icon1} className='w-24' alt="Understand Customer Needs" />
              <p className='text-2xl max-lg:text-xl font-semibold text-center lg:w-[70%]'>Understand Customer Needs</p>
            </div>
            <div data-aos="fade-up" className="mrcard flex flex-col gap-12   max-md:gap-8  items-center max-lg:border-b max-lg:p-8 ">
              <LazyLoadImage src={icon2} className='w-24' alt="Track Market Trends" />
              <p className='text-2xl font-semibold max-lg:text-xl text-center lg:w-[70%]'> Track Market Trends</p>
            </div>
            <div data-aos="fade-up" className="mrcard flex flex-col gap-12  max-md:gap-8 items-center">
              <LazyLoadImage src={icon3} className='w-24' alt="Know Your Competitors" />
              <p className='text-2xl font-semibold max-lg:text-xl text-center lg:w-[70%] max-lg:border-b max-lg:p-8 '>Know Your Competitors</p>

            </div>
            <div data-aos="fade-up" className="mrcard flex flex-col gap-12  max-md:gap-8 items-center">
              <LazyLoadImage src={icon4} className='w-24' alt="Reduce Business Risks" />
              <p className='text-2xl font-semibold max-lg:text-xl text-center lg:w-[70%] max-lg:border-b max-lg:p-8 '>Reduce Business Risks</p>
            </div>
            <div data-aos="fade-up" className="mrcard flex flex-col gap-12  max-md:gap-8 items-center">
              <LazyLoadImage src={icon5} className='w-24' alt="Fuel Business Growth" />
              <p className='text-2xl font-semibold max-lg:text-xl text-center lg:w-[70%] max-lg:border-b max-lg:p-8 '>Fuel Business Growth</p>

            </div>
          </div>
        </div>
        <div className='max-w-[1440px] mx-auto mt-24 max-lg:mt-10 mb-24 max-lg:mb-10'>
          <h2 data-aos="fade-up" className='text-[52px] px-[40px] lg:mb-5 max-md:px-[16px] max-md:text-3xl  font-semibold  lg:translate-y-36 '>How We Collect the Right Data</h2>
          <section className='max-w-[1440px] px-[40px] max-md:px-[16px] mx-auto max-lg:mt-[40px]'>
            <div className=''>

              <div data-aos="fade-up"  className="mr3 flex lg:flex-row-reverse max-lg:flex-col-reverse gap-4 items-end justify-between">
                <div className="mr3left lg:w-[50%]">

                  <h3 className='text-[32px] max-md:text-3xl mb-6 '>Telephone Surveys</h3>
                  <div className="mright max-md:w-full flex justify-center lg:hidden ">
                  <LazyLoadImage src={m3image} className='w-[60%] max-md:w-[70%]' alt="Telephone Surveys" />
                </div>
                  <p className='text-base'>
                    Reach your audience directly over the phone. These surveys are great for collecting in-depth feedback, especially from targeted demographics that may prefer voice interactions. <br /><br />
                    <ul>
                      <li>• Allows real-time clarification of questions for better accuracy.</li>
                      <li>• Effective for reaching specific demographics or geographic areas.</li>
                      <li>• Effective for reaching specific demographics or geographic areas.</li>
                    </ul>
                  </p>
                </div>
                <div className="mright max-md:w-full flex max-lg:hidden justify-center ">
                  <LazyLoadImage src={m3image} className='w-[80%] max-md:w-[70%]' alt="Telephone Surveys" />
                </div>
              </div>
            </div>

          </section>

          {/* Section 1 */}
          <section data-aos="fade-up"  className='max-w-[1440px] px-[40px] max-lg:px-[16px] mx-auto mt-[52px]'>
            <div className="mr4 flex lg:flex-row-reverse max-lg:flex-col justify-between gap-4 items-start">

              {/* Mobile Heading */}
              <h3 className='text-[32px] max-md:text-3xl mb-6 block lg:hidden'>Face-to-Face (In-Person) Surveys</h3>

              {/* Image */}
              <div className="mr4ight">
                <LazyLoadImage src={c1image} alt="face to face Surveys" />
              </div>

              {/* Text Block */}
              <div className="mr4left lg:w-[50%]">
                {/* Desktop Heading */}
                <h3 className='text-[32px] max-md:text-3xl mb-6 hidden lg:block'>Face-to-Face (In-Person) Surveys</h3>
                <p className='text-base'>
                  Build trust and gather detailed responses in real time. This method is ideal for qualitative research, such as product testing or consumer behavior studies. <br /><br />
                  <ul>
                    <li>• Offers rich, detailed responses through personal interaction.</li>
                    <li>• Helps build trust and encourage honest feedback.</li>
                    <li>• Ideal for product testing, interviews, and observational research.</li>
                    <li>• Best suited for local or location-specific data collection.</li>
                  </ul>
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section data-aos="fade-up"  className='max-w-[1440px] px-[40px] max-md:px-[16px] mx-auto mt-[52px]'>
            <div className="mr5 flex lg:flex-row max-lg:flex-col gap-4 items-start justify-between">

              {/* Mobile Heading */}
              <h3 className='text-[32px] max-md:text-3xl mb-6 block lg:hidden'>Online Surveys</h3>

              {/* Image */}
              <div className="mr5ight">
                <LazyLoadImage src={m6img} alt="Online Surveys" />
              </div>

              {/* Text Block */}
              <div className="mr5left lg:w-[60%]">
                {/* Desktop Heading */}
                <h3 className='text-[32px] max-md:text-3xl mb-6 hidden lg:block'>Online Surveys</h3>
                <p className='text-base'>
                  Quick, cost-effective, and widely accessible. Online surveys allow you to gather feedback from large, diverse audiences using email, websites, or social media.<br /><br />
                  <ul>
                    <li>• Accessible anytime, anywhere—great for wide audiences.</li>
                    <li>• Easy to distribute via email, social media, or websites.</li>
                    <li>• Cost-efficient and fast with automated data collection.</li>
                    <li>• Allows multimedia integration (images, videos, etc.).</li>
                  </ul>
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section data-aos="fade-up" className='max-w-[1440px] px-[40px] max-lg:px-[16px] mx-auto mt-[52px]'>
            <div className="mr4 flex lg:flex-row-reverse max-lg:flex-col justify-between gap-4 items-start">

              {/* Mobile Heading */}
              <h3 className='text-[32px] max-md:text-3xl mb-6 block lg:hidden'>Mobile Surveys</h3>

              {/* Image */}
              <div className="mr4ight">
                <LazyLoadImage src={m66img} alt="Mobile-optimized surveys" />
              </div>

              {/* Text Block */}
              <div className="mr4left lg:w-[50%]">
                {/* Desktop Heading */}
                <h3 className='text-[32px] max-md:text-3xl mb-6 hidden lg:block'>Mobile Surveys</h3>
                <p className='text-base'>
                  Connect with users on the go. Mobile-optimized surveys are perfect for quick polls or feedback collection via apps, SMS, or mobile browsers. <br /><br />
                  <ul>
                    <li>• Perfect for on-the-go feedback through smartphones and apps.</li>
                    <li>• Great for time-sensitive or location-based questions.</li>
                    <li>• Simple and user-friendly interface increases response rates.</li>
                    <li>• Useful for targeting mobile-first audiences.</li>
                  </ul>
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section data-aos="fade-up"  className='max-w-[1440px] px-[40px] max-md:px-[16px] mx-auto mt-[52px]'>
            <div className="mr7 flex lg:flex-row max-lg:flex-col gap-4 items-start justify-between">

              {/* Mobile Heading */}
              <h3 className='text-[32px] max-md:text-3xl mb-6 block lg:hidden'>Mail Surveys</h3>

              {/* Image */}
              <div className="mr7ight">
                <LazyLoadImage src={m7img} alt="Mail Surveys" />
              </div>

              {/* Text Block */}
              <div className="mr7left lg:w-[60%]">
                {/* Desktop Heading */}
                <h3 className='text-[32px] max-md:text-3xl mb-6 hidden lg:block'>Mail Surveys</h3>
                <p className='text-base'>
                  Traditional but still effective for certain audiences. These paper-based surveys are useful for reaching demographics that prefer offline communication.<br /><br />
                  <ul>
                    <li>• Useful when targeting offline users or specific age groups.</li>
                    <li>• No internet access required—good for rural or older demographics.</li>
                    <li>• Can include visual aids, brochures, or physical product samples.</li>
                    <li>• Offers a sense of privacy for sensitive topics.</li>
                  </ul>
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section data-aos="fade-up" className='max-w-[1440px] px-[40px] max-md:px-[16px] mx-auto mt-[52px]'>
            <div className="mr7 flex lg:flex-row-reverse max-lg:flex-col gap-4 items-start justify-between">

              {/* Mobile Heading */}
              <h3 className='text-[32px] max-md:text-3xl mb-6 block lg:hidden'>Panel Surveys</h3>

              {/* Image */}
              <div className="mr7ight">
                <LazyLoadImage src={m8img} alt="Panel Surveys" />
              </div>

              {/* Text Block */}
              <div className="mr7left lg:w-[60%]">
                {/* Desktop Heading */}
                <h3 className='text-[32px] max-md:text-3xl mb-6 hidden lg:block'>Panel Surveys</h3>
                <p className='text-base'>
                  Tap into pre-selected groups for consistent feedback. Panel surveys use the same group of respondents over time, which helps track changes in opinions or behaviors.<br /><br />
                  <ul>
                    <li>• Involves a consistent group of respondents over time.</li>
                    <li>• Ideal for tracking changes in behavior or brand perception.</li>
                    <li>• Ensures high-quality, longitudinal data.</li>
                    <li>• Commonly used by market research agencies and analysts.</li>
                  </ul>
                </p>
              </div>
            </div>
          </section>
        </div>



        <section className=' max-w-[1440px] w-[100%] mx-auto mt-[60px] mb-[50px]'>
          <h2 className='text-3xl px-10 max-lg:px-4 text-center font-semibold'>Let's address your <span className='text-[#4caf50]'>questions</span> today</h2>
          <Accordian />
        </section>


      </div>

    </>
  )
}

export default MarketingResearch
