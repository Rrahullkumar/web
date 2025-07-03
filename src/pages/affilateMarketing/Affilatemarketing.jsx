import React, { useState, useRef, useEffect } from 'react'
import './Affilatemarketing.css'
import amc2img from './resources/amc2img.svg'

import amc3img from './resources/amc3img.png'
import Icons1 from './resources/Icons1.svg'
import Icons2 from './resources/Icons2.svg'
import Icons3 from './resources/Icons3.svg'
import Icons4 from './resources/Icon4.svg'
import image from './resources/Image.svg'
import { Helmet } from 'react-helmet'
import Conatctfrom from '../../components/contact/contactform';
import HeroSection from '../../components/Herosection/Herosection.jsx';
import { FiPhone } from "react-icons/fi";
import heroimage from './resources/heroimage.svg'
import Newcontact from '../../components/Newcontact/Newcontact.jsx'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom'

const Affilatemarketing = () => {

  const [text, setText] = useState('');
  const words = ['Conversion', 'Commission', 'Traffic'];
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
    { number: '100%', label: 'Performance Based' },
    { number: '2200+', label: 'Trusted Affiliates' },
    { number: '24/7', label: 'Real-Time Tracking' },
    { number: '100%', label: 'Managed Setup' },
  ];

  const affiliateMarketingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://webnestmedia.com/affiliate-marketing#service",
      "name": "Affiliate Marketing",
      "description": "WebNest Media offers performance-driven affiliate marketing services in Gurgaon to help brands expand reach and boost revenue through trusted affiliate networks, influencer partners, and ROI-focused campaigns.",
      "serviceType": "Affiliate Marketing",
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
      "url": "https://webnestmedia.com/affiliate-marketing"
    },
    {
      "@type": "WebPage",
      "@id": "https://webnestmedia.com/affiliate-marketing#webpage",
      "url": "https://webnestmedia.com/affiliate-marketing",
      "name": "Affiliate Marketing Services – WebNest Media",
      "description": "Maximize your digital reach with affiliate marketing services from WebNest Media. We manage partnerships, track performance, and scale campaigns for higher conversions and ROI through trusted affiliate networks."
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://webnestmedia.com/affiliate-marketing#breadcrumb",
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
          "name": "Affiliate Marketing",
          "item": "https://webnestmedia.com/affiliate-marketing"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://webnestmedia.com/affiliate-marketing#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is affiliate marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Affiliate marketing is a performance-based strategy where affiliates promote your product or service, and you pay them only when they deliver a lead or sale. It's a cost-effective way to scale online revenue."
          }
        },
        {
          "@type": "Question",
          "name": "How does WebNest Media manage affiliate campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We handle everything from affiliate recruitment, setup, and tracking to performance optimization and reporting—ensuring your campaign runs smoothly and profitably."
          }
        },
        {
          "@type": "Question",
          "name": "Is affiliate marketing suitable for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if you're looking to grow your brand without upfront ad spend. It works best for e-commerce, SaaS, and service-based businesses that can offer commissions to trusted partners or influencers."
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

        <title>Top Affiliate Marketing Agency in Gurgaon | WebNest Media</title>
        <meta name="description" content="WebNest Media: Top affiliate marketing agency in Gurgaon. We build and manage programs to ensure maximum ROI for your brand." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebNest Media" />
        <link rel="canonical" href="https://webnestmedia.com/affiliate-marketing" />

<meta property="og:title" content="Top Affiliate Marketing Agency in Gurgaon | WebNest Media" />
  <meta property="og:description" content="WebNest Media: Top affiliate marketing agency in Gurgaon. We build and manage programs to ensure maximum ROI for your brand." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://webnestmedia.com/affiliate-marketing" />
  <meta property="og:image" content="https://webnestmedia.com/assets/heroimage--fNAPUCz.svg" />
  <meta property="og:site_name" content="WebNest Media" />

         <script type="application/ld+json">
        {JSON.stringify(affiliateMarketingSchema)}
      </script>

      </Helmet>

      <div className=' w-[100%]'>

        <HeroSection
          backgroundImage={heroimage}
          heading="Affiiate Marketing Company"
          highlight="In Gurgaon"
          paragraph="Drive more sales and grow your brand with proven, performance-focused affiliate marketing strategies."
        />






        <div className="max-w-[1440px] w-full mx-auto px-[40px] max-lg:px-[16px] mt-[96px] max-lg:mt-10 mb-24 max-lg:mb-10">

  {/* Main Container */}
  <div className="flex flex-row max-lg:flex-col justify-between gap-24 max-lg:gap-10">

    {/* Left Section: Heading + Paragraph + List + Buttons */}
    <div className="lg:w-[60%] flex flex-col justify-start">

      {/* Heading */}
      <h2 data-aos="fade-up" className="text-[52px] max-lg:text-3xl max-lg:mb-[20px] lg:mb-8 font-semibold">
        Affiliate Marketing?
      </h2>

      {/* Mobile View Image */}
      <div className="lg:hidden w-full flex justify-center my-6">
          <LazyLoadImage src={amc2img} alt="Woman with laptop" className="max-lg:w-[80%]" />
      </div>

      {/* Paragraph */}
      <p data-aos="fade-up" className="text-base leading-relaxed">
        Affiliate marketing is a way for people or businesses to earn money by promoting someone else's products or services.
        You recommend something you trust—like a product, a tool, or even a course—and when someone buys it through your special link, you earn a commission.
      </p>
      <br />

      {/* Subheading */}
      <h3 data-aos="fade-up" className="text-xl font-semibold mb-4">It's a Win-Win:</h3>

      {/* Bullet Points */}
      <ul c lassName="text-base mb-12 leading-[160%]">
        <li data-aos="fade-up">• The company gets more sales.</li>
        <li data-aos="fade-up">• The customer gets what they're looking for.</li>
        <li data-aos="fade-up">• And you get paid for making the connection.</li>
      </ul>

      {/* Buttons */}
      {/* <div className="flex flex-row gap-4">
        <button className="p-3 bg-[#4CAF50] rounded-lg text-white">Learn More</button>
        <button className="p-3 border border-[#4CAF50] text-[#4CAF50] rounded-lg">Contact Us</button>
      </div> */}


      

    <div className="flex gap-3 mt-8">

           
            <button data-aos="fade-up"
              onClick={() => scrollToSection("affilatemarketing")}
            
            className='bg-[#4CAF50] text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#4CAF50] border border-[#4CAF50] transition'>Learn More</button>
      
      
      
        <Link to="/contact-us">
            <button data-aos="fade-up" className='border border-[#4CAF50] text-[#4CAF50] px-6 py-3 rounded-md hover:bg-[#4CAF50] hover:text-white transition'>Contact Us</button>
         
        </Link>
         
          </div>
    </div>

    {/* Right Section: Image Vertically Centered on Desktop */}
    <div  className="lg:w-[40%] lg:flex hidden justify-center items-center">
        <LazyLoadImage data-aos="fade-up" src={amc2img} alt="Woman with laptop" />
    </div>

  </div>

</div>
 




        <div className="mt-[96px] max-lg:mt-10 max-lg:[30px] max-w-[1440px] w-[100%] px-[40px] max-lg:px-[16px] mx-auto">


          <div className="">
            {/* Heading and Description */}
            <div className="flex flex-col lg:items-end lg:mb-[52px] lg:translate-y-24">
              <h2 data-aos="fade-up" className="text-[52px] max-lg:text-3xl font-semibold mb-12 max-lg:mb-4 lg:text-right">Affiliate Marketing Types</h2>
              <p data-aos="fade-up"className="text-base leading-relaxed lg:text-right lg:w-[60%]">
                Affiliate marketing is a way for people or businesses to earn money by promoting someone else's products or services.
                You recommend something you trust—like a product, a tool, or even a course—and when someone buys it through your special link, you earn a commission.
              </p>
            </div>

            {/* Content Section */}
            <div data-aos="fade-up" className="flex max-lg:flex-col justify-between lg:Lgap-5 items-center">
              {/* Image */}
              <div data-aos="fade-up" className="max-lg:mb-[40px] flex justify-center max-lg:lg:w-[40%]">
                  <LazyLoadImage src={amc3img} alt="Affiliate Marketing Illustration" className="lg:mb-[100px]" />
              </div>

              {/* Cards */}
              <div className="flex flex-col gap-[20px] w-full lg:w-[60%]">

                {/* Card 1 */}
                <div data-aos="fade-up" className="flex max-lg:flex-col justify-between items-start border-b border-[#eee] py-[10px] gap-4">
                  <div className="flex gap-4 items-start">
                    <span className="text-[18px] max-md:mt-1 font-semibold text-[#888]">01</span>
                    <div className="text-left text-[28px] max-md:text-[26px] font-semibold">
                      Unattached Affiliate Marketing
                    </div>
                  </div>
                  <div className="text-left text-[16px] text-[#555] lg:w-[60%] max-lg:ml-[25px]">
                    No personal connection or niche authority. Affiliates run ads or share links without recommending the product. It’s simple but less trustworthy and often less effective.
                  </div>
                </div>

                {/* Card 2 */}
                <div data-aos="fade-up" className="flex max-lg:flex-col justify-between items-start border-b border-[#eee] py-[10px] gap-4">
                  <div className="flex gap-4 items-start">
                    <span className="text-[18px]  max-md:mt-1 font-semibold text-[#888]">02</span>
                    <div className="text-left text-[28px] max-md:text-[26px]  font-semibold">
                      Related Affiliate Marketing
                    </div>
                  </div>
                  <div className="text-left text-[16px] text-[#555] lg:w-[60%] max-lg:ml-[25px]">
                    Affiliates have a niche-related audience but haven’t used the product. They leverage their platform to drive traffic based on relevance, not personal experience.
                  </div>
                </div>

                {/* Card 3 */}
                <div data-aos="fade-up" className="flex max-lg:flex-col justify-between items-start border-b border-[#eee] py-[10px] gap-4">
                  <div className="flex gap-4 items-start">
                    <span className="text-[18px] max-md:mt-1  font-semibold text-[#888]">03</span>
                    <div className="text-left text-[28px] max-md:text-[26px]  font-semibold">
                      Involved Affiliate Marketing
                    </div>
                  </div>
                  <div className="text-left text-[16px] text-[#555] lg:w-[60%] max-lg:ml-[25px]">
                    Affiliates use the product and share real experiences. This builds strong trust and often boosts conversions, but it also means their reputation is tied to the product’s quality.
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div  className='bg-[#EFF4EE] '>
          <div className="amc4 max-lg:mt-10 pt-16 max-w-[1440px] w-[100%] px-[40px] max-lg:px-[16px] mx-auto ">
            <div className=" pb-[72px] text-center">
              <p data-aos="fade-up" style={{ color: '#EEC370', fontSize: 18 }}>The no. 1 Affiliate Marketing Service </p>
              <p data-aos="fade-up" className='text-[32px] max-md:text-3xl font-semibold mb-8'> Grow Smarter with <span className='highlight'>Affiliate Marketing</span></p>
              <p data-aos="fade-up" className='text-base mb-14'>
                Drive results through performance-based partnerships – only pay when you earn.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-2  ">
                {statsData.map((item, index) => (
                  <div data-aos="fade-up" className="stat-card " key={index}>
                    <p className="stat-number">{item.number}</p>
                    <p className="stat-label ">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div id="affilatemarketing"  className="mt-[96px] max-lg:mt-10 flex flex-col max-w-[1440px] w-[100%] px-[40px] max-lg:px-[16px] mx-auto justify-center items-center">
          <h2 data-aos="fade-up" className="trust-heading lg:mt-10 font-semibold text-6xl max-lg:text-3xl lg:w-[60%] lg:text-center lg:mb-12">
            <span className="highlight">WebNest</span> Media's Affiliate Marketing
          </h2>

          <p data-aos="fade-up" className="trust-subheading text-lg mb-[40px] lg:w-[90%] lg:text-center">
            In today’s competitive digital landscape, content is more than just information—it’s your voice,
            your story, and your most powerful marketing tool. At WebNest Media, we provide the content marketing services
            in Gurgaon designed to build your brand’s authority, drive traffic, and convert prospects into loyal customers.
            Whether you're a startup looking to create your first content campaign or an established business aiming to scale,
            our content marketing strategies are crafted with precision, creativity, and purpose.
          </p>

        </div>
        <div className=" max-lg:mb-10 max-w-[1440px] w-[100%] px-[40px] max-lg:px-[16px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-10 justify-items-center text-center px-4 lg:py-10">
            {/* Card 1 */}
            <div data-aos="fade-up" className="flex flex-col items-center p-6 text-center max-w-60 lg:border-r max-lg:border max-lg:rounded-xl ">

              <div className="w-[64px] h-[64px]">
                  <LazyLoadImage src={Icons1} alt="  Strategic Partner  Selection" className="w-full h-full mb-4" />
              </div>
              <h3 className="text-lg font-semibold mb-3 mt-9 text-[#222] text-[18px]">
                Strategic Partner <br /> Selection
              </h3>
              <p className="text-base text-[#444] leading-[1.6] ">
                We carefully choose and collaborate with top affiliate marketers who align with your brand and target audience.
              </p>
            </div>

            {/* Card 2 */}
            <div data-aos="fade-up" className="flex flex-col items-center p-6 text-center max-w-60 lg:border-r max-lg:border max-lg:rounded-xl ">
              <div className="w-[64px] h-[64px]">
                  <LazyLoadImage src={Icons2} alt="Customized Campaign Setup" className="w-full h-full mb-4" />
              </div>
              <h3 className="text-lg font-semibold mb-3 mt-9 text-[#222] text-[18px]">
                Customized Campaign Setup
              </h3>
              <p className="text-base text-[#444] leading-[1.6]">
                Every business is different. We tailor affiliate strategies that match your goals—whether it’s sales, sign-ups, or brand awareness.
              </p>
            </div>

            {/* Card 3 */}
            <div data-aos="fade-up" className="flex flex-col items-center p-6 text-center max-w-60 lg:border-r max-lg:border max-lg:rounded-xl">
              <div className="w-[64px] h-[64px]">
                  <LazyLoadImage src={Icons3} alt="Performance Tracking & Optimization" className="w-full h-full mb-4" />
              </div>
              <h3 className="text-lg font-semibold mb-3 mt-9 text-[#222] text-[18px]">
                Performance Tracking & Optimization
              </h3>
              <p className="text-base text-[#444] leading-[1.6]">
                We don’t just set it and forget it. Our team continuously tracks clicks, conversions, and ROI to optimize campaigns for better results.
              </p>
            </div>

            {/* Card 4 */}
            <div data-aos="fade-up" className="flex flex-col items-center p-6 text-center max-w-60 lg:border-r max-lg:border max-lg:rounded-xl ">
              <div className="w-[64px] h-[64px]">
                  <LazyLoadImage src={Icons4} alt="    Transparent  Reporting" className="w-full h-full mb-4" />
              </div>
              <h3 className="text-lg font-semibold mb-3 mt-9 text-[#222] text-[18px]">
                Transparent <br /> Reporting
              </h3>
              <p className="text-base text-[#444] leading-[1.6]">
                You get clear, detailed performance reports so you always know where your affiliate budget is going.
              </p>
            </div>

            {/* Card 5 */}
            <div data-aos="fade-up" className="flex flex-col items-center p-6  text-center max-w-60 max-lg:border max-lg:rounded-xl ">
              <div className="w-[64px] h-[64px]">
                  <LazyLoadImage src={Icons1} alt=" Ethical, Scalable Growth" className="w-full h-full mb-4" />
              </div>
              <h3 className="text-lg font-semibold mb-3 mt-9 text-[#222] text-[18px]">
                Ethical, Scalable <br /> Growth
              </h3>
              <p className="text-base text-[#444] leading-relaxed">
                We focus on long-term, sustainable affiliate partnerships—no spammy tactics, just proven strategies from the best affiliate marketing company in Gurgaon.
              </p>
            </div>
          </div>




        </div>




        <div className="max-w-[1440px] w-full mx-auto px-[40px] max-lg:px-[16px] mt-[96px] max-lg:mt-10 mb-24 max-lg:mb-10">

          {/* Main Container */}
          <div className="flex flex-row max-lg:flex-col justify-between gap-24 max-lg:gap-10">

            {/* Left Section: Heading + Paragraph (Stacked) */}
            <div className="lg:w-[60%] flex flex-col justify-start">
              {/* Heading */}
              <h2 data-aos="fade-up" className="text-[52px] max-lg:text-[34px] max-lg:mb-[20px] lg:mb-8 font-semibold">
                Can you make money with <span className="highlight">Affiliate Marketing?</span>
              </h2>

              {/* Mobile View Image */}
              <div data-aos="fade-up" className="lg:hidden w-full flex justify-center my-6">
                  <LazyLoadImage src={image} alt="Woman with laptop" className="max-lg:w-[80%]" />
              </div>

              {/* Paragraph */}
              <p data-aos="fade-up" className="text-base leading-relaxed">
                Yes, you can absolutely make money with affiliate marketing—and the numbers back it up. According to Statista, the global affiliate marketing market is projected to exceed $12 billion by 2027, with consistent year-over-year growth. Reports also show that around 15% to 30% of affiliate marketers earn between $1,000 and $5,000 per month, and the top 1% make over $100,000 annually.
                <br /><br />
                The concept is straightforward: you promote products or services using unique affiliate links and earn a commission for each sale made through your referral. Since there's no need to create your own products or handle inventory, affiliate marketing is a low-risk, scalable way to build income online.
              </p>
            </div>

            {/* Right Section: Image Vertically Centered */}
            <div className="lg:w-[40%] lg:flex hidden justify-center items-center">
                <LazyLoadImage src={image} alt="Woman with laptop" />
            </div>

          </div>
        </div>





        <Newcontact />
        <div className="amc6 max-w-[1440px] mx-auto px-10 max-lg:px-4 mt-24 max-lg:mt-10">

          <div className="accordian">
            <h2 className=''>Let's address your <span className='text-black '>questions </span>today</h2>
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
        </div>

      </div>

    </>
  )





}



export default Affilatemarketing



