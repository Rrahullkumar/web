import React from 'react'

const Faqggn = () => {
    return (
        <div>
            <div className="accordian max-w-[1440px] w-[100%] mx-auto mt-[96px]">
                <div>
                    <h2 className="text-center" style={{ fontSize: 32 }}>
                        Let's address your <span className="text-black ">questions </span>
                        today
                    </h2>

                    <div className="accordion-wrapper-columns">
                        {/* Left Column */}
                        <div className="accordion-column ">
                            <div className="accordion">
                                <input type="checkbox" id="left-1" />
                                <label className="accordion-label" htmlFor="left-1">
                                    Why should I choose WebNest Media as my website development company in Gurgaon?
                                </label>
                                <div className="accordion-content">
                                    <p>
                                        WebNest Media delivers high-performance, SEO-optimized, mobile-friendly websites built with modern technologies and AI innovations. With 7+ years of experience, we ensure fast loading speed, clean design, and long-term scalability.

                                    </p>
                                </div>
                            </div>

                            <div className="accordion">
                                <input type="checkbox" id="left-2" />
                                <label className="accordion-label" htmlFor="left-2">
                                    How long does it take to develop a website?
                                </label>
                                <div className="accordion-content">
                                    <p>
                                        The timeline of projects depends on your website and how many more pages are on your website.
                                    </p>
                                </div>
                            </div>

                            <div className="accordion">
                                <input type="checkbox" id="left-3" />
                                <label className="accordion-label" htmlFor="left-3">
                                    Do you offer SEO-friendly website development?
                                </label>
                                <div className="accordion-content">
                                    <p>
                                        Yes. Every website we build is SEO-ready, including optimized structure, mobile responsiveness, fast loading speed, schema integration, and clean code to help you rank higher on Google.
                                    </p>
                                </div>
                            </div>

                            <div className="accordion">
                                <input type="checkbox" id="left-4" />
                                <label className="accordion-label" htmlFor="left-4">
                                    What platforms do you use for website development?
                                </label>
                                <div className="accordion-content">
                                    <p>
                                        We work on all major platforms, including WordPress, Shopify, custom PHP, React, Next.js, Node.js, and Laravel, ensuring the best fit based on your business needs.
                                    </p>
                                </div>
                            </div>

                            <div className="accordion">
                                <input type="checkbox" id="left-5" />
                                <label className="accordion-label" htmlFor="left-5">
                                    Do you provide eCommerce website development in Gurgaon?
                                </label>
                                <div className="accordion-content">
                                    <p>
                                        Absolutely! We build secure, conversion-focused eCommerce websites with payment gateways, product management, fast checkout, and mobile-friendly layouts to increase your online sales.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="accordion-column">
                            <div className="accordion">
                                <input type="checkbox" id="right-6" />
                                <label className="accordion-label" htmlFor="right-6">
                                    Can you redesign my existing website?
                                </label>
                                <div className="accordion-content">
                                    <p>
                                        Yes. We provide complete website redesign services to transform outdated websites into modern, responsive, and conversion-driven platforms that reflect your brand identity and business goals.

                                    </p>
                                </div>
                            </div>

                            <div className="accordion">
                                <input type="checkbox" id="right-7" />
                                <label className="accordion-label" htmlFor="right-7">
                                    Will my website be mobile-friendly and responsive?

                                </label>
                                <div className="accordion-content">
                                    <p>
                                        100%. All websites we develop are fully responsive, ensuring seamless performance across desktops, tablets, and mobile devices.
                                    </p>
                                </div>
                            </div>

                            <div className="accordion">
                                <input type="checkbox" id="right-8" />
                                <label className="accordion-label" htmlFor="right-8">
                                    Do you offer maintenance and support after the website is live?
                                </label>
                                <div className="accordion-content">
                                    <p>
                                        Yes. We provide monthly and yearly maintenance plans including updates, security checks, backups, speed optimization, and technical support to keep your website running smoothly.
                                    </p>
                                </div>
                            </div>

                            <div className="accordion">
                                <input type="checkbox" id="right-9" />
                                <label className="accordion-label" htmlFor="right-9">
                                    How much does a website cost in Gurgaon?

                                </label>
                                <div className="accordion-content">
                                    <p>
                                        The cost of website depends on website structure.
                                    </p>
                                </div>
                            </div>

                            <div className="accordion">
                                <input type="checkbox" id="right-10" />
                                <label className="accordion-label" htmlFor="right-10">
                                    Do you provide AI-powered web development services?
                                </label>
                                <div className="accordion-content">
                                    <p>
                                        Yes. As an AI-powered web development agency in Gurgaon, we integrate smart chatbots, automated SEO, personalized user journeys, predictive analytics, and real-time performance tracking to make your website future-ready.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqggn