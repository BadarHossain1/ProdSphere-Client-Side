import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter'


// import styles bundle
import 'swiper/css/bundle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Slider = () => {
    return (
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
            className="mySwiper max-w-[1170px] mx-auto rounded-lg h-[550px]"
        >
            <SwiperSlide><div className="hero max-w-[1170px] mx-auto rounded-lg h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/sgt19Nk/banner-3.jpg)' }}>


                <div className="hero-overlay bg-opacity-50 rounded-lg"></div>
                <div className="z-0 flex w-[95%] text-center space-y-6 gap-4 p-2 rounded-lg" >

                    <div className="">

                        <p className="text-3xl  md:text-7xl  font-extrabold font-Montserrat text-[#fff]">Alternative Product  Solutions</p>
                        <p className="text-sm  md:text-sm  font-semibold font-Montserrat text-[#fff] w-1/2 mx-auto mt-5">Welcome to our platform, where you can explore a world of alternative products. From ethically sourced fashion to renewable energy solutions, we provide a diverse array of alternatives to traditional goods. Join us in discovering sustainable choices for a brighter future.</p>

                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="hero max-w-[1170px] mx-auto rounded-lg h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/RBftThQ/banner-1.jpg)' }}>


                <div className="hero-overlay bg-opacity-50 rounded-lg"></div>
                <div className="z-0 flex w-[90%] text-center gap-4 p-2 rounded-lg" >

                    <div className="">
                        {/* <p className="text-4xl  md:text-7xl  font-extrabold font-playfair-display text-[#fff]" > Explore <Typewriter
                            cursor
                            cursorBlinking
                            delaySpeed={1000}
                            deleteSpeed={25}
                            loop={0}
                            typeSpeed={75}
                            cursorColor="blue"


                            words={[
                                'Bangladesh',
                                'Thailand',
                                'Indonesia',
                                'Malaysia',
                                'Vietnam',
                                'Cambodia'
                            ]}
                        /> <br />With Us </p> */}
                        <p className="text-3xl  md:text-7xl  font-extrabold font-Montserrat text-[#fff]">Alternative Product Solutions</p>
                        <p className="text-sm  md:text-sm  font-semibold font-Montserrat text-[#fff] w-1/2 mx-auto mt-5">Welcome to our platform, where you can explore a world of alternative products. From ethically sourced fashion to renewable energy solutions, we provide a diverse array of alternatives to traditional goods. Join us in discovering sustainable choices for a brighter future.</p>

                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="hero max-w-[1170px] mx-auto rounded-lg h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/k2Mzx5Y/banner-2.jpg)' }}>


                <div className="hero-overlay bg-opacity-50 rounded-lg"></div>
                <div className="z-0 flex w-[90%] text-center gap-4 p-2 rounded-lg" >

                    <div className="">

                        <p className="text-3xl  md:text-7xl  font-extrabold font-Montserrat text-[#fff]">Alternative Product Solutions</p>
                        <p className="text-sm  md:text-sm  font-semibold font-Montserrat text-[#fff] w-1/2 mx-auto mt-5">Welcome to our platform, where you can explore a world of alternative products. From ethically sourced fashion to renewable energy solutions, we provide a diverse array of alternatives to traditional goods. Join us in discovering sustainable choices for a brighter future.</p>

                    </div>
                </div>
            </div></SwiperSlide>




        </Swiper>
    );
};

export default Slider;