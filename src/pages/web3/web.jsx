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
import topimage from "./resources/topimage.png";
import { Link } from 'react-router-dom';
import c2image from './resources/c2image.png'
import c3image from './resources/c3image.png'
import image13 from './resources/image13.png';
import image15 from './resources/image15.png';
import {
  Rocket,
  Settings,
  TrendingUp,
  Headphones,
} from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import image16 from './resources/image16.png';
import TestimonialSlider from '../../components/testimonial/TestimoniaSlider.jsx';
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
  const testimonialData = [
    {
      rating: "4.9",
      feedback: "We needed an honest search engine marketing company in Gurgaon to help us improve our business with our online presence. WebNest Media was the best choice. Their professionals really know what they're doing in terms of getting results. The most honest and best SEO agency in Gurgaon that you can trust to grow your business online.",
      avatar: "https://pagedone.io/asset/uploads/1696229969.png",
      name: "Anamika ",
      designation: "CEO"
    },
    {
      rating: "4.9",
      feedback: "As a startup, we needed SEO services in Gurgaon that could understand our specific needs and deliver measurable growth. The team at WebNest Media provided us with strategies and expertise. Our traffic has doubled in just a few months!",
      avatar: "https://pagedone.io/asset/uploads/1696229994.png",
      name: "Aman Bajwa",
      designation: "Marketing Head"
    },
    {
      rating: "4.9",
      feedback: "We’ve worked with a few agencies before, but WebNest Media truly stands out as the top SEO agency in Gurgaon. Their knowledge of search engine optimization is unmatched. Our online visibility and conversions have improved significantly.",
      avatar: "https://pagedone.io/asset/uploads/1696230027.png",
      name: "Tushar Negi",
      designation: "Operations Manager"
    },
    {
      rating: "4.9",
      feedback: "We have amazing experience with WebNest Media. They have a team that is knowledgeable and creative. I prefer them, if you need the best SEO services.",
      avatar: "https://pagedone.io/asset/uploads/1696229969.png",
      name: "Naina Sharma",
      designation: "Business Owner"
    },
    {
      rating: "4.9",
      feedback: "I am very happy with the team of WebNest Media, they improve my business ranking through SEO services. It is the best SEO agency.",
      avatar: "https://pagedone.io/asset/uploads/1696229994.png",
      name: "Rahul Kaushik",
      designation: "Entrepreneur"
    }
  ];

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


        <section className='flex flex-row max-lg:flex-col gap-10 items-center max-lg:mt-10 mx-auto max-w-[1440px] px-10 max-lg:px-4'>
          <div className=" ">
            <h2 className='text-[52px] max-lg:text-3xl font-semibold'>Best <span className="text-[#409338]">Web Development <br />Company</span> in Gurgaon</h2>
            <div data-aos="fade-up" className="md:hidden">
              <img src={c2image} alt="Web Development Company" className="w-full h-auto" />
            </div>
            <p data-aos="fade-up" className="text-[black] lg:mt-4 text-base mx-auto md:mx-0">
              WebNest Media, a leading website development agency in Gurgaon, uses the newest technologies to create scalable, secure, and quick websites. For companies in every sector, our expert developers design customized digital experiences that boost productivity and value.
            </p>
            <Link to="/contact-us">
              <button
                className='uiverse-button mt-8'>
                Get Started
              </button>
            </Link>
          </div>
          <div className="">
            <div data-aos="fade-up" className=" max-md:hidden">
              <img src={c2image} alt="Web Development Company" className="w-full h-auto" />
            </div>
          </div>
        </section>

        <div className='bg-[#EFF4EE]'>
          <section className='max-w-[1440px] mx-auto flex flex-col text-center py-16  mt-24 max-md:mt-10'>
            <h2 className='text-[32px] max-md:text-2xl mb-16'> Your <span className='text-[#4caf50] '>success</span> is Our <span className='text-[#4caf50]'>Mission</span></h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-5 px-10 max-md:px-4'>
              <div className="cardss border px-20 pt-9 pb-7 rounded-xl flex flex-col gap-3 items-center bg-white">
                <h3 className='text-[52px] font-light max-md:text-4xl text-[#4caf50]'>213,456</h3>
                <p className='text-2xl text-nowrap'>Project Delivered</p>
              </div>
              <div className="cardss border px-20 pt-9 pb-7 rounded-xl gap-3 flex flex-col items-center bg-white">
                <h3 className='text-[52px] font-light  max-md:text-4xl text-[#4caf50]'>13,200+</h3>
                <p className='text-2xl'>Clients Served</p>
              </div>
              <div className="cardss border px-20 pt-9 pb-7 rounded-xl gap-3 flex flex-col items-center bg-white">
                <h3 className='text-[52px] font-light max-md:text-4xl text-[#4caf50]'>99/100</h3>
                <p className='text-2xl text-nowrap'>Speed & UX Score</p>
              </div>
              <div className="cardss border px-20 pt-9 pb-7 rounded-xl gap-3 flex flex-col items-center  bg-white">
                <h3 className='text-[52px] font-light max-md:text-4xl text-[#4caf50]'>231,580+</h3>
                <p className='text-2xl text-nowrap'>Custom Development</p>
              </div>

            </div>
          </section>
        </div>


        <section className='max-w-[1440px] mx-auto px-10 max-lg:px-4 mt-24 max-md:mt-10 lg:text-center  '>
          <div className='lg:w-[80%] mx-auto'>
            <h2 className='text-[52px] max-lg:text-3xl mb-9 font-semibold  '>Web Development Company in Gurgaon | Your Vision, Our Expertise</h2>
            <p className='text-base'>As one of the top web development companies in Gurgaon, WebNest Media has been in business for over 21 years, turning concepts into powerful digital solutions. We have served clients from UK, USA, Australia, Canada, and India. To date, we have delivered hundreds of custom projects across multiple sectors owing to our strong industry presence. Our reputation is reflected in the impressive 92% retention rate we enjoy over clients!

              <br /> <br />With headless CMS and PWAs to Node.js, Vue.js, React, Angular, and more sophisticated technologies we offer ultra fast websites that are also scalable and secure. To boost user engagement and conversions, our designs incorporate AI tools, automation, and intuitive UI/UX along with responsive design aimed at seamless device function uninterrupted mobile interface automation.

              <br /> <br />From an eCommerce store or blog to a corporate website, WebNest Media can turn any vision into a fully functional experience as trusted partners to all their client’s site development needs. We facilitate businesses, large or small build robust online presences that accelerates growth while engaging deeply with core audiences.
            </p>
          </div>
          <div className='lg:w-[80%] mx-auto'>
            <h2 className='text-[52px] max-lg:text-3xl mb-9 font-semibold mt-24 max-md:mt-10  mx-auto'>Benefits of Top Web Designing & Development Company</h2>
            <p className='text-base'>A good website helps people find you, trust you, and choose you over the competition. It works for you 24/7, bringing in new leads and growing your business — that’s why it matters so much today. Here are more reasons:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 mt-24 max-lg:mt-10 max-w-7xl mx-auto text-center">

            {/* Card 1 */}
            <div className="bg-white p-6 flex flex-col items-center text-center h-full">
              <Rocket className="text-green-600 w-10 h-10 mb-4" />
              <div className="h-20 flex items-center justify-center mb-4">
                <h3 className="font-semibold text-2xl">Boosts Search Rankings</h3>
              </div>
              <p className="text-gray-600 text-base min-h-[140px]">
                Website development helps boost rankings because search engines like Google love sites that load fast, work well on mobile, and offer a great user experience.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 flex flex-col items-center text-center h-full">
              <Settings className="text-green-600 w-10 h-10 mb-4" />
              <div className="h-20 flex items-center justify-center mb-4">
                <h3 className="font-semibold text-2xl">Reduce Maintenance Cost</h3>
              </div>
              <p className="text-gray-600 text-base min-h-[140px]">
                A well-developed website uses clean code and efficient design, reducing bugs and technical issues. This means lower maintenance costs and fewer headaches down the line.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 flex flex-col items-center text-center h-full">
              <TrendingUp className="text-green-600 w-10 h-10 mb-4" />
              <div className="h-20 flex items-center justify-center mb-4">
                <h3 className="font-semibold text-2xl">Improve Brand Reputation</h3>
              </div>
              <p className="text-gray-600 text-base min-h-[140px]">
                A well-designed website creates a strong first impression and builds trust. It reflects your brand’s professionalism, boosting credibility.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 flex flex-col items-center text-center h-full">
              <Headphones className="text-green-600 w-10 h-10 mb-4" />
              <div className="h-20 flex items-center justify-center mb-4">
                <h3 className="font-semibold text-2xl">Acquire More Leads And Traffic</h3>
              </div>
              <p className="text-gray-600 text-base min-h-[140px]">
                A well-developed website draws in more visitors through better search rankings and user experience. It helps you gain more leads and steady traffic.
              </p>
            </div>

          </div>

        </section>
          <section className='flex flex-row max-lg:flex-col items-center mt-24 justify-between max-lg:mt-10 mx-auto max-w-[1440px] px-10 max-lg:px-4'>
          <div className="lg:w-[60%] ">
            <h2 className='text-[52px] max-lg:text-3xl font-semibold'>Web Development <br className='max-md:hidden' />Best Quality Service</h2>
            <div data-aos="fade-up" className="md:hidden">
              <img src={image13} alt="Web Development Company" className="w-full h-auto" />
            </div>
            <p data-aos="fade-up" className="text-[black] lg:mt-4 text-base mx-auto md:mx-0">
              WebNest Media goes above and beyond in creating visually stunning websites that outperform in metrics and are engineered for conversion. Our web development team works on providing your company with a reliable, agile, and technologically advanced website if it is an industry leader or even a nascent company. In either case, our team has extensive experience to ensure the best results.

              <br /> <br />We cover every detail which includes responsive designs as well as effortless operation and CMS connections for unparalleled user engagement IT across the board. These features allow us to accomplish what you want faster while achieving the desired results.

            </p>

          </div>
          <div className="">
            <div data-aos="fade-up" className=" max-md:hidden">
              <img src={image13} alt="Web Development Company" className="w-full h-auto" />
            </div>
          </div>
        </section>
        <section className='flex flex-row max-lg:flex-col items-center mt-24 justify-between max-lg:mt-10 mx-auto max-w-[1440px] px-10 max-lg:px-4'>
          <div className="lg:w-[60%] ">
            <h2 data-aos="fade-up" className='text-[52px] max-lg:text-3xl font-semibold max-lg:mb-2'>Technologies We use to Make the Best Website Designing & Development</h2>
            <div data-aos="fade-up" className="md:hidden">
              <img src={image15} alt="Web Development Company" className="w-full h-auto" />
            </div>
            <p data-aos="fade-up" className="text-[black] lg:mt-4 text-base mx-auto md:mx-0">
              We use the best and latest technologies to make websites faster, more attractive, and user-friendly. Our expert website development and design teams craft seamless, responsive sites that not only look great but also engage visitors and drive results.

            </p>

          </div>
          <div className="">
            <div data-aos="fade-up" className=" max-md:hidden">
              <img src={image15} alt="Web Development Company" className="w-full h-auto" />
            </div>
          </div>
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

        <section className='max-w-[1440px] mx-auto px-10 max-lg:px-4 mt-24 max-md:mt-10 lg:text-center '>
          <div className="lg:w-[60%] mx-auto ">
            <h2 className='text-[52px] max-lg:text-3xl font-semibold'>What makes us different in Web Development?</h2>

            <p data-aos="fade-up" className="text-[black] mt-9 mb-12 text-base mx-auto md:mx-0">
              As a top web designing & development company in Gurgaon, we have years of experience. Our web development teams design SEO friendly and an attractive websites, and we redesign them also.

            </p>

          </div>
          <table className="table-auto lg:w-[90%] text-base max-w-7xl  text-left mt-14 ax-lg:mt-10 ]">
            <tbody>

              {/* Row 1 */}
              <tr className="align-top">
                <td className="pr-4 pt-2">
                  <svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </td>
                <td className="pr-6 pt-2 text-green-600 font-semibold lg:text-nowrap">
                  Experienced Web Developers
                </td>
                <td className="pt-2 text-gray-700">
                  Meeting every business’s objective can only be possible with our dedicated developers who build responsive and high-performing websites. In addition, custom coding and CMS are utilized for enhanced performance.
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="align-top">
                <td className="pr-4 pt-6">
                  <svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </td>
                <td className="pr-6 pt-6 text-green-600 font-semibold lg:text-nowrap" >
                  Performance-First Approach
                </td>
                <td className="pt-6 text-gray-700 ">
                  Users always need a seamless interface within a website or an application, thus, we focus on speed, user interface, and customer experience. We employ best practices in internet marketing to improve SEO positioning by using optimized websites that ensure faster load times and improved SEO ranking.
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="align-top">
                <td className="pr-4 pt-6">
                  <svg className="w-5 h-5 text-green-600 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </td>
                <td className="pr-6 pt-6 text-green-600 font-semibold lg:text-nowrap">
                  Client-Centric Solutions
                </td>
                <td className="pt-6 text-gray-700 ">
                  Understanding the brand identity alongside other elements such as core target demographics helps drive growth and conversion. Thus, working closely with you ensures proper fulfillment that delivers high-quality work at budget-friendly rates – all while enabling you to capture targeted audience engagement.
                </td>
              </tr>

            </tbody>
          </table>

        </section>
        <section className='flex flex-row max-lg:flex-col items-center mt-24 justify-between max-lg:mt-10 mx-auto max-w-[1440px] px-10 max-lg:px-4'>
          <div className="lg:w-[60%] ">
            <h2 className='text-[52px] max-lg:text-3xl font-semibold'>Web Development Best Quality Service</h2>
            <div data-aos="fade-up" className="md:hidden">
              <img src={image13} alt="Web Development Company" className="w-full h-auto" />
            </div>
            <p data-aos="fade-up" className="text-[black] lg:mt-4 text-base mx-auto md:mx-0">
              
            WebNest Media goes above and beyond in creating visually stunning websites that outperform in metrics and are engineered for conversion. Our web development team works on providing your company with a reliable, agile, and technologically advanced website if it is an industry leader or even a nascent company. In either case, our team has extensive experience to ensure the best results.

<br /> <br />We cover every detail which includes responsive designs as well as effortless operation and CMS connections for unparalleled user engagement IT across the board. These features allow us to accomplish what you want faster while achieving the desired results.


            </p>

          </div>
          <div className="">
            <div data-aos="fade-up" className=" max-md:hidden">
              <img src={image13} alt="Web Development Company" className="w-full h-auto" />
            </div>
          </div>
        </section>
        <section className='flex flex-row max-lg:flex-col items-center mt-24 justify-between max-lg:mt-10 mx-auto max-w-[1440px] px-10 max-lg:px-4 max-lg:mb-10'>
          <div className="lg:w-[60%] ">
            <h2 className='text-[52px] max-lg:text-3xl font-semibold'>Why Choose WebNest Media?</h2>
            <div data-aos="fade-up" className="md:hidden">
              <img src={image16} alt="Web Development Company" className="w-full h-auto" />
            </div>
            <p data-aos="fade-up" className="text-[black] lg:mt-4 text-base mx-auto md:mx-0">
              Choosing the right partner for your website is a big decision — and that’s exactly why businesses trust WebNest Media. As one of the top web development companies in Gurgaon, we don’t just build websites — we craft digital experiences that help brands grow.
              Our team blends creativity with cutting-edge technology to deliver websites that are fast, stunning, and user-friendly. Whether you need an online store, a sleek corporate site, or a custom solution, we’re known as a top website development company in Gurgaon for a reason — we make it happen.
              <br />Looking for an ecommerce website development company in Gurgaon? We’ve helped countless businesses launch powerful online stores that drive sales and create loyal customers. And when it comes to design, we’re recognized as a website designing company in Gurgaon that truly understands what works online — blending beauty with functionality. That’s why many call us the best website designing company in Gurgaon.
              At WebNest Media, we believe every brand has a story. Let’s build a website that tells yours — beautifully, effectively, and with results you can measure.

            </p>

          </div>
          <div className="">
            <div data-aos="fade-up" className=" max-md:hidden">
              <img src={image16} alt="Web Development Company" className="w-full h-auto" />
            </div>
          </div>
        </section>
        <section className='max-lg:mb-10'>
          <TestimonialSlider
            sectionTitle="What Our Clients Say"
            sectionSubtitle="Testimonials"
            testimonials={testimonialData}
          />
        </section>

        <Newcontact />
        <section className='max-w-[1440px] mx-auto px-10 max-lg:px-4 w-[100%]'>
          <Accordion />
        </section>


      </div>
    </>
  )
}

export default web
