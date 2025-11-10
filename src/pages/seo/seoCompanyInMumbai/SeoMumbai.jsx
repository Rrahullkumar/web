import React from 'react'
import { Helmet } from 'react-helmet'
import HeroMumbai from '../../../components/seoMumbai/HeroMumbai'
import GrowOnlinePresence from '../../../components/seoMumbai/GrowOnlinePresence'
import YourSuccess from '../../../components/seoGurgaon/YourSuccess'
import ServicesWeOffer from '../../../components/seoMumbai/ServicesWeOffer'
import HowOurSEOIsDiffrent from '../../../components/seoMumbai/HowOurSEOIsDiffrent'
import WhyInvestMumbai from '../../../components/seoMumbai/whyInvestMumbai'
import OurProvenSEO from '../../../components/seoMumbai/OurProvenSEO'
import FaqMumbai from '../../../components/seoMumbai/FaqMumbai'

const SeoMumbai = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://webnestmedia.in/#localbusiness",
        "name": "WebNest Media",
        "alternateName": "WebNest Media - SEO Company in Mumbai",
        "url": "https://webnestmedia.in/seo-company-in-mumbai",
        "image": "https://webnestmedia.in/assets/newlogo-BlV-nvA1.svg",
        "logo": "https://webnestmedia.in/assets/newlogo-BlV-nvA1.svg",
        "description": "WebNest Media is a trusted SEO company in Mumbai offering expert digital marketing, on-page SEO, off-page SEO, and local SEO services. We help brands enhance visibility, attract organic traffic, and drive qualified leads with proven strategies and transparent results.",
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
          "ratingValue": "4.8",
          "ratingCount": "944"
        },
        "areaServed": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
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
            "name": "SEO Company in Mumbai",
            "item": "https://webnestmedia.in/seo-company-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://webnestmedia.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why choose WebNest Media as your SEO company in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "WebNest Media delivers proven SEO strategies in Mumbai that enhance your website's visibility, increase organic traffic, and generate long-term business growth with measurable results."
            }
          },
          {
            "@type": "Question",
            "name": "What SEO services do you offer in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our SEO services in Mumbai include keyword research, technical SEO, local SEO, link building, and content optimization designed to help businesses rank higher on Google."
            }
          },
          {
            "@type": "Question",
            "name": "How much do SEO services in Mumbai cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO service packages at WebNest Media start from ₹999 and go up to ₹9999, depending on your business needs, target market, and competition level."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide local SEO for Mumbai-based businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in local SEO for Mumbai businesses to help them appear in location-based searches and reach customers within their service areas."
            }
          },
          {
            "@type": "Question",
            "name": "When can I expect to see results from SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generally, clients begin seeing SEO improvements within 3 to 6 months, depending on competition and current website performance."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Best SEO Company in Mumbai | Rank #1 with Expert SEO Services</title>
        <meta 
          name="description" 
          content="Our expert SEO services help you generate more leads for your business and Google rankings, boost traffic. Grow business with best SEO company in Mumbai." 
        />
        <meta name="robots" content="index, follow" />
        <link 
          rel="canonical" 
          href="https://webnestmedia.in/seo-company-in-mumbai" 
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div>
        <HeroMumbai />
        <GrowOnlinePresence />
        <YourSuccess />
        <ServicesWeOffer />
        <HowOurSEOIsDiffrent />
        <WhyInvestMumbai />
        <OurProvenSEO />
        <FaqMumbai />
      </div>
    </>
  )
}

export default SeoMumbai
