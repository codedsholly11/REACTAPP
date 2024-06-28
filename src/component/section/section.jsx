import React from 'react'
import './section.css'

const section = () => {
  return (
    <div>
      <div className=''>
        <div  className='boost bg-no-repeat w-[100%] h-[25vh] flex flex-col items-center justify-center gap-[20px] '>
          <h2 className='text-white text-2xl font-semibold md:text-4xl md:font-semibold  '>Boost your links today</h2>
          <button className='py-[10px] px-[20px] item-center rounded-full w-[140px] h-[35px] text-white hover:bg-cyan-700 bg-cyan-400 '>Get Started</button>
        </div>

      </div>
    </div>
  )
}

export default section
