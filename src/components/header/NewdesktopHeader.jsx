
// import { useState, useEffect, useRef } from "react";
// import { ChevronDown } from "lucide-react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import "./headerStyle.css";

// const menuItems = [
//     { title: "Home", path: "/" },
//     {
//         title: "Services",
//         megaMenu: true,
//         columns: [
//             {
//                 heading: "Digital Marketing",
//                 items: [
//                     { title: "Search Engine Optimization", path: "/search-engine-optimization" },
//                     { title: "Search Engine Marketing", path: "/search-engine-marketing" },
//                     { title: "Social Media Marketing", path: "/social-media-marketing" },
//                     { title: "Web Development", path: "/web-development" },
//                     { title: "Content Marketing", path: "/content-marketing" },
//                     { title: "Affiliate Marketing", path: "/affiliate-marketing" }
//                 ]
//             },
//             {
//                 heading: "Promotions",
//                 items: [
//                     { title: "Mobile Marketing", path: "/mobile-marketing" },
//                     { title: "Influencer Marketing", path: "/influencer-marketing" },
//                     { title: "SMS Marketing", path: "/sms-marketing" },
//                     { title: "Email Marketing", path: "/email-marketing" }
//                 ]
//             },
//             {
//                 heading: "Solutions",
//                 items: [
//                     { title: "Online Reputation Management", path: "/online-reputation-management" },
//                     { title: "Brand Strategy", path: "/brand-strategy" },
//                     { title: "Lead Generation", path: "/lead-generation" },
//                     { title: "Customer Retention", path: "/customer-retention" },
//                     { title: "Digital Transformation", path: "/digital-transformation" },
//                     { title: "Market Research & Insights", path: "/market-research" }
//                 ]
//             }
//         ]
//     },
//     { title: "About Us", path: "/about-us" },
//     { title: "Contact", path: "/contact-us" }
// ];

// export default function NewdesktopHeader() {
//     const [dropdownOpen, setDropdownOpen] = useState(null);
//     const [isParentHovered, setIsParentHovered] = useState(false);
//     const [isDropdownHovered, setIsDropdownHovered] = useState(false);
//     const hoverTimeout = useRef(null);
//     const navRef = useRef(null);

//     const handleMouseEnterParent = (index) => {
//         clearTimeout(hoverTimeout.current);
//         setIsParentHovered(true);
//         setDropdownOpen(index);
//     };

//     const handleMouseLeaveParent = () => {
//         hoverTimeout.current = setTimeout(() => {
//             setIsParentHovered(false);
//             if (!isDropdownHovered) {
//                 setDropdownOpen(null);
//             }
//         }, 200);
//     };

//     const handleMouseEnterDropdown = () => {
//         clearTimeout(hoverTimeout.current);
//         setIsDropdownHovered(true);
//     };

//     const handleMouseLeaveDropdown = () => {
//         hoverTimeout.current = setTimeout(() => {
//             setIsDropdownHovered(false);
//             if (!isParentHovered) {
//                 setDropdownOpen(null);
//             }
//         }, 200);
//     };

//     const handleDropdownItemClick = () => {
//         setDropdownOpen(null);
//     };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (
//                 navRef.current &&
//                 !navRef.current.contains(event.target) &&
//                 !isDropdownHovered
//             ) {
//                 setDropdownOpen(null);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [isDropdownHovered]);

//     return (
//         <header className="fixed top-0 left-0 w-full z-[99999] border-b border-[#9ac496] bg-white">
//             <div className="max-w-[1440px] w-full mx-auto">
//                 <div className="flex items-center justify-between px-4 md:px-8 py-4 pl-[40px] pr-[40px] max-xl:px-[20px]">
//                     <div className="flex items-center gap-2">
//                         <Link to="/">
//                             <img
//                                 src={logo}
//                                 alt="WebNest Media Logo"
//                                 className="w-[64px] h-[64px] rounded-full cursor-pointer"
//                             />
//                         </Link>
//                     </div>

//                     <nav ref={navRef} className="flex items-center gap-5 text-sm max-xl:gap-1 relative">
//                         {menuItems.map((item, index) => (
//                             <div
//                                 key={item.title}
//                                 onMouseEnter={() => item.megaMenu && handleMouseEnterParent(index)}
//                                 onMouseLeave={() => item.megaMenu && handleMouseLeaveParent()}
//                                 className="relative"
//                             >
//                                 <button className="flex items-center text-lg leading-[100%] gap-1 px-4 py-2 hover:text-[#43b649]">
//                                     {item.title}
//                                     {item.megaMenu && (
//                                         <ChevronDown
//                                             size={20}
//                                             className={`transition-transform duration-300 ${dropdownOpen === index ? "rotate-180" : "rotate-0"
//                                                 }`}
//                                         />
//                                     )}
//                                 </button>

//                                 <div
//                                     onMouseEnter={handleMouseEnterDropdown}
//                                     onMouseLeave={handleMouseLeaveDropdown}
//                                     className={`fixed top-[97px] left-0 w-full bg-white z-[99999] backdrop-blur-md dropdown-container ${dropdownOpen === index ? "open" : ""
//                                         }`}
//                                 >
//                                     <div className="max-w-[1440px] mx-auto flex justify-between px-12 py-8">
//                                         {item?.columns?.map((col, colIndex) => (
//                                             <div key={colIndex}>
//                                                 <h3 className="text-3xl mb-[24px] font-normal text-[#000000]">{col.heading}</h3>
//                                                 <ul>
//                                                     {col.items.map((sub, subIndex) => (
//                                                         <li key={subIndex} className="mb-[12px]">
//                                                             <Link
//                                                                 to={sub.path}
//                                                                 onClick={handleDropdownItemClick}
//                                                                 className="font-[Segoe UI] font-normal text-lg leading-[100%] tracking-[0] text-black border-b-2 border-transparent hover:border-[#43b649] transition-all duration-300 hover:pb-[3px]"
//                                                             >
//                                                                 {sub.title}
//                                                             </Link>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         ))}

//                                         <div className="hidden md:block">
//                                             <img
//                                                 src="path-to-image.png"
//                                                 alt="Decorative"
//                                                 className="w-[200px] h-auto object-cover"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </nav>

//                     <div className="flex gap-2">
//                         <button className="bookdemo px-[15px] py-[10px] text-white bg-[#9bc394] rounded-md border hover:bg-[#83b080] transition-colors duration-300 cursor-pointer">
//                             Book a Demo
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// }



import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./headerStyle.css";

const menuItems = [
  { title: "Home", path: "/" },
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
          { title: "Affiliate Marketing", path: "/affiliate-marketing" }
        ]
      },
      {
        heading: "Promotions",
        items: [
          { title: "Mobile Marketing", path: "/mobile-marketing" },
          { title: "Influencer Marketing", path: "/influencer-marketing" },
          { title: "SMS Marketing", path: "/sms-marketing" },
          { title: "Email Marketing", path: "/email-marketing" }
        ]
      },
      {
        heading: "Solutions",
        items: [
          { title: "Online Reputation Management", path: "/online-reputation-management" },
          { title: "Brand Strategy", path: "/brand-strategy" },
          { title: "Lead Generation", path: "/lead-generation" },
          { title: "Customer Retention", path: "/customer-retention" },
          { title: "Digital Transformation", path: "/digital-transformation" },
          { title: "Market Research & Insights", path: "/market-research" }
        ]
      }
    ]
  },
  { title: "About Us", path: "/about-us" },
  
];

export default function NewdesktopHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const hoverTimeout = useRef(null);
  const navRef = useRef(null);

  // Open dropdown immediately and clear close timeout
  const openDropdown = (index) => {
    clearTimeout(hoverTimeout.current);
    setDropdownOpen(index);
  };

  // Close dropdown with 200ms delay
  const closeDropdownWithDelay = () => {
    hoverTimeout.current = setTimeout(() => {
      setDropdownOpen(null);
    }, 200);
  };

  // Close dropdown immediately on dropdown item click
  const handleDropdownItemClick = () => {
    setDropdownOpen(null);
  };

  // Close dropdown when clicking outside the nav
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[99999] border-b border-[#9ac496] bg-white">
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="flex items-center justify-between px-4  py-4  max-xl:px-[20px]">
          <div className="flex items-center gap-2">
            <Link to="/">
              <img
                src={logo}
                alt="WebNest Media Logo"
                className="w-[64px] h-[64px] rounded-full cursor-pointer"
              />
            </Link>
          </div>

          <nav ref={navRef} className="flex items-center gap-5 text-sm max-xl:gap-1 relative">
            {menuItems.map((item, index) => (
              <div
                key={item.title}
                onMouseEnter={() => item.megaMenu && openDropdown(index)}
                onMouseLeave={() => item.megaMenu && closeDropdownWithDelay()}
                className="relative"
              >
                <button className="flex items-center text-lg leading-[100%] gap-1 px-4 py-2 hover:text-[#43b649]">
                  {item.title}
                  {item.megaMenu && (
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        dropdownOpen === index ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </button>

                {item.megaMenu && (
                  <div
                    onMouseEnter={() => openDropdown(index)}
                    onMouseLeave={() => closeDropdownWithDelay()}
                    className={`fixed top-[97px] left-0 w-full bg-white px-4 py4 z-[99999] backdrop-blur-md dropdown-container ${
                      dropdownOpen === index ? "open" : ""
                    }`}
                  >
                    <div className="max-w-[1440px] w-[100%] mx-auto flex justify-between  ">
                      {item.columns.map((col, colIndex) => (
                        <div key={colIndex}>
                          <h3 className="text-3xl mb-[24px] font-normal text-[#000000]">
                            {col.heading}
                          </h3>
                          <ul>
                            {col.items.map((sub, subIndex) => (
                              <li key={subIndex} className="mb-[12px]">
                                <Link
                                  to={sub.path}
                                  onClick={handleDropdownItemClick}
                                  className="font-[Segoe UI] font-normal text-lg leading-[100%] tracking-[0] text-black border-b-2 border-transparent hover:border-[#43b649] transition-all duration-300 hover:pb-[3px]"
                                >
                                  {sub.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      <div className="hidden md:block">
                        <img
                          src="path-to-image.png"
                          alt="Decorative"
                          className="w-[200px] h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex gap-2">
          <Link to ={"/contact-us"}>  <button className="bookdemo px-[15px] py-[10px] text-white bg-[#9bc394] rounded-md border hover:bg-[#83b080] transition-colors duration-300 cursor-pointer">
              Contact
            </button></Link>
          </div>
        </div>
      </div>
    </header>
  );
}

