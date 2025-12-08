import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ContactSection from '../../../components/HearFromYou/HearFromYou'
import WebDevggn from '../../../components/webDevGurgaon/WebDevggn';
import SmartWebSolutions from '../../../components/webDevGurgaon/SmartWebSolutions';
import YourSuccessggn from '../../../components/webDevGurgaon/YourSuccessggn';
import BestWebDevinGgn from '../../../components/webDevGurgaon/BestWebDevinGgn';
import OurAiPoweredggn from '../../../components/webDevGurgaon/OurAiPoweredggn';
import Nextgen from '../../../components/webDevGurgaon/Nextgen';
import Services from '../../../components/webDevGurgaon/services';
import PowerWebsiteggn from '../../../components/webDevGurgaon/PowerWebsiteggn';
import WhyChooseggn from '../../../components/webDevGurgaon/WhyChooseggn';
import Faqggn from '../../../components/webDevGurgaon/Faqggn';

const WebGurgaon = () => {

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://webnestmedia.in/website-development-company-in-gurgaon/#webpage",
                "url": "https://webnestmedia.in/website-development-company-in-gurgaon",
                "name": "Website Development Company in Gurgaon | WebNest Media",
                "description": "WebNest Media is a top website development company in Gurgaon offering custom web design, web development, e-commerce solutions, responsive sites and more to help businesses grow online.",
                "inLanguage": "en-IN",
                "isPartOf": { "@id": "https://webnestmedia.in/#website" },
                "breadcrumb": { "@id": "https://webnestmedia.in/website-development-company-in-gurgaon/#breadcrumb" },
                "mainEntity": { "@id": "https://webnestmedia.in/website-development-company-in-gurgaon/#service" }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://webnestmedia.in/website-development-company-in-gurgaon/#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://webnestmedia.in/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Services",
                        "item": "https://webnestmedia.in/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Website Development Company in Gurgaon",
                        "item": "https://webnestmedia.in/website-development-company-in-gurgaon"
                    }
                ]
            },
            {
                "@type": "Service",
                "@id": "https://webnestmedia.in/website-development-company-in-gurgaon/#service",
                "serviceType": "Website Development",
                "provider": { "@id": "https://webnestmedia.in/#organization" },
                "areaServed": {
                    "@type": "Place",
                    "name": "Gurgaon"
                },
                "url": "https://webnestmedia.in/website-development-company-in-gurgaon",
                "description": "Custom website development, responsive web design, e-commerce development and maintenance services by WebNest Media for businesses in Gurgaon and across India.",
                "offers": {
                    "@type": "Offer",
                    "url": "https://webnestmedia.in/contact",
                    "price": "Varies",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock"
                }
            },
            {
                "@type": "LocalBusiness",
                "@id": "https://webnestmedia.in/#organization",
                "name": "WebNest Media",
                "url": "https://webnestmedia.in/",
                "description": "WebNest Media — a full-service digital agency offering SEO, web development, and digital marketing services from Gurgaon.",
                "telephone": "+91 9696964606",
                "areaServed": {
                    "@type": "Place",
                    "name": "Gurgaon"
                }
            },
            {
                "@type": "Product",
                "name": "Website Development Services by WebNest Media",
                "image": "https://webnestmedia.in/assets/heroggn2-BjcUfEtz.jpg",
                "description": "Premium website development services from WebNest Media — covering custom web design, responsive sites, e-commerce solutions, and maintenance for businesses in Gurgaon.",
                "brand": {
                    "@type": "Brand",
                    "name": "WebNest Media"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "ratingCount": "1065"
                }
            }
        ]
    }

    return (
        <div>
            <Helmet>
                <title>Best Website Development Company in Gurgaon</title>
                <meta name="description" content="WebNest Media is the best website development company in Gurgaon, offering custom web design, eCommerce sites, CMS integration, SEO-friendly, and regular maintenance solutions." />
                <link rel="canonical" href="https://webnestmedia.in/website-development-company-in-gurgaon" />
                <meta name="robots" content="index, follow" />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>

            {/* hero section */}
            <WebDevggn />

            {/* section2 */}
            <SmartWebSolutions />

            {/* section3 */}
            <YourSuccessggn />

            {/* section4 */}
            <BestWebDevinGgn />

            {/* section5 */}
            <OurAiPoweredggn />

            {/* section6 */}
            <Nextgen />

            {/* section 7 */}
            <Services />
            <ContactSection />

            {/* section 8 */}
            <PowerWebsiteggn />

            {/* section 9 */}
            <WhyChooseggn />

            {/* faq section */}
            <Faqggn />
        </div>
    )
}

export default WebGurgaon;
