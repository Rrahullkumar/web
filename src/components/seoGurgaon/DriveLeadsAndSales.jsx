import React from 'react'
import newlogo from "../../pages/seo/resources/newsseologo.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DriveLeadsAndSales = () => {
    return (
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
                    SEO Company in Gurgaon to Drive Leads & Sales
                </h2>
                <br />
                <p className="text-base mt-2 font-manrope">
                    Nowadays SEO isn't just about getting high ranks; it's also about getting genuine business results.  Search engines have changed, buyers know more, and the way you get people to buy is more planned than ever.  That's where Webnest Media comes in.
                </p>

                <p className="text-base mt-5 font-manrope">
                    Our SEO Services in Gurgaon go beyond basic optimization — we build data-driven strategies designed to attract qualified traffic, convert visitors into customers, and sustain long-term growth. Partner with Webnest Media, your trusted SEO Company in Gurgaon, and experience the impact of a fully managed SEO approach that blends expertise, innovation, and measurable success.
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
    )
}

export default DriveLeadsAndSales