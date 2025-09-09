
import  { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

import "./blogdetail.css"

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch all blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://crm-1-x26w.onrender.com/api/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // 🔹 Find the blog that matches the slug
  const currentIndex = blogs.findIndex(
    (b) => b.title.replace(/\s+/g, "-").toLowerCase() === slug
  );
  const blog = blogs[currentIndex];

 
  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (!blog) {
    return <p className="text-center text-red-500 mt-10">Blog not found.</p>;
  }

  return (
    

    <>
    

    {blog && (
  <Helmet>
    {/* Page title */}
    <title>{blog.metaTitle?.trim() || blog.title?.trim()}</title>

    {/* Meta description */}
    <meta
      name="description"
      content={blog.metaDescription?.trim() || blog.subtitle?.trim()}
    />

    {/* Keywords */}
    {Array.isArray(blog.keywords) && blog.keywords.length > 0 && (
      <meta name="keywords" content={blog.keywords.join(", ")} />
    )}

    {/* Open Graph */}
    <meta property="og:title" content={blog.ogTitle?.trim() || blog.title?.trim()} />
    <meta
      property="og:description"
      content={blog.ogDescription?.trim() || blog.metaDescription?.trim()}
    />
    <meta property="og:image" content={blog.imageUrl} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={window.location.href} />

    {/* Author */}
    <meta name="author" content={blog.author?.trim()} />
  </Helmet>
)}
    
     <div className="container mt-10 mx-auto px-10 max-lg:px-4 pb-24">
      {/* 🔹 Back Button */}
      <button onClick={() => navigate(-1)} className="text-blue-600 underline mb-4">
        ← Back
      </button>

      {/* 🔹 Blog Details */}
      <div className="flex flex-row max-lg:flex-col gap-10">
        <div className="lg:w-1/2">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-auto object-contain rounded"
            
          />
        </div>
        <div className="flex flex-col justify-between lg:w-1/2">
          <p className="text-gray-500 mb-2">{blog.date.slice(0, 10)}</p>
          <h1 className="text-4xl max-lg:text-3xl font-medium mb-4 text-[#221F49] leading-snug">
            {blog.title}
          </h1>
          <p className=" text-2xl max-lg:text-xl font-normal  text-[#53525e] leading-snug">{blog.subtitle}</p>
          <p>Author: <i>{blog.author}</i></p>
        </div>
      </div>

      <div className="text-lg leading-relaxed mt-10 lg:w-[80%] blog-content"    dangerouslySetInnerHTML={{
      __html: (blog.content || "")
    }}>
      
      </div>

    
    </div>
    </>
   
  );
};

export default BlogDetails;
