import React from 'react'


const ProgressBar = ({progress}) => {
  return (
    <div className="w-full bg-red-700 rounded-lg overflow-hidden">
      <div
        className="h-[20px] bg-orange-500 rounded-lg text-white font-extrabold transition-all duration-500 ease-in-out"
        
        style={{ width: `${progress}%` }}
      >{progress}%</div>
    </div>
  )
}

export default ProgressBar