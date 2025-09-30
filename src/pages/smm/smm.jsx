import "./smm.css"
import { useState } from "react";

// import iamgecircle from "../home/resources/industries/Education.svg";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { RiWhatsappFill } from "react-icons/ri";
import { SiTelegram } from "react-icons/si";
import { Banknote, Codesandbox, Gift, Shapes, Zap } from "lucide-react";
import socialgif from "./resources/social.gif";

import cimage from "./resources/cimage.png";

import Cards from "./componenet/AnimatedCardList";
import Accordian from "./componenet/Accordian";

import smartright from "./resources/smartright.svg";
import accelerate from "./resources/accelerate.svg";
import largesmart from "./resources/smart-large.svg";
import macbookBgImage from "./resources/laptopBgImage.png"
import strategyIcon from "./resources/strategy.svg"
import brandBuilding from "./resources/brandBuilding.svg"
import analytics from "./resources/analytics.svg"
import { Bubbles } from "lucide-react";
import strategyImage from "./resources/strategy.png"
import contentCreation from "./resources/contentCreation.png"
import advertisingImage from "./resources/advertising.png"
import smoImage from "./resources/smoImage.png"
import brandBuildingImage from "./resources/brandBuilding.png"
import analyticReportingImage from "./resources/analyticReporting.png"
import guyWithHeadphoneImage from "./resources/guywithHeadphone.png"
import updatedBgImage from "./resources/updatedBgHeadphoneImage.png"
import servicesImages from "./resources/servicesImage.png"
import thumbsUp from "./resources/thumbsUp.png"
import thumbsDown from "./resources/thumbsDown.png"
import smmHeroImage from "./resources/smmHeroImage.jpg"
import chooseUs from "./resources/chooseWebnest.svg"

import { MdContentPasteGo } from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";
import { MdCrisisAlert } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { SiSmartthings } from "react-icons/si";
import { GiLevelFourAdvanced } from "react-icons/gi";

import { Helmet } from 'react-helmet'

import HeroSection from '../../components/Herosection/Herosection';
import topimage from './resources/bgImage.png'
import contentCreationIcon from './resources/content creation.svg'
import advertisingIcon from './resources/advertisingIcon.svg'
import smoIcon from './resources/smoIcon.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import HearFromYou from "../../components/HearFromYou/HearFromYou";


const Smm = () => {

  const icons = [
    <TiSocialTwitter />,
    <TiSocialYoutube />,
    <TiSocialLinkedin />,
    <SlSocialInstagram />,
    <SlSocialFacebook />,
    <RiWhatsappFill />,
    <SiTelegram />

  ];

  const colors = [
    "#1DA1F2",  // Twitter Blue
    "#FF0000",  // YouTube Red
    "#0077B5",  // LinkedIn Blue
    "#E1306C",  // Instagram Pink
    "#1877F2",  // Facebook Blue
    "#25D366",  // WhatsApp Green
    "#0088cc",  // Telegram Blue
  ];



  const cardData = [
    {
      id: 1,
      title: "Content Creation",
      description:
        "It’s all about crafting valuable, engaging, and relevant content—whether it’s posts, videos, blogs, or graphics—that connects with your audience. Great content builds trust, sparks conversations, and drives results.",
      icon: <MdContentPasteGo />
    },
    {
      id: 2,
      title: "Influencer Marketing",
      description:
        "Powerful strategy where brands collaborate with influencers—people with loyal, engaged followings—to promote their products or services. It’s about trust and authenticity.",
      icon: <SiGooglemarketingplatform />
    },
    {
      id: 3,
      title: "Crisis Management",
      description:
        "Fast action, transparency, and empathy are key to turning a crisis into a chance to rebuild trust.",
      icon: <MdCrisisAlert />
    },
    {
      id: 4,
      title: "Analytics Reporting",
      description:
        "Process of tracking, measuring, and analyzing your social media performance. It shows what’s working, what’s not, and where to improve.",
      icon: <TbReportAnalytics />
    },
  ];


  const socialMediaSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://webnestmedia.com/social-media-marketing#service",
        "name": "Social Media Marketing",
        "description": "Our Social Media Marketing Agency helps businesses connect with audiences, increase reach, and grow their online presence effectively.",
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
        "url": "https://webnestmedia.com/social-media-marketing"
      },
      {
        "@type": "WebPage",
        "@id": "https://webnestmedia.com/social-media-marketing#webpage",
        "url": "https://webnestmedia.com/social-media-marketing",
        "name": "Social Media Marketing Agency – WebNest Media",
        "description": "Grow your brand presence and engagement with social media marketing services by WebNest Media. We create tailored content strategies, run paid social ad campaigns, and help you connect with your audience on every platform."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://webnestmedia.com/social-media-marketing/#breadcrumb",
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
            "item": "https://webnestmedia.com/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Social Media Marketing",
            "item": "https://webnestmedia.com/social-media-marketing"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://webnestmedia.com/social-media-marketing#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does your social media marketing service include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle content creation, paid social ad campaigns, strategy development, community management, and influencer outreach tailored to your brand goals."
            }
          },
          {
            "@type": "Question",
            "name": "Which platforms do you manage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We manage campaigns and content across Instagram, Facebook, LinkedIn, Twitter, and YouTube, depending on where your audience is most active."
            }
          },
          {
            "@type": "Question",
            "name": "Why choose WebNest Media for social media marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We’re a results-driven agency in Gurgaon that combines creativity with strategy. Our campaigns drive engagement, leads, and real brand growth."
            }
          },


        ]
      },

      {
        "@type": "smm",
        "@id": "https://webnestmedia.com/social-media-marketing#webpage",
        "url": "https://webnestmedia.com/social-media-marketing",
        "name": "Best Social Media Marketing Agency | Grow Your Brand Online",
        "description": "Our Social Media Marketing Agency helps businesses connect with audiences, increase reach, and grow their online presence effectively."
      },
    ]
  };

  const servicesData = [
    {
      id: 1,
      title: "Social Media Strategy Development",
      icon: Zap, // Replace with your actual icon
      learnMore: "Learn more >",
      description: "A detailed plan is the first step in any effective campaign. We look at your brand, audience, rivals, and industry trends to develop a social media plan just for you. This makes sure that the material and marketing we create are completely in line with your business goals.",
      image: strategyImage,
      color: "#FFCC0040"
    },
    {
      id: 2,
      title: "Content Creation & Management",
      icon: Bubbles, // Replace with your actual icon
      learnMore: "Learn more >",
      description: "Our team creates content that attract people's attention and helps to build brand identification, from interesting visuals and videos to interesting captions.  We also make sure that your postings are scheduled and managed consistently across all platforms so that you have a strong and active online presence.",
      image: contentCreation,
      color: "#007AFF1A"
    },
    {
      id: 3,
      title: "Social Media Advertising (Paid Campaigns)",
      icon: Banknote, // Replace with your actual icon
      learnMore: "Learn more >",
      description: "Paid ads are the best way to immediately reach a wider audience.  We create and administer targeted ad campaigns on sites like Facebook, Instagram, LinkedIn, and Twitter. This helps you acquire good leads and get the most out of your investment.",
      image: advertisingImage,
      color: "#00D53540",
    },
    {
      id: 4,
      title: "Social Media Optimization (SMO)",
      icon: Gift, // Replace with your actual icon
      learnMore: "Learn more >",
      description: "Our SMO services make sure that all of your profiles are properly optimized for search engine exposure and brand consistency.This makes you stand out and makes it easy for people to find and connect with your business online.",
      image: smoImage,
      color: "#E100FF40"
    },
    {
      id: 5,
      title: "Brand Building & Awareness Campaigns",
      icon: Codesandbox, // Replace with your actual icon
      learnMore: "Learn more >",
      description: "We run campaigns that make your brand more visible, tell your unique story, and make you a trusted name in your field.",
      image: brandBuildingImage,
      color: "#FF006F40"
    },
    {
      id: 6,
      title: "Analytics & Reporting",
      icon: Shapes, // Replace with your actual icon
      learnMore: "Learn more >",
      description: "For long-term growth, being open is very important.  Our experts write extensive reports on how well the campaign is doing, how many people are engaging with it, and how many people are converting.  We constantly improve our techniques to get greater results by using real-time data.",
      image: analyticReportingImage,
      color: "#00C8DE40"
    }
  ];

  const [activeService, setActiveService] = useState(servicesData[0]);

  return (

    <>
      <Helmet>

        <title>Best Social Media Marketing Agency in Gurgaon | WebNest Media</title>
        <meta name="description" content="WebNest Media is Gurgaon's top social media marketing agency. We offer paid ads, regular posting, influencer marketing, A/B testing & more to boost your brand online." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebNest Media" />
        <link rel="canonical" href="https://webnestmedia.com/social-media-marketing" />

        <meta property="og:title" content="Best Social Media Marketing Agency | Grow Your Brand Online" />
        <meta property="og:description" content="Our Social Media Marketing Agency helps businesses connect with audiences, increase reach, and grow their online presence effectively." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webnestmedia.com/social-media-marketing" />
        <meta property="og:image" content="https://webnestmedia.com/assets/topimage-CDPM3k0Q.svg" />
        <meta property="og:site_name" content="WebNest Media" />

        {/* <meta property="og:title" content="Best Social Media Marketing Agency in Gurgaon | WebNest Media" />
  <meta property="og:description" content="WebNest Media is Gurgaon's top social media marketing agency. We offer paid ads, regular posting, influencer marketing, A/B testing & more to boost your brand online." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://webnestmedia.com/social-media-marketing" />
  <meta property="og:image" content="https://webnestmedia.com/assets/topimage-CDPM3k0Q.svg" />
  <meta property="og:site_name" content="WebNest Media" /> */}

        <script type="application/ld+json">
          {JSON.stringify(socialMediaSchema)}
        </script>
      </Helmet>

      <div className=' w-[100%] mb-[120px]  mx-auto'>
        <div className=" ">


          <HeroSection
            backgroundImage={smmHeroImage}
            heading="Social Media Marketing 
"
            highlight="Agency"
            paragraph="Let’s take your website from hidden to high-ranking with smart SEO, search-friendly content, and organic growth."
          />


        </div>

        {/* <div className='container lg:px-10 px-4 mx-auto'>

          <h2 data-aos="fade-up" className="  w-[100% ] mt-24 max-md:mt-10 text-3xl sm:text-3xl md:text-[32px] leading-snug sm:leading-[50px] md:leading-[60px] paraheading text-[#409338] font-bold text-center stroke-custom fill-custom ">
            Boost Your Digital Impact with <br className='max-lg:hidden' />
            Smart Social Media Planning
          </h2>



          <p data-aos="fade-up" className=' max-sm:mt-[40px] text-[15px] mt-24 text-center text-[black]  mb-[10px] w-[50%]  max-lg:w-[100%] mx-auto
'>

            Enhance your brand’s digital footprint with our social media marketing company Gurgaon, crafted to simplify content creation, scheduling, and analytics unlock your brand’s true potential today.
          </p>
        </div> */}



        {/* <div data-aos="fade-up" className=" container px-10 max-lg:px-4 mx-auto mt-[40px] mb-[100px] flex items-center justify-center max-md:w-[100%]">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="w-[60px] h-[60px] rounded-full text-white flex items-center justify-center text-2xl border-2 border-white -ml-3 first:ml-0"
              style={{
                backgroundColor: colors[index],
                zIndex: icons.length - index,
              }}
            >
              {Icon}
            </div>
          ))}
        </div> */}

        {/* <div data-aos="fade-up" className="
        flex flex-col lg:flex-row container mx-auto">
          
          <div className="w-full md:basis-1/3  flex justify-center">
            <div className="w-[300px] h-[450px] rounded-md bg-gray-300 overflow-hidden bocshadowgif "  >
              <LazyLoadImage src={socialgif} alt="SEO Visual" className="w-full h-full object-contain" />
            </div>
          </div>


          <div className=" container  max-lg:mx-0 mx-auto w-full md:basis-1/3   gap-4 max-lg:flex max-lg:justify-center max-lg:items-center ">

            <div className="w-full max-w-[300px] h-[400px]   flex flex-col justify-end max-lg:justify-center">
              <div className=' flex flex-col gap-[30px]' >


                <div className="flex flex-col gap-2 rounded-md bg-white p-6 relative right-[-130px]       max-lg:right-[0px]  bocshadowgif border-b ">
                  <h6 className="text-black text-[15px] font-bold">
                    Smart Social Media Management
                  </h6>
                  <p className="text-black text-[13px] leading-5 font-normal">
                    Schedule, publish, and monitor content across all platforms in one place. Social Hub’s intuitive dashboard makes it easy to manage engagement, track performance, and stay consistent with your brand voice.
                  </p>
                </div>

                <div className="flex flex-col gap-2 rounded-md bg-white p-6  border-b  bocshadowgif">
                  <h6 className="text-black text-[15px] font-bold">
                    Another Strategy
                  </h6>
                  <p className="text-black text-[13px] leading-5 font-normal">
                    Build strategies that are tailored for your business objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="container px-10 max-lg:mx-4 mx-auto w-full md:basis-1/3  flex justify-center items-center max-xl:hidden">
            <div className="text-center text-black font-semibold text-xl">
              <LazyLoadImage src={cimage} alt="Smart socail media Managment " className=' ' />

            </div>
          </div>
        </div> */}

        {/* new grow you business section */}
        <div style={{
          backgroundImage: `url(${macbookBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',

        }} className="" >
          <div className="mx-auto container">
            <div className="w-full px-4 sm:px-10 max-w-7xl py-8 sm:py-32 flex flex-col gap-8 md:gap-12 lg:gap-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold !leading-snug">
                Grow Your Business with Data-Driven Best Social Media Marketing Agency in India
              </h2>

              <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-8 lg:w-[88%]">
                <div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed 
                columns-1 sm:columns-2
                gap-6 sm:gap-8 lg:gap-10
                text-justify hyphens-auto">
                    Not every brand knows how to get a fantastic online presence, but they all desire one. The most important thing is to pick the right social media marketing company in India. Instead of relying on guesswork make sure your brand reaches the right individuals at the right time. A professional agency helps businesses get through the noise and connect with customers in a way that actually matters. They achieve this by offering them detailed information about their target audience and studying their competition. In a market like Delhi NCR that is quite competitive, employing the right social media marketing agency in delhi ncr might help you stand out. These businesses don't just take care of your accounts; they also provide full-service social media marketing, which includes creating content, executing paid ad campaigns, working with influencers, and keeping an eye on how well you're doing. They use creativity and statistics to convert simple posts into effective campaigns that get people to interact, join up, and buy products. If you want your firm to grow rapidly and in a way that lasts, you should engage with a data-driven agency. It's the best way to go.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* new our social media marketing service */}
        <div className="mx-auto container">
          <div className="flex flex-col gap-4 mt-8 px-4 sm:px-10 w-full items-start">
            {/* heading */}
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] sm:w-[70%] font-semibold lg:leading-[1.6]">
              What's Included in Our Social Media Marketing Services
            </p>

            {/* subheading/ content */}
            <p className="text-sm sm:text-base md:text-lg lg:text-[18px] max-w-4xl">
              WebNest Media offers best social media marketing services in India designed to help you attract the right customers and boost your company's bottom line. Our services aren't just about running campaigns—they're about building strategies that deliver measurable results. Through our Social Media Optimization (SMO) and Social Media Marketing (SMM) services, we focus on data-driven insights to ensure maximum impact. Let's take a closer look at what WebNest Media includes in its social media marketing services.
            </p>

            {/* 2 functional cards */}
            <div className="w-full">
              <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:items-stretch">
                {/* left section - Service Cards List */}
                <div className="w-full lg:w-[40%]">
                  <div className="overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 lg:[&::-webkit-scrollbar]:hidden lg:[-ms-overflow-style:none] lg:[scrollbar-width:none] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-blue-400 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-blue-500">
                    <div className="flex lg:flex-col gap-3 md:gap-4 w-max lg:w-full">
                      {servicesData.map((service) => (
                        <div
                          key={service.id}
                          onClick={() => setActiveService(service)}
                          className={`
                flex items-center justify-between gap-3 md:gap-4 
                p-3 md:p-4 mb-3 rounded-xl cursor-pointer transition-all duration-300 
                flex-shrink-0 w-[240px] sm:w-[260px] md:w-[280px] lg:w-full
                ${activeService.id === service.id
                              ? 'bg-white border-l-4 border-blue-500'
                              : 'bg-[#007AFF0A] hover:bg-gray-100'
                            }
              `}
                        >
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h3
                              className={`font-semibold text-sm sm:text-base md:text-lg ${activeService.id === service.id
                                ? 'text-gray-800'
                                : 'text-gray-600'
                                }`}
                            >
                              {service.title}
                            </h3>
                            <p className="text-[#000000]/60 text-xs sm:text-sm cursor-pointer hover:text-blue-700">
                              {service.learnMore}
                            </p>
                          </div>

                          {/* Icon - moved to right */}
                          <div
                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: service.color }}
                          >
                            <service.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* right section - Exact Desktop Structure */}
                <div className="w-full lg:w-[60%] flex flex-col md:flex-row bg-[#007AFF0A] rounded-2xl">
                  {/* left content area */}
                  <div className="flex-1 p-4 md:p-6 lg:p-8">
                    <h2 className="text-xl md:text-2xl font-bold text-[#000000] mb-3 md:mb-4">
                      {activeService.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-[16px]">
                      {activeService.description}
                    </p>
                  </div>

                  {/* right image area */}
                  <div className="w-full h-48 md:w-64 lg:w-96 md:h-auto rounded-b-2xl md:rounded-b-none md:rounded-r-2xl flex items-center justify-center p-4">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-auto max-w-[180px] md:max-w-[220px] lg:max-w-[320px] object-contain"
                      onError={(e) => {
                        e.target.src =
                          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlmYTZiNyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pgo8L3N2Zz4K';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>




            <p className="text-[16px] lg:max-w-[80%] italic">
              By choosing us, you’re not just hiring an agency, you’re partnering with a team that understands your vision and transforms it into success. Whether you’re looking for a trusted social media marketing company in India or a result-driven social media marketing agency in Gurgaon, WebNest Media is here to be your digital growth partner.
            </p>
          </div>
        </div>

        {/* new grow your business section */}
        <div style={{
          backgroundImage: `url(${updatedBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',

        }} className="sm:mt-6" >
          <div className="mx-auto container py-16 mt-7">
            <div className="w-full px-4 sm:px-10 max-w-7xl flex flex-col gap-4 md:gap-12 lg:gap-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold !leading-snug">
                Why Partnering with a Best Social Media Agency Is a Game-Changer
              </h2>

              <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-8 lg:w-[80%]">
                <p>Social media has changed the game for digital marketing agencies and social media marketers. It has changed how brands connect with their customers and establish trust over time. When you partner with the best social media marketing agency, they don't only post material for your brand; they also make plans that get people to notice, interact with, and develop your business. The proper business can convert social media into effective commercial tools by coming up with interesting campaigns and looking at how well they work. <br /> <br />

                  At the start of 2025, India had over 491 million active social media user accounts, which was about 33.7% of the country's total population.That's an increase of 29 million new users (+6.3%) from the beginning of 2024.Indians spend an average of 2 hours and 50 minutes a day on social media, which shows how much potential there is for brands to connect with people. <br /> <br />

                  The best social media marketing agency in India has both experience and new ideas. They know how to read audience behavior, get the most out of ad spending, and use data to get genuine outcomes. Businesses have a competitive edge, reach more people online, and get better returns on their investments by working with professionals. You don't have to try and fail; instead, you receive a clear path to success. Working with the proper agency may really change the game. <br />
                </p>

              </div>
            </div>
          </div>

        </div>

        <HearFromYou />

        {/* pros and cons section */}
        <div className="mx-auto container">
          <div className="w-full px-4 sm:px-10 max-w-7xl  flex flex-col gap-8 md:gap-12 lg:gap-16">
            <h2 className="text-2xlsm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold !leading-snug">
              Analyzing the Pros and Cons of Social Media Marketing Services for Better ROI
            </h2>

            <div className="w-10/12">
              <p>Social media marketing has become one of the most powerful tools for businesses to connect with their audience, build brand presence, and drive sales. Like any strategy, it comes with its strengths and limitations. Understanding both sides helps businesses make smarter decisions and get the most out of their efforts.</p>
            </div>
          </div>
        </div>

        {/* pros and cons table remaining */}
        <div className="mx-auto mt-3">
          <div className="relative w-full">
            {/* Mobile/Tablet Layout - Stacked */}
            <div className="block md:hidden">
              {/* Pros Section - Mobile */}
              <div className="bg-[#72C746] p-6 text-white flex flex-col gap">
                <div className="flex flex-col gap-4 items-center text-center mb-6">
                  <div>
                    <img src={thumbsUp} alt="" />
                  </div>
                  <h2 className="text-xl font-bold">Pros of Social Media Marketing</h2>
                </div>

                <div className="">
                  <div>
                    <h3 className="text-base font-semibold mb-2">1. More people can see your brand and reach it</h3>
                    <p className="text-sm leading-relaxed">
                      Billions of people use Facebook, Instagram, LinkedIn, and Twitter every day. Social media marketing may help businesses contact a lot of people all around the world.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold mb-2">2. Marketing that doesn't cost a lot</h3>
                    <p className="text-sm leading-relaxed">
                      Social media ads can cost less than regular ads. Even tiny firms can pay for ads and get results right away.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold mb-2">3. Engaging directly with customers</h3>
                    <p className="text-sm leading-relaxed">
                      You can talk to customers on social media in real time. Responding to inquiries, comments, and feedback builds trust and makes consumers more loyal to your brand.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold mb-2">4. Insights Based on Data</h3>
                    <p className="text-sm leading-relaxed">
                      Platforms tell you how your audience acts, how interested they are, and how well your ads are working. Businesses can use this knowledge to make their strategies better and get the most out of their money.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold mb-2">5. More people know about your brand</h3>
                    <p className="text-sm leading-relaxed">
                      People will remember your brand better if you post often, tell tales, and generate content that people enjoy to read. This will make it easier for consumers to find you in a crowded market.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cons Section - Mobile */}
              <div className="bg-[#FF3F3A] p-6 text-white">
                <div className="flex flex-col gap-4 items-center text-center mb-6">
                  <div>
                    <img src={thumbsDown} alt="" className="w-16 h-16" />
                  </div>
                  <h2 className="text-xl font-bold">Cons of Social Media Marketing</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-semibold mb-2">1. Management that takes a lot of time</h3>
                    <p className="text-sm leading-relaxed">
                      It takes a lot of time and work to keep up with many social media accounts, make content, and answer customers' questions. It can get out of hand if you don't plan ahead.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold mb-2">2. Algorithms change all the time</h3>
                    <p className="text-sm leading-relaxed">
                      The algorithms that social media sites use change all the time, which influences how visible and far-reaching they are. You have to keep changing what works today, because it could not work tomorrow.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold mb-2">3. Ads that cost money can be expensive</h3>
                    <p className="text-sm leading-relaxed">
                      Social media ads can be cheap to start with, but in areas that are very competitive, the cost of ads might go up, which makes it hard for small firms with limited budgets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Original Design (md and up) */}
            <div className="hidden md:block">
              {/* Green Background Base */}
              <div className="absolute inset-0 bg-[#72C746]"></div>

              {/* Red Section with Diagonal Clip */}
              <div
                className="absolute inset-0 bg-[#FF3F3A]"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 40% 100%)'
                }}
              ></div>

              {/* Content Container */}
              <div className="relative flex w-full sm:mt-3">
                {/* Pros Section Content - Constrained to avoid red area */}
                <div className="w-1/2 p-4 lg:p-8 text-white flex flex-col justify-start z-10"
                  style={{
                    clipPath: 'polygon(0% 0%, 90% 0%, 75% 100%, 0% 100%)',
                    paddingRight: '2rem lg:3rem'
                  }}>
                  <div className="flex flex-col gap-3 lg:gap-5">
                    {/* Thumbs Up Icon with Yellow Sleeve */}
                    <div className="mx-auto">
                      <img src={thumbsUp} alt="" />
                    </div>
                    <h2 className="text-xl lg:text-2xl font-bold">Pros of Social Media Marketing</h2>
                  </div>

                  <div className="space-y-4 lg:space-y-6 w-[78%]">
                    <div>
                      <h3 className="text-base lg:text-lg font-semibold mb-2">1. More people can see your brand and reach it</h3>
                      <p className="text-sm leading-relaxed">
                        Billions of people use Facebook, Instagram, LinkedIn, and Twitter every day. Social media marketing may help businesses contact a lot of people all around the world.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base lg:text-lg font-semibold mb-2">2. Marketing that doesn't cost a lot</h3>
                      <p className="text-sm leading-relaxed">
                        Social media ads can cost less than regular ads. Even tiny firms can pay for ads and get results right away.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base lg:text-lg font-semibold mb-2">3. Engaging directly with customers</h3>
                      <p className="text-sm leading-relaxed">
                        You can talk to customers on social media in real time. Responding to inquiries, comments, and feedback builds trust and makes consumers more loyal to your brand.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base lg:text-lg font-semibold mb-2">4. Insights Based on Data</h3>
                      <p className="text-sm leading-relaxed">
                        Platforms tell you how your audience acts, how interested they are, and how well your ads are working. Businesses can use this knowledge to make their strategies better and get the most out of their money.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base lg:text-lg font-semibold mb-2">5. More people know about your brand</h3>
                      <p className="text-sm leading-relaxed">
                        People will remember your brand better if you post often, tell tales, and generate content that people enjoy to read. This will make it easier for consumers to find you in a crowded market.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cons Section Content */}
                <div className="w-1/2 p-4 lg:p-8 text-white flex flex-col justify-start z-10 pl-8 lg:pl-12">
                  <div className="flex flex-col gap-3 lg:gap-5">
                    {/* Thumbs Down Icon */}
                    <div className="mx-auto">
                      <img src={thumbsDown} alt="" />
                    </div>
                    <h2 className="text-xl lg:text-2xl font-bold">Cons of Social Media Marketing</h2>
                  </div>

                  <div className="space-y-4 lg:space-y-6">
                    <div>
                      <h3 className="text-base lg:text-lg font-semibold mb-2">1. Management that takes a lot of time</h3>
                      <p className="text-sm leading-relaxed">
                        It takes a lot of time and work to keep up with many social media accounts, make content, and answer customers' questions. It can get out of hand if you don't plan ahead.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base lg:text-lg font-semibold mb-2">2. Algorithms change all the time</h3>
                      <p className="text-sm leading-relaxed">
                        The algorithms that social media sites use change all the time, which influences how visible and far-reaching they are. You have to keep changing what works today, because it could not work tomorrow.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base lg:text-lg font-semibold mb-2">3. Ads that cost money can be expensive</h3>
                      <p className="text-sm leading-relaxed">
                        Social media ads can be cheap to start with, but in areas that are very competitive, the cost of ads might go up, which makes it hard for small firms with limited budgets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        {/*  */}
        <div className="mx-auto container">
          <div className="w-full px-4 sm:px-10 max-w-7xl py-10  flex flex-col gap-8 md:gap-12 lg:gap-16">
            <p className="text-[16px] lg:max-w-[80%] italic">
              Balancing the pros and cons of social media marketing is essential for long-term success. With the right social media marketing service in India, businesses can overcome challenges, maximize returns, and build stronger connections with their audience. Partnering with a trusted social media marketing company in India ensures you have the right strategy, expertise, and support to turn social platforms into powerful engines of growth.
            </p>
          </div>
        </div>



        {/* why choose us section - Mobile First Responsive */}
        <div className="mx-auto container mt-3 sm:mt-6">
          <div className="w-full px-4 sm:px-10  flex flex-col gap-6 md:gap-2 lg:gap-2">
            {/* Responsive heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold !leading-snug">
              Why Choose WebNest Media for Social Media Marketing Services?
            </h2>

            {/* Content and Image Section */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="w-full lg:w-[65%] lg:order-1">
                <div className="prose prose-gray max-w-none">
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mb-4 md:mb-6">
                    Choosing the appropriate partner for your digital growth might mean the difference between just being online and really striking out. WebNest Media isn't just another name in the list of social media marketing agencies. We're a group of people who want to help brands make real connections, get more people involved, and see real results.
                  </p>

                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mb-4 md:mb-6">
                    We are a trusted social media marketing agency in Gurgaon that specializes in making plans that fit your specific business goals. Our method is meant to get the most return on investment (ROI) while also building your brand identity. It includes everything from making content and running ads to reaching out to influencers and doing extensive analytics.
                  </p>

                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mb-4 md:mb-6">
                    If you run a business in one of the most competitive areas, working with a trustworthy social media marketing agency in Delhi NCR will help you stay ahead of the trends and your competitors. We at WebNest Media use both creativity and data-driven insights to create campaigns that not only get people's attention but also lead to genuine growth.
                  </p>

                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                    When you choose WebNest Media, you're choosing expertise, innovation, and a dedicated team that treats your success as our priority.
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-[45%] order-1 lg:order-2 flex lg:justify-end">
                <img
                  src={chooseUs}
                  alt="Why Choose WebNest Media"
                  className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>



        {/* <div className='container px-10 max-lg:px-4 mx-auto max-md:mt-12 mt-[200px] max-lg:mt-[100px]'>

          <h2 data-aos="fade-up" className="text-[#409338] font-bold text-[40px] max-md:text-[28px] leading-[40px]  mt-[100px] lg:text-center stroke-custom fill-custom">Streamline Your Social Media Account </h2>

          <Cards className="" />
        </div> */}


        {/* <div className='container px-10 max-lg:px-4 mx-auto flex justify-center max-lg:flex-col-reverse gap-[40px] mt-[100px] max-lg:mt-10'>



          <div data-aos="fade-up"
            className="w-[48%] max-lg:w-[100%] flex flex-col items-end justify-end  bg-no-repeat bg-contain bg-left-top"
            style={{ backgroundImage: `url(${accelerate})` }}
          >

            <LazyLoadImage src={accelerate} alt="Advance Analytics & Insights" className="hidden" aria-hidden="true" />


            <div data-aos="fade-up" className="max-lg:w-[100%] w-[75%] bg-white p-6 rounded-xl shadow-lg">
              <div className="">
                <div className='flex items-center  gap-2 '>
                  <span><GiLevelFourAdvanced /></span>
                  <h3 className="text-lg font-semibold text-[#1a1a1a]">
                    Advanced Analytics & Insights
                  </h3>
                </div>
                <div>

                  <p className="mt-2 text-sm text-gray-600">
                    Get real-time data that drives decisions. Social Hub offers deep insights into audience behavior, post performance, and growth trends—empowering you to optimize your strategy and accelerate results.
                  </p>
                </div>
              </div>
            </div>
          </div>



          <div className="lg:w-[50%] max-md:w-[100%]   text-center lg:text-left">
            <div className="max-w-6xl mx-auto flex flex-col  items-start justify-between lg:gap-10 max-md:gap-4">
              <h2 data-aos="fade-up" class="text-[#409338] font-bold text-[40px] max-md:text-[28px] leading-[40px]  text-left stroke-custom fill-custom">  Accelerate Your Digital Presence with Social Hub
              </h2>
              <p data-aos="fade-up" className="text-[black] text-[15px] max-md:text-left  max-w-xl max-md:mb-5">
                Unlock the full potential of your brand online with Social Hub. From social media
                management to content optimization, Social Hub helps you grow faster, engage smarter,
                and stand out in the digital crowd.
              </p>

              <Link to="/contact-us"
                aria-label="WebNest Media  Conatact Now"

              >
                <button data-aos="fade-up" type="submit" className="uiverse-button" style={{ background: "#409338" }}>Contact Now

                </button>

              </Link>


              <div data-aos="fade-up" className=" max-md:w-[100%] w-[75%] bg-white p-6 rounded-xl shadow-lg">
                <div className="">

                  <div data-aos="fade-up" className='flex items-center  gap-2 '>
                    <span className="w-[20px] h-[20px] object-contain"> <SiSmartthings />  </span>
                    <h3 className="text-lg font-semibold max-md:text-left text-[#1a1a1a]">Smart Social Media Management</h3>
                  </div>
                  <div>

                    <p className="mt-2 text-sm max-md:text-left text-gray-600">
                      Schedule, publish, and monitor content across all platforms in one easy-to-use tool.
                      Automate and boost reach, improve engagement, track performance, and stay consistent
                      with your brand’s voice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div> */}



        <div className='mt-[100px] max-lg:mt-10 container px-4 sm:px-10 max-lg:px-4 mx-auto '>
          <h2 className="text-[#409338] mb-[50px] font-bold text-[32px] leading-[40px]  text-center stroke-custom fill-custom">FAQs About Social Media Marketing     </h2>
          <Accordian />
        </div>

        {/* get in touch section */}
        <section className="w-full bg-white py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-12">
              {/* Small heading */}
              <p className="text-sm md:text-base lg:text-lg text-gray-600 font-medium tracking-wide uppercase">
                LET'S COLLABORATE
              </p>

              {/* Main content area using CSS Grid */}
              <div className="grid grid-cols-1 place-items-center relative">
                {/* Foreground text */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black col-start-1 row-start-1 z-10">
                  LET'S WORK
                  <br />
                  <span className="block mt-8">TOGETHER</span>
                </h2>

                {/* Circular Button */}
                <div className="col-start-1 row-start-1 z-20 flex flex-col items-center justify-center">
                  <button
                    className="bg-[#4CAF50] hover:bg-[#45a049] text-white w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#4CAF50]/30 shadow-lg hover:shadow-xl group"
                    aria-label="Get in touch with us"
                  >
                    {/* Arrow Icon */}
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 mb-1 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>

                    {/* Get In Touch Text */}
                    <span className="text-xs md:text-sm lg:text-base font-medium leading-tight">
                      Get In Touch
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>




      </div>
    </>
  )
}

export default Smm
