import React from 'react'
import Navbar from './Components/Navbar'
import About from './Sections/About'
import Experience from './Sections/Experience'
import Second_About from './Sections/Second_About'
import Contact from './Sections/Contact'
import Second_Navbar from './Sections/Second_Navbar'
import Project from './Sections/Project'

const App = () => {
  return (
   <>
      <Navbar />
      <About />
      <Second_About />
      <Experience />
      <Project />
      <Contact />
      <Second_Navbar />
   </>
  )
}

export default App