import React from 'react'
import Devloper from '../Components/Devloper'
import Tools from '../Array/Tools'
import Backend from '../Array/Backend'

const Experience = () => {

    const name = [
       { name : "Front-End Developer", array : Tools },
       { name : "Back-End Developer", array : Backend },
    ]

    return (
        <>
            <div className='w-full md:h-auto h-auto lg:h-screen sm:mb-[5rem] flex justify-center items-start pt-[10rem] sm:pt-[2rem] md:pt-[10rem] xl:pt-0' id='Experience'>
                <div className='text-center xl:mt-[6rem] 3xl:mt-[10rem]'>
                    <h1 className='text-[#555555] text-[1.2rem]'>Explore My</h1>
                    <h1 className='text-[3rem] font-bold'>Experience</h1>
                    <div className='flex flex-col sm:flex-row justify-center items-center gap-8 mt-[2rem]'>
                        {
                            name.map((item,index)=>{
                                return <Devloper name={item.name} array={item.array} key={index}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience