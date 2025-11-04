import React from "react";
import { motion } from "framer-motion";

const BlogCarousel = ({ blog }) => {
  return (
    <div
      className="w-full py-12 px-8"
      style={{
        background: "linear-gradient(180deg, #1a1a1a, #0a0a0a)",
        minHeight: "100vh",
      }}
    >
      <h2 className="text-white text-4xl font-bold mb-10 text-center">
        Blogs Recipes
      </h2>

      <div className=" flex flex-col gap-10">
        {blog.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.015 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => window.open(post.link, "_blank")}
            className="cursor-pointer flex flex-col md:flex-row items-center bg-[#111] border border-gray-700 hover:border-gray-500 hover:shadow-[0_0_25px_#ff4500aa] rounded-2xl overflow-hidden transition-all duration-300"
          >
            {/* Blog Image (Left) */}
            <div className="w-full md:w-2/5 h-64 overflow-hidden relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Blog Text (Right) */}
            <div className="w-full md:w-3/5 p-6 md:p-8">
              <h3 className="text-white text-2xl font-semibold mb-3">
                {post.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {post.snippet}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogCarousel;
