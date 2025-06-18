import React from 'react'
import Conatctfrom from "../../components/contact/contactform";
import { FiPhone } from "react-icons/fi";
import Accordian from "./component/Accordian";
import c1image from './resources/c1image.svg'
import icon1 from './resources/icon1.svg'
import icon2 from './resources/icon2.svg'
import icon3 from './resources/icon3.svg'
import icon4 from './resources/icon4.svg'
import icon5 from './resources/icon5.svg'
import m3image from './resources/m3image.svg'
import m5img from './resources/m5img.svg'
import  m6img from './resources/m6img.svg'
import m66img from './resources/m66img.svg'
import m7img from './resources/m7img.svg'
import m8img from './resources/m8img.svg'
const MarketingResearch = () => {


  return (
    <div className='lg:mt-[120px] ' >
          <div className="mr1 max-w-[1440px] w-[100%] mx-auto flex flex-row max-md:flex-col px-[40px] max-md:px-[16px] items-center gap-4"
          
          >
            
            <div className="mr1eft w-[60%] max-md:w-[100%] ">
                <h2 className='text-[52px] max-md:text-[38px] mb-[36px]'>Let’s Decode Your Market Research Together</h2>
                <p className='text-base'>Market research is evolving rapidly in today’s tech-driven world. With endless tools, platforms, and data streams available, brands and agencies often find themselves overwhelmed—not by a lack of information, but by too much of it. That’s where WebNest Media steps in.

                <br /> <br />We offer end-to-end insight market research solutions. From customer journey mapping, advanced data collection, and survey automation to deep-dive analytics, dashboard creation, and trend forecasting—we cover the full spectrum. Our experienced market research analysts use a smart blend of human insight and advanced technologies like AI/ML, predictive analytics, automation tools, and cloud-based data platforms to deliver research that doesn’t just inform, it drives results.

                <br /> <br />As a trusted market research company in Gurgaon, we understand local market dynamics while delivering insights that scale nationally.

                <br />Let WebNest Media be your strategic research partner. As a leading market research company in India, we help you cut through the noise, uncover what truly matters, and make smarter, faster decisions that fuel sustainable growth.</p>
            </div>
            <div className="mr1right">
              <img src={c1image} alt="" />
            </div>
          </div>
          <div className="mr2 max-w-[1440px] px-[40px] max-md:px-[16px] w-[100%] mx-auto flex flex-col justify-center items-center mt-[96px]">
            <h2 className='text-[52px] max-md:text-[38px]  text-center lg:w-[50%] mb-14'>Importance of Market Research & Insights</h2>
            <div className="flex flex-col lg:flex-row gap-5 justify-between lg:items-start">
                <div className="mrcard flex flex-col gap-12 items-center">
                    <img src={icon1} className='w-24' alt="" />
                    <p className='text-2xl font-semibold text-center lg:w-[70%]'>Understand Customer Needs</p>
                </div>
                <div className="mrcard flex flex-col gap-12 items-center">
                    <img src={icon2}className='w-24' alt="" />
                    <p className='text-2xl font-semibold text-center lg:w-[70%]'> Track Market Trends</p>
                </div>
                <div className="mrcard flex flex-col gap-12 items-center">
                  <img src={icon3} className='w-24'alt="" />
                    <p className='text-2xl font-semibold text-center lg:w-[70%]'>Know Your Competitors</p>

                </div>
                <div className="mrcard flex flex-col gap-12 items-center">
                    <img src={icon4} className='w-24'alt="" />
                    <p className='text-2xl font-semibold text-center lg:w-[70%]'>Reduce Business Risks</p>
                </div>
                <div className="mrcard flex flex-col gap-12 items-center">
                  <img src={icon5} className='w-24'alt="" />
                    <p className='text-2xl font-semibold text-center lg:w-[70%]'>Fuel Business Growth</p>

                </div>
            </div>
          </div>

          <section className='max-w-[1440px] px-[40px] max-md:px-[16px] mx-auto max-lg:mt-[40px]'>
            <div className=''>
              <h2 className='text-[52px] max-md:text-[38px] lg:w-[40%] font-semibold mb-16 max-lg:mb-10 lg:translate-y-36 '>How We Collect the Right Data</h2>
            <div className="mr3 flex lg:flex-row max-lg:flex-col-reverse gap-4 items-end justify-between">
              <div className="mr3left lg:w-[50%]">
                
                <h3 className='text-[32px] mb-6 '>Telephone Surveys</h3>
                <p className='text-base'>
                  Reach your audience directly over the phone. These surveys are great for collecting in-depth feedback, especially from targeted demographics that may prefer voice interactions. <br /><br />
                  <ul>
                    <li>• Allows real-time clarification of questions for better accuracy.</li>
                    <li>• Effective for reaching specific demographics or geographic areas.</li>
                    <li>• Effective for reaching specific demographics or geographic areas.</li>
                  </ul>
                </p>
              </div>
              <div className="mright  ">
                <img src={m3image} className='w-[80%]' alt="" />
              </div>
          </div>
            </div>
            
          </section>
          
          <section className='max-w-[1440px] px-[40px] max-lg:px-[16px] mx-auto mt-[52px]'>
                <div className=''>
             
            <div className="mr4 flex lg:flex-row-reverse max-lg:flex-col justify-between gap-4 items-end">
              <div className="mr4left lg:w-[50%]">
                
                <h3 className='text-[32px] mb-6'> Face-to-Face (In-Person) Surveys</h3>
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
              <div className="mr4ight ">
                <img src={m5img} alt="" />
              </div>
          </div>
            </div>
            
          </section>
          <section className='max-w-[1440px] px-[40px] max-md:px-[16px] mx-auto mt-[52px]'>
            <div className="mr5 flex lg:flex-row max-lg:flex-col gap-4 items-end justify-between ">
              <div className="mr5left lg:w-[60%]">
                
                <h3 className='text-[32px] mb-6 '>Online Surveys</h3>
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
              <div className="mr5ight  ">
                <img src={m6img} alt="" />
              </div>
          </div>
          </section>
          <section className='max-w-[1440px] px-[40px] max-lg:px-[16px] mx-auto mt-[52px]'>
                <div className=''>
             
            <div className="mr4 flex lg:flex-row-reverse max-lg:flex-col justify-between gap-4 items-end">
              <div className="mr4left lg:w-[50%]">
                
                <h3 className='text-[32px] mb-6 max'>Mobile Surveys</h3>
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
              <div className="mr4ight ">
                <img src={m66img} alt="" />
              </div>
          </div>
            </div>
            
          </section>
          <section className='max-w-[1440px] px-[40px] max-md:px-[16px] mx-auto mt-[52px]'>
            <div className="mr7 flex lg:flex-row max-lg:flex-col gap-4 items-end justify-between ">
              <div className="mr7left lg:w-[60%]">
                
                <h3 className='text-[32px] mb-6 '>Mail Surveys</h3>
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
              <div className="mr7ight  ">
                <img src={m7img} alt="" />
              </div>
          </div>
          </section>
           <section className='max-w-[1440px] px-[40px] max-md:px-[16px] mx-auto mt-[52px]'>
            <div className="mr7 flex lg:flex-row-reverse max-lg:flex-col gap-4 items-end justify-between ">
              <div className="mr7left lg:w-[60%]">
                
                <h3 className='text-[32px] mb-6 '>Panel Surveys</h3>
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
              <div className="mr7ight  ">
                <img src={m8img} alt="" />
              </div>
          </div>
          </section>


        





          <section className="  max-w-[1440px] w-[100%] mx-auto conatctform flex flex-row items-center justify-center flex-wrap gap-10 max-lg:flex-col mb-10 px-5 py-10">
    
            {/* Left Side: Text + Numbers */}
            <div className="w-[45%] max-lg:w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5c945c] ">
                Work With Us and Take <br />Your Business to the Next Level
              </h3>
              <p className="text-[17px] text-black mt-5 mb-5 ">
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
              <Conatctfrom className="w-full" />
            </div>
    
    
    
    
          </section>
    
          <section className=' max-w-[1440px] w-[100%] mx-auto mt-[60px] mb-[50px]'>
            <Accordian />
          </section>
    
      
    </div>
  )
}

export default MarketingResearch
