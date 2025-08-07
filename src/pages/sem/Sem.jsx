import { useState } from 'react';
import "./sem.css";
import KeywordTargeting from './resources/KeywordTargeting.png';
import PPC from './resources/PPC.png';
import bid from './resources/bid.png';
import analytics from "./resources/analytics.png";
import ads from './resources/ads.png';
import { Helmet } from 'react-helmet';
import herom from "./resources/heroimage.png";
import semlogo from "./resources/semlogo.svg";
import HeroSection from '../../components/Herosection/Herosection';
import icon1 from "./resources/icon1.svg";
import icon2 from "./resources/icon2.svg";
import icon3 from "./resources/icon3.svg";
import icon4 from "./resources/icon4.svg";
import image12 from './resources/image12.png'
import googleIcon from "./resources/gads.svg";
import metaIcon from "./resources/mads.svg";
import shopifyIcon from "./resources/sads.svg";
import remarketingIcon from "./resources/rads.svg";
import youtubeIcon from "./resources/yads.svg";
import displayIcon from "./resources/dads.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion, AnimatePresence } from "framer-motion";
import { Flower, Newspaper, Square, BadgeIndianRupee, LayoutTemplate, Target, ArrowUp, Banknote, Trello, Flame, CheckCircle } from "lucide-react";
const adsData = [
  { icon: googleIcon, label: "Google ads" },
  { icon: metaIcon, label: "Meta Ads" },
  { icon: shopifyIcon, label: "Ecommerce ads" },
  { icon: remarketingIcon, label: "Remarketing ads" },
  { icon: youtubeIcon, label: "Youtube ads" },
  { icon: displayIcon, label: "Display ads" },
];
import { HandCoins } from 'lucide-react';
import charts from './resources/charts.svg'
import mouse from './resources/mousepointer.svg'
import redlady from "./resources/redlady.png"
import { Link } from 'react-router-dom';
import { RectangleGoggles } from "lucide-react";
import bidmanage from './resources/bidmanage.png'
import pta from './resources/pta.png'
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
import yads from './resources/yads.svg'
import gads from './resources/gads.svg'
import mads from './resources/mads.svg'
import dads from './resources/dads.svg'



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
            <div className='flex flex-row gap-32 justify-between max-lg:flex-col max-lg:gap-5'>
              <div className=''>
                <h3 className='text-5xl max-lg:text-3xl font-semibold '>PPC Agency in Gurgaon</h3>
              </div>
              <div className=''>
                <h6 className='text-[32px] max-md:text-[28px] leading-snug text-[#000000] py-4 font-semibold'>What is Pay Per Click Advertising?</h6>
                <p className='text-base leading-7 text-[#000000] font-normal'>Pay-per-click is a form of online advertisement where advertisers pay a fee for each individual per click. It is the process of paying for website traffic rather than acquiring traffic organically through SEO. Pay-per-click ads appear on social media sites like Facebook and Instagram as well as search engines like Google and Bing, allowing companies an opportunity to target specific regions based on certain keywords and locations.</p>
              </div>
            </div>

            <p className='text-[32px] lg:mb-4 max-md:text-[28px] mt-[74px] mb-18 max-md:mb-4 leading-snug text-[#000000] font-semibold'>Top Reasons to Invest in Pay Per Click Marketing</p>

            <p className='text-base leading-7 text-[#000000] font-normal mb-8 '>Pay Per Click is one of the fastest and smartest ways to get in front of potential customers that are already looking for what you already provide. The following are just a few of the obvious benefits:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1400px] lg-mb-6 mx-auto lg:items-stretch">
              {[{ icon: icon1, title: 'Instant Exposure', description: 'Your PPC advertisements will be live immediately as your campaign goes live. Meaning, you are getting immediate traffic and awareness versus SEO which gets noticed and found months later.' }, { icon: icon2, title: 'Specific Audience', description: 'The only time PPC will show your advertisements is when customers are searching for keywords and phrases that match your advertising. Essentially, PPC is able to target the correct audience by their search intent, location, and demographics.' }, { icon: icon3, title: 'Budgeting', description: 'You can control your own budget, and you only pay for clicks, which makes managing your advertising budget that much easier.' }, { icon: icon4, title: 'Measurable', description: 'With PPC, you will track and analyze every click, allowing you to optimize your campaigns for every dollar spent.' }].map((item, index) => (
                <div key={index} className='flex flex-col items-center text-center p-6 justify-between border rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 bg-gradient-to-r from-green-50 to-blue-50'>
                  <div className='mb-6'>
                    <LazyLoadImage src={item.icon} alt={item.title} className='w-16 h-16 object-contain' />
                  </div>
                  <div className='flex flex-col items-center gap-4 flex-1'>
                    <h3 className='text-2xl font-semibold text-center'>{item.title}</h3>
                    <p className='text-sm leading-relaxed text-center'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <h2 className='text-5xl max-lg:text-3xl lg:text-center mt-16 font-semibold'>PPC Advertising Solutions</h2>
            <p className='text-sm leading-relaxed lg:text-center max-w-[800px] mx-auto mt-7'>WebNest Media is a trusted PPC company in Gurgaon that helps businesses get more leads and sales through smart PPC campaigns. As a results-driven PPC agency in Gurgaon, we manage everything from Google Ads to remarketing, so you get the best return on your ad spend. Here are the PPC services we provide:</p>

            <div className='w-full px-4 py-10'>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center'>
                {adsData.map((item, index) => (
                  <div key={index} className='flex flex-col items-center justify-center space-y-2 transition-transform duration-300 transform hover:scale-105'>
                    <LazyLoadImage src={item.icon} alt={item.label} className='w-[176px] h-[108px] max-md:w-[80px] max-md:h-[100px] object-contain' />
                    <span className='text-sm text-gray-800 font-medium'>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-row max-lg:flex-col justify-between items-center">
              <div className='max-w-[1440px] w-full mx-auto pt-[40px]'>
                <h2 className='text-[38px] lg:text-center font-semibold mb-10'>Why Opt WebNest Media for PPC Ads?</h2>

                <div className='flex max-lg:flex-col gap-[135px] max-lg:gap-[46px]'>
                  <div className=' max-lg:w-[100%] space-y-6'>
                    <p className='text-base font-manrope'>When it comes to running successful PPC campaigns, experience and strategy make all the difference. That’s why so many businesses choose WebNest Media as a leading PPC company in Gurgaon, India — to manage their paid ads. Our team of certified specialists brings years of experience and deep industry know-how. Whether you need YouTube Ads, Google Ads, display ads, or remarketing, we know how to create campaigns that drive real results.</p>

                    <p className='text-base font-manrope'>As a trusted PPC agency in Gurgaon, we don’t believe in “one-size-fits-all” strategies. We take time to understand your business, target audience, and goals so we can design campaigns that actually convert. That’s why many clients call us the best PPC company in Gurgaon, we deliver what we promise.</p>

                    <p className='text-base font-manrope'>With our expert PPC services in Gurgaon, you get full transparency, regular performance reports, and ongoing optimization — all focused on giving you the best ROI. Whether you’re looking for a PPC expert in Gurgaon for lead generation or want to scale your business with the best PPC services Gurgaon has to offer, WebNest Media is here to help you grow.</p>
                  </div>
                </div>
              </div>
              <div className="">
                <img src={PPC} alt="" className='max-lg:hidden' />
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
            <div className='flex flex-row lg:h-[300px] items-center justify-between max-lg:flex-col gap-32  max-lg:gap-5'>
              <div className=''>
                <h2 className='text-5xl max-lg:text-3xl font-semibold'>Bid Management Services</h2>
              </div>

              <div>
                <h6 className='text-[32px] max-md:text-[28px] leading-snug text-[#000000] py-4 font-semibold lg:w-[60%]'>What is Bid Management?</h6>
                <p className='text-base leading-7 text-[#000000] font-normal'>Bid management involves the control of the amount you are willing to pay for ads to be displayed anywhere, whether it's Google Ads, Facebook, or any other platform. Since you are bidding against other advertisers, using the right bid strategy ensures that the ad is showing to the correct audience at the correct time and, importantly, not wasting your budget.
                  <br /> <br />
                  Good bid management is not about spending more. It's about spending smarter. By optimizing bids in real-time depending on performance, competition, and audience behavior, you can lower your costs, provide better click-through rates, and get more lower funnel conversions while achieving the best return on your ad spend.</p>
              </div>
            </div>

            <p className='text-5xl max-lg:text-3xl max-md:text-[28px] mt-[74px] mb-6 max-md:mb-4 leading-snug text-[#000000] font-semibold '>How Bid Management Boosts Your Campaign Performance</p>

            <p className='text-base leading-7 text-[#000000] font-normal mb-8'>Good bid management encourages your ads to rank higher in auction results; this improves visibility and more qualified clicks. By constantly adjusting your bids on a daily basis, we lower unnecessary spending, achieve higher CTRs, and improve conversion rates - ultimately getting more out of less.
              <br /> <br />
              <span className='font-semibold'>Types of Bidding Strategies We Use</span></p>

            <div className="grid grid-cols-5 max-md:grid-cols-2 gap-8">
              {/* Column 1 */}
              <div className="flex flex-col items-center gap-4">

                <img src={mouse} alt="Manual CPC Bidding" />
                <h4 className="text-2xl leading-snug font-semibold text-center w-[80%]">Manual CPC Bidding</h4>

                <p className="text-base text-center">
                  It gives complete control by allowing you to set individual bids for each keyword.
                </p>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col items-center gap-4">
                {/* 3 items stacked here */}
                <img src={charts} alt="Enhanced CPC" />
                <h4 className="text-2xl leading-snug font-semibold text-center w-[80%]">Enhanced CPC</h4>
                <p className="text-base text-center">
                  Automatically adjusts your manual bids to help get more conversions while maintaining cost-efficiency.
                </p>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col items-center gap-4">
                {/* 3 items stacked here */}
                <Target className='size-16' />
                <h4 className="text-2xl leading-snug font-semibold text-center w-[80%]">Target CPA (Cost Per Acquisition)</h4>
                <p className="text-base text-center">
                  Builds bids to drive as many conversions as possible at your preferred acquisition cost.
                </p>
              </div>

              {/* Column 4 */}
              <div className="flex flex-col items-center gap-4">
                {/* 3 items stacked here */}
                <HandCoins className='size-16' />
                <h4 className="text-2xl leading-snug font-semibold text-center w-[80%]">Manual CPC Bidding</h4>
                <p className="text-base text-center">
                  It gives complete control by allowing you to set individual bids for each keyword.
                </p>
              </div>

              {/* Column 5 */}
              <div className="flex flex-col items-center  gap-4">
                {/* 3 items stacked here */}
                <RectangleGoggles className='size-16' />
                <h4 className="text-2xl leading-snug font-semibold text-center w-[80%]">Manual CPC Bidding</h4>
                <p className="text-base text-center">
                  It gives complete control by allowing you to set individual bids for each keyword.
                </p>
              </div>
            </div>
            <div className="flex flex-row max-lg:flex-col justify-between items-center">
              <div className="lg:w-[60%]">
                <h4 className='w-full mt-[74px] mb-[28px]  text-[40px] max-lg:text-[28px] leading-snug text-[#000000] font-semibold'>Why Partner with WebNest Media for Bid Management?</h4>
                <p className='text-base'> When it comes to bid management, experience and precision make all the difference — and that’s exactly what you get with WebNest Media. We don’t just “set and forget” your bids. Our team actively monitors your ad performance and adjusts bids in real time to help you stay competitive, maximize visibility, and get best possible ROI.
                  <br /> <br />
                  Whether you’re running campaigns on Google Ads, Facebook, YouTube, or Display networks, we bring right mix of strategy, tools, and expertise to fine-tune your bidding — so you spend smarter, not more. Partnering with WebNest Media means your ad budget is always working harder for your business.
                </p>

              </div>
              <div className="max-lg:hidden">
                <img src={bidmanage} alt="" className='object-cover lg:w-96 my-auto' />
              </div>
            </div>

          </section>
        </>
      )
    },
    {
      id: 3,
      label: 'Performance Tracking and Analytics',
      image: analytics,
      description: (
        <>
          <section className='pb-[96px]'>
            <div className='flex flex-row items-center font-semibold justify-between gap-[131px] max-lg:flex-col max-lg:gap-5'>
              <h2 className='text-5xl max-lg:text-3xl leading-snug '>Performance Tracking and Analytics Services</h2>
              <div>
                <h6 className='text-[28px] leading-snug text-[#000000] mb-[8px] font-semibold'>
                  What is Performance Tracking and Analytics?
                </h6>
                <p className='text-base leading-7  text-[#000000] font-normal'>
                  Knowing how well your digital marketing initiatives are performing is all that performance tracking and analytics are about. It determines for you which advertisements are effective, which keywords are generating traffic, what type of audience is interested in your material, and source of your leads or sales.
                  <br /> <br />
                  In short, it all comes to examining actual evidence rather than speculating. You may enhance your marketing tactics, make more informed decisions, and eventually achieve better outcomes with the help of appropriate tracking and analytics. It helps you in identifying what is and is not working and where you should concentrate your business growth efforts.                </p>
              </div>
            </div>

            <h3 className='text-5xl max-lg:text-3xl mt-24 max-lg:mt-10  leading-snug text-[#000000] font-semibold'>
              <br className='lg:hidden' />
              Why Performance Tracking is Crucial

            </h3>

            <p className='text-base leading-7 text-[#000000] font-normal mb-8 mt-4'>
              Marketing initiatives are predicated on assumptions in the absence of tracking and analytics, which results in lost opportunities and wasted money. By measuring the right metrics, you can see which ads drive results, allocate budgets wisely, and improve underperforming areas to maximize ROI.
              <br /> <br />
              <span className='font-semibold'>Tools We Use for Accurate Insights</span>
            </p>

            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-80 max-lg:gap-20 ">
              <div className="flex flex-col gap-4 items-center">
                <img src={mouse} alt="" className='w-16' />
                <h4 className='text-2xl text-center lg:w-[50%]'>Google Analytics</h4>
                <p className='text-base text-center'>It gives complete control by allowing you to set individual bids for each keyword.</p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <img src={charts} alt="" className='w-16' />
                <h4 className='text-2xl text-center'>Google Ads Conversion Tracking</h4>
                <p className='text-base text-center'>Automatically adjusts your manual bids to help get more conversions while maintaining cost-efficiency.</p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <img src={mouse} alt="" className='w-16' />
                <h4 className='text-2xl text-center lg:w-[50%]'>Facebook Pixel</h4>
                <p className='text-base text-center'>Builds bids to drive as many conversions as possible at your preferred acquisition cost.</p>
              </div>
            </div>


            <div className="flex flex-row max-lg:flex-col justify-between items-center">
              <div className="lg:w-[60%]">
                <h4 className='w-[100%] mt-10 mb-[28px]  text-5xl max-lg:text-[28px] leading-snug text-[#000000] font-semibold'>
                  Why Choose WebNest Media for Performance Tracking and Analytics?
                </h4>

                <p className='text-base leading-relaxed'>
                  Because data should drive every decision. With right performance tracking and analytics, you’ll always know what is working and what is not — no more guesswork. Our team sets up advanced tracking across your campaigns, whether it’s Google Ads, social media, or your website.
                  <br /> <br />
                  You’ll get clear insights on user behavior, conversions, and ROI. But we don’t stop at reports — we turn those insights into actionable steps to constantly improve your results. If you are serious about growing with a data-driven strategy, WebNest Media gives you clarity and expertise you need to succeed.
                </p>
              </div>
              <div className="max-lg:hidden">
                <img src={pta} alt="" />
              </div>
            </div>
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
            <div className='flex flex-row items-center justify-center  max-lg:flex-col max-lg:gap-5'>
              <div className='flex '>
                <h2 className='text-5xl leading-snug max-lg:text-3xl font-semibold '>Ad Creation and Optimization Company</h2>
              </div>

              <div className='flex flex-col'>
                <h6 className='text-[32px] max-md:text-[28px] leading-snug text-[#000000] mb-[8px] font-semibold'>
                  What is Ad Creation and Optimization?
                </h6>
                <p className='text-base leading-7 text-[#000000] font-normal'>
                  Ad creation and optimization refer to the processes of designing and refining an appealing ad to gather the most optimal results. Specifically, creating unique ad text, using attractive ad imagery, and targeting the appropriate audience.
                  <br /> <br />
                  To properly optimize means to test and adjust your ads constantly. This includes testing anything from your ad headline to the ads images or bids. Testing variables to show performance output that leads to more clicks, conversions, and returns on your investment (ROI). This ensures that your budget is being allocated to ensure you drive sales, leads, or brand awareness.                </p>
              </div>
            </div>

            <p className='text-5xl max-md:text-[28px] mt-[74px] mb-6 leading-snug text-[#000000] font-semibold'>
              Continuous Optimization for Maximum ROI
            </p>

            <p className='text-base'>Launching the ad is just the beginning. We believe real success lies in continuous performance optimization. Our team monitors ad performance daily, analyzing what’s working and what needs to improve.</p>

            <div className="grid grid-cols-5 gap-5 max-md:grid-cols-2 mt-24 max-lg:mt-10">
              <div className="flex flex-col items-center gap-4">
                <Flower className='size-16' />
                <h4 className='text-2xl text-center font-medium '>Ad <br className='lg:hidden'/>Creatives</h4>
                <p className='text-base text-center'>Engaging visuals and formats tailored to resonate with your audience.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Newspaper className='size-16' />
                <h4 className='text-2xl text-center font-medium'>Headlines and CTAs</h4>
                <p className='text-base text-center'>Optimized copy that grabs attention and drives action.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <RectangleGoggles className='size-16' />
                <h4 className='text-2xl text-center font-medium'>Target Audiences</h4>
                <p className='text-base text-center'>Refined based on behavior and performance to reach the most relevant users.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <BadgeIndianRupee className='size-16' />
                <h4 className='text-2xl text-center font-medium'>Bidding Strategies</h4>
                <p className='text-base text-center'>Adjusted to maximize performance within your budget.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <LayoutTemplate className='size-16' />
                <h4 className='text-2xl text-center font-medium'> Landing Pages</h4>
                <p className='text-base text-center'>Optimized for conversions with clear messaging and fast load times.</p>
              </div>
            </div>




            <div className="flex flex-row max-lg:flex-col  justify-between items-center mt-10">
              <div className="lg:w-[60%]">
                <h2 className='w-[100%] mt-10 mb-[28px]  text-5xl max-lg:text-[28px] leading-snug text-[#000000] font-semibold'>
                  Connect with WebNest Media to Make Your Ads Work Harder for You.
                </h2>

                <p className='text-base leading-relaxed'>
                  Because data should drive every decision. With right performance tracking and analytics, you’ll always know what is working and what is not — no more guesswork. Our team sets up advanced tracking across your campaigns, whether it’s Google Ads, social media, or your website.
                  <br /> <br />
                  You’ll get clear insights on user behavior, conversions, and ROI. But we don’t stop at reports — we turn those insights into actionable steps to constantly improve your results. If you are serious about growing with a data-driven strategy, WebNest Media gives you clarity and expertise you need to succeed.

                </p>
              </div>
              <div className="max-lg:hidden">
                <img src={pta} alt="" />
              </div>
            </div>
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
            <div className='flex flex-row items-center justify-between  max-lg:flex-col max-lg:gap-5'>
              <div className=''>
                <h2 className='text-5xl max-lg:text-3xl font-semibold leading-snug '>Keyword Targeting Services in Gurgaon</h2>
              </div>

              <div>
                <h6 className='text-[32px] leading-snug text-[#000000] mb-[8px] font-semibold'>
                  What is Keyword Targeting?
                </h6>
                <p className='text-base'>
                  Keyword targeting is about ensuring your website, or ads, will show up when people search for anything relevant to the business. When someone types a query into Google, the relevant keywords in your content allow search engines to determine what your page is about — thus matching it to that search.
                  <br /> <br />
                  By targeting relevant keywords — actual keywords that your potential customers are using — you can bring in more of the right audience to your website. It doesn't matter if it's a product, or service, or just helpful info — keyword targeting is the key to connecting with users who are already wanting what you offer.
                </p>
              </div>
            </div>
            <h2 className='text-5xl max-lg:text-3xl font-semibold mt-24 max-lg:mt-10'>How Keyword Targeting Improves Your Ad Campaigns?</h2>
            <p className='text-base mt-8'>PPC campaigns are all about targeting the right audience with the right message. Focusing on targeted keywords ensures your ads show up when users search for terms closely related to your business. This results in:</p>

            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-80 max-lg:gap-20 mt-24 max-lg:mt-10 ">
              <div className="flex flex-col gap-4 items-center">
                <img src={mouse} alt="" className='w-16' />
                <h4 className='text-2xl text-center font-medium  lg:min-h-16 '>Higher Click-Through Rates (CTR)</h4>
                <p className='text-base text-center'>Your ads are more relevant to searchers, increasing the chance of clicks.</p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <img src={charts} alt="" className='w-16' />
                <h4 className='text-2xl text-center font-medium lg:min-h-16'> Better Quality Traffic</h4>
                <p className='text-base text-center'> Keyword-focused targeting brings visitors more likely to convert, minimizing wasteful ad spend.</p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <img src={mouse} alt="" className='w-16' />
                <h4 className='text-2xl text-center font-medium lg:min-h-16 '> Improved Ad Ranking</h4>
                <p className='text-base text-center'> A precise keyword strategy boosts your Quality Score in Google Ads, helping your ads rank higher.</p>
              </div>
            </div>

            <h2 className='text-5xl max-lg:text-3xl lg:text-center mx-auto mt-24 max-lg:mt-10 lg:w-[50%] leading-snug font-semibold'>Keyword Targeting Across Platforms</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto mt-10 px-4 place-items-center text-center">
              <div className="flex flex-col justify-center items-center gap-4">
                <img src={gads} alt="" className="w-16 h-16 object-contain" />
                <p className="text-xl max-lg:text-lg lg:w-[60%] min-h-20 font-medium">Search Engines (Google, Bing)</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-4">
                <img src={mads} alt="" className="w-40 h-16 object-contain" />
                <p className="text-xl max-lg:text-lg lg:w-[60%] min-h-20 font-medium">Social Media
(Meta, Insta)</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-4">
                <img src={dads} alt="" className="w-16 h-16 object-contain" />
                <p className="text-xl max-lg:text-lg lg:w-[70%] min-h-20 font-medium">Display Networks
(GDN)</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-4">
                <img src={yads} alt="" className="w-16 h-16 object-contain" />
                <p className="text-xl max-lg:text-lg lg:w-[60%] min-h-20 font-medium">Video Platforms (YouTube)</p>
              </div>
            </div>
            <h2 className='text-5xl max-lg:text-3xl lg:text-center mx-auto mt-24 max-lg:mt-10 lg:w-[40%] leading-snug font-semibold'>Benefits of Keyword Targeting</h2>
            <div className="grid grid-cols-4 max-md:grid-cols-2 gap-5 max-lg:gap-y-10 mt-10 ">
                <div className="flex flex-col items-center  gap-4">
                  <ArrowUp className='size-16'/>
                  <h3 className='text-2xl text-center font-medium'>Increased Relevance</h3>
                  <p className=' text-base text-center'>                  You can improve the importance of your advertisements and raise possibility of clicks and conversions by focusing on users who are actively looking for or interacting with pertinent material.
</p>
                </div>
                <div className="flex flex-col items-center  gap-4 ">
                  <Banknote className='size-16'/>
                  <h3 className='text-2xl text-center font-medium'>Improved <br className='lg:hidden'/>ROI</h3>
                  <p className='text-base text-center'>Reaching your potential clients with use of targeted keywords can improve ad performance and increase your return on investment. </p>
                </div>
                <div className="flex flex-col items-center  gap-4">
                  <Trello className='size-16'/>
                  <h3 className='text-2xl text-center font-medium'>Brand Awareness</h3>
                  <p className='text-base text-center'>
                    By displaying your advertisements to people who are actively looking for information about your goods or services, keyword targeting can assist you in increasing brand recognition. </p>
                </div>
                <div className="flex flex-col items-center  gap-4">
                  <Flame className='size-16'/>
                  <h3 className='text-2xl text-center font-medium'>Competitive Advantage</h3>
                  <p className='text-base text-center'>
                   You can obtain a competitive advantage and expand your audience by determining and focusing on keywords that your rivals are overlooking.  </p>
                </div>
            </div>
            <div className="">


              <div className="flex flex-row max-lg:flex-col  justify-between items-center mt-10">
              <div className="lg:w-[60%]">
                <h2 className='w-[100%] mt-10 mb-[28px]  text-5xl max-lg:text-[28px] leading-snug text-[#000000] font-semibold'>
                 Why WebNest Media for Keyword Targeting?
                </h2>

                <p className='text-base leading-relaxed'>
At WebNest Media, we don’t just guess — we build smart keyword targeting strategies that help you reach the right audience. Whether it’s Google Ads keyword targeting, YouTube keyword targeting, or Facebook keyword targeting, our team knows how to get your message in front of the people who matter.
<br /> <br />
We also specialize in keyword targeting display campaigns, helping your brand stay visible across the web. If you want data-driven strategies that actually drive clicks, leads, and conversions, choose WebNest Media — your trusted partner for powerful keyword targeting across all platforms.
                </p>
              </div>
              <div className="lg:w-[40%] max-lg:hidden">
                <img src={bidmanage} alt="" className='object-fill w-full' />
              </div>
            </div>
            </div>

          </section>
        </>
      ),
    },

  ];




  const handleTabClick = (index) => {
    setActiveTab(index);
  };


  const statsData = [
    { number: '21,3456', label: 'Organic Traffic Growth' },
    { number: '13,200+', label: 'Keyword Rankings' },
    { number: '98/100', label: 'Speed & UX Score' },
    { number: '231,580+', label: 'Leads Generated' },
  ];




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

        {/* <meta property="og:title" content="Best Search Engine Marketing Agency in Gurgaon | WebNest Media " />
        <meta property="og:description" content="WebNest Media is the best Search Engine Marketing agency in Gurgaon. We boost your Google visibility, traffic & leads with expert PPC management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webnestmedia.com/search-engine-marketing" />
        <meta property="og:image" content="https://webnestmedia.com/assets/heroimage-h3UpqiFv.png" />
        <meta property="og:site_name" content="WebNest Media" /> */}


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


        <div className="flex flex-row max-lg:flex-col gap-4 mx-auto items-center justify-between max-w-[1440px] w-[100%] mt-24  max-lg:mt-10 px-10 max-lg:px-4 mb-24 max-lg:mb-10">
          <div className="lg:w-[50%]">

            <h2 className='text-[52px] max-lg:text-4xl leading-snug  mb-9 max-lg:mb-5 '>What is Search Engine Marketing?</h2>

            <p className='text-base'>SEM is a digital marketing tactic focused on increasing a website’s presence on search engines through paid advertising. Different types of websites or online businesses can use search engine marketing services in different ways to improve brand awareness.</p>
            <div data-aos="fade-up" className=" flex gap-4 mt-6 max-lg:mt-12 ">

              <button
                onClick={() => scrollToSection("semservice")}
                className='uiverse-button'>Learn More</button>

              <Link to="/contact-us"
              
                       aria-label="WebNest Media  Conatact Us"

              >

                <button className='white-button'>Contact Us</button>

              </Link>
            </div>
          </div>
          <div className="max-lg:w-[80%] max-lg:my-10">
            <LazyLoadImage src={semlogo} alt='WebNest Logo' />
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


        <section >
          <div className="text-center flex flex-col justify-center items-center mx-auto mb-24 max-lg:mb-10 px-10 max-lg:px-4 ">
            <h2 className='text-5xl max-lg:text-3xl mb-5 font-semibold max-lg:text-left'>Types of Search Engine Marketing</h2>
            <p className='lg:w-[50%] text-base max-lg:text-left'>As a top search engine marketing agency in Gurgaon, we provide different types of search engine marketing services by our expert SEM team that deliver the best outcome for you. Here are the different types of SEM:</p>
          </div>
        </section>

        <section
          id="semservice"
          className="max-w-[1440px] w-full mx-auto px-[40px] max-lg:px-[16px] relative"
        >


          <div className="relative">
            {/* Sticky Tab Buttons */}
            <div className="sticky top-[70px] bg-white z-50 flex justify-between gap-4 overflow-x-auto whitespace-nowrap text-gray-700 scrollbar-hide py-3 px-2 shadow-sm">
              {tabsData.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(index)}
                  className={`cursor-pointer transition-all duration-300 text-center min-w-fit rounded-full text-sm md:text-base font-medium px-6 py-3 
            ${activeTab === index
                      ? 'bg-[#3e8e41] text-white shadow-md scale-105'
                      : 'border border-[#3e8e41] text-[#3e8e41] bg-white hover:bg-[#f0f9f0] hover:shadow-md'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content with Animation */}
            <div className="justify-center mx-auto  flex flex-col pt-[25px] min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab} // Key changes to re-trigger animation
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {tabsData[activeTab].description}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>


        <div className="container mx-auto flex flex-row max-lg:flex-col justify-between mt-24 max-lg:mt-0 items-center max-lg:px-4">
          <div className="lg:w-[60%]">
            <h2 className='text-5xl max-lg:text-3xl mb-10 max-lg:mb-6 leading-snug font-semibold '>Google Ads Agency in Gurgaon | WebNest Media</h2>
            <div className="lg:hidden">
            <img src={image12} alt="" />
          </div>
            <p className='text-base'>We are the reputable Google Ads agency in Gurgaon that serves works to the different industries, whether big, small, or large- or small-scale industries.
              Get high-performing campaigns with expert-led Google Ads Management Services. From smart keyword targeting and ad creation to bid optimization and performance tracking, we handle it all to help you drive real business results.
              We create and set up Google Ads campaigns, optimize, and generate leads to attract users and increase online visibility.
              <br /> <br />
              As a leading Google Ads agency in Gurgaon, Delhi, our Google Ads experts bring attention to your products or services on the Google Display Network, on YouTube, mobile apps, partner websites, etc.</p>
          </div>
          <div className="max-lg:hidden">
            <img src={image12} alt="" />
          </div>
        </div>

           <section className="py-12 px-4 lg:px-20 bg-white text-black">
      <h2 className="text-3xl lg:text-5xl font-semibold lg:text-center mb-4 leading-snug">
        Why choose WebNest Media for a search engine marketing campaign?
      </h2>
      <p className="lg:text-center text-gray-600 max-w-3xl mx-auto mb-10 lg:mt-10">
        WebNest Media is a search engine marketing company in Gurgaon, India, and offers a number of benefits that make it different than other agencies. Here are some reasons you may want to choose them:
      </p>

      <div className=" overflow-x-auto  max-w-[1440px] w-[100%] mx-auto">
  <table className="min-w-[600px] w-full table-auto border-separate border-spacing-y-6">
    <tbody className="text-left text-gray-700">
      <tr className="align-top">
        <td className="flex gap-2 items-start pr-4 text-green-600 font-medium whitespace-nowrap">
          <CheckCircle className="mt-1 w-5 h-5" />
          Expert Search Engine Marketing:
        </td>
        <td>
          Our team of experts in search engine marketing are experts, too! SEM professionals develop and test
          sponsored search campaigns and work with you to enhance performance and maximize your return on investment.
        </td>
      </tr>

      <tr className="align-top">
        <td className="flex gap-2 items-start pr-4 text-green-600 font-medium whitespace-nowrap">
          <CheckCircle className="mt-1 w-5 h-5" />
          Tailored Plans:
        </td>
        <td>
          Integrated Services: SEM isn’t just about pay-per-click (PPC) ads. It encompasses SEO, landing page
          optimization, and endless testing of key aspects of your campaigns. WebNest Media may provide an overall
          strategy that touches upon all of these areas.
        </td>
      </tr>

      <tr className="align-top">
        <td className="flex gap-2 items-start pr-4 text-green-600 font-medium whitespace-nowrap">
          <CheckCircle className="mt-1 w-5 h-5" />
          Staying Current:
        </td>
        <td>
          The search engine marketing space is always changing. WebNest Media might be current with the latest trends
          and strategies and keep you on top of your competitors. They may use a number of different types of search
          engine marketing tools as well.
        </td>
      </tr>

      <tr className="align-top">
        <td className="flex gap-2 items-start pr-4 text-green-600 font-medium whitespace-nowrap">
          <CheckCircle className="mt-1 w-5 h-5" />
          Conversion-Focused:
        </td>
        <td>
          WebNest Media could emphasize not only driving traffic but also increasing conversions. Whether it’s
          purchases, leads, or other goals, our team focuses on improving conversion rates for better overall
          campaign success.
        </td>
      </tr>

      <tr className="align-top">
        <td className="flex gap-2 items-start pr-4 text-green-600 font-medium whitespace-nowrap">
          <CheckCircle className="mt-1 w-5 h-5" />
          Experience with Various Platforms:
        </td>
        <td>
          Our team is full of experience with major SEM platforms like Google Ads, Bing Ads, and other search
          networks, offering flexibility depending on your audience and objectives.
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </section>

        <div className="FAQS max-w-[1440px] w-[100%] mx-auto">

          <h2 className="text-[#409338] font-bold text-[40px] leading-[40px] text-center max-md:text-[28px] max-md:leading-[28px]  stroke-custom fill-custom">Let's address your questions today</h2>
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