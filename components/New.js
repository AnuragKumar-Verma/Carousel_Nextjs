"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
const New = () => {

  return (
    <div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={800}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper w-full h-screen bg-gray-100"
        >
                    <div
          slot="container-start"
          className="parallax-bg  absolute left-0 top-0 bg-cover"
          
          data-swiper-parallax="-2%"
        >
            <img className='' src="/slider-bg.jpg" alt="" />
        </div>
                <SwiperSlide className=' text-white size-24'>
          <div className="title text-8xl font-bold pt-24 px-24 text-red-500 font-serif  " data-swiper-parallax="-300">
            Sale 20 % Off 
          </div>
          <div className="subtitle text-6xl font-semibold  px-28 text-blue-900 font-sans pt-1" data-swiper-parallax="-200">
            On Every Things
          </div>
          <div className="text-black w-full h-96" data-swiper-parallax="-100">
            <p className='px-32 pt-4 '>
              FRESHMART - The All in One Shop. <br/>
              We Care for Your Money and Time. <br/>
              Now Shopping is Much Easier With Freshmart.<br/>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-white size-24'>
        <div className="title text-8xl font-bold pt-24 px-24 text-red-500 font-serif  " data-swiper-parallax="-300">
            Sale 20 % Off 
          </div>
          <div className="subtitle text-6xl font-semibold  px-28 text-blue-900 font-sans pt-1" data-swiper-parallax="-200">
            On Every Things
          </div>
          <div className="text-black w-full h-96 line-clamp-3" data-swiper-parallax="-100">
            <p className='px-32 pt-4 '>
              FRESHMART - The All in One Shop. <br/>
              We Care for Your Money and Time. <br/>
              Now Shopping is Much Easier With Freshmart.<br/>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-white size-24'>
        <div className="title text-8xl font-bold pt-24 px-24 text-red-500 font-serif  " data-swiper-parallax="-300">
            Sale 20 % Off 
          </div>
          <div className="subtitle text-6xl font-semibold  px-28 text-blue-900 font-sans pt-1" data-swiper-parallax="-200">
            On Every Things
          </div>
          <div className="text-black w-full h-96 line-clamp-3" data-swiper-parallax="-100">
            <p className='px-32 pt-4 '>
              FRESHMART - The All in One Shop. <br/>
              We Care for Your Money and Time. <br/>
              Now Shopping is Much Easier With Freshmart.<br/>
            </p>
          </div>
        </SwiperSlide>
        </Swiper>
     
    </div>
  )
}

export default New