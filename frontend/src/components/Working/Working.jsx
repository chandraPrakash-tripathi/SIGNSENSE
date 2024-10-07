import React from 'react'

const Working = () => {
  return (
    <div className='main'>
      <div className='image'>
        <img src={Working} alt="working"/>
      </div>
      <div className='Details'>
        <h1>Wanna Know ,HOw it Works!!</h1>
        <p>To operate the sign language recognition system, first ensure your hand is detected by the system. 
            Then, form a sign with your hand. You can consult the provided guide to understand which signs correspond to different words. 
            The system will analyze your hand using its integrated model to determine the sign you've formed. 
            The predicted sign will be displayed, facilitating communication between sign language users and those who do not use sign language.
            This system enhances connectivity and interaction, making communication more inclusive for everyone.</p>
      </div>
    </div>
  )
}

export default Working
