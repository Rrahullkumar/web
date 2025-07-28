import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import newlogo from "../../assets/newlogo.svg";
import mobilehedaer from "../../assets/headerbuld.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const menuItems = [
  { title: "About Us", path: "/about-us" },
  {
    title: "Services",
    megaMenu: true,
    columns: [
      {
        heading: "Digital Marketing",
        items: [
          { title: "Search Engine Optimization", path: "/search-engine-optimization" },
          { title: "Search Engine Marketing", path: "/search-engine-marketing" },
          { title: "Social Media Marketing", path: "/social-media-marketing" },
          { title: "Web Development", path: "/web-development" },
          { title: "Content Marketing", path: "/content-marketing" },
          { title: "Affiliate Marketing", path: "/affiliate-marketing" },
        ],
      },
      {
        heading: "Promotions",
        items: [
          { title: "Mobile Marketing", path: "/mobile-marketing" },
          { title: "Influencer Marketing", path: "/influencer-marketing" },
          { title: "SMS Marketing", path: "/sms-marketing" },
          { title: "Email Marketing", path: "/email-marketing" },
        ],
      },
      {
        heading: "Solutions",
        items: [
          { title: "Online Reputation Management", path: "/online-reputation-management" },
          { title: "Brand Strategy", path: "/brand-strategy" },
          { title: "Lead Generation", path: "/lead-generation" },
          { title: "Customer Retention", path: "/customer-retention" },
          { title: "Digital Transformation", path: "/digital-transformation" },
          { title: "Market Research & Insights", path: "/market-research-insights" },
        ],
      },
    ],
  },
  { title: "Insight", path: "/insight" },
];

export default function NewdesktopHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const hoverTimeout = useRef(null);
  const navRef = useRef(null);

  const openDropdown = (index) => {
    clearTimeout(hoverTimeout.current);
    setDropdownOpen(index);
  };

  const closeDropdownWithDelay = () => {
    hoverTimeout.current = setTimeout(() => {
      setDropdownOpen(null);
    }, 200);
  };

  const handleDropdownItemClick = () => {
    setDropdownOpen(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (

    <header className="sticky top-0 left-0 w-full z-[99999] border-b border-[#9ac496]  backdrop-blur-md  ">
      <div className="max-w-[1440px] w-full mx-auto ">
        <div className="flex items-center justify-between px-4 py-4 max-xl:px-4">
            <Link to="/"
            aria-label="WebNest Media Logo"
            >
                <LazyLoadImage src={newlogo} alt="WebNest Media Logo" className="w-[152px] cursor-pointer" />
            </Link>
          

          <nav ref={navRef} className="flex items-center gap-5 text-sm max-xl:gap-1 relative">
            {menuItems.map((item, index) => (
              <div
                key={item.title}
                onMouseEnter={() => item.megaMenu && openDropdown(index)}
                onMouseLeave={() => item.megaMenu && closeDropdownWithDelay()}
                className="relative"
              >
                {item.megaMenu ? (
                  <button className="flex items-center text-lg gap-1 px-4 py-2 hover:text-[#43b649]">
                    {item.title}
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        dropdownOpen === index ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center text-lg gap-1 px-4 py-2 hover:text-[#43b649]"
                    aria-label="Webnest Media Header Title"
                  >
                    {item.title}
                  </Link>
                )}

                {item.megaMenu && (
                  <div
                    onMouseEnter={() => openDropdown(index)}
                    onMouseLeave={() => closeDropdownWithDelay()}
                    className={`fixed top-[77px] left-0 w-full z-[99999] bg-white transition-all duration-300 ease-in-out overflow-hidden transform backdrop-blur-md ${
                      dropdownOpen === index
                        ? "max-h-[70vh] pointer-events-auto bg-white"
                        : "max-h-0  pointer-events-none bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-center w-full h-[60vh] pt-14 pb-14 px-10 cursor-pointer">
                      <div className="max-w-[1440px] w-full mx-auto flex justify-between">
                        {item.columns.map((col, colIndex) => (
                          <div key={colIndex}>
                            <h3 className="text-3xl mb-6 font-normal text-black">{col.heading}</h3>
                        

                            <ul>
  {col.items.map((sub, subIndex) => (
    <li key={subIndex} className="mb-3">
      <Link
        to={sub.path}
        onClick={handleDropdownItemClick}
        className="relative inline-block text-lg font-normal text-black transition-all duration-300 group"
        aria-label="Webnest Media SubLink"
      >
        <span className="pb-[3px] inline-block after:block after:content-[''] 
          after:border-b-[2px] after:border-[#43b649] after:scale-x-0 
          after:transition-transform after:duration-300 after:ease-in-out 
          group-hover:after:scale-x-100 after:[transform-origin:center]">
          {sub.title}
        </span>
      </Link>
    </li>
  ))}
</ul>

                          </div>
                        ))}
                        <div className="hidden md:block">
                            <LazyLoadImage
                            src={mobilehedaer}
                            alt="Decorative"
                            className="w-[200px] h-auto object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex gap-2">
            <Link to="/contact-us"  aria-label="Webnest Media Conatct us link" >
              <button className="bookdemo px-5 py-2 text-[#277A2D] hover:bg-[#277A2D] hover:text-white border border-[#4CAF50] rounded-md transition-colors duration-300 cursor-pointer">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
