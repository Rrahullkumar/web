import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Leadgeneration.css'
import image2 from './resources/image2.svg'
import topimage from './resources/topimage.svg'
import image3 from './resources/image3.svg'
import icon1 from './resources/ifl.svg'
import icon2 from './resources/diversity_1.svg'
import icon3 from './resources/arrows_input.svg'
import icon4 from './resources/lightbulb.svg'
import Accordion from './components/Accordian';
import Conatctfrom from '../../components/contact/contactform';
import { FiPhone } from 'react-icons/fi';
import { useEffect } from 'react';
const Leadgeneration = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
  {
    title: "Marketing Qualified Leads (MQLs): Engaging Interested Prospects",
    content:
      "We find and cultivate people who have expressed interest in your goods or services. By analyzing engagement metrics and behavioral data, we ensure that the leads passed to your sales team are primed for further interaction.",
  },
  {
    title: "Sales Qualified Leads (SQLs): Ready-to-Convert Opportunities",
    content:
      "Our team rigorously qualifies leads based on criteria such as budget, authority, need, and timeline. This ensures that your sales efforts are focused on prospects with a high likelihood of conversion.",
  },
  {
    title: "Account-Based Marketing (ABM): Targeting High-Value Accounts",
    content:
      "We create unique campaigns targeted at particular high-value accounts. By tailoring messaging and outreach strategies, we increase the chances of engaging decision-makers within these organizations.",
  },
  {
    title: "Content Syndication: Expanding Your Reach",
    content:
      "Through strategic distribution of your content across various platforms, we amplify your brand's visibility and attract leads who are actively seeking solutions in your industry.",
  },
];

  const data=[
    {
        icon: icon1,
        title: "Customized Strategies",
        content: "We tailor our approach to align with your business goals and target audience."
    },
    {
        icon: icon2,
        title: "Experienced Team",
        content: "Our professionals bring years of experience in lead generation and marketing."
    },
    {
        icon: icon3,
        title: "Transparent Reporting",
        content: "Regular updates and insights keep you informed about campaign performance."
    },
    {
        icon: icon4,
        title: "Scalable Solutions",
        content: "Whether you're a startup or an established enterprise, our services scale to meet your needs."
    }
  ]
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='max-w-[1440px] w-[100%] mx-auto mt-[50px]'>
      <div className="lgc1 relative">
        <img src={topimage} alt="" className='w-[100%] h-auto' />
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[48px]'>
          <span className='text-[#4CAF50]'>Lead</span> Generation
        </h1>
      </div>

      <div className="lgc2 flex flex-col justify-center items-center w-[calc(100%-80px)] mx-auto">
        <h2 className='text-[52px] text-center mt-[60px]'>
          B2B Lead Generation <span className='text-[#4CAF50]'><br />Services</span>
        </h2>
        <p className='text-[18px] text-center mt-[31px] w-[70%] font-semibold mb-10'>
          In B2B lead generation, quality matters as much as quantity. We help you attract high-intent leads so you spend less time chasing and more time closing. It's smarter, faster, and more effective.
        </p>
        <img src={image2} alt="" />
      </div>

      <div className="lgc3 mt-[93px] flex flex-row ml-[40px] h-[555px]">
        <div className="lgc3left w-[50%]">
          <h2 className='text-[48px]'>Explore Our B2B Lead Generation Agency</h2>
          <br />
          <p className='text-[16px] font-[350]'>
            Explore our lead generation agency and discover how we turn interest into real business opportunities. At WebNest Media, we don't just deliver leads—we deliver the right leads. Our strategies are built to connect your business with decision-makers who are ready to engage. Whether you're targeting startups or enterprise clients, we tailor campaigns that bring in high-quality prospects, reduce wasted time, and boost your ROI
          </p>
          <br />
          <p className='text-[16px] font-[350]'>
            From email outreach to LinkedIn marketing and performance-driven funnels, we use smart, data-backed methods that actually work. With us, lead generation isn't just a numbers game it's a strategy for real growth. Let's build a pipeline full of potential, not just empty contacts.
          </p>
          <br />
          <p className='text-[16px] font-[350]'>
            In short, WebNest Media is the best B2B Lead Generation Services provider in Gurgaon and India, which can boost your business and more with our lead generation expert.
          </p>
        </div>
        <div className="lgc3right w-[50%] h-full flex items-center">
          <img src={image3} alt="" className='w-full h-full object-contain pb-[20px]' />
        </div>
      </div>

        <div className="lgc4 flex flex-col justify-center items-center w-[calc(100%-80px)] mx-auto mt-[60px] mb-[60px]">
            <h2 className='text-[48px] w-[70%] text-center mb-4 '>
                Powering Your Pipeline with Proven Lead Generation Services
            </h2>
            <div className=" px-8 py-12 w-full max-w-4xl mx-auto rounded-lg ">
                {accordionData.map((item, index) => (
                <div key={index} className="border-b  py-6">
                    <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center text-left text-black text-lg focus:outline-none hover:text-[#4CAF50] transition-colors duration-300"
                    >
                    <span>{item.title}</span>
                    <ChevronDown
                        className={`w-6 h-6 text-gray-600 font-thin transform transition-transform duration-100 ease-in-out rounded-full border ${
                        openIndex === index ? 'rotate-180' : ''
                        }`}
                    />
                    </button>
                    <div 
                    className={`grid transition-all duration-500 ease-in-out ${
                        openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                    }`}
                    >
                    <div className="overflow-hidden">
                        <p className="text-base text-gray-600 leading-relaxed">
                        {item.content}
                        </p>
                    </div>
                    </div>
                </div>
                ))}
            </div>  
        </div>
           <div className="flex flex-col justify-center items-center w-[calc(100%-80px)] mx-auto mt-[60px] mb-[96px]">
            <h2 className="text-[48px] w-[80%] text-center font-semibold leading-tight">
                Our Process for Lead Generation Campaigns: From Discovery to Conversion
            </h2>

            <div className="flex flex-col justify-end mt-[64px] mr-[40px] ml-[2px] gap-[20px] w-[80%]">
                {[
                {
                    number: '01',
                    title: 'Understanding Your Ideal Customer Profile (ICP)',
                    description:
                    'We collaborate with you to define the characteristics of your most valuable customers.',
                },
                {
                    number: '02',
                    title: 'Data-Driven Targeting',
                    description:
                    'Utilizing advanced analytics, we identify prospects that match your ICP.',
                },
                {
                    number: '03',
                    title: 'Personalized Outreach',
                    description:
                    'Crafting messages that resonate, we engage prospects through channels they prefer.',
                },
                {
                    number: '04',
                    title: 'Lead Qualification',
                    description:
                    'Through continuous interaction and assessment, we ensure only the most promising leads are forwarded to your sales team.',
                },
                ].map((item, index) => (
                <div
                    className="flex justify-between items-start border-b border-[#eee] py-[10px]"
                    key={index}
                >
                    <div className="flex-1 text-left text-[32px] font-semibold text-[#252429]">
                    {item.title}
                    </div>
                    <div className="flex-2 text-right text-[16px] text-[#555] w-[50%]">
                    {item.description}
                    </div>
                </div>
                ))}
            </div>
            </div>

            <div className="lgc5 mt-[40px] flex flex-col justify-center items-center w-[calc(100%-80px)] mx-auto">
                <h2 className='text-[48px] w-[50%] text-center'>Why Choose WebNest Media Lead Generation?</h2>
                <div className="lgc5cards grid grid-cols-4 mt-[80px] ">
                    {data.map((item,index)=>(
                        <div className="lgc5card flex flex-col items-center text-center ">
                            <img src={item.icon} alt="" className='w-[50px] h-[50px] mb-9' />
                            <h3 className='text-[24px] font-semibold mb-6'>{item.title}</h3>
                            <p className='text-[16px] w-[80%]'>{item.content}</p>    
                        
                        </div>
                    ))}
                
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
        <div className="lgc7 mt-[96px]">
            <p className=" mb-[50px] font-medium text-[32px] leading-[40px] ml-[40px] stroke-custom fill-custom">Lets address your <span className='text-[#409338]'>questions</span> today!</p>
            <Accordion></Accordion>
        </div>
    </div>
  );
};

export default Leadgeneration;