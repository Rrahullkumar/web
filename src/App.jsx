
import  { useEffect } from 'react';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sem from "./pages/sem/Sem";
import Smm from './pages/smm/smm';
import SEo from "./pages/seo/Seo";
import Web from './pages/web3/web';
import ScrollToTop from './components/scrollup';
import Privacy from './components/privacy';
import ContentMarketing from './pages/contentMarketing/cm';
import Affilatemarketing from './pages/affilateMarketing/Affilatemarketing';
import Brandmarketing from './pages/brandMarketing/brandmarketing';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Customer from "./pages/customerRetention/Customer";
import Orm from './pages/Orm/Orm';
import DigitalTranformationservice from './pages/Digitalservice/DigitalTranformationservice';
import MarketingResearch from './pages/marketing/MarketingResearch';
import About from './pages/aboutus/AboutUS';
import Conatct from './pages/contactUS/contactuspage';
import Leadgeneration from './pages/lead_generation/Leadgeneration';
import MobileMarketing from './pages/MobileMarketing/MobileMarketing';
import InfluencerMarketing from './pages/InfluencerMarketing/InfluencerMarketing';
import SmsMarketing from './pages/SMSmarketing/SmsMarketing';
import Emailmarketing from './pages/emailmarketing/Emailmarketing';
<<<<<<< HEAD
import SmoothCursor from "./components/smoothCursor";
import Insight from './pages/Insight/Insight'
import BlogDetails from './pages/Insight/BlogDetails';
=======


>>>>>>> 1a0dd3c5735b71da38baa29aa655d3abc355b0fe

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);


  

  return (
    <>
      
      

        <Router>
          <ScrollToTop />
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search-engine-marketing" element={<Sem />} />
            <Route path="/search-engine-optimization" element={<SEo />} />
            <Route path="/social-media-marketing" element={<Smm />} />
            <Route path="/web-development" element={<Web />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/content-marketing" element={<ContentMarketing />} />
            <Route path="/affiliate-marketing" element={<Affilatemarketing />} />
            <Route path="/brand-strategy" element={<Brandmarketing />} />
            <Route path="/customer-retention" element={<Customer />} />
            <Route path="/online-reputation-management" element={<Orm />} />
            <Route path="/digital-transformation" element={<DigitalTranformationservice />} />
            <Route path="/market-research-insights" element={<MarketingResearch />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Conatct />} />
            <Route path="/lead-generation" element={<Leadgeneration />} />
            <Route path="/mobile-marketing" element={<MobileMarketing />} />
            <Route path='/influencer-marketing' element={<InfluencerMarketing />} />
            <Route path='/sms-marketing' element={<SmsMarketing />} />
            <Route path='/email-marketing' element={<Emailmarketing />} />
            <Route path='/Insight' element={<Insight/>}></Route>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
          </Routes>

          <Footer />
        </Router>
      
    </>
  );
}

export default App;
