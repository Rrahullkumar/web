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
import gurgaonSideImg from "../../pages/seo/resources/gurgaonsideimg.png"


const WhyInvest = () => {

    const features = [
        {
            icon: seoicon1,
            title: "Increases Online Visibility",
            description:
                "Stand out from your competitors with higher Google rankings in SERP and makes stronger presence where your customers are searching.",
        },
        {
            icon: seoicon2,
            title: "Drive Targeted, High-Intent Traffic",
            description:
                "Get people who are actively looking for your products or services to come to your site. This will lead to more interaction and a higher chance of conversion.",
        },
        {
            icon: seoicon3,
            title: "Build Long-Term Business Growth",
            description:
                "Consistent SEO efforts help establish your business as a trusted name in your industry.",
        },
        {
            icon: seoicon4,
            title: "Get Better ROI Than Paid Ads",
            description:
                "Unlike paid campaigns that stop when you stop spending, SEO delivers continuous organic growth over time.",
        },
        {
            icon: seoicon5,
            title: "Stay Ahead of Competitors",
            description:
                "With data-backed strategies and local expertise, you can outrank and outperform your rivals.",
        },
        {
            icon: seoicon6,
            title: "Strengthen Local Presence",
            description:
                "Optimize for local search results and connect with customers near you — a must for growing brands in any city.",
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
        <section className=" max-w-[1440px] w-[100%] mx-auto mt-24 max-lg:mt-10 pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px]">
            {/* <h2 className="text-[52px] max-md:text-3xl max-md:font-semibold text-[#000000] mb-[36px] max-lg:mb-[20px] leading-snug">
                Why Your Business Should Invest in SEO Company in Gurgaon?
            </h2>
            <p className="text-base text-[#000000] leading-7 font-[350]">
                Every business requires more than simply a website; it has to be seen, trusted, and developed steadily. We, as the best SEO services in Gurgaon can help your brand reach the right people at the right time.  A good SEO expert in Gurgaon can help your business show up higher in search results, talk to potential clients, and turn clicks into loyal customers.{" "}
            </p>

            <p className="text-base mb-[10px] text-[#000000] leading-7 font-[350] mt-[20px] max-lg:mt-[10px] max-lg:mb-10">
                If you engage a good SEO expert in Gurgaon, your business will show up higher in search results, communicate with potential customers, and turn clicks into loyal customers. Getting higher rankings isn't the only goal of SEO. It's also about getting measurable financial results, building brand authority, and making the user experience better.
            </p> */}
            <div className="max-w-[1440px] w-[100%] mx-auto mt-24 max-lg:mt-10  flex flex-row gap-6 ">
                <div className="lg:w-[60%]">
                    <h2 className="text-5xl max-md:text-3xl font-medium ">
                        Why Your Business Should Invest in SEO Company in Gurgaon?
                    </h2>
                    {/* <img
                        src={newimage}
                        alt=""
                        className="w-2/3 lg:hidden mx-auto py-4"
                    /> */}
                    <p className="text-base mt-10 leading-7">
                        Every business requires more than simply a website; it has to be seen, trusted, and developed steadily. We, as the best SEO services in Gurgaon can help your brand reach the right people at the right time.  A good SEO expert in Gurgaon can help your business show up higher in search results, talk to potential clients, and turn clicks into loyal customers.
                    </p>
                    <p className="text-base mt-4 leading-7">
                        If you engage a good SEO expert in Gurgaon, your business will show up higher in search results, communicate with potential customers, and turn clicks into loyal customers. Getting higher rankings isn't the only goal of SEO. It's also about getting measurable financial results, building brand authority, and making the user experience better.
                    </p>
                    
                </div>
                <div className="lg:w-[40%] max-lg:hidden">
                    <img src={gurgaonSideImg} alt="SEO Services in Gurgaon" className="object-cover lg:w-[100%]" />
                </div>
            </div>

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

            <h2 data-aos="fade-up" className='text-[52px] mt-24  max-md:text-3xl max-md:font-semibold text-[#000000] mb-6 leading-normal'>

                How SEO Company in Gurgaon Are Redefining Digital Marketing Success
            </h2>
            <p className="text-base text-[#000000] leading-7 font-[350]">
                Every brand requires more than simply a website. It needs to be seen, trusted, and able to show progress.  A top SEO company in Gurgaon is what makes the difference. WebNest Media is a company that helps businesses to have long-term success online by using advanced analytics, unique content tactics, and SEO methods that Google approves of.  SEO services in Gurgaon are helping businesses of all sizes, from little ones in the area to huge ones throughout the country, gain better rankings, more qualified leads, and a better long-term return on investment.  A professional SEO agency in Gurgaon uses data and puts the consumer first to revolutionize how businesses talk to their customers. They turn search exposure into real company success.{" "}
            </p>

            <p className="text-base mb-[10px] text-[#000000] leading-7 font-[350] mt-[20px] max-lg:mt-[10px] max-lg:mb-10">
                SEO develops long-lasting digital authority, unlike other marketing approaches that lose their power over time.  Modern businesses try to make sure that every approach is in line with your business goals. This includes making your website structure better, speeding up page load times, and writing content that is interesting and full of keywords that will convert.  A top SEO agency in Gurgaon makes sure your business stays ahead of the competition by constantly tracking, auditing performance, and updating algorithms.  These professionals turn regular websites into powerful growth engines that rule search results and bring in actual business success by combining SEO services in Gurgaon with content marketing, social media, and local SEO.
            </p>

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

            <h2 data-aos="fade-up" className='text-[52px] lg:text-center max-md:text-3xl max-md:font-semibold text-[#000000] leading-snug mt-[22px] mb-4'>Why Choose WebNest Media for SEO Services?</h2>
            <p className="text-base text-[#000000] leading-7 font-[350]">
                Good SEO does more than just improve your results; it also creates trust, brings in the appropriate people, and helps your business expand over time. We are a reliable SEO company in Gurgaon that focuses on getting to know your business goals and making plans that really work.  Our team of SEO experts in Gurgaon uses both creativity and data to make your website easier to find and interact with real people.{" "}
            </p>

            <p className="text-base mb-[10px] text-[#000000] leading-7 font-[350] mt-[20px] max-lg:mt-[10px] max-lg:mb-10">
                We take care of every aspect — from on-page SEO that strengthens your website’s structure and content, to off-page SEO techniques that enhance your online authority through high-quality backlinks. Every piece of content we create is crafted to engage your audience and help search engines recognize your brand’s value. With WebNest Media, you get more than SEO — you get a growth partner dedicated to your long-term success.
            </p>

        </section>
    )
}

export default WhyInvest