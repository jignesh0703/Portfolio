import React, { useEffect, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa'

const   Main = ({ seticons , setsaw_about }) => {

  const [mount, setmount] = useState(false)

  useEffect(()=>{

    setmount(true);
  },[]);

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        <div className={`mb-[10rem] text-center transition-opacity duration-300 ${mount? 'animate-slide-up':''}`}>
          <div>
            <p className='text-[1.2rem] text-[#555555] font-bold'>Hello, I'm</p>
            <h1 className='text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-extrabold'>Jignesh Makvana</h1>
            <h1 className='text-[#555555] md:text-[1.5rem] lg:text-[2rem] font-bold'>Frontend Developer</h1>
          </div>
          <div className='mt-4 flex gap-3 justify-center'>
            <button className='px-6 py-3 border-black border rounded-full text-[0.8rem] font-bold transition duration-300 hover:bg-[#353535] hover:text-white' onClick={() => setsaw_about(true)}>About me</button>
            <button className='px-6 py-3 rounded-full text-[0.8rem] font-bold transition duration-300 bg-[#353535] text-white hover:bg-[#111111]' onClick={()=>alert("Sorry this time i don't uploaded CV!")}>Download CV</button>
          </div>
        </div>
        <div className='absolute top-0 right-0 flex h-screen items-center text-center'>
          <div className='flex pr-2 py-4 cursor-pointer'>
            <div className='flex items-center text-[2rem] text-[#353535]' onClick={() => seticons(true)}>
              <FaAngleLeft />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main