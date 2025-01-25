import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaAngleRight } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiLinkedinFill } from 'react-icons/ri'
import { RxInstagramLogo } from 'react-icons/rx'
import { VscGithubInverted } from 'react-icons/vsc'

const Icons = ({seticons}) => {
    return (
        <>
            <div className='absolute top-0 right-0 overflow-hidden'>
                <div className={`flex h-screen items-center bg-white icons-container`}>
                    <div className='text-[2.5rem] text-[#353535] flex'>
                        <div className='flex items-center'>
                            <FaAngleRight className='w-fit h-fit py-8 cursor-pointer' onClick={()=>seticons(false)}/>
                        </div>
                        <div className='px-6 pt-4'>
                            <a href="https://www.linkedin.com/in/jignesh-makvana-03bba6322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><RiLinkedinFill className='mb-6 cursor-pointer transition duration-200 hover:text-[#111111] hover:scale-[1.15]' /></a>
                            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fjignesh_x04"><BsTwitter className='mb-6 cursor-pointer transition duration-200 hover:text-[#111111] hover:scale-[1.15]' /></a>
                            <a href="https://www.instagram.com/jignesh_x04/?utm_source=qr&igsh=eGR2NXNmd2prZXRj#"><RxInstagramLogo className='mb-5 cursor-pointer transition duration-200 hover:text-[#111111] hover:scale-[1.15]' /></a>
                            <a href="mailto:jigneshmakvana077@gmail.com?subject=Exciting%20Job%20Opportunity%20at%20[Company%20Name]&body=Hello Jignesh, I would like to..."><MdOutlineMailOutline className='mb-6 cursor-pointer transition duration-200 hover:text-[#111111] hover:scale-[1.15]' /></a>
                            <a href="https://github.com/jignesh0703"><VscGithubInverted className='mb-6 cursor-pointer transition duration-200 hover:text-[#111111] hover:scale-[1.15]' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Icons