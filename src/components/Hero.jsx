import React from 'react'
import pic from '../assets/images'

function Hero() {
  return (
    
    <div id='home' className='w-[1200px] mt-[20px] h-auto flex justify-evenly max-sm:flex-col  max-sm:items-center max-sm:justify-end  '>
        <div className='  flex justify-center items-center h-auto '>
            <h1 className='text-[#42446E] font-bold max-sm:text-[25px] max-sm:text-center text-[40px] '>
            Yo! 👋, <br />
            it's <span className='text'>Hayan!</span> <br /> I sculpt <br /> web wonders <br /> that leave jaws dropped 
            </h1>
        </div>
        <div className='   h-auto flex justify-center items-center '>
            <div className=' justify-center mt-2 w-[320px] h-[320px] max-sm:w-[200px] max-lg:h-[200px] max-sm:mt-2 rounded-full'>
                <img className='object-contain' src={pic}  alt="" />
            </div>
        </div>
    </div>
   
  )
}

export default Hero