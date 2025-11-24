import React from 'react'
// import { Link } from 'react-router-dom';
import {
    Rocket,
    Code2,
    Palette,
    Pencil,
} from 'lucide-react';

const OurAiPoweredggn = () => {
    return (
        <div>
            <section className='max-w-[1440px] mx-auto px-10 max-lg:px-4 mt-24 max-lg:mt-10'>
                <div className="lg:w-[70%]">
                    <h2 className='text-[52px] max-lg:text-3xl font-semibold leading-tight'>
                        Our Development Cycle
                    </h2>
                    <p className="text-base mt-4 text-gray-700">
                        Being a reputable provider of web design and web development company in Gurgaon, we have a creative and effective approach to building aesthetically pleasing, high quality, and goal-oriented websites. Every phase of your project, from conceptualization to implementation, is meticulously structured to guarantee all attention is placed on optimization and performance to ensure the net outcome is a website that is unique and impactful.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-lg:mt-10">

                    {/* Card 1 - Sketch */}
                    <div className="bg-white border-2 border-transparent hover:border-green-600 transition-all duration-300 p-6 rounded-xl group">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-600 transition-colors duration-300">
                                <Pencil className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <span className="text-4xl font-bold text-gray-200 group-hover:text-green-600 transition-colors duration-300">01</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Sketch</h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            We begin by learning about your goals, audience, and vision. Then we make thorough wireframes and layouts that show how your website will be structured and how it will flow.
                        </p>
                    </div>

                    {/* Card 2 - Design */}
                    <div className="bg-white border-2 border-transparent hover:border-green-600 transition-all duration-300 p-6 rounded-xl group">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-600 transition-colors duration-300">
                                <Palette className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <span className="text-4xl font-bold text-gray-200 group-hover:text-green-600 transition-colors duration-300">02</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Design</h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Our creative team makes beautiful, easy-to-use interfaces that show off your brand and make the experience better for visitors on all devices.
                        </p>
                    </div>

                    {/* Card 3 - Development */}
                    <div className="bg-white border-2 border-transparent hover:border-green-600 transition-all duration-300 p-6 rounded-xl group">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-600 transition-colors duration-300">
                                <Code2 className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <span className="text-4xl font-bold text-gray-200 group-hover:text-green-600 transition-colors duration-300">03</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Development</h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Our developers use the newest coding standards and frameworks to turn approved ideas into fast, secure, and scalable websites that are built for performance.
                        </p>
                    </div>

                    {/* Card 4 - Test & Live */}
                    <div className="bg-white border-2 border-transparent hover:border-green-600 transition-all duration-300 p-6 rounded-xl group">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-600 transition-colors duration-300">
                                <Rocket className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <span className="text-4xl font-bold text-gray-200 group-hover:text-green-600 transition-colors duration-300">04</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Test & Live</h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Before launch, we run extensive testing to ensure everything functions perfectly. Once finalized, your website goes live — optimized, responsive, and ready to make an impact online.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default OurAiPoweredggn