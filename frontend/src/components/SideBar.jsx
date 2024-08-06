import React from 'react'
import {Link} from 'react-router-dom'

const SideBar = () => {
  return (
    <aside className='w-64 h-screen bg-gray-800 text-white flex flex-col'>
      <div className='p-6'>
      <h2 className="text-2xl font-bold">Welcome To SignSense</h2>
      </div>
      <nav className='flex-1 p-6'>
        <ul className='space-y-10'>
          <li className='hover:bg-gray-700 rounded'><a to="/your-profile">Your Profile</a></li>
          <li className='hover:bg-gray-700 rounded'><a to="/learn-alphabets">Learn Alphabets</a></li>
          <li className='hover:bg-gray-700 rounded'><a to="/learn-words">Learn Words</a></li>
          <li className='hover:bg-gray-700 rounded'><a to="/practice-zone">Practice Zone</a></li>
          <li className='hover:bg-gray-700 rounded'><a to="/quiz-time">Quiz Time</a></li>
          <li className='hover:bg-gray-700 rounded'><a to="/Prediction">Prediction</a></li>
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar
