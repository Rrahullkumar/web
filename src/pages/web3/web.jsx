import React from 'react'
import ContactForm from '../../components/contact/contactform'
import Accordion from './component/Accordian'
import { SiConsul } from "react-icons/si";

import { MdMovieCreation } from "react-icons/md";
import { FaHandshakeSimple } from "react-icons/fa6";
import { GrOptimize } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { FaWordpress, FaShoppingCart, FaBusinessTime, FaBlogger, FaGraduationCap, FaUsers, FaCalendarAlt, FaWpforms } from "react-icons/fa";

import { Helmet } from 'react-helmet'
import Newcontact from '../../components/Newcontact/Newcontact';
import HeroSection from '../../components/Herosection/Herosection';
import topimage from "./resources/topimage.svg";
import { Link } from 'react-router-dom';
import c2image from './resources/c2image.png'
import c3image from './resources/c3image.png'

const webDevelopmentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://webnestmedia.com/web-development#service",
      "name": "Web Development",
      "description": "WebNest Media is a top web development company in Gurgaon offering responsive, SEO-friendly, and scalable website solutions. We specialize in custom websites, eCommerce platforms, CMS development, and performance optimization for businesses of all sizes.",
      "serviceType": "Web Development",
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
      "url": "https://webnestmedia.com/web-development"
    },
    {
      "@type": "WebPage",
      "@id": "https://webnestmedia.com/web-development#webpage",
      "url": "https://webnestmedia.com/web-development",
      "name": "Web Development Company in Gurgaon – WebNest Media",
      "description": "Get high-performing, mobile-friendly websites developed by WebNest Media – a leading web development company in Gurgaon. We build fast, scalable, and SEO-ready websites that convert visitors into customers."
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://webnestmedia.com/web-development#breadcrumb",
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
          "name": "Web Development",
          "item": "https://webnestmedia.com/web-development"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://webnestmedia.com/web-development#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What web development services do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer custom website development, WordPress development, eCommerce site creation, CMS integration, landing pages, speed optimization, and website maintenance."
          }
        },
        {
          "@type": "Question",
          "name": "Do you create mobile-friendly websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Every website we build is fully responsive and works flawlessly on mobile, tablet, and desktop devices to ensure a seamless user experience."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose WebNest Media for web development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We’re a top web development company in Gurgaon with a team of skilled developers focused on delivering clean code, fast performance, SEO optimization, and custom design tailored to your brand."
          }
        }
      ]
    }
  ]
};

const web = () => {


  const cardData = [
    {
      id: 1,
      title: "WordPress",
      description:
        "WordPress is used to create a lot number of websites. We create responsive, fully optimized websites that are easy to update and built to perform across all devices and industries.",
      icon: <FaWordpress />,
    },
    {
      id: 2,
      title: "E-commerce Websites",
      description:
        "We build powerful eCommerce websites that are fast, secure, and easy to manage. From product listings to smooth checkout, we create online stores that boost sales and user experience.",
      icon: <FaShoppingCart />,
    },
    {
      id: 3,
      title: "Business Websites",
      description:
        "We design the best business websites that reflect your brand, build credibility, and turn visitors into leads. Our sites are fast, mobile-friendly, and built to grow with your company.",
      icon: <FaBusinessTime />,
    },
    {
      id: 4,
      title: "Blog Websites",
      description:
        "Share your passion with the world. We build blog websites that are stylish, scalable, and optimized for both performance and content discovery.",
      icon: <FaBlogger />,
    },
    {
      id: 5,
      title: "Educational Websites",
      description:
        "At WebNest Media, we create educational websites that support learning with features like course listings, student portals, and mobile-friendly design for seamless access.",
      icon: <FaGraduationCap />,
    },
    {
      id: 6,
      title: "Social Media Websites",
      description:
        "Launch your own social media platform with powerful features like user dashboards, messaging, content sharing, and community management—all built for performance and growth.",
      icon: <FaUsers />,
    },
    {
      id: 7,
      title: "Event Websites",
      description:
        "Plan and promote your events with ease using our custom event websites. Featuring easy navigation, ticket sales, event calendars, and live updates, we ensure a smooth experience for both organizers and guests.",
      icon: <FaCalendarAlt />,
    },
    {
      id: 8,
      title: "Form Websites",
      description:
        "Our form websites feature smart validation, secure submission, and integration with your CRM or email marketing tools to help you gather accurate data and connect with your audience.",
      icon: <FaWpforms />,
    },
  ];


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>

      <Helmet>
        <title>Best Web Development Company in Gurgaon | WebNest Media</title>
        <meta name="description" content="WebNest Media is your top web development company in Gurgaon. We develop professional and secure websites, from e-commerce to custom applications. Get free quote today!" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebNest Media" />
        <link rel="canonical" href="https://webnestmedia.com/web-development" />
<meta property="og:title" content="Best Web Development Company in Gurgaon | WebNest Media" />
  <meta property="og:description" content="WebNest Media is your top web development company in Gurgaon. We develop professional and secure websites, from e-commerce to custom applications. Get free quote today!" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://webnestmedia.com/web-development" />
  <meta property="og:image" content="https://webnestmedia.com/assets/topimage-VsfXwUOb.svg" />
  <meta property="og:site_name" content="WebNest Media" />


        <script type="application/ld+json">
          {JSON.stringify(webDevelopmentSchema)}
        </script>

      </Helmet>

      <div className='mx-auto '>

        <div>
          <HeroSection
            backgroundImage={topimage}
            heading="Web Development Company"
            highlight="in Gurgaon"
            paragraph="We design fast, responsive, and SEO-optimized websites that grow your business engage users, and elevate your brand online."
          />
        </div>

        {/* <section className="max-w-[1440px] px-10 max-lg:px-4 mx-auto flex flex-row max-lg:flex-col items-center justify-between">


  <div className="w-[70%] max-lg:w-full">
    <h2 data-aos="fade-up" className="text-3xl md:text-[52px] leading-snug font-bold text-[black] max-md:mt-10 mb-10">
      Best <span className="text-[#409338]">Web Development <br />Company</span> in Gurgaon
    </h2>
    <p data-aos="fade-up" className="text-[black] mt-4 max-w-md text-base max-md:w-[90%] mx-auto md:mx-0">
      WebNest Media, a leading website development agency in Gurgaon, uses the newest technologies to create scalable, secure, and quick websites. For companies in every sector, our expert developers design customized digital experiences that boost productivity and value.
    </p>
    <Link to="/contact-us">
      <button
        className='bg-[#4CAF50] mt-6 max-md:mt-14 text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#4CAF50] border border-[#4CAF50] transition'>
        Get Started
      </button>
    </Link>
  </div>

  <div data-aos="fade-up" className="w-[30%] max-lg:w-[80%] max-lg:mt-10">
    <img src={c2image} alt="Web Development Company" className="w-full h-auto" />
  </div>

</section> */}


        <div className='flex flex-row max-lg:flex-col px-10 max-lg:px-4 lg:justify-between items-center'>
            <div className="w-full ">
              <h2 className='text-[52px]'>Best <span className="text-[#409338]">Web Development <br />Company</span> in Gurgaon</h2>
                <p data-aos="fade-up" className="text-[black] mt-4 text-base mx-auto md:mx-0">
                WebNest Media, a leading website development agency in Gurgaon, uses the newest technologies to create scalable, secure, and quick websites. For companies in every sector, our expert developers design customized digital experiences that boost productivity and value.
              </p>
              <Link to="/contact-us">
                <button
                  className='bg-[#4CAF50] mt-6 max-md:mt-14 text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#4CAF50] border border-[#4CAF50] transition'>
                  Get Started
                </button>
              </Link>
            </div>
            <div className="">
                <div data-aos="fade-up" className="max-lg:w-[80%] max-lg:mt-10">
                  <img src={c2image} alt="Web Development Company" className="w-full h-auto" />
                </div>
            </div>
        </div>
        <section className="flex max-w-[1440px] mx-auto  w-[100%] flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 ">

          {/* Left Circle Image Placeholder */}
          <div data-aos="fade-up" className="w-[50%] md:w-1/2 flex justify-center items-center mb-10 md:mb-0 relative">
            <img src={c3image} alt="" className='w-[70%]'/>
          </div>
          {/* Right Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p data-aos="fade-up" className="text-sm text-[black] uppercase font-semibold mb-2">Why Us?</p>
            <h2 data-aos="fade-up"  className="text-3xl md:text-4xl font-bold text-[#409338] mb-6">
              What makes us different in <br className='max-lg:hidden' />   Web Development?
            </h2>

            <ul className="space-y-4 text-left text-gray-700">
              <li data-aos="fade-up" className="flex items-start max-md:mb-8">
                <span className="text-green-500 text-lg mt-1 mr-2">✔</span>
                <div>
                  <p className="font-semibold text-[#EEC370]">Experienced Web Developers</p>
                  <p className="text-sm text-[black]">
                    Our skilled team of developers builds responsive, high-performance websites tailored to your business goals. From custom coding to modern CMS platforms, we deliver excellence.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up"  className="flex items-start max-md:mb-8">
                <span className="text-green-500 text-lg mt-1 mr-2">✔</span>
                <div>
                  <p className="font-semibold text-[#EEC370]">Performance-First Approach</p>
                  <p className="text-sm text-[black]">
                    We focus on speed, scalability, and user experience. Every website we build is optimized for performance, ensuring faster load times and better SEO rankings.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up"  className="flex items-start max-md:mb-8">
                <span className="text-green-500 text-lg mt-1 mr-2">✔</span>
                <div>
                  <p className="font-semibold text-[#EEC370]">Client-Centric Solutions</p>
                  <p className="text-sm text-[black]">
                    We collaborate closely with you to understand your brand, audience, and objectives—delivering websites that not only look great but also drive conversions and growth.
                  </p>
                </div>
              </li>
            </ul>

          

            <button
              onClick={() => scrollToSection("wdservices")}

              className='bg-[#4CAF50] mt-6 max-md:mt-14 text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#4CAF50] border border-[#4CAF50] transition'>Learn More</button>





          </div>


        </section>


        <section className=" overflow-hidden bg-[#eaf7fe]">

      
          <div className="relative z-10 px-4 py-20 text-center max-w-4xl mx-auto">
            <p data-aos="fade-up" className="text-[#EEC370] uppercase tracking-widest  text-sm font-medium mb-2">Web Development</p>
            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-[#409338] mb-4">
              Best Quality Service
            </h2>
            <p data-aos="fade-up" className="text-[black] font-[15px] mb-12">
              At WebNest Media, we specialize in crafting high-performance, visually engaging websites that are built to convert. Whether you're a startup or an established brand, our web development team brings years of industry experience to deliver fast, secure, and scalable websites tailored to your business goals. <br />
              <br />
              From responsive design to seamless functionality and CMS integration, we ensure every website is optimized for user experience and results. Let us help you turn your digital vision into a powerful online presence.
            </p>

            <div data-aos="fade-up" className="grid grid-cols-3 gap-6 items-start">
              <div>
                <p className="text-3xl font-bold text-[#3f3d56]">100+</p>
                <p className="text-sm text-gray-600 mt-2">Clients Served</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#3f3d56]">500+</p>
                <p className="text-sm text-gray-600 mt-2">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#3f3d56]">95%</p>
                <p className="text-sm text-gray-600 mt-2">Client Satisfaction</p>
              </div>
            </div>
          </div>



        </section>

        <section id="wdservices" className=' max-w-[1440px] mx-auto  w-[100%] mt-[50px] pl-[40px] pr-[40px] max-md:px-4'>

          <h2 data-aos="fade-up" class="text-[#409338] font-bold text-[40px]  max-md:text-[28px] leading-tight max-md:leading-snug lg:text-center stroke-custom fill-custom "><span className='text-black'>Web Development Company</span> in Gurgaon | Your <span className=''>Vision</span>, Our <span className=''>Expertise</span>
          </h2>


          <p data-aos="fade-up" className='text-[black] text-base mt-12 max-md:mt-6 mb-[50px]'> With over 21 years of experience, WebNest Media stands out as one of the top web development company in Gurgaon, transforming ideas into impactful digital solutions. We've successfully delivered hundreds of custom projects across various industries, serving clients in the UK, USA, Australia, Canada, and India. Our strong track record and a 92% client retention rate speak to our dedication to quality, innovation, and long-term partnerships.
            <br /> <br />

            We create websites that are quick, scalable, and safe by utilizing latest technologies such as React, Angular, Vue.js, Node.js, Progressive Web Apps (PWAs), and headless CMS. With features like AI tools, automation, and simple integrations to increase user engagement and conversions, our responsive designs function smoothly on all devices.
            <br /> <br /> <br className='max-md:hidden' />

            Whether you need an eCommerce store, a blog, or a corporate website, WebNest Media has the expertise to turn your vision into a fully functional digital experience. As a trusted website development company, we help businesses of all sizes create a strong online presence that fuels growth and connects with their audience.

            <br />

          </p>

        </section>

        <section className='max-w-[1440px] mx-auto w-[100%] px-4 py-10 max-md:pt-2 max-md:pb-4'>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-8 lg:gap-10">
            {cardData.map((card) => (
              <div data-aos="fade-up" 
                key={card.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer flex flex-col h-full"
              >
                <div className="flex flex-col h-full">

                  {/* Icon and Title Row */}
                  <div className='flex items-center gap-3 mb-3 max-h-12'>
                    <h6 className="w-[24px] h-[24px] flex items-center justify-center">
                      {card.icon}
                    </h6>
                    <h4 className="text-base sm:text-lg font-semibold text-[#1a1a1a]">{card.title}</h4>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm flex-1">{card.description}</p>

                </div>
              </div>
            ))}
          </div>

        </section>


        <section className=" relative mt-24 max-lg:mt-10  bg-[#C6E4C1] text-[#2d2d2d] px-4 py-20 max-lg:py-12 overflow-hidden">
          {/* Top SVG Wave */}

          <div data-aos="fade-up" className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg
              viewBox="0 0 1440 320"
              className="w-full h-[100px] bg-no-repeat"
              preserveAspectRatio="none"
            >
              <path
                fill="#ffffff"
                d="M0,160 Q180,80 360,160 T720,160 T1080,160 T1440,160 L1440,0 L0,0 Z"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="max-w-[1440px] w-[100%] mx-auto text-center relative z-10">
            <p data-aos="fade-up" className="text-sm uppercase tracking-widest text-[black] font-semibold max-md:mt-6 mb-6">Process</p>
            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-[#409338] mb-12">How It Works</h2>

            <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-4 gap-14">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                  {/*   <LazyLoadImage src="/icons/chat.svg" alt="Consultation" className="w-8 h-8" /> */}
                  <SiConsul className='w-[30px] h-[30px] ' />
                </div>
                <h3 data-aos="fade-up" className="font-semibold text-[#2d2d2d] mb-2">Consultation</h3>
                <p data-aos="fade-up" className="text-sm text-[#6b6b6b] text-center">
                  We begin with a detailed consultation to understand your business objectives, target audience, and digital challenges. This helps us align our approach with your unique needs.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[white] rounded-full flex items-center justify-center mb-4 shadow-md">
                  {/*   <LazyLoadImage src="/icons/tools.svg" alt="Creation" className="w-8 h-8" /> */}
                  <MdMovieCreation className='w-[30px] h-[30px] ' />

                </div>
                <h3 className="font-semibold text-[#2d2d2d] mb-2">Creation</h3>
                <p className="text-sm text-[#6b6b6b] text-center">

                  Our experts craft a tailored digital marketing strategy, combining creative ideas and data-driven insights to deliver maximum impact.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                  {/*   <LazyLoadImage src="/icons/settings.svg" alt="Implementation" className="w-8 h-8" /> */}
                  <FaHandshakeSimple className='w-[30px] h-[30px] ' />
                </div>
                <h3 className="font-semibold text-[#2d2d2d] mb-2">Implementation</h3>
                <p className="text-sm text-[#6b6b6b] text-center">
                  We bring the strategy to life—executing campaigns, building assets, and launching initiatives across the right digital channels.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                  {/*   <LazyLoadImage src="/icons/bulb.svg" alt="Optimization" className="w-8 h-8" /> */}
                  <GrOptimize className='w-[30px] h-[30px] ' />
                </div>
                <h3 className="font-semibold text-[#2d2d2d] mb-2">Optimization</h3>
                <p className="text-sm text-[#6b6b6b] text-center">

                  We continuously monitor, analyze, and refine your campaigns and content to ensure peak performance and long-term growth.
                </p>
              </div>
            </div>
          </div>


        </section>
        <Newcontact />
        <section className='max-w-[1440px] mx-auto px-10 max-lg:px-4 mt-24 max-md:mt-10 -w-[100%]'>
          <Accordion />
        </section>


      </div>
    </>
  )
}

export default web
