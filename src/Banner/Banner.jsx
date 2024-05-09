import { Link } from "react-router-dom";


const Banner = () => {
    return (
        // <div>
        //     <div className="carousel-item relative max-w-[1170px] mx-auto">
        //         <img src="https://i.ibb.co/d2RZRZz/tiny-banner.jpg" className=" w-full h-[300px] mt-[60px]" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

        //         </div>
        //     </div>
        // </div>

        <div className="hero max-w-[1170px] mx-auto h-[300px]" style={{ backgroundImage: 'url(https://i.ibb.co/d2RZRZz/tiny-banner.jpg)' }}>


            <div className="hero-overlay bg-opacity-50  "></div>
            <div className="z-0 flex w-[90%]  text-center space-y-6 gap-4 p-2 rounded-lg" >

                <div className="mx-auto">

                    <p className="text-3xl  md:text-7xl  font-extrabold font-Montserrat text-[#fff]">Check Out The Queries</p>
                    <Link to='/' className="btn btn-ghost bg-gradient-to-r from-cyan-500 to-blue-500 text-white mt-4">All Queries</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;