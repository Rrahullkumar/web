import React from 'react'
import newlogo from "../../pages/seo/resources/newsseologo.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DriveLeadesDelhi = () => {
    return (
        <div>
            <section data-aos="fade-up" className="max-lg:mt-10 mt-24 container px-10 max-lg:px-[16px] flex flex-row-reverse max-lg:flex-col-reverse lg:items-center lg:justify-between mx-auto">

                {/* Image Section */}
                <div className="max-w-[440px] w-full max-lg:w-[80%] mx-auto max-lg:my-10">
                    <LazyLoadImage
                        src={newlogo}
                        alt="WebNest Media Logo"
                        className="w-full h-auto"
                    />
                </div>

                {/* Text Section */}
                <div className="lg:w-[60%]">
                    <h2 className="text-[52px] max-lg:text-[36px] font-semibold">
                        Leading SEO Services in Delhi for Businesses That Want to Rank No.1
                    </h2>
                    <br />
                    <p className="text-base mt-2 font-manrope">
                        WebNest Media is a leading SEO company in Delhi that utilizes established and analytical methods to assist companies prosper. Our New Delhi SEO specialists have been in the industry for over seven years. We have worked with start-ups, SMEs, large corporations to increase qualified traffic, enhance visibility online, and increase conversions.
                    </p>

                    <p className="text-base mt-5 font-manrope">
                        We provide advanced and highly focused SEO services in Delhi and NCR with the aim of strengthening your online position and guaranteeing long term success online. Whether you are a localized business or a national brand, our personalized SEO strategies will provide and attain your desired growth and visibility goals efficiently. This will preserve your competitive edge and promote your position on Google.
                    </p>

                    {/* CTA Button */}
                    <div className="flex gap-3 mt-8">
                        {/* <Link to="/about-us" aria-label="Learn more about our SEO Services"> */}
                        <button
                            onClick={() => scrollToSection("seoservice")}
                            className="uiverse-button"
                            aria-label="Scroll to SEO Service section"
                        >
                            Learn More
                        </button>

                        {/* </Link> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DriveLeadesDelhi