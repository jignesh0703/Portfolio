import React from 'react'

const Data = ({img,Hobbie,time,dev}) => {
    return (
        <>
            <div className='border-[1px] border-[#555555] rounded-[30px] w-[40%] sm:w-[40%] md:w-[43%] lg:w-[45%] xl:w-[40%] h-max'>
                <div className='py-10 sm:py-2 md:py-2 md:pt-[1.5rem] lg:py-4 xl:py-3 3xl:py-6 flex justify-center items-center'>
                    <div className='flex justify-center flex-col text-center items-center'>
                    <img src={img} alt="images" className='w-[2.5rem]'/>
                        <div>
                            <h1 className='font-bold sm:text-base md:text-[1.5rem]'>{Hobbie}</h1>
                            <h1 className='text-[#555555] sm:text-base md:text-[1.2rem]'>{time}</h1>
                            <h1 className='text-[#555555] sm:text-base md:text-[1.2rem]'>{dev}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Data