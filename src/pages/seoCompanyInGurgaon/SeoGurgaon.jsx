import React from 'react'
import { Helmet } from 'react-helmet'
import HeroGurgaon from '../../components/seoGurgaon/HeroGurgaon'
import DriveLeadsAndSales from '../../components/seoGurgaon/DriveLeadsAndSales'
import YourSuccess from '../../components/seoGurgaon/YourSuccess'
import WhatYouCanAccept from '../../components/seoGurgaon/WhatYouCanAccept'
import WhyInvest from '../../components/seoGurgaon/WhyInvest'
import FaqGurgaon from '../../components/seoGurgaon/FaqGurgaon'

const SeoGurgaon = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://webnestmedia.in/#localbusiness",
        "name": "WebNest Media",
        "alternateName": "WebNest Media - SEO Company in Gurgaon",
        "url": "https://webnestmedia.in/seo-company-in-gurgaon",
        "image": "https://webnestmedia.in/assets/newlogo-BlV-nvA1.svg",
        "logo": "https://webnestmedia.in/assets/newlogo-BlV-nvA1.svg",
        "description": "Get top rankings with WebNest Media — the best SEO company in Gurgaon. We offer on-page SEO, link building, local SEO, and complete digital marketing solutions.",
        "telephone": "+91-9696964606",
        "priceRange": "₹999 - ₹9999",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1st Floor, Orchid Business Park, Near Subhash Chowk, Sector 48",
          "addressLocality": "Gurgaon",
          "addressRegion": "Haryana",
          "postalCode": "122018",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.4260573",
          "longitude": "77.0365718"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:30",
            "closes": "18:30"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "1796"
        },
        "areaServed": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          }
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61576616442478",
          "https://www.linkedin.com/company/webnest-media-group/",
          "https://www.instagram.com/webnestmediagroup/"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://webnestmedia.in/#breadcrumb",
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
            "name": "SEO Company in Gurgaon",
            "item": "https://webnestmedia.in/seo-company-in-gurgaon"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://webnestmedia.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why choose WebNest Media as your SEO company in Gurgaon?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "WebNest Media offers proven SEO strategies, transparent reporting, and personalized campaigns that help businesses rank higher on Google and drive real traffic and leads."
            }
          },
          {
            "@type": "Question",
            "name": "What SEO services do you provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our SEO services include on-page SEO, off-page SEO, local SEO, technical SEO audits, keyword research, and link building to boost your search rankings."
            }
          },
          {
            "@type": "Question",
            "name": "How much does SEO cost at WebNest Media?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our SEO packages start at ₹999 and go up to ₹9999 depending on your business size, industry competition, and service requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer local SEO for Gurgaon-based businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, WebNest Media specializes in local SEO for Gurgaon businesses to help them attract more customers from their surrounding areas."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see SEO results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically, you can start seeing measurable SEO improvements within 3 to 6 months, depending on your website's current status and competition."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Best SEO Company in Gurgaon | Affordable SEO Services in Gurgaon</title>

        <meta
          name="description"
          content="Get top rankings with WebNest Media — the best SEO company in Gurgaon. We offer on-page SEO, link building, local SEO, and complete digital marketing solutions."
        />

        <meta
          name="keywords"
          content="SEO Company in Gurgaon, SEO Services in Gurgaon, SEO Agency in Gurgaon, Digital Marketing Company, On-page SEO, Off-page SEO, Link Building"
        />

        <link
          rel="canonical"
          href="https://webnestmedia.in/seo-company-in-gurgaon"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Best SEO Company in Gurgaon | Affordable SEO Services in Gurgaon"
        />
        <meta
          property="og:description"
          content="Get top rankings with WebNest Media — the best SEO company in Gurgaon. We offer on-page SEO, link building, local SEO, and complete digital marketing solutions."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:url"
          content="https://www.webnestmedia.in/seo-company-in-gurgaon"
        />
        <meta
          property="og:image"
          content="https://www.webnestmedia.in/images/seo-company-in-gurgaon-banner.jpg"
        />
        <meta property="og:site_name" content="WebNest Media" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div>
        <HeroGurgaon />
        <DriveLeadsAndSales />
        <YourSuccess />
        <WhatYouCanAccept />
        <WhyInvest />
        <FaqGurgaon />
      </div>
    </>
  )
}

export default SeoGurgaon
