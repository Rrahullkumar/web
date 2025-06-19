import React from 'react';
import './Footer';
import { Link } from 'react-router-dom';

const FooterSection = ({ title, items,path }) => {
  return (
    <div className="footer-section ">
      <h4 className='footer-title hover:text-[#409338] font-bold cursor-pointer mb-[35px]'>{title}</h4>
      <ul>
        {items.map((item, index) => (
<li
  key={index}
  className="footer-items cursor-pointer relative group mb-[10px]  mt-[10px]  "
>
  <Link
    to={item.path}
    className="text-inherit no-underline pb-[5px] group-hover:border-[#25D366] hover:border-[#25D366] transition-all duration-300 border-b-2 border-transparent"
  >
    {item.label}
  </Link>
</li>



        ))}
      </ul>
    </div>
  );
};

export default FooterSection;