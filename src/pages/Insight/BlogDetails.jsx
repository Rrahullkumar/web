import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import { FaArrowLeft } from "react-icons/fa";
import Skeleton from "./Skeleton";
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
  const currentIndex = blogs.findIndex((b) => {
    const blogSlug = b.slug || "untitled-blog";
    return blogSlug === slug;
  });

  const blog = blogs[currentIndex];

  // 🔹 Show skeleton while loading
  if (loading) {
    return (
      <div className="container mt-10 mx-auto px-10 max-lg:px-4 pb-24">
        {/* Back Button Skeleton */}
        <Skeleton className="w-32 h-10 mb-4" />

        <div className="flex flex-row max-lg:flex-col gap-10">
          {/* Image Skeleton */}
          <div className="lg:w-1/2">
            <Skeleton className="w-full h-80 rounded" />
          </div>
          
          {/* Content Skeleton */}
          <div className="flex flex-col justify-center gap-7 lg:w-1/2">
            {/* Title Skeleton */}
            <Skeleton className="w-full h-12" />
            <Skeleton className="w-4/5 h-10" />
            
            {/* Subtitle Skeleton */}
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-3/4 h-6" />
            
            {/* Author and Date Skeleton */}
            <div className="flex items-center gap-4">
              <Skeleton className="w-32 h-6" />
              <Skeleton className="w-28 h-6" />
            </div>
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="mt-10 lg:w-[80%] space-y-4">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-4/5 h-6" />
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-3/4 h-6" />
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-5/6 h-6" />
          <Skeleton className="w-full h-6" />
        </div>
      </div>
    );
  }

  // 🔹 Show error if blog not found
  if (!blog) {
    return (
      <div className="container mt-10 mx-auto px-10 max-lg:px-4 pb-24">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 text-[#277A2D] hover:bg-[#277A2D] hover:text-white border border-[#4CAF50] rounded-md transition-colors duration-300 cursor-pointer flex items-center gap-2 mb-4"
        >
          <span><FaArrowLeft /></span> <span>Back</span>
        </button>
        
        <div className="text-center text-red-500 mt-20">
          <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
          <p className="text-lg mb-2">Sorry, we couldn't find the blog post you're looking for.</p>
          <p className="text-sm text-gray-500 mt-2">Slug: "{slug}"</p>
          <p className="text-xs text-gray-400 mt-1">
            Available slugs: {blogs.map(b => b.slug || 'no-slug').join(', ')}
          </p>
        </div>
      </div>
    );
  }
    
  return (
    <>
      {blog && (
        <Helmet>
          <title>{blog.metaTitle?.trim() || blog.title?.trim()}</title>
          <meta
            name="description"
            content={blog.metaDescription?.trim() || blog.subtitle?.trim()}
          />
          {Array.isArray(blog.keywords) && blog.keywords.length > 0 && (
            <meta name="keywords" content={blog.keywords.join(", ")} />
          )}
          <meta property="og:title" content={blog.ogTitle?.trim() || blog.title?.trim()} />
          <meta
            property="og:description"
            content={blog.ogDescription?.trim() || blog.metaDescription?.trim()}
          />
          <meta property="og:image" content={blog.imageUrl} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={window.location.href} />
          <meta name="author" content={blog.author?.trim()} />
        </Helmet>
      )}
      
      <div className="container mt-10 mx-auto px-10 max-lg:px-4 pb-24">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 text-[#277A2D] hover:bg-[#277A2D] hover:text-white border border-[#4CAF50] rounded-md transition-colors duration-300 cursor-pointer flex items-center gap-2 mb-4"
        >
          <span><FaArrowLeft /></span> <span>Back</span>
        </button>

        <div className="flex flex-row max-lg:flex-col gap-10">
          <div className="lg:w-1/2">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-auto object-contain rounded"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center gap-7 lg:w-1/2">
            <h1 className="text-4xl max-lg:text-3xl font-medium mb-4 text-[#221F49] leading-snug">
              {blog.title}
            </h1>
            <p className="text-2xl max-lg:text-xl font-normal text-[#221F49] leading-snug">
              {blog.subtitle}
            </p>
            <div className="flex items-center gap-4">
              <p className="text-[#221F49] font-bold">Author: <i>{blog.author}</i></p>
              <p className="font-bold text-[#221F49]">
                {new Date(blog.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        <div 
          className="text-lg leading-relaxed mt-10 lg:w-[100%] blog-content"
          dangerouslySetInnerHTML={{
            __html: (blog.content || "")
          }}
        >
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
