import React from 'react';
import HeroSection from '../Herosection/Herosection'; // Update the path based on your folder structure
import gurgaonBg from '../../assets/seogurgaohero.png'; // Add your background image

const HeroGurgaon = () => {
  return (
    <HeroSection 
      backgroundImage={gurgaonBg}
      heading="Best SEO Company in"
      highlight="Gurgaon"
      paragraph="Ignite your business growth with next-level SEO — turning clicks into trust, customers into believers, and growth into a lasting legacy."
      altText="Best SEO Company in Gurgaon"
    />
  );
};

export default HeroGurgaon;
