import React from 'react'
import Img from '../../assets/img/banner/banner3.jpg'

const History = () => {
  return (
    <div>
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
          Welcome to Forestry   
        </p>
        <h1>

      Foresty History
        </h1>
      </div>
      <div className="dark:text-gray-800">
        <p>Dar al Zain Flowers is a premier plant arrange- ment and delivery company established in 1994. We specialize in creating custom floral arrangements for government, corporate, hotel, school, and residential clients. Our experienced team of florists and designers handle every aspect of the process from design to fulfill- ment. Our custom plant arrangements are available on major shopping platforms and can be tailored to meet each customer's specific needs. With an extensive industry experience of more than 25 years, Dar al Zain Flowers remains committed to providing superior floral products and arrangements while delivering unparalleled customer service.</p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default History
