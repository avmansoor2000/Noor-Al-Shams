import React from 'react'

import catus from '../../assets/img/plants/Western.png'
import bamboo from '../../assets/img/plants/Bamboo.png'
import bonasi from '../../assets/img/plants/Bonsai.png'
import cannabis from '../../assets/img/plants/Cannabis.png'
import irrigation from '../../assets/img/plants/Irrigation.png'
import plant from '../../assets/img/plants/Plant.png'
import potted from '../../assets/img/plants/Potted.png'
import { Element } from 'react-scroll'


const Service = () => {
    const plantsData =[
    {
        img:catus,
        heading:"Catus Succulents",
        para:"Explore the resilience and beauty of desert-adapted succulents"
    },
    // {
    //     img:bamboo,
    //     heading:"Bamboo plam trees",
    //     para:"Embrace the elegance and tranquility of bamboo palm trees"
    // },
    // {
    //     img:bonasi,
    //     heading:"Bonasi Plants",
    //     para:"Discover the artistry and serenity of miniature bonsai plants"
    // },
    {
        img:cannabis,
        heading:"Medicine Plants",
        para:"Unlock the potential of nature's remedies with medicinal plants"
    },
    {
        img:irrigation,
        heading:"Indoor Plants",
        para:"Bring the refreshing touch of greenery into your indoor spaces"
    },
    {
        img:plant,
        heading:"Outdoor Plants",
        para:"Transform your outdoor environment with vibrant and versatile plants"
    },
    {
        img:potted,
        heading:"Plants pots",
        para:"Complete your botanical oasis with stylish and functional plant pots"
    },
]
  return (
    <div>
        <Element id='service'>
      <div className=' flex flex-col  justify-center items-center'>
         <h3 className=' font-bold text-green-700'>OUR SERVICES</h3>
         <h1 className=' text-2xl font-bold text-center'>Nursery & Lanscaping Services</h1>
      </div>
      <div  className=' flex flex-wrap px-8 py-10 gap-5 justify-center '>
        {
            plantsData.map((data)=>(
                <div className=' flex  w-80 h-auto bg-white shadow-2xl rounded-2xl items-center px-5 py-5 gap-5 '>
                <div>
                    <img src={data.img} alt=""  className=' object-cover  w-14 h-12'/>
                </div>
                <div>
                    <h1 className=' font-bold text-green-700'> {data.heading}</h1>
                    <p className=' text-sm'>{data.para} </p>
                </div>
            </div>
            ))
        }
        
      </div>
      </Element>
    </div>
  )
}

export default Service
