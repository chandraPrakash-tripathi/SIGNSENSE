import React from 'react'
import Feature from './Feature/Features'
import { featuresData } from '../../data/FeaturesData'

const Features = () => {
  return (
    <div className='main_box'>
      <div className='static_part'>
        <h1>Revolutionizing Sign Language</h1>
        <p>Explore the Features</p>
      </div>
      <div className='dynamic_part'>
        {featuresData.map((data,i)=>(
            <Feature title={data.title} text={data.text} key={i*12456} />
        ))}
      </div>
    </div>
  )
}

export default Features
