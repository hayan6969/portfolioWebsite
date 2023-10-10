import React from 'react'
import {nike,emily} from '../assets/images'

function Project() {
  return (
    <div id='project' className='flex justify-center'>
        <div className='w-[1200px]  '>
        <div className="flex justify-center  text-[35px] pt-[50px] font-bold text1">
          <h1>My Projects</h1>
        </div>

        <div className="flex justify-center  text-[20px] pt-[30px] font-bold text">
          <h1>Check out my crafts</h1>
        </div>
        <div className='flex flex-wrap max-sm:flex-col max-sm:items-center  justify-evenly pt-[50px]'>

        <div class="w-[270px] h-[300px] rounded-3xl overflow-hidden max-sm:mt-5 hover:scale-110 hover:cursor-pointer transition-all ease-in-out duration-200 bg-white shadow-2xl">
  <img class="w-full   object-contain" src={nike} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2  text-center">Nike Store</div>
    <p class="text-gray-700 text-center">
      A simple Nike store built with React having all the E-commerce features
    </p>
  </div>
  <div class="flex justify-center items-center text-lg font-bold border-t border-cyan-300  bg-white">
   <a href="https://hayan6969.github.io/reactNikeLandingPage/" target="_blank " rel='noopener noreferrer'>View</a>
  </div>
</div>
<div class="w-[270px] h-[300px] rounded-3xl overflow-hidden max-sm:mt-5 hover:scale-110 hover:cursor-pointer transition-all ease-in-out duration-200 bg-white shadow-2xl">
  <img class="w-full   object-contain" src={emily} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2  text-center">Portfolio</div>
    <p class="text-gray-700 text-center">
      A multiple pages responsive portfolio built with HTML and CSS only
    </p>
  </div>
  <div class="flex justify-center items-center text-lg font-bold border-t border-cyan-300  bg-white">
   <a href="https://hayan6969.github.io/reactNikeLandingPage/" target="_blank " rel='noopener noreferrer'>View</a>
  </div>
</div>


        </div>
        <div className='h-[100px] mt-10 w-full bg-white'>

</div>
        
        </div>
    </div>
  )
}

export default Project