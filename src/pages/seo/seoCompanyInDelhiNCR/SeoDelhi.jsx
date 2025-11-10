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
          href="https://www.webnestmedia.in/seo-services-in-delhi" 
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
        <meta name="robots" content="index, follow"></meta>
        <meta 
          property="og:image" 
          content="https://www.webnestmedia.in/assets/images/seo-services-delhi.jpg" 
        />
        <meta 
          property="og:image:alt" 
          content="SEO Services in Delhi by Webnest Media" 
        />
      </Helmet>

      <div>
        <HeroDelhi/>
        <DriveLeadesDelhi/>
        <YourSuccessDelhi/>
        <OurExpertSEODelhi/>
        <OurProvenSEO/>
        <Impact/>
        <FaqDelhi/>
      </div>
    </>
  )
}

export default SeoDelhi
