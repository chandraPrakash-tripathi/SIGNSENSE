import React from 'react'

const Feature = ({title,text}) => {
  return (
    <div className='feature_main'>
      <div className='title_card'>
        <h1>{title}</h1>
      </div>
      <div className='text_card'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature
