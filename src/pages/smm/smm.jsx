import React, { useState, useRef, useEffect } from 'react';
import "./smm.css"

import iamgecircle from "../home/resources/industries/Education.svg";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { RiWhatsappFill } from "react-icons/ri";
import { SiTelegram } from "react-icons/si";
import Seo from "./resources/fb.svg"
import socialgif from "./resources/social.gif";

import cimage from "./resources/cimage.svg";

import SmartIcon from "./resources/cimage.svg";
import AnalyticsIcon from "./resources/cimage.svg";

import Cards from "./componenet/AnimatedCardList";
import Accordian from "./componenet/Accordian";
import Contactform from "../../components/contact/contactform";

import smartright from "./resources/smartright.svg";
import accelerate from "./resources/accelerate.svg"
import largesmart from "./resources/smart-large.svg";


import { MdContentPasteGo } from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";
import { MdCrisisAlert } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { SiSmartthings } from "react-icons/si";
import { GiLevelFourAdvanced } from "react-icons/gi";
import { FiPhone } from "react-icons/fi";
import { Helmet } from 'react-helmet'
import Newcontact from '../../components/Newcontact/Newcontact';
import HeroSection from '../../components/Herosection/Herosection';
import topimage from './resources/topimage.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';


const Smm = () => {
  const [text, setText] = useState('');
  const words = ['Engagement', 'Conversion', 'Branding'];
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




  const icons = [
    <TiSocialTwitter />,
    <TiSocialYoutube />,
    <TiSocialLinkedin />,
    <SlSocialInstagram />,
    <SlSocialFacebook />,
    <RiWhatsappFill />,
    <SiTelegram />

  ];

  const colors = [
    "#1DA1F2",  // Twitter Blue
    "#FF0000",  // YouTube Red
    "#0077B5",  // LinkedIn Blue
    "#E1306C",  // Instagram Pink
    "#1877F2",  // Facebook Blue
    "#25D366",  // WhatsApp Green
    "#0088cc",  // Telegram Blue
  ];



  const cardData = [
    {
      id: 1,
      title: "Content Creation",
      description:
        "It’s all about crafting valuable, engaging, and relevant content—whether it’s posts, videos, blogs, or graphics—that connects with your audience. Great content builds trust, sparks conversations, and drives results.",
      icon: <MdContentPasteGo />
    },
    {
      id: 2,
      title: "Influencer Marketing",
      description:
        "Powerful strategy where brands collaborate with influencers—people with loyal, engaged followings—to promote their products or services. It’s about trust and authenticity.",
      icon: <SiGooglemarketingplatform />
    },
    {
      id: 3,
      title: "Crisis Management",
      description:
        "Fast action, transparency, and empathy are key to turning a crisis into a chance to rebuild trust.",
      icon: <MdCrisisAlert />
    },
    {
      id: 4,
      title: "Analytics Reporting",
      description:
        "Process of tracking, measuring, and analyzing your social media performance. It shows what’s working, what’s not, and where to improve.",
      icon: <TbReportAnalytics />
    },
  ];


  const socialMediaSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://webnestmedia.com/social-media-marketing#service",
        "name": "Social Media Marketing",
        "description": "WebNest Media is a trusted social media marketing agency in Gurgaon offering expert services in Instagram ads, Facebook marketing, content creation, influencer outreach, and brand engagement to help your business grow online.",
        "serviceType": "Social Media Marketing",
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
        "url": "https://webnestmedia.com/social-media-marketing"
      },
      {
        "@type": "WebPage",
        "@id": "https://webnestmedia.com/social-media-marketing#webpage",
        "url": "https://webnestmedia.com/social-media-marketing",
        "name": "Social Media Marketing Services – WebNest Media",
        "description": "Grow your brand presence and engagement with social media marketing services by WebNest Media. We create tailored content strategies, run paid social ad campaigns, and help you connect with your audience on every platform."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://webnestmedia.com/social-media-marketing#breadcrumb",
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
            "name": "Social Media Marketing",
            "item": "https://webnestmedia.com/social-media-marketing"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://webnestmedia.com/social-media-marketing#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does your social media marketing service include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle content creation, paid social ad campaigns, strategy development, community management, and influencer outreach tailored to your brand goals."
            }
          },
          {
            "@type": "Question",
            "name": "Which platforms do you manage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We manage campaigns and content across Instagram, Facebook, LinkedIn, Twitter, and YouTube, depending on where your audience is most active."
            }
          },
          {
            "@type": "Question",
            "name": "Why choose WebNest Media for social media marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We’re a results-driven agency in Gurgaon that combines creativity with strategy. Our campaigns drive engagement, leads, and real brand growth."
            }
          }
        ]
      }
    ]
  };

  return (

    <>
      <Helmet>

        <title>Best Social Media Marketing Agency in Gurgaon | WebNest Media</title>
        <meta name="description" content="WebNest Media is Gurgaon's top social media marketing agency. We offer paid ads, regular posting, influencer marketing, A/B testing & more to boost your brand online." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebNest Media" />
        <link rel="canonical" href="https://webnestmedia.com/social-media-marketing" />
 

 <meta property="og:title" content="Best Social Media Marketing Agency in Gurgaon | WebNest Media" />
  <meta property="og:description" content="WebNest Media is Gurgaon's top social media marketing agency. We offer paid ads, regular posting, influencer marketing, A/B testing & more to boost your brand online." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://webnestmedia.com/social-media-marketing" />
  <meta property="og:image" content="https://webnestmedia.com/assets/topimage-CDPM3k0Q.svg" />
  <meta property="og:site_name" content="WebNest Media" />

        <script type="application/ld+json">
          {JSON.stringify(socialMediaSchema)}
        </script>
      </Helmet>

      <div className=' w-[100%] mb-[120px]  mx-auto'>
        <div className=" ">
          {/* <h1 className='className="text-3xl md:text-5xl sm:text-2xl font-bold text-[#5c945c] mt-[150px] max-lg:mt-[30px] text-center ml-[30px]" ' id='head1' style={{ lineHeight: 1.5 }}>Social Media Marketing Agency <br />  <span className='text-black'>in Gurgaon</span></h1>
          */}

          <HeroSection
            backgroundImage={topimage}
            heading="Social Media Marketing Company"
            highlight="In Gurgaon"
            paragraph="Let’s take your website from hidden to high-ranking with smart SEO, search-friendly content, and organic growth."
          />

          {/* <h2 className="heading-styled relative h-[70px] text-[35px]  bg-yellow font-bold text-black px-4 py-1 mt-[13px] ml-[43%]">
            {text}
          </h2> */}




        </div>

        <div className='max-w-[1440px] w-[100%] px-[40px] max-lg:px-[16px] mx-auto'>

          <h2 className="  w-[100% ] mt-24 max-md:mt-10 text-3xl sm:text-3xl md:text-[32px] leading-snug sm:leading-[50px] md:leading-[60px] paraheading text-[#409338] font-bold text-center stroke-custom fill-custom ">
            Boost Your Digital Impact with <br className='max-lg:hidden' />
            Smart Social Media Planning
          </h2>



          <p className=' max-sm:mt-[40px] text-[15px] mt-24 text-center text-[black]  mb-[10px] w-[50%]  max-lg:w-[100%] mx-auto
'>

            Enhance your brand’s digital footprint with our social media marketing company Gurgaon, crafted to simplify content creation, scheduling, and analytics unlock your brand’s true potential today.
          </p>
        </div>



        <div className=" max-w-[1440px] px-10 max-lg:px-4 mx-auto mt-[40px] mb-[100px] flex items-center justify-center max-md:w-[100%]">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="w-[60px] h-[60px] rounded-full text-white flex items-center justify-center text-2xl border-2 border-white -ml-3 first:ml-0"
              style={{
                backgroundColor: colors[index],
                zIndex: icons.length - index,
              }}
            >
              {Icon}
            </div>
          ))}
        </div>

        <div className="
        flex flex-col lg:flex-row max-w-[1440px] mx-auto">
          {/* Box 1 */}
          <div className="w-full md:basis-1/3  flex justify-center">
            <div className="w-[300px] h-[450px] rounded-md bg-gray-300 overflow-hidden bocshadowgif "  >
                <LazyLoadImage src={socialgif} alt="SEO Visual" className="w-full h-full object-contain" />
            </div>
          </div>


          <div className=" max-w-[1440px]  max-lg:mx-0 mx-auto w-full md:basis-1/3   gap-4 max-lg:flex max-lg:justify-center max-lg:items-center ">

            <div className="w-full max-w-[300px] h-[400px]   flex flex-col justify-end max-lg:justify-center">
              <div className=' flex flex-col gap-[30px]' >


                <div className="flex flex-col gap-2 rounded-md bg-white p-6 relative right-[-130px]       max-lg:right-[0px]  bocshadowgif border-b ">
                  <h6 className="text-black text-[15px] font-bold">
                    Smart Social Media Management
                  </h6>
                  <p className="text-black text-[13px] leading-5 font-normal">
                    Schedule, publish, and monitor content across all platforms in one place. Social Hub’s intuitive dashboard makes it easy to manage engagement, track performance, and stay consistent with your brand voice.
                  </p>
                </div>

                <div className="flex flex-col gap-2 rounded-md bg-white p-6  border-b  bocshadowgif">
                  <h6 className="text-black text-[15px] font-bold">
                    Another Strategy
                  </h6>
                  <p className="text-black text-[13px] leading-5 font-normal">
                    Build strategies that are tailored for your business objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="max-w-[1440px] px-10 max-lg:mx-4 mx-auto w-full md:basis-1/3  flex justify-center items-center max-xl:hidden">
            <div className="text-center text-black font-semibold text-xl">
                <LazyLoadImage src={cimage} alt="Smart socail media Managment " className=' ' />

            </div>
          </div>
        </div>


        <div className='max-w-[1440px] px-10 max-lg:px-4 mx-auto max-md:mt-12 mt-[200px] max-lg:mt-[100px]'>

          <h2 className="text-[#409338] font-bold text-[40px] max-md:text-[28px] leading-[40px]  mt-[100px] lg:text-center stroke-custom fill-custom">Streamline Your Social Media Account </h2>

          <Cards className="" />
        </div>


        <div className='max-w-[1440px] px-10 max-lg:px-4 mx-auto flex justify-center max-lg:flex-col-reverse gap-[40px] mt-[100px] max-lg:mt-10'>



          <div
            className="w-[48%] max-lg:w-[100%] flex flex-col items-end justify-end  bg-no-repeat bg-contain bg-left-top"
            style={{ backgroundImage: `url(${accelerate})` }}
          >

              <LazyLoadImage src={accelerate} alt="Advance Analytics & Insights" className="hidden" aria-hidden="true" />


            <div className="max-lg:w-[100%] w-[75%] bg-white p-6 rounded-xl shadow-lg">
              <div className="">
                <div className='flex items-center  gap-2 '>
                  <span><GiLevelFourAdvanced /></span>
                  <h3 className="text-lg font-semibold text-[#1a1a1a]">
                    Advanced Analytics & Insights
                  </h3>
                </div>
                <div>

                  <p className="mt-2 text-sm text-gray-600">
                    Get real-time data that drives decisions. Social Hub offers deep insights into audience behavior, post performance, and growth trends—empowering you to optimize your strategy and accelerate results.
                  </p>
                </div>
              </div>
            </div>
          </div>



          <div className="lg:w-[50%] max-md:w-[100%]   text-center lg:text-left">
            <div className="max-w-6xl mx-auto flex flex-col  items-start justify-between lg:gap-10 max-md:gap-4">
              <h2 class="text-[#409338] font-bold text-[40px] max-md:text-[28px] leading-[40px]  text-left stroke-custom fill-custom">  Accelerate Your Digital Presence with Social Hub
              </h2>
              <p className="text-[black] text-[15px] max-md:text-left  max-w-xl max-md:mb-5">
                Unlock the full potential of your brand online with Social Hub. From social media
                management to content optimization, Social Hub helps you grow faster, engage smarter,
                and stand out in the digital crowd.
              </p>

           <Link to ="/contact-us">
              <button type="submit " class=" text-[white] mb-[20px] px-[20px] py-[10px]   bg-[#5c945c] rounded-md ">Contact Now

              </button>

           </Link>


              <div className=" max-md:w-[100%] w-[75%] bg-white p-6 rounded-xl shadow-lg">
                <div className="">
                  {/*   <LazyLoadImage src="/assets/smart-icon.svg" alt="Smart Social Media Management" className="w-6 h-6 object-contain" /> */}

                  <div className='flex items-center  gap-2 '>
                    <span className="w-[20px] h-[20px] object-contain"> <SiSmartthings />  </span>
                    <h3 className="text-lg font-semibold max-md:text-left text-[#1a1a1a]">Smart Social Media Management</h3>
                  </div>
                  <div>

                    <p className="mt-2 text-sm max-md:text-left text-gray-600">
                      Schedule, publish, and monitor content across all platforms in one easy-to-use tool.
                      Automate and boost reach, improve engagement, track performance, and stay consistent
                      with your brand’s voice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


        <div
          className={`max-w-[1440px] px-10 max-lg:px-4 mx-auto smarter flex flex-col-reverse lg:flex-row mt-24 max-lg:mt-10  gap-10 
    bg-no-repeat bg-contain bg-right 
    md:bg-[url('${largesmart}')]`}
        >

          <div className="w-full lg:w-[65%]">

            {/* Heading */}
            <h2 className="text-[40px] max-md:text-[28px] mb-4
            font-bold text-[#5c945c]">
              Smarter, Not Harder <br /> Win Big on Social Media
            </h2>

            {/* Mobile Image Below Heading */}
            <div className="block lg:hidden w-[80%] mx-auto mt-6s">
                <LazyLoadImage src={smartright} alt="Smarter visual" className="max-w-[300px] w-[100%] h-auto rounded-lg" />
            </div>

            {/* Paragraphs */}
            <p className="text-basse md:text-base mb-5 text-black mt-0 leading-relaxed">
              Social media is where your audience is—and it’s growing every day. It gives your business a way to connect, and build lasting relationships with your target customers. But managing social platforms effectively takes more than just posting. It requires strategy, consistency, and a deep understanding of what works.
            </p>

            <p className='text-base '>
              As a leading provider of social media marketing services in Gurgaon, we help businesses grow their brand presence, connect with the right audience, and drive real results. Whether it’s building awareness, increasing followers, or generating leads, our expert team crafts tailored strategies that get your message in front of the people who matter.
            </p>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {cardData.map((card) => (
                <div key={card.id} className="bg-white rounded-2xl shadow p-6">
                  <div className="">

                    <div className='flex items-center gap-2'>
                      <h6 className="w-[20px] h-[20px] object-contain "> {card.icon}</h6>
                      <h4 className="text-lg font-semibold text-[#1a1a1a]">{card.title}</h4>
                    </div>

                    <p className="mt-2 text-gray-600 text-sm">{card.description}</p>

                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Desktop Image */}
          <div className="w-full lg:w-[35%] hidden lg:flex justify-center items-center">
              <LazyLoadImage src={smartright} alt="Smarter visual right" className="w-full max-w-sm" />
          </div>

        </div>

        <div className="max-w-[1440px] px-10 max-lg:px-4 mt-24 max-lg:mt-10 mx-auto newcontainer">
          <h2 className="text-[40px] max-md:text-[28px] font-bold text-[#5c945c] mt-[96px] max-md:mt-[36px] mb-5">
            How Social Media Marketing Can Help Your Business Grow
          </h2>
          <p className='mb-8'>
            The advantages of social media marketing are many. Here are some ways that social media marketing might benefit your company:
          </p>


          <ul className="lg:ml-[25px] mt-[10px]">
            <li className="mb-[30px] lg:mb-[28px]">
              <h3 className="text-lg font-semibold text-[#1a1a1a] relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-black">
                Get your brand seen by more people.
              </h3>
              <p className="text-[16px]">
                Regular posts and updates keep your business in front of the right audience every day.
              </p>
            </li>

            <li className="mb-[20px] lg:mb-[28px]">
              <h3 className="text-lg font-semibold text-[#1a1a1a] relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-black">
                Bring the right visitors to your website.
              </h3>
              <p className="text-base pl-2">
                Social media helps attract people who are actually interested in what you offer.
              </p>
            </li>

            <li className="mb-[20px] lg:mb-[28px]">
              <h3 className="text-lg font-semibold text-[#1a1a1a] relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-black">
                Start real conversations with your audience.
              </h3>
              <p className="text-base pl-2">
                Reply to comments, answer questions, and build genuine relationships with your followers.
              </p>
            </li>

            <li className="mb-[20px] lg:mb-[28px]">
              <h3 className="text-lg font-semibold text-[#1a1a1a] relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-black">
                Give your search rankings a little boost.
              </h3>
              <p className="text-base pl-2">
                While not a direct ranking factor, active social sharing can drive traffic and support your SEO efforts.
              </p>
            </li>

            <li className="mb-[20px] lg:mb-[28px]">
              <h3 className="text-lg font-semibold text-[#1a1a1a] relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-black">
                Turn likes and clicks into real leads.
              </h3>
              <p className="text-base pl-2">
                Engaging postings and targeted advertisements can turn followers into paying consumers.
              </p>
            </li>

            <li className="mb-[20px] lg:mb-[28px]">
              <h3 className="text-lg font-semibold text-[#1a1a1a] relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-black">
                Grow your business without breaking the bank.
              </h3>
              <p className="text-base pl-2">
                Compared to traditional ads, social media is budget-friendly and highly effective.
              </p>
            </li>
          </ul>

        </div>

        <div className='mt-24 max-md:mt-10'>
          <Newcontact />
        </div>
        <div className='mt-[100px] max-w-[1440px] px-10 max-lg:px-4 mx-auto '>
          <h2 className="text-[#409338] mb-[50px] font-bold text-[40px] leading-[40px]  text-center stroke-custom fill-custom">FAQs About Social Media Marketing     </h2>

          <Accordian />

        </div>

      </div>
    </>
  )
}

export default Smm
