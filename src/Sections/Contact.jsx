import React from 'react'
import email from '../assets/email.png'
import linkedin from '../assets/linkedin.png'

const Contact = () => {

    const data = [
        {
            img: email,
            name: 'jigneshmakvana077@gmail.com',
            link: 'mailto:jigneshmakvana077@gmail.com?subject=Exciting%20Job%20Opportunity%20at%20[Company%20Name]&body=Hello Jignesh, I would like to...'
        },
        {
            img: linkedin,
            name: 'Linkedin',
            link: 'https://www.linkedin.com/in/jignesh-makvana-03bba6322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        }
    ]

    return (
        <>
            <div className='w-full h-[70vh]' id='contact'>
                <div className='text-center pt-[18rem]'>
                    <h1 className='text-[#555555] text-[1.2rem]'>Get in Touch</h1>
                    <h1 className='text-[3rem] font-bold'>Contact Me</h1>
                    <div className='flex justify-center items-center'>
                        <div className='w-[20rem] sm:w-max border border-[#555555] flex gap-4 sm:gap-6 px-8 py-[1rem] sm:py-[2rem] rounded-[30px] mt-[2rem] flex-col sm:flex-row'>
                            {
                                data.map((data, index) => {
                                    return <div className='flex justify-center items-center' key={index}>
                                        <img src={data.img} alt="email_img" className='w-[2rem] sm:w-[2.5rem]' />
                                        <a href={data.link} className='text-[1rem] sm:text-[1.2rem] ml-1 sm:ml-2 transition duration-300 hover:text-[#555555] hover:border-b-[1px] border-[#555555]'>{data.name}</a>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact