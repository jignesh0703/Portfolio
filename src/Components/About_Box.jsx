import React from 'react'
import Coder from '../assets/Coder.png'
import php from '../assets/php.png'
import html from '../assets/html.png'
import Technologies from '../Array/Technologies'
import { IoClose } from 'react-icons/io5'

const react = <svg width={50} height={50} viewBox="175.7 78 490.6 436.9" xmlns="http://www.w3.org/2000/svg"><g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"></path><circle cx="420.9" cy="296.5" r="45.7" /></g></svg>

const About_Box = ({setsaw_about}) => {
    return (
        <>
            <div className='top-0 w-full h-full b-[10rem] z-[9999999] flex justify-center items-center black-overlay fixed'>
                <div className='bg-white w-[20rem] sm:w-[35rem] lg:w-[50rem] xl:w-[60rem] h-[31.5rem] sm:h-[33rem] lg:h-[31rem] xl:h-[35rem] 3xl:w-[70rem] 3xl:h-[40rem] rounded-[10px] about_box'>
                    <div className='absolute border border-black w-8 h-8 rounded-full flex justify-center items-center text-[1.2rem] cursor-pointer shadow-lg ml-[16.5rem] sm:ml-[31.5rem] lg:ml-[46rem] xl:ml-[56.5rem] 3xl:ml-[67rem] mt-[1rem] transition duration-200 hover:rotate-90' onClick={()=>setsaw_about(false)}>
                        <IoClose />
                    </div>
                    <div className='flex justify-between items-center h-full'>
                        <div className='flex ml-[1rem] sm:ml-[2rem] lg:ml-[5rem] h-full mt-[1rem] sm:mt-[2rem] md:mt-[2rem] lg:mt-[3rem] xl:mt-[5rem] 3xl:mt-[8rem] w-[30rem]'>
                            <div>
                                <div>
                                    <h1 className='text-[#1788ae] text-[1.5rem] font-bold'>ABOUT ME</h1>
                                    <p className='w-[9rem] sm:w-[15rem] lg:w-[25rem] mt-[1rem] font-bold text-[#555555] text-[0.8rem] sm:text-base tracking-tight'>I help busy web developers to design & develop creative websites that fits their vision and attracts the visitors to stay for ever. Technologies and tools that I use to create such awesome websites.</p>
                                </div>
                                <div className='flex gap-2 mt-[1rem] md:w-[30rem] lg:w-[23rem] flex-wrap'>
                                    {
                                        Technologies.map(
                                            (items, index) => {
                                                return <div key={index}>
                                                    <h1 className='border border-[#555555] text-[#555555] w-max px-3 py-1 rounded-[50px] font-bold text-[0.7rem] sm:text-[0.9rem]'>#{items.name}</h1>
                                                </div>
                                            }
                                        )
                                    }
                                </div>
                                <div className='mt-[1rem] xl:mt-[2rem] 3xl:mt-[3rem]'>
                                    <h1 className='text-[#1788ae] sm:text-[1.5rem] font-bold'>FRONT-END DEVLOPER</h1>
                                    <div className='flex items-center 2xl:mt-[1rem] 3xl:mt-[1.5rem] gap-6'>
                                        <div className='flex flex-col items-center'>
                                            <h1>{react}</h1>
                                            <h1 className='text-[#61dafb] font-bold sm:mt-4'>React</h1>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <img src={php} alt="php_img" className='w-[4.5rem] h-[3rem] overflow-hidden' />
                                            <h1 className='text-[#777bb3] font-bold sm:mt-4'>PHP</h1>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <img src={html} alt="php_img" className='w-[3.5rem] overflow-hidden object-cover' />
                                            <h1 className='text-[#e44d26] font-bold sm:mt-4'>HTML</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='absolute lg:flex justify-center mr-[3rem] w-[9rem] sm:w-[15rem] xl:w-[30rem] lg:w-[20rem]'>
                            <img src={Coder} alt="Coder_image" className='mb-[13rem] sm:mb-[15rem] ml-[10rem] sm:ml-[18rem] lg:ml-[60rem] lg:mt-[15rem] xl:ml-[60rem] 2xl:ml-[60rem] xl:mt-[13rem] 2xl:mt-[15rem] 3xl:ml-[75rem] 3xl:mt-[10rem]' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About_Box