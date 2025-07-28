import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "./Insight"; // ✅ Ensure blogs is exported from Insight.jsx

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // ✅ Find current blog and its index
  const currentIndex = blogs.findIndex(
    (b) => b.heading.replace(/\s+/g, "-").toLowerCase() === slug
  );
  const blog = blogs[currentIndex];

  if (!blog) {
    return <p className="text-center text-red-500 mt-10">Blog not found.</p>;
  }

  // ✅ Get previous and next blog if they exist
  const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  return (
    <div className="container mt-10 mx-auto px-10 max-lg:px-4 pb-24">
      {/* 🔹 Back Button */}
      <button onClick={() => navigate(-1)} className="text-blue-600 underline mb-4">
        ← Back
      </button>

      {/* 🔹 Blog Details */}
      <div className="flex flex-row max-lg:flex-col gap-10">
        <div className="lg:w-1/2">
          <img src={blog.image} alt={blog.heading} className="w-full h-80 object-cover rounded" />
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-gray-500 mb-2">{blog.date}</p>
          <h1 className="text-6xl max-lg:text-3xl font-medium mb-4 text-[#221F49] leading-snug">{blog.heading}</h1>
          <p>Author: <i>{blog.author}</i></p>
        </div>
      </div>

      <p className="text-lg leading-relaxed mt-10 lg:w-[80%]">{blog.information}</p>

      {/* 🔹 Navigation Buttons */}
      <div className="flex justify-between mt-10 w-[80%]">
        {prevBlog && (
          <button
            onClick={() => navigate(`/blog/${prevBlog.heading.replace(/\s+/g, "-").toLowerCase()}`)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            ← Previous: {prevBlog.heading}
          </button>
        )}
        {nextBlog && (
          <button
            onClick={() => navigate(`/blog/${nextBlog.heading.replace(/\s+/g, "-").toLowerCase()}`)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 ml-auto"
          >
            Next: {nextBlog.heading} →
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
