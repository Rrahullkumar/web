import React from 'react'
import HeroSection from '../Herosection/Herosection'; // Update the path based on your folder structure
// import gurgaonBg from '../../assets/seogurgaohero.png'; // Add your background image
import delhiBg from '../../assets/seoDelhi.png'

const HeroDelhi = () => {
    return (
        <div>
            <HeroSection
                backgroundImage={delhiBg}
                heading="Best SEO Services in"
                highlight="Delhi"
                paragraph="Get discovered online with Delhi’s Best SEO Services — result-driven, ethical, and affordable."
                altText=""
            />
        </div>
    )
}

export default HeroDelhi