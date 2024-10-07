import React from 'react'
import { WhatfeatureData } from '../../data/FeaturesData'

const WhatSlr = () => {
  return (
    <div>
      <div className='static_part'>
        <Feature title ="What is Sign Language" text="Sign Language is a form of visual communication that involves hand gestures, facial expressions, and body movements.
         It is officially recognized in many countries and is predominantly used by individuals who are deaf or have hearing impairments."/>
      </div>
      <div className='dynamic_arr_obj'>
        {
            WhatfeatureData.map((data,i)=>(
                <Feature title={data.title} text={data.text} key={i*203}/>
            ))
        }
      </div>
    </div>
  )
}

export default WhatSlr
