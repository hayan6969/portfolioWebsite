// src/App.js
import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Cv from './components/Cv';
import Tech from './components/Tech';
import Project from './components/Project';


function App() {
  return (
    <section className=' bg-white flex flex-col '>
             <section className='flex justify-center'
             > <Hero/> 
               
             </section>
             <Cv/>
             <Tech/>
             <Project/>
              
              <Nav/>
              


     </section>
    
  )
}

export default App;
