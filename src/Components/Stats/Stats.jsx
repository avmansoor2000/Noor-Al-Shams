import React from 'react'

const Stats = () => {
  return (
    <div>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
  <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-4">
    <div className="flex flex-col justify-start m-2 lg:m-6">
      <p className="text-4xl font-bold leading-none lg:text-6xl text-green-500">78<span className=' text-gray-700'>+</span></p>
      <p className="text-sm sm:text-base text-gray-700 font-bold">Clients</p>
    </div>
    {/* <div className="flex flex-col justify-start m-2 lg:m-6">
      <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
      <p className="text-sm sm:text-base">Followers on social media</p>
    </div> */}
    <div className="flex flex-col justify-start m-2 lg:m-6">
      <p className="text-4xl font-bold leading-none lg:text-6xl text-green-500">342 <span className=' text-gray-700'>+</span></p>
      <p className="text-sm sm:text-base text-gray-700 font-bold">Stylish pots</p>
    </div>
    <div className="flex flex-col justify-start m-2 lg:m-6">
      <p className="text-4xl font-bold leading-none lg:text-6xl text-green-500">30<span className=' text-gray-700'>+</span></p>
      <p className="text-sm sm:text-base text-gray-700 font-bold">Years of experience</p>
    </div>
    <div className="flex flex-col justify-start m-2 lg:m-6">
      <p className="text-4xl font-bold leading-none lg:text-6xl text-green-500">60<span className=' text-gray-700'>+</span></p>
      <p className="text-sm sm:text-base text-gray-700 font-bold">Home Decor Plants</p>
    </div>
  </div>
</section>

    </div>
  )
}

export default Stats
