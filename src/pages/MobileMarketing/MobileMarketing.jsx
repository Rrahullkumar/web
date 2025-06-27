import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';
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

import { Helmet } from 'react-helmet'
import tabimage from './resources/tabimage.svg'
import HeroSection from '../../components/Herosection/Herosection.jsx';
import Newcontact from '../../components/Newcontact/Newcontact.jsx'
import tabimage2 from './resources/Rectangle2.svg'
import tabimage3 from './resources/Rectangle3.svg'
import tabimage4 from './resources/Rectangle4.svg'
import tabimage5 from './resources/Rectangle5.svg'
const MobileMarketing = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [prevTab, setPrevTab] = useState(0);
    const tabRefs = useRef([]);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

    useEffect(() => {
        if (tabRefs.current[activeTab]) {
            const tabRect = tabRefs.current[activeTab].getBoundingClientRect();
            const parentRect = tabRefs.current[activeTab].parentElement.getBoundingClientRect();
            setIndicatorStyle({
                left: tabRect.left - parentRect.left,
                width: tabRect.width
            });
        }
    }, [activeTab]);

    const handleTabClick = (index) => {
        setPrevTab(activeTab);
        setActiveTab(index);
    };

    const direction = activeTab > prevTab ? 1 : -1;

    const tabVariants = {
        enter: (direction) => ({
            y: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        }),
        center: {
            y: 0,
            opacity: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        },
        exit: (direction) => ({
            y: direction > 0 ? '-100%' : '100%',
            opacity: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        })
    };




    const tabsContent = [
        {
            title: 'Mobile-Optimized Website Design & Development',
            paragraphs: [
                'Your website is your digital storefront. We ensure it looks and performs flawlessly on all mobile devices with:',
                'Responsive Design: Websites that fluidly adapt to any screen size.',
                'Fast Loading Speeds: Critical for mobile users to prevent bounce rates.',
                'Intuitive Navigation: Easy-to-use menus and clear calls-to-action for small screens.',
            ],
            image: tabimage
        },
        {
            title: 'SMS & MMS Marketing Campaigns',
            paragraphs: [
                'Reach your audience instantly through targeted SMS and MMS campaigns.',
                'Highly personalized messages for increased engagement.',
                'Schedule messages to hit optimal engagement windows.',
                'Track delivery and open rates in real time.',
            ],
            image: tabimage2
        },
        {
            title: 'Location-Based & Proximity Marketing',
            paragraphs: [
                'Deliver promotions and messages based on user location.',
                'Target users when they are near your business or competitors.',
                'Boost in-store visits with location-triggered alerts.',
            ],
            image: tabimage3
        },
        {
            title: 'Mobile App Marketing & Engagement',
            paragraphs: [
                'Promote your mobile app to increase downloads and active users.',
                'Use push notifications to retain and re-engage customers.',
                'Track user behavior to optimize in-app experiences.',
            ],
            image: tabimage4
        },
        {
            title: 'QR Code Campaigns',
            paragraphs: [
                'Integrate QR codes into your offline marketing efforts.',
                'Easily direct users to websites, app downloads, or special offers.',
                'Track QR code scans for campaign effectiveness.',
            ],
            image: tabimage5
        }
    ];

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


    const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://webnestmedia.com/mobile-marketing#service",
      "name": "Mobile Marketing",
      "description": "WebNest Media offers expert mobile marketing services designed to engage your audience via SMS campaigns, app-based ads, push notifications, and mobile-first strategies that drive brand awareness and conversions.",
      "serviceType": "Mobile Marketing",
      "provider": {
        "@type": "Organization",
        "name": "WebNest Media",
        "url": "https://webnestmedia.com",
        "logo": "https://webnestmedia.com/assets/newlogo-CQU_gx5-.svg",
        "sameAs": [
          "https://www.instagram.com/webnestmediagroup/",
          "https://www.facebook.com/people/WebNest-Media/61576616442478/",
          "https://www.linkedin.com/company/webnest-media-group/"
        ]
      },
      "areaServed": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Floor no. 1, AltF Coworking, Orchid Business Park, Sohna Road",
          "addressLocality": "Gurgaon",
          "addressRegion": "Haryana",
          "postalCode": "122001",
          "addressCountry": "IN"
        }
      },
      "url": "https://webnestmedia.com/mobile-marketing"
    },
    {
      "@type": "WebPage",
      "@id": "https://webnestmedia.com/mobile-marketing#webpage",
      "url": "https://webnestmedia.com/mobile-marketing",
      "name": "Mobile Marketing Services – WebNest Media",
      "description": "Boost your business with tailored mobile marketing strategies from WebNest Media, including SMS campaigns, app ads, push notifications, and mobile-first initiatives to attract, engage, and convert your audience."
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://webnestmedia.com/mobile-marketing#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://webnestmedia.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://webnestmedia.com/#services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Mobile Marketing",
          "item": "https://webnestmedia.com/mobile-marketing"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://webnestmedia.com/mobile-marketing#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is mobile marketing and how can it benefit my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mobile marketing uses SMS, app-based ads, push notifications, and mobile-first design to reach users on their devices—boosting engagement, brand visibility, and conversions."
          }
        },
        {
          "@type": "Question",
          "name": "Does mobile marketing include app advertising and push notifications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our mobile marketing services include app-based advertising, push notifications, SMS campaigns, and mobile-first strategies tailored to your business needs."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose WebNest Media for mobile marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "WebNest Media combines data-driven insights with creative execution—delivering mobile marketing campaigns that drive real results through personalized targeting and mobile-first design."
          }
        }
      ]
    }
  ]
};
    return (
        <>


            <Helmet>

             <title>Best Mobile Marketing Company in Gurgaon | WebNest Media</title>
<meta name="description" content="Raise your brand’s reach with top mobile marketing company in Gurgaon. We craft data-driven strategies for app promotion & SMS campaigns. Get a free consultation!" />

               
                <meta name="robots" content="index, follow" />
                <meta name="author" content="WebNest Media" />
                <link rel="canonical" href="https://webnestmedia.com/mobile-marketing"></link>

                 <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
            </Helmet>
            <div className=' w-[100%]'>

                <div className="">
                    <HeroSection
                        backgroundImage={topimage}
                        heading="Mobile Marketing Company"
                        highlight="In Gurgaon"
                        paragraph="From SMS to mobile ads and in-app experiences, we help you connect with your audience through impactful mobile marketing campaigns that convert.
"
                    />
                </div>
                <div className="mmc3 lg:mt-24 max-lg:mt-10 max-w-[1440px] px-[40px] max-lg:px-[16px] lg:flex lg:flex-row-reverse lg:items-center justify-between lg:gap-20 mx-auto">
                    <img src={image1} alt="Mobile Marketing Agency" className=' max-lg:float-right max-lg:w-1/2 max-lg:pb-1 ' />
                    <div className="lgc3left lg:w-[60%] justify-start ">
                        <h2 className='text-[48px] max-md:text-[32px] lg:mb-9 font-semibold'>Mobile Marketing Agency in Gurgaon</h2>
                        <br />
                        <p className='text-base font-[350]'>
                            In today's fast-paced digital world, your customers are constantly on their mobile devices. From checking social media to searching for local businesses, smartphones and tablets have become the primary gateway to the internet.

                            <br className='' /> <br className='' />We understand this shift and specialize in mobile marketing in Gurgaon that puts your brand directly into the hands of your target audience, whenever and wherever they are.

                            <br className='' /> <br />Our expert strategies are designed to capture attention, drive engagement, and convert mobile users into loyal customers, giving your business a significant competitive edge in the bustling Gurugram market.
                        </p>
                        <br />
                    </div>
                </div>


                <div className="bg-black">
                    <div className=' px-4 md:px-10 max-w-[1440px] w-full mx-auto mt-24'>
                        <div className="text-white py-12 ">
                            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
                                Our Comprehensive Mobile Marketing <br /> Services in Gurgaon
                            </h2>

                            {/* Tab Bar */}
                            <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide mb-8">
                                <div className="relative inline-flex border-b px-2 pb-6">

                                    {/* Sliding Indicator */}
                                    <span
                                        className="absolute bottom-0 h-[3px] rounded-sm bg-green-400 transition-all duration-300"
                                        style={{
                                            left: indicatorStyle.left,
                                            width: indicatorStyle.width,
                                        }}
                                    ></span>

                                    {tabsContent.map((tab, index) => (
                                        <button
                                            key={index}
                                            ref={(el) => tabRefs.current[index] = el}
                                            onClick={() => handleTabClick(index)}
                                            className="text-white text-base md:text-base whitespace-normal  min-w-[250px] break-words text-center px-2 md:px-2 py-1 transition-all duration-300"
                                        >
                                            {tab.title}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tab Content */}
                            <div className="relative flex items-start justify-center lg:px-32 pt-20 max-lg:pt-10 overflow-hidden lg:min-h-[450px]">
                                <div className="relative w-full max-lg:min-h-[600px]">
                                    <AnimatePresence custom={direction}>
                                        <motion.div
                                            key={activeTab}
                                            custom={direction}
                                            variants={tabVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{
                                                y: { type: "spring", stiffness: 250, damping: 30 }, // lower stiffness for smoother movement
                                                opacity: { duration: 0.1 }
                                            }}

                                            className="flex flex-col lg:flex-row items-start justify-between  w-full absolute top-0 left-0 gap-5"
                                        >
                                            {/* Text Section */}
                                            <div className="lg:w-[60%] text-sm md:text-base leading-relaxed space-y-4 px-4 lg:px-8">
                                                {tabsContent[activeTab].paragraphs.map((para, idx) => (
                                                    <p key={idx}>
                                                        {para.includes(':') ? (
                                                            <><strong>{para.split(':')[0]}:</strong> {para.split(':')[1]}</>
                                                        ) : (
                                                            para
                                                        )}
                                                    </p>
                                                ))}
                                            </div>

                                            {/* Image Section */}
                                            <div className="lg:w-[40%] w-full flex justify-center px-4 lg:px-8">
                                                <img
                                                    src={tabsContent[activeTab].image}
                                                    alt="Mobile Marketing"
                                                    className="w-full h-auto rounded-lg object-contain"
                                                />
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>






                <div className="mmc5 mx-auto max-w-[1440px] mt-24 max-lg:mt-10 mb-24 max-lg:mb-10">
                    <div className="lg:text-center px-4 ">
                        <h2 className="text-[52px] max-lg:text-[34px] font-semibold mb-6">
                            Why Choose <span className="">WebNest Media</span> for <br /> Mobile Marketing in Gurgaon?
                        </h2>
                        <p className="max-w-2xl text-base mx-auto text-gray-700 mb-12">
                            WebNest Media is leading agency for mobile marketing in Delhi-NCR and best mobile advertising services in India. When you partner with WebNest Media, you're choosing a team that understands the nuances of the Gurugram market and the power of mobile technology.
                        </p>

                        <div className="grid grid-cols-4 max-md:grid-cols-1 gap-8 mb-16 px-4">
                            <div className='flex flex-col items-center text-center'>
                                <img src={icon1} alt="" className='p-6' />
                                <h4 className="font-semibold text-lg mb-6 ">Local Expertise</h4>
                                <p className="text-gray-600 w-[78%]">We know the Gurugram audience and its mobile consumption patterns.</p>
                            </div>
                            <div className='flex flex-col items-center  text-center'>
                                <img src={icon2} alt="" className='p-6'></img>
                                <h4 className="font-semibold text-lg mb-6">Proven Track Record</h4>
                                <p className="text-gray-600 w-[78%]">Our strategies deliver measurable results and high ROI.</p>
                            </div>
                            <div className='flex flex-col items-center text-center'>
                                <img src={icon3} alt="" className='p-6'></img>
                                <h4 className="font-semibold text-lg mb-6">Holistic Solutions</h4>
                                <p className="text-gray-600 w-[78%]">We integrate mobile seamlessly into your broader digital marketing strategy.</p>
                            </div>
                            <div className='flex flex-col items-center text-center'>
                                <img src={icon4} alt="" className='p-6'></img>
                                <h4 className="font-semibold text-lg mb-6">Dedicated Support</h4>
                                <p className="text-gray-600 w-[78%]">A driven group of people who care about your success.</p>
                            </div>
                        </div>

                        <h3 className="text-[32px] font-semibold max-lg:text-center mb-4">Ready to Mobilize Your Marketing?</h3>
                        <p className="text-gray-700 max-lg:text-center text-base max-w-xl mx-auto">
                            Don't let your competitors capture the mobile market. Connect with WebNest Media today to discuss how our expert mobile marketing services can help your Gurgaon business thrive on the go.
                        </p>
                    </div>

                </div>
                <Newcontact></Newcontact>
                <div className="mmc6 mt-[64px] max-md:mt-[40px] max-w-[1440px] mx-auto px-[40px] max-lg:px-[16px]">
                    <p className=" mb-[50px] max-lg:mb-[30px] font-medium text-[32px] leading-[40px] stroke-custom fill-custom">Lets address your <span className='text-[#409338]'>questions</span> today!</p>
                    <Accordion></Accordion>
                </div>
            </div>

        </>
    )
}

export default MobileMarketing
