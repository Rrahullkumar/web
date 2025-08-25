import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import manoj from "../resources/Manoj4.png";
import Abhishek from "../resources/Abhishek.png";
import Antara from "../resources/Antara.png";
import Arbaz from "../resources/Arbaaz.png";
import Falak from "../resources/Falak.png";
import Harsh from "../resources/Harsh.png";
import Kartik from "../resources/Kartik.png";
import Parul from "../resources/Parul.png";
import Puneet from "../resources/Puneet.png";
import Tushar from "../resources/Tushar.png";

import shashnk from "../resources/Shashank.png"


const team = [


  { name: 'Manoj Kataria', role: 'Founder',  img: manoj },
  { name: 'Puneeet Yadav', role: 'Head Of Business Strategy', img: Puneet },
  { name: 'Antara Deb', role: 'Process Head (Business Development)',  img: Antara},
  { name: 'Falak Mehndiratta', role: 'HR Executive', img:Falak },
  { name: 'Abhishek singh', role: 'Full Stack Developer' , img: Abhishek},
  { name: 'Arbaz Shaikh', role: 'Business Development Manager' ,img: Arbaz },
  { name: 'Harsh Lodhi', role: 'Google Ads Specialist', img: Harsh },
  { name: 'Tushar Negi', role: 'UI UX Designer',img: Tushar },
  { name: 'Shashank Panachal', role: 'Software Developer',img: shashnk},
  { name: 'Kartik Sharma', role: 'SEO Analyst',img:Kartik },
  { name: 'Parul Kapoor', role: 'Business Development Sales',img:Parul },
  

    { name: 'Manoj Kataria', role: 'Founder',  img: manoj },
  { name: 'Puneeet Yadav', role: 'Head Of Business Strategy', img: Puneet },
  { name: 'Antara Deb', role: 'Process Head (Business Development)',  img: Antara},
  { name: 'Falak Mehndiratta', role: 'HR Executive', img:Falak },
  { name: 'Abhishek singh', role: 'Full Stack Developer' , img: Abhishek},
  { name: 'Arbaz Shaikh', role: 'Business Development Manager' ,img: Arbaz },
  { name: 'Harsh Lodhi', role: 'Google Ads Specialist', img: Harsh },
  { name: 'Tushar Negi', role: 'UI UX Designer',img: Tushar },
  { name: 'Shashank Panachal', role: 'Software Developer',img: shashnk},
  { name: 'Kartik Sharma', role: 'SEO Analyst',img:Kartik },
  { name: 'Parul Kapoor', role: 'Business Development Sales',img:Parul },
  

    { name: 'Manoj Kataria', role: 'Founder',  img: manoj },
  { name: 'Puneeet Yadav', role: 'Head Of Business Strategy', img: Puneet },
  { name: 'Antara Deb', role: 'Process Head (Business Development)',  img: Antara},
  { name: 'Falak Mehndiratta', role: 'HR Executive', img:Falak },
  { name: 'Abhishek singh', role: 'Full Stack Developer' , img: Abhishek},
  { name: 'Arbaz Shaikh', role: 'Business Development Manager' ,img: Arbaz },
  { name: 'Harsh Lodhi', role: 'Google Ads Specialist', img: Harsh },
  { name: 'Tushar Negi', role: 'UI UX Designer',img: Tushar },
  { name: 'Shashank Panachal', role: 'Software Developer',img: shashnk},
  { name: 'Kartik Sharma', role: 'SEO Analyst',img:Kartik },
  { name: 'Parul Kapoor', role: 'Business Development Sales',img:Parul },
  

    { name: 'Manoj Kataria', role: 'Founder',  img: manoj },
  { name: 'Puneeet Yadav', role: 'Head Of Business Strategy', img: Puneet },
  { name: 'Antara Deb', role: 'Process Head (Business Development)',  img: Antara},
  { name: 'Falak Mehndiratta', role: 'HR Executive', img:Falak },
  { name: 'Abhishek singh', role: 'Full Stack Developer' , img: Abhishek},
  { name: 'Arbaz Shaikh', role: 'Business Development Manager' ,img: Arbaz },
  { name: 'Harsh Lodhi', role: 'Google Ads Specialist', img: Harsh },
  { name: 'Tushar Negi', role: 'UI UX Designer',img: Tushar },
  { name: 'Shashank Panachal', role: 'Software Developer',img: shashnk},
  { name: 'Kartik Sharma', role: 'SEO Analyst',img:Kartik },
  { name: 'Parul Kapoor', role: 'Business Development Sales',img:Parul },
  

    { name: 'Manoj Kataria', role: 'Founder',  img: manoj },
  { name: 'Puneeet Yadav', role: 'Head Of Business Strategy', img: Puneet },
  { name: 'Antara Deb', role: 'Process Head (Business Development)',  img: Antara},
  { name: 'Falak Mehndiratta', role: 'HR Executive', img:Falak },
  { name: 'Abhishek singh', role: 'Full Stack Developer' , img: Abhishek},
  { name: 'Arbaz Shaikh', role: 'Business Development Manager' ,img: Arbaz },
  { name: 'Harsh Lodhi', role: 'Google Ads Specialist', img: Harsh },
  { name: 'Tushar Negi', role: 'UI UX Designer',img: Tushar },
  { name: 'Shashank Panachal', role: 'Software Developer',img: shashnk},
  { name: 'Kartik Sharma', role: 'SEO Analyst',img:Kartik },
  { name: 'Parul Kapoor', role: 'Business Development Sales',img:Parul },
  

    { name: 'Manoj Kataria', role: 'Founder',  img: manoj },
  { name: 'Puneeet Yadav', role: 'Head Of Business Strategy', img: Puneet },
  { name: 'Antara Deb', role: 'Process Head (Business Development)',  img: Antara},
  { name: 'Falak Mehndiratta', role: 'HR Executive', img:Falak },
  { name: 'Abhishek singh', role: 'Full Stack Developer' , img: Abhishek},
  { name: 'Arbaz Shaikh', role: 'Business Development Manager' ,img: Arbaz },
  { name: 'Harsh Lodhi', role: 'Google Ads Specialist', img: Harsh },
  { name: 'Tushar Negi', role: 'UI UX Designer',img: Tushar },
  { name: 'Shashank Panachal', role: 'Software Developer',img: shashnk},
  { name: 'Kartik Sharma', role: 'SEO Analyst',img:Kartik },
  { name: 'Parul Kapoor', role: 'Business Development Sales',img:Parul },
  

    { name: 'Manoj Kataria', role: 'Founder',  img: manoj },
  { name: 'Puneeet Yadav', role: 'Head Of Business Strategy', img: Puneet },
  { name: 'Antara Deb', role: 'Process Head (Business Development)',  img: Antara},
  { name: 'Falak Mehndiratta', role: 'HR Executive', img:Falak },
  { name: 'Abhishek singh', role: 'Full Stack Developer' , img: Abhishek},
  { name: 'Arbaz Shaikh', role: 'Business Development Manager' ,img: Arbaz },
  { name: 'Harsh Lodhi', role: 'Google Ads Specialist', img: Harsh },
  { name: 'Tushar Negi', role: 'UI UX Designer',img: Tushar },
  { name: 'Shashank Panachal', role: 'Software Developer',img: shashnk},
  { name: 'Kartik Sharma', role: 'SEO Analyst',img:Kartik },
  { name: 'Parul Kapoor', role: 'Business Development Sales',img:Parul },
  
  { name: 'Manoj Kataria', role: 'Founder',  img: manoj },
  { name: 'Puneeet Yadav', role: 'Head Of Business Strategy', img: Puneet },
  { name: 'Antara Deb', role: 'Process Head (Business Development)',  img: Antara},
  { name: 'Falak Mehndiratta', role: 'HR Executive', img:Falak },
  { name: 'Abhishek singh', role: 'Full Stack Developer' , img: Abhishek},
  { name: 'Arbaz Shaikh', role: 'Business Development Manager' ,img: Arbaz },
  { name: 'Harsh Lodhi', role: 'Google Ads Specialist', img: Harsh },
  { name: 'Tushar Negi', role: 'UI UX Designer',img: Tushar },
  { name: 'Shashank Panachal', role: 'Software Developer',img: shashnk},
  { name: 'Kartik Sharma', role: 'SEO Analyst',img:Kartik },
  { name: 'Parul Kapoor', role: 'Business Development Sales',img:Parul },
  

    { name: 'Manoj Kataria', role: 'Founder',  img: manoj },
  { name: 'Puneeet Yadav', role: 'Head Of Business Strategy', img: Puneet },
  { name: 'Antara Deb', role: 'Process Head (Business Development)',  img: Antara},
  { name: 'Falak Mehndiratta', role: 'HR Executive', img:Falak },
  { name: 'Abhishek singh', role: 'Full Stack Developer' , img: Abhishek},
  { name: 'Arbaz Shaikh', role: 'Business Development Manager' ,img: Arbaz },
  { name: 'Harsh Lodhi', role: 'Google Ads Specialist', img: Harsh },
  { name: 'Tushar Negi', role: 'UI UX Designer',img: Tushar },
  { name: 'Shashank Panachal', role: 'Software Developer',img: shashnk},
  { name: 'Kartik Sharma', role: 'SEO Analyst',img:Kartik },
  { name: 'Parul Kapoor', role: 'Business Development Sales',img:Parul },
  
  { name: 'Manoj Kataria', role: 'Founder',  img: manoj },
  { name: 'Puneeet Yadav', role: 'Head Of Business Strategy', img: Puneet },
  { name: 'Antara Deb', role: 'Process Head (Business Development)',  img: Antara},
  { name: 'Falak Mehndiratta', role: 'HR Executive', img:Falak },
  { name: 'Abhishek singh', role: 'Full Stack Developer' , img: Abhishek},
  { name: 'Arbaz Shaikh', role: 'Business Development Manager' ,img: Arbaz },
  { name: 'Harsh Lodhi', role: 'Google Ads Specialist', img: Harsh },
  { name: 'Tushar Negi', role: 'UI UX Designer',img: Tushar },
  { name: 'Shashank Panachal', role: 'Software Developer',img: shashnk},
  { name: 'Kartik Sharma', role: 'SEO Analyst',img:Kartik },
  { name: 'Parul Kapoor', role: 'Business Development Sales',img:Parul },
  

  { name: 'Manoj Kataria', role: 'Founder',  img: manoj },
  { name: 'Puneeet Yadav', role: 'Head Of Business Strategy', img: Puneet },
  { name: 'Antara Deb', role: 'Process Head (Business Development)',  img: Antara},
  { name: 'Falak Mehndiratta', role: 'HR Executive', img:Falak },
  { name: 'Abhishek singh', role: 'Full Stack Developer' , img: Abhishek},
  { name: 'Arbaz Shaikh', role: 'Business Development Manager' ,img: Arbaz },
  { name: 'Harsh Lodhi', role: 'Google Ads Specialist', img: Harsh },
  { name: 'Tushar Negi', role: 'UI UX Designer',img: Tushar },
  { name: 'Shashank Panachal', role: 'Software Developer',img: shashnk},
  { name: 'Kartik Sharma', role: 'SEO Analyst',img:Kartik },
  { name: 'Parul Kapoor', role: 'Business Development Sales',img:Parul },
  

  { name: 'Manoj Kataria', role: 'Founder',  img: manoj },
  { name: 'Puneeet Yadav', role: 'Head Of Business Strategy', img: Puneet },
  { name: 'Antara Deb', role: 'Process Head (Business Development)',  img: Antara},
  { name: 'Falak Mehndiratta', role: 'HR Executive', img:Falak },
  { name: 'Abhishek singh', role: 'Full Stack Developer' , img: Abhishek},
  { name: 'Arbaz Shaikh', role: 'Business Development Manager' ,img: Arbaz },
  { name: 'Harsh Lodhi', role: 'Google Ads Specialist', img: Harsh },
  { name: 'Tushar Negi', role: 'UI UX Designer',img: Tushar },
  { name: 'Shashank Panachal', role: 'Software Developer',img: shashnk},
  { name: 'Kartik Sharma', role: 'SEO Analyst',img:Kartik },
  { name: 'Parul Kapoor', role: 'Business Development Sales',img:Parul },
  

  { name: 'Manoj Kataria', role: 'Founder',  img: manoj },
  { name: 'Puneeet Yadav', role: 'Head Of Business Strategy', img: Puneet },
  { name: 'Antara Deb', role: 'Process Head (Business Development)',  img: Antara},
  { name: 'Falak Mehndiratta', role: 'HR Executive', img:Falak },
  { name: 'Abhishek singh', role: 'Full Stack Developer' , img: Abhishek},
  { name: 'Arbaz Shaikh', role: 'Business Development Manager' ,img: Arbaz },
  { name: 'Harsh Lodhi', role: 'Google Ads Specialist', img: Harsh },
  { name: 'Tushar Negi', role: 'UI UX Designer',img: Tushar },
  { name: 'Shashank Panachal', role: 'Software Developer',img: shashnk},
  { name: 'Kartik Sharma', role: 'SEO Analyst',img:Kartik },
  { name: 'Parul Kapoor', role: 'Business Development Sales',img:Parul },
  






  
 
];

const TeamSlider = () => {
  return (
    <div className="bg-white py-12 px-4 w-full">
      <h2 className="text-3xl font-bold text-center mb-12">The Minds Behind the Magic</h2>

   <p className=" text-center text-gray-600 mt-10 mb-12 max-w-3xl mx-auto ">
        Our diverse team includes strategists, designers, developers, content creators,
          media buyers, analysts, and client success managers—all working seamlessly to deliver
          not just campaigns, but impactful digital experiences. We’re constantly optimizing our
          strategies to provide our clients with a smooth, transparent, and personalized journey
          from initial brief to measurable results.
     
     
      </p>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4} 
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}

         breakpoints={{
    375: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 4 },
  }}
        modules={[EffectCoverflow, Autoplay]}
        className="container w-full mx-auto"
      >
        {team.map((member, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center  transition-transform duration-300"
          >
            <div className=" flex justify-center items-center rounded-full h-52 w-52 overflow-hidden
             group-[.swiper-slide-active]:bg-blue-100
            
            "> <img src={member.img} className=' w-[100%] h-[100%] object-contain ' />
            
             </div>
            <h3 className="text-lg font-bold  text-center">{member.name}</h3>
            <p className="text-sm text-gray-500 text-center">{member.role}</p>
          </SwiperSlide>
        ))}
      </Swiper>

   
    </div>
  );
};

export default TeamSlider;
