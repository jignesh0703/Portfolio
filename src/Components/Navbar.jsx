import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {

    const [navbar, setnavbar] = useState(false)

  return (
    <>
        <div className='flex justify-around pt-8 sm:pt-[2rem] lg:pt-[5rem] items-center'>
            <div className='text-[1.5rem] sm:text-[2rem]'>
                <h1 className='md:pr-[10rem] lg:mr-0'>Jignesh Makvana</h1>
            </div>
            <div>
                <div className='pr-10 sm:pr-0'>
                    {
                        navbar ?
                        <IoMdClose className='absolute text-[2rem] cursor-pointer mt-[-1rem] md:pl-[-5rem]' onClick={() => setnavbar(false)}/> :
                        <FaBars className='xl:hidden absolute text-[1.5rem] cursor-pointer mt-[-1rem] md:pl-[-5rem]' onClick={() => setnavbar(true)}/>
                    }
                </div>
                <ul className={`xl:flex xl:gap-8 3xl:gap-10 text-[1.5rem] ${navbar ? 'flex-col absolute mt-8 sm:mt-4 lg:pl-[-5rem] ml-[-6rem] sm:ml-[-5rem]':'hidden'}`}>
                    <a href="#About" className='cursor-pointer transition duration-300 hover:text-[#555555] hover:border-b-2 border-[#555555]'onClick={() => setnavbar(false)}><li>About</li></a>
                    <a href="#Experience" className='cursor-pointer transition duration-300 hover:text-[#555555] hover:border-b-2 border-[#555555]'onClick={() => setnavbar(false)}><li>Experience</li></a>
                    <a href="#project" className='cursor-pointer transition duration-300 hover:text-[#555555] hover:border-b-2 border-[#555555]'onClick={() => setnavbar(false)}><li>Projects</li></a>
                    <a href="#contact" className='cursor-pointer transition duration-300 hover:text-[#555555] hover:border-b-2 border-[#555555]'onClick={() => setnavbar(false)}><li>Contact</li></a>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar

