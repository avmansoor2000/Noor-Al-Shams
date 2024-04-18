import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
// import Banner from '../../Components/Banner/Banner'
import Sliders from '../../Components/Sliders/Sliders'
import History from '../../Components/History/History'
import Stats from '../../Components/Stats/Stats'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Footer from '../../Components/Footer/Footer'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Sliders/>
      <Stats/>
      <History/>
      {/* <Banner/>  */}
      <FeaturedProducts/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
