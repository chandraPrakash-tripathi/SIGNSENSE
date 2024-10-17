import React from 'react'

import NotFoundImg from "../../assests/404.svg"

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100 p-8'>
        <div className="mb-8">
            <img src={NotFoundImg} alt="not-found" className="w-[450px] h-[450px] sm:w-[300px] sm:h-[300px] object-contain"/>
        </div>

        <div className="text-center">
            <p className='text-[24px] text-gray-700 font-bold mb-6 sm:text-[18px]'>This Page Doesn't exists. Please Click on below button to go back to SLR</p>
            
            <button className='bg-blue-600 text-white font-semibold text-[18px] py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300'>
                <a href="/">
                    Go Back
                </a>
            </button>
        </div>
    </div>
  )
}

export default NotFound