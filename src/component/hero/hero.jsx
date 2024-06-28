import React from 'react'
import photo from '../image/photo.svg'
const Hero = () => {
  return (
    <div className='flex flex-col-reverse py-10 gap-[50px] md:flex-row '>
        <div className='w-[100%] flex flex-col gap-[30px] px-[60px] justify-center items-center md:justify-start md:items-start'>
            <h1 className='text-[35px] text-center md:text-left font-bold md:text-[60px] md:'>more than just shorter link.</h1>
            <p className='text-[16px] md:text-left md:text-[22px] text-center w-[100%]'>build your brand's recognition and get detailed insights on how your links are performing</p>
            <button className='w-[155px] h-[35px] text-white hover:bg-cyan-700 bg-cyan-400 rounded-full'>Get started</button>
        </div>
        <div className='w-[100%] flex justify-center items-center'>
            <img className='w-[80vw]' src={photo} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
