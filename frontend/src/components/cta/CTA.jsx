import React from 'react'

import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <div className='flex justify-between items-center p-8 m-16 rounded-2xl bg-black'>
            <div className="font-serif text-[24px] leading-[45px] font-extrabold text-white">
                <h3>
                    Get Started and Try the Model
                </h3>
            </div>

            <div className="bg-black text-white font-bold text-[18px] py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300">
                <button>
                    <Link to="/detect">
                      Try Now !
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default CTA
