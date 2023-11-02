import React from 'react'
import { useState } from "react";

function Nav() {
  
    const Menus = [
        { name: "Home", icon: "home-outline", dis: "translate-x-0" ,href:'#home' },
        { name: "Skills", icon: "code-slash-outline", dis: "translate-x-16 max-sm:translate-x-[59px]",href:'#tech' },
        { name: "Projects", icon: "folder-open-outline", dis: "translate-x-32 max-sm:translate-x-[122px]",href:'#project' },
        { name: "Github", icon: "logo-github", dis: "translate-x-48 max-sm:translate-x-[185px]",href:'https://github.com/hayan6969',target:'_blank' },
        { name: "Linkedin", icon: "logo-linkedin", dis: "translate-x-64 max-sm:translate-x-[246px]",href:'https://www.linkedin.com/in/hayan-khan-9b154826a/',target:'_blank' },
      ];
      const [active, setActive] = useState(0);
      return (
        <div className='flex justify-evenly w-full  mb-2  fixed bottom-0 z-10 '>
          <div className="glassmorphism  w-[400px] max-sm:w-[360px]   max-h-[4.4rem] px-6 font-medium rounded-full sticky bottom-0 ">
          <ul className="flex relative left-4 max-sm:left-0 ">
            <span
              className={`bg-white  duration-500 ${Menus[active].dis} border-2 border-purple-400   h-16 w-16 absolute
             -top-5 rounded-full`}
            >
              <span
                className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
              rounded-tr-[11px] shadow-myShadow1"
              ></span>
              <span
                className="w-3.5 h-3.5  bg-transparent absolute top-4 -right-[18px] 
              rounded-tl-[11px] shadow-myShadow2"
              ></span>
            </span>
            {Menus.map((menu, i) => (
              <li key={i} className="w-16 ">
                <a
                href={menu.href}
                target={menu.target}
                  className="flex flex-col text-center pt-6"
                  onClick={() => setActive(i)}
                >
                  <span
                    className={`text-xl  cursor-pointer  duration-500 ${
                      i === active && "-mt-6 text-black"
                    }`}
                  >
                    <ion-icon name={menu.icon}></ion-icon>
                  </span>
                  <span
                    className={` ${ 
                      active === i
                        ? "translate-y-4 duration-700 opacity-100"
                        : "opacity-0 translate-y-10"
                    }  `}
                  >
                    {menu.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        </div>
      );
     
}

export default Nav