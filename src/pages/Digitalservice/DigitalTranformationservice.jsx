import React, { useRef } from 'react';
import './digitalservice.css';
import c1_image from './resources/c1_image.svg';
import Conatctfrom from "../../components/contact/contactform";
import { FiPhone } from "react-icons/fi";
import c2_image from './resources/c2_image.svg';
import Accordian from "./component/Accordian";
import Left_Arrow from './resources/Left_Arrow.svg';
import Right_Arrow from './resources/Right_Arrow.svg';
import image_6 from './resources/image_6.svg'
import image_7 from './resources/image_7.svg'
import topimage from './resources/topimage.svg';
import { Helmet } from 'react-helmet';
const DigitalTranformationservice = () => {

  
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };


  return (
    <>


      <Helmet>

        <title>Digital Transformation Services Gurgaon | Empower Your Business</title>
        <meta name="description" content="Accelerate growth with WebNest Media’s Digital Transformation Services. From automation to cloud and data solutions, we modernize your business for the digital era." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebNest Media" />
        <link rel="canonical" href="https://webnestmedia.com/digital-transformation" />
      </Helmet>
      <div className='max-w-[1440px] mt-[100px] w-[100%] mx-auto'>

        <div className="dtc1 max-w-[1440px] mt-[100px] w-[100%] mx-auto px-10 max-lg:px-4 mb-[96px]">
          <h1 className='lg:text-center text-[52px] max-lg:text-[38px] mb-[12px] font-semibold'>
            Digital Transformation
            <span className='text-[#4CAF50]'> Services </span>
          </h1>
          <p className='lg:text-center text-[18px] mb-[20px] font-semibold'>
            We make digital transformation simple by helping you with the smart use of automation, AI, and data-driven <br />
            insights.
          </p>
          <p className='lg:text-center text-[18px] font-semibold mb-[]'>
            Our end-to-end services align technology with your business vision to unlock lasting success.
          </p>
          <div className="flex justify-center mt-10">
            <img src={c1_image} alt="img" className="mx-auto" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="dtc2 max-w-[1440px] mt-[100px] w-full mx-auto px-10 max-lg:px-4 flex flex-col lg:flex-row mb-[96px] gap-6">

          <div className="dtc2left lg:w-[80%] flex flex-col">
            <h2 className='text-[48px] max-lg:text-[38px] mb-8 font-semibold order-1'>
              Not sure what is digital transformation? <br />Let’s understand it in plain language.
            </h2>

            {/* Image moves below heading on mobile, stays on right in desktop */}
            <div className="lg:hidden order-2 mb-6">
              <img src={c2_image} alt="" className='' />
            </div>

            <p className="text-lg order-3">
              Digital transformation means using technology to improve how your business works—from automating routine tasks to creating better customer experiences. It’s not just about going digital; it’s about working smarter, faster, and more efficiently by integrating tools like AI, cloud solutions, data analytics, and automation into your operations.
            </p>

            <br className="order-4" /><br className="order-4" />

            <p className="order-5 text-lg">
              One of the major benefits of digital transformation is that it helps businesses boost productivity, reduce costs, and stay competitive in a fast-changing market.
            </p>
          </div>

          {/* This image is shown only on desktop to preserve original layout */}
          <div className="dtc2right hidden lg:block order-2">
            <img src={c2_image} alt="" />
          </div>

        </div>


        {/* Section 3 */}
        <div className="dtc3 max-w-[1440px] mt-[100px] w-full mx-auto px-10 max-lg:px-4 mb-24">
          <div >
            <h2 className='text-[48px] max-lg:text-[38px] mb-9 font-semibold'>Digital Transformation Services We Offer</h2>
            <p className='text-lg lg:w-[60%] max-lg:mb-10'>
              At WebNest Media, we don’t just help you "go digital"—we help you transform how your business works, connects, and grows. Our digital transformation services are designed to boost efficiency, elevate customer experiences, and future-proof your business with the right tech solutions.
            </p>


            {/* Navigation buttons */}
            <div className="flex justify-end mt-[-50px] mb-[40px] ml-10] max-lg:hidden">
              <button onClick={scrollLeft} className="">
                <img src={Left_Arrow} alt="" />
              </button>
              <button onClick={scrollRight} className="">
                <img src={Right_Arrow} alt="" />
              </button>
            </div>

          </div>
          {/* Scrollable container */}
          <div className="relative overflow-hidden">
            <div
              ref={sliderRef}
              className="overflow-x-auto flex gap-4 px-4 py-4 scrollbar-hide snap-x snap-mandatory"
            >
              {[
                {
                  id: 1,
                  title: "Business Process Automation",
                  text: "We automate repetitive tasks using modern tools and workflows—saving time, reducing errors, and increasing productivity across departments. From invoice generation to HR onboarding, we help you build smart, self-operating systems."
                },
                {
                  id: 2,
                  title: "Cloud Migration & Integration",
                  text: "We move your legacy systems and data to secure, scalable cloud environments like AWS, Azure, or Google Cloud. With cloud integration, your team can collaborate from anywhere, access real-time data, and scale as your business grows."
                },
                {
                  id: 3,
                  title: "AI & Machine Learning Solutions",
                  text: "Stay ahead with AI-powered tools that automate decisions, personalize user experiences, and predict customer behavior. From chatbots to recommendation engines, we use AI to drive smarter outcomes for your business."
                },
                {
                  id: 4,
                  title: "CRM & ERP Implementation",
                  text: "We implement CRM (like Salesforce or HubSpot) and ERP solutions to unify your operations—sales, inventory, finance, customer service—and streamline your entire workflow."

                },
                {
                  id: 5,
                  title: "UX/UI Design & Digital Experience",
                  text: "Good design = better engagement. We craft user-friendly, modern interfaces that deliver smooth digital experiences across websites, apps, and internal platforms. Because your customers deserve intuitive, delightful interactions."
                },
                {
                  id: 6,
                  title: "Data Analytics & Business Intelligence",
                  text: "Make sense of your data. We build custom dashboards, analytics pipelines, and visual reports that help you understand customer behavior, sales trends, and performance metrics—so you can make smarter business decisions."
                },
                {
                  id: 7,
                  title: "Cybersecurity & Data Protection",
                  text: "Digital growth needs digital safety. We secure your data, applications, and infrastructure with advanced cybersecurity practices including firewalls, encryption, multi-factor authentication, and regular audits."
                },
                {
                  id: 8,
                  title: "Custom Software Development",
                  text: "When off-the-shelf solutions don’t fit, we build custom software tailored to your processes and goals—whether it’s a new internal tool, a client portal, or a full-scale application."
                },
                {
                  id: 9,
                  title: "Legacy System Modernization",
                  text: "Still running on outdated tools? We upgrade and re-engineer your legacy systems into modern, efficient platforms that integrate with current technologies and support your future needs."
                },
                {
                  id: 10,
                  title: "Omnichannel Strategy Development",
                  text: "We help you deliver a seamless, consistent brand experience across all digital channels—web, mobile, email, social, and more—so your customers can connect with you anytime, anywhere."
                }

              ].map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col justify-between items-start p-4 text-left  max-lg:min-w-[80%] max-w-[300px] max-lg:max-w-[80%] h-full"
                >
                  {/* Make consistent heading area */}
                  <div className="min-h-[48px] w-flex items-start">
                    <h3 className="font-semibold">{card.id}. {card.title}</h3>
                  </div>

                  {/* Paragraph aligned below heading area */}
                  <p className="text-sm leading-relaxed mt-4">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>


        </div>
        <div className="dtc4 max-w-[1440px] mt-24 w-full mx-auto px-10 max-lg:px-4 flex flex-col lg:flex-row mb-24 gap-6">

          {/* Left Content */}
          <div className="dtc4 left lg:w-[60%] flex flex-col">

            <h2 className='text-[48px] max-lg:text-[38px] mb-[32px] font-semibold order-1'>
              We Are a Leading Digital Transformation Solutions Company
            </h2>

            {/* Image between heading and content for mobile */}
            <div className="lg:hidden order-2 mb-6">
              <img src={image_6} alt="" />
            </div>

            <div className='text-lg leading-[150%] order-3'>
              <p>
                At WebNest Media, our deep technical expertise combined with a forward-thinking approach makes us a trusted leader in digital transformation solutions. With a strong history of delivering tailored digital strategies, we help businesses harness next-gen technologies to streamline operations, enhance performance, and scale faster.
              </p>
              <br /><br className='max-lg:hidden' />
              <p>
                Focused on quality, flexibility, and client-first execution, we’re your reliable partner in navigating the digital landscape with confidence and clarity.
              </p>
              <br /><br className='max-lg:hidden' />
              <ul>
                <li>• India’s Top 1% Digital Talent</li>
                <li>• Trusted by Startups & Global Brands</li>
                <li>• End-to-End Project Ownership</li>
                <li>• Time-Zone Friendly Teams</li>
                <li>• On-Time Delivery, Always</li>
              </ul>
            </div>
          </div>

          {/* Image for desktop view */}
          <div className="dtc4 right hidden lg:block order-2 mt-[20px]">
            <img src={image_6} alt="" />
          </div>

        </div>

        <div className="dtc4 max-w-[1440px] mx-auto px-4 flex flex-col lg:flex-row gap-10">

          {/* Image block - shown first on desktop */}
          <div className="dtc4 right hidden lg:block mt-[20px] px-2 w-[30%] order-1">
            <img src={image_7} alt="" />
          </div>

          {/* Text Content */}
          <div className="dtc4 left w-full lg:w-[70%] order-2">
            <h2 className="text-[48px] max-lg:text-[38px] mb-[32px] font-semibold">
              Advantages of Digital Transformation
            </h2>

            {/* Float image inside paragraph on mobile */}
            <div className="lg:hidden float-right w-[50%] ml-4">
              <img src={image_7} alt="" />
            </div>

            <div className="text-lg">
              <p>
                Every business from all industries quickly adopts digitalization. With our digital transformation company, we help you by following benefits:
              </p>

              <br /><br className='max-lg:hidden'/>

              <ul>
                <li>• Improved Efficiency</li>
                <li>• Cost Reduction</li>
                <li>• Faster Decision Making</li>
                <li>• Enhanced Security</li>
                <li>• Better Customer Experience</li>
              </ul>

              <br /><br className='max-lg:hidden'/>

              <p>
                Digital transformation services empower businesses to stay competitive by upgrading traditional operations with modern technology. They allow companies to automate processes, improve customer engagement, harness real-time data, and adapt quickly to market changes.
              </p>
            </div>
          </div>
        </div>


        {/* Contact Section */}
        <div className="conatctform flex flex-row items-center justify-center flex-wrap gap-10 max-lg:flex-col mb-10 px-5 py-10">
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

          <div className="w-[45%] max-lg:w-full">
            <Conatctfrom className="w-full" />
          </div>
        </div>

        {/* Accordion Section */}
        <section className='mt-[60px] mb-[50px]'>
          <p className=" mb-[50px] font-medium text-[32px] leading-[40px] ml-[40px] stroke-custom fill-custom">Lets address your <span className='text-[#409338]'>questions</span> today!</p>
          <Accordian />
        </section>

      </div>
    </>
  );
}

export default DigitalTranformationservice;
