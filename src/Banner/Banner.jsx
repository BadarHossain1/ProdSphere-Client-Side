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

                    <p className="text-3xl  md:text-6xl  font-extrabold font-Montserrat text-[#fff]">Check Out The Queries</p>

                    {/* <Link to='/' className="btn btn-ghost bg-gradient-to-r from-cyan-500 to-blue-500 text-white mt-6">All Queries</Link> */}
                    <Link to='/' className="group relative inline-block focus:outline-none focus:ring bg-transparent text-white mt-6" href="#">
                        <span
                            className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                        ></span>

                        <span
                            className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-75"
                        >
                            All Queries
                        </span>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Banner;