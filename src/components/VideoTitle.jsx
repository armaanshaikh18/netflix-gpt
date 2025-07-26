import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl font-sans">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="w-1/3">
        <button className="bg-white text-black p-4 m-2 rounded-xl text-lg cursor-pointer hover:opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-4 m-2 rounded-xl text-lg cursor-pointer hover:bg-gray-400">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
