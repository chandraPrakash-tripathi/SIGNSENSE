import React from "react";

import { featuresData } from "../../data/FeaturesData";
import Feature from "./feature/Feature";

const Features = () => {
  return (
    <div className=" w-full flex flex-wrap md:flex-nowrap justify-between items-start bg-gradient-to-b from-gray-100 via-white to-gray-50 p-8 rounded-lg shadow-md overflow-visible">
      <div className="flex-1 flex flex-col items-start text-left mr-16 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl leading-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 tracking-wide shadow-md">
          Revolutionizing Sign Language</h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">Explore the amazing features designed to bridge the communication gap.</p>
      </div>

      <div className="singlang_features-container">
        {featuresData.map((data, i) => (
          <Feature title={data.title} text={data.text} key={i * 124569} />
        ))}
      </div>
    </div>
  );
};

export default Features;
