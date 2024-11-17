import React from 'react'
import Laptop from '../Components/Laptop'
import Projects from '../Array/Projects'

const Project = () => {
  return (
    <>
         <div className='w-full h-auto flex justify-center items-start' id='project'>
                <div className='text-center mt-8'>
                    <h1 className='text-[#555555] text-[1.2rem]'>Browse My</h1>
                    <h1 className='text-[3rem] font-bold'>Latest Works</h1>
                    <div className='mt-12 flex flex-col gap-y-8'>
                      {
                        Projects.map((items,index)=>{
                          return <Laptop imgs={items.imgs} name={items.name} category={items.category} paragraf={items.paragraf} github_link={items.github_link} live_demo={items.live_demo} array={items.array} key={index}/>
                        })
                      }
                    </div>
                </div>
            </div>
    </>
  )
}

export default Project