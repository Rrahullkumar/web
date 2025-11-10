import React from 'react'

const ServicesWeOffer = () => {

    const trustData = [
        {
            title: "On-Page SEO Optimization",
            text: "We increase your website's structure along with the titles, meta tags, and textual content so that it becomes easy for search engines to find. This helps Google understand your pages better and increases their rank for relevant keywords.",
        },
        {
            title: "Off-Page & Link Building",
            text: "Off page activity (backlinks) helps your domain authority and rankings, our team develops high quality backlinks from reliable sources.  We only use white-hat methods that guarantee safe, long-term SEO growth.",
        },
        {
            title: "Local SEO Services",
            text: "We help businesses in Mumbai appear on top of local searches by optimizing Google Business Profiles, maps, and local citations. This ensures more calls, visits, and customers from your area.",
        },
        {
            title: "Technical SEO Audit",
            text: "Our experts analyze and fix all technical issues like page speed, broken links, indexing, and mobile optimization to make sure your site performs at its best for users and search engines.",
        },
        {
            title: "Content Strategy & Optimization",
            text: "We plan, create, and optimize content that attracts the right audience. From blogs to web pages, we make your content both keyword-rich and conversion-focused.",
        },
        {
            title: "SEO Reporting & Analytics",
            text: "We provide detailed monthly SEO reports showing keyword performance, traffic growth, and ROI. You’ll always know how your SEO campaigns are performing and where improvements are made.",
        },
    ];

    return (
        <div>
            <section className="" id="seoservice">
                <div className=" max-w-[1440px] w-[100%] mx-auto  pl-[40px] pr-[40px]  max-md:pl-[16px] max-md:pr-[16px]   mt-[96px]">
                    <p
                        data-aos="fade-up"
                        className="text-[#EEC370]  text-lg font-normal leading-7  text-center mb-[6px]"
                    >
                        {" "}
                        Services We Offer as an
                    </p>
                    <h2
                        data-aos="fade-up"
                        className="text-[52px] max-md:text-[32px] mb-[26px] font-semibold text-center leading-snug"
                    >
                        <span className="highlight">SEO</span> <span> Agency In Mumbai </span>
                    </h2>

                    <p
                        data-aos="fade-up"
                        className="text-base font-normal leading-7   mb-[83px]  text-center "
                    >
                        We are the #1 Search Engine Optimization provider trusted by Mumbai businesses.
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
        </div>
    )
}

export default ServicesWeOffer