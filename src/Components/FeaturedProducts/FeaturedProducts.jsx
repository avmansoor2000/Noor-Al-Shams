import React from 'react'


// importing pots images

import whitePot from '../../assets/img/pots/WhiteBalladPot.jpg'
import aristoPot from '../../assets/img/pots/AristoPotPlantshop.jpg'
import opaldeligtPot from '../../assets/img/pots/OpalDelightPotPlantshop.jpg'
import timelessPot from '../../assets/img/pots/TimelessTrellisPotPlantshop.jpg'
import radiancePot from '../../assets/img/pots/RadiancePotPlantshop.jpg'
import reflectionPot from '../../assets/img/pots/ReflectionPotPlantshop.jpg'



const FeaturedProducts = () => {

    const featured = [
        {

            img: whitePot,
            id: 1,
            name: "White Ballad Pots",
            tag: "featured"
        },
        {
            img: aristoPot,
            id: 2,
            name: "Aristo Pot",
            tag: "Hot selling"
        },
        {
            img: opaldeligtPot,
            id: 3,
            name: "Opal Delight Pot",
            tag: "Trending"
        },
        {
            img: timelessPot,
            id: 4,
            name: "Timeless Trellis",
            tag: "featured"
        },
        {
            img: radiancePot,
            id: 5,
            name: "Radiance Pot",
            tag: "featured"
        },
        {
            img: reflectionPot,
            id: 1,
            name: "Reflection Pot",
            tag: "featured"
        },
    ]
    return (
        <div>


            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-black">
                        Featured Products
                    </h2>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                        Experience unparalleled quality and timeless style with our featured products.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {
                        featured.map((item) => (
                            <div className="group " >
                                <div className="relative pt-[50%] sm:pt-[70%] rounded-xl shadow-xl overflow-hidden  ">
                                    <img
                                        className="size-full absolute top-0 start-0 object-contain group-hover:blur-sm  group-hover:scale-150 transition-transform duration-1000 ease-in-out rounded-xl"
                                        src={item.img}
                                        alt="Image Description"
                                    />
                                    <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                                        {item.tag}
                                    </span>
                                    <h3 className={`text-xl absolute top-[45%] left-[30%] group-hover:scale-150 transition-transform duration-100 ease-in-out gradient-text  hidden group-hover:block font-bold`}>
                                        {item.name}
                                    </h3>
                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>
            


        </div>
    )
}

export default FeaturedProducts
