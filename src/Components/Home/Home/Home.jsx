
import OfferSlider from "../OfferSlider/OfferSlider";
import Fetured_Category from "./Featured_category/Fetured_Category";

const Home = () => {
    return (
        <div>
            <OfferSlider></OfferSlider>
            <div className="bg-white shadow-md shadow-stone-50 py-2 mx-[8%] px-4 rounded-3xl h-10 my-6">
                <marquee direction="">19th December Thursday, all outlets are open. Additionally, our online activities are open and operational.</marquee>
            </div>
            <Fetured_Category></Fetured_Category>
        </div>
    );
};

export default Home;