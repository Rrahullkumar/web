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
    <div className="mt-[50px]">
      {/* Top Image Banner */}
      <div className="imc1 relative">
        <img src={topimage} alt="" className="w-full h-auto" />
        <h1 className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[48px]">
          <span className="text-[#4CAF50]">Influencer</span> Marketing
        </h1>
      </div>

      {/* B2B Lead Generation Section */}
      <div className="imc2 mt-[93px] flex flex-row ml-[40px] h-[555px]">
        <div className="imc2left w-1/2 pt-[100px]">
          <h2 className="text-[48px] font-semibold">Best Influencer Marketing Agency in Gurgaon</h2>
          <br />
          <p className="text-[16px] font-[350]">
            WebNest Media is the best influencer company in Gurgaon, Delhi & India.
            We help brands to connect with popular people to get real attention and clear business growth all over country.
          </p>
        </div>
        <div className="imc2right w-1/2 h-full flex items-center">
          <img src={image1} alt="" className="w-full h-full object-contain pb-[20px]" />
        </div>
      </div>

      {/* Top Influencer Section */}
      <div className="imc3 flex flex-col items-center mb-[96px]">
        <h2 className="text-[52px] w-[50%] text-center font-semibold mb-[32px]">
          India's Top Influencer Marketing Platform
        </h2>
        <p className="text-[18px] w-[80%] text-center">
          WebNest Media is the leading influencer marketing agency in India as well as social media influencer marketing
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
              <h3 className="text-[18px] font-semibold mb-4">{item.title}</h3>
              <p className="text-[16px] text-gray-300">{item.content}</p>
            </div>
          ))}
        </div>

      </div>
      <div className="imc5 flex flex-col justify-center items-center pt-[96px]">
        <h2 className='text-[52px] w-[60%] mb-[54px] font-semibold' > How Our Influencer Marketing Company Helps Brands?</h2>
          <p className='text-[16px] w-[60%]'>As your dedicated influencer marketing expert, we leverage deep industry knowledge to craft powerful campaigns. Our expertise ensures precise influencer matching, captivating content development, and strategic execution. We drive authentic engagement, expand brand reach, and deliver measurable ROI, transforming your marketing investment into tangible success.</p>
          <div className="flex flex-row ml-[40px] justify-center items-center pt-[96px]">
              <div className="left w-[70%]">
                <h2 className='text-[52px] pb-[36px] font-semibold'>  How Our Influencer Marketing Company Helps Brands?</h2>
                <p className='text-[16px] '>As your dedicated influencer marketing expert, we leverage deep industry knowledge to craft powerful campaigns. Our expertise ensures precise influencer matching, captivating content development, and strategic execution. We drive authentic engagement, expand brand reach, and deliver measurable ROI, transforming your marketing investment into tangible success.</p>
              </div>
              <div className="right">
                  <img src={c5img} alt="" />
              </div>
          </div>
      </div>
      <div className="lastcontainer mt-[126px]">
          <p className=" mb-[50px] text-center font-medium text-[32px] leading-[40px] ml-[40px] stroke-custom fill-custom">Lets address your <span className='text-[#409338]'>questions</span> today!</p>
          <Accordion></Accordion>
      </div>

    </div>
      </>
  );
};

export default InfluencerMarketing;
