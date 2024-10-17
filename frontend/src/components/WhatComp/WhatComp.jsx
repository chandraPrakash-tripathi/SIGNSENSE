import React from "react";

import { Feature } from "../../components";
import { WhatfeatureData } from "../../data/FeaturesData";

const WhatComp = () => {
  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <div className="mb-8">
        <Feature
          title="What is Sign Language?"
          text="Sign Language is a form of visual communication that involves hand gestures, facial expressions, and body movements. 
          It is officially recognized in many countries and is predominantly used by individuals who are deaf or have hearing impairments."/>
      </div>

      <div className="dynamic_arr_obj grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          WhatfeatureData.map((data,i)=>(
            <Feature title={data.title} text={data.text} key={i*201}/>
          ))
        }
        
      </div>
    </div>
  );
};

export default WhatComp;
