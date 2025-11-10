import React from 'react'
import newimage from "../../pages/seo/resources/newimage.png";

const HowOurSEOIsDiffrent = () => {
    return (
        <div className="max-w-[1440px] w-[100%] mx-auto mt-24 max-lg:mt-10 pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] flex flex-row">
            <div className="lg:w-[60%]">
                <h2 className="text-5xl max-md:text-3xl font-medium ">
                    How Our SEO Services Are Different from Other SEO Companies in Mumbai?
                </h2>
                <img
                    src={newimage}
                    alt=""
                    className="w-2/3 lg:hidden mx-auto py-4"
                />
                <p className="text-base mt-10 leading-7">
                    While a lot of SEO companies operating in Mumbai guarantee immediate results, only a handful ensure continued growth in the future. We prioritize honesty, integrity, and the use of analytics in order to provide SEO services that will ensure durable success.
                </p>
                
                <ul className="flex flex-wrap text-base  pl-[30px] mt-[12px]">
                    <li data-aos="fade-up" className="list-disc">
                        We provide 100% white-hat SEO services that follow Google’s guidelines.
                    </li>

                    <li data-aos="fade-up" className="list-disc">
                        Our strategies are fully aligned with search engine algorithms and updates.
                    </li>
                    <li data-aos="fade-up" className="list-disc">
                        We begin with in-depth keyword research and site structure optimization.
                    </li>
                    <li data-aos="fade-up" className="list-disc">
                        You get unlimited keyword targeting based on your business goals.
                    </li>
                    <li data-aos="fade-up" className="list-disc">
                        Visible results start within two months, backed by consistent growth.
                    </li>
                    <li data-aos="fade-up" className="list-disc">
                        Receive a detailed monthly SEO report showing performance and improvements.
                    </li>
                </ul>
            </div>
            <div className="lg:w-[40%] max-lg:hidden">
                <img src={newimage} alt="" className="object-cover lg:w-[90%]" />
            </div>
        </div>
    )
}

export default HowOurSEOIsDiffrent