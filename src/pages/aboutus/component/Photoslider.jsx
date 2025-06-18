

import React from "react";
import Slider from "react-slick";

import founder from "../resources/image1.svg";
import founder1 from "../resources/image2.svg";


const Photoslider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const teamMembers = [
    {
      name: "Stephanie Sobral",
      title: "Drafter and Permit Specialist",
      image: founder,
    },
    {
      name: "John Doe",
      title: "Architect",
      image: founder1,
    },
    // Add more members as needed
  ];

  return (
    <div className="w-full max-w-[300px] mx-auto">
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="flex-1 text-center px-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-64 h-auto mx-auto mb-4 rounded"
            />
            <p className="text-gray-900 font-medium text-lg">{member.name}</p>
            <p className="text-gray-500 text-sm">{member.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Photoslider;
