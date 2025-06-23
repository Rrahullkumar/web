import React, { useState, useRef, useEffect } from 'react';
import './Seo.css';
import c1_image from './resources/c1_image.svg';
import c2_image from './resources/hero_img.svg';
import Conatctfrom from '../../components/contact/contactform';
import Accordian from '../home/componnet/Accordian.jsx';
import { FiPhone } from "react-icons/fi";
import step1 from './resources/step1.svg';
import step2 from './resources/step2.svg';
import step3 from './resources/step3.svg';
import step4 from './resources/step4.svg';
import step5 from './resources/step5.svg';
import heroimage from "./resources/heroimage.svg";

import seoicon1 from "./resources/seoicon1.svg";
import seoicon2 from "./resources/seoicon2.svg";
import seoicon3 from "./resources/seoicon3.svg";
import seoicon4 from "./resources/seoicon4.svg";
import seoicon5 from "./resources/seoicon5.svg";
import seoicon6 from "./resources/seoicon6.svg";

import cneterstroke from "./resources/centerpaint.svg"
import leftpaint from "./resources/leftpaint.svg"
import rightpaint from "./resources/rightpaint.svg"
import { Helmet } from 'react-helmet';
import HeroSection from '../../components/Herosection/Herosection.jsx';

import SeoConatct from "./resources/seoconatct.svg"
import logo from "../../assets/newlogo.svg"

import Left_Arrow from '../Digitalservice/resources/Left_Arrow.svg';
import Right_Arrow from '../Digitalservice/resources/Right_Arrow.svg';

import seocontactimage from "./resources/mailbox.svg";
import seocontactphoneicon from "./resources/seocontactphoneicon.svg";
import seolocation from "./resources/seolocation.svg";

const Seo = () => {


  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };


  const [text, setText] = useState('');
  const words = ['Visibility', 'Rank', 'Traffic'];
  const delay = 150;
  const pause = 1000;

  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    let timeout;

    const type = () => {
      const currentWord = words[wordIndex.current];

      if (!isDeleting.current) {
        // Typing
        setText(currentWord.substring(0, charIndex.current));
        if (charIndex.current < currentWord.length) {
          charIndex.current++;
          timeout = setTimeout(type, delay);
        } else {
          // Pause after typing full word
          timeout = setTimeout(() => {
            isDeleting.current = true;
            timeout = setTimeout(type, delay);
          }, pause);
        }
      } else {
        // Deleting
        if (charIndex.current > 0) {
          charIndex.current--;
          setText(currentWord.substring(0, charIndex.current));
          timeout = setTimeout(type, delay / 2); // Faster delete
        } else {
          // Pause before starting next word
          isDeleting.current = false;
          wordIndex.current = (wordIndex.current + 1) % words.length;
          timeout = setTimeout(type, pause / 2); // Shorter pause after delete
        }
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, []);


  const statsData = [
    { number: '21,3456', label: 'Organic Traffic Growth' },
    { number: '13,200+', label: 'Keyword Rankings' },
    { number: '98/100', label: 'Speed & UX Score' },
    { number: '231,580+', label: 'Leads Generated' },
  ];
  const trustData = [
    {
      title: "On-Page SEO",
      text: "Optimize the structure and content of your website to increase visitors and rank well. Our on-page SEO services concentrate on improving important components including internal linking, URL structure, meta tags, keywords, and content quality. We guarantee that every page on your website is optimized for search engines..",
    },
    {
      title: "Off-Page SEO",
      text: "Boost your website through high-quality backlinks and a stronger online presence. We develop effective off-page SEO strategies, including acquiring high-quality backlinks, improving your social media visibility, and fostering brand mentions across the web.",
    },
    {
      title: "Technical SEO",
      text: "Boost your website’s technical performance for faster load times, easier crawlability, and stronger search rankings. Our team optimizes the technical aspects of your site, from site speed and mobile-friendliness to error fixes, structured data, and secure HTTPS implementation ensuring your website is easy for search engines to index and users to navigate.",
    },
    {
      title: "Local SEO",
      text: "Boost your local visibility with optimized listings, targeted local keywords, and a strong presence in local search results. We help businesses dominate local search results through Google My Business optimization, local keyword targeting, citation management, and review strategies giving you a strong presence where your customers are searching.",
    },
    {
      title: "E-Commerse SEO",
      text: "Drive more sales and visibility by optimizing your online store to stand out and rank above the competition. We implement tailored SEO strategies for e-commerce businesses, including product and category page optimization, rich snippets, and SEO-friendly architecture ensuring your store stands out in competitive markets.",
    },
  ];


  const trustDatasecond = [
    {
      title: "SEO That Works, Without the Gimmicks",
      text: "Being a top SEO company in Gurgaon, we help your brand inflict with the right audience at right time. Our respected SEO specialist in Gurgaon focuses on integrity and utilizes ethically, data-driven strategies to increase visibility, traffic, and customer trust.",
    },
    {
      title: "Proven Track Record of Results",
      text: "At Webnest Media, we deliver real results. As top SEO services company in Gurgaon, our SEO expert boosts organic traffic, rankings, and conversions with data-driven strategies..",
    },
    {
      title: "Experienced SEO Specialists",
      text: "The SEO professionals on our team each have years of experience in various fields - we're passionate about SEO! We keep current on algorithm changes and industry trends, so we can keep your site competitive",
    },

    {
      title: "Client-Centered Approach",
      text: "Your success is our priority. We work as an extension of your team, keeping your business goals at the center of everything we do.",
    },

    {
      title: "Ready to Rank Higher and Grow Smarter?",
      text: "Whether you're just getting started or looking to scale, Webnest Media is here to help. Let’s turn your website into your most powerful marketing tool..",
    },


  ];

  const faqData = [
    {
      question: "What is Search Engine Marketing (SEM)?",
      answer: "SEM refers to strategies that promote websites by increasing visibility in search engine results pages through paid advertising.",
    },
    {
      question: "What are the benefits of Search Engine Marketing?",
      answer: "It provides instant visibility, targeted traffic, measurable results, and better ROI for your marketing budget.",
    },
    {
      question: "How does SEM differ from SEO?",
      answer: "SEM is paid and provides instant results, while SEO is organic and builds visibility over time.",
    },
    {
      question: "What is PPC (Pay-Per-Click) marketing in Search Engine Marketing?",
      answer: "PPC is an SEM model where advertisers pay a fee each time their ad is clicked.",
    },
    {
      question: "Why is keyword research important in SEM?",
      answer: "It ensures ads target the right search terms, improving ad relevance and cost-efficiency.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const features = [
    {
      icon: seoicon1,
      title: "Increases Online Visibility",
      description: "Effective SEO places your site near the top of search results; that spot receives lions share of clicks.",
    },
    {
      icon: seoicon2,
      title: "Drives Quality Organic Traffic",
      description: "Pages tuned for search draw in people already looking for goods or services you provide.",
    },
    {
      icon: seoicon3,
      title: "Builds Brand Credibility",
      description: "Consistent high rankings signal trust, letting visitors see your brand as a knowledgeable authority.",
    },
    {
      icon: seoicon4,
      title: "Delivers Long-Term Results",
      description: "Unlike paid placements, solid SEO keeps your site visible and earning traffic long after work is done.",
    },
    {
      icon: seoicon5,
      title: "Improves User Experience",
      description: "SEO at best speeds up pages, makes them mobile-ready, and smooths out usability for every visitor.",
    },
    {
      icon: seoicon6,
      title: "Boosts Conversions And ROI",
      description: "By matching right audience to your offer, search-friendly sites turn more visitors into leads and paying customers.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best SEO Agency in Gurgaon | Affordable SEO Solutions</title>
        <meta
          name="description"
          content="WebNest Media offers affordable SEO services with guaranteed first page ranking. Our SEO experts handle on-page, off-page, and technical SEO for organic growth."
        />
      
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebNest Media" />
        <link
          rel="canonical"
          href="https://webnestmedia.com/search-engine-optimization"
        />
        <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://webnestmedia.com/search-engine-optimization/#webpage",
          "url": "https://webnestmedia.com/search-engine-optimization/",
          "name": "Search Engine Optimization Services | WebNest Media",
          "description": "Top-rated SEO Services in Gurgaon by WebNest Media. We help your business rank higher on Google with proven strategies for organic growth.",
          "inLanguage": "en-IN",
          "isPartOf": {
            "@id": "https://webnestmedia.com/#website"
          },
          "breadcrumb": {
            "@id": "https://webnestmedia.com/search-engine-optimization/#breadcrumb"
          },
          "mainEntity": {
            "@id": "https://webnestmedia.com/search-engine-optimization/#service"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://webnestmedia.com/search-engine-optimization/#breadcrumb",
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
              "name": "Search Engine Optimization"
            }
          ]
        },
        {
          "@type": "Service",
          "@id": "https://webnestmedia.com/search-engine-optimization/#service",
          "serviceType": "Search Engine Optimization (SEO)",
          "provider": {
            "@id": "https://webnestmedia.com/#organization"
          },
          "areaServed": {
            "@type": "Place",
            "name": "India"
          },
          "url": "https://webnestmedia.com/search-engine-optimization/",
          "description": "Professional SEO services from WebNest Media. On-page SEO, Off-page SEO, Technical SEO, and Local SEO to boost your Google rankings.",
          "offers": {
            "@type": "Offer",
            "url": "https://webnestmedia.com/contact",
            "price": "Varies",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "120"
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Anjali Sharma"
              },
              "datePublished": "2025-03-10",
              "reviewBody": "WebNest Media really helped our website climb the Google rankings. Amazing SEO team!",
              "name": "Highly Recommended SEO Services",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "itemReviewed": {
                "@type": "Service",
                "name": "Search Engine Optimization (SEO)"
              }
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Rahul Mehra"
              },
              "datePublished": "2025-03-12",
              "reviewBody": "Very professional and great results in just 3 months. SEO strategy is on point.",
              "name": "Great SEO Results",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "itemReviewed": {
                "@type": "Service",
                "name": "Search Engine Optimization (SEO)"
              }
            }
          ]
        },
        {
          "@type": "FAQPage",
          "@id": "https://webnestmedia.com/search-engine-optimization/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is SEO and how does it work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SEO stands for Search Engine Optimization. It is the process of optimizing your website so it ranks higher on search engines like Google, driving organic traffic."
              }
            },
            {
              "@type": "Question",
              "name": "How long does SEO take to show results?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SEO is a long-term strategy. Most businesses see noticeable improvements in 3-6 months, depending on competition and current website status."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer local SEO services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! We specialize in Local SEO, helping businesses in Gurgaon and across India rank in Google Maps and local search results."
              }
            }
          ]
        }
      ]
    }
  `}</script>
      </Helmet>

      <section className='mt-[77px]   max-lg:mt-[0] w-[100%]'>

        <HeroSection
          backgroundImage={heroimage}
          heading="SEO Company"
          highlight="In Gurgaon"
          paragraph="Let’s take your website from hidden to high-ranking with smart SEO, search-friendly content, and organic growth."
        />



        <div className=" max-w-[1440px] w-[100%] mx-auto pt-[96px] pb-[170px] pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] ">

          <p id="c2headingleft" className="c2heading">
            Best SEO Company  <br className='max-lg:hidden' /> in  Gurgaon
          </p>


          <div className='flex max-lg:flex-col gap-[135px] max-lg:gap-[46px]'>

            <div className="w-[60%] max-lg:w-[100%] ">


              <p id="" className='text-base mt-[20px] font-manrope  '>
                In today's digital world, every business whether big or small, requires an online visibility on Google. Every day millions of people reach for search engines. The goal of having a website on Google's first page has grown into a necessity. Selecting the top SEO company in Gurgaon is a crucial step for your growth.
              </p>
              <p id="" className='text-base mt-[20px] font-manrope '>



                The best SEO plan makes the right visitors, organic traffic, and lifts conversion rates. At WebNest Media, we combine analytics, creativity, and latest techniques to produce clear, measurable outcomes. Our team listens to your objectives and filters out suited strategies for fast growth, supporting your business in securing lasting online success
              </p>

            </div>

            <div className="max-w-[440px] w-[100%] flex flex-col gap-[26px] justify-center ">
              <p className='text-[28px] font-manrope'> SEO by</p>

              <img src={logo} />

            </div>

          </div>
          <div className=" flex gap-3 mt-[32px]  ">
            <button className='c2greenbutton'>Learn More</button>
            <button className='c2whitebutton'>Contact Us</button>
          </div>

        </div>



        <section className="bg-[#EFF4EE] pb-[72px]  flex flex-col items-center justify-center max-md: ">

          <div className='max-w-[1440px] w-[100%] mx-auto text-center pl-[40px] pr-[40px]  max-md:pl-[16px] max-md:pr-[16px]' >

            <p style={{ color: 'black', fontSize: 32, fontWeight: 600, paddingBottom: 72, paddingTop: 72 }}>Your <span className='highlight'>Success</span> is our <span className='highlight'>Mission</span></p>




            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {statsData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#ddd] rounded-xl p-10 text-center 
                 shadow-[0_2px_8px_rgba(0,0,0,0.05)] 
                 transition-transform duration-200 ease-in-out 
                 hover:-translate-y-1 
                 max-w-full h-[200px] w-full"
                >
                  <h2 className="text-[#4CAF50] text-[42px] font-light">
                    {item.number}
                  </h2>
                  <p className="text-2xl font-normal text-[#333] leading-[160%] mt-2.5 text-center">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>



        </section>

        <section className=''>

          <div className=" max-w-[1440px] w-[100%] mx-auto  pl-[40px] pr-[40px]  max-md:pl-[16px] max-md:pr-[16px]   mt-[96px]">


            <p className='text-[#EEC370]  text-lg font-normal leading-7  text-center mb-[6px]'> What We Offer</p>
            <h2 className="text-[52px] max-md:text-[32px] mb-[26px] font-semibold text-center leading-snug">
              <span className="highlight">SEO</span>Services
            </h2>


            <p className="text-base font-normal leading-7   mb-[83px]  text-center ">
              We are #1 of the best search engine optimization services provider in Gurgaon/Delhi NCR
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
              {trustData.map((item, index) => (
                // <div className="trust-card " >
                <div key={index} className="bg-[#EFF4EE]   rounded-[12px] pb-[22px]  pl-[38px] pr-[38px] pt-[24px] shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1">

                  <h3 className="flex items-end mb-[36px] gap-2 ">
                    <p className=" text-[30px] text-[#EEC370] font-medium  ">{index + 1}.</p>
                    <p className='text-[20px] text-[#4CAF50] font-medium  pb-[4px]'>{item.title}</p>
                  </h3>

                  <p className="text-base leading-relaxed ">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:lg:grid-cols-4 gap-6 m px-4 ">
  {trustData.map((item, index) => (
    <div className="bg-white shadow-md rounded-lg p-6" key={index}>
      <h3 className="text-xl font-semibold mb-2">
        <span className="font-bold text-yellow-500 mr-1">{index + 1}.</span>
        {item.title}
      </h3>
      <p className="text-gray-600">{item.text}</p>
    </div>
  ))}

</div> */}


          </div>
        </section>

        <section className=' max-w-[1440px] w-[100%] mx-auto mt-[96px] max-lg:mt-[40px] pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px]'>
          <h6 className='text-[52px] max-md:text-[38px] text-[#000000] mb-[36px] leading-snug'>Why SEO is Important?</h6>
          <p className='text-base text-[#000000] leading-7 font-[350'>Well, let me put it simply — if your website isn’t showing up on search engines, potential customers won’t find you. Today's users use Google and other search engines first when they are looking something, they daon't want  how good your product or service is. Whether you're a small business, or an online retailer, or a major corporation, if you're not ranking well, you're losing out on important chances every single day. </p>

          <p className='text-base text-[#000000] leading-7 font-[350] mt-[20px] max-lg:mt-[10px]'>

            That’s exactly why SEO is important. We have SEO experts, they work on your project and give results. It make sure that visitors see your website when they are actively looking for goods or services you provide. Increased visibility from a higher ranking results in more clicks, more visitors, and eventually more buyers. In current digitally world, SEO is not just a nice-to-have, it is essential if you want to grow your business and stay competitive. </p>




          <div className="max-w-6xl  mt-[96px] mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[18px]">
            {features.map((item, index) => (
              <div
                key={index}
                className=" relative  pb-[24px] pt-[25px] pl-[11px] pr-[11px] rounded-lg text-center"
              >

                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#0000008]" />
                <div className="absolute top-0 right-0 w-12 h-12  border-t-2 border-r-2 border-[#0000008]" />
                <div className="absolute bottom-0 left-0 w-12 h-12  border-b-2 border-l-2 border-[#0000008]" />
                <div className="absolute bottom-0 right-0 w-12 h-12  border-b-2 border-r-2 border-[#0000008]" />

                <div className="flex justify-center  "> <img src={item.icon} className='w-[64px] h-[64px]' /></div>
                <h3 className="font-bold leading-[120%] text-[#000000] text-[24px]  mb-[12px] mt-[23px] w-[70%]  max-lg:w-[100%] mx-auto ">{item.title}</h3>
                <p className="text-[#000000] text-base leading-7  font-normal">{item.description}</p>
              </div>
            ))}
          </div>



          <h6 className='text-[52px] max-md:text-[38px] text-[#000000] mb-[36px] leading-snug'>

            How the Best SEO Agency in Gurgaon is <br className='max-lg:hidden' /> Transforming Digital Marketing Strategies
          </h6>
          <p className='text-base text-[#000000] leading-7  font-[350'>Well, let me put it simply — if your website isn’t showing up on search engines, potential customers won’t find you. Today's users use Google and other search engines first when they are looking something, they daon't want  how good your product or service is. Whether you're a small business, or an online retailer, or a major corporation, if you're not ranking well, you're losing out on important chances every single day. </p>


          <h5 className='text-[52px] text-center max-md:text-[38px] text-[#000000] mb-[36px] leading-snug  mt-[96px] '> SEO Agency for Every Business Requirement</h5>
          <h6 className='text-[52px] text-center max-md:text-[38px] text-[#000000] leading-snug mt-[22px] mb-[4px]'>Why WebNest Media?</h6>
          <p className='text-base  text-center text-[#000000]leading-7  font-[350'>WebNest Media is the top SEO agency in Gurgaon. We provide the best SEO services for every organization. <br className='max-lg:hidden' /> Our SEO tech expert team is capable of understanding how different industries work. </p>

        </section>



        <section className='mt-[62px] max-w-[1440px] w-[100%] mx-auto  pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px]'>




          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
            {trustDatasecond.map((item, index) => (
              // <div className="trust-card " >
              <div key={index} className="bg-[#EFF4EE]   rounded-[12px] pb-[22px]  pl-[38px] pr-[38px] pt-[24px] shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1">

                <h3 className="flex items-end mb-[36px] gap-2 ">
                  <p className=" text-[30px] text-[#EEC370] font-medium  ">{index + 1}.</p>
                  <p className='text-[20px] text-[#4CAF50] font-medium  pb-[4px]'>{item.title}</p>
                </h3>

                <p className="text-base leading-relaxed ">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

    

        <section className='max-w-[1440px] w-[100%] mx-auto  pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] '>


          <div className="flex justify-end  mb-[5px] ">
            <button onClick={scrollLeft} className="">
              <img src={Left_Arrow} alt="" />
            </button>
            <button onClick={scrollRight} className="">
              <img src={Right_Arrow} alt="" />
            </button>
          </div>


          <div className="relative overflow-hidden">
            <div
              ref={sliderRef}
              className="overflow-x-scroll flex space-x-6 py-4 scrollbar-hide"
            >

           
              {[
                {
                  id: 1,
                  title: "Review",
                  text: "We automate repetitive tasks using modern tools and workflows—saving time, reducing errors, and increasing productivity across departments. From invoice generation to HR onboarding, we help you build smart, self-operating systems.",
                  name:"Abhishek"
                },
                {
                  id: 2,
                  title: "Review",
                  text: "We move your legacy systems and data to secure, scalable cloud environments like AWS, Azure, or Google Cloud. With cloud integration, your team can collaborate from anywhere, access real-time data, and scale as your business grows.",
                  name:"Abhishek"
                },
                {
                  id: 3,
                  title: "Review",
                  text: "Stay ahead with AI-powered tools that automate decisions, personalize user experiences, and predict customer behavior. From chatbots to recommendation engines, we use AI to drive smarter outcomes for your business.",
                  name:"Abhishek"
                },
                {
                  id: 4,
                  title: "Review",
                  text: "We implement CRM (like Salesforce or HubSpot) and ERP solutions to unify your operations—sales, inventory, finance, customer service—and streamline your entire workflow.",
                  name:"Abhishek"
                },
                {
                  id: 5,
                  title: "Review",
                  text: "Good design = better engagement. We craft user-friendly, modern interfaces that deliver smooth digital experiences across websites, apps, and internal platforms. Because your customers deserve intuitive, delightful interactions.",
                  name:"Abhishek"
                },
                {
                  id: 6,
                  title: "Review",
                  text: "Make sense of your data. We build custom dashboards, analytics pipelines, and visual reports that help you understand customer behavior, sales trends, and performance metrics—so you can make smarter business decisions.",
                  name:"Abhishek"
                },
                {
                  id: 7,
                  title: "Review",
                  text: "Digital growth needs digital safety. We secure your data, applications, and infrastructure with advanced cybersecurity practices including firewalls, encryption, multi-factor authentication, and regular audits.",
                  name:"Abhishek"
                },
                {
                  id: 8,
                  title: "Review",
                  text: "When off-the-shelf solutions don’t fit, we build custom software tailored to your processes and goals—whether it’s a new internal tool, a client portal, or a full-scale application.",
                  name:"Abhishek"
                },
                {
                  id: 9,
                  title: "Review",
                  text: "Still running on outdated tools? We upgrade and re-engineer your legacy systems into modern, efficient platforms that integrate with current technologies and support your future needs.",
                  name:"Abhishek"
                },
                {
                  id: 10,
                  title: "Review",
                  text: "We help you deliver a seamless, consistent brand experience across all digital channels—web, mobile, email, social, and more—so your customers can connect with you anytime, anywhere.",
                  name:"Abhishek"
                }
              ]
                .map((card, index) => (
                  <div
                    key={index}
                    className=" flex-shrink-0 items-stretch w-[609px] max-md:w-[375px] align-top bg-none  text-left bg-[#EDEAE9]  py-5 px-10 justify-between    "
                  >
                    <h3 className="mb-6  border-b  "> {card.title}</h3>

                    <p className='text-left py-[46px]'>{card.text}</p>

                  <div className=' flex justify-between gap-[30%]  '> <p>Client: </p>  <p> {card.name} </p></div>
                  </div>
                ))}

                
            </div>
          </div>
        </section>


        {/* <div className="container6 ">


          <div className=" max-w-[1440px] w-[100%] mx-auto conatctform flex flex-row items-center justify-center flex-wrap gap-10 max-lg:flex-col mb-10 px-5 py-10">

           
            <div className="w-[100%] max-lg:w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5c945c]">
                Work With Us and Take <br />Your Business to the Next Level
              </h3>
              <p className="text-[17px] text-black mt-5 mb-5">
                We provide the tools, expertise, and support you need to grow faster,
                reach more customers, and stay ahead of the competition.
                Let’s take your business to the next level—together.
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



          </div>

        </div> */}

    
<section  className='mt-[60px] mb-[60px]'>

   <div className=" bg-cover bg-center flex  items-center px-6 md:px-20  py-10"
        style={{ backgroundImage: `url(${SeoConatct})`}}>
      <div className="w-full max-w-7xl mx-auto flex max-lg:flex-col  md:flex-row items-start justify-between">
        {/* Left Section */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 max-lg:w-[100%]  ">
          <p className="uppercase text-base leading-7 mb-4 text-[#FFFFFF] ">Contact Us</p>
          <h6 className="text-[52px] max-lg:text-[38px] font-normal leading-snug text-white">
          Let’s make the web <br  className='max-md:hidden'/>  talk about your  <br  className='max-md:hidden'/> project
          </h6>
        </div>

       

        <div className=" w-px  bg-white  mx-10" />

        {/* Right Section */}
        <div className="w-full md:w-1/2 space-y-10   max-lg:w-[100%]  border-l-2 border-grey pl-[100px] ">
          <div className='px-[10px] py-[10px]'>
            <h3 className="text-[24px]   font-normal mb-2 text-[#FFFFFF] ">Get a Free Consultation</h3>
                <p className="text-[18px] leading-7 flex items-center gap-2 mb-2 text-[#FFFFFF] ">
            <img src={seocontactphoneicon} /> <a href="mailto:info@webnest.in" className=""> +919696964606</a> </p>
            
            <p className="text-[18px] leading-7 flex items-center gap-2 text-[#FFFFFF] ">
            <img src={seocontactimage} /> <a href="mailto:info@webnest.in" className="underline">info@webnest.in</a>
            </p>
          </div>

          <div className='px-[10px] py-[10px]'>
            <h3 className="text-[24px]  font-normal mb-2 text-[#FFFFFF] ">Get a Free Consultation</h3>
            <p className="text-[18px] leading-7 flex items-start gap-2 text-[#FFFFFF] ">
            <img src={seolocation} /> <span>
                1st Floor Orchid Business Park,<br />
                Near Subhash Chowk, Sector 48,<br />
                Gurugram Haryana 122001
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
</section>

        <div className="accordian max-w-[1440px] w-[100%] mx-auto">

          <div>
            <h2 className='text-center'>Let's address your <span className='text-black '>questions </span>today</h2>

            <div className="accordion-wrapper-columns">

              {/* Left Column */}
              <div className="accordion-column ">
                <div className="accordion">
                  <input type="checkbox" id="left-1" />
                  <label className="accordion-label" htmlFor="left-1">
                    What is Search Engine Optimization?
                  </label>
                  <div className="accordion-content">
                    <p>
                      The practice of improving your website to rank higher on search engines like Google is known as search engine optimization, or SEO. The higher you rank, the more visible your site is—and that means more traffic, leads, and sales. If people can't find you online, you're missing out on business.
                    </p>
                  </div>
                </div>

                <div className="accordion">
                  <input type="checkbox" id="left-2" />
                  <label className="accordion-label" htmlFor="left-2">
                    Why is SEO important for my business?
                  </label>
                  <div className="accordion-content">
                    <p>
                      SEO is important because it helps your business get found by people searching online. By improving your website’s visibility on search engines like Google, SEO drives more organic traffic and builds trust.
                    </p>
                  </div>
                </div>

                <div className="accordion">
                  <input type="checkbox" id="left-3" />
                  <label className="accordion-label" htmlFor="left-3">
                    What services does your SEO agency offer?
                  </label>
                  <div className="accordion-content">
                    <p>
                      Our SEO agency offers a full range of services, including keyword research, on-page optimization, technical SEO audits, content creation, link building, local SEO, and ongoing performance tracking to help your website rank higher and attract more traffic.
                    </p>
                  </div>
                </div>

                <div className="accordion">
                  <input type="checkbox" id="left-4" />
                  <label className="accordion-label" htmlFor="left-4">
                    How much time take to see SEO results?
                  </label>
                  <div className="accordion-content">
                    <p>
                      SEO isn’t instant—it’s a long-term strategy. Most businesses start seeing noticeable improvements in 3 to 6 months, depending on the competition and how much work is done. The key is consistency and quality.
                    </p>
                  </div>
                </div>

                <div className="accordion">
                  <input type="checkbox" id="left-5" />
                  <label className="accordion-label" htmlFor="left-5">
                    What’s the difference between SEO and paid ads (PPC)?
                  </label>
                  <div className="accordion-content">
                    <p>
                      SEO earns you organic (free) traffic over time. Paid ads give you instant visibility, but only while you’re paying. SEO builds lasting authority and trust, while PPC offers quick wins. A smart strategy often includes both.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="accordion-column">
                <div className="accordion">
                  <input type="checkbox" id="right-6" />
                  <label className="accordion-label" htmlFor="right-6">
                    Do I need SEO if I already run ads?
                  </label>
                  <div className="accordion-content">
                    <p>
                      Yes! SEO and ads serve different purposes. While ads can bring short-term traffic, SEO ensures your business is discoverable in the long run—without constantly paying for clicks.
                    </p>
                  </div>
                </div>

                <div className="accordion">
                  <input type="checkbox" id="right-7" />
                  <label className="accordion-label" htmlFor="right-7">
                    Is SEO a one-time thing or ongoing?
                  </label>
                  <div className="accordion-content">
                    <p>
                      SEO is an ongoing process. Search engines, competitors, and user behavior all change constantly. Ongoing SEO keeps your site optimized, competitive, and visible.
                    </p>
                  </div>
                </div>

                <div className="accordion">
                  <input type="checkbox" id="right-8" />
                  <label className="accordion-label" htmlFor="right-8">
                    How Search Engine Optimization Works?
                  </label>
                  <div className="accordion-content">
                    <p>
                      SEO works by optimizing your website’s content, keywords, and structure so search engines can understand it better and rank it higher. The goal is to appear in front of the right audience, drive organic traffic, and build trust over time.
                    </p>
                  </div>
                </div>

                <div className="accordion">
                  <input type="checkbox" id="right-9" />
                  <label className="accordion-label" htmlFor="right-9">
                    Can I do SEO myself?
                  </label>
                  <div className="accordion-content">
                    <p>
                      Yes, basic SEO can be done on your own, but for long-term results and competitive keywords, working with SEO professionals often delivers better results.
                    </p>
                  </div>
                </div>

                <div className="accordion">
                  <input type="checkbox" id="right-10" />
                  <label className="accordion-label" htmlFor="right-10">
                    What makes Webnest Media different from other SEO companies?
                  </label>
                  <div className="accordion-content">
                    <p>
                      WebNest Media is the best SEO agency in Gurgaon. We don’t believe in one-size-fits-all solutions. At Webnest Media, we focus on real relationships, honest work, and results that matter. Our strategies are tailored, transparent, and rooted in what your business truly needs to grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Seo;