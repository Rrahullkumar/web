import React from 'react'
import image16 from '../../pages/web3/resources/webggnsideimage2.jpg';

const WhyChooseggn = () => {
    return (
        <div>
            <section className='flex flex-row max-lg:flex-col items-center mt-24 justify-between max-lg:mt-10 mx-auto max-w-[1440px] px-10 max-lg:px-4 max-lg:mb-10'>
                <div className="lg:w-[60%] ">
                    <h2 className='text-[52px] max-lg:text-3xl font-semibold'>Why Choose Us?</h2>
                    <div data-aos="fade-up" className="md:hidden">
                        <img src={image16} alt="Web Development Company" className="w-full h-auto" />
                    </div>
                    <p data-aos="fade-up" className="text-[black] lg:mt-4 text-base mx-auto md:mx-0">
                        WebNest Media is trusted and over 7+ years of experience in developing high-performing, SEO-optimized websites that drive real business results. We are the best website developers and a trusted website design company in Gurgaon. We use our skills and tailor-made solutions to give you great digital experiences.  We make sure that every website we build will work well, be easy to find, and grow over time.
                        <br /> <br />
                        With AI-powered innovation and a skilled team of software testers, we ensure every project is bug-free, responsive, and scalable. Our focus on SEO-optimized design, dedicated support, and advanced technology helps your brand stand out online. At WebNest Media, we don’t just build websites — we build intelligent, growth-driven digital platforms.

                    </p>

                </div>
                <div className="">
                    <div data-aos="fade-up" className=" max-md:hidden">
                        <img src={image16} alt="Web Development Company" className="w-96 h-auto" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WhyChooseggn