import React from "react";

import Loader from "../../assests/Spinner.svg"

const Spinner = () => {

  return (
    <div className="flex justify-center items-center">
       <img src={Loader} alt="loader"/>
    </div>
  );
};

export default Spinner;
