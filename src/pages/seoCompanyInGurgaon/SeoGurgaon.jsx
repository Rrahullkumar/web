import React from 'react'
import { Helmet } from 'react-helmet'
import HeroGurgaon from '../../components/seoGurgaon/HeroGurgaon'
import DriveLeadsAndSales from '../../components/seoGurgaon/DriveLeadsAndSales'
import YourSuccess from '../../components/seoGurgaon/YourSuccess'
import WhatYouCanAccept from '../../components/seoGurgaon/WhatYouCanAccept'
import WhyInvest from '../../components/seoGurgaon/WhyInvest'
import FaqGurgaon from '../../components/seoGurgaon/FaqGurgaon'

const SeoGurgaon = () => {
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
          href="https://www.webnestmedia.in/seo-company-in-gurgaon" 
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
        <meta name="robots" content="index, follow"></meta>
        <meta 
          property="og:url" 
          content="https://www.webnestmedia.in/seo-company-in-gurgaon" 
        />
        <meta 
          property="og:image" 
          content="https://www.webnestmedia.in/images/seo-company-in-gurgaon-banner.jpg" 
        />
        <meta property="og:site_name" content="WebNest Media" />
      </Helmet>

      <div>
        <HeroGurgaon/>
        <DriveLeadsAndSales/>
        <YourSuccess/>
        <WhatYouCanAccept/>
        <WhyInvest/>
        <FaqGurgaon/>
      </div>
    </>
  )
}

export default SeoGurgaon
