import React from 'react'

const Laptop = ({imgs,name,category,paragraf,github_link,live_demo,array}) => {
    return (
        <>
            <div className='border border-[#555555] px-8 rounded-[30px] pb-5 w-[20rem] sm:w-[35rem] md:w-[45rem] lg:w-[55rem] xl:w-[65rem] 2xl:w-[75rem]'>
                <div className='flex flex-col md:flex-row md:mt-8 lg:mt-0'> 
                    <div className='duration-300 transition flex lg:ml-[-2rem] xl:ml-0'>
                        <div className='flex w-[15rem] sm:w-[20rem] md:w-[15rem] lg:w-[25rem] xl:w-[25rem] 2xl:w-[30rem] ml-[1rem] sm:ml-[6rem] md:ml-0 overflow-hidden z-30 transition'>
                            <img src={imgs} alt="laptop_img" />
                        </div>
                    </div>
                    <div className='w-[17rem] sm:w-[28rem] flex flex-col text-left justify-center sm:ml-8'>
                        <h1 className='font-bold text-[2rem]'>{name}</h1>
                        <h1 className='mt-1 font-bold'>({category})</h1>
                        <p className='mt-3 lg:w-[25rem] xl:w-[35rem]'>{paragraf}</p>
                        <div className='flex gap-x-2 sm:gap-x-4 gap-y-2 w-[18rem] sm:w-[30rem] md:w-[25rem] lg:w-[25rem] xl:w-[38rem] flex-wrap mt-4'>
                        {
                            array.map((item, index) => (
                               <h1 className='border-black border rounded-[30px] py-1 text-[0.7rem] sm:text-base px-4' key={index}>#{item}</h1>
                            ))
                        }
                        </div>
                    </div>
                </div>
                <div className='flex justify-center gap-4 items-center mt-4 sm:mt-6 lg:mt-0'>
                    <a href={github_link}><button className='border-[1px] border-[#555555] px-6 py-2 rounded-[30px] font-semibold text-[0.8rem] transition duration-200 hover:bg-[#555555] hover:text-white'>Github</button></a>
                    <a href={live_demo}><button className='border-[1px] border-[#555555] px-6 py-2 rounded-[30px] font-semibold text-[0.8rem] transition duration-200 hover:bg-[#555555] hover:text-white'>Live Demo</button></a>
                </div>
            </div>
        </>
    )
}

export default Laptop