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
  {/* <Link
    to={item.path}
    className="text-inherit no-underline pb-[5px] group-hover:border-[#25D366] hover:border-[#25D366] transition-all duration-300 border-b-2 border-transparent"
  >
    {item.label}
  </Link> */}

<Link
  to={item.path}
  className="relative inline-block text-inherit no-underline font-medium group"
>
  <span className="pb-[5px] inline-block transition-all duration-300 group-hover:text-[#25D366] 
    after:block after:content-[''] after:border-b-[1 px] after:border-[#25D366] 
    after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out 
    group-hover:after:scale-x-100 after:[transform-origin:center]">
    {item.label}
  </span>
</Link>


</li>



        ))}
      </ul>
    </div>
  );
};

export default FooterSection;