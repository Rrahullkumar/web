import React, { useState } from 'react';
import "./sem.css";
import SEM1 from './Resources/SEM1.svg';
import KeywordTargeting from './resources/KeywordTargeting.svg';
import PPC from './resources/tabone.svg';
import bid from './resources/bid.svg';
import analytics from "./resources/analytics.svg";
import ads from './resources/ads.svg';
import { Helmet } from 'react-helmet';
// import accordian from '../home/componnet/accordian.css'

import herom from "./resources/heroimage.png";
import semlogo from "./resources/semlogo.svg";
import HeroSection from '../../components/Herosection/Herosection';

import icon1 from "./resources/icon1.svg";
import icon2 from "./resources/icon2.svg";
import icon3 from "./resources/icon3.svg";
import icon4 from "./resources/icon4.svg";

import tabone from "./resources/tabone.svg"


import googleIcon from "./resources/gads.svg";
import metaIcon from "./resources/mads.svg";
import shopifyIcon from "./resources/sads.svg";
import remarketingIcon from "./resources/rads.svg";
import youtubeIcon from "./resources/yads.svg";
import displayIcon from "./resources/dads.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const adsData = [
  { icon: googleIcon, label: "Google ads" },
  { icon: metaIcon, label: "Meta Ads" },
  { icon: shopifyIcon, label: "Ecommerce ads" },
  { icon: remarketingIcon, label: "Remarketing ads" },
  { icon: youtubeIcon, label: "Youtube ads" },
  { icon: displayIcon, label: "Display ads" },
];


import redlady from "./resources/redlady.svg"
import Newcontact from '../../components/Newcontact/Newcontact';
import { Link } from 'react-router-dom';


  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Sem = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [



    {
      id: 1,
      label: 'Pay-Per-Click (PPC)',
      image: PPC,
      description: (
        <>


          <section className='pb-[96px]'>


            <div className='flex flex-row lg:h-[300px] items-center justify-between gap-[131px] max-lg:flex-col max-lg:gap-5'>

              <div className='w-full '>
                  <LazyLoadImage src={PPC} alt="Pap Per click" />
              </div>

              <div className=' '>

                <h6 className='text-[32px] max-md:text-[28px] leading-snug  text-[#000000] py-4 font-semibold  '> What is Pay Per Click Advertising? </h6>
                <p className='text-base leading-7 text-[#000000] font-normal '>Pay-per-click is a form of online advertisement where advertisers pay a fee for each individual per click. It is the process of paying for website traffic rather than acquiring traffic organically through SEO. Pay-per-click ads appear on social media sites like Facebook and Instagram as well as search engines like Google and Bing, allowing companies an opportunity to target specific regions based on certain keywords and locations.</p>
              </div>
            </div>

            <p className=' text-[32px] max-md:text-[28px]  mt-[74px] mb-18 max-md:mb-4 leading-snug  text-[#000000]  font-semibold'>Top Reasons to Invest in Pay Per Click Marketing</p>


            <p className='text-base leading-7 text-[#000000] font-normal mb-8 '>Pay Per Click is one of the fastest and smartest ways to get in front of potential customers that are already looking for what you already provide. The following are just a few of the obvious benefits:</p>

            <div className="emc4cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-[1400px] mx-auto lg:items-stretch">

              <div className="emcard4 flex flex-col items-center text-center p-6 justify-between max-lg:border rounded-2xl">
                <div className="mb-6">
                    <LazyLoadImage src={icon1} alt=" Instant Exposure" className="w-16 h-16 object-contain" />
                </div>
                <div className="flex flex-col items-center gap-4 flex-1">
                  <h3 className="text-2xl font-semibold text-center ">
                    Instant Exposure
                  </h3>
                  <p className="text-sm leading-relaxed text-center">
                    Your PPC advertisements will be live immediately as your campaign goes live. Meaning, you are getting immediate traffic and awareness versus SEO which gets noticed and found months later.
                  </p>
                </div>
              </div>

              <div className="emcard4 flex flex-col items-center text-center p-6 justify-between max-lg:border rounded-2xl ">
                <div className="mb-6">
                    <LazyLoadImage src={icon2} alt="Specific Audience" className="w-16 h-16 object-contain" />
                </div>
                <div className="flex flex-col items-center gap-4 flex-1">
                  <h3 className="text-2xl font-semibold text-center">
                    Specific Audience
                  </h3>
                  <p className="text-sm leading-relaxed text-center">
                    The only time PPC will show your advertisements is when customers are searching for keywords and phrases that match your advertising. Essentially, PPC is able to target the correct audience by their search intent, location, and demographics.
                  </p>
                </div>
              </div>

              <div className="emcard4 flex flex-col items-center text-center p-6 justify-between max-lg:border rounded-2xl">
                <div className="mb-6">
                    <LazyLoadImage src={icon3} alt="Budgeting" className="w-16 h-16 object-contain" />
                </div>
                <div className="flex flex-col items-center gap-4 flex-1">
                  <h3 className="text-2xl font-semibold text-center">
                    Budgeting
                  </h3>
                  <p className="text-sm leading-relaxed text-center">
                    You can control your own budget, and you only pay for clicks, which makes managing your advertising budget that much easier.
                  </p>
                </div>
              </div>

              <div className="emcard4 flex flex-col items-center text-center p-6 justify-between max-lg:border rounded-2xl mb-10">
                <div className="mb-6">
                    <LazyLoadImage src={icon4} alt="Measurable" className="w-16 h-16 object-contain" />
                </div>
                <div className="flex flex-col items-center gap-4 flex-1">
                  <h3 className="text-2xl font-semibold text-center">
                    Measurable
                  </h3>
                  <p className="text-sm leading-relaxed text-center">
                    With PPC, you'll get to track and analyze every click, it allows you to optimize your campaigns for every spent.
                  </p>
                </div>
              </div>

            </div>
            <p className='text-sm leading-relaxed text-center'>WebNest Media is trusted PPC company in Gurgaon that helps businesses get more leads and sales through smart PPC <br className='max-lg:hidden' /> campaigns. As a results-driven PPC agency in Gurgaon, we manage everything from Google Ads to remarketing, so you get <br className='max-lg:hidden' />  the best return on your ad spend. Here are the following PPC services that we provides:  </p >

            <div className="w-full px-4 py-10">
              <div className="w-[100%] mx-auto ">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
                  {adsData.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center space-y-2"
                    >
                        <LazyLoadImage
                        src={item.icon}
                        alt={item.label}
                        className="w-[176px] h-[108px] max-md:w-[80px] max-md:h-[100px] object-contain"
                      />
                      <span className="text-sm text-gray-800 font-medium">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>



            <div className=" max-w-[1440px] w-[100%] max-lg:pt-10 mx-auto pt-[96px] pb-[10px] max-lg:pl-[16px] max-lg:pr-[16px] ">

              <h2 id="c2headingleft" className="c2heading">
                Why Opt WebNest Media for  <br className='max-lg:hidden' />  PPC Ads?
              </h2>


              <div className='flex max-lg:flex-col gap-[135px] max-lg:gap-[46px]'>

                <div className="w-[60%] max-lg:w-[100%] ">


                  <p id="" className='text-base mt-[20px] font-manrope  '>
                    When it comes to running successful PPC campaigns, experience and strategy make all the difference. That’s why so many businesses choose WebNest Media is a leading PPC company in Gurgaon, India — to manage their paid ads. Our team of certified specialists brings years of experience and deep industry know-how. Whether you need YouTube Ads, Google Ads, display ads, or remarketing, we know how to create campaigns that drive real results.



                  </p>
                  <p id="" className='text-base mt-[20px] font-manrope '>
                    As a trusted PPC agency in Gurgaon, we don’t believe in “one-size-fits-all” strategies. We take time to understand your business, target audience, and goals so we can design campaigns that actually convert. That’s why many clients call us the best PPC company in Gurgaon, we deliver what we promise.



                  </p>

                  <p id="" className='text-base mt-[20px] font-manrope '>

                    With our expert PPC services in Gurgaon, you get full transparency, regular performance reports, and ongoing optimization — all focused on giving you the best ROI. Whether you’re looking for a PPC expert in Gurgaon for lead generation or want to scale your business with the best PPC services Gurgaon has to offer, WebNest Media is here to help you grow.  </p>

                </div>


              </div>


            </div>
          </section>


        </>
      )

    },





    {
      id: 2,
      label: 'Bid Management',
      image: bid,
      description: (
        <>
          <section className='pb-[96px]'>
            <div className='flex flex-row items-center justify-center gap-[131px] max-lg:flex-col max-lg:gap-5'>
              <div className='w-full'>
                  <LazyLoadImage src={bid} alt="" className='w-full' />
              </div>

              <div>
                <h6 className='text-[32px] max-md:text-[28px] leading-snug text-[#000000] mb-[8px] font-semibold'>
                  What is Bid Management?
                </h6>
                <p className='text-base leading-7 text-[#000000] font-normal'>
                  Bid management controls the amount you’re willing to pay for your ads on platforms like Google Ads and Facebook. It’s about spending smarter, optimizing in real-time, and ensuring your ads show to the right people at the right time without wasting budget.
                </p>
              </div>
            </div>

            <p className='text-[32px] max-md:text-[28px] mt-[74px] mb-6 max-md:mb-3 lg:leading-snug text-[#000000] font-semibold'>
              How Bid Management Boosts Your Campaign Performance
            </p>

            <p className='text-base leading-7 text-[#000000] font-normal mb-8 max-md:mb-4'>
              Smart bid management improves ad visibility, click-through rates, and conversions while minimizing wasted spending.
            </p>

            <p className='text-[32px] max-md:text-[28px] mt-[74px] mb-6 leading-snug text-[#000000] font-semibold'>
              Types of Bidding Strategies We Use
            </p>

            <ul className='list-disc pl-5 text-base leading-7 text-[#000000] font-normal space-y-4 mb-8'>
              <li>✓ Manual CPC Bidding</li>
              <li>✓ Enhanced CPC</li>
              <li>✓ Target CPA</li>
              <li>✓ Target ROAS</li>
              <li>✓ Maximize Clicks</li>
            </ul>

            <h4 className='w-[100%] mt-[74px] mb-[28px] text-center text-[52px] max-lg:text-[28px] leading-snug text-[#000000] font-semibold'>
              Why Partner with WebNest Media for Bid Management?
            </h4>

            <p className='text-sm leading-relaxed text-center max-w-[800px] mx-auto'>
              WebNest Media’s bid management team actively monitors and adjusts your bids daily to maximize performance. We help you achieve more clicks, better conversions, and a higher return on your ad spend — across Google, Facebook, YouTube, and more.
            </p>
          </section>
        </>
      ),
    },
    {
      id: 3,
      label: 'Performance Tracking and Analytics',
      image: analytics,
      description: (
        <>
          <section className='pb-[96px]'>
            <div className='flex flex-row items-center justify-between gap-[131px] max-lg:flex-col max-lg:gap-5'>
                <LazyLoadImage src={analytics} alt="analytics-image" className='w-full' />
              <div>
                <h6 className='text-[28px] leading-snug text-[#000000] mb-[8px] font-semibold'>
                  What is Performance Tracking and Analytics?
                </h6>
                <p className='text-base leading-7  text-[#000000] font-normal'>
                  Performance tracking shows which ads work, which keywords drive traffic, and what type of audience engages with your content. It’s about using real data — not guesswork — to grow your business with smarter marketing decisions.
                </p>
              </div>
            </div>

            <p className='text-[28px]  leading-snug text-[#000000] font-semibold'>
              <br className='lg:hidden'/>
              Why Performance Tracking is Crucial

            </p>

            <p className='text-base leading-7 text-[#000000] font-normal mb-8'>
              Without tracking and analytics, you can waste budget and miss opportunities. Tracking helps you optimize ad spending, fix weak areas, and maximize ROI.
            </p>

            <p className='text-[32px]  max-md:text-[28px] mb-6 leading-snug text-[#000000] font-semibold'>
              Tools We Use for Accurate Insights
            </p>

            <ul className='list-disc pl-5 text-base leading-7 text-[#000000] font-normal space-y-4 mb-8'>
              <li>✓ Google Analytics</li>
              <li>✓ Google Ads Conversion Tracking</li>
              <li>✓ Facebook Pixel</li>
            </ul>

            <h4 className='w-[100%] mt-10 mb-[28px] text-center text-[52px] max-lg:text-[28px] leading-snug text-[#000000] font-semibold'>
              Why Choose WebNest Media for Performance Tracking and Analytics?
            </h4>

            <p className='text-sm leading-relaxed text-center max-w-[800px] mx-auto'>
              WebNest Media sets up advanced tracking for Google Ads, social media, and your website. We turn your performance data into actionable steps that improve ROI and drive growth — no guesswork, just results.
            </p>
          </section>
        </>
      ),
    },
    {
      id: 4,
      label: 'Ad Creation and Optimization',
      image: ads,
      description: (
        <>
          <section className='pb-[96px]'>
            <div className='flex flex-row items-center justify-center gap-[131px] max-lg:flex-col max-lg:gap-5'>
              <div className='w-full'>
                  <LazyLoadImage src={ads} alt="add creation and Optimization" className='w-full' />
              </div>

              <div>
                <h6 className='text-[32px] max-md:text-[28px] leading-snug text-[#000000] mb-[8px] font-semibold'>
                  What is Ad Creation and Optimization?
                </h6>
                <p className='text-base leading-7 text-[#000000] font-normal'>
                  Ad creation is about designing powerful ads with catchy headlines, engaging visuals, and the right audience targeting. Optimization means continuously testing and refining your ads to maximize clicks, conversions, and ROI.
                </p>
              </div>
            </div>

            <p className='text-[32px] max-md:text-[28px] mt-[74px] mb-6 leading-snug text-[#000000] font-semibold'>
              Continuous Optimization for Maximum ROI
            </p>

            <ul className='list-disc pl-5 max-md:pl-3 text-base leading-7 text-[#000000] font-normal space-y-4 mb-8'>
              <li>✓ Ad Creatives: Custom visuals that grab attention</li>
              <li>✓ Headlines and CTAs: Copy that drives action</li>
              <li>✓ Target Audiences: Laser-focused audience targeting</li>
              <li>✓ Bidding Strategies: Smart bid adjustments for peak performance</li>
              <li>✓ Landing Pages: High-converting, fast-loading pages</li>
            </ul>

            <h4 className='w-[100%] mt-[74px] mb-[28px] max-md:text-[28px] text-center text-[52px]  leading-snug text-[#000000] font-semibold'>
              Why WebNest Media for Ad Creation and Optimization?
            </h4>

            <p className='text-sm leading-relaxed text-center max-w-[800px] mx-auto'>
              At WebNest Media, we go beyond pretty ads. We build high-impact campaigns that lower costs and maximize conversions. If you’re ready to make your ad budget work harder, we’re here to help.
            </p>
          </section>
        </>
      ),
    },

    {
      id: 5,
      label: 'Keyword Targeting',
      image: KeywordTargeting,
      description: (
        <>
          <section className='pb-[96px]'>
            <div className='flex flex-row items-center justify-center gap-[131px] max-lg:flex-col max-lg:gap-5'>
              <div className='w-full'>
                  <LazyLoadImage src={KeywordTargeting} alt="KeywardTargeting" className='w-full' />
              </div>

              <div>
                <h6 className='text-[32px] leading-snug text-[#000000] mb-[8px] font-semibold'>
                  What is Keyword Targeting?
                </h6>
                <p className='text-base leading-7 text-[#000000] font-normal'>
                  Keyword targeting ensures your website or ads appear when people search for relevant terms. By using the exact keywords your potential customers are searching for, you can bring more of the right audience to your website—whether it's a product, service, or helpful content.
                </p>
                <p className='text-base leading-7 text-[#000000] font-normal mt-4'>
                  Keyword targeting is the key to connecting with users who are already looking for what you offer.
                </p>
              </div>
            </div>

            <p className='text-[32px] mt-[74px] mb-6 leading-snug text-[#000000] font-semibold'>
              How Keyword Targeting Improves Your Ad Campaigns
            </p>

            <ul className='list-disc pl-5 text-base leading-7 text-[#000000] font-normal space-y-4 mb-8'>
              <li>✓ Higher Click-Through Rates (CTR): Your ads appear for more relevant searches.</li>
              <li>✓ Better Quality Traffic: Brings visitors more likely to convert.</li>
              <li>✓ Improved Ad Ranking: Boosts Quality Score and ad placement in Google Ads.</li>
            </ul>

            <p className='text-[32px] mt-[74px] mb-6 leading-snug text-[#000000] font-semibold'>
              Keyword Targeting Across Platforms
            </p>
            <ul className='list-disc pl-5 text-base leading-7 text-[#000000] font-normal space-y-2 mb-8'>
              <li>Search Engines (Google, Bing)</li>
              <li>Social Media</li>
              <li>Display Networks</li>
              <li>Video Platforms (YouTube)</li>
            </ul>

            <p className='text-[32px] mt-[74px] mb-6 leading-snug text-[#000000] font-semibold'>
              Benefits of Keyword Targeting
            </p>
            <ul className='list-disc pl-5 text-base leading-7 text-[#000000] font-normal space-y-4 mb-8'>
              <li>✓ Increased Relevance: Focus on users actively searching for your offering.</li>
              <li>✓ Improved ROI: Reach more likely-to-convert audiences efficiently.</li>
              <li>✓ Brand Awareness: Get discovered by people searching for your solutions.</li>
              <li>✓ Competitive Advantage: Target keywords your competitors may miss.</li>
            </ul>

            <h4 className='w-[100%] mt-[74px] mb-[28px] text-center text-[52px] max-lg:text-[38px] leading-snug text-[#000000] font-semibold'>
              Why WebNest Media for Keyword Targeting?
            </h4>

            <p className='text-sm leading-relaxed text-center max-w-[800px] mx-auto'>
              At WebNest Media, we build smart keyword targeting strategies that connect you to the right audience across Google, YouTube, Facebook, and display networks. We don’t guess — we deliver data-driven keyword targeting that generates clicks, leads, and conversions.
            </p>
          </section>
        </>
      ),
    },

  ];


  const [submitting, setSubmitting] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");


  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleSubmitsem = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setResponseMsg("");

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      service: formData.get("service"),
    };
    console.log("Form data:", data); // Log the form data for debugging
    try {
      const response = await fetch("https://webnestmedia.com/webnestmediacontac.php/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setResponseMsg(result.message || "Form submitted successfully.");
        e.target.reset(); // ✅ Clear form fields
      } else {
        const errorText = await response.text();
        setResponseMsg("Submission failed: " + errorText);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResponseMsg("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const statsData = [
    { number: '21,3456', label: 'Organic Traffic Growth' },
    { number: '13,200+', label: 'Keyword Rankings' },
    { number: '98/100', label: 'Speed & UX Score' },
    { number: '231,580+', label: 'Leads Generated' },
  ];


  const [activeTab1, setActiveTab1] = useState("dashboard");

  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "profile", label: "Profile" },
    { id: "settings", label: "Settings" },
  ];

  const tabContent = {
    dashboard:
      "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.",
    profile:
      "The reading of all good books is like a conversation with the finest minds of past centuries.",
    settings: "Comparing yourself to others is the thief of joy.",
  };


  return (
    <>

      <Helmet>
        <title>Best Search Engine Marketing Agency in Gurgaon | WebNest Media</title>
        <meta
          name="description"
          content="WebNest Media is the best Search Engine Marketing agency in Gurgaon. We boost your Google visibility, traffic & leads with expert PPC management."
        />
        <meta name="keywords" content="Top SEM Agency, Top Search Engine Marketing Agency" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebNest Media" />
        <link rel="canonical" href="https://webnestmedia.com/search-engine-marketing" />

    <meta property="og:title" content="Best Search Engine Marketing Agency in Gurgaon | WebNest Media " />
  <meta property="og:description" content="WebNest Media is the best Search Engine Marketing agency in Gurgaon. We boost your Google visibility, traffic & leads with expert PPC management." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://webnestmedia.com/search-engine-marketing" />
  <meta property="og:image" content="https://webnestmedia.com/assets/heroimage-h3UpqiFv.png" />
  <meta property="og:site_name" content="WebNest Media" />


        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://webnestmedia.com/search-engine-marketing#service",
                "name": "Search Engine Marketing",
                "description": "WebNest Media offers expert Search Engine Marketing services to help businesses increase online visibility, drive quality traffic, and grow leads through PPC campaigns.",
                "serviceType": "Search Engine Marketing",
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
                "url": "https://webnestmedia.com/search-engine-marketing"
              },
              {
                "@type": "WebPage",
                "@id": "https://webnestmedia.com/search-engine-marketing#webpage",
                "url": "https://webnestmedia.com/search-engine-marketing",
                "name": "Search Engine Marketing Services - WebNest Media",
                "description": "Boost your business with powerful SEM services from WebNest Media. Get expert Google Ads management and lead generation strategies tailored for you."
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://webnestmedia.com/search-engine-marketing#breadcrumb",
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
                    "name": "Search Engine Marketing",
                    "item": "https://webnestmedia.com/search-engine-marketing"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://webnestmedia.com/search-engine-marketing#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is Search Engine Marketing (SEM)?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Search Engine Marketing (SEM) is a digital marketing strategy used to increase a website’s visibility on search engines through paid advertising."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does SEM help my business?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "SEM helps your business appear at the top of search engine results, drives targeted traffic, and delivers faster ROI through Google Ads."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why choose WebNest Media for SEM?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We’re a results-driven SEM agency in Gurgaon with experience in managing high-performing ad campaigns tailored to your business goals."
                    }
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>
      <div className='' >

        <HeroSection
          backgroundImage={herom}
          heading="Search Engine Marketing Agency"
          highlight="in Gurgaon"
          paragraph="Grow your business with targeted Google Ads and smart SEM strategies from Gurgaon’s trusted Search Engine Marketing Agency."
        />


        <div className=" max-w-[1440px] w-[100%] mx-auto pt-[96px] max-lg:pt-10 pb-16 max-lg:pb-10 pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] ">

          <h2 data-aos="fade-up" className="text-[48px] max-lg:text-3xl font-semibold">
            What is Search Engine   <br className='max-lg:hidden' /> Marketing?
          </h2>


          <div className='flex max-lg:flex-col gap-[135px] max-lg:gap-[46px]'>

            <div className="w-[60%] max-lg:w-[100%] ">


              <p data-aos="fade-up" id="" className='text-base mt-[20px] font-manrope '>
                SEM is a digital marketing tactic focused on increasing a website’s presence on search engines through paid advertising. Different types of websites or online businesses can use search engine marketing services in different ways to improve brand awareness.    In today's digital world, every business whether big or small, requires an online visibility on Google. Every day millions of people reach for search engines. The goal of having a website on Google's first page has grown into a necessity. Selecting the top SEO company in Gurgaon is a crucial step for your growth.
              </p>
            </div>
            <div data-aos="fade-up" className="max-w-[440px] w-[100%] max-md:w-[90%] max-md:mb-8 flex flex-col gap-[26px] justify-center ">
                <LazyLoadImage src={semlogo} alt='WebNest Logo' />
            </div>
          </div>
          <div data-aos="fade-up" className=" flex gap-2 mt-8 max-lg:mt-12 ">
            
            <button
              onClick={() => scrollToSection("semservice")}
            className='c2greenbutton'>Learn More</button>

            <Link to="/contact-us">  

            <button className='c2whitebutton'>Contact Us</button>

             </Link>
          </div>

        </div>


        <div  className=" max-w-[1440px] w-[100%] mx-auto container_2">
          <h2 data-aos="fade-up" className='text-[40px] max-lg:text-3xl text-black  text-left mb-3 font-semibold'>Why choose WebNest Media for Search Engine Marketing Campaign?</h2>
          <div className='c2_para'>
            <p data-aos="fade-up" style={{ paddingTop: '10px', paddingBottom: '10px', fontSize: '16px' }}>
              WebNest Media is the search engine marketing company india and offers several benefits that set them apart from other agencies. Here are a few reasons why you might want to consider them:
            </p>
            <ul className='c2_list'>
              <li data-aos="fade-up" className='c2_list_item'>
                <div className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></div><b>Specialist Search Engine Marketing: </b> We have a team of professionals experienced in creating and optimizing paid search campaigns. Their
                expertise could help improve ad performance and maximize ROI.
              </li>
              <li data-aos="fade-up" className='c2_list_item'>
                <div className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></div><b> Customized Strategies: </b>We will provide top-notch search engine marketing strategies that are aligned with your business
                goals, focusing on specific keywords, targeting methods, and ad copy that will resonate with your audience.
              </li>
              <li data-aos="fade-up" className='c2_list_item'>
                <div className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></div><b>Comprehensive Services: </b> SEM is more than just pay-per-click (PPC) ads; it's about integrating your strategy with SEO,
                landing page optimization, and continuous testing. WebNest Media may offer a holistic approach that addresses all
                these areas.
              </li>
              <li data-aos="fade-up" className='c2_list_item'>
                <div className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></div><b>Up-to-Date with Trends: </b> The world of SEM is constantly evolving. WebNest Media likely stays updated with the latest
                trends and strategies to keep your campaigns ahead of the competition. We use different types of search engine
                marketing tools to stay updated.
              </li>
              <li data-aos="fade-up" className='c2_list_item'>
                <div className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></div><b>Conversion-Focused:</b> WebNest Media could emphasize not only driving traffic but also increasing conversions. Whether it's
                purchases, leads, or other goals, our team focuses on improving conversion rates for better overall campaign success.
              </li>
              <li data-aos="fade-up" className='c2_list_item'>
                <div className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></div><b>Experience with Various Platforms:</b> Our team is full of experience with major SEM platforms like Google Ads, Bing Ads,
                and other search networks, offering flexibility depending on your audience and objectives.
              </li>
            </ul>
          </div>
        </div>


        <section className="bg-[#EFF4EE] pb-[72px]  flex flex-col items-center justify-center max-md: ">

          <div className='max-w-[1440px] w-[100%] mx-auto text-center pl-[40px] pr-[40px]  max-md:pl-[16px] max-md:pr-[16px]' >

            <h2 data-aos="fade-up" style={{ color: 'black', fontSize: 32, fontWeight: 600, paddingBottom: 72, paddingTop: 72 }}>Your <span className='highlight'>Success</span> is our <span className='highlight'>Mission</span></h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {statsData.map((item, index) => (
                <div data-aos="fade-up"
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


        <section>
          <div className="max-w-[1440px] w-[100%] mx-auto pt-[96px] max-md:pt-10 pb-[70px] pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px]">

            <div className='flex max-lg:flex-col gap-[135px] max-lg:gap-[46px]'>

              {/* Left Section */}
              <div className="lg:w-[60%] max-lg:w-[100%] order-1">

                <h2 data-aos="fade-up" id="" className="text-[48px] max-lg:text-3xl font-semibold">
                  Top Search Engine Marketing Company in Gurgaon
                </h2>

                {/* Image should come here on mobile */}
                <div data-aos="fade-up" className="max-w-[440px] w-[100%] flex flex-col gap-[26px] justify-center max-lg:items-center max-lg:mx-auto lg:hidden mt-6">
                    <LazyLoadImage src={redlady} alt="Top Sem" className='mx-auto w-[70%]' />
                </div>

                <p data-aos="fade-up" id="" className='text-base mt-[36px] font-manrope'>
                  You have come to the correct place if you are in search of the best search engine marketing agency based out of Gurgaon. At WebNest Media, we believe every business needs a solid and results-driven digital strategy to stand out in a venture that is cutthroat in terms of competition for space online. We provide the best SEM agency according to your digital marketing objectives associated with your business’ needs—whether you are looking for brand awareness, qualified traffic, speed of conversions, or whatever your goals may be, WebNest Media provides the best SEM services you're looking for!
                </p>

                <p data-aos="fade-up" id="" className='text-base mt-[20px] font-manrope'>
                  Our certified professionals with years of industry knowledge put forth modern-day techniques to get your business quantifiable, identifiable and worthwhile results for potential consumers. We run a cost-effective, highly targeted paid and/or social campaign on your behalf and manage every aspect of your search engine marketing spend. When you partner with WebNest Media, you're partnering with the best SEM agency that genuinely cares about helping your business grow online and be successful in achieving its objectives!
                </p>

              </div>

              {/* Image - only for large screens */}
              <div data-aos="fade-up" className="max-w-[440px] w-[100%] flex flex-col gap-[26px] justify-center max-lg:items-center max-lg:mx-auto max-lg:hidden order-2">
                  <LazyLoadImage src={redlady} alt='Search-Engine-Marketing-Company-in-Gurgaon' className='mx-auto w-[70%]' />
              </div>

            </div>

          </div>
        </section>


        <section  id="semservice"
        className='max-w-[1440px] w-[100%]  mx-auto pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px]'>


          <div className="max-w-[1440px]    w-full mx-auto mt-10 flex justify-between gap-4 overflow-x-auto whitespace-nowrap text-gray-700 scrollbar-hide  ">
            {tabsData.map((tab, index) => (


              <button 
                key={tab.id}
                onClick={() => handleTabClick(index)}
                className={` cursor-pointer transition-colors duration-300 text-center min-w-fit
        
        ${activeTab === index
                    ? ' bg-[#3e8e41]  text-[white] py-4 px-4 '
                    : ' border-transparent  py-2 px-4   border border-[#3e8e41]  text-[#3e8e41] bg-white '
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className=" justify-center mx-auto text-gray-700 flex flex-col  border-none ">

            <div className="pt-[25px] ">
              {tabsData[activeTab].description}

            </div>

          </div>

        </section>

   <div className='mb-[24px]'>
          <Newcontact/>
        </div>

        

        <div className="FAQS max-w-[1440px] w-[100%] mx-auto">

          <h2 className="text-[#409338] font-bold text-[40px] leading-[40px]  max-md:text-[28px] max-md:leading-[28px] text-center stroke-custom fill-custom">Let's address your questions today</h2>
          <div className="accordion-wrapper-columns">
            {/* Left Column */}
            <div className="accordion-column">
              <div className="accordion">
                <input type="checkbox" id="left-1" />
                <label className="accordion-label" htmlFor="left-1">
                  What is Search Engine Marketing (SEM)?
                </label>
                <div className="accordion-content">
                  <p>
                    Search Engine Marketing (SEM) is a form of online marketing that aims to increase a
                    website’s visibility on search engine results pages (SERPs). It involves paid
                    strategies, like pay-per-click (PPC) advertising, to ensure a website appears at the top
                    of search results for relevant keywords.
                  </p>
                </div>
              </div>

              <div className="accordion">
                <input type="checkbox" id="left-2" />
                <label className="accordion-label" htmlFor="left-2">
                  What are the benefits of Search Engine Marketing?
                </label>
                <div className="accordion-content">
                  <p><b>Increased Visibility:</b> Your site appears at the top of search results.</p>
                  <p><b>Targeted Traffic:</b> Ads reach users actively searching for the offerings.</p>
                  <p><b>Measurable Results:</b> Track and adjust campaigns in real-time.</p>
                  <p><b>Cost-Effective:</b> Only pay when someone clicks on the advertisement.</p>
                </div>
              </div>

              <div className="accordion">
                <input type="checkbox" id="left-3" />
                <label className="accordion-label" htmlFor="left-3">
                  How does SEM differ from SEO?
                </label>
                <div className="accordion-content">
                  <p>
                    Both SEM and SEO (Search Engine Optimization) aim to raise a website's visibility on
                    search engines. SEM involves paid methods, like PPC ads, whereas SEO focuses on organic
                    strategies to improve rankings. SEO is a long-term approach, whereas SEM delivers
                    benefits instantly.
                  </p>
                </div>
              </div>

              <div className="accordion">
                <input type="checkbox" id="left-4" />
                <label className="accordion-label" htmlFor="left-4">
                  What is PPC (Pay-Per-Click) marketing in Search Engine Marketing?
                </label>
                <div className="accordion-content">
                  <p>
                    With the pay-per-click (PPC) model, marketers are charged a fee each time a user clicks
                    on their ad. It’s a key component of SEM, allowing advertisers to bid on keywords and
                    have their ads appear in the sponsored section of search results. Google Ads is one of
                    the most popular platforms for running PPC campaigns.
                  </p>
                </div>
              </div>

              <div className="accordion">
                <input type="checkbox" id="left-5" />
                <label className="accordion-label" htmlFor="left-5">
                  Why is keyword research important in SEM?
                </label>
                <div className="accordion-content">
                  <p>
                    Keyword research is crucial because it helps identify the search terms your target
                    audience uses. By selecting the right keywords, you ensure your ads are seen by people
                    actively interested in your offerings. This can improve campaign performance and boost
                    click-through rates (CTR).
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="accordion-column">
              <div className="accordion">
                <input type="checkbox" id="right-6" />
                <label className="accordion-label" htmlFor="right-6">
                  How does Google Ads work in SEM?
                </label>
                <div className="accordion-content">
                  <p>
                    Google Ads is a PPC platform that allows advertisers to bid on keywords targeting users
                    who search for terms related to their business. Ads appear in search results or across
                    Google’s network and are ranked based on bid amount, ad quality, and keyword relevance.
                  </p>
                </div>
              </div>

              <div className="accordion">
                <input type="checkbox" id="right-7" />
                <label className="accordion-label" htmlFor="right-7">
                  What is an Ad Rank in SEM?
                </label>
                <div className="accordion-content">
                  <p>
                    Ad Rank is a metric used by Google Ads to determine the position of your ad on the
                    results page. It’s based on your bid, Quality Score, ad relevance, and the expected
                    impact of ad extensions and formats. Higher Ad Rank gives better ad placements.
                  </p>
                </div>
              </div>

              <div className="accordion">
                <input type="checkbox" id="right-8" />
                <label className="accordion-label" htmlFor="right-8">
                  Can search engine marketing work for small businesses?
                </label>
                <div className="accordion-content">
                  <p>
                    Yes, SEM is effective for small businesses. It enables targeting specific audiences and
                    controlling ad spend, making it a cost-effective way to gain visibility. With keyword
                    optimization and budget control, small businesses can compete with larger competitors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Sem;