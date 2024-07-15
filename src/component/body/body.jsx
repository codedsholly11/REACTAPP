import React, { useState } from 'react'
import './body.css'
import brand from '../image/brand.svg'
import detailed from '../image/detailed.svg'
import fully from '../image/fully.svg'

const Body = () => {
    const [url, setUrl] = useState(null)
    const [input, setInput] = useState("")
    const [isClick, setIsclick] = useState(false)

    async function fetchApi(e) {
            e.preventDefault();

            if(!input){
                return alert("pls enter url");
            }

    try {
        setIsclick(true)
            const baseurl = "https://shorturl-ovln.onrender.com/api/v1/shorturl"
            const response= await fetch (baseurl, {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ url:input })
                })
            .then((res)=>res.json())
            const returnData = await response.shorturl;
            console.log(returnData)
            setUrl(returnData)
            if(returnData){
                setIsclick(false)
            }
    
    
    } catch (error) {
        console.log(error)
        setIsclick(false)
    }
}


  return (
    <div className='flex flex-col overflow-hidden bg-cyan-100 gap-[50px] py-[50px] justify-center items-center pb-[200px] mt-[30px] '>
            <div className='w-[100%] md:w-[70%] flex justify-center items-center md:mt-[80px] relative pt-[50px] '>
                <form className='pix bg-no-repeat w-[90%] md:flex-row flex flex-col justify-center items-center gap-[20px] py-[30px] px-[20px] object-top'>
                    <input type="text" placeholder='shorten a link here' 
                    className='w-[90%] py-[10px] px-3 rounded-md' value={input} onChange={(e)=>setInput(e.target.value)} />
                    <button className='py-[10px] md:w-[20%] w-[90%] bg-cyan-400 rounded-md' onClick={fetchApi}>{isClick ? "pls wait ..." : "Shorten it"}</button>
                </form>
            </div>
            {/* <div className='md:hidden flex justify-center items-center gap-7 w-[100%] flex-col'>
                
            </div> */}
            <p className='md:text-5xl text-2xl text-red-500'><a href={url} target='_blank'>{url}</a></p>
           
            <div className='flex flex-col bg-cyan-100 '>
                <div className='flex flex-col items-center justify-center text-center  '>
                    <h2 className='font-bold text-3xl '>Advanced Statistics</h2>
                    <p className='text-[19px] items-center md:text-[15px] md:w-[30vw]  py-[30px] px-[5px]' >Track how your links are performing across the web with our Advanced Statistics dashboard.</p>
                </div>
                <div className='w-[100%] flex flex-col gap-[40px] items-center justify-center  md:flex-row md:items-center md:justify-center '>
                    <div className='flex flex-col justify-center item-center gap-[20px] bg-white rounded-lg px-[15px] py-[19px] w-[90vw] md:w-[25vw]  '>
                        <div className='w-[100%] flex justify-center md:items-start md:justify-start items-center md:bottom-0 relative bottom-[50px]'>
                            <img className='w-[15vw] md:w-[4vw] bg-slate-900 rounded-full md:relative bottom-[50px]' src={brand} alt="" />
                        </div>
                        <h2 className='font-bold text-xl md:px-[15px] md:text-start text-center'>Brand Recognition</h2>
                        <p className='text-[19px]item-center md:text-[15px] md:w-[23vw] md:items-start  py-[30px] px-[15px]'>Boost your brand recognition with each click. generic link dont mean a thing. branded link helps instil confidence in your content.</p>
                    </div>
                    <div className='flex flex-col justify-center  md:items-start items-center gap-[20px] bg-white rounded-lg px-[15px] py-[19px] w-[90vw] md:w-[25vw] relative top-[50px]'>
                        <div className='w-[100%] flex justify-center md:items-start md:justify-start items-center md:bottom-0 relative bottom-[50px]'>
                            <img className='w-[15vw] md:w-[4vw] bg-slate-900 rounded-full md:relative bottom-[50px]' src={detailed} alt="" />
                        </div>
                        <h2 className='font-bold text-xl md:px-[15px]'>Detailed Records</h2>
                        <p className='text-[19px] items-center md:text-[15px] md:w-[23vw] md:items-start  py-[30px] px-[15px]'>Gain insights into who is click your link. knowing when and where people engage with your contents helps inform better decissions</p>
                    </div>
                    <div className='flex flex-col md:items-start md:justify-start justify-center items-center gap-[20px] bg-white rounded-lg px-[15px] py-[19px] w-[90vw] md:w-[25vw] relative top-[100px] '>
                       <div className='w-[100%] flex justify-center md:items-start md:justify-start items-center md:bottom-0 relative bottom-[50px]'>
                            <img className='w-[15vw] md:w-[4vw] bg-slate-900 rounded-full md:relative bottom-[50px] ' src={fully} alt="" />
                       </div>
                        <h2 className='font-bold text-xl md:px-[15px]'>Fully Customizable</h2>
                        <p className='text-[19px] items-center md:text-[15px] md:w-[23vw] md:items-start  py-[30px] px-[15px]'>improves brand awarnes and content discoverability through customizable links. superchaging uadience engagement. </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Body
