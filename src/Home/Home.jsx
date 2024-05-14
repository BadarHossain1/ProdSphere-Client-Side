
import Slider from "../Banner/Slider";
import Banner from "../Banner/Banner";
import Stats from "../Stats/Stats";
import Testimonials from "../Testimonials/Testimonials";
import Cards from "../Cards/Cards";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const Home = () => {
    return (
        <div>

            <div className="">
                <Slider></Slider>
            </div>
            <div className="mt-[50px]">
            <Banner></Banner>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className="mt-[50px]">
                <Cards></Cards>
            </div>
            <div data-aos="fade-right" data-aos-duration="3000" className="mt-[50px]">
                <Stats></Stats>
            </div>
            <div data-aos="fade-left" data-aos-duration="3000" className="">
                <Testimonials></Testimonials>
            </div>

        </div>
    );
};

export default Home;