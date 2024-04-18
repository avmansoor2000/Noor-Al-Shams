import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="sm:flex items-center max-w-screen-xl">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <img src="https://img.freepik.com/free-vector/people-taking-care-plants_23-2148967131.jpg?t=st=1713428267~exp=1713431867~hmac=e00102b9db021d5fd5b802541f90e3ad443e34183dd82c3bf718afb00eb892bf&w=996" />
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                        <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
                            About us
                        </span>
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                            About <span className="text-indigo-600">Our Company</span>
                        </h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
                            commodi doloremque, fugiat illum magni minus nisi nulla numquam
                            obcaecati placeat quia, repellat tempore voluptatum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="sm:flex flex-row-reverse items-center max-w-screen-xl">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center ">
                        <img src="https://img.freepik.com/free-vector/flat-people-taking-care-plants_23-2148995189.jpg?t=st=1713428441~exp=1713432041~hmac=da38fda4d918efd41987b1702969a05632132b4423e1b760e7092cb17f91423c&w=900" />
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                       
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                        What makes us  <span className="text-indigo-600">special?</span>
                        </h2>
                        <p className="text-gray-700">
                        Plantshop.me is much more than a business. It is a unique initiative; a contribution to the UAE’s dream of a greener tomorrow. Unlike other plant shops in the region, our target market is not the expert gardener, but rather the gardening novice. We have taken upon ourselves the challenge of teaching the population about plants and gardening, and of driving them towards it in the hope of a better future for us all.
                        </p>
                    </div>
                </div>
            </div>
            <div className="sm:flex items-center max-w-screen-xl">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <img src="https://img.freepik.com/premium-vector/d-isometric-flat-vector-illustration-dementia-memory-loss-item_109064-4421.jpg?w=740" />
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                        
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                        <span className="text-indigo-600">Solutions</span> We Offer
                        </h2>
                        <p className="text-gray-700">
                        Being an online store wipes out the concern of accessibility as we accept purchases round the clock. Plantshop.me accepts credit cards and also offers product delivery at your doorstep. We work with a bunch of experienced hands whose excellent knowledge can bring in the best quality material at affordable rates. We also provide our customers the perk of finding all related items under one roof.
                        </p>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default About
