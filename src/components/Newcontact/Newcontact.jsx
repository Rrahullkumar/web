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
            style={{
    backgroundImage: `url(${SeoConatct})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", // or "contain" if you want full image visible
    minHeight: "500px", // optional: adjust height as needed
    width: "100%",
  }}
              
              
              
              >
                <img src={SeoConatct} alt='ContactUs image' className="hidden" aria-hidden="true" />
  

            <div className="w-full max-w-7xl mx-auto flex max-lg:flex-col  md:flex-row items-start justify-between max-lg:pl-[16px] max-lg:pr-[16px]">
              {/* Left Section */}
              <div className="w-full md:w-1/2 mb-12 md:mb-0 max-lg:w-[100%]  ">
                <p className="uppercase text-base leading-7 mb-4 text-[#FFFFFF] ">Contact Us</p>
                <h6 className="text-[52px] max-lg:text-[38px] font-normal leading-snug text-white">
                Let’s make the web <br  className='max-md:hidden'/>  talk about your  <br  className='max-md:hidden'/> project
                </h6>
              </div>
      
             
      
              <div className=" w-px  bg-white  mx-10" />
      

              <div className="w-full md:w-1/2 max-lg:w-full space-y-10 border-l-2 pl-[150px] max-lg:pl-0 max-md:border-none">
  {/* Contact Section */}
  <div className="space-y-3">
    <h3 className="text-[24px] font-normal text-white">Get a Free Consultation</h3>

    <div className="flex items-center gap-3 text-[18px] text-white">
      <img src={seocontactphoneicon} alt="Phone" className="w-5 h-5" />
      <a href="tel:+919696964606">+91 9696964606</a>
    </div>

    <div className="flex items-center gap-3 text-[18px] text-white">
      <img src={seocontactimage} alt="Email" className="w-5 h-5" />
      <a href="mailto:info@webnest.in" className="underline">info@webnest.in</a>
    </div>
  </div>

  {/* Address Section */}
  <div className="space-y-3">
    <h3 className="text-[24px] font-normal text-white">Get a Free Consultation</h3>

    <div className="flex gap-3 text-[18px] text-white">
      <img src={seolocation} alt="Location" className="w-5 h-5 mt-1" />
      <span>
        1st Floor Orchid Business Park,<br />
        Near Subhash Chowk, Sector 48,<br />
        Gurugram, Haryana 122001
      </span>
    </div>
  </div>
</div>

            </div>
          </div>
      </section>
    </div>
  )
}

export default Newcontact
