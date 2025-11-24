import React from 'react'
import image15 from '../../pages/web3/resources/image15.png'

const Nextgen = () => {
    return (
        <div>
            <section className='flex flex-row max-lg:flex-col items-center mt-24 justify-between max-lg:mt-10 mx-auto max-w-[1440px] px-10 max-lg:px-4'>
                <div className="lg:w-[60%] ">
                    <h2 data-aos="fade-up" className='text-[52px] max-lg:text-3xl font-semibold max-lg:mb-2'>Our Services </h2>
                    <p data-aos="fade-up" className='text-2xl font-semibold'>We are one of the top 10 web development companies in gurgaon</p>
                    <div data-aos="fade-up" className="md:hidden">
                        <img src={image15} alt="Web Development Company" className="w-full h-auto" />
                    </div>
                    <p data-aos="fade-up" className="text-[black] lg:mt-4 text-base mx-auto md:mx-0">
                        WebNest Media develops SEO-optimized websites that ensure the best in class UI/UX design. There’s a perfect blend of performance and visibility. As established website developers in Gurgaon, we provide fast, responsive, user-centric, and demand-generating websites for your online business growth.
                    </p>

                </div>
                <div className="">
                    <div data-aos="fade-up" className=" max-md:hidden">
                        <img src={image15} alt="Web Development Company" className="w-full h-auto" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Nextgen