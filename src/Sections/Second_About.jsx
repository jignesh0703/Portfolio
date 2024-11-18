import React from 'react'
import Data from '../Components/Data'
import Experience from '../assets/experience.png'
import education from '../assets/education.png'
import logo from '../assets/logo.png'

const Second_About = () => {

    const data = [
        { img: Experience, Hobbie: "Experience", time: "6+ month", dev: "Frontend Development" },
        { img: education, Hobbie: "Education", time: "BCA Bachelors Degree", dev: "ㅤ" }
    ]

    return (
        <>
            <div className='w-full h-[70vh] mb-[10rem]'>
                <div className='text-center mt-[1rem]'>
                    <h1 className='text-[#555555] text-[1.2rem]'>Get To Know More</h1>
                    <h1 className='text-[3rem] font-bold'>About Me</h1>
                    <div className='flex flex-col xl:flex-row items-center'>
                        <div className='ml-[3rem] w-[70%] sm:w-[50%] md:w-[50%] lg:w-[40%] xl:w-[35%] mr-12 sm:mr-0'>
                            <img src={logo} alt="logo_img" className='w-full' />
                        </div>
                        <div className='xl:w-[65%]'>
                            <div className='flex justify-center gap-8 mt-[2rem] w-full xl:ml-[-2rem] 2xl:ml-[-5rem]'>
                                {
                                    data.map((item, index) => {
                                        return <Data img={item.img} Hobbie={item.Hobbie} time={item.time} dev={item.dev} key={index} />
                                    })
                                }
                            </div>
                            <p className='ml-[5%] xl:ml-8 w-[90%] xl:w-[85%] flex justify-start text-left mt-8 text-[#555555] font-bold'>I’m Jignesh, a front-end developer with experience in HTML, CSS, JavaScript, and React. I specialize in creating responsive, user-friendly websites that deliver great user experiences. I’m passionate about writing clean, efficient code and staying up-to-date with the latest web trends. My goal is to combine functionality and design to build seamless digital experiences.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Second_About