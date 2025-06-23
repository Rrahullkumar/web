import React, { useEffect, useState, useRef } from 'react';
import './cm.css'; // Make sure this file has your styles
import c1_image from './Resources/Rectangle.svg';
import image from './Resources/image.svg';
import Conatctfrom from '../../components/contact/contactform'; // Corrected import
import Accordian from '../home/componnet/Accordian.jsx';
import { FiPhone } from "react-icons/fi";
import { Helmet } from 'react-helmet';
import HeroSection from '../../components/Herosection/Herosection.jsx';
import Newcontact from '../../components/Newcontact/Newcontact.jsx';
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

  const faqData = [
    {
      question: "What is content marketing?",
      answer: "Content marketing is a strategy that involves creating and sharing valuable, relevant content to attract, engage, and convert your target audience. It builds trust and positions your brand as an authority in your industry.",
    },
    {
      question: "How does content marketing help my business?",
      answer: "Content marketing drives organic traffic, improves SEO, builds brand awareness, and increases customer loyalty. It also helps educate your audience and guide them toward making a purchase.",
    },
    {
      question: "What types of content do you create?",
      answer: "We create a variety of content including blog posts, website copy, social media content, email campaigns, video scripts, case studies, whitepapers, and more—all tailored to your business goals.",
    },
    {
      question: "Is content marketing the same as advertising?",
      answer: "Not exactly. Advertising is short-term and sales-focused, while content marketing is long-term and relationship-focused. It’s about providing value, not just pushing products.",
    },
    {
      question: "How long does it take to see results from content marketing?",
      answer: "Content marketing is a long-term strategy. While you might see initial engagement within weeks, significant traffic growth and conversions typically take 3–6 months or more.",
    },
    {
      question: "How is content marketing different from SEO?",
      answer: "SEO is the technical process of improving your website’s visibility, while content marketing is about creating valuable content that fuels SEO efforts. They work best together.",
    },
    {
      question: "Do you offer content strategy as part of your service?",
      answer: "Yes! We provide a complete content marketing strategy, including content planning, keyword research, tone of voice guidelines, and performance tracking.",
    },
    {
      question: "Can content marketing help with lead generation?",
      answer: "Absolutely. By offering informative, solution-based content, you build trust and encourage visitors to take action—whether it’s signing up, contacting you, or making a purchase.",
    },
    {
      question: "How do you measure content marketing success?",
      answer: "We track success using key metrics like website traffic, engagement rates, keyword rankings, conversion rates, and ROI through tools like Google Analytics and Search Console.",
    },
    {
      question: "Why should I choose WebNest Media for content marketing?",
      answer: "At WebNest Media, we offer custom content strategies backed by research and creativity. Our team focuses on delivering consistent, high-quality content that aligns with your brand and drives results.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>

        <title>Best Content Marketing Agency in Gurgaon | WebNest Media</title>
        <meta name="description" content="WebNest Media is the top content marketing agency in Gurgaon. We deliver high-quality, SEO-friendly content that attracts traffic and generates leads." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebNest Media" />
        <link rel="canonical" href="https://webnestmedia.com/content-marketing" />


      </Helmet>

      <section className=''>



        <div className="mt-[77px]   max-lg:mt-[0] w-[100%]">
          {/* <h1 className='text-[52px] max-lg:text-[38px] text-center'>Content Marketing <span className='text-black'>Agency in Gurgaon </span></h1> */}
          {/* <h2 className="heading-styled relative h-[60px] text-[40px]  bg-yellow font-bold text-black px-4 py-1 mt-[320px] ">
            {text}
          </h2> */}
          <HeroSection
        backgroundImage={c1_image}
        heading="Content Marketing Company"
        highlight="In Gurgaon"
        paragraph="From blogs to web copy, we craft SEO-driven content that brings value to your audience and helps your business grow online.
"
      />

          

        </div>

        <div className="max-w-[1440px] w-full mx-auto px-[40px] max-lg:px-[16px] lg:mt-24 max-lg:mt-10 justify-between">
          <h2 className="text-[52px] max-lg:text-[38px] lg:translate-y-10 max-lg:mb-[20px] font-semibold">
            <span className="highlight">Content</span> is the key to <br /> building audiences
          </h2>

          <div className="flex flex-row max-lg:flex-col-reverse justify-between items-center gap-24 max-lg:gap-10">
            {/* Left Text Section */}
            <div className="lg:w-[60%] flex flex-col">
              <p className="text-base">
                Great content captures attention, builds trust, and keeps your audience coming back.
                At WebNest Media, we craft meaningful content that speaks directly to your ideal customers.
              </p>

              <br />
              <h3 className="text-2xl font-semibold mb-4">What We Offer:</h3>

              <ul className="text-base mb-12 lg:leading-[160%]">
                <li>• Blog posts, SEO content, and landing pages</li>
                <li>• Visual storytelling with high-quality graphics</li>
                <li>• Strategic content planning and calendar</li>
              </ul>

              <div className="flex flex-row gap-4">
                <button className="p-3 bg-[#4CAF50] rounded-lg text-white">Learn More</button>
                <button className="p-3 border border-[#4CAF50] text-[#4CAF50] rounded-lg">Contact Us</button>
              </div>
            </div>

            {/* Right Image */}
            <div className="max-lg:w-[80%]">
              <img src={image} alt="Content Strategy Visual" />
            </div>
          </div>
        </div>

        {/* <div className="custom-stats-section">
          <p style={{ color: '#EEC370', fontSize: 18 }}>The no.1 SEO Service</p>
          <p style={{ color: 'black', fontSize: 32, fontWeight: 600, marginBottom: 15 }}>
            Your <span className='highlight'>Success</span> is our <span className='highlight'>Mission</span>
          </p>
          <p style={{ fontSize: 16 }}>
            From strategy to execution, we align your content with what your audience truly values.
          </p>
          <div className="custom-stats-cards">
            {statsData.map((item, index) => (
              <div className="custom-stat-card" key={index}>
                <h2 className="stat-number">{item.number}</h2>
                <p className="stat-label">{item.label}</p>
              </div>
            ))}
          </div>
       </div> */}
       <div className=' bg-[#EFF4EE]'>
        <div className="amc4 max-lg:mt-10 pt-16 max-w-[1440px] w-full px-[40px] max-lg:px-[16px] mx-auto">
          <div className="pb-[72px] text-center">
            <p className="text-[18px]" style={{ color: '#EEC370' }}>
              The no. 1 Content Marketing Service
            </p>

            <p className='text-[32px] font-semibold mb-8'>
              Build a Customer-Centric <span className="highlight">Marketing Strategy</span>
            </p>

            <p className="text-base mb-14">
              Drive results through performance-based partnerships – only pay when you earn.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {statsData.map((item, index) => (
                <div className="stat-card" key={index}>
                  <h2 className="stat-number">{item.number}</h2>
                  <p className="stat-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
       </div>
        







        <div className="max-w-[1440px] w-[100%] mx-auto  mt-[96px] max-lg:mt-[40px]  max-w-[1440px] w-[100%] px-[40px] max-lg:px-[16px] ">
          <h2 className=" font-semibold text-6xl max-lg:text-[38px] leading-[160%] max-lg:leading-[120%]">
            Bringing Out the Best Content Writing Company
            <span className="highlight"> in Gurgaon</span>
          </h2>
          <br />
          <p className="trust-subheading mb-[40px] lg:w-[80%] leading-[160%]">
            In today’s competitive digital landscape, content is more than just information—it’s your voice,
            your story, and your most powerful marketing tool. At WebNest Media, we provide the content marketing services
            in Gurgaon designed to build your brand’s authority, drive traffic, and convert prospects into loyal customers.
            Whether you're a startup looking to create your first content campaign or an established business aiming to scale,
            our content marketing strategies are crafted with precision, creativity, and purpose.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
            {trustData.map((item, index) => (
              <div
                key={index}
                className="bg-[#EFF4EE] rounded-[12px] p-[30px] shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 "
              >
                <h3 className="flex items-center gap-2">
                  <p className="text-[30px] text-[#EEC370]">{index + 1}.</p>
                  <p className="text-[24px] text-[#4CAF50]">{item.title}</p>
                </h3>

                <p className="text-base leading-relaxed mt-9 mb-[50px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>

        

        <Newcontact></Newcontact>
        <div className="accordian max-w-[1440px] w-[100%] mx-auto ">
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
      </section>
    </>
  );
};
export default ContentMarketing;