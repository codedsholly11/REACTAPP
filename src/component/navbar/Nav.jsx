import React, { useState } from 'react'
import logo from '../image/logo.svg'
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Nav = () => {
  const [menu, setMenu] = useState(false)
  function handleToggle(){
    setMenu (!menu)
  }
  return (
    <div>
            <div className='flex items-center justify-between px-[60px] h-20 '>
                <div className='flex gap-[40px] '>
                    <img className='font-bold animate-my-ping' src={logo} alt="" />
                    <div className='hidden gap-[30px] text-[20px] md:flex '>
                        <p className=' text-gray-500 cursor-pointer hover:text-black font-semibold'>Features</p>
                        <p className='text-gray-500 cursor-pointer hover:text-black font-semibold ' >Pricing</p>
                        <p className='text-gray-500 cursor-pointer hover:text-black font-semibold'>Resources</p>
                    </div>
                </div>
                <div className=' gap-[30px] text-[20px] hidden md:flex'>
                    <p className='text-gray-500 cursor-pointer hover:text-black font-semibold '>Login</p>
                    <button className='bg-cyan-400 rounded-full w-[120px] h-[35px] text-white hover:bg-cyan-700'>Sign up</button>
                </div>
                <div className='md:hidden text-3xl'onClick={handleToggle}>
                  {menu?<IoCloseSharp />:<IoMdMenu />}
                </div>
            </div>
            {
              <div className={`gap-[6px] text-[25px] right-0 absolute ${menu ? 'top-14': '-top-full'} py-[20px] bg-gray-100 w-full h-[35vh] flex flex-col justify-center items-center rounded-b-xl text-center  transition-all duration-1000 ease-out hover:ease-in `}>
                  <p className=' text-gray-500 cursor-pointer hover:text-black font-semibold'>Features</p>
                  <p className='text-gray-500 cursor-pointer hover:text-black font-semibold ' >Pricing</p>
                  <p className='text-gray-500 cursor-pointer hover:text-black font-semibold'>Resources</p>
              </div>
            }
    </div>
   
  )
}

export default Nav
