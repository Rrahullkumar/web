

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/newlogo.svg";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about-us" },

    {
    title: "Digital Marketing",
    subItems: [
      { title: "Search Engine Optimization", path: "/search-engine-optimization" },
          { title: "Search Engine Marketing", path: "/search-engine-marketing" },
          { title: "Social Media Marketing", path: "/social-media-marketing" },
          { title: "Web Development", path: "/web-development" },
          { title: "Content Marketing", path: "/content-marketing" },
          { title: "Affiliate Marketing", path: "/affiliate-marketing" },
    ]
  },

  {
    title: "Solutions",
    subItems: [
         { title: "Online Reputation Management", path: "/online-reputation-management" },
    
      { title: "Brand Strategy", path: "/brand-strategy" },
      { title: "Lead Generation", path: "/lead-generation" },
      { title: "Customer Retention", path: "/customer-retention" },
      { title: "Digital Transformation", path: "/digital-transformation" },
      { title: "Market Research & Insights", path: "/market-research" },
 
  ]
  },


  {
    title: "Promotions",
    subItems: [
      { title: "Mobile Marketing", path: "/mobile-marketing" },
      { title: "Influencer Marketing", path: "/influencer-marketing" },
      { title: "SMS Marketing", path: "/sms-marketing" },
      { title: "Email Marketing", path: "/email-marketing" }
    ]
  },


  {
    title: "Contact",
    subItems: [
      { title: "Careers", path: "/contact/careers" },
      { title: "Contact", path: "/contact-us" },
      { title: "Insight", path: "/contact/insight" },
      { title: "Blogs", path: "/contact/blogs" }
    ]
  }
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleLinkClick = () => {
    setOpen(false);
    setDropdownOpen(null);
  };

  return (
    <header className="w-full sticky top-0 left-0 bg-[white]   z-[999999]">
      <div className="flex justify-between items-center pl-[16px] pr-[16px] ">
        <div className="flex items-center gap-[10px]">
          <Link to="/">
            <img src={logo} alt="WebNest Media Logo" className="w-[80px] h-[80px] rounded-full cursor-pointer" />
          </Link>
         
        </div>
        <button onClick={() => setOpen(!open)} className="text-[#9ac496]  z-[10000] relativeborder-[#9ac496]">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="mt-4  pl-[20px]">
          {menuItems.map((item, index) => (
            <div key={item.title}>
              <div className="flex items-center p-[10px] gap-1 text-[16px] cursor-pointer font-normal leading-[21px] text-[#374151] bg-transparent border-0 outline-none">
                {item.subItems ? (
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex items-center gap-1 bg-transparent border-0 outline-none"
                  >
                    {item.title}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${dropdownOpen === index ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link to={item.path} onClick={handleLinkClick} className="block w-full">
                    {item.title}
                  </Link>
                )}
              </div>

              {dropdownOpen === index && item.subItems && (
                <ul className="ml-2 mt-1 space-y-2">
                  {item.subItems.map((sub) => (
                    <li
                      key={sub.title}
                      className="pb-[10px] pl-[10px] pt-[5px] cursor-pointer text-[#374151] text-[14px] font-normal hover:text-[#43b649] border-b border-gray-100 last:border-0"
                    >
                      <Link to={sub.path} onClick={handleLinkClick} className="block w-full">
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

       
        </div>
      )}
    </header>
  );
}
