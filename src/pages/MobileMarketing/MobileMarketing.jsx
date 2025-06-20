import React from 'react'
import { useState } from 'react'
import topimage from './resources/topimage.svg'
import image1 from './resources/image1.svg'
import phoneImg from './resources/tabimage.svg'
import icon1 from './resources/icon1.svg'
import icon2 from './resources/icon2.svg'
import icon3 from './resources/icon3.svg'
import icon4 from './resources/icon4.svg'
import Accordion from './components/Accordian';
import Conatctfrom from '../../components/contact/contactform';
import { FiPhone } from 'react-icons/fi';
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet'

const MobileMarketing = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabData = [
        {
            label: 'Mobile-Optimized Website Design & Development',
            image: phoneImg,
            content: (
                <div className='text-[16px]'>
                    <p className=" mb-4">
                        Your website is your digital storefront. We ensure it looks and performs flawlessly on all mobile devices with:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Responsive Design:</strong> Websites that fluidly adapt to any screen size.</li>
                        <li><strong>Fast Loading Speeds:</strong> Critical for mobile users to prevent bounce rates.</li>
                        <li><strong>Intuitive Navigation:</strong> Easy-to-use menus and clear calls-to-action for small screens.</li>
                    </ul>
                </div>
            ),
        },
        {
            label: 'SMS & MMS Marketing Campaigns',
            image: phoneImg,
            content: (
                <p>
                    Engage customers through personalized <strong>SMS & MMS</strong> promotions, updates, and alerts. Drive better conversions by meeting users where they are — on their phones.
                </p>
            ),
        },
        {
            label: 'Location-Based & Proximity Marketing',
            image: phoneImg,
            content: (
                <p>
                    Deliver targeted promotions based on customer locations using <strong>GPS</strong> or <strong>beacon technology</strong>. Perfect for hyperlocal engagement.
                </p>
            ),
        },
        {
            label: 'Mobile App Marketing & Engagement',
            image: phoneImg,
            content: (
                <p>
                    Boost app installs and retain users with <strong>push notifications</strong>, <strong>in-app messages</strong>, and behavior-driven campaigns.
                </p>
            ),
        },
        {
            label: 'QR Code Campaigns',
            image: phoneImg,
            content: (
                <p>
                    Drive offline-to-online engagement using scannable <strong>QR codes</strong> that link directly to mobile-optimized landing pages.
                </p>
            ),
        },
    ];


    return (
        <>


            <Helmet>

                <title>Mobile Marketing Services | Reach Customers via Mobile</title>
                <meta name="description" content="Boost your brand's reach with WebNest Media's mobile marketing agency. From SMS campaigns to app marketing, we connect you with customers on their devices." />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="WebNest Media" />
                <link rel="canonical" href="https://webnestmedia.com/mobile-marketing"></link>
            </Helmet>
            <div className='mt-[50px]'>
                {/* <div className="mmc1 relative ">
                    <img src={topimage} alt="" className='w-[100%] h-auto' />
                    <h1 className='absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[48px]'>
                        <span className='text-[#4CAF50]'>Mobile</span> Marketing
                    </h1>
                </div> */}
                <div>

                    <div className="mmc3 mt-[150px] max-w-[1440px] px-[40px] max-lg:px-[16px] lg:flex lg:flex-row-reverse lg:items-center justify-between lg:gap-20 mx-auto">
                        <img src={image1} alt="" className=' max-lg:float-right max-lg:w-1/2 max-lg:pb-1 ' />
                        <div className="lgc3left lg:w-[60%] justify-start ">
                            <h2 className='text-[48px] max-md:text-[38px] lg:mb-9 font-semibold'>Mobile Marketing Agency in Gurgaon</h2>
                            <br />
                            <p className='text-[16px] font-[350]'>
                                In today's fast-paced digital world, your customers are constantly on their mobile devices. From checking social media to searching for local businesses, smartphones and tablets have become the primary gateway to the internet.

                                <br className='' /> <br className='' />We understand this shift and specialize in mobile marketing in Gurgaon that puts your brand directly into the hands of your target audience, whenever and wherever they are.

                                <br className='' /> <br />Our expert strategies are designed to capture attention, drive engagement, and convert mobile users into loyal customers, giving your business a significant competitive edge in the bustling Gurugram market.
                            </p>
                            <br />

                        </div>



                    </div>

                </div>

                <div className="mmc4 flex flex-col justify-center items-center mx-auto mt-[60px] mb-[60px] lg:py-24 py-16 bg-black lg:px-[40px]">
                    <div className="text-center w-full max-w-[1440px]">
                        <h2 className="text-[48px] max-lg:text-[30px] font-semibold text-white mb-[64px] max-lg:mb-[40px] mx-auto lg:w-[70%] ">
                            Our Comprehensive Mobile Marketing Services in Gurgaon
                        </h2>

                        {/* Scrollable Tabs */}
                        <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide mb-6">
                            <div className="inline-flex space-x-4 px-2 border-b ">
                                {tabData.map((tab, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`text-white lg:px-4  py-2 border-b-2 transition-all duration-300 w-[50%] ${activeIndex === index
                                                ? "border-green-400"
                                                : "border-transparent hover:border-gray-500"
                                            }`}
                                    >
                                        
                                            {tab.label}
                                       
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Content + Image */}
                        <div className="flex flex-col lg:flex-row items-start gap-10 text-left text-white w-full max-w-6xl mx-auto max-lg:px-[16px]">
                            <div className="flex-1 whitespace-pre-line">
                                {tabData[activeIndex].content}
                            </div>
                            <img
                                src={tabData[activeIndex].image}
                                alt=""
                                className="w-full max-w-[400px] h-auto "
                            />
                        </div>
                    </div>
                </div>


                <div className="mmc5 mx-auto max-w-[1440px]">
                    <div className="lg:text-center px-4 py-16">
                        <h2 className="text-[52px] max-lg:text-[38px] font-bold mb-6">
                            Why Choose <span className="">WebNest Media</span> for <br /> Mobile Marketing in Gurgaon?
                        </h2>
                        <p className="max-w-2xl text-[18px] mx-auto text-gray-700 mb-12">
                            WebNest Media is leading agency for mobile marketing in Delhi-NCR and best mobile advertising services in India. When you partner with WebNest Media, you're choosing a team that understands the nuances of the Gurugram market and the power of mobile technology.
                        </p>

                        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-8 mb-16 px-4">
                            <div className='flex flex-col items-center text-center'>
                                <img src={icon1} alt="" className='p-6' />
                                <h4 className="font-semibold text-lg mb-6 ">Local Expertise</h4>
                                <p className="text-gray-600 w-[80%]">We know the Gurugram audience and its mobile consumption patterns.</p>
                            </div>
                            <div className='flex flex-col items-center  text-center'>
                                <img src={icon2} alt="" className='p-6'></img>
                                <h4 className="font-semibold text-lg mb-6">Proven Track Record</h4>
                                <p className="text-gray-600 w-[80%]">Our strategies deliver measurable results and high ROI.</p>
                            </div>
                            <div className='flex flex-col items-center text-center'>
                                <img src={icon3} alt="" className='p-6'></img>
                                <h4 className="font-semibold text-lg mb-6">Holistic Solutions</h4>
                                <p className="text-gray-600 w-[80%]">We integrate mobile seamlessly into your broader digital marketing strategy.</p>
                            </div>
                            <div className='flex flex-col items-center text-center'>
                                <img src={icon4} alt="" className='p-6'></img>
                                <h4 className="font-semibold text-lg mb-6">Dedicated Support</h4>
                                <p className="text-gray-600 w-[80%]">A driven group of people who care about your success.</p>
                            </div>
                        </div>

                        <h3 className="text-[32px] font-semibold mb-4">Ready to Mobilize Your Marketing?</h3>
                        <p className="text-gray-700 text-[18px] max-w-xl mx-auto">
                            Don't let your competitors capture the mobile market. Connect with WebNest Media today to discuss how our expert mobile marketing services can help your Gurgaon business thrive on the go.
                        </p>
                    </div>

                </div>
                <div className="mmc6 mt-[64px] max-md:mt-[40px] max-w-[1440px] mx-auto px-[40px] max-lg:px-[16px]">
                    <p className=" mb-[50px] max-lg:mb-[30px] font-medium text-[32px] leading-[40px] stroke-custom fill-custom">Lets address your <span className='text-[#409338]'>questions</span> today!</p>
                    <Accordion></Accordion>
                </div>
            </div>

        </>
    )
}

export default MobileMarketing
