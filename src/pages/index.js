import React from 'react'

import { About, Blog, Contacts, Education, Experience, Landing, Navbar, Projects, Reflection, Skills } from '../components'

function HomePage() {
  return (
    <>
      {/* <BackToTop /> */}
      {/* <ChangeTheme /> */}
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Reflection />
      {/* <Blog /> */}
      <Contacts />
    </>
  )
}

export default HomePage
