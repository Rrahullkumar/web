import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import blog from './resourses/blog.png'
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Filter, ChevronRight } from "lucide-react"; // ✅ Icons


export const blogs = [
  {
    date: "July 25, 2025",
    image: blog,
    author: "Shashank Panchal",
    heading: "How SEO Can Boost Your Business",
    category: "Search Engine Optimization",
    information: `Search Engine Optimization (SEO) is one of the most powerful tools to enhance your online presence. 
    By implementing effective SEO strategies such as keyword research, on-page optimization, link building, and content marketing, 
    businesses can significantly improve their visibility on search engines like Google. Higher visibility means more organic traffic, 
    which often translates to better brand recognition and increased revenue. SEO also focuses on creating a seamless user experience, 
    which boosts customer trust and retention. In today’s competitive digital landscape, companies that invest in SEO are more likely 
    to outperform competitors and build long-term growth. Whether you are a small business or an enterprise, SEO provides 
    sustainable benefits that help you stay ahead of the curve.`
  },
  {
    date: "July 20, 2025",
    image: blog,
    author: "Priya Sharma",
    heading: "Top 10 Web Development Trends in 2025",
    category: "Web Development",
    information: `The web development industry is evolving at a rapid pace, and staying updated with the latest trends is crucial for success. 
    In 2025, developers are focusing on technologies such as Progressive Web Apps (PWAs), serverless architectures, AI-powered chatbots, 
    and enhanced cybersecurity measures. The rise of Web3 and blockchain integration is also changing how websites handle user data and transactions. 
    Additionally, frameworks like React, Next.js, and Svelte are making development faster and more efficient. Voice search optimization, 
    motion UI, and dark mode preferences continue to shape user experiences. By adopting these cutting-edge trends, businesses can 
    build highly interactive, secure, and scalable websites that deliver value to users while staying ahead in a competitive market.`
  },
  {
    date: "July 15, 2025",
    image: blog,
    author: "Rahul Mehta",
    heading: "Why Responsive Design is Crucial",
    category: "Web Development",
    information: `Responsive design is no longer optional—it’s a necessity in today’s mobile-first world. 
    With an increasing number of users accessing websites from smartphones and tablets, businesses must ensure 
    their sites deliver a seamless experience across all screen sizes. A responsive website adapts to various devices, 
    enhancing usability, reducing bounce rates, and improving SEO rankings. Google prioritizes mobile-friendly websites in its search results, 
    making responsive design a critical ranking factor. Beyond search engines, users expect fast-loading, visually appealing, 
    and easily navigable sites. Implementing responsive design also reduces maintenance costs, as you only need to manage one 
    version of the website instead of separate mobile and desktop versions. In short, a responsive design not only improves 
    user experience but also drives engagement, conversions, and long-term business success.`
  },
  {
    date: "July 10, 2025",
    image: blog,
    author: "Anjali Verma",
    heading: "Mastering JavaScript for Beginners",
    category: "Content Marketing",
    information: `JavaScript is the backbone of modern web development, enabling developers to create dynamic, 
    interactive, and feature-rich websites. For beginners, mastering JavaScript opens doors to countless opportunities 
    in frontend and backend development. Learning the fundamentals such as variables, functions, loops, and DOM manipulation 
    is the first step. Once comfortable, you can explore advanced concepts like asynchronous programming, closures, and ES6+ features. 
    JavaScript also powers popular frameworks like React, Angular, and Vue, making it essential for building modern web applications. 
    Beyond the web, JavaScript is widely used in mobile and desktop app development through technologies like React Native and Electron. 
    With continuous practice and hands-on projects, beginners can quickly transition into skilled developers capable of handling complex 
    applications. JavaScript is not just a language; it’s a gateway to endless innovation in technology.`
  },
  {
    date: "July 5, 2025",
    image: blog,
    author: "Karan Singh",
    heading: "Boost Conversions with UX Design",
    category: "Search Engine Marketing",
    information: `User Experience (UX) design plays a pivotal role in influencing how visitors interact with your website or application. 
    A well-designed UX ensures that users can navigate easily, find information quickly, and complete desired actions without friction. 
    Good UX design is not just about aesthetics—it focuses on functionality, accessibility, and emotional engagement. Businesses that 
    invest in UX see higher customer satisfaction, increased conversions, and improved brand loyalty. Simple design changes, such as 
    optimizing call-to-action buttons, streamlining forms, and reducing load times, can have a significant impact on conversion rates. 
    Moreover, UX research and testing help in understanding user behavior, allowing for data-driven improvements. In a competitive digital 
    market, superior UX can be the differentiator that drives business success and customer retention.`
  },
  {
    date: "June 30, 2025",
    image: blog,
    author: "Ritika Patel",
    heading: "AI in Digital Marketing: What to Expect",
    category: "Search Engine Optimization",
    information: `Artificial Intelligence (AI) is transforming digital marketing by automating processes, analyzing data at scale, 
    and delivering personalized user experiences. AI tools like chatbots, predictive analytics, and recommendation engines allow 
    businesses to better understand their customers and deliver targeted campaigns. Machine learning algorithms can predict customer 
    behavior, optimize ad spending, and improve content relevance. In 2025, marketers are leveraging AI to create hyper-personalized 
    experiences, reduce operational costs, and improve ROI. Additionally, AI-powered SEO tools are helping businesses optimize 
    content strategies more efficiently. However, as AI adoption grows, ethical considerations and data privacy must also be addressed. 
    The future of digital marketing lies in combining AI's power with human creativity to create impactful campaigns that resonate with audiences.`
  },
  {
    date: "June 25, 2025",
    image: blog,
    author: "Vivek Kumar",
    heading: "Optimizing Website Speed for Better SEO",
    category: "Search Engine Optimization",
    information: `Website speed is a critical factor in both user experience and SEO. Slow-loading websites frustrate users, 
    leading to higher bounce rates and lost opportunities. Search engines like Google also consider page load speed as a ranking factor, 
    meaning that faster websites are more likely to appear higher in search results. To optimize speed, developers focus on techniques 
    such as compressing images, leveraging browser caching, using Content Delivery Networks (CDNs), and minimizing code. Mobile optimization 
    is equally important, as most users now access sites via smartphones. Regular performance testing with tools like Google PageSpeed Insights 
    helps identify bottlenecks. A faster website not only satisfies users but also improves conversions, revenue, and overall SEO performance.`
  },
  {
    date: "June 20, 2025",
    image: blog,
    author: "Neha Gupta",
    heading: "Content Marketing Strategies That Work",
    information: `Content marketing remains one of the most effective strategies for building brand awareness, generating leads, 
    and driving organic traffic. Successful content marketing goes beyond simply publishing blog posts—it involves creating valuable, 
    relevant, and consistent content tailored to your target audience. Strategies include blogging, video marketing, social media 
    content, podcasts, and email campaigns. High-quality content improves SEO, establishes authority, and fosters trust with potential 
    customers. In 2025, interactive content such as quizzes, polls, and AI-generated personalization is gaining traction. Additionally, 
    repurposing content across different platforms helps maximize reach. The key to content marketing success is understanding audience 
    needs, solving their problems, and providing actionable insights. When executed well, content marketing becomes a powerful driver 
    of long-term business growth.`
  }
];

const insight = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openMenu, setOpenMenu] = useState("digital");
  const [selectedCategory, setSelectedCategory] = useState("");
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

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






  const { date, image, author, heading, information } = blogs[0];
  const previewText = information.length > 280 ? information.substring(0, 280) + "..." : information;

  // ✅ Safe Similarity Function


  // ✅ Filter blogs
  const filteredBlogs = blogs.filter((blog) => {
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      blog.heading.toLowerCase().includes(search) ||
      blog.information.toLowerCase().includes(search)
      ||
      blog.author.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "" || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="mx-auto max-w-[1440px] p-4 sm:p-8">
      {/* ✅ Latest Blog Section */}
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-5xl font-semibold mb-8">Latest Blog</h2>

        <div className="flex flex-col md:flex-row items-start gap-6 p-4 sm:p-6 bg-white">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <LazyLoadImage
              src={image}
              alt={heading}
              className="w-full h-64 sm:h-80 object-cover rounded-lg"
            />
          </div>

          {/* Blog Info */}
          <div className="flex flex-col w-full md:w-1/2 space-y-4">
            <div className="flex justify-between text-sm sm:text-lg text-gray-600">
              <p>{date}</p>
              <p>Author: <span className="text-blue-600 font-semibold">{author}</span></p>
            </div>

            <h3 className="text-2xl sm:text-[48px] leading-snug font-semibold text-[#221F49]">{heading}</h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 font-light">
              {previewText}{" "}
              <button
                onClick={() => window.location.href = `/blog/${heading.replace(/\s+/g, '-').toLowerCase()}`}
                className="text-blue-700 underline">
                Read More
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Divider */}
      <div className="w-full h-[2px] bg-gray-300 my-8 sm:my-16"></div>

      {/* ✅ Mobile Filter/Search (only visible on small screens) */}
      <div className="flex items-center justify-between lg:hidden self-start sticky top-20 mb-6 p-3 border rounded-lg bg-white shadow z-50">

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Blog"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-3 border rounded-md mr-3"
        />

        {/* Filter Icon */}
        <div className="relative">
          <button
            onClick={() => setOpenMenu(openMenu === "mobile-filter" ? "" : "mobile-filter")}
            className="p-2 border rounded-md bg-gray-100 hover:bg-gray-200"
          >
            <Filter size={20} />
          </button>

          {/* ✅ Dropdown with Categories and Items */}
          {openMenu === "mobile-filter" && (
            <div className="absolute right-0 mt-2 w-64 bg-white border rounded-md shadow-lg z-50 max-h-72 overflow-auto">
              {/* Reset Filter */}
              <div
                className="px-4 py-2 font-medium text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => { setSelectedCategory(""); setOpenMenu(""); }}
              >
                All Categories
              </div>
              <hr />

              {/* ✅ Render Categories and Items */}
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

      {/* ✅ Blog Section */}
      <div className="flex flex-col lg:flex-row gap-6 ">

        {/* ✅ Sidebar: stays the same (desktop only) */}
        <div className="hidden lg:block w-1/4 p-4 border bg-[#FDF8F8] rounded-lg self-start sticky top-20">
          {/* Desktop Sidebar */}
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
                {/* Toggle Button */}
                <button
                  onClick={() => toggleMenu(dropdown.id)}
                  className="flex justify-between w-full text-xl"
                >
                  {dropdown.title}
                  {openMenu === dropdown.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {/* Dropdown List with Animation */}
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


        {/* ✅ Blog Grid (now responsive) */}
        <div className="w-full lg:w-3/4 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => {
              const slug = blog.heading.replace(/\s+/g, "-").toLowerCase();
              return (
                <Link key={index} to={`/blog/${slug}`}>
                  <div className="border rounded-lg p-4  cursor-pointer  transform transition-transform   duration-300 hover:scale-105 hover:shadow-[#FFBA34] hover:shadow-sm ">
                    <img src={blog.image} alt={blog.heading} className="w-full h-40 object-cover rounded" />
                    <p className="text-sm text-gray-500 mt-2">
                      {blog.date} <br /> Author: {blog.author}
                    </p>
                    <h3 className="text-lg font-bold mt-2">{blog.heading}</h3>
                    <p className="text-gray-600 text-sm">{blog.information.substring(0, 100)}...</p>
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

  )
}

export default insight
