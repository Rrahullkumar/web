import React from 'react'
import seocontactimage from "./Resources/mailbox.svg";
import seocontactphoneicon from "./Resources/seocontactphoneicon.svg";
import seolocation from "./Resources/seolocation.svg";
import mailbox from './Resources/mailbox.svg'
import SeoConatct from './Resources/seoconatct.svg'
const Newcontact = () => {
  return (
    <div>
      <section  className='mt-[60px] mb-[60px]'>
      
         <div className=" bg-cover bg-center flex  items-center py-10"
              style={{ backgroundImage: `url(${SeoConatct})`}}>
            <div className="w-full max-w-7xl mx-auto flex max-lg:flex-col  md:flex-row items-start justify-between">
              {/* Left Section */}
              <div className="w-full md:w-1/2 mb-12 md:mb-0 max-lg:w-[100%]  ">
                <p className="uppercase text-base leading-7 mb-4 text-[#FFFFFF] ">Contact Us</p>
                <h6 className="text-[52px] max-lg:text-[38px] font-normal leading-snug text-white">
                Let’s make the web <br  className='max-md:hidden'/>  talk about your  <br  className='max-md:hidden'/> project
                </h6>
              </div>
      
             
      
              <div className=" w-px  bg-white  mx-10" />
      
              {/* Right Section */}
              <div className="w-full md:w-1/2 space-y-10   max-lg:w-[100%]  border-l-2 border-grey pl-[150px] ">
                <div className='px-[10px] py-[10px]'>
                  <h3 className="text-[24px]   font-normal mb-2 text-[#FFFFFF] ">Get a Free Consultation</h3>
                      <p className="text-[18px] leading-7 flex items-center gap-2 mb-2 text-[#FFFFFF] ">
                  <img src={seocontactphoneicon} /> <a href="mailto:info@webnest.in" className=""> +919696964606</a> </p>
                  
                  <p className="text-[18px] leading-7 flex items-center gap-2 text-[#FFFFFF] ">
                  <img src={seocontactimage} /> <a href="mailto:info@webnest.in" className="underline">info@webnest.in</a>
                  </p>
                </div>
      
                <div className='px-[10px] py-[10px]'>
                  <h3 className="text-[24px]  font-normal mb-2 text-[#FFFFFF] ">Get a Free Consultation</h3>
                  <p className="text-[18px] leading-7 flex items-start gap-2 text-[#FFFFFF] ">
                  <img src={seolocation} /> <span>
                      1st Floor Orchid Business Park,<br />
                      Near Subhash Chowk, Sector 48,<br />
                      Gurugram Haryana 122001
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Newcontact
