import { useEffect, useState } from "react";
import Accordion from "./component/Accordian";
import Webnest_Logo from "../../assets/newlogo.svg";
import bulb from "./resources/bulb.svg";
import Aboutcounter from "./component/aboutcounter";
import { useRef } from "react";
import AboutTesimonial from "./component/aboutTestimonial";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProfileCard from "./component/ProfileCard";
import falakimg from "../../assets/team/1.png";
import Harshimg from '../../assets/team/4.png'
import Shashankimg from '../../assets/team/2.png'
import Tusharimg from '../../assets/team/3.png'
import Divyamimg from '../../assets/team/5.png'
import Arbaazimg from '../../assets/team/6.png'
import Parulimg from '../../assets/team/7.png'
import Bishwajeet from './resources/bishwajeetimg.png'
import rahulimg from './resources/rahulimg.png'

import Kartikimg from '../../assets/team/Kartik.png'
import Abhishekimg from '../../assets/team/Abhishek.png'
import Puneetimg from '../../assets/team/Puneetimg.png'
import Manojimg from '../../assets/team/m.png'
import Antaraimg from '../../assets/team/Antaraimg.png'
const AboutUS = () => {
  const wrapperRef = useRef();

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        setTrigger(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (wrapperRef.current) {
      observer1.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer1.unobserve(wrapperRef.current);
      }
    };
  }, []);

  return (
    <div className=" max-lg:mt-[50px]">
      <h4
        data-aos="fade-up"
        className="text-center   text-[52px] lg:pt-[60px] mb-[20px]  max-lg:text-[38px]   leading-[100%]"
      >
        {" "}
        <span className="font-semibold text-green-500"> About </span>{" "}
        <span className="font-normal text-black">US</span>{" "}
      </h4>

      <section className="container mt-[96px] max-md:mt-[50px] w-full mx-auto pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px]  text-left  flex flex-col md:flex-row items-center  gap-[106px] max-lg:gap-5  overflow-hidden">
        <div
          className="max-w-2xl  max-md:w-[100%]"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="100"
        >
          <h1
            data-aos="fade-up"
            className="text-[48px] max-md:text-center max-lg:text-[34px] leading-[120%] font-semibold text-[#000000]  mb-4 max-lg:mb-8"
          >
            Few Words About WebNest Media
          </h1>
          <p
            data-aos="fade-up"
            className=" text-[black] text-base max-md:text-base mb-4 max-md:text-center max-md:mb-2"
          >
            Best Digital Marketing Agency in Gurgaon, India. The Digital
            Marketing Company that gives it full commitment to grow your brand.
          </p>
          <p
            data-aos="fade-up"
            className=" text-[#000000] text-base max-md:text-center max-md:text-base "
          >
            WebNest Media is a digital marketing company in Gurgaon, working
            with awesome brands across India and worldwide. Our digital
            marketing experts do all things digital from SEO and PPC to social
            media marketing, SEM, and web development so you get the right
            services which you paid. We have a team of our services including
            SEO Executive, Web Developer, Graphic Designer, Social Media Experts
            & Content Writers. We also redesign and redevelopment of existing
            web sites.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="flex-shrink-0 max-md:w-[80%] max-md:mt-10 max-md: w-max-xl:w-[40%] items-start justify-start"
        >
          <LazyLoadImage
            src={Webnest_Logo}
            alt="WebNest Media Logo"
            className="w-[400px] max-md:w-full "
          />
        </div>
      </section>

      <section
        data-aos="fade-up"
        className=" overflow-hidden container w-[100%]  mx-auto pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] text-center mt-[96px] mb-[96px] max-md:mt-[50px]"
        ref={wrapperRef}
        onMouseEnter={() => setTrigger(true)}
      >
        <Aboutcounter trigger={trigger} />
      </section>

      <section className=" container w-[100%] mx-auto text-center pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] pb-10  relative z-10">
        <h4
          data-aos="fade-up"
          className="text-sm uppercase tracking-widest text-[#9bc394] font-semibold"
        >
          Vision & Mission
        </h4>
        <h1
          data-aos="fade-up"
          className="text-[52px] max-lg:text-[38px] font-semibold text-[black] mt-2 mb-4"
        >
          What We Believe
        </h1>
        <p
          data-aos="fade-up"
          className="max-w-2xl mx-auto text-base text-gray-600"
        >
          Our vision is to empower businesses of all sizes to achieve success
          through data-driven decision making. We strive to be a leader in the
          digital space, delivering valuable results and innovative solutions.
        </p>
        <p
          data-aos="fade-up"
          className="max-w-2xl mx-auto text-base  text-gray-600 mt-4"
        >
          Our mission is to deliver exceptional digital marketing services that
          drive measurable business outcomes. We work with clients of all sizes
          and sectors, closely aligned with their mission and goals to deliver
          impactful results.
        </p>
      </section>

      <section
        className="
    
    container mb-[96px] max-md:mb-10 mt-[96px] max-lg:mt-[10px] w-full mx-auto pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] text-left flex flex-col md:flex-row items-center justify-evenly gap-12 max-lg:gap-5
    
    "
      >
        <div
          data-aos="fade-up"
          className="flex-shrink-0   max-xl:w-[40%] items-center justify-center"
        >
          <LazyLoadImage
            src={bulb}
            alt="WebNest Media bulb"
            className="lg:w-[85%]"
          />
        </div>

        <div className="max-w-2xl max-md:w-[100%]">
          <h2
            data-aos="fade-up"
            className="text-[52px] max-lg:text-[38px] max-lg:text-center font-semibold text-gray-900 mb-8"
          >
            Our Key to Excellence
          </h2>
          <p
            data-aos="fade-up"
            className=" text-gray-700 text-base max-md:text-center mb-4"
          >
            At WebNest Media, our success stems from a simple yet powerful
            philosophy: innovation meets measurable results. We think that
            staying ahead in the ever-changing landscape of digital marketing
            requires ongoing evolution. Our team of passionate strategists,
            creative minds, and data-driven analysts are not just keeping pace
            with trends; we're setting them.
          </p>
          <p
            data-aos="fade-up"
            className="text-base text-gray-700 max-md:text-center"
          >
            We meticulously analyze market shifts, integrate cutting-edge
            technologies, and rigorously test every strategy to ensure it
            delivers tangible ROI for your business. Our commitment to
            continuous learning, combined with a deep understanding of your
            unique challenges, allows us to craft bespoke solutions that don't
            just meet expectations but exceed them. This dedication to
            forward-thinking strategies and unwavering client success is truly
            our key to excellence
          </p>
        </div>
      </section>

      <section className=" flex flex-col md:flex-col justify-center gap-8 mx-auto container   overflow-hidden">
        <h2 className="text-3xl font-bold text-center ">
          The Minds Behind the Magic
        </h2>

        <p className=" text-center text-gray-600 mb-12 max-w-3xl mx-auto ">
          Our diverse team includes strategists, designers, developers, content
          creators, media buyers, analysts, and client success managers—all
          working seamlessly to deliver not just campaigns, but impactful
          digital experiences. We’re constantly optimizing our strategies to
          provide our clients with a smooth, transparent, and personalized
          journey from initial brief to measurable results.
        </p>
        <div className="flex flex-row justify-center max-lg:justify-between  ">
          <div className="w-1/6 max-lg:w-1/3">
            <img src={Puneetimg} alt="" className="object-fit object-cover " />
            <h2 className="text-2xl max-lg:text-base  text-center mr-6">Puneet Yadav</h2>
            <p className="text-md text-[#006039] text-center mr-6">(Buisness Head)</p>
          </div>
          <div className="w-1/6 max-lg:w-1/3 mt-16 mr-8">
            <h2 className="text-2xl max-lg:text-base text-end mr-6">Manoj Kataria</h2>
            <p className="text-md text-[#006039] text-end mr-6">(Founder)</p>
            <img src={Manojimg} alt="" className="object-fit object-cover" />
          </div>
          <div className="w-1/6 max-lg:w-1/3">
            <img src={Antaraimg} alt="" className="object-fit object-cover" />
            <h2 className="text-2xl max-lg:text-base text-center mr-12">Antara Deb</h2>
            <p className="text-md text-[#006039] text-center mr-12">(Process Head)</p>
          </div>
        </div>
        <div className="grid grid-cols-2 max-lg:grid-cols-1  gap-x-16 gap-y-8 max-lg:px-2 mt-10">
          <ProfileCard
            img={falakimg}
            name="Falak Mehendiritta"
            role="HR"
            position="left"
            background="lightblue"
          />
          <ProfileCard
            img={Abhishekimg}
            name="Abhishek Singh"
            role="Full Stack Developer"
            position="right"
            background="lightblue"
          />


          <ProfileCard
            img={Kartikimg}
            name="Kartik Sharma"
            role="SEO Analyst"
            position="right"
            background="lightblue"
          />

          <ProfileCard
            img={Tusharimg}
            name="Tushar Negi"
            role="Product Designer"
            position="left"
          />

          <ProfileCard
            img={Parulimg}
            name="Parul Kapoor"
            role="Buisness Consultant"
            position="left"

          />

          <ProfileCard
            img={Shashankimg}
            name="Shashank Panchal"
            role="Software Developer"
            position="right"
            background="lightblue"
          />
          <ProfileCard
            img={Divyamimg}
            name="Divyam Bajaj"
            role="Parternship Manager"
            position="right"

            background="lightblue"
          />
          <ProfileCard
            img={rahulimg}
            name="Rahul Kumar"
            role="Frontend Developer"
            position="left"

          />

          <ProfileCard
            img={Harshimg}
            name="Harsh Lodhi"
            role="Google Ads Expert"
            position="left"

          />

          
          <ProfileCard
         img={Bishwajeet}
         name="Bishwajeet Singh"
         role="SEO Analyst"
         position="right"
       />



        </div>
      </section>

      <section className=" container w-[100%] mx-auto  mt-[5px] mb-[50px] pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16]">
        <h2
          className="mt-[40px] text-[black] font-normal  text-center leading-[120%]
          text-[32px]           
      
        "
        >
          Let's address your <span className="text-[#4CAF50] ">questions </span>
          today
        </h2>

        <Accordion />
      </section>
    </div>
  );
};

export default AboutUS;
