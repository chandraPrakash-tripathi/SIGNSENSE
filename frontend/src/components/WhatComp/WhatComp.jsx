import React from "react";
import { Feature } from "../../components";
import { WhatfeatureData } from "../../data/FeaturesData";

const WhatComp = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-900 to-black min-h-screen text-white flex flex-col items-center">
      <div className="mb-10 max-w-2xl text-center">
        <h2 className="text-2xl font-bold mb-4">What is Sign Language?</h2>
        <p className="text-gray-300 leading-relaxed">
          Sign Language is a form of visual communication that involves hand gestures, facial expressions, and body movements.
          It is officially recognized in many countries and is predominantly used by individuals who are deaf or have hearing impairments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {WhatfeatureData.map((data, i) => (
          <div
            key={i}
            className="p-6 bg-gray-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700"
            
          >
            <Feature title={data.title} text={data.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatComp;
