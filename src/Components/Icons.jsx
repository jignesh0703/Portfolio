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
                            <RiLinkedinFill className='mb-6 cursor-pointer transition duration-200 hover:text-[#111111] hover:scale-[1.15]' />
                            <BsTwitter className='mb-6 cursor-pointer transition duration-200 hover:text-[#111111] hover:scale-[1.15]' />
                            <RxInstagramLogo className='mb-5 cursor-pointer transition duration-200 hover:text-[#111111] hover:scale-[1.15]' />
                            <MdOutlineMailOutline className='mb-6 cursor-pointer transition duration-200 hover:text-[#111111] hover:scale-[1.15]' />
                            <VscGithubInverted className='mb-6 cursor-pointer transition duration-200 hover:text-[#111111] hover:scale-[1.15]' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Icons