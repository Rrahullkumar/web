import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
// import '../../../src/index.css'; // or './styles.css'

import "./homeStyle.css"
import Bannerlady from "../../assets/bannerlady.png";
import client from "../../assets/client.png"
import Star1 from "../../pages/home/resources/Frame4.png"
import Star2 from "../../pages/home/resources/Frame5.png"
import Star3 from "../../pages/home/resources/Frame6.png"
import Star4 from "../../pages/home/resources/Frame4.png"

import slidethree from "../../pages/home/resources/Slack.png";
import trello from "../../pages/home/resources/trello.png";
import pana from "../../pages/home/resources/pana.png";
import rocket from "../../pages/home/resources/rocket.png";
import marketingbanner from "../../pages/home/resources/marketingbanner.png";
import PPC from "../../pages/home/resources/PPC.svg";
import MobileAppDevelopment from "../../pages/home/resources/mobileappdevelopment.svg";
import ConversionRateOptimization from "../../pages/home/resources/ConversionRateOptimization.svg";
import AffiliateMarketing from "../../pages/home/resources/AffiliateMarketing.svg";
import SocialMediaMarketing from "../../pages/home/resources/Socialmediamarketing.svg";
import WebDevelopment from "../../pages/home/resources/WebDevelopment.svg";
import EmailMarketing from "../../pages/home/resources/EmailMarketing.svg";
import SEM from "../../pages/home/resources/SEM.svg";
import ContentMarketing from "../../pages/home/resources/ContentMarketing.svg";
import SEO from "../../pages/home/resources/SEO.svg";

import BradStrategy from "../../pages/home/resources/BradStrategy.svg";
import googleadds from "../../pages/home/resources/GoogleAdword.png";
import facebookads from "../../pages/home/resources/Facebookads.png";
import instagramads from "../../pages/home/resources/instagramads.png";
import Youtubeads from "../../pages/home/resources/Youtubeads.png";





// import "./FlipCard.css";
import * as FaIcons from "react-icons/fa";

import Slider from "./componnet/ResponsiveCarousel";
import AnimatedCardList from "../../components/industryCard/AnimatedCardList";

import Countarcard from "./componnet/counterCard"

import ImageSlider from "./componnet/TestomonilaSlider";
import Accordion from "./componnet/Accordian";
import curve from "./resources/curvepath.svg";
import { FaPhoneVolume } from "react-icons/fa6";
import Conatctfrom from "../../components/contact/contactform";
import { FiPhone } from "react-icons/fi";
import { Helmet } from "react-helmet";

import Monday from "../../pages/home/resources/monday.png";
import Notion from "../../pages/home/resources/Notion.png";
import forcorner from "./resources/forcorner.svg";
import ntechnologies from "./resources/ntechnologies.webp";
import residency from "./resources/residency.svg";
import shreehari from "./resources/shreehari.svg";
import ank from "./resources/ank.svg";
import carworld from "./resources/carworld.svg";
import dosa from "./resources/dosa.jpg";
import lotus from "../../pages/home/resources/lotus.svg";
import sportsline from "../../pages/home/resources/sportsline.svg";
import heritagebadminton from "../../pages/home/resources/heritagebadminton.svg";
import sandstone from "../../pages/home/resources/sandstone.svg";
import readit360 from "../../pages/home/resources/readit360.svg";
import Houseforever from "../../pages/home/resources/Houseforever.svg";
import ParticlesBackground from "../../components/ParticlesBackground";
import Newcontact from "../../components/Newcontact/Newcontact";

import { LazyLoadImage } from 'react-lazy-load-image-component';

const images = [
  { src: Monday, name: "Monday" },
  { src: Notion, name: "Notion" },
  { src: forcorner, name: "Forcorner" },
  { src: ntechnologies, name: "NTechnologies" },
  { src: residency, name: "Residency" },
  { src: shreehari, name: "Shree Hari" },
  { src: ank, name: "ANK" },
  { src: carworld, name: "Car World" },
  { src: dosa, name: "Dosa" },
  { src: lotus, name: "Lotus" },
  { src: sportsline, name: "Sportsline" },
  { src: heritagebadminton, name: "Heritage Badminton" },
  { src: sandstone, name: "Sandstone" },
  { src: readit360, name: "Readit 360" },
  { src: Houseforever, name: "House Forever" },
];


const firstTrackImages = [...images, ...images, ...images, ...images];
const shuffledImages = [...images, ...images, ...images, ...images].sort(() => Math.random() - 0.5);

const autoSlide = [
  {
    image: googleadds,
    Heading: "Google Ads",
    Subheading: "Google Ad | Focused on ROI, Not Just Reach ",
    para: "As a leading Google Ad service in Gurgaon, we help businesses of all sizes whether startups, SMEs, and enterprises—drive instant traffic, generate qualified leads, and boost online sales with precision-targeted ad campaigns. Our team of certified experts combines strategic planning, in-depth keyword research, and continuous optimization to ensure your ads reach the right audience at the right time.  ",
    buttonText: "Explore more about Google Ads"

  },

  {
    image: facebookads,
    Heading: "Facebook Ads",

    Subheading: "Facebook Ads | Drive Instant Sales & Qualified Leads ",
    para: "As Facebook ads services agency in Gurgaon, we assist in creating campaigns that drive targeted traffic and generate high-quality leads across India. Our specialist team ensures your ads are seen by the right people at the right time. Boost brand awareness or increase sales, we design and optimize campaigns that align with your specific business goals",
    buttonText: "Explore more about Facebook Ads"

  },

  {
    image: instagramads,
    Heading: "Instagram Ads ",

    Subheading: "Instagram Ads | Elevate Your Business",
    para: "As a best Instagram Ads services agency in Gurgaon, we design visually compelling campaigns that engage your target audience and drive conversions. Our eye-catching campaigns are designed to boost visibility, interest, and drive conversions, ensuring your brand stands out in the feed and delivers measurable results.",
    buttonText: "Explore more about Instagram Ads"

  },

  {
    image: Youtubeads,
    Heading: "YouTube Ads ",

    Subheading: "YouTube Ads | Transform Views into Sales",
    para: "As a leading YouTube Ads services agency in Gurgaon, we design to get your brand in front of millions of potential customers, turning views into action. We create powerful video campaigns that not only capture attention but also drive real results",
    buttonText: "Explore more about Instagram Ads"

  },


];

const Home = () => {


  const [flippedIds, setFlippedIds] = useState([]);


  const cardsData = [

    { id: 1, icon: PPC, content: "Search Engine Marketing", paracontent: "Boost Your Online Visibility Instantly with Proven SEM Strategies That Drive Real Results! " },
    { id: 2, icon: SEO, content: "Search Engine Optimization", paracontent: "Boost Your Online Visibility and Drive Traffic with Expert SEO Solutions" },

    { id: 3, icon: WebDevelopment, content: " Web Development ", paracontent: "Transform Your Ideas into Reality with Cutting-Edge Web Development Solutions!" },

    { id: 4, icon: SocialMediaMarketing, content: "Social Media Marketing", paracontent: "Skyrocket Your Brand’s Visibility with Powerful Social Media Marketing Strategies!" },

    { id: 5, icon: ContentMarketing, content: " Content Marketing ", paracontent: "Boost Your Brand’s Reach with Powerful Content Marketing That Converts" },

    { id: 6, icon: BradStrategy, content: "Brand Strategy", paracontent: "Unleashing the Power of Purpose: Craft a Brand Strategy That Speaks, Connects, and Converts" },
    { id: 7, icon: AffiliateMarketing, content: " Affiliate Marketing ", paracontent: "Unlock Passive Income: Discover the Power of Affiliate Marketing Today!" },
    { id: 8, icon: EmailMarketing, content: "Email Marketing", paracontent: "Turn Clicks into Customers: Unlock the Power of Email Marketing Today!" },
    { id: 9, icon: MobileAppDevelopment, content: " Mobile App Development ", paracontent: "Transform Your Vision into Reality with Cutting-Edge Mobile App Development Solutions!" },

    { id: 10, icon: ConversionRateOptimization, content: "Conversion Rate Optimization", paracontent: "Unlock Skyrocketing Sales with Proven Conversion Rate Optimization Tactics!." },




  ];

  const toggleFlip = (id) => {
    if (flippedIds.includes(id)) {
      setFlippedIds(flippedIds.filter((fid) => fid !== id));
    } else {
      setFlippedIds([...flippedIds, id]);
    }
  };



  const testimonialsData = [
    {
      text: "Webnest Media transformed our online presence. After working with them on our SEO strategy, we saw a 40% increase in organic traffic within just three months. Their team truly understands digital marketing, and their custom approach has helped us reach the right audience. Highly recommended!",
      person: "John D., CEO of GreenTech Solutions",
      img: SEO
    },
    {
      text: "I can't say enough great things about Webnest Media. Their social media management services have taken our brand visibility to new heights. Their creative campaigns and attention to detail have made a real difference in engaging our target customers. We’ve noticed a significant increase in sales since partnering with them!",
      person: "Sarah L., Marketing Director at Luxe Apparel",
      img: PPC
    },
    {
      text: "The team at Webnest Media has been instrumental in building our online store. Their web design and development services were top-notch, and they created a site that’s easy to navigate and optimized for conversions. We’ve seen a remarkable growth in online sales and customer engagement.",
      person: "Michael R., Founder of Fresh Foods Inc.",
      img: WebDevelopment
    },
    {
      text: "Webnest Media’s PPC campaigns were a game-changer for our business. They managed our Google Ads and social media ads efficiently, driving targeted traffic to our website. In just a few weeks, we saw a 25% increase in membership sign-ups. Their results speak for themselves!",
      person: "Emily T., Owner of CityFitness",
      img: SEO
    },
    {
      text: "Working with Webnest Media has been an absolute pleasure. Their content marketing strategy was exactly what we needed to engage our audience and drive traffic to our site. They provided actionable insights and crafted content that resonated with our potential clients. Our lead generation has skyrocketed since partnering with them.",
      person: " Alex P., Director of Digital Strategy at Creative Solutions",
      img: PPC
    },

  ];




  const wrapperRef = useRef();
  const secondREf = useRef();
  const thirdREf = useRef();
  const [trigger, setTrigger] = useState(false);

  const [thirdtrigger, setThirdtrigger] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        setTrigger(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );



    const observer3 = new IntersectionObserver(
      ([entry]) => {
        setThirdtrigger(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (wrapperRef.current) {
      observer1.observe(wrapperRef.current);
    }


    if (thirdREf.current) {
      observer3.observe(thirdREf.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer1.unobserve(wrapperRef.current);
      }

      if (thirdREf.current) {
        observer3.unobserve(thirdREf.current);
      }
    };
  }, []);




  return (
    <>


      <Helmet>
        <title>Best Digital Marketing Agency in Gurgaon | WebNest Media</title>
        <meta
          name="description"
          content="Grow your business online with WebNest Media, a top digital marketing agency in Gurgaon offering SEO, PPC, SMM, and more."
        />
        <meta
          name="keywords"
          content="digital marketing company in India, digital marketing service, top digital marketing agencies in gurgaon, top digital marketing companies in gurgaon, top 10 digital marketing companies in gurgaon, creative digital marketing company in gurgaon, digital marketing consultant in gurgaon"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebNest Media" />
        <link rel="canonical" href="https://webnestmedia.com/" />


  <meta property="og:title" content="Best Digital Marketing Agency in Gurgaon | WebNest Media" />
  <meta property="og:description" content="Grow your business online with WebNest Media, a top digital marketing agency in Gurgaon offering SEO, PPC, SMM, and more." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://webnestmedia.com/" />
  <meta property="og:site_name" content="WebNest Media" />
  <meta property="og:image" content="https://webnestmedia.com/assets/newlogo-CQU_gx5-.svg" />


        {/* Organization Schema */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://webnestmedia.com/#organization",
        "name": "WebNest Media",
        "url": "https://webnestmedia.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://webnestmedia.com/assets/newlogo-CQU_gx5-.svg",
          "width": 152,
          "height": 43
        },
        "description": "WebNest Media is a leading digital marketing agency in Gurgaon, offering SEO, SMM, Email Marketing, Influencer Marketing, PPC, Content Strategy, and more.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1ST Floor ALTF Coworking, Orchid Business Park, Sector 48, Sohna Road",
          "addressLocality": "Gurgaon",
          "addressRegion": "HR",
          "postalCode": "122001",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9696964606",
          "contactType": "customer service"
        },
        "sameAs": [
          "https://www.facebook.com/people/WebNest-Media/61576616442478/",
          "https://www.instagram.com/webnestmediagroup?igsh=MTFscDJvdGRzYjd3Zw=="
        ]
      }
      `}
        </script>

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://webnestmedia.com/#localbusiness",
        "name": "WebNest Media",
        "image": {
          "@type": "ImageObject",
          "url": "https://webnestmedia.com/assets/newlogo-CQU_gx5-.svg",
          "width": 152,
          "height": 43
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1ST Floor ALTF Coworking, Orchid Business Park, Sector 48, Sohna Road",
          "addressLocality": "Gurgaon",
          "addressRegion": "HR",
          "postalCode": "122001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 28.4260573,
          "longitude": 77.0365718
        },
        "url": "https://webnestmedia.com/",
        "telephone": "+91-9696964606",
        "priceRange": "Varies",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "10:00",
            "closes": "18:00"
          }
        ],
        "description": "WebNest Media is a full-service digital marketing agency providing SEO, SMM, PPC, Email Marketing, and more for businesses in Gurgaon.",
        "sameAs": [
          "https://www.facebook.com/people/WebNest-Media/61576616442478/",
          "https://www.instagram.com/webnestmediagroup?igsh=MTFscDJvdGRzYjd3Zw=="
        ],
        "parentOrganization": {
          "@id": "https://webnestmedia.com/#organization"
        }
      }
      `}
        </script>

        {/* WebSite Schema */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://webnestmedia.com/#website",
        "url": "https://webnestmedia.com/",
        "name": "WebNest Media",
        "description": "WebNest Media is a Gurgaon-based digital marketing agency specializing in SEO, SMM, PPC, Email Marketing, Influencer Marketing, and content strategy for businesses of all sizes.",
        "publisher": {
          "@id": "https://webnestmedia.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://webnestmedia.com/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }
      `}
        </script>

      </Helmet>

      <div className=' homeclass  '>


        <div className="flex items-center justify-center gap-[60px] h-[100vh]  max-md:h-[50vh] overflow-hidden  ">
          <ParticlesBackground />
          <div className='text-part max-md:p-[16px] '>
            <div className="">
              <h1 className="h1tag ">
                <span>Best </span>
                <span className="text-[#409338] floating-text">Digital Marketing</span> <br />

                <span>
                  Agency with
                  <span className="text-[#409338] floating-text-two pl-3 inline-block"> Smart Strategies </span>
                </span>
              </h1>
            </div>

            <h2 className='h2tag text-[black]'>Where strategy meets trust to fuel digital growth</h2>

            <hr className='line'></hr>

            <strong className='text-[grey] trust max-lg:mt-4 '>Trusted by 2,000+ local brands and businesses</strong>




            <div className='text-center flex items-center justify-center'>
              <LazyLoadImage src={client} alt="Client Logo" />
            </div>


          </div>


        </div>

        <div className=" w-[100%]  max-w-[1440px] mx-auto  max-lg:mt-[40px] flex flex-col-reverse items-start lg:flex-row  justify-between pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px]  gap-8 ">

          <div className=" lg:w-1/2">
            <h2 className="text-[#5c945c] max-md:text-[20px] max-md:leading-[28px] text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">

              Building Brands with
              Integrity and Innovation
              Across India
            </h2>
            <p className="text-sm md:text-base text-black mt-8 mb-10">
              WebNest Media isn’t just another digital marketing company in India — we’re your growth partner.
              Our team combines strategic thinking, creativity, and technology to elevate your brand across digital channels.
            </p>
            <Link to={"/contact-us"}>
              <button className="bg-[#5c945c] text-white rounded-md px-6 py-3 max-md:py-1 max-md:px-2 hover:bg-[#4f834f] transition">
                Get Started
              </button>
            </Link>
          </div>


          <div className="w-1/2 lg:w-1/2 flex items-center justify-end max-lg:hidden">
              <LazyLoadImage
              src={marketingbanner}
              alt="Marketing Banner"
              className="w-[400px] h-[400px] object-contain"
            />
          </div> 

          {/* <LazyLoadImage
            src={marketingbanner}
            alt="Marketing Banner"

            className="w-[400px] h-[400px] object-contain max-lg:hidden"
          /> */}
        </div>

        <div className="text-center flex flex-col items-center justify-center overflow-hidden pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px]" >
          <p className=" text-[black] text-[20px] font-semibold max-lg:mt-[52px]">Our Client's</p>
          <h5 className="text-2xl leading-[150%] md:text-3xl font-bold text-[#5c945c] mt-[20px]  w-[75%]  max-lg:w-[100%] ">Webnest Building credibility with major global brands <br className="max-lg:hidden" /> As more join the ranks</h5>
        </div>



        <div className="  slider-container"

        >


          <div className="slider-track p-2">
            {/* {firstTrackImages.map((img, index) => (
              <div className="box" key={index}>
                  <LazyLoadImage src={img} className="w-[100%] h-[100%] object-contain" />
              </div>
            ))} */}

            {firstTrackImages.map((img, index) => (
              <div className="box" key={index}>
                <LazyLoadImage
                  src={img.src}
                  alt={img.name}
                  className="w-[100%] h-[100%] object-contain"
                />
              </div>
            ))}

          </div>
        </div>

        <div className="slider-container2">

          <div className="slider-track2 p-2">
            {/* {shuffledImages.map((img, index) => (
              <div className="box" key={index}>
                  <LazyLoadImage src={img} className="w-[100%] h-[100%] object-contain" />
              </div>
            ))} */}


            {shuffledImages.map((img, index) => (
              <div className="box" key={index}>
                <LazyLoadImage
                  src={img.src}
                  alt={img.name}
                  className="w-[100%] h-[100%] object-contain"
                />
              </div>
            ))}

          </div>

        </div>





        <div className=" w-[100%] max-w-[1440px]  mx-auto   pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px]  bg-white p-[40px] mt-[30px] transparenbody  text-start flex  max-lg:flex-col justify-center  items-center gap-6">


          <div className="flex justify-center md:w-[35%] ">
            <LazyLoadImage src={pana} className="w-[200px] md:w-full max-w-xs" alt="    Comprehensive Digital Marketing Services  in India" />
          </div>

          <div className="md:w-[60%]  comprensive w-[100%]">

            <h2 className="mt-[20px] mb-[20px] font-bold text-[28px] max-md:text-[20px] text-[#4D4D4D] ">
              Comprehensive Digital Marketing Services  in India
            </h2>
            <p className="text-black font-normal text-[15px]  max-sm:text-sm rounded ">
              At WebNest, we take pride in being one of the top digital marketing agency in gurgaon. We create strategically designed campaigns that are easily adjustable to your needs and most importantly, centered on your success. We handle everything from developing powerful SEO strategies to optimizing your PPC campaigns, ensuring each aspect of your performance marketing is strategically managed. Additionally, our services extend to content marketing, web development, mobile app development, conversion rate optimization (CRO), email marketing, and in-depth analytics.
            </p>
          </div>

        </div>

        <div className=' w-[100%] max-w-[1440px]  mx-auto  flipcard bg-[white] p-[40px] max-lg:p-[16px] transparenbody'>


          <h2 className=" "> Service's we Offered</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            {cardsData.map(({ id, icon, content, paracontent }) => {

              return (
                <div
                  key={id}
                  className={`flip-card ${flippedIds.includes(id) ? "flipped" : ""} `}
                  onClick={() => toggleFlip(id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">

                      <div className="image_wrap">
                        <LazyLoadImage src={icon} alt={content} className="  iconimage " />
                      </div>

                      <p className="text-[14px] text-[black] font-bold">{content}</p>
                    </div>
                    <div className="flip-card-back">
                      <p className=" text-sm">{paracontent}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>



        <div className=" w-[100%] max-w-[1440px]  mx-auto Slidercrausol  ">
          <h2 className="heading">One Partner. Every Platform. Endless Growth </h2>

          <Slider slides={autoSlide} autoSlideInterval={4000} />

        </div>



        <div className="industriweserve mb-[30px] w-full max-w-[1440px] mx-auto">
          <h2 className="heading mb-[20px]" id="industries">
            Industries We Serve
          </h2>
          <AnimatedCardList />
        </div>


        <div
          ref={thirdREf}
          onMouseEnter={() => setThirdtrigger(true)}
          className=" max-w-[1440px]  mt-[130px] mb-[50px] max-sm:mb-[60px]  max-md:mt-[80px] cursor-pointer phone  max-md:p-[20px] md:p-[30px] bg-[#409338] flex flex-col md:flex-row items-center gap-6 md:gap-[40px] justify-around w-[90%]  max-md-w-[100%] mx-auto rounded-[20px]  shadow-md"
        >

          {/* Phone Icon */}
          <div className="flex items-center gap-[30px] max-md:gap-3 ">
            <div className="mb-4 md:mb-0">
              <FaPhoneVolume className="ringing text-white text-[50px] md:text-[70px] flex items-center justify-center" />
            </div>

            {/* Text & Number */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-white text-[18px] md:text-[20px] font-bold">
                Get a Free Consultation
              </p>

              <div
                className={`text-white span-number text-[32px] max-md:text-[24px] md:text-[50px] font-bold ${thirdtrigger ? "numberanimation" : ""
                  }`}
              >
                <span>+91&nbsp;</span>
                <span>-&nbsp;</span>
                <span>96&nbsp;</span>
                <span>96&nbsp;</span>
                <span>96&nbsp;</span>
                <span>46&nbsp;</span>
                <span>06</span>
              </div>
            </div>
          </div>

          {/* CTA Message */}
          <p className="text-white text-[20px] md:text-[30px] font-bold pr-0 md:pr-[30px] text-center md:text-left">
            Talk to us and never worry <br />
            about leads ever again!
          </p>
        </div>


        <div
          ref={wrapperRef}
          onMouseEnter={() => setTrigger(true)}
          className=" w-[100%] max-w-[1440px]  mx-auto  counter flex mt-[10px] flex-col md:flex-row items-center justify-center gap-10 px-6 ">
          <div

            className="w-full md:w-1/2 lg:w-[40%]"

          >
            <Countarcard trigger={trigger} />
          </div>
          <div className="w-full md:w-1/2 lg:w-[50%] text-center md:text-left space-y-6">
            <h4 className="text-2xl md:text-3xl font-bold text-[#5c945c]">
              Why Choose WebNest Media?
            </h4>

            <p className="text-[black] text-[15px]">
              Webnest Media, based in Gurgaon, brings over 20 years of expertise in web design, development, and digital marketing. With a focus on delivering innovative and results-driven solutions, they help businesses enhance their online presence and achieve sustainable growth.
            </p>

         <Link to="/about-us">
            <button className="getstarted-btnn   mt-[20px] px-6 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition duration-300">
              Know More
            </button>
         </Link>

          </div>
        </div>


        <div className=" w-[100%] max-w-[1440px]  overflow-hidden mx-auto tetonomial mt-[30px]">
          <ImageSlider data={testimonialsData} />
        </div>



        <div className='mb-[24px]'>
          <Newcontact />
        </div>

        <div className="w-[100%] max-w-[1440px]  mx-auto accordian pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] ">
          <p className="text-[#409338] font-bold text-[40px] leading-[40px]  max-md:text-[28px] max-md:leading-[28px] text-center stroke-custom fill-custom">Frequently Asked Questions (FAQs)</p>
          <Accordion />
        </div>
      </div>
    </>
  )
}

export default Home










