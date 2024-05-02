"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';


const Sliding2 = () => {
  
  return (
    
    <div>
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
        className="mySwiper w-full h-full"
      >
       <SwiperSlide className='text-center flex justify-center items-center '><img  className='w-full h-full block object-cover' src="/banner/home2.jpg" alt="banner" /></SwiperSlide>
        <SwiperSlide className='text-center flex justify-center items-center '><img className='w-full h-full block object-cover'  src="/banner/home3.jpg" alt="banner" /></SwiperSlide>
        <SwiperSlide className='text-center flex justify-center items-center '><img className='w-full h-full block object-cover'  src="/banner/home4.jpg" alt="banner" /></SwiperSlide>
        <SwiperSlide className='text-center flex justify-center items-center '><img className='w-full h-full block object-cover'  src="/banner/dairy.jpg" alt="banner" /></SwiperSlide>
        <SwiperSlide className='text-center flex justify-center items-center '><img className='w-full h-full block object-cover'  src="/banner/home1.jpg" alt="banner" /></SwiperSlide>
        <SwiperSlide className='text-center flex justify-center items-center '><img className='w-full h-full block object-cover'  src="/banner/home6.jpg" alt="banner" /></SwiperSlide>
        <SwiperSlide className='text-center flex justify-center items-center '><img className='w-full h-full block object-cover'  src="/banner/home7.jpg" alt="banner" /></SwiperSlide>
        <SwiperSlide className='text-center flex justify-center items-center '><img className='w-full h-full block object-cover'  src="/banner/home8.jpg" alt="banner" /></SwiperSlide>
        <SwiperSlide className='text-center flex justify-center items-center '><img className='w-full h-full block object-cover'  src="/banner/home9.jpg" alt="banner" /></SwiperSlide>
        <SwiperSlide className='text-center flex justify-center items-center '><img className='w-full h-full block object-cover'  src="/banner/home9.jpg" alt="banner" /></SwiperSlide>
        <SwiperSlide className='text-center flex justify-center items-center '><img className='w-full h-full block object-cover'  src="/banner/home9.jpg" alt="banner" /></SwiperSlide>
        <SwiperSlide className='text-center flex justify-center items-center '><img className='w-full h-full block object-cover'  src="/banner/home9.jpg" alt="banner" /></SwiperSlide>
        <SwiperSlide className='text-center flex justify-center items-center '><img className='w-full h-full block object-cover'  src="/banner/home9.jpg" alt="banner" /></SwiperSlide>
        <SwiperSlide className='text-center flex justify-center items-center '><img className='w-full h-full block object-cover'  src="/banner/home9.jpg" alt="banner" /></SwiperSlide>
        <SwiperSlide className='text-center flex justify-center items-center '><img className='w-full h-full block object-cover'  src="/banner/home9.jpg" alt="banner" /></SwiperSlide>
        <SwiperSlide className='text-center flex justify-center items-center '><img className='w-full h-full block object-cover'  src="/banner/home9.jpg" alt="banner" /></SwiperSlide>
      </Swiper>
     
     
    </div>
    
  )
}

export default Sliding2