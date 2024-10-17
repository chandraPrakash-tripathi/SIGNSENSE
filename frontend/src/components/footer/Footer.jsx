import React from "react";

import logo from '../../assests/logo.jpg'

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-cyan-600 md:flex-row flex-col p-8 md:p-0 border-t-4 text-white text-center fixed inset-x-0 bottom-0">
      <div className="flex-1 justify-start items-center">
        <img src={logo} alt="signlang_logo" className="w-[65px] h-[65px] rounded-full outline-dotted"/>
      </div>

      <div className="mt-4 md:mt-0">
        <h3 className="text-white text-[15px] text-center">
          &#169; &nbsp;2023 &nbsp;&nbsp;
          <span className="text-black">SLR</span>
          &nbsp;&nbsp; All rights reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
