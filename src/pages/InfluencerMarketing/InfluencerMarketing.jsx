import React from 'react'
import topimage from './resources/topimage.svg'
import  image1 from './resources/c2image.svg'
const InfluencerMarketing = () => {
  return (
    <div className='mt-[50px]'>
     <div className="mmc1 relative ">
        <img src={topimage} alt="" className='w-[100%] h-auto' />
        <h1 className='absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[48px]'>
        <span className='text-[#4CAF50]'>Influencer</span> Marketing
        </h1>
     </div>
                <div className="imc2 mt-[93px] flex flex-row ml-[40px] h-[555px]">
                        <div className="imc2left w-[50%] pt-[100px]">
                        <h2 className='text-[48px]'>Explore Our B2B Lead Generation Agency</h2>
                        <br />
                        <p className='text-[16px] font-[350]'>
                            WebNest Media is the best influencer company in Gurgaon, Delhi & India. We help brands to connect with popular people to get real attention and clear business growth all over country.                        </p>
                        <br />
                        
                        </div>
                        <div className="imc2right w-[50%] h-full flex items-center">
                        <img src={image1} alt="" className='w-full h-full object-contain pb-[20px]' />
                        </div>
                </div>
        <div className="imc3 flex flex-col items-center mb-[96px]">
            <h2 className='text-[52px] w-[50%] text-center font-semibold mb-[32px]'>India's Top Influencer Marketing Platform</h2>
            <p className='text-[18px] w-[80%] text-center'>WebNest Media is the leading influencer marketing agency in India as well as social media influencer marketing that provides a complete range of services to help brands connect with their audience and get results. We handle the entire campaign, from creating content to tracking its success, all to make sure brands meet their goals.</p>
        </div>
        <div className="imc4 flex flex-col items-center">
            <h2 className='text-[52px] w-[50%] text-center font-semibold mb-[32px]'>What Services Come in Influencer Marketing</h2>
        </div>
        
    </div>
  )
}

export default InfluencerMarketing
