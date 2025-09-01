
import './Affilatemarketing.css'
import amc2img from './resources/amc2img.svg'

import amc3img from './resources/amc3img.png'
import Icons1 from './resources/Icons1.svg'
import Icons2 from './resources/Icons2.svg'
import Icons3 from './resources/Icons3.svg'
import Icons4 from './resources/Icon4.svg'
import image from './resources/Image.png'
import { Helmet } from 'react-helmet'

import HeroSection from '../../components/Herosection/Herosection.jsx';

import heroimage from './resources/heroimage.png'


import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom'

const Affilatemarketing = () => {





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
    },
    {
      "@type": "Product",
      "@id": "https://webnestmedia.com/affiliate-marketing#product",
      "name": "Best Affiliate Marketing Agency",
      "image": "https://webnestmedia.com/assets/heroimage-Cxuzhe7b.png",
      "description": "WebNest Media is the best affiliate marketing agency in India, connecting brands with top affiliate marketers to drive sales, leads, and traffic. Our tailored affiliate marketing services deliver measurable results and maximize ROI. Get started today!",
      "brand": {
        "@type": "Brand",
        "name": "WebNest Media"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "667"
      }
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

        <title>Top Affiliate Marketing Agency in India | WebNest Media</title>
        <meta name="description" content="Grow your brand with India’s top affiliate marketing agency. Our AM services span affiliate partnerships, campaign management, lead generation & ROI optimization." />
        <meta name="keywords" content="Affiliate Marketing Agency in India, Affiliate Marketing Services" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebNest Media" />
        <link rel="canonical" href="https://webnestmedia.com/affiliate-marketing" />

        {/* <meta property="og:title" content="Top Affiliate Marketing Agency in Gurgaon | WebNest Media" />
  <meta property="og:description" content="WebNest Media: Top affiliate marketing agency in Gurgaon. We build and manage programs to ensure maximum ROI for your brand." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://webnestmedia.com/affiliate-marketing" />
  <meta property="og:image" content="https://webnestmedia.com/assets/heroimage--fNAPUCz.svg" />
  <meta property="og:site_name" content="WebNest Media" /> */}

        <script type="application/ld+json">
          {JSON.stringify(affiliateMarketingSchema)}
        </script>

      </Helmet>

      <div className=' w-[100%]'>

        <HeroSection
          backgroundImage={heroimage}
          heading="Affiliate Marketing  "
          highlight="Agency"
          paragraph="Drive more sales and grow your brand with proven, performance-focused affiliate marketing strategies."
        />

        <div className="max-w-[1440px] w-full mx-auto px-[40px] max-lg:px-[16px] mt-[96px] max-lg:mt-10max-lg:mb-10">

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

              <div className="flex gap-3 mt-8">
                <button data-aos="fade-up"
                  onClick={() => scrollToSection("affilatemarketing")}
                  className='uiverse-button'>Learn More</button>
                <Link to="/contact-us"
                
                         aria-label="WebNest Media  Conatct Us"

                >
                  <button data-aos="fade-up" className='white-button'>Contact Us</button>

                </Link>

              </div>
            </div>

            {/* Right Section: Image Vertically Centered on Desktop */}
            <div className="lg:w-[40%] lg:flex hidden justify-center items-center">
              <LazyLoadImage data-aos="fade-up" src={amc2img} alt="Woman with laptop" />
            </div>

          </div>

        </div>


        <div className="max-lg:mt-10 max-w-[1440px] w-[100%] px-[40px] max-lg:px-[16px] mx-auto">


          <div className="">
            {/* Heading and Description */}
            <div className="flex flex-col lg:items-end lg:mb-[52px] lg:translate-y-24">
              <h2 data-aos="fade-up" className="text-[52px] max-lg:text-3xl font-semibold mb-12 max-lg:mb-4 lg:text-right">Affiliate Marketing Types</h2>
              <p data-aos="fade-up" className="text-base leading-relaxed lg:text-right lg:w-[60%]">
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
                  <div className="text-right text-[16px] text-[#555] lg:w-[60%] max-lg:ml-[25px]">
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
                  <div className="text-right text-[16px] text-[#555] lg:w-[60%] max-lg:ml-[25px]">
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
                  <div className="text-right text-[16px] text-[#555] lg:w-[60%] max-lg:ml-[25px]">
                    Affiliates use the product and share real experiences. This builds strong trust and often boosts conversions, but it also means their reputation is tied to the product’s quality.
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#EFF4EE] '>
          <div className="amc4 max-lg:mt-10 pt-16 container w-[100%] px-[40px] max-lg:px-[16px] mx-auto ">
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

        <div id="affilatemarketing"  className="mt-24 max-lg:mt-10 flex flex-col max-w-[1440px] w-[100%] px-[40px] max-lg:px-[16px] mx-auto justify-center ">
          <h2 data-aos="fade-up" className="trust-heading  font-semibold text-[52px] max-lg:text-3xl  lg:mb-12">
            Affiliate Marketing Solutions from <span className='highlight'>WebNest Media</span>
          </h2>

          <p data-aos="fade-up" className="trust-subheading text-lg mb-[40px] ">
At WebNest Media, we believe affiliate marketing is more than just links—it's about building smart partnerships that drive real results. As a trusted affiliate marketing company, we help brands connect with the right publishers and influencers to expand reach, generate leads, and boost sales.          </p>

        </div>
        <div className=" max-lg:mb-10 max-w-[1440px] w-[100%] px-[40px] max-lg:px-[16px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-10 justify-items-center text-center px-4 lg:pt-10">
            {/* Card 1 */}
            <div data-aos="fade-up" className="flex flex-col items-center p-6 text-center max-w-60  max-lg:border max-lg:rounded-xl ">

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
            <div data-aos="fade-up" className="flex flex-col items-center p-6 text-center max-w-60  max-lg:border max-lg:rounded-xl ">
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
            <div data-aos="fade-up" className="flex flex-col items-center p-6 text-center max-w-60  max-lg:border max-lg:rounded-xl">
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
            <div data-aos="fade-up" className="flex flex-col items-center p-6 text-center max-w-60  max-lg:border max-lg:rounded-xl ">
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
 We focus on long-term, sustainable affiliate partnerships—no spammy tactics, just proven strategies from top affiliate marketing agency India.
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
The answer is yes, you can make money with affiliate marketing, and the numbers prove it’s a lucrative industry. According to Statista, the global affiliate marketing market is expected to surpass $12 billion by 2027, showing steady growth year after year.
<br /> <br />
Reports reveal that about 15% to 30% of affiliate marketers earn between $1,000 and $5,000 per month, while the top 1% of affiliates make over $100,000 annually. The model is simple: you promote products or services through unique affiliate links and earn a commission on every sale made through your referral.
<br /> <br />
Since you don’t have to create products or manage inventory, affiliate marketing offers a low-risk, scalable way to generate income.
              </p>
            </div>

            {/* Right Section: Image Vertically Centered */}
            <div className="lg:w-[40%] lg:flex hidden justify-center items-center">
              <LazyLoadImage src={image} alt="Woman with laptop" />
            </div>

          </div>
        </div>
      
      
      </div>



      <div className="max-lg:mt-10 mt-24 max-w-[1440px] w-[100%] px-10  max-lg:px-4 mx-auto ">
       {/* <div className=""> */}
         <h2 className='text-[52px] max-lg:text-[34px] max-lg:mb-[20px] lg:mb-8 font-semibold '>Why Choose WebNest Media for Affiliate Marketing Services?</h2>
        <p className='text-base '>
          Affiliate marketing, in our view, encompasses more than having users click on links; it involves creating authentic partnerships that have quantifiable benefits independent of advertising spend. As the best affiliate marketing agency, we assist brands of varying sizes in engaging top affiliate marketers that will help amplify their reach.
<br /> <br />
Our philosophy for affiliate marketing services in India is the combination of a powerful yet straightforward idea: we create targeted, performance-driven campaigns that pivot on your brand and the right affiliates. As a result, every click, lead, or sale made captures value and ROI is effectively delivered. Every aspect, from partner identification and selection to strategy formulation, tracking, and campaign optimization, is done so that you can seamlessly scale your business.
As a leading affiliate marketing agency in India, WebNest Media is equipped with years of experience to help you reach out to new customers, increase conversions, and enhance your position in the competitive market. This is made possible through the combination of affiliate marketing and the innovative techniques which the agency is known for. WebNest Media provides optimization for existing partnerships and even for those brands who are new to the affiliate marketing world.
<br /> <br />
Sustainable campaign success relies on a digital marketing strategy or growth engine cultivated from WebNest Media's affiliate marketing. Campaign success is achieved with the power of branding that resonates.

        </p>
       {/* </div> */}
      </div>
      <div className="accordian container px-10 max-md:px-4 w-[100%] mt-24 max-md:mt-10 mx-auto ">
        <h2 className="text-center">
          Let's address your <span className="text-black">questions</span> today
        </h2>
        <div className="accordion-wrapper-columns">
          {/* Left Column */}
          <div className="accordion-column">
            <div className="accordion">
              <input type="checkbox" id="left-1" />
              <label className="accordion-label" htmlFor="left-1">
                What is affiliate marketing?
              </label>
              <div className="accordion-content">
                <p>
                  Affiliate marketing is a way to earn money by promoting someone
                  else’s product. When someone buys through your link, you get a
                  small commission.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="left-2" />
              <label className="accordion-label" htmlFor="left-2">
                Can anyone start affiliate marketing?
              </label>
              <div className="accordion-content">
                <p>
                  Yes! Whether you’re a student, blogger, business owner, or just
                  exploring online income, anyone can start affiliate marketing with
                  the right guidance.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="left-3" />
              <label className="accordion-label" htmlFor="left-3">
                Do I need a website to become an affiliate marketer?
              </label>
              <div className="accordion-content">
                <p>
                  Not necessarily. You can promote links on social media, YouTube, X,
                  or even WhatsApp. But having a website helps you build trust and
                  grow faster.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="left-4" />
              <label className="accordion-label" htmlFor="left-4">
                How much can I earn with affiliate marketing?
              </label>
              <div className="accordion-content">
                <p>
                  It depends on your efforts and the products you promote. Some people
                  earn a few thousand a month, while others make it a full-time
                  income.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="left-5" />
              <label className="accordion-label" htmlFor="left-5">
                Is affiliate marketing free to start?
              </label>
              <div className="accordion-content">
                <p>
                  Yes, most affiliate programs are free to join. You just need time,
                  content, and strategy to start earning.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="accordion-column">
            <div className="accordion">
              <input type="checkbox" id="right-6" />
              <label className="accordion-label" htmlFor="right-6">
                How long does it take to see results on SERP?
              </label>
              <div className="accordion-content">
                <p>
                  Some see results in a few weeks, others in a few months.
                  Consistency and choosing the right products make a big difference.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="right-7" />
              <label className="accordion-label" htmlFor="right-7">
                Can I do affiliate marketing part-time?
              </label>
              <div className="accordion-content">
                <p>
                  Absolutely. It’s flexible. You can work on it after hours or
                  weekends and still earn passive income over time.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="right-8" />
              <label className="accordion-label" htmlFor="right-8">
                Is affiliate marketing safe and legal in India?
              </label>
              <div className="accordion-content">
                <p>
                  Yes, it’s 100% legal and widely practiced in India. Just make sure
                  to join trusted programs and follow ethical practices.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="right-9" />
              <label className="accordion-label" htmlFor="right-9">
                What are the most popular affiliate programs in India?
              </label>
              <div className="accordion-content">
                <p>
                  Some of the top ones are Amazon Associates, Flipkart, and affiliate
                  programs from hosting companies, banks, and online tools.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="right-10" />
              <label className="accordion-label" htmlFor="right-10">
                Can businesses use affiliate marketing too?
              </label>
              <div className="accordion-content">
                <p>
                  Definitely. Businesses can set up affiliate programs to get more
                  customers through influencers, bloggers, and marketers promoting
                  their brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )


}



export default Affilatemarketing



