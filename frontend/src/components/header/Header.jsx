import React from "react";

import SignHand from "../../assests/SignHand.png";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8 m-8 bg-gradient-to-r from-blue-400 to-teal-500 rounded-lg shadow-lg">
      <div className="flex-1 mb-8 md:mb-0 md:mr-16 text-white animate-fade-in">
        <h1 className="text-[54px] font-extrabold mb-4 leading-tight tracking-wide md:text-[48px] lg:text-[64px]">
          SIGNSENSE
        </h1>
        <p>
        In India, approximately 30 million individuals face the challenges of deafness and speech impairments, 
          navigating a world designed for the hearing. Our web application aims to bridge this gap by providing 
          innovative tools and resources, fostering greater inclusion and accessibility for the deaf and speech-impaired community.
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center animate-bounce">
        <img src={SignHand} alt="SIGN-HAND"
        className="w-[400px] h-[400px] object-contain transform hover:scale-105 transition duration-300 ease-in-out" />
      </div>
    </div>
  );
};

export default Header;
