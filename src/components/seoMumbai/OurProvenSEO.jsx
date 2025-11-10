import React from 'react'
import seoicon1 from "../../pages/seo/resources/seoicon1.svg";
import seoicon2 from "../../pages/seo/resources/seoicon2.svg";
import seoicon3 from "../../pages/seo/resources/seoicon3.svg";
import seoicon4 from "../../pages/seo/resources/seoicon4.svg";
import seoicon5 from "../../pages/seo/resources/seoicon5.svg";
import seoicon6 from "../../pages/seo/resources/seoicon6.svg";

import AnimatedCardList from "../../components/industryCard/AnimatedCardList.jsx";

import { useState, useRef, useEffect } from "react";

import ContactSection from "../../components/HearFromYou/HearFromYou.jsx";

import { LazyLoadImage } from "react-lazy-load-image-component";


const OurProvenSEO = () => {

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

    const features = [
        {
            icon: seoicon1,
            title: "Increased Local Visibility",
            description:
                "Appear on top of Google search results and maps when customers near you search for your products or services.",
        },
        {
            icon: seoicon2,
            title: "Targeted Traffic",
            description:
                "Drive relevant visitors to your website who are genuinely interested in your offerings, improving conversion rates.",
        },
        {
            icon: seoicon3,
            title: "Higher Brand Credibility",
            description:
                "Ranking on the first page builds trust among users and positions your brand as an industry leader in Mumbai.",
        },
        {
            icon: seoicon4,
            title: "Better ROI Compared to Paid Ads",
            description:
                "SEO delivers long-term organic results without the continuous spend required for paid campaigns.",
        },
        {
            icon: seoicon5,
            title: "Mobile & Voice Search Optimization",
            description:
                "Reach customers using smartphones and voice search, which dominate local search behavior in Mumbai.",
        },
        {
            icon: seoicon6,
            title: "Sustainable Business Growth",
            description:
                "Continuous SEO efforts lead to steady traffic, loyal customers, and lasting online authority for your business.",
        },
    ];

    const trustDatasecond = [
    {
      title: "In-Depth Website Audit",
      text: "We analyze your entire website structure, technical performance, and content quality to identify gaps and opportunities for improvement.",
    },
    {
      title: "Comprehensive Keyword Research",
      text: "Our team finds the most relevant and high-performing keywords that align with your business goals and audience intent.",
    },
    {
      title: "On-Page Optimization",
      text: "We optimize titles, meta tags, content, and internal links to ensure search engines and users easily understand your pages.",
    },
    {
      title: "Technical SEO Improvements",
      text: "From fixing crawl issues to improving site speed and mobile-friendliness, we make your website technically strong and SEO-ready.",
    },
    {
      title: "High-Quality Link Building",
      text: "We build backlinks from trusted and niche-relevant websites to boost your site authority and improve rankings organically.",
    },
    {
      title: "Content Optimization & Strategy",
      text: "Engaging, keyword-rich, and valuable content is created or refined to attract visitors and convert them into customers.",
    },
    {
      title: "Monthly Reporting & Performance Tracking",
      text: "We share detailed SEO reports showing keyword growth, traffic stats, and ROI so you can track progress transparently.",
    },
  ];

    return (
        <div>
            <section className=" max-w-[1440px] w-[100%] mx-auto mt-24 max-lg:mt-10 pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px]">
                <h2 className="text-[52px] max-md:text-3xl max-md:font-semibold text-[#000000] mb-[36px] max-lg:mb-[20px] leading-snug">
                    Key Benefits of SEO for Local Businesses in Mumbai
                </h2>
                <p className="text-base text-[#000000] leading-7 font-[350]">
                    Building a business in a busy city such as Mumbai needs more than just an online presence - it needs visibility. Taking on a leading SEO company in Mumbai allows your brand to show up to customers looking on Google Maps and in Google search results. With Local SEO your business gets recognized by the correct people at the correct time.{" "}
                </p>

                <p className="text-base mb-[10px] text-[#000000] leading-7 font-[350] mt-[20px] max-lg:mt-[10px] max-lg:mb-10">
                    Local businesses in Mumbai may enhance their ranking, get good leads, and build trust with their clientele over time by hiring professional SEO services. SEO is good for all types of businesses, from cafes to clinics to real estate companies, because it helps you identify local clients who need what you have.
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

                <h2 data-aos="fade-up" className='text-[52px] mt-24  max-md:text-3xl max-md:font-semibold text-[#000000] mb-6 leading-normal'>

                    Our Proven SEO Process to Deliver Top Rankings and Real Results
                </h2>
                <p
                    data-aos="fade-up"
                    className="text-base text-[#000000] leading-7 font-[350]"
                >
                    A good SEO campaign is based on a plan, consistency, and actions that can be measured.  As a results-oriented SEO agency in Mumbai, we use a clear and tested method to assist your website go up in search rankings and get the proper visitors.  We want to help you grow for real, not merely get a lot of traffic for a short time.{" "}
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

                <h2 data-aos="fade-up" className='text-[52px] lg:text-center max-md:text-3xl max-md:font-semibold text-[#000000] leading-snug mt-[22px] mb-4'>Here’s How our SEO process works:</h2>
                <p data-aos="fade-up" className='text-base  lg:text-center text-[#000000]leading-7  font-[350] lg:mx-24'>
                    WebNest Media is the best SEO agency in India. We provide the best SEO services for every organization. Our SEO tech expert team is capable of understanding how different industries work             </p>

            </section>

            <section className='mt-[62px] max-lg:mt-[40px] container w-[100%] mx-auto  pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px]'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] ">
                    {trustDatasecond.map((item, index) => (
                        // <div className="trust-card " >
                        <div
                            data-aos="fade-up"
                            key={index}
                            className="bg-[#EFF4EE] lg:min-h-[200px]  rounded-[12px] pb-[22px]  pl-[38px] pr-[38px] pt-[24px] max-lg:py-[16px] max-lg:px-[16px] shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1"
                        >
                            <h3 className="flex items-end mb-9 max-md:mb-6 gap-2 max:md:h-4 max-md:items-start ">
                                <span className=" text-[30px] max-md:text-[24px] text-[#EEC370] font-medium  ">
                                    {index + 1}.
                                </span>
                                <span className="text-[20px] text-[#4CAF50] font-medium  pb-[4px]">
                                    {item.title}
                                </span>
                            </h3>

                            <p className="text-base leading-relaxed ">{item.text}</p>
                        </div>
                    ))}
                </div>

                <h2 data-aos="fade-up" className='text-[52px] mt-24  max-md:text-3xl max-md:font-semibold text-[#000000] mb-6 leading-normal'>

                    Why Does Your Business Need an SEO Company in Mumbai?
                </h2>
                <p
                    data-aos="fade-up"
                    className="text-base text-[#000000] leading-7 font-[350]"
                >
                    Over 90% of internet activities commence with search engines. If your company does not feature on Google, you lose clients daily. Collaborating with top SEO company in Mumbai like WebNest Media, makes your brand distinguishable in the competitive online environment, reaching your target audience at the optimal moment. Underlining the importance of a sound SEO strategy are the millions of local searches conducted every month.{" "}
                </p>
                <p
                    data-aos="fade-up"
                    className="text-base text-[#000000] leading-7 font-[350] "
                >
                    WebNest Media integrates strategic, creative, and technological disciplines to achieve tangible outcomes. Being recognized as the finest SEO agency in Mumbai, we comprehensively optimize your entire online presence — including target keywords, technical SEO, link building, and local SEO. Our specialized SEO services in Mumbai aim to enhance visibility, attract relevant traffic, and convert window shoppers into paying customers. With our tried-and-true system, your enterprise witnesses growth in addition to the improvements in your search positions.{" "}
                </p>
            </section>
        </div>
    )
}

export default OurProvenSEO