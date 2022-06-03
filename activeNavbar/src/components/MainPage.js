import React from 'react'
import Navbar from './Navbar'
import NavPage from './NavPage'

const MainPage = () => {
  return (
    <React.Fragment>
    <section className='md:w-2/5 md:mx-auto'>
        {/* navbar section */}
      <div className="bg-blue-100 h-20 w-full centered">
          <Navbar/>

      </div>

      {/* navPage section */}
      <div className="bg-blue-100 h-screen w-full">
          <NavPage/>

      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage