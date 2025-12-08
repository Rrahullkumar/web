import React from 'react'
import HeroSection from '../Herosection/Herosection';
import topimage from "../../pages/web3/resources/topimage.png"
import webHeroimage from "../../pages/web3/resources/heroggn2.jpg"

const WebDevggn = () => {
    return (
        <div>
            {/* hero section */}
            <div>
                <HeroSection
                    backgroundImage={webHeroimage}
                    heading="Website Development Company in "
                    highlight="Gurgaon"
                    paragraph="Building future-ready websites that load fast, look beautiful, and deliver measurable results to take your brand to the next level."
                />
            </div>
        </div>
    )
}

export default WebDevggn