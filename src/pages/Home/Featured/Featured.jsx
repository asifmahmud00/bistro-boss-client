import SecctionTitle from "../../../components/SectionTitle/SecctionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SecctionTitle subHeading="check it out" heading="Featured Item"></SecctionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where Can I get Some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex est, labore vel quidem numquam officiis eveniet veniam, ipsam ullam odio sed dolor repellendus aut eos. Fugiat fuga maiores dolorem accusamus?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>

            </div>
        </div>
    );
};

export default Featured;