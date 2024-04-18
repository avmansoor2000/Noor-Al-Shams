import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className="p-6 py-12 dark:bg-slate-100 dark:text-gray-900">
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <h2 className="text-center text-4xl tracking-tighter font-bold">
        Up to <span></span>
        <br className="sm:hidden" />
         50% Off
      </h2>
      <div className="space-x-2 text-center py-2 lg:py-0">
        <span>Plus free shipping! Use code:</span>
        <span className="font-bold text-lg">FORESTRY50</span>
      </div>
      <a
        href="#"
        rel="noreferrer noopener"
        className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600"
      >
        Shop Now
      </a>
    </div>
  </div>
</div>

    </div>
  )
}

export default Banner
