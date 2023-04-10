import React from 'react'
import Footer from '../Footer/Footer'
import Intro from '../Introduction/Intro'
import People from '../People/People'
import Projects from '../Projects/Projects'
import '../Style.css'
import Topbar from '../Topbar/Topbar'

const Layout = () => {
  // const img = process.env.PUBLIC_URL + "/east-bay-sign.jpg";
  return (
    <div>
      <Topbar />
      {/* <div className="card-overlay">
        <div className='intro-image'
          style={{
            backgroundImage: `url(${img})`
          }}>
            <div className='card-img-overlay'> <Intro /></div>
        </div>
      </div> */}
      <Intro />
      <Projects />
      <People />
      <Footer />
    </div>
  )
}

export default Layout
