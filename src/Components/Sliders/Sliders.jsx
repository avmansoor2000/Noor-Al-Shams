import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import the main CSS file directly
import './Slider.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// banner import

import banner1 from '../../assets/img/banner/banner1.jpg'
import banner2 from '../../assets/img/banner/banner2.jpg'
import banner3 from '../../assets/img/banner/banner3.jpg'
import banner4 from '../../assets/img/banner/banner4.jpg'
import banner5 from '../../assets/img/banner/banner5.jpg'
import banner6 from '../../assets/img/banner/banner6.jpg'
import banner7 from '../../assets/img/banner/banner7.jpg'

const Sliders = ({ banners }) => {
  
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-screen w-full relative"
        
      >
        <SwiperSlide><img src={banner1} alt="" className=' object-cover h-full w-full'/></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="" className=' object-cover h-full w-full' /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="" className=' object-cover h-full w-full' /></SwiperSlide>
        {/* <SwiperSlide><img src={banner4} alt="" className=' object-cover h-full w-full'/></SwiperSlide> */}
        <SwiperSlide><img src={banner5} alt="" className=' object-cover h-full w-full'/></SwiperSlide>
        <SwiperSlide><img src={banner6} alt="" className=' object-cover h-full w-full'/></SwiperSlide>
        <SwiperSlide><img src={banner7} alt="" className=' object-cover h-full w-full'/></SwiperSlide>
        
      </Swiper>

      <h1 className='gradient-text absolute top-60 px-12 left-4 z-10 text-4xl md:text-5xl font-bold  text-center animate-gradient '>  Noor-Al-Shams & Ornamental plants trading llc       <span className='one'> love nature Live better </span></h1>
    </>
  );
};

export default Sliders;
