import React from 'react'
import {
    Building2,
    ShoppingBag,
    GraduationCap,
    Heart,
    Plane,
    Briefcase,
    Ruler,
    Laptop
} from 'lucide-react';

const PowerWebsiteggn = () => {
    return (
        <div>
            <section className='max-w-[1440px] mx-auto px-10 max-lg:px-4 mt-24 max-lg:mt-10'>

                <div className=" mb-16 max-lg:mb-10">
                    <h2 className='text-[52px] max-lg:text-3xl font-semibold leading-tight'>
                        Building Powerful Websites <br className='max-md:hidden' />Across All Industries
                    </h2>
                    <p className="text-gray-600 text-base mt-4 max-w-3xl">
                        Tailored web solutions designed for your industry's unique needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Card 1 - Real Estate */}
                    <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 hover:border-green-600 transition-all duration-300 p-6 rounded-2xl group cursor-pointer">
                        <div className="bg-white border-2 border-green-200 group-hover:border-green-600 group-hover:bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                            <Building2 className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors duration-300">
                            Real Estate Websites
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We design engaging real estate websites that display properties beautifully with maps, filters, and inquiry forms. Perfect for builders and agents to attract buyers and generate high-quality leads online.
                        </p>
                    </div>

                    {/* Card 2 - E-commerce */}
                    <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 hover:border-green-600 transition-all duration-300 p-6 rounded-2xl group cursor-pointer">
                        <div className="bg-white border-2 border-green-200 group-hover:border-green-600 group-hover:bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                            <ShoppingBag className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors duration-300">
                            E-commerce Websites
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our e-commerce websites are fast, secure, and designed to increase sales. With modern layouts and smooth checkout experiences, we help businesses boost conversions and build a strong online store presence.
                        </p>
                    </div>

                    {/* Card 3 - Educational */}
                    <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 hover:border-green-600 transition-all duration-300 p-6 rounded-2xl group cursor-pointer">
                        <div className="bg-white border-2 border-green-200 group-hover:border-green-600 group-hover:bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                            <GraduationCap className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors duration-300">
                            Best Educational Websites
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We create the best educational websites for schools and institutes with course listings, student dashboards, and easy navigation, helping educators deliver interactive and accessible online learning experiences.
                        </p>
                    </div>

                    {/* Card 4 - Healthcare */}
                    <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 hover:border-green-600 transition-all duration-300 p-6 rounded-2xl group cursor-pointer">
                        <div className="bg-white border-2 border-green-200 group-hover:border-green-600 group-hover:bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                            <Heart className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors duration-300">
                            Healthcare Websites
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our healthcare websites are professional, mobile-friendly, and built to inspire trust. We integrate features like appointment booking and service details to connect doctors, clinics, and patients effectively.
                        </p>
                    </div>

                    {/* Card 5 - Travel */}
                    <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 hover:border-green-600 transition-all duration-300 p-6 rounded-2xl group cursor-pointer">
                        <div className="bg-white border-2 border-green-200 group-hover:border-green-600 group-hover:bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                            <Plane className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors duration-300">
                            Travel and Hospitality
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We build attractive travel and hospitality websites that inspire bookings and brand trust. Perfect for hotels, resorts, and agencies looking to provide smooth user journeys and travel experiences.
                        </p>
                    </div>

                    {/* Card 6 - Consulting */}
                    <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 hover:border-green-600 transition-all duration-300 p-6 rounded-2xl group cursor-pointer">
                        <div className="bg-white border-2 border-green-200 group-hover:border-green-600 group-hover:bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                            <Briefcase className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors duration-300">
                            Consulting Websites
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our consulting websites help businesses build credibility and attract clients. Designed with clear layouts and conversion-focused messaging, they showcase expertise and drive valuable leads.
                        </p>
                    </div>

                    {/* Card 7 - Architecture */}
                    <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 hover:border-green-600 transition-all duration-300 p-6 rounded-2xl group cursor-pointer">
                        <div className="bg-white border-2 border-green-200 group-hover:border-green-600 group-hover:bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                            <Ruler className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors duration-300">
                            Architecture Websites
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We design modern architecture websites with elegant visuals and project galleries that highlight your creativity, build trust, and attract new clients in the construction and design industry.
                        </p>
                    </div>

                    {/* Card 8 - Software Integration */}
                    <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-100 hover:border-green-600 transition-all duration-300 p-6 rounded-2xl group cursor-pointer">
                        <div className="bg-white border-2 border-green-200 group-hover:border-green-600 group-hover:bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                            <Laptop className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors duration-300">
                            Software Integration
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our software integration websites are built for tech and SaaS companies, focusing on scalability, innovation, and performance to showcase solutions that connect systems and empower businesses.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default PowerWebsiteggn