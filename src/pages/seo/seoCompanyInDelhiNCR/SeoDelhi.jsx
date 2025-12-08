import React from 'react'
import { Helmet } from 'react-helmet'
import HeroDelhi from '../../../components/seoDelhi/HeroDelhi'
import DriveLeadesDelhi from '../../../components/seoDelhi/DriveLeadesDelhi'
import YourSuccessDelhi from '../../../components/seoDelhi/YourSuccessDelhi'
import OurExpertSEODelhi from '../../../components/seoDelhi/OurExpertSEODelhi'
import OurProvenSEO from '../../../components/seoDelhi/OurProvenSEO'
import Impact from '../../../components/seoDelhi/Impact'
import FaqDelhi from '../../../components/seoDelhi/FaqDelhi'

const SeoDelhi = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://webnestmedia.in/#localbusiness",
        "name": "WebNest Media",
        "alternateName": "WebNest Media - SEO Company in Delhi",
        "url": "https://webnestmedia.in/seo-services-in-delhi",
        "image": "https://webnestmedia.in/assets/newlogo-BlV-nvA1.svg",
        "logo": "https://webnestmedia.in/assets/newlogo-BlV-nvA1.svg",
        "description": "Get high-quality SEO services in Delhi at affordable prices. Improve rankings, drive organic leads, and grow your business without overspending.",
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
          "ratingCount": "1473"
        },
        "areaServed": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Delhi",
            "addressRegion": "Delhi",
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
            "name": "SEO Services in Delhi",
            "item": "https://webnestmedia.in/seo-services-in-delhi"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://webnestmedia.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why choose WebNest Media for SEO services in Delhi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "WebNest Media provides result-oriented SEO services in Delhi with proven strategies, dedicated experts, and transparent reporting that help brands grow their online visibility and generate qualified leads."
            }
          },
          {
            "@type": "Question",
            "name": "What SEO solutions do you offer for Delhi businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer comprehensive SEO services including on-page SEO, off-page SEO, local SEO, content optimization, and technical audits tailored for Delhi-based businesses."
            }
          },
          {
            "@type": "Question",
            "name": "How much do your SEO services in Delhi cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our SEO packages for Delhi businesses start at ₹999 and go up to ₹9999, depending on your goals, competition, and business size."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer local SEO in Delhi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in local SEO for Delhi businesses to help them appear in nearby searches and attract customers from their target locations."
            }
          },
          {
            "@type": "Question",
            "name": "When can I expect to see results from SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most clients begin noticing improvements in rankings and organic traffic within 3 to 6 months, depending on the competition and site optimization level."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Best SEO Services in Delhi | Rank Higher in Your Area</title>

        <meta
          name="description"
          content="Get high-quality SEO services in Delhi at affordable prices. Improve rankings, drive organic leads, and grow your business without overspending."
        />

        <link
          rel="canonical"
          href="https://webnestmedia.in/seo-services-in-delhi"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Best SEO Services in Delhi | Rank Higher in Your Area"
        />
        <meta
          property="og:description"
          content="Get high-quality SEO services in Delhi at affordable prices. Improve rankings, drive organic leads, and grow your business without overspending."
        />
        <meta
          property="og:url"
          content="https://www.webnestmedia.in/seo-services-in-delhi"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Webnest Media" />
        <meta property="og:locale" content="en_IN" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:image"
          content="https://www.webnestmedia.in/assets/images/seo-services-delhi.jpg"
        />
        <meta
          property="og:image:alt"
          content="SEO Services in Delhi by Webnest Media"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div>
        <HeroDelhi />
        <DriveLeadesDelhi />
        <YourSuccessDelhi />
        <OurExpertSEODelhi />
        <OurProvenSEO />
        <Impact />
        <FaqDelhi />
      </div>
    </>
  )
}

export default SeoDelhi
