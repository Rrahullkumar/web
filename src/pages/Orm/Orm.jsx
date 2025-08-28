
import './Orm.css';
import timer from "../../pages/Orm/resourse/timer.png"

import brand1 from "./resourse/brand1.svg";
import brand2 from "./resourse/brand2.svg";
import brand3 from "./resourse/brand3.svg";
import brand4 from "./resourse/brand4.svg";
import brand5 from "./resourse/brand5.svg";
import brand6 from "./resourse/brand6.svg";
import brand7 from "./resourse/brand7.svg";
import brand8 from "./resourse/brand8.svg";

import iot from "./resourse/iot.png"
import Accordian from "./component/Accordian"


import { Helmet } from 'react-helmet';
import  newimg from './resourse/new.png'
import c1image from './resourse/c1image.png'
import HeroSection from '../../components/Herosection/Herosection';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Orm = () => {

  const services = [
    {
      "title": "Brand Monitoring",
      "description": "ORM helps you to be aware of discussions around your company on blogs, social media, site reviews, and search engines so you can correct any negative or incorrect information.",
      "image": brand1
    },
    {
      "title": "Review Management",
      "description": "Helps you handle and reply to reviews on sites like Google, Yelp, and Trustpilot. Encourages good reviews and handles bad ones effectively to keep customers' trust in the brand.",
      "image": brand2
    },
    {
      "title": "Search Engine Reputation Management (SERM)",
      "description": "Increases the visibility of good material and lowers the visibility of bad search results on Google and other search engines to change what people see first.",
      "image": brand3
    },
    {
      "title": "Content Creation & Promotion",
      "description": " Creates high-quality, positive content—like blogs, articles, press releases, and profiles—that enhances your brand’s online presence and credibility.",
      "image": brand4
    },
    {
      "title": "Crisis Management",
      "description": "Uses quick response plans and damage control to deal with reputation crises like viral complaints, false allegations, or sudden bad exposure.",
      "image": brand5
    },
    {
      "title": "Social Media Reputation Management",
      "description": " Monitors and manages your presence on platforms like Facebook, Instagram, LinkedIn, and Twitter to ensure positive engagement and timely responses to criticism.",
      "image": brand6
    },
    {
      "title": "Negative Content Removal or Suppression",
      "description": " Works to legally remove false or defamatory content where possible or suppress it through SEO strategies to minimize its visibility.",
      "image": brand7
    },
    {
      "title": "Personal Reputation Management",
      "description": " Tailored ORM services for public figures, executives, influencers, or celebrities to maintain a clean, professional online image.",
      "image": brand8
    },
    {
      "title": "Online Review Generation Campaigns",
      "description": " Implements strategies to collect and showcase genuine positive reviews from satisfied customers, helping to build social proof.",
      "image": brand8
    }
  ]


  return (

    <>


<Helmet>
  <title>Trusted ORM Services India, Online Reputation Management Company
</title>
  <meta
    name="description"
    content="
We provide trusted ORM Services in India to manage online reputation, remove negative results, and build a strong positive image for your brand, products, and services.
"
  />

  <meta name="keywords" content="online reputation management services, orm services india" />

  <meta name="robots" content="index, follow" />
  <meta name="author" content="WebNest Media" />
  <link rel="canonical" href="https://webnestmedia.com/online-reputation-management" />

  {/* Optional: Open Graph tags for social sharing */}
  {/* 
  <meta property="og:title" content="Best Online Reputation Management Company in Gurgaon" />
  <meta property="og:description" content="WebNest Media provides trusted ORM services in Gurgaon. We manage reviews, suppress negativity, and grow your brand's online reputation." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://webnestmedia.com/online-reputation-management" />
  <meta property="og:image" content="https://webnestmedia.com/assets/c1image-BqeSZwwV.svg" />
  <meta property="og:site_name" content="WebNest Media" />
  */}

  {/* WebPage Structured Data */}
  {/* <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": "https://webnestmedia.com/online-reputation-management",
      "name": "Online Reputation Management | WebNest Media",
      "description":
        "WebNest Media provides trusted ORM company in Gurgaon. We manage reviews, suppress negativity, and grow your brand's online reputation.",
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
            "name": "Online Reputation Management",
            "item": "https://webnestmedia.com/online-reputation-management",
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
        "serviceType": "Online Reputation Management",
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
  </script> */}


  <script type="application/ld+json">
   {JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://webnestmedia.com/online-reputation-management#webpage",
      "url": "https://webnestmedia.com/online-reputation-management",
      "name": "Online Reputation Management | WebNest Media",
      "description": "WebNest Media provides trusted ORM company in Gurgaon. We manage reviews, suppress negativity, and grow your brand's online reputation.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
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
            "item": "https://webnestmedia.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Online Reputation Management",
            "item": "https://webnestmedia.com/online-reputation-management"
          }
        ]
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://webnestmedia.com/#organization",
        "name": "WebNest Media",
        "url": "https://webnestmedia.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://webnestmedia.com/assets/newlogo-CQU_gx5-.svg"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9696964606",
          "contactType": "Customer Support",
          "email": "info@webnestmedia.com",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gurgaon Sector 48",
          "addressLocality": "Gurgaon",
          "addressRegion": "Haryana",
          "postalCode": "122004",
          "addressCountry": "IN"
        }
      },
      "mainEntity": {
        "@type": "Service",
        "@id": "https://webnestmedia.com/online-reputation-management#service",
        "serviceType": "Online Reputation Management",
        "provider": {
          "@type": "Organization",
          "@id": "https://webnestmedia.com/#organization",
          "name": "WebNest Media"
        },
        "areaServed": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gurgaon",
            "addressRegion": "Haryana",
            "addressCountry": "IN"
          }
        },
        "description": "Grow your business online with WebNest Media, a top digital marketing agency in Gurgaon offering SEO, PPC, SMM, and more."
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://webnestmedia.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Product",
      "@id": "https://webnestmedia.com/online-reputation-management#product",
      "name": "Best Online Reputation Management",
      "image": "https://webnestmedia.com/assets/c1image-CYckrPTa.png",
      "description": "WebNest Media offers the best online reputation management services in India, helping businesses protect, repair, and enhance their brand image. Our expert ORM strategies remove harmful content, promote positive visibility, and build lasting trust with your audience.",
      "brand": {
        "@type": "Brand",
        "name": "WebNest Media"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "543"
      }
    }
  ]
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
          "name": "What does online reputation management involve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "It involves monitoring and managing online reviews, search results, and social mentions to protect and enhance your brand’s reputation.",
          },
        },
        {
          "@type": "Question",
          "name": "How can WebNest Media improve my brand image?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "We use a mix of review management, content promotion, SEO, and crisis response to build a positive online presence and suppress negative content.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you manage reviews on platforms like Google and Facebook?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, we help manage and respond to reviews on Google, Facebook, and other major platforms to maintain a professional and positive brand voice.",
          },
        },
        {
          "@type": "Question",
          "name": "Is online reputation management legal and ethical?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Absolutely. Our strategies are transparent, ethical, and follow platform guidelines. We focus on promoting accurate content and engaging positively.",
          },
        },
      ],
    })}
  </script>
</Helmet>


      <div className=' max-lg:mt-[0px] w-[100%] mx-auto 
  '>
        <div className="">
          <HeroSection
            backgroundImage={c1image}
            heading="Online Reputation Management "
            highlight="Services"
            paragraph="Take control of your online narrative with expert reputation management that highlights your strengths and wins customer trust.
"
          />
        </div>




        <div className='max-w-[1440px] mx-auto px-10 max-lg:px-4 lg:pb-24 mt-24 max-lg:pb-10 max-lg:mt-10'>

          {/* Desktop Layout */}
          <div className="flex flex-row max-md:flex-col-reverse justify-between items-center max-lg:flex-col max-lg:gap-8 gap-5">

            {/* Text Block */}
            <div className="flex-1 ">

              <h2 data-aos="fade-up" className='text-[44px] max-lg:text-[34px] mb-3 font-semibold'>
                Online Reputation <span className='text-[#4CAF50]'>Management Services?</span>
              </h2>
              <div className="w-full md:hidden mb-4">
                <LazyLoadImage
                  src={timer}
                  alt=" ORM services"
                  className='w-full h-auto rounded-[20px] object-contain'
                />
              </div>

              <h3 data-aos="fade-up" className='text-lg font-semibold mb-12 max-lg:mb-8'>
                Rebuild Your Reputation with India’s best Online Reputation Management Expert
              </h3>

              {/* Paragraph with Floating Image on Mobile */}
              <p data-aos="fade-up" className='text-base '>


                Whether your business is being unfairly targeted by competitors or naturally receiving mixed reviews due to a large customer base, our online reputation management services are designed to help you regain control.

                <br /><br className='' />

                We are a results-focused online reputation management company in India, driven by strategy, experience, and modern digital tools. With a skilled team and reliable systems in place, we work diligently to protect and uplift your brand’s online image.

                <br /><br />

                From handling dissatisfied customers to managing negative feedback from former employees or competitive sabotage, we offer discreet solutions trusted by businesses, influencers, and public figures alike.

                <br /><br />

                Our ORM services continuously track, manage, and improve your digital reputation while offering valuable insights into public sentiment. Your brand’s credibility matters — our solutions ensure that what people see online reflects the best version of your business.
              </p>

            </div>

            {/* Image for Desktop (Hidden on Mobile) */}
            <div data-aos="fade-up" className="w-[35%] max-md:hidden">
              <LazyLoadImage
                src={timer}
                alt=" ORM services"
                className='w-full h-auto rounded-[20px] object-contain'
              />
            </div>

          </div>

        </div>

        <section className='max-w-[1440px] mx-auto px-10 max-lg:px-4 lg:pb-24  max-lg:pb-10 flex flex-row '>
          <div className="lg:w-[60%]">
        <h2 className='text-[44px] max-lg:text-[34px] mb-3 font-medium'>Could a Bad Online Reputation Be Costing You Business?</h2> 
        <p className='text-base'>A strong online reputation is one of your most valuable business assets, often shaping more than half of your market worth. WebNest Media helps you take control, repair damage, and create a brand presence that inspires trust.
        <br /><br />
Research reveals that 90% of customers check online reviews before deciding to buy, and around 62% avoid companies that filter or hide customer feedback. Even more concerning, businesses with just one or two stars on platforms like Google or Yelp could lose as much as 86% of potential customers.
<br /> <br />
A single misleading review shouldn’t define your business. With strategic reputation management services, you can protect your online image and implement smart tactics to generate more genuine reviews across Google and beyond.</p>
          </div>
          <div className="lg:w-[40%]">
            <img src={newimg} alt="" />
          </div>
        </section>

        <section className='max-w-[1440px] mx-auto px-10 max-lg:px-4'>

          <div className="flex max-lg:flex-col gap-6 justify-between">

            <div className="w-[667px]  max-lg:w-[100%] lg:sticky lg:top-[200px] self-start max-lg:sticky-unset">
              <h6 data-aos="fade-up" className='text-[46px] max-md:text-[30px] text-[black] '>Types of Online Reputation Management Services</h6>
              <p data-aos="fade-up" className='text-base mt-8 text-[black] font-normal max-lg:mb-4'>As India’s no. 1 online reputation management, We keep you updated about what is being said about your business or brand online by managing, tracking, and reporting on the most crucial elements of your online reputation. </p>
            </div>

            <div className="w-[507px] max-lg:w-full cursor-pointer" data-aos="fade-up">



              {services.map((service, index) => {
                return (
                  <div data-aos="fade-up" key={index} className="flex items-start max-md:flex-col gap-4 mb-7 ">

                    <LazyLoadImage
                      src={service.image}
                      alt={service.title}
                      className="w-[61px] h-[52px] object-cover rounded-lg"
                    />

                    <div className='border-b-[1px] border-black pb-8'>
                      <h6 className="text-[31px]  text-[#000000] pb-5">{service.title}</h6>
                      <p className="text-base font-normal text-[#333333]">{service.description}</p>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>


        </section>



        <section className="max-w-[1440px] mb-24 max-lg:mb-10 mx-auto px-10 max-lg:px-4 flex flex-col lg:flex-row items-start justify-between mt-[96px] max-lg:mt-10 gap-8">

          {/* Text Section */}
          <div className="w-full lg:w-[60%] flex flex-col order-1 lg:order-none">

            {/* Heading */}
            <h5 data-aos="fade-up" className="leading-tight text-5xl max-lg:text-[34px] max-lg:font-semibold mb-6">
              Why Your Business Needs Reputation Management
            </h5>

            {/* Image - Mobile position */}
            <div data-aos="fade-up" className="w-full flex justify-center mt-6 mb-6 lg:hidden">
              <LazyLoadImage
                src={iot}
                alt="Business Needs Reputation Management"
                className="w-full max-w-[440px] h-auto rounded-lg object-contain"
              />
            </div>

            {/* Paragraph */}
            <p data-aos="fade-up" className="text-base font-normal mt-[24px] leading-relaxed">
              Your online reputation has the power to make or break your business in the modern digital age. Whether it’s a small comment on social media or a review on Google, customers are forming opinions about your brand before ever speaking to you. That’s why reputation management is no longer optional—it’s essential.
              <br className="hidden lg:inline" />
              A single negative article or poor review can push potential customers toward competitors, even if your product or service is top-notch. Reputation management helps control the narrative, ensures positive visibility, and builds trust with your audience.
              <br className="hidden lg:inline" /> <br />
              With effective reputation management, you can:
            </p>

            {/* List */}
            <ul className="flex flex-wrap text-base text-[#333] pl-[30px] mt-[12px]">
              <li data-aos="fade-up" className='list-disc'>Monitor what people are saying about your brand</li>
              <li data-aos="fade-up" className='list-disc'>Respond to negative feedback before it escalates</li>
              <li data-aos="fade-up" className='list-disc'>Promote positive content and customer experiences</li>
              <li data-aos="fade-up" className='list-disc'>Enhance your brand’s credibility and trustworthiness</li>
              <li data-aos="fade-up" className='list-disc'>Protect your business from online attacks and misinformation</li>
            </ul>

            {/* Closing Paragraph */}
            <p data-aos="fade-up" className="mt-[20px] text-[16px] font-normal leading-relaxed">
              In short, reputation management safeguards your most valuable asset—your brand image—and turns perception into profit.
            </p>

          </div>

          {/* Image - Desktop position */}
          <div data-aos="fade-up" className="w-full lg:w-[50%] flex justify-center max-lg:hidden lg:justify-center lg:flex">
            <LazyLoadImage
              src={iot}
              alt="Reputation Management Illustration"
              className="w-full max-w-[440px] h-auto rounded-lg object-contain"
            />
          </div>

        </section>


        <section className='container mx-auto mb-24 max-lg:mb-10'>
          <div className="">
        <h2 className='text-[44px] max-lg:text-[34px] mb-3 font-medium '>
          Why Choose WebNest Media for Online Reputation Management Services in India?</h2> 
        <p className='text-base mt-10 '>
WebNest Media is a well-known ORM company that can help you protect and improve your brand's reputation. We know that your reputation is one of your most important assets in the digital world today, and it may have a direct effect on consumer trust, revenue, and long-term success.
<br /> <br />
We are one of the best ORM companies in Gurgaon, Delhi/NCR, and we offer ORM services in India that do more than just correct bad reviews. Our goal is to help you develop a strong, positive internet presence that shows who you really are as a brand. Our online reputation management services in India are made to help you reach your unique goals. They include keeping an eye on what people are saying about you on search engines and social media and responding to consumer feedback in a smart way.
<br /><br />
WebNest Media will help you keep ahead of the competition by removing of unwanted content, pushing down negative search results, or getting more real favourable reviews. We construct a brand image that your audience can trust by using smart technologies, data-driven techniques, and creative storytelling.
With WebNest Media by your side, you’re not just hiring another ORM company—you’re partnering with a team committed to protecting and elevating your reputation in every corner of the internet.

</p>
          </div>
        </section>
        <section className='max-w-[1440x] mx-auto px-10 max-md:px-0'>

          <h2 className='mt-[40px] text-center text-[black] font-normal leading-[160%]
          text-[32px]           

        '>Let's address your <span className='text-[#4CAF50] '>questions </span>today</h2>

          <Accordian />
        </section>



      </div>
    </>
  )
}

export default Orm
