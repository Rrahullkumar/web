import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import topimage from './resources/topimage.png'
import image1 from './resources/image1.svg'
import phoneImg from './resources/tabimage.svg'
import icon1 from './resources/icon1.svg'
import icon2 from './resources/icon2.svg'
import icon3 from './resources/icon3.svg'
import icon4 from './resources/icon4.svg'
import Accordion from './components/Accordian';
import Conatctfrom from '../../components/contact/contactform';
import { FiPhone } from 'react-icons/fi';
import { CircleCheckBig } from "lucide-react";
import { CircleX } from "lucide-react";
import { Helmet } from 'react-helmet'
import tabimage from './resources/tabimage.svg'
import HeroSection from '../../components/Herosection/Herosection.jsx';
import Newcontact from '../../components/Newcontact/Newcontact.jsx'
import tabimage2 from './resources/Rectangle2.svg'
import tabimage3 from './resources/Rectangle3.svg'
import tabimage4 from './resources/Rectangle4.svg'
import tabimage5 from './resources/Rectangle5.svg'
import mobile from './resources/mobile.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import image26 from './resources/image26.png'
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
      'Mobile-optimized website design and development focuses on creating websites that deliver a seamless user experience across smartphones and tablets. It ensures fast loading speeds, responsive layouts, easy navigation, and touch-friendly elements. A mobile-optimized site improves user engagement, boosts search rankings, and drives better conversions by catering to the growing number of mobile users.',
      'Your website is your digital storefront. We ensure it looks and performs flawlessly on all mobile devices with:',
      'Responsive Design: Websites that fluidly adapt to any screen size.',
      'Fast Loading Speeds: Critical for mobile users to prevent bounce rates.',
      'Intuitive Navigation: Easy-to-use menus and clear calls-to-action for small screens.',
    ],
    image: tabimage,
  },
  {
    title: 'SMS & MMS Marketing Campaigns',
    paragraphs: [
      'SMS & MMS marketing campaigns are powerful tools for reaching customers directly on their mobile devices. SMS delivers concise, text-based messages, while MMS allows rich media like images, videos, and audio. These campaigns help businesses promote offers, send reminders, and engage audiences with high open rates and instant delivery—making them ideal for time-sensitive promotions and personalized communication.',
      'Directly communicate with your customers through their most personal device:',
      'Promotional SMS: Sending timely offers, discounts, and announcements.',
      'Transactional SMS: Delivering order confirmations, delivery updates, and reminders.',
      'MMS Campaigns: Engaging users with multimedia content like images and videos.',
    ],
    image: tabimage2,
  },
  {
    title: 'Location-Based & Proximity Marketing',
    paragraphs: [
      'Location-based and proximity marketing use GPS, Wi-Fi, Bluetooth, or beacon technology to deliver targeted messages to users based on their real-time location. This strategy allows businesses to engage customers with hyper-local offers, promotions, or alerts when they are near a store or within a specific area. It\'s a smart way to drive foot traffic, enhance user experience, and boost conversion rates by reaching the right audience at the right place and time.',
      'Connect with customers in their physical vicinity, perfect for local businesses in Gurgaon:',
      'Geofencing: Targeting users with ads when they enter a specific geographic area.',
      'Local Search Optimization: Ensuring your business appears prominently in "near me" mobile searches.',
    ],
    image: tabimage3,
  },
  {
    title: 'Mobile App Marketing & Engagement (if applicable)',
    paragraphs: [
      'Mobile app marketing and engagement focuses on promoting apps to attract users and keeping them active through personalized experiences. It involves strategies like app store optimization (ASO), push notifications, in-app messaging, and user behavior tracking to boost installs, retention, and user loyalty. The goal is to create lasting connections, drive usage, and maximize the app’s value throughout the customer journey.',
      'If you have a mobile app, we help you get more downloads and keep users engaged:',
      'App Store Optimization (ASO): Optimizing your app listing for higher visibility in app stores.',
      'Push Notifications: Crafting compelling notifications to re-engage app users.',
      'In-App Messaging: Delivering personalized messages within your app.',
    ],
    image: tabimage4,
  },
  {
    title: 'QR Code Campaigns',
    paragraphs: [
      'QR code campaigns use scannable codes to bridge the gap between offline and digital experiences. By scanning a QR code, users can instantly access websites, promotional offers, videos, app downloads, or contact details. These campaigns are cost-effective, easy to implement, and highly trackable, making them a smart tool for engaging customers, boosting interaction, and driving conversions in physical spaces like stores, events, or print media.',
      'Bridge the gap between your physical and digital presence:',
      'Creating dynamic QR codes that link to special offers, landing pages, videos, or contact info.',
      'Integrating QR codes into print ads, packaging, or in-store displays for mobile interaction.',
    ],
    image: tabimage5,
  },
];


   const tabData = [
  {
    label: 'Mobile-Optimized Website Design & Development',
    image: phoneImg,
    content: (
      <div className='text-[16px]'>
        <p className="mb-4">
          Mobile-optimized website design and development focuses on creating websites that deliver a seamless user experience across smartphones and tablets. It ensures fast loading speeds, responsive layouts, easy navigation, and touch-friendly elements. A mobile-optimized site improves user engagement, boosts search rankings, and drives better conversions by catering to the growing number of mobile users.
        </p>
        <p className="mb-4">Your website is your digital storefront. We ensure it looks and performs flawlessly on all mobile devices with:</p>
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
      <div className='text-[16px]'>
        <p className="mb-4">
          SMS & MMS marketing campaigns are powerful tools for reaching customers directly on their mobile devices. SMS delivers concise, text-based messages, while MMS allows rich media like images, videos, and audio. These campaigns help businesses promote offers, send reminders, and engage audiences with high open rates and instant delivery—making them ideal for time-sensitive promotions and personalized communication.
        </p>
        <p className="mb-4">Directly communicate with your customers through their most personal device:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Promotional SMS:</strong> Sending timely offers, discounts, and announcements.</li>
          <li><strong>Transactional SMS:</strong> Delivering order confirmations, delivery updates, and reminders.</li>
          <li><strong>MMS Campaigns:</strong> Engaging users with multimedia content like images and videos.</li>
        </ul>
      </div>
    ),
  },
  {
    label: 'Location-Based & Proximity Marketing',
    image: phoneImg,
    content: (
      <div className='text-[16px]'>
        <p className="mb-4">
          Location-based and proximity marketing use GPS, Wi-Fi, Bluetooth, or beacon technology to deliver targeted messages to users based on their real-time location. This strategy allows businesses to engage customers with hyper-local offers, promotions, or alerts when they are near a store or within a specific area. It's a smart way to drive foot traffic, enhance user experience, and boost conversion rates by reaching the right audience at the right place and time.
        </p>
        <p className="mb-4">Connect with customers in their physical vicinity, perfect for local businesses in Gurgaon:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Geofencing:</strong> Targeting users with ads when they enter a specific geographic area.</li>
          <li><strong>Local Search Optimization:</strong> Ensuring your business appears prominently in "near me" mobile searches.</li>
        </ul>
      </div>
    ),
  },
  {
    label: 'Mobile App Marketing & Engagement',
    image: phoneImg,
    content: (
      <div className='text-[16px]'>
        <p className="mb-4">
          Mobile app marketing and engagement focuses on promoting apps to attract users and keeping them active through personalized experiences. It involves strategies like app store optimization (ASO), push notifications, in-app messaging, and user behavior tracking to boost installs, retention, and user loyalty. The goal is to create lasting connections, drive usage, and maximize the app’s value throughout the customer journey.
        </p>
        <p className="mb-4">If you have a mobile app, we help you get more downloads and keep users engaged:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>App Store Optimization (ASO):</strong> Optimizing your app listing for higher visibility in app stores.</li>
          <li><strong>Push Notifications:</strong> Crafting compelling notifications to re-engage app users.</li>
          <li><strong>In-App Messaging:</strong> Delivering personalized messages within your app.</li>
        </ul>
      </div>
    ),
  },
  {
    label: 'QR Code Campaigns',
    image: phoneImg,
    content: (
      <div className='text-[16px]'>
        <p className="mb-4">
          QR code campaigns use scannable codes to bridge the gap between offline and digital experiences. By scanning a QR code, users can instantly access websites, promotional offers, videos, app downloads, or contact details. These campaigns are cost-effective, easy to implement, and highly trackable, making them a smart tool for engaging customers, boosting interaction, and driving conversions in physical spaces like stores, events, or print media.
        </p>
        <p className="mb-4">Bridge the gap between your physical and digital presence:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Creating dynamic QR codes that link to special offers, landing pages, videos, or contact info.</li>
          <li>Integrating QR codes into print ads, packaging, or in-store displays for mobile interaction.</li>
        </ul>
      </div>
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

                <meta property="og:title" content="Best Mobile Marketing Company in Gurgaon | WebNest Media" />
                <meta property="og:description" content="Raise your brand’s reach with top mobile marketing company in Gurgaon. We craft data-driven strategies for app promotion & SMS campaigns. Get a free consultation!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://webnestmedia.com/mobile-marketing" />
                <meta property="og:image" content="https://webnestmedia.com/assets/topimage-CWYK5-Lz.svg" />
                <meta property="og:site_name" content="WebNest Media" />


                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            <div className=' w-[100%]'>

                <div className="">
                    <HeroSection
                        backgroundImage={topimage}
                        heading="Mobile Marketing Company"
                        highlight="in Gurgaon"
                        paragraph="From SMS to mobile ads and in-app experiences, we help you connect with your audience through impactful mobile marketing campaigns that convert.
"
                    />
                </div>
                <div data-aos="fade-up" className="mmc3 lg:mt-24 max-lg:mt-10 max-w-[1440px] px-[40px] items-center max-lg:px-[16px] lg:flex lg:flex-row-reverse justify-between mx-auto">
                    <LazyLoadImage src={image1} alt="Mobile Marketing Agency" className=' mb-10' />
                    <div className="lgc3left lg:w-[60%] justify-start ">
                        <h2 className='text-[48px] max-md:text-3xl lg:mb-9 font-semibold'>What is Mobile marketing?</h2>
                        <br />
                        <p className='text-base font-[350]'>
                            Mobile marketing is a type of digital marketing that focuses on reaching users via smartphones, tablets, and other handheld devices. It a variety of techniques such as text and multimedia messaging, mobile and website advertising, advertising in applications, push alerts, mobile applications, QR code advertising, and marketing based on the user’s geographical location. <br />
                            Mobile marketing aims to get to them where their attention is, on mobile devices, by sending personalized messages which are engaging, timely, and relevant. It is perfect for reaching out to customers in real-time, brand recognition, increasing the number of downloads for an application, and boosting sales. <br />
                            With more and more people using mobile devices, businesses that spend time and resources in smart mobile marketing strategies have an upper hand since they can be found at all stages of the customer's journey. Be it working with a mobile app marketing agency or mobile marketing in digital marketing, this method guarantees your brand’s visibility, access, and relevance any time during the day 24/7.
                        </p>
                        <br />
                    </div>
                </div>


                <div data-aos="fade-up" className="bg-black">
                    <div className=' px-4 md:px-10 max-w-[1440px] w-full mx-auto mt-24'>
                        <div className="text-white py-12 ">
                            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
                                Our Comprehensive Mobile Marketing <br /> Services in Gurgaon
                            </h2>

                            {/* Tab Bar */}
                            <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide mb-8">
                                <div className="relative inline-flex border-b px-2 pb-6 mx-auto">

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
                                            className="text-white text-left text-base md:text-base whitespace-normal  min-w-[250px] break-words px-2 md:px-2 py-1 transition-all duration-300"
                                        >
                                            {tab.title}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tab Content */}
                            <div className="relative flex items-start justify-center lg:px-32 py-10 lg:min-h-[450px]">
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
                                                opacity: { duration: 0.5 }
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
                                                <LazyLoadImage
                                                    src={tabsContent[activeTab].image}
                                                    alt="Mobile Marketing"
                                                    className="w-full h-auto object-contain"
                                                />
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

                <section className="max-w-[1440px] mx-auto px-10 max-lg:px-4 mt-24 max-lg:mt-10 ">
                    <div className="flex flex-row  items-start justify-between sticky ">
                        <div className="lg:w-[60%]">
                            <h2 className="text-[52px] max-lg:text-3xl font-semibold mb-9 ">How Mobile Marketing Strategy Helps Your Brand Stay Everywhere and Sell More</h2>
                            <p className="text-base "><span className="font-semibold"> Advantages and Disadvantages of Mobile Marketing</span> <br /> <br className="lg:hidden" />
                                Today mobile marketing is one of the most widely used forms of marketing as it provides an opportunity for brands to reach customers at their private gadgets, smartphones. It also provides various means to reach customers through SMS, mobile applications, and through ads based on users location. This marketing branch helps businesses to engage with customers, increase conversions, and retain loyal customers. But as with anyother marketing strategy, mobile marketing have its pros and cons.
                                <br />
                                <br /></p>
                            <p className="font-semibold">Here’s a breakdown of the key advantages and disadvantages of mobile marketing: </p>
                            <div className="lg:grid grid-cols-2 gap-10  mt-12">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-row items-center  font-semibold">
                                        <CircleCheckBig className="text-[#4caf50] mr-2" /> 
                                        <p className="text-lg max-lg:text-xl">Advantages of Mobile Marketing</p>
                                    </div>
                                    <div className="grid grid-rows-6 gap-3 max-lg:gap-10">
                                        <div className="flex flex-col">
                                            <p className="text-lg text-[#4caf50]"><span className="text-[#FFBA34]">1.</span> Wide Reach</p>
                                            <p className="text-base">Billions of smartphone users globally, mobile marketing allows you to reach a massive audience—anytime, anywhere.</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-lg text-[#4caf50]"><span className="text-[#FFBA34]">2.</span> Instant Communication</p>
                                            <p className="text-base"> SMS, notifications, and in-app messages deliver your message in real time, ensuring quick customer engagement.</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-lg text-[#4caf50]"><span className="text-[#FFBA34]">3.</span>Highly Targeted Campaigns </p>
                                            <p className="text-base">Mobile marketing uses location data, user behavior, and preferences to deliver personalized content, improving relevance and conversion rates.</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-lg text-[#4caf50]"><span className="text-[#FFBA34]">4.</span>Cost-Effective</p>
                                            <p className="text-base">Compared to traditional marketing, mobile marketing (like SMS campaigns or app promotions) is often cheaper and delivers a better ROI.</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-lg text-[#4caf50]"><span className="text-[#FFBA34]">5.</span>Easy to Track and Measure</p>
                                            <p className="text-base">Billions of smartphone users globally, mobile marketing allows you to reach a massive audience—anytime, anywhere.</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-lg text-[#4caf50]"><span className="text-[#FFBA34]">6.</span>Enhances Customer Engagement</p>
                                            <p className="text-base">Mobile apps, loyalty programs, and personalized messages increase customer retention and lifetime value.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col max-lg:mt-10  gap-6">
                                    <div className="flex flex-row items-center font-semibold">
                                        <CircleX  className="text-red-600 mr-2" /> 
                                        <p className="text-lg max-lg:text-xl">Disadvantages of  Mobile Marketing</p>
                                    </div>
                                    <div className="grid grid-rows-5 gap-3 max-lg:gap-10">
                                        <div className="">
                                            <p className="text-lg text-[#4caf50]"><span className="text-[#FFBA34]">1.</span>Privacy Concerns</p>
                                            <p className="text-base">Targeting users through location and data tracking can raise privacy issues if not handled transparently.</p>
                                        </div>
                                        <div className="">
                                            <p className="text-lg text-[#4caf50]"><span className="text-[#FFBA34]">2.</span>Limited Screen Space</p>
                                            <p className="text-base"> Smaller screens on mobile devices restrict content design and may lead to user frustration if not optimized.</p>
                                        </div>
                                        <div className="">
                                            <p className="text-lg text-[#4caf50]"><span className="text-[#FFBA34]">3.</span>Ad Fatigue </p>
                                            <p className="text-base">Too many notifications, texts, or ads can annoy users and lead to uninstalls or opt-outs.</p>
                                        </div>
                                        <div className="">
                                            <p className="text-lg text-[#4caf50]"><span className="text-[#FFBA34]">4.</span>Device Compatibility Issues</p>
                                            <p className="text-base">Compared to traditional marketing, mobile marketing (like SMS campaigns or app promotions) is often cheaper and delivers a better ROI.</p>
                                        </div>
                                        <div className="">
                                            <p className="text-lg text-[#4caf50]"><span className="text-[#FFBA34]">5.</span>Requires Constant Optimization</p>
                                            <p className="text-base">Mobile trends and technologies evolve fast, so strategies must be regularly updated to stay effective.</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sticky top-20 max-lg:hidden">
                            <img src={mobile} alt="" className="h-[87vh]" />
                        </div>
                    </div>
                </section>
                <div data-aos="fade-up" className="mmc3 max-w-[1440px] px-[40px] items-center lg:mt-24 max-lg:mt-10 max-lg:px-[16px] lg:flex lg:flex-row-reverse justify-between mx-auto">
                    <LazyLoadImage src={image26} alt="Mobile Marketing Agency" className='max-lg:hidden' />
                    <div className="lgc3left lg:w-[60%] justify-start ">
                        <h2 className='text-[48px] max-md:text-3xl lg:mb-9 font-semibold '>Why Choose WebNest Media for Mobile Marketing in Gurgaon?</h2>
                        <LazyLoadImage src={image26} alt="Mobile Marketing Agency" className='lg:hidden' />
                        <br />
                        <p className='text-base font-[350]'>
                            When it comes to making your brand mobile-first and customer-focused, WebNest Media stands out as the best mobile marketing company in Gurgaon. We blend creativity, data, and cutting-edge technology to craft mobile strategies that not only reach users but engage and convert them. From SMS campaigns and push notifications to app installs and in-app engagement, our team knows what works.

As a top mobile marketing company in Gurgaon, we don’t believe in one-size-fits-all solutions. Instead, we tailor every campaign to your brand’s goals, using advanced tools and real-time analytics to maximize ROI. Whether you're launching a new app or looking to boost engagement for an existing one, our expertise as a mobile app marketing agency ensures you get visibility where it matters most—on your customers' phones.
<br className=""/> <br className=""/>
<span className="max-lg:font-semibold">At WebNest Media,</span> we also understand how important mobile marketing in digital marketing has become. That’s why we integrate mobile strategies seamlessly into your overall digital plan—so you’re not just present on mobile, you’re dominant.
<br className="" /> <br className=""/>
Choose <span className="max-lg:font-semibold">WebNest Media</span> for expert-led, ROI-driven mobile app marketing and create powerful, always-on experiences that move your business forward.</p>
                        <br />
                    </div>
                </div>




                <div data-aos="fade-up" className="mmc5 mx-auto max-w-[1440px] mt-24 max-lg:mt-10 mb-24 max-lg:mb-10">

                </div>
                <Newcontact></Newcontact>
                <div className="mmc6 mt-[64px] max-md:mt-[40px] max-w-[1440px] mx-auto px-[40px] max-lg:px-0">
                    <p className=" mb-[50px] max-lg:mb-[30px] font-medium text-[32px] text-center leading-[40px] stroke-custom fill-custom">Lets address your <span className='text-[#409338]'>questions</span> today!</p>
                    <Accordion></Accordion>
                </div>
            </div>

        </>
    )
}

export default MobileMarketing
