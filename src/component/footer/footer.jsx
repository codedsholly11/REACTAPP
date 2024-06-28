import React from 'react'
import facebook from '../image/facebook.svg';
import instagram from '../image/instagram.svg';
import pinterest from '../image/pinterest.svg';
import twitter from '../image/twitter.svg';
const footer = () => {
  return (
    <div>
        <div className='bg-gray-900 text-white items-center flex flex-col justify-around py-7 md:flex-row md:items-start'>
            <div>
                <h2 className='text-4xl font-bold'>Shortly</h2>
            </div>
            <div className='flex flex-col items-center gap-[50px] py-[20px] md:flex-row md:items-start'>
                <div className='flex flex-col gap-[10px]'>
                    <h4 className='font-semibold text-xl'>Features</h4>
                    <p className='text-sm text-gray-400'>Link Shortening</p>
                    <p className='text-sm text-gray-400'>Branded Links</p>
                    <p className='text-sm text-gray-400'>Analytics</p>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <h4 className='font-semibold text-xl'>Resources</h4>
                    <p className='text-sm text-gray-400'>Blogs</p>
                    <p className='text-sm text-gray-400'>Developers</p>
                    <p className='text-sm text-gray-400'>Support</p>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <h4 className='font-semibold text-xl'>company</h4>
                    <p className='text-sm text-gray-400'>About</p>
                    <p className='text-sm text-gray-400'>Our Team</p>
                    <p className='text-sm text-gray-400'>Careers</p>
                    <p className='text-sm text-gray-400'>Contact</p>
                </div>
            </div>
            <div className='flex gap-[15px] h-7'>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={pinterest} alt="" />
                <img src={twitter} alt="" />
            </div>
        </div>
    </div>
  )
}

export default footer
