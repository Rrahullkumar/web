import  { useState } from 'react';

import topimage from './resources/topimage.png'
import image3 from './resources/image3.png'
import icon1 from './resources/ifl.svg'
import icon2 from './resources/diversity_1.svg'
import icon3 from './resources/arrows_input.svg'
import icon4 from './resources/lightbulb.svg'
import Accordion from './components/Accordian';

import { Helmet } from 'react-helmet';
import HeroSection from '../../components/Herosection/Herosection';

import arrow from './resources/arrow.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Leadgeneration = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: "Marketing Qualified Leads (MQLs): Engaging Interested Prospects",
      content:
        "We find and cultivate people who have expressed interest in your goods or services. By analyzing engagement metrics and behavioral data, we ensure that the leads passed to your sales team are primed for further interaction.",
    },
    {
      title: "Sales Qualified Leads (SQLs): Ready-to-Convert Opportunities",
      content:
        "Our team rigorously qualifies leads based on criteria such as budget, authority, need, and timeline. This ensures that your sales efforts are focused on prospects with a high likelihood of conversion.",
    },
    {
      title: "Account-Based Marketing (ABM): Targeting High-Value Accounts",
      content:
        "We create unique campaigns targeted at particular high-value accounts. By tailoring messaging and outreach strategies, we increase the chances of engaging decision-makers within these organizations.",
    },
    {
      title: "Content Syndication: Expanding Your Reach",
      content:
        "Through strategic distribution of your content across various platforms, we amplify your brand's visibility and attract leads who are actively seeking solutions in your industry.",
    },
  ];

  const data = [
    {
      icon: icon1,
      title: "Customized Strategies",
      content: "We tailor our approach to align with your business goals and target audience."
    },
    {
      icon: icon2,
      title: "Experienced Team",
      content: "Our professionals bring years of experience in lead generation and marketing."
    },
    {
      icon: icon3,
      title: "Transparent Reporting",
      content: "Regular updates and insights keep you informed about campaign performance."
    },
    {
      icon: icon4,
      title: "Scalable Solutions",
      content: "Whether you're a startup or an established enterprise, our services scale to meet your needs."
    }
  ]
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <>
import { Helmet } from "react-helmet";

<Helmet>
  <title>Lead Generation Company in Gurgaon | Drive Quality Leads</title>
  <meta
    name="description"
    content="Generate high-quality leads with targeted strategies. WebNest Media offers expert lead generation services in Gurgaon that drive real results."
  />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="WebNest Media" />
  <link rel="canonical" href="https://webnestmedia.com/lead-generation" />

  {/* Optional Open Graph Tags */}
  {/*
  <meta property="og:title" content="Lead Generation Company in Gurgaon | Drive Quality Leads" />
  <meta property="og:description" content="Generate high-quality leads with targeted strategies. WebNest Media offers expert lead generation services in Gurgaon that drive real results." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://webnestmedia.com/lead-generation" />
  <meta property="og:image" content="https://webnestmedia.com/assets/topimage-Dc6cZZ9c.svg" />
  <meta property="og:site_name" content="WebNest Media" />
  */}

  {/* WebPage Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": "https://webnestmedia.com/lead-generation",
      "name": "Lead Generation Services | WebNest Media",
      "description":
        "Generate high-quality leads with targeted strategies. WebNest Media offers expert lead generation services in Gurgaon that drive real results.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://webnestmedia.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://webnestmedia.com/services",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Lead Generation",
            "item": "https://webnestmedia.com/lead-generation",
          },
        ],
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://webnestmedia.com/#organization",
        "name": "WebNest Media",
        "url": "https://webnestmedia.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://webnestmedia.com/assets/newlogo-CQU_gx5-.svg",
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9696964606",
          "contactType": "Customer Support",
          "email": "info@webnestmedia.com",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"],
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gurgaon Sector 48",
          "addressLocality": "Gurgaon",
          "addressRegion": "Haryana",
          "postalCode": "122004",
          "addressCountry": "IN",
        },
      },
      "mainEntity": {
        "@type": "Service",
        "serviceType": "Lead Generation",
        "provider": {
          "@type": "Organization",
          "@id": "https://webnestmedia.com/#organization",
          "name": "WebNest Media",
        },
        "areaServed": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gurgaon",
            "addressRegion": "Haryana",
            "addressCountry": "IN",
          },
        },
        "description":
          "Grow your business online with WebNest Media, a top digital marketing agency in Gurgaon offering SEO, PPC, SMM, and more.",
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://webnestmedia.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    })}
  </script>

  {/* FAQPage Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is lead generation and why is it important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Lead generation is the process of attracting and converting prospects into potential customers. It drives sales and business growth by filling your sales pipeline with qualified leads.",
          },
        },
        {
          "@type": "Question",
          "name": "What lead generation services does WebNest Media offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "We offer B2B and B2C lead generation through SEO, paid ads, email marketing, landing pages, and CRM integration for effective lead tracking and conversion.",
          },
        },
        {
          "@type": "Question",
          "name": "Can you target leads locally in Gurgaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes—our strategies are localized to Gurgaon, allowing you to reach high-intent leads in your area through hyper-targeted campaigns.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer lead qualification and nurturing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Absolutely. We qualify leads using scoring models and nurture them via email drip campaigns, retargeting, and personalized content for better conversions.",
          },
        },
      ],
    })}
  </script>
</Helmet>


      <div className='max-lg:mt-0 '>

        <div className="lgc1 relative">
          <HeroSection
            backgroundImage={topimage}
            heading="Lead Generation Company"
            highlight="in Gurgaon"
            paragraph="Unlock new growth with lead generation that brings in prospects who are ready to buy and eager to connect with your brand.
"
          />
        </div>

        <div className=" max-w-[1440px] lgc2 px-10 max-lg:px-4 flex flex-col justify-center items-center mx-auto">
          <h2 data-aos="fade-up" className='text-[52px] max-lg:text-[38px] lg:text-center mt-[60px] font-semibold'>
            B2B Lead Generation <span className='text-[#4CAF50] font-normal'><br />Services</span>
          </h2>
          <p data-aos="fade-up" className='text-lg max-md:text-base lg:text-center mt-[31px] lg:w-[70%] font-semibold mb-10'>
            In B2B lead generation, quality matters as much as quantity. We help you attract high-intent leads so you spend less time chasing and more time closing. It's smarter, faster, and more effective.
          </p>
           
        </div>

        <div className="lgc3 max-w-[1440px] mt-[50px] mx-auto flex max-lg:block flex-row px-10 max-lg:px-4 h-[555px] max-lg:h-auto justify-between">
        
          <div className="lgc3left w-[50%] max-lg:w-full">
            <h2 data-aos="fade-up" className='text-[48px] max-lg:text-[30px] font-semibold'>Explore Our B2B Lead Generation Agency</h2>
            <br />

           
            <div data-aos="fade-up" className="block lg:hidden float-right w-[50%] ml-4 mb-4">
                <LazyLoadImage src={image3} alt="lead generation agency" className='w-full h-auto object-contain' />
            </div>

            <p data-aos="fade-up" className='text-base font-[350]'>
              Explore our lead generation agency and discover how we turn interest into real business opportunities. At WebNest Media, we don't just deliver leads—we deliver the right leads. Our strategies are built to connect your business with decision-makers who are ready to engage. Whether you're targeting startups or enterprise clients, we tailor campaigns that bring in high-quality prospects, reduce wasted time, and boost your ROI
            </p>
            <br />
            <p data-aos="fade-up" className='text-base font-[350]'>
              From email outreach to LinkedIn marketing and performance-driven funnels, we use smart, data-backed methods that actually work. With us, lead generation isn't just a numbers game it's a strategy for real growth. Let's build a pipeline full of potential, not just empty contacts.
            </p>
            <br />
            <p data-aos="fade-up" className='text-base font-[350]'>
              In short, WebNest Media is the best B2B Lead Generation Services provider in Gurgaon and India, which can boost your business and more with our lead generation expert.
            </p>
          </div>

          
          <div data-aos="fade-up" className="lgc3right w-[50%] max-lg:hidden h-full flex items-center">
              <LazyLoadImage src={image3} alt="Proven Lead Generation Services" className='w-full h-full object-contain pb-[20px]' />
          </div>
        </div>


        <div className="lgc4 max-w-[1440px] px-10 max-lg:px-4 flex flex-col justify-center items-center  mx-auto mt-[60px] mb-[60px]">
          <h2 data-aos="fade-up" className='text-[48px] max-lg:text-3xl lg:w-[70%] lg:text-center mb-4 font-semibold'>
            Powering Your Pipeline with Proven Lead Generation Services
          </h2>
          <div data-aos="fade-up" className="  lg:py-12 w-full max-w-4xl mx-auto rounded-lg ">
            {accordionData.map((item, index) => (
              <div data-aos="fade-up" key={index} className="border-b  py-6">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left text-black text-lg focus:outline-none hover:text-[#4CAF50] transition-colors duration-300"
                >
                  <span>{item.title}</span>
                    <LazyLoadImage
  src={arrow}
  alt="Lead Generation Campaigns"
  className={`max-lg:h-8 max-lg:w-8 border rounded-full transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
/>

                </button>
                <div data-aos="" 
                  className={`grid transition-all duration-100 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-base text-gray-600 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col max-w-[1440px] px-10 max-lg:px-4 justify-center items-center mx-auto mt-[60px] mb-[96px]">
          <h2 data-aos="fade-up" className="text-[48px] max-lg:text-3xl lg:w-[80%] lg:text-center font-semibold leading-tight">
            Our Process for Lead Generation Campaigns <br className='lg:hidden'/>:From <span className=''>Discovery </span>to  <span className=''> Conversion </span>
          </h2>

          <div className="flex flex-col justify-end mt-[64px] max-lg:mt-[40px] gap-[20px] lg:w-[80%]">
            {[
              {
                number: '01',
                title: 'Understanding Your Ideal Customer Profile (ICP)',
                description:
                  'We collaborate with you to define the characteristics of your most valuable customers.',
              },
              {
                number: '02',
                title: 'Data-Driven Targeting',
                description:
                  'Utilizing advanced analytics, we identify prospects that match your ICP.',
              },
              {
                number: '03',
                title: 'Personalized Outreach',
                description:
                  'Crafting messages that resonate, we engage prospects through channels they prefer.',
              },
              {
                number: '04',
                title: 'Lead Qualification',
                description:
                  'Through continuous interaction and assessment, we ensure only the most promising leads are forwarded to your sales team.',
              },
            ].map((item, index) => (
              <div data-aos="fade-up" 
                className="flex justify-between items-start border-b gap-2 border-[#eee] py-[10px]"
                key={index}
              >
                <div className="flex-1 text-left text-[32px] max-lg:text-[20px] font-semibold text-[#252429]">
                  {item.title}
                </div>
                <div className="flex-2 text-left text-base max-lg:text-sm text-[#555] w-[50%]">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lgc5 mt-[40px] max-w-[1440px] flex flex-col px-10 max-lg:px-4 justify-center items-center mx-auto mb-24 max-lg:mb-10">
          <h2 data-aos="fade-up" className='text-[48px] max-lg:text-3xl  lg:w-[50%] text-center font-semibold'>Why Choose <span className='text-[#4CAF50]'>WebNest Media's</span> <br className='lg:hidden'/> Lead Generation?</h2>
          <div data-aos="fade-up" className="lgc5cards grid grid-cols-4 max-sm:grid-cols-1 gap-10  mt-20 max-lg:mt-14 ">
            {data.map((item, index) => (
              <div data-aos="fade-up" className="lgc5card flex flex-col items-center text-center max-lg:border max-lg:py-8 max-lg:shadow-md max-lg:rounded-md ">
                  <LazyLoadImage src={item.icon} alt={item.title} className='w-[50px] h-[50px] mb-9' />
                <h3 className='text-[24px] font-semibold mb-6'>{item.title}</h3>
                <p className='text-[16px] w-[80%]'>{item.content}</p>

              </div>
            ))}

          </div>
        </div>
      
        <div className="lgc7 mt-[96px] max-lg:mt-10 max-w-[1440px] mx-auto px-10 max-lg:px-4">
          <p className=" mb-[50px] font-medium text-[32px]  max-md:text-center leading-[40px] stroke-custom fill-custom">Lets address your <span className='text-[#409338]'>questions</span> today!</p>
          <Accordion></Accordion>
        </div>
      </div>

    </>
  );
};

export default Leadgeneration;