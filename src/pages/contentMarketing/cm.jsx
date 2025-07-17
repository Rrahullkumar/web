import React, { useEffect, useState, useRef } from 'react';
import './cm.css'; // Make sure this file has your styles
import c1_image from './Resources/Rectangle.png';
import image from './Resources/image.svg';
import Conatctfrom from '../../components/contact/contactform'; // Corrected import
import Accordian from '../home/componnet/Accordian.jsx';
import { FiPhone } from "react-icons/fi";
import { Helmet } from 'react-helmet';
import HeroSection from '../../components/Herosection/Herosection.jsx';
import Newcontact from '../../components/Newcontact/Newcontact.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import image17 from './Resources/image17.png';
import image18 from './Resources/image18.png';
import image19 from './Resources/image19.png';
import image20 from './Resources/image20.png';
import image21 from './Resources/image21.png';
import image22 from './Resources/image22.png';
import image23 from './Resources/image23.png';
import image24 from './Resources/image24.png';
import TestimonialSlider from '../../components/testimonial/TestimoniaSlider.jsx';
const ContentMarketing = () => {
  const testimonialData = [
    {
      rating: "4.9",
      feedback: "We needed an honest search engine marketing company in Gurgaon to help us improve our business with our online presence. WebNest Media was the best choice. Their professionals really know what they're doing in terms of getting results. The most honest and best SEO agency in Gurgaon that you can trust to grow your business online.",
      avatar: "https://pagedone.io/asset/uploads/1696229969.png",
      name: "Anamika ",
      designation: "CEO"
    },
    {
      rating: "4.9",
      feedback: "As a startup, we needed SEO services in Gurgaon that could understand our specific needs and deliver measurable growth. The team at WebNest Media provided us with strategies and expertise. Our traffic has doubled in just a few months!",
      avatar: "https://pagedone.io/asset/uploads/1696229994.png",
      name: "Aman Bajwa",
      designation: "Marketing Head"
    },
    {
      rating: "4.9",
      feedback: "We’ve worked with a few agencies before, but WebNest Media truly stands out as the top SEO agency in Gurgaon. Their knowledge of search engine optimization is unmatched. Our online visibility and conversions have improved significantly.",
      avatar: "https://pagedone.io/asset/uploads/1696230027.png",
      name: "Tushar Negi",
      designation: "Operations Manager"
    },
    {
      rating: "4.9",
      feedback: "We have amazing experience with WebNest Media. They have a team that is knowledgeable and creative. I prefer them, if you need the best SEO services.",
      avatar: "https://pagedone.io/asset/uploads/1696229969.png",
      name: "Naina Sharma",
      designation: "Business Owner"
    },
    {
      rating: "4.9",
      feedback: "I am very happy with the team of WebNest Media, they improve my business ranking through SEO services. It is the best SEO agency.",
      avatar: "https://pagedone.io/asset/uploads/1696229994.png",
      name: "Rahul Kaushik",
      designation: "Entrepreneur"
    }
  ];
  const [text, setText] = useState('');
  const words = ['Engage', 'Impact', 'Content'];
  const delay = 150;
  const pause = 1000;

  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    let timeout;

    const type = () => {
      const currentWord = words[wordIndex.current];

      if (!isDeleting.current) {
        // Typing
        setText(currentWord.substring(0, charIndex.current));
        if (charIndex.current < currentWord.length) {
          charIndex.current++;
          timeout = setTimeout(type, delay);
        } else {
          // Pause after typing full word
          timeout = setTimeout(() => {
            isDeleting.current = true;
            timeout = setTimeout(type, delay);
          }, pause);
        }
      } else {
        // Deleting
        if (charIndex.current > 0) {
          charIndex.current--;
          setText(currentWord.substring(0, charIndex.current));
          timeout = setTimeout(type, delay / 2); // Faster delete
        } else {
          // Pause before starting next word
          isDeleting.current = false;
          wordIndex.current = (wordIndex.current + 1) % words.length;
          timeout = setTimeout(type, pause / 2); // Shorter pause after delete
        }
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, []);

  const statsData = [
    { number: '1050+', label: 'Projects Delivered' },
    { number: '85%', label: 'Words Written' },
    { number: '40%', label: 'Brand Served' },
    { number: '2500+', label: 'CLient  Retention' },
  ];
  const trustData = [
    {
      title: "Uncovering Your Potential",
      text: "Our creative team delves deep into your brand's strengths to identify opportunities and connect with the most suitable audience for your business.",
    },
    {
      title: "Strategic Keyword Research",
      text: "As the best content writing company in Gurgaon, WebNest Media meticulously selects relevant keywords to enhance your website's appeal and search engine visibility.",
    },
    {
      title: "Collaborative Creativity",
      text: "We value your insights and actively involve you in the content creation process. By blending your ideas with our expertise, we craft content that truly represents your brand's voice.",
    },
  ];



  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const contentMarketingSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://webnestmedia.com/content-marketing#service",
        "name": "Content Marketing",
        "description": "WebNest Media is a leading content marketing agency in Gurgaon offering strategy-driven content creation, blog writing, SEO content, social content, and storytelling that drives traffic, engagement, and conversions for your brand.",
        "serviceType": "Content Marketing",
        "provider": {
          "@type": "Organization",
          "name": "WebNest Media",
          "url": "https://webnestmedia.com",
          "logo": "https://webnestmedia.com/assets/newlogo-CQU_gx5-.svg",
          "sameAs": [
            "https://www.instagram.com/webnestmediagroup/",
            "https://www.facebook.com/people/WebNest-Media/61576616442478/",
            "https://www.linkedin.com/company/webnest-media-group/"
          ]
        },
        "areaServed": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Floor no. 1, AltF Coworking, Orchid Business Park, Sohna Road",
            "addressLocality": "Gurgaon",
            "addressRegion": "Haryana",
            "postalCode": "122001",
            "addressCountry": "IN"
          }
        },
        "url": "https://webnestmedia.com/content-marketing"
      },
      {
        "@type": "WebPage",
        "@id": "https://webnestmedia.com/content-marketing#webpage",
        "url": "https://webnestmedia.com/content-marketing",
        "name": "Content Marketing Services in Gurgaon – WebNest Media",
        "description": "Looking to grow your brand with high-impact content? WebNest Media offers expert content marketing services in Gurgaon — including blog writing, SEO content, and strategy to attract and engage your ideal audience."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://webnestmedia.com/content-marketing#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://webnestmedia.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://webnestmedia.com/#services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Content Marketing",
            "item": "https://webnestmedia.com/content-marketing"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://webnestmedia.com/content-marketing#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does content marketing include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our content marketing includes blog writing, SEO-optimized content, landing pages, social media content, email campaigns, and content strategy development to boost your brand visibility."
            }
          },
          {
            "@type": "Question",
            "name": "How can content marketing grow my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It helps build trust, improve search engine rankings, and attract the right audience to your website—leading to more traffic, engagement, and conversions over time."
            }
          },
          {
            "@type": "Question",
            "name": "Why choose WebNest Media for content marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We combine storytelling, SEO, and strategy to create content that resonates with your audience and drives business growth. Our team creates content that ranks and converts."
            }
          }
        ]
      }
    ]
  };



  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <>
      <Helmet>

        <title>Best Content Marketing Agency in Gurgaon | WebNest Media</title>
        <meta name="description" content="WebNest Media is the top content marketing agency in Gurgaon. We deliver high-quality, SEO-friendly content that attracts traffic and generates leads." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WebNest Media" />
        <link rel="canonical" href="https://webnestmedia.com/content-marketing" />

        <meta property="og:title" content="Best Content Marketing Agency in Gurgaon | WebNest Media " />
        <meta property="og:description" content="WebNest Media is the top content marketing agency in Gurgaon. We deliver high-quality, SEO-friendly content that attracts traffic and generates leads." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webnestmedia.com/content-marketing" />
        <meta property="og:image" content="https://webnestmedia.com/assets/Rectangle-BqtkALH1.svg" />
        <meta property="og:site_name" content="WebNest Media" />

        <script type="application/ld+json">

          {JSON.stringify(contentMarketingSchema)}
        </script>

      </Helmet>

      <section className=''>



        <div className="mt-[px]   max-lg:mt-[0] w-[100%]">
          {/* <h1 className='text-[52px] max-lg:text-[38px] text-center'>Content Marketing <span className='text-black'>Agency in Gurgaon </span></h1> */}
          {/* <h2 className="heading-styled relative h-[60px] text-[40px]  bg-yellow font-bold text-black px-4 py-1 mt-[320px] ">
            {text}
          </h2> */}
          <HeroSection
            backgroundImage={c1_image}
            heading="Content Marketing Company"
            highlight="in Gurgaon"
            paragraph="From blogs to web copy, we craft SEO-driven content that brings value to your audience and helps your business grow online.
"
          />
        </div>

        <div className="max-w-[1440px] mb-16 maxx-lg:mb-10 flex flex-row w-full mx-auto px-[40px] max-lg:px-[16px] lg:mt-24 max-lg:mt-10 justify-between">
          <div className="lg:w-[60%]">
            <div className="lg:hidden w-[80%] flex items-center mx-auto mb-10">
              <img src={image} alt="" />
            </div>
            <h2 data-aos="fade-up" className="text-[52px] mb-5 max-lg:text-3xl lg:translate-y-10 max-lg:mb-[20px] font-semibold">
              <span className="highlight">Content</span> is the key to <br /> building audiences
            </h2>
            
            <div className="flex flex-row max-lg:flex-col-reverse justify-between items-center gap-24 max-lg:gap-10">
              {/* Left Text Section */}
              <div className=" flex flex-col">
                <p data-aos="fade-up" className="text-base">
                  Great content captures attention, builds trust, and keeps your audience coming back.
                  At WebNest Media, we craft meaningful content that speaks directly to your ideal customers.
                </p>

                <br />
                <h3 data-aos="fade-up" className="text-2xl font-semibold mb-4">What We Offer:</h3>

                <ul className="text-base mb-12 lg:leading-[160%]">
                  <li data-aos="fade-up">• Blog posts, SEO content, and landing pages</li>
                  <li data-aos="fade-up">• Visual storytelling with high-quality graphics</li>
                  <li data-aos="fade-up">• Strategic content planning and calendar</li>
                </ul>




                <div data-aos="fade-up" className="flex gap-3">


                  <button
                    onClick={() => scrollToSection("bringout")}

                    className='uiverse-button'>Learn More</button>



                  <Link to="/contact-us">
                    <button className='white-button'>Contact Us</button>

                  </Link>

                </div>


              </div>


            </div>


          </div>
          <div className="max-lg:hidden my-auto">
            <img src={image} alt="" />
          </div>


        </div>


           <div className='bg-[#EFF4EE]'>
          <section className='max-w-[1440px] mx-auto flex flex-col text-center py-16  mt-24 max-md:mt-10'>
            <h2 className='text-[32px] max-md:text-2xl mb-16 font-semibold'> Your <span className='text-[#4caf50] '>success</span> is Our <span className='text-[#4caf50]'>Mission</span></h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-5 px-10 max-md:px-4'>
              <div className="cardss px-20 py-5 pt-10 rounded-xl flex flex-col gap-3 items-center bg-white">
                <h3 className='text-[52px] font-light max-md:text-4xl text-[#4caf50]'>13,456</h3>
                <p className='text-2xl text-nowrap'>Projects Delivered</p>
              </div>
              <div className="cardss  px-20 pt-9 pb-7 rounded-xl gap-3 flex flex-col items-center bg-white">
                <h3 className='text-[52px] font-light  max-md:text-4xl text-[#4caf50]'>10M+</h3>
                <p className='text-2xl text-nowrap'>Words Written</p>
              </div>
              <div className="cardss px-20 pt-9 pb-7 rounded-xl gap-3 flex flex-col items-center bg-white">
                <h3 className='text-[52px] font-light max-md:text-4xl text-[#4caf50]'>500+</h3>
                <p className='text-2xl text-nowrap'>Brands Served</p>
              </div>
              <div className="cardss px-20 pt-9 pb-7 rounded-xl gap-3 flex flex-col items-center  bg-white">
                <h3 className='text-[52px] font-light max-md:text-4xl text-[#4caf50]'>98%</h3>
                <p className='text-2xl text-nowrap'>Client Retention</p>
              </div>

            </div>
          </section>
        </div>








        <section className="max-w-[1440px] mx-auto  mt-24 max-lg:mt-10">
          <h2 className='text-[52px] max-lg:text-3xl max-md:px-4 lg:text-center font-semibold lg:w-[70%] mx-auto mb-[55px] max-lg:mb-14'>TYPES OF CONTENT MARKETING SERVICES WE OFFER</h2>

          <div className='grid lg:grid-cols-2 max-md:grid-cols gap-32 max-lg:gap-10 px-24 max-lg:px-4'>
            <div className="cmcard flex flex-col">
              <div className='flex flex-row gap-4 mb-10 max-md:mb-6 items-center'>
                <h3 className='text-8xl max-md:text-7xl lg:font-medium text-[#FFBA34]'>01</h3>
                <h3 className='text-[36px] max-lg:text-3xl font-semibold '>Blog  Writing <br className='max-lg:hidden'/> Services</h3>
              </div>
              <p className='text-base'>
                Our skilled professionals develop exceptional blogs that are in accordance with your brand’s content marketing objectives. Every blog is carefully crafted to fulfill the needs of your target audience's search intent. Utilizing our high-quality content for blogs, your website will offer engaging experiences to users and differentiate itself from competitors . We strive for improved visibility of your content on various search engines. Blogs authored by us ensure a lasting relationship between you and your readers as the interactive, friendly style used captures interest, ensuring readers return frequently.
              </p>
            </div>
            <div className="cmcard flex flex-col">
              <div className='flex flex-row gap-4 mb-10 max-md:mb-6 items-center'>
                <h3 className='text-8xl max-md:text-7xl font-medium text-[#FFBA34]'>02</h3>
                <h3 className='text-[36px] font-semibold max-lg:text-3xl'>Guest Post <br className='max-lg:hidden'/> Writing Services</h3>
              </div>
              <p className='text-base'>
                The website content we create is fresh, engaging, and optimized for SEO. To begin with, we conduct thorough competitor analysis, keyword mapping including primary and secondary keywords as well as LSI keywords, and outline how your content will be structured. After that groundwork has been finished, our professional writers produce content that fits the brand persona while addressing the intended audience. From homepage copy to service pages or even landing pages – everything is covered. You tell us the content strategy and we make sure every word is aligned to your marketing objectives perfectly.
              </p>
            </div>
            <div className="cmcard flex flex-col">
              <div className='flex flex-row gap-4 mb-10 max-md:mb-6 items-center'>
                <h3 className='text-8xl max-md:text-7xl font-medium text-[#FFBA34]'>03</h3>
                <h3 className='text-[36px] font-semibold max-lg:text-3xl'>Website Content <br className='max-lg:hidden'/> Writing</h3>
              </div>
              <p className='text-base'>
                Our skilled professionals develop exceptional blogs that are in accordance with your brand’s content marketing objectives. Every blog is carefully crafted to fulfill the needs of your target audience's search intent. Utilizing our high-quality content for blogs, your website will offer engaging experiences to users and differentiate itself from competitors . We strive for improved visibility of your content on various search engines. Blogs authored by us ensure a lasting relationship between you and your readers as the interactive, friendly style used captures interest, ensuring readers return frequently.
              </p>
            </div>
            <div className="cmcard flex flex-col">
              <div className='flex flex-row gap-4 mb-10 max-md:mb-6 items-center'>
                <h3 className='text-8xl max-md:text-7xl font-medium text-[#FFBA34]'>04</h3>
                <h3 className='text-[36px] font-semibold max-lg:text-3xl'>Press Release <br className='max-lg:hidden'/>Writing Services</h3>
              </div>
              <p className='text-base'>
                Our skilled professionals develop exceptional blogs that are in accordance with your brand’s content marketing objectives. Every blog is carefully crafted to fulfill the needs of your target audience's search intent. Utilizing our high-quality content for blogs, your website will offer engaging experiences to users and differentiate itself from competitors . We strive for improved visibility of your content on various search engines. Blogs authored by us ensure a lasting relationship between you and your readers as the interactive, friendly style used captures interest, ensuring readers return frequently.
              </p>
            </div>
          </div>
        </section>

        <section className='max-w-[1440px] mx-auto mt-24 max-md:mt-10 lg:px-10 max-lg:px-4 overflow-hidden mb-24 max-lg:mb-10'>
  <h2 className='text-[52px] max-lg:text-3xl lg:w-[60%] font-semibold lg:text-center mx-auto mb-20 max-lg:mb-0'>
    Why we are the best content marketing agency
  </h2>

  <div className='max-lg:overflow-x-auto scrollbar-hide'>
    <div className='gap-5 lg:grid lg:grid-cols-4 max-lg:flex max-lg:space-x-4 max-lg:w-max max-lg:flex-nowrap'>
      {/* Card 1 */}
      <div className='text-center flex flex-col w-full max-lg:flex-shrink-0 max-lg:min-w-[250px] max-lg:max-w-[300px]'>
        <img src={image17} alt="No Duplicate Content" />
        <h3 className='text-[32px] lg:w-[90%] font-medium max-md:text-2xl mb-3'>No Duplicate Content</h3>
        <p className='text-base'>Our experts write genuine and relevant content. There will be no chance of duplicate content.</p>
      </div>

      {/* Card 2 */}
      <div className='text-center flex flex-col w-full max-lg:flex-shrink-0 max-lg:min-w-[250px] max-lg:max-w-[300px]'>
        <img src={image18} alt="100% Humanised Content" />
        <h3 className='text-[32px] lg:w-[90%] font-medium max-md:text-2xl mb-3'>100% Humanised Content</h3>
        <p className='text-base'>We write 100% AI tool free content. All words in content are based on human, not ChatGPT or other AI tools.</p>
      </div>

      {/* Card 3 */}
      <div className='text-center flex flex-col w-full max-lg:flex-shrink-0 max-lg:min-w-[250px] max-lg:max-w-[300px]'>
        <img src={image19} alt="SEO Friendly Content" />
        <h3 className='text-[32px] lg:w-[90%] font-medium max-md:text-2xl mb-3'>SEO Friendly Content</h3>
        <p className='text-base'>We confirm strict checks to make sure that your content is SEO friendly content.</p>
      </div>

      {/* Card 4 */}
      <div className='text-center flex flex-col w-full max-lg:flex-shrink-0 max-lg:min-w-[250px] max-lg:max-w-[300px]'>
        <img src={image20} alt="Researched Content" />
        <h3 className='text-[32px] lg:w-[90%] font-medium max-md:text-2xl mb-3'>Researched & Well-Structured Content</h3>
        <p className='text-base'>We write content after researching particular topics and make it well structured.</p>
      </div>

      {/* Card 5 */}
      <div className='text-center flex flex-col w-full max-lg:flex-shrink-0 max-lg:min-w-[250px] max-lg:max-w-[300px]'>
        <img src={image21} alt="Keyword Optimized" />
        <h3 className='text-[32px] lg:w-[90%] font-medium max-md:text-2xl mb-3'>Keyword Optimized for Better Ranking</h3>
        <p className='text-base'>Our expert team implements only those keywords that are useful for ranking.</p>
      </div>

      {/* Card 6 */}
      <div className='text-center flex flex-col w-full max-lg:flex-shrink-0 max-lg:min-w-[250px] max-lg:max-w-[300px]'>
        <img src={image22} alt="Plagiarism Free" />
        <h3 className='text-[32px] lg:w-[90%] font-medium max-md:text-2xl mb-3'>100% Humanised Content</h3>
        <p className='text-base'>When we write, we ensure the content is unique and plagiarism free.</p>
      </div>

      {/* Card 7 */}
      <div className='text-center flex flex-col w-full max-lg:flex-shrink-0 max-lg:min-w-[250px] max-lg:max-w-[300px]'>
        <img src={image23} alt="Latest SEO" />
        <h3 className='text-[32px] lg:w-[90%] font-medium max-md:text-2xl mb-3'>Aligned with Latest SEO Trends</h3>
        <p className='text-base'>We craft content using the latest SEO techniques and updates, keeping your brand competitive in search rankings.</p>
      </div>

      {/* Card 8 */}
      <div className='text-center flex flex-col w-full max-lg:flex-shrink-0 max-lg:min-w-[250px] max-lg:max-w-[300px]'>
        <img src={image24} alt="Mobile Formatting" />
        <h3 className='text-[32px] lg:w-[90%] font-medium max-md:text-2xl mb-3'>Mobile & User-Friendly Formatting</h3>
        <p className='text-base'>We create content that’s easy to read and perfectly formatted for both mobile and desktop users.</p>
      </div>
    </div>
  </div>
</section>


        <section className='max-w-[1440px] mb-24 max-lg:mb-10 w-[100%] mt-[36px] mx-auto  pl-[40px] pr-[40px] max-lg:pl-[16px] max-lg:pr-[16px] '>

          <TestimonialSlider
            sectionTitle="What Our Clients Say"
            sectionSubtitle="Testimonials"
            testimonials={testimonialData}
          />

        </section>
        <div className='mt-24 max-md:mt-10 '>
          <Newcontact />
        </div>


        <div className="accordian max-w-[1440px] px-10 max-md:px-4 w-[100%] mt-24 max-md:mt-10 mx-auto ">
  <h2 className="text-center">
    Let's address your <span className="text-black">questions</span> today
  </h2>
  <div className="accordion-wrapper-columns">
    {/* Left Column */}
    <div className="accordion-column">
      <div className="accordion">
        <input type="checkbox" id="left-1" />
        <label className="accordion-label" htmlFor="left-1">
          What is affiliate marketing?
        </label>
        <div className="accordion-content">
          <p>
            Affiliate marketing is a way to earn money by promoting someone
            else’s product. When someone buys through your link, you get a
            small commission.
          </p>
        </div>
      </div>

      <div className="accordion">
        <input type="checkbox" id="left-2" />
        <label className="accordion-label" htmlFor="left-2">
          Can anyone start affiliate marketing?
        </label>
        <div className="accordion-content">
          <p>
            Yes! Whether you’re a student, blogger, business owner, or just
            exploring online income, anyone can start affiliate marketing with
            the right guidance.
          </p>
        </div>
      </div>

      <div className="accordion">
        <input type="checkbox" id="left-3" />
        <label className="accordion-label" htmlFor="left-3">
          Do I need a website to become an affiliate marketer?
        </label>
        <div className="accordion-content">
          <p>
            Not necessarily. You can promote links on social media, YouTube, X,
            or even WhatsApp. But having a website helps you build trust and
            grow faster.
          </p>
        </div>
      </div>

      <div className="accordion">
        <input type="checkbox" id="left-4" />
        <label className="accordion-label" htmlFor="left-4">
          How much can I earn with affiliate marketing?
        </label>
        <div className="accordion-content">
          <p>
            It depends on your efforts and the products you promote. Some people
            earn a few thousand a month, while others make it a full-time
            income.
          </p>
        </div>
      </div>

      <div className="accordion">
        <input type="checkbox" id="left-5" />
        <label className="accordion-label" htmlFor="left-5">
          Is affiliate marketing free to start?
        </label>
        <div className="accordion-content">
          <p>
            Yes, most affiliate programs are free to join. You just need time,
            content, and strategy to start earning.
          </p>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="accordion-column">
      <div className="accordion">
        <input type="checkbox" id="right-6" />
        <label className="accordion-label" htmlFor="right-6">
          How long does it take to see results on SERP?
        </label>
        <div className="accordion-content">
          <p>
            Some see results in a few weeks, others in a few months.
            Consistency and choosing the right products make a big difference.
          </p>
        </div>
      </div>

      <div className="accordion">
        <input type="checkbox" id="right-7" />
        <label className="accordion-label" htmlFor="right-7">
          Can I do affiliate marketing part-time?
        </label>
        <div className="accordion-content">
          <p>
            Absolutely. It’s flexible. You can work on it after hours or
            weekends and still earn passive income over time.
          </p>
        </div>
      </div>

      <div className="accordion">
        <input type="checkbox" id="right-8" />
        <label className="accordion-label" htmlFor="right-8">
          Is affiliate marketing safe and legal in India?
        </label>
        <div className="accordion-content">
          <p>
            Yes, it’s 100% legal and widely practiced in India. Just make sure
            to join trusted programs and follow ethical practices.
          </p>
        </div>
      </div>

      <div className="accordion">
        <input type="checkbox" id="right-9" />
        <label className="accordion-label" htmlFor="right-9">
          What are the most popular affiliate programs in India?
        </label>
        <div className="accordion-content">
          <p>
            Some of the top ones are Amazon Associates, Flipkart, and affiliate
            programs from hosting companies, banks, and online tools.
          </p>
        </div>
      </div>

      <div className="accordion">
        <input type="checkbox" id="right-10" />
        <label className="accordion-label" htmlFor="right-10">
          Can businesses use affiliate marketing too?
        </label>
        <div className="accordion-content">
          <p>
            Definitely. Businesses can set up affiliate programs to get more
            customers through influencers, bloggers, and marketers promoting
            their brand.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      </section>
    </>
  );
};
export default ContentMarketing;