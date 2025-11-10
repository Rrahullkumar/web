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
  return (
    <>
      <Helmet>
        <title>Best SEO Company in Mumbai | Rank #1 with Expert SEO Services</title>
        <meta 
          name="description" 
          content="Our expert SEO services help you generate more leads for your business and Google rankings, boost traffic. Grow business with best SEO company in Mumbai." 
        />
        <link 
          rel="canonical" 
          href="https://www.webnestmedia.in/seo-company-in-mumbai" 
        />
      </Helmet>

      <div>
        <HeroMumbai/>
        <GrowOnlinePresence/>
        <YourSuccess/>
        <ServicesWeOffer/>
        <HowOurSEOIsDiffrent/>
        <WhyInvestMumbai/>
        <OurProvenSEO/>
        <FaqMumbai/>
      </div>
    </>
  )
}

export default SeoMumbai
