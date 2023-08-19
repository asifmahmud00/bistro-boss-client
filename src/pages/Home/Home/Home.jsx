import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testtimonials from "../Testimonials/Testtimonials";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>

            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testtimonials></Testtimonials>
        </div>
    );
};

export default Home;