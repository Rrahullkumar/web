import React from 'react'
import blog1 from "./resourses/blog1.svg"
import blog2 from "./resourses/blog2.svg"
import blog3 from "./resourses/blog3.svg"
import blog4 from "./resourses/blog4.svg"
import blog5 from "./resourses/blog5.svg"

import { LazyLoadImage } from 'react-lazy-load-image-component';


const insight = () => {



  const posts = [
    {
      image: blog1,
      author: "Grigsby",
      date: "3rd June",
      title: "Online Reputation Management",
    },
    {
      image: blog2,
      author: "Grigsby",
      date: "3rd June",
      title: "Online Reputation Management",
    },
    {
      image: blog3,
      author: "Grigsby",
      date: "3rd June",
      title: "Online Reputation Management",
    },
    {
      image: blog1,
      author: "Grigsby",
      date: "3rd June",
      title: "Online Reputation Management",
    },
    {
      image: blog2,
      author: "Grigsby",
      date: "3rd June",
      title: "Online Reputation Management",
    },
    {
      image: blog3,
      author: "Grigsby",
      date: "3rd June",
      title: "Online Reputation Management",
    },



  ];
  return (
    <div className='mt-[75px] max-w-[1140px] w-[100%] mx-auto'>


      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-[15px] justify-center mt-[96px]">
        {posts.map((post, index) => (
          <div key={index} >
              <LazyLoadImage
              src={post.image}
              alt={post.title}
              className="w-full max-h-[420px] object-cover"
            />


            {/* <div className='flex  items-center gap-[16px] p-[8px]'>

              <div className='pr-[10px] border-r border-[grey]'>


                <p className=" text-[24px] text-[#000000] font-normal leading-[120%]">     {post.author}</p>


                <p className="text-[12px] leading-[120%] text-gray-500 " >{post.date}</p>


              </div>


              <p className="mt-2 text-[24px] text-[#000000] font-normal leading-[120%]">{post.title}</p>

            </div> */}

            <div className="flex  items-center gap-[16px] p-[8px] pb-[12px]
"><div className=" text-[24px] font-semibold pb-[6px] pr-[10px] border-r border-[grey]"><p className=" text-[24px] text-[#000000] font-normal leading-[120%]" 
  
>     {post.author}</p><p className="text-[12px] leading-[120%] text-gray-500 ">{post.date}</p></div><p className="mt-2 text-[24px] text-[#000000] font-normal leading-[120%]">{post.title}</p></div>


          </div>
        ))}
      </div>

    </div>
  )
}

export default insight
