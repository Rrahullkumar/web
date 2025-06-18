import React, { useState, useRef, useEffect } from 'react'
import './Affilatemarketing.css'
import amc2img from './resources/amc2img.svg'
 
import amc3img from './resources/amc3img.png'
import  Icons1 from './resources/Icons1.svg'
import Icons2 from './resources/Icons2.svg'
import Icons3 from './resources/Icons3.svg'
import Icons4 from './resources/Icon4.svg'
import image from './resources/Image.svg'
import { Helmet } from 'react-helmet'
import Conatctfrom from '../../components/contact/contactform';

import { FiPhone } from "react-icons/fi";

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
   
  return (

    <>   
    

<Helmet>

<title>Top Affiliate Marketing Agency in Gurgaon | WebNest Media</title>
<meta name="description" content="WebNest Media: Top affiliate marketing agency in Gurgaon. We build and manage programs to ensure maximum ROI for your brand." />
<meta name="robots" content="index, follow" />
<meta name="author" content="WebNest Media" />
<link rel="canonical" href="https://webnestmedia.com/affiliate-marketing" />

</Helmet>

    <div className='  mt-[120px] '>
      <div className="mb-[5px] max-w-[1440px] w-[100%] mx-auto">
        <h1 className=' text-[52px] max-lg:[38px] relative text-center text-[#4CAF50]'>
          Affiliate Marketing Agency<span className='text-black'><br />in Gurgaon</span>  
        </h1>

        {/* <h2 className="heading-styled relative h-[70px] text-[40px]  bg-yellow font-bold text-black px-4 py-1 mt-[15px] ml-[44%]  ">
          {text}
        </h2> */}




      </div>     



      <div className=" max-w-[1440px] w-[100%] mx-auto flex flex-row max-lg:flex-col-reverse px-[40px] max-lg:px-[16px] mt-[96px] justify-between">
        <div className="lg:w-[60%]">
          <h2 className="text-[52px] max-lg:[38px] mb-12">Affiliate Marketing?</h2>
          <p className="text-base ">
            Affiliate marketing is a way for people or businesses to earn money by promoting someone else's products or services. 
            You recommend something you trust—like a product, a tool, or even a course—and when someone buys it through your special link, you earn a commission.
          </p>
          <br />
          <h3 className="text-2xl font-semibold mb-4">It's a Win-Win:</h3>
          
          <ul className="text-base mb-12 leading-[160%] ">
            <li>• The company gets more sales.</li>
            
            <li>• The customer gets what they're looking for.</li>
            <li>• And you get paid for making the connection.</li>
          </ul>
            <div className="c2buttons">
            <button className='p-3 bg-[#4CAF50] rounded-lg text-white'>Learn More</button>
            <button className='p-3 border border-[#4CAF50] text-[#4CAF50] rounded-lg'>Contact Us</button>
          </div>
        </div>

        <div className="amc2-right">
          <img src={amc2img} alt="Woman with laptop" className="amc2-image justify-between" />
          {/* <div className="amc2-tag">SHARE WITH FOLLOWERS</div> */}
        </div>
      </div>


      <div className="mt-[96px] max-w-[1440px] w-[100%] px-[40px] max-lg:px-[16px] mx-auto">
        

        <div className="mt-[96px] px-[40px] ">
          {/* Heading and Description */}
          <div className="flex flex-col items-end mb-[52px] translate-y-20">
            <h2 className="text-[52px] max-lg:[38px] font-semibold mb-12 text-right">Affiliate Marketing Types</h2>
            <p className="text-base leading-relaxed text-right w-full max-w-[750px]">
              Affiliate marketing is a way for people or businesses to earn money by promoting someone else's products or services.
              You recommend something you trust—like a product, a tool, or even a course—and when someone buys it through your special link, you earn a commission.
            </p>
          </div>

          {/* Content Section */}
            <div className="flex max-lg:flex-col justify-between gap-5 items-center">
              {/* Image */}
              <div className="max-lg:mb-[40px] flex justify-center lg:w-[40%]">
                <img src={amc3img} alt="Affiliate Marketing Illustration" className="mb-[100px]" />
              </div>

              {/* Cards */}
              <div className="flex flex-col gap-[20px] w-full lg:w-[60%]">
                
                {/* Card 1 */}
                <div className="flex max-lg:flex-col justify-between items-start border-b border-[#eee] py-[10px] gap-4">
                  <div className="flex gap-4 items-start">
                    <span className="text-[18px] font-semibold text-[#888]">01</span>
                    <div className="text-left text-[28px] font-semibold">
                      Unattached Affiliate Marketing
                    </div>
                  </div>
                  <div className="text-left text-[16px] text-[#555] lg:w-[60%]">
                    No personal connection or niche authority. Affiliates run ads or share links without recommending the product. It’s simple but less trustworthy and often less effective.
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex max-lg:flex-col justify-between items-start border-b border-[#eee] py-[10px] gap-4">
                  <div className="flex gap-4 items-start">
                    <span className="text-[18px] font-semibold text-[#888]">02</span>
                    <div className="text-left text-[28px] font-semibold">
                      Related Affiliate Marketing
                    </div>
                  </div>
                  <div className="text-left text-[16px] text-[#555] lg:w-[60%]">
                    Affiliates have a niche-related audience but haven’t used the product. They leverage their platform to drive traffic based on relevance, not personal experience.
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex max-lg:flex-col justify-between items-start border-b border-[#eee] py-[10px] gap-4">
                  <div className="flex gap-4 items-start">
                    <span className="text-[18px] font-semibold text-[#888]">03</span>
                    <div className="text-left text-[28px] font-semibold">
                      Involved Affiliate Marketing
                    </div>
                  </div>
                  <div className="text-left text-[16px] text-[#555] lg:w-[60%]">
                    Affiliates use the product and share real experiences. This builds strong trust and often boosts conversions, but it also means their reputation is tied to the product’s quality.
                  </div>
                </div>

              </div>
            </div>
          </div>
      </div>

      <div className="amc4 mb-[96px] pt-16 max-w-[1440px] w-[100%] px-[40px] max-lg:px-[16px] mx-auto bg-[#EFF4EE] ">
          <div className=" pb-[72px] text-center">
          <p style={{ color: '#EEC370', fontSize: 18 }}>The no. 1 Affiliate Marketing Service </p>
          <p style={{ color: 'black', fontSize: 32, fontWeight: 600, marginBottom:15}}> Grow Smarter with <span className='highlight'>Affiliate Marketing</span></p>
          <p className='text-base mb-14'>
              Drive results through performance-based partnerships – only pay when you earn.
          </p>
              <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-2  ">
              {statsData.map((item, index) => (
                <div className="stat-card " key={index}>
                  <h2 className="stat-number">{item.number}</h2>
                  <p className="stat-label ">{item.label}</p>
                </div>
              ))}
            </div>
        </div>

      </div>
      <div className="flex flex-col max-w-[1440px] w-[100%] px-[40px] max-lg:px-[16px] mx-auto justify-center items-center">
        <h2 className="trust-heading mt-[40px] ml-[40px] font-semibold text-6xl leading-[72px] w-[60%] text-center mb-[52px]">
          <span className="highlight">WebNest</span> Media's Affiliate Marketing
        </h2>

        <p className="trust-subheading text-lg ml-[40px] mb-[40px] mr-[40px] w-[90%] text-center">
          In today’s competitive digital landscape, content is more than just information—it’s your voice,
          your story, and your most powerful marketing tool. At WebNest Media, we provide the content marketing services
          in Gurgaon designed to build your brand’s authority, drive traffic, and convert prospects into loyal customers.
          Whether you're a startup looking to create your first content campaign or an established business aiming to scale,
          our content marketing strategies are crafted with precision, creativity, and purpose.
        </p>
              
      </div>
      <div className=" mb-[96px] px-4">
  <div className="flex justify-center text-center">
   <div className="flex flex-col items-center p-6 text-center max-w-60 border-r">

       <div className="w-[64px] h-[64px]">
        <img src={Icons1} alt="Icon" className="w-[100%] h-[100%] mb-4" />
      </div>
      <h3 className="text-lg font-semibold mb-[12px] mt-[36px]  text-[#222] text-[18px] text-center">
        Strategic Partner <br /> Selection
      </h3>
      <p className="text-base text-[#444] leading-[1.6]">
        We carefully choose and collaborate with top affiliate marketers who align with your brand and target audience.
      </p>
    </div>

    <div className="flex flex-col items-center  p-6 text-center max-w-60 border-r">

       <div className="w-[64px] h-[64px]">
        <img src={Icons2} alt="Icon" className="w-[100%] h-[100%] mb-4" />
      </div>
      <h3 className="text-lg font-semibold mb-[12px] mt-[36px]  text-[#222] text-[18px] text-center">
        Customized Campaign Setup
      </h3>
      <p className="text-base text-[#444] leading-[1.6]">
        Every business is different. We tailor affiliate strategies that match your goals—whether it’s sales, sign-ups, or brand awareness.
      </p>
    </div>

 <div className="flex flex-col items-center  p-6 text-center max-w-60 border-r">

       <div className="w-[64px] h-[64px]">
        <img src={Icons3} alt="Icon" className="w-[100%] h-[100%] mb-4" />
      </div>
      <h3 className="text-lg font-semibold mb-[12px] mt-[36px]  text-[#222] text-[18px] text-center">
        Performance Tracking & Optimization
      </h3>
      <p className="text-base text-[#444] leading-[1.6]">
        We don’t just set it and forget it. Our team continuously tracks clicks, conversions, and ROI to optimize campaigns for better results.
      </p>
    </div>

<div className="flex flex-col items-center  p-6 text-center max-w-60 border-r">

      <div className="w-[64px] h-[64px]">
        <img src={Icons4} alt="Icon" className="w-[100%] h-[100%] mb-4" />
      </div>
      <h3 className="text-lg font-semibold mb-[12px] mt-[36px] text-[#222] text-[18px] text-center">
        Transparent <br /> Reporting
      </h3>
      <p className="text-base text-[#444] leading-[1.6]">
        You get clear, detailed performance reports so you always know where your affiliate budget is going.
      </p>
    </div>

<div className="flex flex-col items-center  p-6 text-center max-w-60 ">

      <div className="w-[64px] h-[64px]">
        <img src={Icons1} alt="Icon" className="w-[100%] h-[100%] mb-4" />
      </div>
      <h3 className="text-lg font-semibold mb-[12px] mt-[36px] text-[#222] text-[18px] text-center">
        Ethical, Scalable <br /> Growth
      </h3>
      <p className="text-base text-[#444] leading-relaxed">
        We focus on long-term, sustainable affiliate partnerships—no spammy tactics, just proven strategies from the best affiliate marketing company in Gurgaon.
      </p>
    </div>
  </div>
</div>



     
        <div className="amc5 flex flex-row max-w-[1440px] w-[100%] px-[40px] max-lg:px-[16px] mx-auto justify-between items-center ">
          <div className="amc5-left w-[80%]">
            <h2 className="text-[52px] font-semibold mb-[42px]">Can you make money with <span className='highlight'>Affiliate Marketing?</span> </h2>
            <p className="leading-relaxed text-base">
              Yes, you can absolutely make money with affiliate marketing—and the numbers back it up. According to Statista, the global affiliate marketing market is projected to exceed $12 billion by 2027, with consistent year-over-year growth. Reports also show that around 15% to 30% of affiliate marketers earn between $1,000 and $5,000 per month, and the top 1% make over $100,000 annually.
              <br />
              <br />
              The concept is straightforward: you promote products or services using unique affiliate links and earn a commission for each sale made through your referral. Since there's no need to create your own products or handle inventory, affiliate marketing is a low-risk, scalable way to build income online.
            </p>
            
          </div>

          <div className="object-contain">
            <img src={image} alt="Woman with laptop" className="ml-[0px] pt-[80px]" />
            {/* <div className="amc2-tag">SHARE WITH FOLLOWERS</div> */}
          </div> 
        </div>
        <div className="max-w-[1440px] w-[100%] px-[40px] max-lg:px-[16px] mx-auto container6 mt-[96px] ">
        <div className="conatctform flex flex-row items-center justify-center flex-wrap gap-10 max-lg:flex-col mb-10 px-5 py-10">

          {/* Left Side: Text + Numbers */}
          <div className="w-[45%] max-lg:w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5c945c]">
              Work With Us and Take <br />Your Business to the Next Level
            </h3>
            <p className="text-[17px] text-black mt-5 mb-5">
              We provide the tools, expertise, and support you need to grow faster,
              <br /> reach more customers, and stay ahead of the competition.
              <br /> Let’s take your business to the next level—together.
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

          {/* Right Side: Contact Form */}
          <div className="w-[45%] max-lg:w-full">
            <Conatctfrom className="w-full" /> {/* Corrected component name */}
          </div>
        </div>
        
      </div>
      <div className="amc6">

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



