import React from 'react'
import mark from '../assets/checkmark.png'

const Devloper = ({name , array}) => {
    return (
        <>
            <div className='border border-[#555555] rounded-[30px] w-[90%] sm:w-[40%] lg:w-[45%] xl:w-[40%] 2xl:w-[45%]'>
                <div className='py-8 px-[3rem]'>
                    <h1 className='text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] font-bold text-[#555555]'>{name}</h1>
                    <div className='flex lg:gap-x-[2.5rem] xl:gap-x-[5rem] 2xl:gap-x-[3rem] 3xl:gap-x-[7rem] gap-y-10 sm:gap-y-[2rem] md:gap-y-[3rem] lg:gap-y-10 xl:gap-y-6 flex-wrap items-start mt-[2rem] ml-14 sm:ml-0'>
                        {
                            array.map((item, index) => {
                                return <div key={index} className='flex items-start w-[10rem]'>
                                    <div>
                                        <img src={mark} alt="checkmrk_img" className='w-[2rem]' />
                                    </div>
                                    <div className='flex flex-col items-start ml-[1rem]'>
                                        <h1 className='font-bold text-[1.2rem]'>{item.name}</h1>
                                        <h1 className='text-[#555555]'>{item.category}</h1>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Devloper