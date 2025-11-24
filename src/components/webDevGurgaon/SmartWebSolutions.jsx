import React from 'react'
import c2image from '../../pages/web3/resources/c2image.svg'
import { Link } from 'react-router-dom';

const SmartWebSolutions = () => {
    return (
        <div>
            <section className='flex flex-row max-lg:flex-col gap-20 items-center max-lg:mt-10 mt-24 mx-auto max-w-[1440px]  px-10 max-lg:px-4'>
                <div className="lg:w-[60%] ">
                    <h2 className='text-[52px] leading-[150%]  max-lg:text-3xl font-semibold max-lg:mb-4'>Smart Web Solutions for Brands</h2>

                    <p data-aos="fade-up" className="text-[black] lg:mt-4 text-base mx-auto md:mx-0">
                        We create responsive, modern, SEO-friendly, and engagement-boosting websites to help your company enhance your brand's value, as we are the best website development company in Gurgaon. Each of our specialists concentrates individually on the performance, design, and functionality of your website in order to provide web solutions that increase growth, improve visibility, and improve your online presence.</p>
                    <Link to="/contact-us"
                        aria-label="WebNest Media  Get Started"

                    >
                        <button
                            className='uiverse-button mt-8'>
                            Get Started
                        </button>
                    </Link>
                </div>

                <div data-aos="fade-up" className="">
                    <img src={c2image} alt="Web Development Company" className="w-full h-auto max-lg:w-[80%] max-lg:mx-auto" />

                </div>
            </section>
        </div>
    )
}

export default SmartWebSolutions