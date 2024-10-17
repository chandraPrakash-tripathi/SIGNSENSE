import React from "react";

import WorkingImg from "../../assests/Work.png";

const Working = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-100">
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={WorkingImg}
          alt="working"
          className="rounded-lg shadow-lg max-w-xs md:max-w-sm"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl font-bold mb-4 text-indigo-600">
          Wanna Know, How it Works!!
        </h1>
        <p>
          To operate the sign language recognition system, first ensure your
          hand is detected by the system. Then, form a sign with your hand. You
          can consult the provided guide to understand which signs correspond to
          different words. The system will analyze your hand using its
          integrated model to determine the sign you've formed. The predicted
          sign will be displayed, facilitating communication between sign
          language users and those who do not use sign language. This system
          enhances connectivity and interaction, making communication more
          inclusive for everyone.
        </p>
      </div>
    </div>
  );
};

export default Working;
