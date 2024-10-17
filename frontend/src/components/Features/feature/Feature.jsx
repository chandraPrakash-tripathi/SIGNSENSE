import React from "react";


const Feature = ({ title, text }) => {
  return (
    <div className="w-full flex justify-between items-start flex-row my-4">
      <div className="flex-1 max-w-md mr-8">
        <div />
        <h1 className="font-bold text-lg leading-6 tracking-wide text-white">{title}</h1>
      </div>
      <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md mb-1">
        <p className="font-medium text-base leading-6 tracking-wide text-gray-200">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
