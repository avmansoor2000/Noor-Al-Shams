import React, { useState } from 'react'
import Img from '../../assets/img/banner/banner3.jpg'
import { Element } from 'react-scroll'

const History = () => {

  const paragraphStyles = {
    WebkitLineClamp:6,
    WebkitBoxOrient:"vertical",
    overflow:"hidden",
    display:"-webkit-box",
  }

  const [isopen , SetIsopen] = useState(false)

  return (
    <div>
      <Element id='about'>
      
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
      
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded-3xl">
          <img
            src={Img}
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
            <div className="space-y-2 inline-block text-2xl font-semibold sm:text-3xl">

              <p className=" text-sm dark:text-green-600">
                Welcome to Noor Al Shams
              </p>
              <h1>

                Noor Al Shams History
              </h1>
            </div>
            <div className="dark:text-gray-800">
              <p style={isopen? null : paragraphStyles} >Welcome to Noor Al Shams Flowers & Ornamental Plants Trading, your premier destination for all your gardening and landscaping needs in Dubai, U.A.E.

                At Noor Al Shams Flowers and Plants, we pride ourselves on being a comprehensive solution for both residential and commercial clients alike. Whether you're looking to beautify your home garden or enhance the landscape of your commercial property, we have the expertise and products to bring your vision to life.

                Our diverse product portfolio encompasses everything from pots and planters to a wide variety of indoor, outdoor, and specimen plants, as well as pebbles, stones, and soil amendments. Whatever your gardening requirements may be, we have the resources to meet them.

                When it comes to pots and planters, we offer a dynamic range of styles to suit every taste and preference. From modern and contemporary designs to bold and rustic options, our collection has something for everyone. Choose from ceramic planters, classic terracotta pots, Tuscany plastic, glass reinforced cement planters, Capi Europe, fiber pots, and planters, as well as Atlantis and Old Stone series.

                Elevate your indoor and outdoor spaces with our stylish and functional pots and planters, and let your favorite plants thrive in containers that complement their beauty. At Noor Al Shams Flowers and Plants, we are committed to providing top-quality products and exceptional service to ensure your gardening experience is nothing short of extraordinary.

                Experience the difference with Noor Al Shams Flowers & Ornamental Plants Trading – where excellence meets innovation in gardening and landscaping.</p>
                <button  className=' text-blue-700 mt-3 '  onClick={()=>SetIsopen(!isopen)}>{ isopen ? " Read less!": "Read more..."}</button>
            </div>
          </div>
        </div>
      </div>
      </Element>
    </div>
  )
}

export default History
