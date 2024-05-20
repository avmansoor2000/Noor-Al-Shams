import React from 'react'

import { MdOutlineMail } from "react-icons/md";
import { LuPhoneForwarded } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";




const Contact = () => {
  return (
    <div>
        <div className=' flex flex-col items-center'>
        <h3 className=' font-bold  text-green-700'>Contact us</h3>
        <p className="text-xl text-center font-bold md:leading-tight dark:text-black">Reach out to us today to place your order and <br/> bring home the perfect green addition to your space!</p>
        <div className=' flex w-full py-10 flex-wrap gap-2 justify-center items-start'>
          <div className=' flex flex-col justify-center items-center w-80 bg-gray-200 py-5 h-40 rounded-2xl'>
            <div className=' bg-white h-12 w-12 flex justify-center items-center rounded-full'>
              <MdOutlineMail/>
            </div>
            <h2 className=' font-bold'>Email Address</h2>
            <p className=' text-blue-400'>info@nooralshamsdubai.com</p>
          </div>
          <div className=' flex flex-col justify-center items-center w-80 bg-gray-200 py-5 h-40 rounded-2xl'>
            <div className=' bg-white h-12 w-12 flex justify-center items-center rounded-full'>
              <LuPhoneForwarded/>
            </div>
            <h2 className=' font-bold'>Phone Number</h2>
            <p className=' text-blue-400'>055 505 4975</p>
            
          </div>
          <div className=' flex flex-col justify-center items-center w-80 bg-gray-200 py-5 h-40 rounded-2xl'>
            <div className=' bg-white h-12 w-12 flex justify-center items-center rounded-full'>
            <SlLocationPin />
            </div>
            <h2 className=' font-bold'>Our Address</h2>
            <p className=' text-blue-400 text-center'>Warsan 3 - Dubai, <br/> United Arab Emirates</p>
          </div>
          <div className=' flex flex-col justify-center items-center w-80 bg-gray-200 py-5 h-40 rounded-2xl'>
            <div className=' bg-white h-12 w-12 flex justify-center items-center rounded-full'>
            <FaWhatsapp />

            </div>
            <h2 className=' font-bold'>Whatsapp</h2>
            <p className=' text-blue-400'>055 505 4975</p>
          </div>
          
        </div>
        </div>
    </div>
  )
}

export default Contact
