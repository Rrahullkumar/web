import React, { useState, useRef, useEffect } from 'react';
import './Seo.css';

import heroimage from "./resources/heroimage.png";

import seoicon1 from "./resources/seoicon1.svg";
import seoicon2 from "./resources/seoicon2.svg";
import seoicon3 from "./resources/seoicon3.svg";
import seoicon4 from "./resources/seoicon4.svg";
import seoicon5 from "./resources/seoicon5.svg";
import seoicon6 from "./resources/seoicon6.svg";


import { Helmet } from 'react-helmet';
import HeroSection from '../../components/Herosection/Herosection.jsx';

import newlogo from "./resources/newsseologo.svg"


import AnimatedCardList from '../../components/industryCard/AnimatedCardList.jsx';
import TestimonialSlider from '../../components/testimonial/TestimoniaSlider.jsx';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';


const Seo = () => {

  const statsData = [
    { number: '21,3456', label: 'Organic Traffic Growth' },
    { number: '13,200+', label: 'Keyword Rankings' },
    { number: '98/100', label: 'Speed & UX Score' },
    { number: '231,580+', label: 'Leads Generated' },
  ];
  
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


  const trustData = [
  {
    title: "On-Page SEO",
    text: "Our on-page SEO services include meta title, description, keyword research, URLs, and content quality. We have a specialized team that guarantees your pages are visible on SERPs. It also includes improving site speed, mobile responsiveness, and internal linking.",
  },
  {
    title: "Off-Page SEO",
    text: "High-quality backlinks improve your website performance. Off-page activities include various high domain backlinks that help increase organic traffic. Guest posting, article submission, classified submissions, PPT sharing, and more backlinks are created by our team.",
  },
  {
    title: "Technical SEO",
    text: "Technical SEO is all about fixing broken links, ensuring search engines can crawl your site easily, and making sure your pages load quickly on all devices. We add structured data to help Google understand your content, switch to HTTPS for security, and handle redirects properly.",
  },
  {
    title: "Local SEO",
    text: "We help businesses dominate local search results through Google My Business optimization, local keyword targeting, citation management, and review strategies—giving you a strong presence where your customers are searching.",
  },
  {
    title: "E-Commerce SEO",
    text: "E-Commerce SEO helps your products appear when customers search for what you’re selling. From optimizing product titles and descriptions to improving site speed, mobile experience, and clean URLs, we ensure your store ranks higher and loads faster.",
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

  const secondREf = useRef();
  const [cardtrigger, setCardTrigger] = useState(false);

  useEffect(() => {


    const observer2 = new IntersectionObserver(
      ([entry]) => {
        setCardTrigger(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );




    if (secondREf.current) {
      observer2.observe(secondREf.current);
    }


    return () => {

      if (secondREf.current) {
        observer2.unobserve(secondREf.current);
      }

    };
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://webnestmedia.com/search-engine-optimization/#webpage",
        "url": "https://webnestmedia.com/search-engine-optimization",
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
        "url": "https://webnestmedia.com/search-engine-optimization",
        "description": "Professional SEO services from WebNest Media. On-page SEO, Off-page SEO, Technical SEO, and Local SEO to boost your Google rankings.",
        "offers": {
          "@type": "Offer",
          "url": "https://webnestmedia.com/contact",
          "price": "Varies",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
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
  };


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>

        <title>Best SEO Agency in Gurgaon | Affordable SEO Solutions</title>
        <meta  name="description" content="WebNest Media offers affordable SEO services with guaranteed first page ranking. Our SEO experts handle on-page, off-page, and technical SEO for organic growth." />
        <meta  name="keywords" content="SEO services, SEO agency, search engine optimization, on-page SEO, off-page SEO, technical SEO, SEO company, local SEO, SEO Gurgaon" />
        <meta  name="robots" content="index, follow" />
        <meta  name="author" content="WebNest Media" />
        <link  rel="canonical" href="https://webnestmedia.com/search-engine-optimization" />

        {/* <meta property="og:title" content="Best SEO Agency in Gurgaon | Affordable SEO Solutions" />
        <meta property="og:description" content="WebNest Media offers affordable SEO services with guaranteed first page ranking. Our SEO experts handle on-page, off-page, and technical SEO for organic growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webnestmedia.com/search-engine-optimization" />
        <meta property="og:image" content="https://webnestmedia.com/assets/heroimage-CzLAVzJe.svg" />
        <meta property="og:site_name" content="WebNest Media" /> */}

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>


      </Helmet>

      <section className=''>

        <div className="">
          <HeroSection
            backgroundImage={heroimage}
            heading="SEO Company"
            highlight="in Gurgaon"
            paragraph="Let’s take your website from hidden to high-ranking with smart SEO, search-friendly content, and organic growth."
          />
        </div>

        <section data-aos="fade-up" className="max-lg:mt-10 mt-24 max-w-[1440px] px-10 max-lg:px-[16px] flex flex-row-reverse max-lg:flex-col-reverse lg:items-center lg:justify-between mx-auto">
  
  {/* Image Section */}
  <div className="max-w-[440px] w-full max-lg:w-[80%] mx-auto max-lg:my-10">
    <LazyLoadImage src={newlogo} alt='WebNest Media Logo' className="w-full h-auto" />
  </div>

  {/* Text Section */}
  <div className="lg:w-[60%]">
    <h2 className="text-[52px] max-lg:text-[36px] font-semibold">
      Best SEO Company <br className='max-lg:hidden' /> in Gurgaon
    </h2>
    <br />
    <p className="text-base mt-2 font-manrope">
      In today's digital world, every business whether big or small, requires an online visibility on Google. Every day millions of people reach for search engines. The goal of having a website on Google's first page has grown into a necessity. Selecting the top SEO company in Gurgaon is a crucial step for your growth.
    </p>

    <p className="text-base mt-5 font-manrope">
      The best SEO plan makes the right visitors, organic traffic, and lifts conversion rates. At WebNest Media, we combine analytics, creativity, and latest techniques to produce clear, measurable outcomes. Our team listens to your objectives and filters out suited strategies for fast growth, supporting your business in securing lasting online success.
    </p>

    {/* CTA Button */}
    <div className="flex gap-3 mt-8">
      <Link to="/about-us">
        <button
          onClick={() => scrollToSection("seoservice")}
          className="uiverse-button"
        >
          Learn More
        </button>
      </Link>
    </div>
  </div>
</section>


        <section className="bg-[#EFF4EE] pb-[72px]  flex flex-col mt-24 max-lg:mt-10 items-center justify-center max-md: ">

          <div data-aos="fade-up" className='max-w-[1440px] w-[100%] mx-auto text-center pl-[40px] pr-[40px]  max-md:pl-[16px] max-md:pr-[16px]' >

            <h2 style={{ color: 'black', fontSize: 32, fontWeight: 600, paddingBottom: 72, paddingTop: 72 }}>Your <span className='highlight'>Success</span> is our <span className='highlight'>Mission</span></h2>




            <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {statsData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#ddd] rounded-xl p-10 text-center 
                 shadow-[0_2px_8px_rgba(0,0,0,0.05)] 
                 transition-transform duration-200 ease-in-out 
                 hover:-translate-y-1 
                 max-w-full h-[200px] w-full"
                >
                  <p className="text-[#4CAF50] text-[42px] font-light">
                    {item.number}
                  </p>
                  <p className="text-2xl font-normal text-[#333] leading-[160%] mt-2.5 text-center">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>



        </section>

        <section className='' id="seoservice">

          <div className=" max-w-[1440px] w-[100%] mx-auto  pl-[40px] pr-[40px]  max-md:pl-[16px] max-md:pr-[16px]   mt-[96px]">


            <p data-aos="fade-up" className='text-[#EEC370]  text-lg font-normal leading-7  text-center mb-[6px]'> What We Offer</p>
            <h2 data-aos="fade-up" className="text-[52px] max-md:text-[32px] mb-[26px] font-semibold text-center leading-snug">
              <span className="highlight">SEO</span>  <span> Services </span>
            </h2>


            <p data-aos="fade-up" className="text-base font-normal leading-7   mb-[83px]  text-center ">
              We are #1 of the best search engine optimization services provider in Gurgaon/Delhi NCR
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
              {trustData.map((item, index) => (
                // <div className="trust-card " >
                <div data-aos="fade-up" key={index} className="bg-[#EFF4EE]   rounded-[12px] pb-[22px]  pl-[38px] pr-[38px] pt-[24px] max-lg:py-[16px] max-lg:px-[16px] shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1">

                  <h3 className="flex items-end mb-[36px] max-sm:mb-[26px] gap-2  ">
                    <span className=" text-[30px] max-md:text-[26px] text-[#EEC370] font-medium  ">{index + 1}.</span>
                    <span className='text-[20px] text-[#4CAF50] font-medium  pb-[4px]'>{item.title}</span>
                  </h3>

                  <p className="text-base leading-relaxed ">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

        

          </div>
        </section>

        <section className=' max-w-[1440px] w-[100%] mx-auto mt-24 max-lg:mt-10 pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px]'>
          <h2 className='text-[52px] max-md:text-3xl max-md:font-semibold text-[#000000] mb-[36px] max-lg:mb-[20px] leading-snug'>Why SEO is Important?</h2>
          <p className='text-base text-[#000000] leading-7 font-[350]'>Well, let me put it simply — if your website isn’t showing up on search engines, potential customers won’t find you. Today's users use Google and other search engines first when they are looking something, they don't want  how good your product or service is. Whether you're a small business, or an online retailer, or a major corporation, if you're not ranking well, you're losing out on important chances every single day. </p>

          <p className='text-base mb-[10px] text-[#000000] leading-7 font-[350] mt-[20px] max-lg:mt-[10px] max-lg:mb-10'>

            That’s exactly why SEO is important. We have SEO experts, they work on your project and give results. It make sure that visitors see your website when they are actively looking for goods or services you provide. Increased visibility from a higher ranking results in more clicks, more visitors, and eventually more buyers. In current digitally world, SEO is not just a nice-to-have, it is essential if you want to grow your business and stay competitive. </p>




          <div className="max-w-6xl max-md:w-[90%]  mx-auto px-4 py-10 max-md:py-0 max-md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[18px]">
            {features.map((item, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className=" relative    pb-[24px] pt-[25px] pl-[11px] pr-[11px] rounded-lg text-center"
              >

                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#0000008]" />
                <div className="absolute top-0 right-0 w-12 h-12  border-t-2 border-r-2 border-[#0000008]" />
                <div className="absolute bottom-0 left-0 w-12 h-12  border-b-2 border-l-2 border-[#0000008]" />
                <div className="absolute bottom-0 right-0 w-12 h-12  border-b-2 border-r-2 border-[#0000008]" />

                <div className="flex justify-center  ">   <LazyLoadImage src={item.icon} alt={item.title} className='w-[64px] h-[64px]' /></div>


                <h3 className="font-bold leading-[120%] text-[#000000] text-[24px] max-md:text-[20px] mb-[12px] mt-[23px] w-[70%]  max-lg:w-[100%] mx-auto ">{item.title}</h3>
                <p className="text-[#000000] text-base leading-7 max-md:text-base font-normal">{item.description}</p>
              </div>
            ))}
          </div>



          <h2 data-aos="fade-up" className='text-[52px] mt-24  max-md:text-3xl max-md:font-semibold text-[#000000] mb-[36px] leading-snug'>

            How the Best SEO Agency in Gurgaon is <br className='max-lg:hidden' /> Transforming Digital Marketing Strategies
          </h2>
          <p data-aos="fade-up" className='text-base text-[#000000] leading-7 font-[350'>Well, let me put it simply — if your website isn’t showing up on search engines, potential customers won’t find you. Today's users use Google and other search engines first when they are looking something, they don't want  how good your product or service is. Whether you're a small business, or an online retailer, or a major corporation, if you're not ranking well, you're losing out on important chances every single day. </p>


          <h2 data-aos="fade-up" className='text-[52px] text-center max-md:text-3xl max-md:font-semibold text-[#000000] mb-[36px] leading-snug  mt-[96px] max-lg:mt-[40px] '> <span className='text-[#4CAF50]'>SEO Agency</span> for Every  <br className='max:lg:hidden' /> Business Requirement</h2>


          <div
            ref={secondREf}
            onMouseEnter={() => setCardTrigger(true)}
            className="industriweserve mb-[96px] mt-[64px] max-md:mt-[40px] w-[100%] max-w-[1440px]  mx-auto overflow-hidden "

          >

   

            <AnimatedCardList cardtrigger={cardtrigger} className="animatedcard  jjj "
              ref={secondREf}
              onMouseEnter={() => setCardTrigger(true)}

            />


          </div>

          <h2 data-aos="fade-up" className='text-[52px] lg:text-center max-md:text-3xl max-md:font-semibold text-[#000000] leading-snug mt-[22px] mb-4'>Why WebNest Media?</h2>
          <p data-aos="fade-up" className='text-base  lg:text-center text-[#000000]leading-7  font-[350]'>WebNest Media is the top SEO agency in Gurgaon. We provide the best SEO services for every organization. <br className='max-lg:hidden' /> Our SEO tech expert team is capable of understanding how different industries work. </p>

        </section>

        <section className='mt-[62px] max-lg:mt-[40px] max-w-[1440px] w-[100%] mx-auto  pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px]'>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] ">
            {trustDatasecond.map((item, index) => (
              // <div className="trust-card " >
              <div data-aos="fade-up" key={index} className="bg-[#EFF4EE] lg:min-h-[200px]  rounded-[12px] pb-[22px]  pl-[38px] pr-[38px] pt-[24px] max-lg:py-[16px] max-lg:px-[16px] shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1">

                <h3 className="flex items-end mb-9 max-md:mb-6 gap-2 max:md:h-4 max-md:items-start ">
                  <span className=" text-[30px] max-md:text-[24px] text-[#EEC370] font-medium  ">{index + 1}.</span>
                  <span className='text-[20px] text-[#4CAF50] font-medium  pb-[4px]'>{item.title}</span>
                </h3>

                <p className="text-base leading-relaxed ">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className='max-w-[1440px] mb-24 max-lg:mb-10 w-[100%] mt-[36px] mx-auto  pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] '>

          <TestimonialSlider
            sectionTitle="What Our Clients Say"
            sectionSubtitle="Testimonials"
            testimonials={testimonialData}
          />

        </section>

   
        <div className="accordian max-w-[1440px] w-[100%] px-10 max-md:px-4 mx-auto mt-[96px]">

          <div>
            <h2 className='text-center' style={{ fontSize: 32 }}>Let's address your <span className='text-black '>questions </span>today</h2>

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