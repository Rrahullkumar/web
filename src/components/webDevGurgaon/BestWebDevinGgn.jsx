import React from 'react'
import {
    Code2,
    Server,
    Layers,
    Palette,
} from 'lucide-react';

const BestWebDevinGgn = () => {
    return (
        <div>
            <section className='max-w-[1440px] mx-auto px-10 max-lg:px-4 mt-24 max-md:mt-10   '>
                <div className=' '>
                    <h2 className='text-[52px] max-lg:text-3xl mb-9 font-semibold  '>Best Website Development Company in Gurgaon | Ready to Launch Websites
                    </h2>
                    <p className='text-base'>
                        Build your online presence confidently with the best website development company in Gurgaon. We focus on high-quality, ready-to-launch websites that are built for speed, performance, and impact with ready-to-launch sites. As the trusted web development company in Gurgaon, we help brands modern, stand with seamless, designs, functionally responsive layouts. Claims that make a difference.


                        <br /> <br />
                        Our team will guarantee that your website is visually appealing as well as functional on every device, no matter the scale or experience of your business. Work with a professional website designing company in Gurgaon that appreciates your business objectives while transforming your ideas into a digital experience that engages, converts, and expands your business.

                    </p>
                </div>



                <div className="w-full mt-24 max-lg:mt-10">
                    <h2 className="text-[52px] max-lg:text-3xl mb-9 font-semibold w-full">
                        Our AI Powered Web Development Agency in Gurgaon
                    </h2>

                    <p className="text-base w-full">
                        Inspired by innovation and AI, our web development agency in Gurgaon creates smart, performance-centric websites that change user interactions with your brand. Using automation and data insights, we provide adaptive digital platforms that grow and change with user behavior. Using advanced AI website builder technology, we deliver the best AI websites for long-term success.
                    </p>

                    <p className="text-lg font-semibold mt-4 w-full">
                        What’s Included in Our AI-Powered Web Development Services:
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 mt-4 list-disc pl-6">
                        <li className="text-base">• Smart chatbots and AI-driven customer support</li>
                        <li className="text-base">• Personalized user experiences based on behavior</li>
                        <li className="text-base">• AI-integrated analytics and performance tracking</li>
                        <li className="text-base">• Voice and visual search compatibility</li>
                        <li className="text-base">• Automated SEO and content optimization</li>
                        <li className="text-base">• Predictive recommendations for users</li>
                        <li className="text-base">• Real-time website performance monitoring</li>
                        <li className="text-base">• Enhanced security through AI threat detection</li>
                    </ul>
                </div>



                <div className=' mx-auto'>
                    <h2 className='text-[52px] max-lg:text-3xl mb-9 font-semibold mt-24 max-md:mt-10  mx-auto'>Powering Websites with Next-Gen Technology</h2>
                    <p className='text-base'>We use the latest and most reliable web technologies to build fast, secure, and scalable websites that deliver seamless digital experiences. Our focus is on combining innovation with performance, ensuring every website we create is optimized for speed, functionality, and long-term success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 mt-10 max-lg:mt-10 max-w-7xl mx-auto text-center">

                    {/* Card 1 */}
                    <div className="bg-white p-6 flex flex-col items-center text-center h-full">
                        <Code2 className="text-green-600 w-10 h-10 mb-4" />
                        <div className="h-20 flex items-center justify-center mb-4">
                            <h3 className="font-semibold text-2xl">Front-End Development</h3>
                        </div>
                        <p className="text-gray-600 text-base min-h-[140px]">
                            Crafting visually stunning and responsive interfaces using HTML, CSS, JavaScript, and modern frameworks like React and Vue.js.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 flex flex-col items-center text-center h-full">
                        <Server className="text-green-600 w-10 h-10 mb-4" />
                        <div className="h-20 flex items-center justify-center mb-4">
                            <h3 className="font-semibold text-2xl">Back-End Development</h3>
                        </div>
                        <p className="text-gray-600 text-base min-h-[140px]">
                            Building strong, secure, and high-performing server systems using Node.js, PHP, Python, and robust databases like MySQL and MongoDB.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 flex flex-col items-center text-center h-full">
                        <Layers className="text-green-600 w-10 h-10 mb-4" />
                        <div className="h-20 flex items-center justify-center mb-4">
                            <h3 className="font-semibold text-2xl">Full-Stack Development</h3>
                        </div>
                        <p className="text-gray-600 text-base min-h-[140px]">
                            Delivering complete end-to-end web solutions that integrate powerful front-end design with dynamic back-end functionality.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-6 flex flex-col items-center text-center h-full">
                        <Palette className="text-green-600 w-10 h-10 mb-4" />
                        <div className="h-20 flex items-center justify-center mb-4">
                            <h3 className="font-semibold text-2xl">UI/UX Design</h3>
                        </div>
                        <p className="text-gray-600 text-base min-h-[140px]">
                            Designing intuitive, user-friendly, and engaging experiences that connect brands with their audience effortlessly.
                        </p>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default BestWebDevinGgn