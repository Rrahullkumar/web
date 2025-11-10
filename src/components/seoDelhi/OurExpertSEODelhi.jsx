import React from 'react'

const OurExpertSEODelhi = () => {

    const trustData = [
    {
      title: "On-Page SEO",
      text: "We ensure that all aspects of your website—meta tags, headings, content, and internal links—are fully aligned with the Google ranking criteria.",
    },
    {
      title: "Technical SEO",
      text: "IT specialists resolve crawl issues, enhance site speed, improve mobile usability, and optimize indexing processes so that your site performs better in search engines.",
    },
    {
      title: "Off-Page SEO",
      text: "We build high-quality backlinks through guest blogs, business listings, and outreach efforts that boost your brand's reputation and domain authority.",
    },
    {
      title: "Local SEO",
      text: "We optimize your Google Business Profile, local citations, and location-based keywords to bring in clients who live nearby. This is great for businesses who want to reach people in Delhi NCR.",
    },
    {
      title: "E-commerce SEO",
      text: "We help online retailers get more people to see their products and make more sales by optimizing categories, using structured data, and targeting keywords based on products.",
    },
    {
      title: "Content Marketing",
      text: "Our team crafts engaging content optimized for search engines that builds trust, attracts organic traffic, and converts visitors into happy customers.",
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
                        Explore Our Expert
                    </p>
                    <h2
                        data-aos="fade-up"
                        className="text-[52px] max-md:text-[32px] mb-[26px] font-semibold text-center leading-snug"
                    >
                        <span className="highlight">SEO</span> <span> Services in Delhi NCR</span>
                    </h2>

                    <p
                        data-aos="fade-up"
                        className="text-base font-normal leading-7   mb-[83px]  text-center "
                    >
                        Each service is part of a custom-built strategy focused on helping your business achieve sustainable SEO results in Delhi and NCR.
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

export default OurExpertSEODelhi