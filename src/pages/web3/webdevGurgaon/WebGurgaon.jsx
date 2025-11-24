import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ContactSection from '../../../components/HearFromYou/HearFromYou'
import WebDevggn from '../../../components/webDevGurgaon/WebDevggn';
import SmartWebSolutions from '../../../components/webDevGurgaon/SmartWebSolutions';
import YourSuccessggn from '../../../components/webDevGurgaon/YourSuccessggn';
import BestWebDevinGgn from '../../../components/webDevGurgaon/BestWebDevinGgn';
import OurAiPoweredggn from '../../../components/webDevGurgaon/OurAiPoweredggn';
import Nextgen from '../../../components/webDevGurgaon/Nextgen';
import Services from '../../../components/webDevGurgaon/services';
import PowerWebsiteggn from '../../../components/webDevGurgaon/PowerWebsiteggn';
import WhyChooseggn from '../../../components/webDevGurgaon/WhyChooseggn';
import Faqggn from '../../../components/webDevGurgaon/Faqggn';

const WebGurgaon = () => {
    return (
        <div>
            <Helmet>
                <title>Best Website Development Company in Gurgaon</title>
                <meta name="description" content="WebNest Media is the best website development company in Gurgaon, offering custom web design, eCommerce sites, CMS integration, SEO-friendly, and regular maintenance solutions." />
                <link rel="canonical" href="https://webnestmedia.in/website-development-company-in-gurgaon" />
                <meta name="robots" content="index, follow" />            
            </Helmet>

            {/* hero section */}
            <WebDevggn />

            {/* section2 */}
            <SmartWebSolutions />

            {/* section3 */}
            <YourSuccessggn />

            {/* section4 */}
            <BestWebDevinGgn />

            {/* section5 */}
            <OurAiPoweredggn />

            {/* section6 */}
            <Nextgen />

            {/* section 7 */}
            <Services />
            <ContactSection />

            {/* section 8 */}
            <PowerWebsiteggn />

            {/* section 9 */}
            <WhyChooseggn />

            {/* faq section */}
            <Faqggn />
        </div>
    )
}

export default WebGurgaon;
