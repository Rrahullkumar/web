import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ChevronDown, ChevronUp, Filter, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Insight = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openMenu, setOpenMenu] = useState("digital");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const dropdowns = [
    {
      id: "digital",
      title: "Digital Marketing",
      items: [
        "Search Engine Optimization",
        "Search Engine Marketing",
        "Social Media Marketing",
        "Web Development",
        "Content Marketing",
        "Affiliate Marketing",
      ],
    },
    {
      id: "promotions",
      title: "Promotions",
      items: ["Mobile Marketing", "Influencer Marketing", "SMS Marketing", "Email Marketing"],
    },
    {
      id: "solutions",
      title: "Solutions",
      items: [
        "Online Reputation Management",
        "Brand Strategy",
        "Lead Generation",
        "Customer Retention",
        "Digital Tranformation",
        "Market Research and Analysis",
      ],
    },
  ];

  useEffect(() => {
    axios.get('https://crm-1-x26w.onrender.com/api/blogs')
      .then(response => {
        // console.log("response ", response)
        setBlogs(response.data);
        setLoading(false);
      })
      .catch(error => {
        // console.error('Error fetching blogs:', error);
        setLoading(false);
      });
  }, []);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  const filteredBlogs = blogs.filter((blog) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      blog.title?.toLowerCase().includes(search) ||
      blog.content?.toLowerCase().includes(search) ||
      blog.author?.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "" || // no category filter
      (Array.isArray(blog.category) && blog.category.includes(selectedCategory)) ||
      blog.content === selectedCategory || 
      blog.author === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const latestBlog = blogs.length > 0 ? blogs[0] : null;

  return (
    <>
      <div className="mx-auto container p-4 sm:p-8">
        {/*Latest Blog Section - Using slug instead of title */}
        <div
          className="container mx-auto cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            if (latestBlog?.slug) {
              window.location.href = `/blogs/${latestBlog.slug}`;
            }
          }}
        >
          <h2 className="text-3xl sm:text-5xl font-semibold mb-8 pl-6 max-md:pl-3">Latest Blog</h2>

          {latestBlog ? (
            <div className="flex flex-col md:flex-row items-start gap-6 p-4 sm:p-6 bg-white">
              <div className="w-full md:w-1/2">
                <LazyLoadImage
                  src={latestBlog.imageUrl}
                  alt={latestBlog.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-4">
                <div className="flex justify-between text-sm sm:text-lg font-medium text-gray-600">
                  <p className='text-[#221F49]'>
                    {new Date(latestBlog.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <p className='text-[#221F49] font-medium'>Author: <span className="text-blue-600 font-semibold">{latestBlog.author}</span></p>
                </div>
                <h3 className="text-2xl sm:text-[32px] leading-snug font-semibold text-[#221F49]">{latestBlog.title}</h3>

                <div className="text-base sm:text-lg leading-relaxed text-gray-700 font-light">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: (latestBlog.content || "").substring(0, 280) + "..."
                    }}
                  />

                  {/* Read More button using slug */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); 
                      if (latestBlog?.slug) {
                        window.location.href = `/blogs/${latestBlog.slug}`;
                      }
                    }}
                    className="uiverse-button mt-5"
                    style={{ paddingTop: "4px", paddingBottom: "4px" }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500"></p>
          )}
        </div>

        <div className="w-full h-[2px] bg-gray-300 my-8 sm:my-16"></div>

        {/* ✅ Mobile Search + Filter */}
        <div className="flex items-center justify-between lg:hidden sticky top-20 mb-6 p-3 border rounded-lg bg-white shadow z-50">
          <input
            type="text"
            placeholder="Search Blog"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-3 border rounded-md mr-3"
          />
          <div className="relative">
            <button
              onClick={() => setOpenMenu(openMenu === "mobile-filter" ? "" : "mobile-filter")}
              className="p-2 border rounded-md bg-gray-100 hover:bg-gray-200"
            >
              <Filter size={20} />
            </button>

            {openMenu === "mobile-filter" && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded-md shadow-lg z-50 max-h-72 overflow-auto">
                <div
                  className="px-4 py-2 font-medium text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => { setSelectedCategory(""); setOpenMenu(""); }}
                >
                  All Categories
                </div>
                <hr />
                {dropdowns.map((dropdown) => (
                  <div key={dropdown.id} className="border-b last:border-none">
                    <p className="px-4 py-2 font-semibold text-gray-800 bg-gray-50">{dropdown.title}</p>
                    <ul>
                      {dropdown.items.map((item, index) => (
                        <li
                          key={index}
                          className="px-6 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer flex justify-between items-center"
                          onClick={() => { setSelectedCategory(item); setOpenMenu(""); }}
                        >
                          {item} <ChevronRight size={14} className="text-gray-400" />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ✅ Blog Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="hidden lg:block w-1/4 p-4 border bg-[#FDF8F8] rounded-lg sticky self-start top-20">
            <input
              type="text"
              placeholder="Search Blog"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
            />
            <div className="w-full p-4 rounded-md space-y-4">
              {dropdowns.map((dropdown) => (
                <div key={dropdown.id}>
                  <button
                    onClick={() => toggleMenu(dropdown.id)}
                    className="flex justify-between w-full text-xl"
                  >
                    {dropdown.title}
                    {openMenu === dropdown.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  <ul
                    className={`ml-3 border-l pl-3 overflow-hidden transition-all duration-300 ease-in-out ${openMenu === dropdown.id ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                      }`}
                  >
                    {dropdown.items.map((item, index) => (
                      <li
                        key={index}
                        className="cursor-pointer hover:text-[#4caf50] py-1"
                        onClick={() => setSelectedCategory(item)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/*Blog Cards - Using slug instead of generated slug from title */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {loading ? (
              <p className="col-span-3 text-center text-gray-500"> </p>
            ) : filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => {
                // Use blog.slug instead of generating from title
                const slug = blog.slug || "untitled-blog";

                return (
                  <Link key={index} to={`/blogs/${slug}`}>
                    <div className="border rounded-lg p-4 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-[#FFBA34] hover:shadow-sm">
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="w-full h-40 max-md:h-auto object-contain rounded"
                      />

                      <p className="text-black font-medium mt-2">
                        <p className='text-black font-medium '> 
                          {new Date(blog.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>  <br /> 
                        Author: {blog.author}
                      </p>

                      <h3 className="text-lg font-bold mt-2 line-clamp-2">{blog.title}</h3>

                      <div
                        className="text-gray-600 text-sm mt-2 line-clamp-3"
                        dangerouslySetInnerHTML={{
                          __html: (blog.content)
                        }}
                      />
                    </div>
                  </Link>
                );
              })
            ) : (
              <p className="col-span-3 text-center text-gray-500">No blogs found matching your search.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Insight;
