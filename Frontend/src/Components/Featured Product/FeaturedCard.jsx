import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const FeaturedCard = ({ feature }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { _id, name, category, brand, price, stock, image } = feature;

    const handleClick = () => {
        if (user) {
            navigate(`/details/${_id}`);
        } else {
            navigate("/login");
        }
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer w-full md:h-[450px] rounded-lg shadow-lg bg-white hover:shadow-2xl p-4"
        >
            <img src={image} alt="Product" className="w-[90%] mx-auto mt-3 md:h-[180px] rounded" />
            <h3 className="text-gray-700 text-lg text-start font-semibold mt-3">{name}</h3>
            <h3 className="text-gray-700 text-lg text-start font-semibold mt-3">Category: {category}</h3>
            <h3 className="text-gray-700 text-lg text-start font-semibold mt-3">Brand: {brand}</h3>
            <p className="text-red-500 text-xl text-start font-bold mt-2">Price: {price}৳</p>
            <p className="text-red-500 text-xl text-start font-bold mt-2">Stock: {stock}</p>
        </div>
    );
};

export default FeaturedCard;
