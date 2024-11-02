import React from "react";


const Feature = ({ title, text }) => {
  return (
    <div className="w-full flex justify-between items-start flex-row my-4">
      <div className="flex-1 max-w-md mr-8">
        <div />
        <h1 className="text-yellow-500 font-bold text-lg leading-6 tracking-wide text-white">{title}</h1>
      </div>
      <div className="w-full h-full bg-gradient-to-r from-indigo-500 to-purple-700 shadow-md mb-1 rounded-md ">
        <p className="p-4 font-medium text-base leading-6 tracking-wide text-gray-200">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
