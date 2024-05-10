
import Slider from "../Banner/Slider";
import Banner from "../Banner/Banner";
import Stats from "../Stats/Stats";
import Testimonials from "../Testimonials/Testimonials";
import Cards from "../Cards/Cards";



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
                <Cards></Cards>
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