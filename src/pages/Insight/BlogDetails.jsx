import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import { FaArrowLeft } from "react-icons/fa";
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
        // console.log("BlogDetails - API Response:", response.data); // Debug log
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // 🔹 UPDATED: Find the blog that matches the slug (same logic as Insights.jsx)
  const currentIndex = blogs.findIndex((b) => {
    const blogSlug = b.slug || "untitled-blog";
    // console.log(`Comparing URL slug "${slug}" with blog slug "${blogSlug}" for: "${b.title}"`); // Debug log
    return blogSlug === slug;
  });

  const blog = blogs[currentIndex];

  // console.log("Found blog:", blog); // Debug log

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (!blog) {6
    return (
      <div className="text-center text-red-500 mt-10">
        <p>Blog post not found</p>
        <p className="text-sm text-gray-500 mt-2">Looking for slug: "{slug}"</p>
        <p className="text-xs text-gray-400 mt-1">Available slugs: {blogs.map(b => b.slug || 'no-slug').join(', ')}</p>
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
          className="text-lg leading-relaxed mt-10 lg:w-[80%] blog-content"
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
