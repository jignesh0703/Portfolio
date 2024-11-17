import React from 'react'

const Second_Navbar = () => {
    return (
        <>
            <div className='w-full h-[20vh]'>
                <div>
                    <ul className='flex justify-center gap-4 sm:gap-10 text-[1.2rem] sm:text-[1.8rem] mt-[8rem]'>
                        <a href="#About" className='cursor-pointer transition duration-300 hover:text-[#555555] hover:border-b-2 border-[#555555]'><li>About</li></a>
                        <a href="#Experience" className='cursor-pointer transition duration-300 hover:text-[#555555] hover:border-b-2 border-[#555555]'><li>Experience</li></a>
                        <a href="#project" className='cursor-pointer transition duration-300 hover:text-[#555555] hover:border-b-2 border-[#555555]'><li>Projects</li></a>
                        <a href="#contact" className='cursor-pointer transition duration-300 hover:text-[#555555] hover:border-b-2 border-[#555555]'><li>Contact</li></a>
                    </ul>
                </div>
                <div className='flex justify-center mt-[4rem] ml-8 sm:ml-0'>
                    <p className='text-[#555555]'>Copyright © 2023 Jignesh Makvana. All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Second_Navbar