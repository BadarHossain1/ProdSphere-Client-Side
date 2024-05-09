
import Slider from "../Banner/Slider";
import Banner from "../Banner/Banner";



const Home = () => {
    return (
        <div>

            <div className="mt-6">
                <Slider></Slider>
            </div>
            <div className="mt-[50px]">
            <Banner></Banner>
            </div>

        </div>
    );
};

export default Home;