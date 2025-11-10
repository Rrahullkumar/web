import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import ContactSection from "../../components/HearFromYou/HearFromYou.jsx";
import seoicon1 from "../../pages/seo/resources/seoicon1.svg";
import seoicon2 from "../../pages/seo/resources/seoicon2.svg";
import seoicon3 from "../../pages/seo/resources/seoicon3.svg";
import seoicon4 from "../../pages/seo/resources/seoicon4.svg";
import seoicon5 from "../../pages/seo/resources/seoicon5.svg";
import seoicon6 from "../../pages/seo/resources/seoicon6.svg";
import { useState, useRef, useEffect } from "react";
import AnimatedCardList from "../../components/industryCard/AnimatedCardList";

const Impact = () => {

    const features = [
        {
            icon: seoicon1,
            title: "Increased Website Traffic",
            description:
                "Get more qualified visitors through organic search results.",
        },
        {
            icon: seoicon2,
            title: "Higher Search Engine Rankings",
            description:
                "Appear on top of Google for your most valuable keywords.",
        },
        {
            icon: seoicon3,
            title: "Better Leads and Conversions",
            description:
                "Attract potential customers genuinely interested in your offerings.",
        },
        {
            icon: seoicon4,
            title: "Long-Term Return on Investment (ROI)",
            description:
                "Enjoy sustainable results that keep driving growth over time.",
        },
        {
            icon: seoicon5,
            title: "Enhanced Brand Visibility",
            description:
                "Strengthen your brand’s presence and authority in your industry.",
        },
        {
            icon: seoicon6,
            title: "Improved User Experience",
            description:
                "A well-optimized site offers faster performance, easier navigation, and higher user satisfaction.",
        },
    ];


    const secondREf = useRef();
    const [cardtrigger, setCardTrigger] = useState(false);

    useEffect(() => {
        const observer2 = new IntersectionObserver(
            ([entry]) => {
                setCardTrigger(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (secondREf.current) {
            observer2.observe(secondREf.current);
        }

        return () => {
            if (secondREf.current) {
                observer2.unobserve(secondREf.current);
            }
        };
    }, []);

    return (
        <div>
            <section className=" max-w-[1440px] w-[100%] mx-auto mt-24 max-lg:mt-10 pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px]">
                <h2 className="text-[52px] max-md:text-3xl max-md:font-semibold text-[#000000] mb-[36px] max-lg:mb-[20px] leading-snug">
                    The Impact of SEO on Traffic, Leads & Revenue
                </h2>
                <p className="text-base text-[#000000] leading-7 font-[350]">
                    Getting an SEO agency in Delhi/NCR is a good opportunity for a company that is looking to expand online. Good SEO strategy builds your site’s reliability and keeps position trust with your customers. Search engine optimization help you connect with customers who are looking for your goods and service. It help in higher engagement and increase conversions.{" "}
                </p>

                <p className="text-base mb-[10px] text-[#000000] leading-7 font-[350] mt-[20px] max-lg:mt-[10px] max-lg:mb-10">
                    Our established SEO methods help businesses build a strong online presence and stay ahead of the competition.  We focus on getting concrete results that help your business grow, such getting targeted traffic and high-quality leads.
                </p>

                <div className="max-w-6xl max-md:w-[90%]  mx-auto px-4 py-10 max-md:py-0 max-md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[18px]">
                    {features.map((item, index) => (
                        <div
                            data-aos="fade-up"
                            key={index}
                            className=" relative    pb-[24px] pt-[25px] pl-[11px] pr-[11px] rounded-lg text-center"
                        >
                            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#0000008]" />
                            <div className="absolute top-0 right-0 w-12 h-12  border-t-2 border-r-2 border-[#0000008]" />
                            <div className="absolute bottom-0 left-0 w-12 h-12  border-b-2 border-l-2 border-[#0000008]" />
                            <div className="absolute bottom-0 right-0 w-12 h-12  border-b-2 border-r-2 border-[#0000008]" />

                            <div className="flex justify-center  ">
                                {" "}
                                <LazyLoadImage
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-[64px] h-[64px]"
                                />
                            </div>

                            <h3 className="font-bold leading-[120%] text-[#000000] text-[24px] max-md:text-[20px] mb-[12px] mt-[23px] w-[70%]  max-lg:w-[100%] mx-auto ">
                                {item.title}
                            </h3>
                            <p className="text-[#000000] text-base leading-7 max-md:text-base font-normal">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <ContactSection />

                {/* <h2 data-aos="fade-up" className='text-[52px] mt-24  max-md:text-3xl max-md:font-semibold text-[#000000] mb-6 leading-normal'>

                    How SEO Company in Gurgaon Are Redefining Digital Marketing Success
                </h2>
                <p className="text-base text-[#000000] leading-7 font-[350]">
                    Every brand requires more than simply a website. It needs to be seen, trusted, and able to show progress.  A top SEO company in Gurgaon is what makes the difference.  These companies are helping businesses have long-term success online by using advanced analytics, unique content tactics, and SEO methods that Google approves of.  SEO services in Gurgaon are helping businesses of all sizes, from little ones in the area to huge ones throughout the country, gain better rankings, more qualified leads, and a better long-term return on investment.  A professional SEO agency in Gurgaon uses data and puts the consumer first to revolutionize how businesses talk to their customers. They turn search exposure into real company success.{" "}
                </p>

                <p className="text-base mb-[10px] text-[#000000] leading-7 font-[350] mt-[20px] max-lg:mt-[10px] max-lg:mb-10">
                    SEO develops long-lasting digital authority, unlike other marketing approaches that lose their power over time.  Modern businesses try to make sure that every approach is in line with your business goals. This includes making your website structure better, speeding up page load times, and writing content that is interesting and full of keywords that will convert.  A top SEO agency in Gurgaon makes sure your business stays ahead of the competition by constantly tracking, auditing performance, and updating algorithms.  These professionals turn regular websites into powerful growth engines that rule search results and bring in actual business success by combining SEO services in Gurgaon with content marketing, social media, and local SEO.
                </p> */}

                <h2
                    data-aos="fade-up"
                    className="text-[52px] text-center max-md:text-3xl max-md:font-semibold text-[#000000] mb-[36px] leading-snug  mt-[96px] max-lg:mt-[40px] "
                >
                    {" "}
                    <span className="text-[#4CAF50]">SEO Agency</span> for Every{" "}
                    <br className="max:lg:hidden" /> Business Requirement
                </h2>

                <div
                    ref={secondREf}
                    onMouseEnter={() => setCardTrigger(true)}
                    className="industriweserve mb-[96px] mt-[64px] max-md:mt-[40px] w-[100%] max-w-[1440px]  mx-auto overflow-hidden "
                >
                    <AnimatedCardList
                        cardtrigger={cardtrigger}
                        className="animatedcard  jjj "
                        ref={secondREf}
                        onMouseEnter={() => setCardTrigger(true)}
                    />
                </div>

                <h2 data-aos="fade-up" className='text-[52px] lg:text-center max-md:text-3xl max-md:font-semibold text-[#000000] leading-snug mt-[22px] mb-4'>Why Choose Our SEO Agency in Delhi?</h2>
                <p className="text-base text-[#000000] leading-7 font-[350]">
                    The best SEO agency in Delhi can make a big difference in how well you do online.  WebNest Media uses new ideas, specialist knowledge, and methods that are focused on results to help organizations of all sizes get measurable results.  To help your website rank higher and bring in the proper people, our team of SEO experts combines the latest technologies, analytics, and tried-and-true approaches.{" "}
                </p>

                <p className="text-base mb-[10px] text-[#000000] leading-7 font-[350] mt-[20px] max-lg:mt-[10px] max-lg:mb-10">
                    We don't think that one solution works for everyone. Every business is different, and so are our plans.  Our personalized SEO services in Delhi are made to help you reach your goals, get better search engine rankings, and get qualified leads, no matter if you're a new business or an established one.  Work with our reliable SEO agency and see how data-driven optimization can help your brand develop online.
                </p>

            </section>
        </div>
    )
}

export default Impact