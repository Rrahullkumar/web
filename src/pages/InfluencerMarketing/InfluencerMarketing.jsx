
import topimage from './resources/topimage.png';
import image1 from './resources/c2image.png';

import c5img from './resources/c5contaisner.png'
import Accordion from './components/Accordian';
import { Helmet } from 'react-helmet';
import HeroSection from '../../components/Herosection/Herosection';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import image18 from './resources/image18.png';
import image19 from './resources/image19.png';
import image20 from './resources/image20.png';
import image24 from './resources/image24.png';
import image25 from './resources/image25.png';

const InfluencerMarketing = () => {



  return (

    <>

 

<Helmet>
  <title>Influencer Marketing Company in Gurgaon | Instagram, YouTube & More</title>
  <meta
    name="description"
    content="Connect with top social media influencers in Gurgaon to amplify your brand’s voice. WebNest Media offers tailored influencer marketing strategies across Instagram, YouTube, and more."
  />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="WebNest Media" />
  <link rel="canonical" href="https://webnestmedia.com/influencer-marketing" />

  {/* Open Graph tags can be uncommented if needed */}
  {/* 
  <meta property="og:title" content="Influencer Marketing Company in Gurgaon | Instagram, YouTube & More" />
  <meta property="og:description" content="Connect with top social media influencers in Gurgaon to amplify your brand’s voice. WebNest Media offers tailored influencer marketing strategies across Instagram, YouTube, and more." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://webnestmedia.com/influencer-marketing" />
  <meta property="og:image" content="https://webnestmedia.com/assets/topimage-CWYK5-Lz.svg" />
  <meta property="og:site_name" content="WebNest Media" />
  */}

  {/* WebPage + Breadcrumb structured data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": "https://webnestmedia.com/influencer-marketing",
      "name": "Influencer Marketing | WebNest Media",
      "description":
        "Connect with top social media influencers in Gurgaon to amplify your brand’s voice. WebNest Media offers tailored influencer marketing strategies across Instagram, YouTube, and more.",
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
            "name": "Influencer Marketing",
            "item": "https://webnestmedia.com/influencer-marketing",
          },
        ],
      },
      "publisher": {
        "@type": "Organization",
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
          "streetAddress": "Gurgaon Sector XX",
          "addressLocality": "Gurgaon",
          "addressRegion": "Haryana",
          "postalCode": "122004",
          "addressCountry": "IN",
        },
      },
      "mainEntity": {
        "@type": "Service",
        "serviceType": "Influencer Marketing",
        "provider": {
          "@type": "Organization",
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

  {/* FAQPage structured data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which platforms does WebNest Media use for influencer marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "WebNest Media runs influencer campaigns across Instagram, YouTube, Facebook, and more to help brands increase their reach and engagement.",
          },
        },
        {
          "@type": "Question",
          "name": "Can WebNest Media help with local influencer marketing in Gurgaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, WebNest Media specializes in local influencer campaigns in Gurgaon, using regional creators for authentic brand promotions in multiple languages.",
          },
        },
        {
          "@type": "Question",
          "name": "How do you ensure influencer relevance to our brand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "We select influencers based on your brand’s target audience, industry, and campaign goals to ensure optimal alignment and authentic engagement.",
          },
        },
      ],
    })}
  </script>
</Helmet>



      <div className=" w-100% mx-auto">
      
        <HeroSection
          backgroundImage={topimage}
          heading="Influencer Marketing Company"
          highlight="in Gurgaon"
          paragraph="Partner with influencers who matter—our marketing campaigns help you reach new audiences, build credibility, and drive measurable growth.
"
        />

        {/* B2B Lead Generation Section */}
        <div data-aos="fade-up" className="max-lg:mt-10 mt-24 container px-10 max-lg:px-[16px] flex flex-row-reverse max-lg:flex-col-reverse  lg:items-center lg:justify-between mx-auto ">
          <LazyLoadImage src={image1} alt="Best Influencer Marketing Agency" className=" max-lg:w-2/3 mx-auto max-lg:my-5" />
          <div className=" lg:w-[60%] ">
            <h2 className="text-[52px] max-lg:text-[36px] font-semibold">India’s Top Influencer Marketing Agency in Gurgaon</h2>
            <br />
            <p className="text-base">
              WebNest Media is proud to be known as top  influencer marketing company in Gurgaon and one of the best influencer marketing agencies in Gurgaon. We are a trusted place for brands to find and work with the right influencers, from niche creators to celebrity voices. We don’t simply connect brands with influencers like others do, we create strategic collaboration that creates real engagement, brand loyalty, and quantifiable business outcomes. Whether your local community or building your brand nationally, we help brands engage with the most important audience.
            </p>
          </div>

        </div>


        <div className='bg-[#EFF4EE]'>
          <section className='container mx-auto flex flex-col text-center py-16  mt-24 max-md:mt-10'>
            <h2 className='text-[32px] max-md:text-2xl mb-16 font-semibold'> Your <span className='text-[#4caf50] '>success</span> is Our <span className='text-[#4caf50]'>Mission</span></h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-5 px-10 max-md:px-4'>
              <div className="cardss px-20 py-5 pt-10 rounded-xl flex flex-col gap-3 items-center bg-white">
                <h3 className='text-[52px] font-light max-md:text-4xl text-[#4caf50]'>1,200+</h3>
                <p className='text-2xl text-nowrap'>Campaigns Delivered</p>
              </div>
              <div className="cardss  px-20 pt-9 pb-7 rounded-xl gap-3 flex flex-col items-center bg-white">
                <h3 className='text-[52px] font-light  max-md:text-4xl text-[#4caf50]'>250M+</h3>
                <p className='text-2xl text-nowrap'>Audience Reached</p>
              </div>
              <div className="cardss px-20 pt-9 pb-7 rounded-xl gap-3 flex flex-col items-center bg-white">
                <h3 className='text-[52px] font-light max-md:text-4xl text-[#4caf50]'>800+</h3>
                <p className='text-2xl text-nowrap'>Influencer Collaborations</p>
              </div>
              <div className="cardss px-20 pt-9 pb-7 rounded-xl gap-3 flex flex-col items-center  bg-white">
                <h3 className='text-[52px] font-light max-md:text-4xl text-[#4caf50]'>98%</h3>
                <p className='text-2xl text-nowrap'>Repeat Partnerships</p>
              </div>

            </div>
          </section>
        </div>




        <section className='container mx-auto mt-24 max-lg:mt-10 px-4'>
  <h2 data-aos="fade-up" className='text-[52px] max-lg:text-3xl text-center font-semibold lg:w-[60%] mx-auto mb-24 max-lg:mb-10'>
    Types of Influencer Marketing Solutions
  </h2>

  <div className='grid lg:grid-cols-3 max-lg:gap-10'>
    {/* Left Column */}
    <div className='lg:grid grid-rows-9 place-items-center'>
      {/* Top Content */}
      <div data-aos="fade-up" className='row-span-4 w-full lg:pr-10 lg:py-5 max-lg:border-b-[1px] max-lg:border-gray-300 max-lg:py-5'>
        <img src={image20} alt="" className='float-right max-lg:w-1/2 ml-5 mb-2' />
        <h2 className='text-3xl font-medium mb-4 lg:w-[50%]'>Celebrity Marketing</h2>
        <p className='text-base'>
          Activate your brand with celebrities. Access our network of celebrities and leading
          personalities for a high-impact, well-conceived campaign that has been proven to move the
          needle in generating vast reach, credibility, and buzz around all forms of culture to change
          how people view your brand and increase awareness.
        </p>
      </div>

      {/* Divider */}
      <div className='row-span-1 w-full h-[1px] lg:bg-gray-300'></div>

      {/* Bottom Content */}
      <div data-aos="fade-up" className='row-span-4 w-full lg:pr-10 lg:py-5 max-lg:py-5 max-lg:border-b-[1px] max-lg:border-gray-300'>
        <img src={image19} alt="" className='float-right max-lg:w-1/2 ml-5 mb-2' />
        <h2 className='text-3xl font-medium mb-4 lg:w-[50%]'>Regional Influencer Marketing</h2>
        <p className='text-base'>
          We execute local influencer marketing campaigns with vernacular content creators,
          writing their authentic messages to disseminate in multiple languages with amazing results.
          Your brand deeply connects with people within specific geographic markets in India.
        </p>
      </div>
    </div>

    {/* Center Column */}
    <div data-aos="fade-up" className='lg:flex flex-col items-center justify-center lg:text-center lg:border-l-[1px] lg:border-gray-300 lg:border-r-[1px] lg:px-6'>
      <img src={image24} alt="" className='max-lg:float-right max-lg:hidden mb-6' />
      <h2 className='text-[32px] max-lg:text-3xl font-medium lg:w-[80%] lg:mb-10'>Content-First Collaborations</h2>
      <img src={image24} alt="" className='lg:hidden my-4' />
      <p className='text-base lg:w-[80%]'>
        We're interested in more than traditional advertisements and collaborations. Rather we like to
        create content that deeply engages people. We love to co-create powerful stories and experiences
        with influencers, so that the brand message is part of the stories they create in an entertaining,
        educational, and actionable way.
      </p>
    </div>

    {/* Right Column */}
    <div className='lg:grid grid-rows-9 place-items-center max-lg:pb-5 max-lg:border-t-[1px]'>
      {/* Top Content */}
      <div data-aos="fade-up" className='row-span-4 w-full lg:pl-10 max-lg:py-5 max-lg:border-b-[1px] max-lg:border-gray-300'>
        <img src={image18} alt="" className='float-right max-lg:w-1/2 ml-5 mb-2' />
        <h2 className='text-3xl font-medium mb-4 lg:w-[50%]'>YouTube Influencer Marketing</h2>
        <p className='text-base'>
          YouTube influencers are all about video. Our YouTube influencer marketing strategy brings you
          alluring video reviews, all-day-and-all-night tutorials, and objection movement vlogs that
          position your brand's appeal and generate loyal fans.
        </p>
      </div>

      {/* Divider */}
      <div className='row-span-1 w-full h-[1px] lg:bg-gray-300'></div>

      {/* Bottom Content */}
      <div data-aos="fade-up" className='row-span-4 w-full lg:pl-10 max-lg:py-5'>
        <img src={image25} alt="" className='float-right max-lg:w-1/2 ml-5 mb-2' />
        <h2 className='text-3xl font-medium mb-4 lg:w-[50%]'>Instagram Influencer Marketing</h2>
        <p className='text-base'>
          We pair your brand with top-performing Instagram creators for incredible feed posts, Reels,
          and Instagram Stories that whet their appetites for more and drive genuine engagement with your
          audience.
        </p>
      </div>
    </div>
  </div>
</section>

        <div className="imc5 container px-10 max-lg:px-4 mt-24 max-lg:mt-14 mx-auto mb-24 max-lg:mb-10">
          <div className="flex lg:flex-row-reverse lg:justify-between lg:items-center gap-5">
            {/* Desktop Image */}
            <div className="hidden lg:block lg:w-[40%] max-lg:hidden">
              <LazyLoadImage src={c5img} alt="Influencer Marketing" className="w-full" />
            </div>

            {/* Heading, Mobile Image, and Paragraph - All in Same Div */}
            <div className="left lg:w-[60%]">
              <h2 data-aos="fade-up" className='text-[52px] max-lg:text-3xl pb-[34px] font-semibold'>
                How Our Influencer Marketing Company Helps Brands?
              </h2>

              {/* Mobile Image - Visible Only on Mobile */}
              <div data-aos="fade-up" className="block lg:hidden mb-8">
                <LazyLoadImage src={c5img} alt="Influencer Marketing" className="w-full" />
              </div>

              <p data-aos="fade-up" className='text-base'>
                As a leading influencer marketing agency in Gurgaon, Delhi, India, we help brands move beyond traditional advertising and build the meaningful relationships that matter with their audience. We provide end-to-end influencer marketing services - from selecting the right creators, managing the campaigns and measuring performance. Regardless of whether you are a growing startup or established brand, we create tailored plans ensuring your message is seen by the right audience, at the right time.
                <br /> <br />
                As one of best influencer marketing services, we place a importance on creating genuine collaborations that not only creates conversations and engagement, but also leads to actionable business results. We can help your brand create engagement instead of just impressions with our extensive talent network across Instagram, YouTube, LinkedIn, and others.

              </p>
            </div>
          </div>
        </div>





        <div className="lastcontainer container px-10 max-lg:px-0 mt-[96px] max-lg:mt-[40px] mx-auto">
          <p className=" lg:mb-[50px] text-center font-medium text-[32px] stroke-custom fill-custom">Lets address your <span className='text-[#409338]'>questions</span> today!</p>
          <Accordion></Accordion>
        </div>

      </div>
    </>
  );
};

export default InfluencerMarketing;
