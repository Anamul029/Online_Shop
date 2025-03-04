import { useState } from "react";
import FeaturedCard from "./FeaturedCard";
import { useEffect } from "react";

const FeaturedProduct = () => {
    const [Featured,setFeaturedCard]=useState([])
    useEffect(()=>{
        fetch('../../../public/featuredProduct.json')
        .then(res=>res.json())
        .then(data=>setFeaturedCard(data))
    },[])
    return (
        <div>
            <div className="text-center">
                <h1 className="text-2xl font-semibold">Featured Products</h1>
                <p>Check & Get Your Desired Product!</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-[8%] my-4 mx-auto">
               {
                Featured.map(feature=><FeaturedCard feature={feature} key={feature.id}></FeaturedCard>)
               }
            </div>
        </div>
    );
};

export default FeaturedProduct;