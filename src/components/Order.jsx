/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import tahu from '/tahu2.jpeg';
import bakso from '/bakso2.jpeg';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Order() {

    useEffect (() => {
        Aos.init({
            // once: true,
            duration: 800,
        })
    }, [])

    return (
        <>

            <div data-aos="zoom-in" className="mx-2 my-10 lg:my-10 lg:w-4/5 lg:m-auto px-5 pb-5">
                <div className="lg:w-4/5 lg:m-auto">
                <p className="font-bold text-lg lg:text-xl py-4 px-2 mt-5 mb-5 pb-2 dark:text-white">
                    Ini dia beberapa produk Best Seller Kantin SPW 👇👇👇
                </p>
                <Swiper
                    slidesPerView={2}
                    centeredSlides={true}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                    <div className="px-3 py-3 dark:bg-black hover:bg-gray-300 dark:text-white">
                            <div className="w-4/5 m-auto border-2 border-black px-2 py-2 rounded-lg">
                                <img src={tahu} alt="" />
                            </div>
                            <div className="w-4/5 m-auto">
                                <p className="font-semibold text-base lg:text-lg">
                                    Rp 3.000
                                </p>
                                <a href="http://wa.me/6285161310017?text=Mas+Saya+Mau+Beli+Tahu" className="font-semibold text-base hover:underline">
                                    Tahu kaget
                                </a>
                                <p className="font-normal mt-2 text-xs">
                                    ocong_company
                                </p>
                            </div>
                            </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="px-3 py-3 dark:bg-black hover:bg-gray-300 dark:text-white">
                            <div className="w-4/5 m-auto border-2 border-black px-2 py-2 rounded-lg">
                                <img src={bakso} alt="" />
                            </div>
                            <div className="w-4/5 m-auto">
                                <p className="font-semibold text-base lg:text-lg">
                                    Rp 5.000
                                </p>
                                <a href="http://wa.me/6285161310017?text=Mas+Saya+Mau+Beli+Bakso" className="font-semibold text-base hover:underline">
                                    Bakso Buled
                                </a>
                                <p className="font-normal mt-2 text-xs">
                                    Pt. somebody pleasure
                                </p>
                            </div>
                            </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                    <div className="px-3 py-3 dark:bg-black hover:bg-gray-300 dark:text-white">
                            <div className="w-4/5 m-auto border-2 border-black px-2 py-2 rounded-lg">
                                <img src={tahu} alt="" />
                            </div>
                            <div className="w-4/5 m-auto">
                                <p className="font-semibold text-base lg:text-lg">
                                    Rp 3.000
                                </p>
                                <a href="http://wa.me/6285161310017?text=Mas+Saya+Mau+Beli+Tahu" className="font-semibold text-base hover:underline">
                                    Tahu kaget
                                </a>
                                <p className="font-normal mt-2 text-xs">
                                    ocong_company
                                </p>
                            </div>
                            </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="px-3 py-3  dark:bg-black hover:bg-gray-300 dark:text-white">
                            <div className="w-4/5 m-auto border-2 border-black px-2 py-2 rounded-lg">
                                <img src={bakso} alt="" />
                            </div>
                            <div className="w-4/5 m-auto">
                                <p className="font-semibold text-base lg:text-lg">
                                    Rp 5.000
                                </p>
                                <a href="http://wa.me/6285161310017?text=Mas+Saya+Mau+Beli+Bakso" className="font-semibold text-base hover:underline">
                                    Bakso Buled
                                </a>
                                <p className="font-normal mt-2 text-xs">
                                    Pt. somebody pleasure
                                </p>
                            </div>
                    </div>
                    </SwiperSlide>

                </Swiper>
                </div>
            </div>

        </>
    )
}
