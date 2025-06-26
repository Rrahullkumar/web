import React from 'react';
import topimage from './resources/topimage.svg';
import image1 from './resources/c2image.svg';
import icon1 from './resources/icon1.svg';
import icon2 from './resources/icon2.svg';
import icon3 from './resources/icon3.svg';
import icon4 from './resources/icon4.svg';
import icon5 from './resources/icon5.svg';
import c5img from './resources/c5contaisner.svg'
import Accordion from './components/Accordian';
import { Helmet } from 'react-helmet';
import HeroSection from '../../components/Herosection/Herosection';
import Newcontact from '../../components/Newcontact/Newcontact';
const InfluencerMarketing = () => {
  return (

    <>

      <Helmet>

        <title>Influencer Marketing Agency | Connect with Creators</title>
        <meta name="description" content="Ready to get your brand noticed? We connects you with the perfect creators for campaigns that truly resonate and get results." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebNest Media" />
        <link rel="canonical" href="https://webnestmedia.com/influencer-marketing"></link>
      </Helmet>
      <div className=" w-100% mx-auto">
        {/* Top Image Banner */}
        {/* <div className="imc1 relative">
        <img src={topimage} alt="" className="w-full h-auto" />
        <h1 className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[48px]">
          <span className="text-[#4CAF50]">Influencer</span> Marketing
        </h1>
      </div> */}
        <HeroSection
                        backgroundImage={topimage}
                        heading="Influencer Marketing Company"
                        highlight="In Gurgaon"
                        paragraph="Partner with influencers who matter—our marketing campaigns help you reach new audiences, build credibility, and drive measurable growth.
"
                    />

        {/* B2B Lead Generation Section */}
        <div className="imc2 max-lg:mt-10 max-w-[1440px] px-10 max-lg:px-[16px] lg:flex flex-row-reverse lg:items-center lg:justify-between mx-auto ">

          <img src={image1} alt="Best Influencer Marketing Agency" className="max-lg:w-1/2 max-lg:float-right " />
          <div className="imc2left lg:w-[60%] ">
            <h2 className="text-[52px] max-lg:text-[36px] font-semibold">Best Influencer Marketing Agency in Gurgaon</h2>
            <br />
            <p className="text-[16px] font-[350] ">
              WebNest Media is the best influencer company in Gurgaon, Delhi & India.
              We help brands to connect with popular people to get real attention and clear business growth all over country.
            </p>
          </div>

        </div>

        {/* Top Influencer Section */}
        <div className="imc3 max-w-[1440px] px-10 max-lg:px-4 flex flex-col items-center max-lg:mt-[40px] mb-24 max-lg:mb-10 mx-auto">
          <h2 className="text-[52px] max-lg:text-[34px] lg:w-[50%] lg:text-center font-semibold mb-8 ">
            India's Top Influencer Marketing Platform
          </h2>
          <p className="text-base lg:w-[80%] lg:text-center">
            WebNest Media is the leading influencer marketing span agency in India as well as social media influencer marketing
            that provides a complete range of services to help brands connect with their audience and get results.
            We handle the entire campaign, from creating content to tracking its success, all to make sure brands meet their goals.
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex items-center justify-center pb-[96]">
          <div className="flex flex-wrap justify-center max-w-[1000px] gap-x-4 gap-y-10 items-center">
            {[
              {
                image: icon1,
                title: 'Instagram Influencer Marketing',
                content:
                  'We connect your brand with top-tier Instagram creators for stunning feed posts, engaging Reels, and captivating Stories that drive authentic interaction with your target audience.',
              },
              {
                image: icon2,
                title: 'YouTube Influencer Marketing',
                content:
                  'Our YouTube influencer strategies deliver compelling video reviews, dedicated tutorials, and immersive vlogs that build trust and loyalty.',
              },
              {
                image: icon3,
                title: 'Regional Influencer Marketing',
                content:
                  'We specialize in regional influencer campaigns, crafting content in local languages to maximize reach within geographic markets across India.',
              },
              {
                image: icon4,
                title: 'Celebrity Marketing',
                content:
                  'Leverage our network of celebrities for high-impact campaigns that boost credibility, generate buzz, and drive brand awareness.',
              },
              {
                image: icon5,
                title: 'Content-First Collaborations',
                content:
                  'We co-create compelling content that weaves your message naturally into engaging stories that educate, entertain, and inspire.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black text-white rounded-lg shadow-lg p-6 max-w-[325px] w-full sm:w-[300px] h-[400px] flex flex-col items-center text-center transition-transform hover:scale-105 duration-300 ease-in-out"
              >
                <img src={item.image} alt={item.title} className="w-[64px] mb-6 mt-2" />
                <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                <p className="text-base text-gray-300">{item.content}</p>
              </div>
            ))}
          </div>

        </div>
       <div className="imc5 max-w-[1440px] px-10 max-lg:px-4 mt-24 max-lg:mt-14 mx-auto">
  <div className="flex lg:flex-row-reverse lg:justify-between lg:items-center gap-5">
    {/* Desktop Image */}
    <div className="hidden lg:block lg:w-[40%] max-lg:hidden">
      <img src={c5img} alt="Influencer Marketing" className="w-full" />
    </div>

    {/* Heading, Mobile Image, and Paragraph - All in Same Div */}
    <div className="left lg:w-[60%]">
      <h2 className='text-[52px] max-lg:text-[36px] pb-[34px] font-semibold'>
        How Our Influencer Marketing Company Helps Brands?
      </h2>

      {/* Mobile Image - Visible Only on Mobile */}
      <div className="block lg:hidden mb-8">
        <img src={c5img} alt="Influencer Marketing" className="w-full" />
      </div>

      <p className='text-base'>
        As your dedicated influencer marketing expert, we leverage deep industry knowledge to craft powerful campaigns. Our expertise ensures precise influencer matching, captivating content development, and strategic execution. We drive authentic engagement, expand brand reach, and deliver measurable ROI, transforming your marketing investment into tangible success.
      </p>
    </div>
  </div>
</div>





        <Newcontact></Newcontact>
        <div className="lastcontainer max-w-[1440px] px-10 max-lg:px-4 mt-[126px] max-lg:mt-[80px] mx-auto">
          <p className=" lg:mb-[50px] lg:text-center font-medium text-[32px] stroke-custom fill-custom">Lets address your <span className='text-[#409338]'>questions</span> today!</p>
          <Accordion></Accordion>
        </div>
        
      </div>
    </>
  );
};

export default InfluencerMarketing;
