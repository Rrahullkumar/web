// import React from "react";
// import ContactForm from "../contact/contactform";
// import { LazyLoadImage } from 'react-lazy-load-image-component';


// const HeroSection = ({ backgroundImage, heading, highlight, paragraph }) => {
//   return (
//     <div
//       className="w-full bg-cover bg-center relative flex items-center justify-center py-12 px-4 md:py-[59px] md:px-[43px]"
//       // style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//           <LazyLoadImage src={backgroundImage} alt={heading + highlight} className="hidden" aria-hidden="true" />
  
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60 z-0" />

//       {/* Content */}
//       <div className="flex flex-col lg:flex-row gap-10 justify-center items-center w-full max-w-[1440px] mx-auto relative z-10">
//         {/* Text Section */}
//         <div className="text-center lg:text-left text-white max-w-xl px-4">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
//             {heading} <span className="text-green-400">{highlight}</span>
//           </h1>
//           <p className="text-sm md:text-base lg:text-lg">{paragraph}</p>
//         </div>

//         {/* Form Section */}
//         <div className="w-full max-w-[621px] ">
//           {/* <ContactForm /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React from "react";
import ContactForm from "../contact/contactform";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HeroSection = ({ backgroundImage, heading, highlight, paragraph }) => {
  return (
    <div className="w-full relative flex items-center justify-center py-12 px-4 md:py-[59px] md:px-[43px] overflow-hidden">
      {/* Background Image */}

  <LazyLoadImage
        src={backgroundImage}
        alt={heading + " " + highlight}
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        aria-hidden="true"
        loading="lazy"
      />


      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center w-full max-w-[1440px] mx-auto relative z-10">
        {/* Text Section */}
        <div className="text-center lg:text-left text-white max-w-xl px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {heading} <span className="text-green-400">{highlight}</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg">{paragraph}</p>
        </div>

        {/* Form Section */}
        <div className="w-full max-w-[621px]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
