import React from 'react'

function Cv() {
  return (
    <div className='p-6  flex justify-center items-center'>
      <a href="./hayanCV.pdf" download="hayanCV" target='_blank'>
        <button className='text-black glassmorphism p-2 rounded-full'>Download CV</button>
      </a>
    </div>
  )
}

export default Cv