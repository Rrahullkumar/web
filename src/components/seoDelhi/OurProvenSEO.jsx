import React from 'react'
import newimage from "../../pages/seo/resources/newimage.png"
import OurProvenSEOImg from "./resources/stepsSeoDelhi.png"

const OurProvenSEO = () => {
    return (
        <div>
            <div className="max-w-[1440px] w-[100%] mx-auto mt-24 max-lg:mt-10 pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] flex flex-row">
                <div className="lg:w-[60%]">
                    <h2 className="text-5xl max-md:text-3xl font-medium ">
                        Our Proven SEO Process for Delhi/NCR Businesses
                    </h2>
                    <img
                        src={newimage}
                        alt="SEO Company in Delhi"
                        className="w-2/3 lg:hidden mx-auto py-4"
                    />
                    <p className="text-base mt-10 leading-7">
                        WebNest Media is one of the best SEO company in Delhi/NCR. We use a clear and results-oriented approach that makes sure every campaign gets demonstrable progress. We aim to build brand visibility and sustain traffic, and our goal is not just to enhance rankings. We aim to develop a long-term SEO strategy. Every step we take is meant to help businesses in Delhi get to the top of Google, which will help them beat their competitors.
                    </p>
                    
                    
                </div>
                <div className="lg:w-[40%] max-lg:hidden">
                    <img src={OurProvenSEOImg} alt="" className="object-cover lg:w-[90%]" />
                </div>
            </div>
        </div>
    )
}

export default OurProvenSEO