import React from 'react'
import NotFoundImg from '../../assets/404.svg'

const NotFound = () => {
  return (
    <div>
      <div>
        <img src={NotFoundImg} alt='not-found'/>
      </div>
      <div>
        <p>THIS PAGE DOESN'T EXISTS. PLEASE CLICK ON BELOW BUTTON TO GO BACK</p>
        <button>
            <a href='/'>GO BACK</a>
        </button>
      </div>
    </div>
  )
}

export default NotFound
