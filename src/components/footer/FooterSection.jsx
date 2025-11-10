import React, { useState } from 'react';
import './Footer';
import { Link } from 'react-router-dom';

const FooterSection = ({ title, items }) => {
  const [hoveredChild, setHoveredChild] = useState(null);

  return (
    <div className="footer-section">
      <h4 className='footer-title hover:text-[#409338] font-bold cursor-pointer mb-[35px]'>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="footer-items cursor-pointer relative group mb-[10px] mt-[10px]">
            {/* Main Item */}
            <Link
              to={item.path}
              className="relative inline-block text-inherit no-underline font-medium group"
              aria-label="WebNest Footer Link"
            >
              <span
                className={`pb-[5px] inline-block transition-all duration-300 
                  ${hoveredChild === `${index}` ? '' : 'group-hover:text-[#25D366]'}
                  after:block after:content-[''] after:border-b-[1px] after:border-[#25D366]
                  after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out
                  ${hoveredChild === `${index}` ? '' : 'group-hover:after:scale-x-100'} after:[transform-origin:center]`}
              >
                {item.label}
              </span>
            </Link>

            {/* Nested Children */}
            {item.children && (
              <ul className="ml-4 mt-2">
                {item.children.map((child, childIndex) => (
                  <li 
                    key={childIndex} 
                    className="footer-items cursor-pointer relative mb-[8px] mt-[8px]"
                    onMouseEnter={() => setHoveredChild(`${index}`)}
                    onMouseLeave={() => setHoveredChild(null)}
                  >
                    <Link
                      to={child.path}
                      className="relative inline-block text-inherit no-underline font-normal"
                      aria-label="WebNest Footer Sub Link"
                    >
                      <span
                        className="pb-[3px] inline-block transition-all duration-300 hover:text-[#25D366] text-sm
                          after:block after:content-[''] after:border-b-[1px] after:border-[#25D366]
                          after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out
                          hover:after:scale-x-100 after:[transform-origin:center]"
                      >
                        • {child.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
