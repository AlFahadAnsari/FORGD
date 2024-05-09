import React from 'react'
import Navbar from '../components/Navbar'
import Template from '../components/Template'
import Detailspage from '../components/Detailspage'
import DetailsPart from '../components/DetailsPart'
import OurProuduct from '../components/OurProuduct'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Template/>
        <Detailspage/>
        <DetailsPart/>
        <OurProuduct/>
        <Footer/>
    </div>
  )
}

export default Home