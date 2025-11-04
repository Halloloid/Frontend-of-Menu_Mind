import React from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const VideoGrid = ({ videos }) => {
  return (
       <div
      className="flex flex-wrap justify-center mt-1.5 gap-8 p-8 rounded-t-full shadow-2xl"
      style={{
        background: "linear-gradient(180deg, #0a0a0a, #1a1a1a)",
        minHeight: "100vh",
      }}
    >
        <h2 className="w-full text-white text-shadow-2xs text-shadow-zinc-950 text-2xl md:text-4xl font-bold  text-center ">
        Video Recipes
      </h2>
      {videos.slice(0, 5).map((video, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.015 }}
          whileHover={{ scale: 1.05 }}
          className="w-[340px]  rounded-2xl overflow-hidden shadow-2xl bg-[#111] border border-gray-700 hover:border-gray-500 hover:shadow-[#ff4500]/40 transition-all duration-300"
        >
          <div className="relative w-full aspect-video">
            <iframe
              src={video.embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
            ></iframe>
          </div>

          <div className="p-4">
            <h3 className="text-white text-lg font-semibold truncate">
              {video.title}
            </h3>
            <p className="text-gray-400 text-sm">{video.channel}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default VideoGrid;
