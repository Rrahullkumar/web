import React from 'react'
import HeroSection from '../Herosection/Herosection'; // Update the path based on your folder structure
import HeroBg from '../../pages/seo/resources/seomumbaibg.png'; // Add your background image


const HeroMumbai = () => {
  return (
    <HeroSection 
      backgroundImage={HeroBg}
      heading="Best SEO Company in"
      highlight="Mumbai"
      paragraph="Boost your website’s performance and business visibility with a professional SEO company in Mumbai dedicated to delivering real, lasting results."
    />
  )
}

export default HeroMumbai