

import React from 'react';
import FooterSection from './FooterSection';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import blacklogo from '../../assets/blacklogo1.png';
// import WhatsAppIcon from './WhatsappStickyIcon';
import { Link } from 'react-router-dom';
import msme from '../../../public/msme.png';
import {  FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Footer = () => {
  return (
   <footer className="bg-[#1A1D1C] text-white p-[40px] max-md:px-4 relative " >

      <div className="max-w-[1440px] w-[100%] mx-auto space-y-10">



        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
  {/* Logo Section */}
  <div className="flex   ">
    <Link to="/">
        <LazyLoadImage
        src={blacklogo}
        alt="WebNest Media Logo"
        className="w-[186px]"
        aria-label="Webnest media Logo"
      />
    </Link>
    
  </div>

  {/* Social Media Section */}
  <div className="flex flex-col  gap-2">
    <h6 className="text-lg font-semibold hover:text-[#25D366] transition-colors duration-300">
      Connect on Social Media
    </h6>
    <div className="flex justify-center max-md:justify-start lg:justify-start space-x-4 text-xl">
      <a
        href="https://www.facebook.com/profile.php?id=61576616442478"
        target="_blank"
        rel="noopener noreferrer"
         aria-label="WebNest Media  Facebook"
      >
        <FaFacebookF className="hover:text-blue-500 transition-transform transform hover:scale-110 duration-300 cursor-pointer" />
      </a>
      <a
        href="https://x.com/webnestmediag?s=21"
        target="_blank"
        rel="noopener noreferrer"
         aria-label="WebNest Media  Twitter Page"
      >
        <FaTwitter className="hover:text-blue-400 transition-transform transform hover:scale-110 duration-300 cursor-pointer" />
      </a>
      <a
        href="https://www.linkedin.com/company/webnest-media-group/"
        target="_blank"
        rel="noopener noreferrer"
                 aria-label="WebNest Media Linkedin Page"

      >
        <FaLinkedinIn className="hover:text-blue-700 transition-transform transform hover:scale-110 duration-300 cursor-pointer" />
      </a>
      <a
        href="https://www.instagram.com/webnestmediagroup/"
        target="_blank"
        rel="noopener noreferrer"
                 aria-label="WebNest Media  Instagram Page"

      >
        <FaInstagram className="hover:text-pink-500 transition-transform transform hover:scale-110 duration-300 cursor-pointer" />
      </a>
    </div>
  </div>

  {/* Address Section */}
  <div className="flex flex-col ">
    <h4 className="text-lg font-semibold mb-2">Our Address</h4>
    <p className="text-sm">
      1st Floor Orchid Business Park,<br />
      Near Subhash Chowk, Sector 48,<br />
      Gurugram, Haryana 122004 <br />
      
    </p>
  </div>

  {/* Email & Privacy Section */}
  <div className="flex flex-col items-start gap-6">
    <img src={msme} alt="MSME image" className='w-[70%] max-lg:w-[51%] '  />
    <p className="text-sm font-semibold">
      GST No:- 06DKNPK2512K2Z1
    </p>
  </div>
  <div className="flex flex-col ">
    <h4 className="text-lg font-semibold mb-2">Email Us</h4>
    <p>
      <a
        href="mailto:info@webnestmedia.com"
        className="text-sm text-blue-300 hover:underline"
      >
        info@webnestmedia.com
      </a>
    </p>
    <Link to="/privacy-policy" 
    aria-label="webnest Privacy Policy"
    className="text-sm text-white hover:underline inline">
      <p className="text-sm text-white hover:underline inline-block">Privacy Policy</p>
    </Link>
  </div>
</div>


        <svg width="100%" height="2">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
        </svg>


        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <FooterSection
            title="Digital Marketing"
            items={[
              { label: 'Search Engine Marketing', path: '/search-engine-marketing' },
              { label: 'Search Engine Optimization', path: '/search-engine-optimization' },
              { label: 'Social Media Marketing', path: '/social-media-marketing' },
              { label: 'Web Development', path: '/web-development' },
              { label: 'Content Marketing', path: '/content-marketing' },
              { label: 'Affiliate Marketing', path: '/affiliate-marketing' },
            ]}
          />

          <FooterSection
            title="Branding"
            items={[
              { label: 'Brochure Designing', path: '/' },
              { label: 'Logo Designing', path: '/' },
              { label: 'Packaging Designing', path: '/' },
            ]}
          />

          <FooterSection
            title="Others"
            items={[
              { label: 'Analytics & Reporting', path: '/' },
              { label: 'Conversion Rate Optimization', path: '/' },
              { label: 'Programmatic Marketing', path: '/' },
            ]}
          />

          <FooterSection
            title="Solutions"
            items={[
              { label: 'Brand Strategy', path: '/brand-strategy' },
              { label: 'Lead Generation', path: '/lead-generation' },
              { label: 'Customer Retention', path: '/customer-retention' },
              { label: 'Digital Transformation', path: '/digital-transformation' },
              { label: 'Market Research & Insights', path: '/market-research-insights' },
              { label: 'Online Reputation Marketing', path: '/online-reputation-management' },
            ]}
          />

          <FooterSection
            title="Promotions"
            items={[
              { label: 'Email Marketing', path: '/email-marketing' },
              { label: 'Mobile Marketing', path: '/mobile-marketing' },
              { label: 'Influencer Marketing', path: '/influencer-marketing' },
              { label: 'SMS Marketing', path: '/sms-marketing' },
            ]}
          />

        </div>

        {/* Bottom Text */}
        <svg width="100%" height="2">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
        </svg>
        <div className="text-center pt-4 text-sm text-gray-400">
          <p>© 2025 WebNest Media. All rights reserved.</p>
          <p>Developed by WebNest Media</p>
        </div>
      </div>

  
           <div className="fixed bottom-[20px] right-6 flex flex-col items-center gap-4 z-[99999999999999]">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919696964606" // Replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
        >
          <FaWhatsapp size={24} />
        </a>

        {/* Phone */}
        <a
          href="tel:+919696964606" // Replace with your phone number
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition duration-300 ring-animation"
        >
          <FaPhoneAlt size={20} />
        </a>
      </div>

      
    </footer>
  );
};

export default Footer;
