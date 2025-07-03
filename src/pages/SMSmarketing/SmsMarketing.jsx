import React from 'react'
import topimage from './resources/topimage.svg'
import c2image from './resources/c2image.svg'
import c3image from './resources/c3image.svg'
import icon1 from './resources/icon1.svg'
import icon2 from './resources/icon2.svg'
import icon3 from './resources/icon3.svg'
import icon4 from './resources/icon4.svg'
import icon5 from './resources/icon5.svg'
import icon6 from './resources/icon6.svg'
import Accordion from './components/Accordian'
import { Helmet } from 'react-helmet'
import HeroSection from '../../components/Herosection/Herosection' 
import Newcontact from '../../components/Newcontact/Newcontact'

import { LazyLoadImage } from 'react-lazy-load-image-component';

const SmsMarketing = () => {



  
  return (

    <>
    
  
    <Helmet>

<title>Bulk SMS Marketing Services in Gurgaon | Fast & Affordable</title>
<meta name="description" content="Reach your audience instantly with SMS marketing services in Gurgaon. Whether it's promotional, or OTP messages, we help you connect with your customers." />



<meta name="robots" content="index, follow" />
<meta name="author" content="WebNest Media" />
<link rel="canonical" href="https://webnestmedia.com/sms-marketing"></link>





<meta property="og:title" content="Bulk SMS Marketing Services in Gurgaon | Fast & Affordable" />
  <meta property="og:description" content="Reach your audience instantly with WebNest Media's SMS marketing services in Gurgaon. Whether it's promotional, transactional, or OTP messages, we help you connect with your customers." />
 
 
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://webnestmedia.com/sms-marketing" />
  <meta property="og:image" content="https://webnestmedia.com/assets/topimage-CcByDmTi.svg" />
 <meta property="og:site_name" content="WebNest Media" />







    </Helmet>

    <div className=' w-[100%] mx-auto'>
       {/* <div className="smsc1 relative">
        
              <LazyLoadImage src={topimage} alt="" className="w-full h-auto" />

  
            <div className="absolute inset-0 bg-black opacity-40"></div>

       
            <h1 className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[48px] text-center z-10">
                <span className="text-[#4CAF50]">SMS</span> Marketing
            </h1>
            </div> */}
            <div className="">
                <HeroSection
                        backgroundImage={topimage}
                        heading="SMS Marketing Company"
                        highlight="In Gurgaon"
                        paragraph="Fast, effective SMS marketing that connects with your customers, drives action, and supports your overall marketing strategy."
                    />
            </div>
        <div  data-aos="fade-up" className="smsc2 max-w-[1440px] mt-24 max-lg:mt-10 px-10 max-lg:px-4 lg:flex flex-row-reverse lg:items-center lg:justify-between mb-[96px] max-lg:mb-[60px] mx-auto ">
              <LazyLoadImage src={c2image} alt="" className='max-lg:w-1/2 max-lg:float-right'/>
            
            <div  className="smsc2left lg:w-[50%] ">
                <h2 className='text-[52px] max-lg:text-[34px] pb-[36px] font-semibold'>Best SMS Marketing Service Agency in Gurgaon</h2>
                <p className='text-base'>Discover the possibility of business growth with The SMS Marketing Agency, a partner committed to quality. Set up a free 45-minute consultation today to see your conversions increase by two times.</p>
            </div>
             
        </div>
        <div  data-aos="fade-up" className="smsc3 lg:flex flex-row max-w-[1440px] px-10 mx-auto max-lg:px-[16px] lg:justify-center gap-2 lg:items-center mb-24 max-lg:mb-10">
            
                  <LazyLoadImage src={c3image} alt="" className='max-lg:w-[50%] max-lg:float-right' />
            
            <div className="smsc3right lg:w-[60%]">
                <h2 className='text-[52px] max-lg:text-[32px]  mb-9 font-semibold'> WebNest Media  The SMS Marketing Agency in Gurgaon</h2>
                <p className='text-base '>SMS marketing cuts through the clutter, offering an unparalleled direct line to your audience. Our teams of SMS marketing experts can conducts bulk SMS marketing at a point of time. As a leading SMS marketing agency in Gurgaon, we empower businesses like yours to forge immediate, impactful connections. Forget the crowded inbox; an SMS delivers your message instantly, ensuring it’s seen and acted upon, driving real results for your brand.</p>
                <br />
                <p className='text-base'>We specialize in Navigating the complexities of SMS marketing in India requires local expertise combined with global best practices. For online businesses, SMS marketing for ecommerce is no longer optional, it's a necessity for competitive advantage. WebNest Media extends its mobile marketing prowess to include comprehensive WhatsApp SMS company in Gurgaon services.</p>
            </div>
        </div>
        <div className="smsc4 max-w-[1440px] px-10 max-lg:px-[16px] mx-auto mb-24 max-lg:mb-10">
            <div className="max-w-[1200px] mx-auto">
                {/* Heading */}
                <h2 className="text-[52px] max-lg:text-3xl lg:w-[90%] mx-auto font-semibold lg:text-center mb-8">
                    SMS Marketing Company Services | Your Pathway to Direct Engagement
                </h2>
                <p className="lg:text-center text-gray-600 max-w-[800px] mx-auto mb-[109px] max-lg:mb-[60px]">
                    A specialized SMS marketing company provides a full suite of services to ensure your mobile messaging campaigns are effective, compliant, and drive tangible results. They act as your expert partner, handling everything from strategy to execution and analysis.
                </p>

                {/* Grid Section */}
                <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center ">
                    {/* Card 1 */}
                    <div className="bg-[#4CAF50] text-white p-6  flex flex-col shadow-md text-center items-center">
                    <div className="text-3xl mb-3">  <LazyLoadImage src={icon1} alt="" /></div>
                    <h3 className="text-lg font-semibold mb-2">Bulk SMS Campaigns</h3>
                    <p>Send out your messages to a large audience quickly and reliably. Perfect for announcements, deals, or important updates to all your subscribers at once.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#EEC370] text-white p-6 flex flex-col shadow-md text-center items-center">
                     <div className="text-3xl mb-3">  <LazyLoadImage src={icon2} alt="" /></div>
                    <h3 className="text-lg font-semibold mb-2">Tailored Customer Texts</h3>
                    <p>Go beyond generic texts. We help you send unique messages tailored to each customer’s preferences and behavior, making every text feel special.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#4CAF50] text-white p-6 flex flex-col shadow-md text-center items-center">
                     <div className="text-3xl mb-3">  <LazyLoadImage src={icon3} alt="" /></div>
                    <h3 className="text-lg font-semibold mb-2">Automated Journey Flows</h3>
                    <p>Set up smart, automated text sequences that trigger based on customer actions. Think welcome messages, abandoned cart reminders, or timely follow-ups, all on autopilot.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#EEC370] text-white p-6 flex flex-col shadow-md text-center items-center">
                     <div className="text-3xl mb-3">  <LazyLoadImage src={icon4} alt="" /></div>
                    <h3 className="text-lg font-semibold mb-2">Precision Targeted Offers</h3>
                    <p>Reach the right people at the right time. We help you segment your audience and send highly specific offers to groups most likely to convert, maximizing your ROI.</p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#4CAF50] text-white p-6 flex flex-col shadow-md text-center items-center">
                     <div className="text-3xl mb-3">  <LazyLoadImage src={icon5} alt="" /></div>
                    <h3 className="text-lg font-semibold mb-2">Transactional Updates</h3>
                    <p>Keep customers informed with essential real-time notifications. This includes order confirmations, shipping alerts, appointment reminders, and other crucial updates.</p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#EEC370] text-white p-6 flex flex-col shadow-md text-center items-center">
                     <div className="text-3xl mb-3">  <LazyLoadImage src={icon6} alt="" /></div>
                    <h3 className="text-lg font-semibold mb-2">Quick Feedback & Surveys</h3>
                    <p>Gather valuable insights directly from your customers. Easily send short surveys or requests for feedback via text, making it simple for them to share their thoughts.</p>
                    </div>
                </div>
                </div>
        </div>
        <Newcontact/>
         <div className="lastcontainer max-w-[1440px] px-10 max-lg:px-4 mt-[96px] max-lg:mt-[40px] mx-auto">
          <p className=" mb-[50px] lg:text-center font-medium text-[32px] text-center leading-[40px] stroke-custom fill-custom">Lets address your <span className='text-[#409338]'>questions</span> today!</p>
          <Accordion></Accordion>
      </div>
    </div>
      </>
  )
}

export default SmsMarketing
