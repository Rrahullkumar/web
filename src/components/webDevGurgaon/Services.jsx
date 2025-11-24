import React from 'react'
import { FaWordpress, FaShoppingCart, FaBusinessTime, FaBlogger, FaGraduationCap, FaUsers, FaCalendarAlt, FaWpforms } from "react-icons/fa";


const Services = () => {

    const cardData = [
        {
            id: 1,
            title: "WordPress Websites",
            description:
                "We make beautiful WordPress websites that are easy to use and properly represent your business.  We make sure your business website, blog, or portfolio is quick, safe, and ready to go.",
            icon: <FaWordpress />,
        },
        {
            id: 2,
            title: "E-commerce Websites",
            description:
                "Start selling online with confidence. Our eCommerce websites are designed to load fast, look amazing, and make your shopping experience effortless — from browsing to checkout.",
            icon: <FaShoppingCart />,
        },
        {
            id: 3,
            title: "Shopify Websites",
            description:
                "Take your store to the next level with a sleek, conversion-focused Shopify website. We set up everything — from design to payments — so you can focus on growing your sales.",
            icon: <FaBusinessTime />,
        },
        {
            id: 4,
            title: " Business Websites",
            description:
                "Your website is your brand’s first impression — we make sure it’s a great one. Our business websites are clean, responsive, and designed to turn visitors into leads.",
            icon: <FaBlogger />,
        },
        {
            id: 5,
            title: "Portfolio Websites",
            description:
                "Show your creativity with a beautifully crafted portfolio site that highlights your best work and helps you impress clients and employers alike.",
            icon: <FaGraduationCap />,
        },
        {
            id: 6,
            title: "Blog Websites",
            description:
                "Share your thoughts and tales on a professional blog that is easy to find and manage content on, and is optimised for search engines.",
            icon: <FaUsers />,
        },
        {
            id: 7,
            title: "Educational Websites",
            description:
                "We develop educational technology solutions that facilitate the creation of interactive learning environments in schools and virtual schools which capture the users attention and promote effective student engagement.",
            icon: <FaCalendarAlt />,
        },
        {
            id: 8,
            title: " Real Estate Websites",
            description:
                "Show off your homes with beautiful, easy-to-use real estate websites that get buyers interested and bring in leads.  We create platforms that are visually appealing, good for SEO, and easy to use for viewing listings and making purchases.",
            icon: <FaWpforms />,
        },
    ];

    return (
        <div>
            <section className='max-w-[1440px] mx-auto w-[100%] px-10 py-10 max-md:pt-2 max-md:pb-4'>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
                    {cardData.map((card) => (
                        <div data-aos="fade-up"
                            key={card.id}
                            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer flex flex-col h-full"
                        >
                            <div className="flex flex-col h-full">

                                {/* Icon and Title Row */}
                                <div className='flex items-center gap-3 mb-3 max-h-12'>
                                    <h6 className="w-[24px] h-[24px] flex items-center justify-center">
                                        {card.icon}
                                    </h6>
                                    <h4 className="text-base sm:text-lg font-semibold text-[#1a1a1a]">{card.title}</h4>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm flex-1">{card.description}</p>

                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </div>
    )
}

export default Services