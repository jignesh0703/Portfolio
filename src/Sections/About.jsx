import React, { useState } from 'react'
import Main from '../Components/Main'
import Icons from '../Components/Icons'
import About_Box from '../Components/About_Box'

const About = () => {

    const [icons, seticons] = useState(false)
    const [saw_about, setsaw_about] = useState(false)

    return (
        <>
            <div id='About'>
                <Main seticons={seticons} setsaw_about={setsaw_about} />
                {icons ? <Icons seticons={seticons} /> : <></>}
                {saw_about ? <About_Box setsaw_about={setsaw_about} /> : <></>}
            </div>
        </>
    )
}

export default About