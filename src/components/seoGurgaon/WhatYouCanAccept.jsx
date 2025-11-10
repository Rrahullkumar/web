import React from 'react'

const WhatYouCanAccept = () => {

     const trustData = [
    {
      title: "Advanced Keyword Research & Strategy",
      text: "Our team of experts do keyword research according to your business and finds out exactly what your audience is looking for.  We use both data-driven understanding and competitor analysis to create a keyword strategy, which helps in targeted, high-intent traffic—real business leads, not just numbers.",
    },
    {
      title: "On-Page & Technical SEO Optimization",
      text: "We make sure your website passes all of Google's algorithms by optimizing titles, meta descriptions, and internal links on the page. We also speed up the site, making it easier to use on mobile devices, and make it easier for Google to crawl. This helps to make your pages load faster, operate better, and show up higher on all devices.",
    },
    {
      title: " Content Creation & Optimization",
      text: "Good content is the first step to great SEO. Our content team makes and improves blogs, landing pages, and other online content that people appreciate and that search engines can read. Every piece of content is designed to get more people to see it, interact with it, and buy it.",
    },
    {
      title: "High-Quality Link Building & Authority Growth",
      text: "We build high quality backlinks so that your domain’s authority will be high. We help your website get the credibility and relevance it needs to move up the rankings and stay there by getting backlinks from reliable sites, industry blogs, and local directories.",
    },
    {
      title: "Local SEO & Performance Tracking",
      text: "Use optimized Google Business Profiles, local reviews, and geo-targeted keywords to gain clients in your area.  We also give you complete performance statistics and analytics tracking so you can keep an eye on your keyword growth, traffic, and return on investment (ROI) at every stage.",
    },
  ];

  return (

    <section className="" id="seoservice">
          <div className=" max-w-[1440px] w-[100%] mx-auto  pl-[40px] pr-[40px]  max-md:pl-[16px] max-md:pr-[16px]   mt-[96px]">
            <p
              data-aos="fade-up"
              className="text-[#EEC370]  text-lg font-normal leading-7  text-center mb-[6px]"
            >
              {" "}
              What You Can Expect from WebNest Media’s
            </p>
            <h2
              data-aos="fade-up"
              className="text-[52px] max-md:text-[32px] mb-[26px] font-semibold text-center leading-snug"
            >
              <span className="highlight">SEO</span> <span> Services </span>
            </h2>

            <p
              data-aos="fade-up"
              className="text-base font-normal leading-7   mb-[83px]  text-center "
            >
              SEO agency in Gurgaon delivering 7+ Years of digital growth and industry experience
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
              {trustData.map((item, index) => (
                // <div className="trust-card " >
                <div
                  data-aos="fade-up"
                  key={index}
                  className="bg-[#EFF4EE]   rounded-[12px] pb-[22px]  pl-[38px] pr-[38px] pt-[24px] max-lg:py-[16px] max-lg:px-[16px] shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1"
                >
                  <h3 className="flex items-end mb-[36px] max-sm:mb-[26px] gap-2  ">
                    <span className=" text-[30px] max-md:text-[26px] text-[#EEC370] font-medium  ">
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
          </div>
        </section>
  )
}

export default WhatYouCanAccept