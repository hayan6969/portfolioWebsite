import React from "react";
import {git,github,css,html,javascript,react,tailwind} from '../assets/images'

function Tech() {
  return (
    <div id="tech" className="flex justify-center">
      <div className="w-[1200px] bg-white h-auto">
        <div className="flex justify-center  text-[35px] p-4 font-bold text1">
          <h1>My Tech Stack</h1>
        </div>
        <div className="flex justify-evenly flex-wrap pb-[25px] ">
          <div className="bg-white rounded-3xl mt-4 mx-1  shadow-2xl">
            
            <img src={html} width={120} height={300} alt="" />
          </div>
          <div className="bg-white rounded-3xl mt-4 mx-1  shadow-2xl">
            
            <img src={css} width={120} height={300} alt="" />
          </div>
          <div className="bg-white rounded-3xl mt-4 mx-1  shadow-2xl">
            
            <img src={tailwind} width={120} height={300} alt="" />
          </div>
          <div className="bg-white rounded-3xl mt-4 mx-1  shadow-2xl">
            
            <img src={javascript} width={120} height={300} alt="" />
          </div>
          <div className="bg-white rounded-3xl mt-4 mx-1  shadow-2xl">
            
            <img src={react} width={120} height={300} alt="" />
          </div>
          <div className="bg-white rounded-3xl mt-4 mx-1  shadow-2xl">
            
            <img src={git} width={120} height={300} alt="" />
          </div>
          <div className="bg-white rounded-3xl mt-4 mx-1  shadow-2xl">
            
            <img src={github} width={120} height={300} alt="" />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Tech;
