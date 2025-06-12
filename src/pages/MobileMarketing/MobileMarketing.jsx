import React from 'react'
import topimage from './resources/topimage.svg'
import image1 from './resources/image1.svg'
const MobileMarketing = () => {
  return (
    <div className='mt-[50px]'>
       <div className="mmc1 relative">
              <img src={topimage} alt="" className='w-[100%] h-auto' />
              <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[48px]'>
                <span className='text-[#4CAF50]'>Mobile</span> Marketing
              </h1>
            </div>
        <div className="mmc3 mt-[93px] flex flex-row ml-[40px] h-[555px]">
                <div className="lgc3left w-[50%]">
                  <h2 className='text-[48px]'>Explore Our B2B Lead Generation Agency</h2>
                  <br />
                  <p className='text-[16px] font-[350]'>
                    Explore our lead generation agency and discover how we turn interest into real business opportunities. At WebNest Media, we don't just deliver leads—we deliver the right leads. Our strategies are built to connect your business with decision-makers who are ready to engage. Whether you're targeting startups or enterprise clients, we tailor campaigns that bring in high-quality prospects, reduce wasted time, and boost your ROI
                  </p>
                  <br />
                  <p className='text-[16px] font-[350]'>
                    From email outreach to LinkedIn marketing and performance-driven funnels, we use smart, data-backed methods that actually work. With us, lead generation isn't just a numbers game it's a strategy for real growth. Let's build a pipeline full of potential, not just empty contacts.
                  </p>
                  <br />
                  <p className='text-[16px] font-[350]'>
                    In short, WebNest Media is the best B2B Lead Generation Services provider in Gurgaon and India, which can boost your business and more with our lead generation expert.
                  </p>
                </div>
                <div className="lgc3right w-[50%] h-full flex items-center">
                  <img src={image1} alt="" className='w-full h-full object-contain pb-[20px]' />
                </div>
        </div>
        <div className="mmc4 flex bg-black justify-center">
            <h2 className='text-[52px] text-center w-[70%] text-white mt-[64px]'>Our Comprehensive Mobile Marketing Services in Gurgaon</h2>    
        
        </div>  
    </div>
  )
}

export default MobileMarketing
