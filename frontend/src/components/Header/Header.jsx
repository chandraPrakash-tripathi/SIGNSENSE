import React from 'react'
import SignHand from "../../assets/SignHand.png";


const Header = () => {
  return (
    <div className='main_container'>
      <div className='card1_details'>
        <h1>SIGNSENSE</h1>
        <p>In India, approximately 30 million individuals face the challenges of deafness and speech impairments, 
            navigating a world designed for the hearing. Our web application aims to bridge this gap by providing innovative tools and resources, 
            fostering greater inclusion and accessibility for the deaf and speech-impaired community.</p>
      </div>
      <div className='card2_pic'>
        <img src = {SignHand} alt='SIGN-HAND'/>
      </div>
    </div>
  )
}

export default Header
