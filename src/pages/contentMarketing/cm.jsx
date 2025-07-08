import React, { useEffect, useState, useRef } from 'react';
import './cm.css'; // Make sure this file has your styles
import c1_image from './Resources/Rectangle.png';
import image from './Resources/image.png';
import Conatctfrom from '../../components/contact/contactform'; // Corrected import
import Accordian from '../home/componnet/Accordian.jsx';
import { FiPhone } from "react-icons/fi";
import { Helmet } from 'react-helmet';
import HeroSection from '../../components/Herosection/Herosection.jsx';
import Newcontact from '../../components/Newcontact/Newcontact.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const ContentMarketing = () => {
  const [text, setText] = useState('');
  const words = ['Engage', 'Impact', 'Content'];
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
    { number: '1050+', label: 'Pro Video Edits' },
    { number: '85%', label: 'Content Strategy' },
    { number: '40%', label: 'Brand Stories' },
    { number: '2500+', label: 'Bold Visuals' },
  ];
  const trustData = [
    {
      title: "Uncovering Your Potential",
      text: "Our creative team delves deep into your brand's strengths to identify opportunities and connect with the most suitable audience for your business.",
    },
    {
      title: "Strategic Keyword Research",
      text: "As the best content writing company in Gurgaon, WebNest Media meticulously selects relevant keywords to enhance your website's appeal and search engine visibility.",
    },
    {
      title: "Collaborative Creativity",
      text: "We value your insights and actively involve you in the content creation process. By blending your ideas with our expertise, we craft content that truly represents your brand's voice.",
    },
  ];



  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const contentMarketingSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://webnestmedia.com/content-marketing#service",
        "name": "Content Marketing",
        "description": "WebNest Media is a leading content marketing agency in Gurgaon offering strategy-driven content creation, blog writing, SEO content, social content, and storytelling that drives traffic, engagement, and conversions for your brand.",
        "serviceType": "Content Marketing",
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
        "url": "https://webnestmedia.com/content-marketing"
      },
      {
        "@type": "WebPage",
        "@id": "https://webnestmedia.com/content-marketing#webpage",
        "url": "https://webnestmedia.com/content-marketing",
        "name": "Content Marketing Services in Gurgaon – WebNest Media",
        "description": "Looking to grow your brand with high-impact content? WebNest Media offers expert content marketing services in Gurgaon — including blog writing, SEO content, and strategy to attract and engage your ideal audience."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://webnestmedia.com/content-marketing#breadcrumb",
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
            "name": "Content Marketing",
            "item": "https://webnestmedia.com/content-marketing"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://webnestmedia.com/content-marketing#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does content marketing include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our content marketing includes blog writing, SEO-optimized content, landing pages, social media content, email campaigns, and content strategy development to boost your brand visibility."
            }
          },
          {
            "@type": "Question",
            "name": "How can content marketing grow my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It helps build trust, improve search engine rankings, and attract the right audience to your website—leading to more traffic, engagement, and conversions over time."
            }
          },
          {
            "@type": "Question",
            "name": "Why choose WebNest Media for content marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We combine storytelling, SEO, and strategy to create content that resonates with your audience and drives business growth. Our team creates content that ranks and converts."
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

        <title>Best Content Marketing Agency in Gurgaon | WebNest Media</title>
        <meta name="description" content="WebNest Media is the top content marketing agency in Gurgaon. We deliver high-quality, SEO-friendly content that attracts traffic and generates leads." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebNest Media" />
        <link rel="canonical" href="https://webnestmedia.com/content-marketing" />

 <meta property="og:title" content="Best Content Marketing Agency in Gurgaon | WebNest Media " />
  <meta property="og:description" content="WebNest Media is the top content marketing agency in Gurgaon. We deliver high-quality, SEO-friendly content that attracts traffic and generates leads." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://webnestmedia.com/content-marketing" />
  <meta property="og:image" content="https://webnestmedia.com/assets/Rectangle-BqtkALH1.svg" />
  <meta property="og:site_name" content="WebNest Media" />

        <script type="application/ld+json">

          {JSON.stringify(contentMarketingSchema)}
        </script>

      </Helmet>

      <section className=''>



        <div className="mt-[px]   max-lg:mt-[0] w-[100%]">
          {/* <h1 className='text-[52px] max-lg:text-[38px] text-center'>Content Marketing <span className='text-black'>Agency in Gurgaon </span></h1> */}
          {/* <h2 className="heading-styled relative h-[60px] text-[40px]  bg-yellow font-bold text-black px-4 py-1 mt-[320px] ">
            {text}
          </h2> */}
          <HeroSection
            backgroundImage={c1_image}
            heading="Content Marketing Company"
            highlight="in Gurgaon"
            paragraph="From blogs to web copy, we craft SEO-driven content that brings value to your audience and helps your business grow online.
"
          />
        </div>

        <div className="max-w-[1440px] mb-16 maxx-lg:mb-10 flex flex-row w-full mx-auto px-[40px] max-lg:px-[16px] lg:mt-24 max-lg:mt-10 justify-between">
          <div className="lg:w-[60%]">
            <h2 data-aos="fade-up" className="text-[52px] mb-5 max-lg:text-3xl lg:translate-y-10 max-lg:mb-[20px] font-semibold">
            <span className="highlight">Content</span> is the key to <br /> building audiences
          </h2>
           <div className="lg:hidden">
              <img src={image} alt="" />
              </div> 
          <div className="flex flex-row max-lg:flex-col-reverse justify-between items-center gap-24 max-lg:gap-10">
            {/* Left Text Section */}
            <div className=" flex flex-col">
              <p data-aos="fade-up" className="text-base">
                Great content captures attention, builds trust, and keeps your audience coming back.
                At WebNest Media, we craft meaningful content that speaks directly to your ideal customers.
              </p>

              <br />
              <h3 data-aos="fade-up" className="text-2xl font-semibold mb-4">What We Offer:</h3>

              <ul className="text-base mb-12 lg:leading-[160%]">
                <li data-aos="fade-up">• Blog posts, SEO content, and landing pages</li>
                <li data-aos="fade-up">• Visual storytelling with high-quality graphics</li>
                <li data-aos="fade-up">• Strategic content planning and calendar</li>
              </ul>




              <div data-aos="fade-up" className="flex gap-3">


                <button
                  onClick={() => scrollToSection("bringout")}

                  className='uiverse-button'>Learn More</button>



                <Link to="/contact-us">
                  <button className='white-button'>Contact Us</button>

                </Link>

              </div>


            </div>

          
          </div>

            
            </div>   
            <div className="max-lg:hidden">
              <img src={image} alt="" />
              </div>      
                 
                 
         </div>


        <div className=' bg-[#EFF4EE]'>
          <div className="amc4 max-lg:mt-10 pt-16 max-w-[1440px] w-full px-[40px] max-lg:px-[16px] mx-auto">
            <div className="pb-[72px] text-center">
              <p data-aos="fade-up" className="text-[18px] max-lg:mb-4" style={{ color: '#EEC370' }}>
                The no. 1 Content Marketing Service
              </p>

              <h2 data-aos="fade-up" className='text-3xl font-semibold mb-8'>
                Build a Customer-Centric <span className="highlight">Marketing Strategy</span>
              </h2>

              <p data-aos="fade-up" className="text-base mb-14">
                Drive results through performance-based partnerships – only pay when you earn.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {statsData.map((item, index) => (
                  <div data-aos="fade-up" className="stat-card" key={index}>
                    <p className="stat-number">{item.number}</p>
                    <p className="stat-label">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>








        <div id="bringout" className="max-w-[1440px] w-[100%] mx-auto  mt-12  max-lg:mt-[40px]  px-[40px] max-lg:px-[16px] ">
          <h2 data-aos="fade-up" className=" font-semibold text-[52px] lg:w-[80%] max-lg:text-3xl leading-tight ">
            Bringing Out the Best Content Writing Company
            <span className="highlight"> in Gurgaon</span>
          </h2>
          <br />
          <p data-aos="fade-up" className="trust-subheading mb-[40px] lg:w-[80%] text-base leading-[160%]">
            In today’s competitive digital landscape, content is more than just information—it’s your voice,
            your story, and your most powerful marketing tool. At WebNest Media, we provide the content marketing services
            in Gurgaon designed to build your brand’s authority, drive traffic, and convert prospects into loyal customers.
            Whether you're a startup looking to create your first content campaign or an established business aiming to scale,
            our content marketing strategies are crafted with precision, creativity, and purpose.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
            {trustData.map((item, index) => (
              <div data-aos="fade-up"
                key={index}
                className="bg-[#EFF4EE] rounded-[12px] p-[30px] shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 "
              >
                <h3 className="flex items-center gap-2">
                  <p className="text-[30px] text-[#EEC370]">{index + 1}.</p>
                  <p className="text-[24px] text-[#4CAF50]">{item.title}</p>
                </h3>

                <p className="text-base leading-relaxed mt-9 max-lg:mt-5 mb-[30px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>



        <div className='mt-24 max-md:mt-10 '>
          <Newcontact />
        </div>


        <div className="accordian max-w-[1440px] px-10 max-md:px-4 w-[100%] mt-24 max-md:mt-10 mx-auto ">
          <h2 className='text-center'>Let's address your <span className='text-black '>questions </span>today</h2>
          <div className="accordion-wrapper-columns">
            {/* Left Column */}
            <div className="accordion-column">
              <div className="accordion">
                <input type="checkbox" id="left-1" />
                <label className="accordion-label" htmlFor="left-1">
                  What is content marketing?
                </label>
                <div className="accordion-content">
                  <p>
                    Content marketing is a strategy that involves creating and sharing valuable, relevant content to attract, engage, and convert your target audience. It builds trust and positions your brand as an authority in your industry.
                  </p>
                </div>
              </div>

              <div className="accordion">
                <input type="checkbox" id="left-2" />
                <label className="accordion-label" htmlFor="left-2">
                  How does content marketing help my business?
                </label>
                <div className="accordion-content">
                  <p>
                    Content marketing drives organic traffic, improves SEO, builds brand awareness, and increases customer loyalty. It also helps educate your audience and guide them toward making a purchase.
                  </p>
                </div>
              </div>

              <div className="accordion">
                <input type="checkbox" id="left-3" />
                <label className="accordion-label" htmlFor="left-3">
                  What types of content do you create?
                </label>
                <div className="accordion-content">
                  <p>
                    We create a variety of content including blog posts, website copy, social media content, email campaigns, video scripts, case studies, whitepapers, and more—all tailored to your business goals.
                  </p>
                </div>
              </div>

              <div className="accordion">
                <input type="checkbox" id="left-4" />
                <label className="accordion-label" htmlFor="left-4">
                  Is content marketing the same as advertising?
                </label>
                <div className="accordion-content">
                  <p>
                    Not exactly. Advertising is short-term and sales-focused, while content marketing is long-term and relationship-focused. It’s about providing value, not just pushing products.
                  </p>
                </div>
              </div>

              <div className="accordion">
                <input type="checkbox" id="left-5" />
                <label className="accordion-label" htmlFor="left-5">
                  How long does it take to see results from content marketing?
                </label>
                <div className="accordion-content">
                  <p>
                    Content marketing is a long-term strategy. While you might see initial engagement within weeks, significant traffic growth and conversions typically take 3–6 months or more.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="accordion-column">
              <div className="accordion">
                <input type="checkbox" id="right-6" />
                <label className="accordion-label" htmlFor="right-6">
                  How is content marketing different from SEO?
                </label>
                <div className="accordion-content">
                  <p>
                    SEO is the technical process of improving your website’s visibility, while content marketing is about creating valuable content that fuels SEO efforts. They work best together.
                  </p>
                </div>
              </div>

              <div className="accordion">
                <input type="checkbox" id="right-7" />
                <label className="accordion-label" htmlFor="right-7">
                  Do you offer content strategy as part of your service?
                </label>
                <div className="accordion-content">
                  <p>
                    Yes! We provide a complete content marketing strategy, including content planning, keyword research, tone of voice guidelines, and performance tracking.
                  </p>
                </div>
              </div>

              <div className="accordion">
                <input type="checkbox" id="right-8" />
                <label className="accordion-label" htmlFor="right-8">
                  Can content marketing help with lead generation?
                </label>
                <div className="accordion-content">
                  <p>
                    Absolutely. By offering informative, solution-based content, you build trust and encourage visitors to take action—whether it’s signing up, contacting you, or making a purchase.
                  </p>
                </div>
              </div>

              <div className="accordion">
                <input type="checkbox" id="right-9" />
                <label className="accordion-label" htmlFor="right-9">
                  How do you measure content marketing success?
                </label>
                <div className="accordion-content">
                  <p>
                    We track success using key metrics like website traffic, engagement rates, keyword rankings, conversion rates, and ROI through tools like Google Analytics and Search Console.
                  </p>
                </div>
              </div>

              <div className="accordion">
                <input type="checkbox" id="right-10" />
                <label className="accordion-label" htmlFor="right-10">
                  Why should I choose WebNest Media for content marketing?
                </label>
                <div className="accordion-content">
                  <p>
                    At WebNest Media, we offer custom content strategies backed by research and creativity. Our team focuses on delivering consistent, high-quality content that aligns with your brand and drives results.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
export default ContentMarketing;