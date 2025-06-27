import React from 'react'
import seocontactimage from "./Resources/mailbox.svg";
import seocontactphoneicon from "./Resources/seocontactphoneicon.svg";
import seolocation from "./Resources/seolocation.svg";
import mailbox from './Resources/mailbox.svg'
import SeoConatct from './Resources/seoconatct.svg'
const Newcontact = () => {
  return (
    <div>
      <section className=''>

        <div className=" bg-cover bg-center flex  items-center py-10"
          style={{
            backgroundImage: `url(${SeoConatct})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // or "contain" if you want full image visible
 // optional: adjust height as needed
            width: "100%",
          }}



        >
          <img src={SeoConatct} alt='ContactUs image' className="hidden" aria-hidden="true" />


          <div className="w-full max-w-7xl  mx-auto flex  flex-col px-[40px]  max-lg:px-[16px] ">
         
            <div className="w-full   ">
              <p className="uppercase text-[16px] font-normal leading-[160%] mb-4 text-[#FFFFFF] ">Contact Us</p>
              <h6 className="text-[32px] max-lg:text-[24px] font-normal leading-[130%] text-white mt-[1.2rem]">
                Let’s make the web   talk about  <br className='max-md:hidden' />your   project
              </h6>
            </div>

           
              <h3 className="text-[24px] font-normal leading-[130%] text-white mt-[50px] max-lg:mt-[10px]">Get a Free Consultation</h3>

              <div className="flex items-center gap-3  mt-[9.5px]">
                <img src={seocontactphoneicon} alt="Phone" className="w-5 h-5" />
                <a href="tel:+919696964606" className='text-[24px] font-normal leading-[130%] text-white'>+91 9696964606</a>
              </div>

              <div className="flex items-center gap-3  mt-[7px] mb-[7px]">
                <img src={seocontactimage} alt="Email" className="w-5 h-5" />
                <a href="mailto:info@webnest.in" className="underline text-[18px] font-normal leading-[130%] text-white">info@webnestmedia.com</a>
              </div>

              <div className="flex gap-3 ">
                <img src={seolocation} alt="Location" className="w-5 h-5 mt-1" />
                <span className='text-[18px] font-normal leading-[130%] text-white'>
                  1st Floor Orchid Business Park,<br />
                  Near Subhash Chowk, Sector 48,<br />
                  Gurugram, Haryana 122001
                </span>
              </div>
            </div>

        </div>
      </section>
    </div>
  )
}

export default Newcontact
