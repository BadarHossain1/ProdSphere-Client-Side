
import Slider from "../Banner/Slider";
import Banner from "../Banner/Banner";
import Stats from "../Stats/Stats";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
    return (
        <div>

            <div className="">
                <Slider></Slider>
            </div>
            <div className="mt-[50px]">
            <Banner></Banner>
            </div>
            <div className="mt-[50px]">
                <Stats></Stats>
            </div>
            <div className="">
                <Testimonials></Testimonials>
            </div>

        </div>
    );
};

export default Home;