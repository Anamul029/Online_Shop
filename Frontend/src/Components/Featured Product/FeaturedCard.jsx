
const FeaturedCard = ({feature}) => {
    const {name,category,brand,price,stock,image,specs}=feature;
    // console.log(feature);
    return (
        <button>
              <div className="w-full md:h-[450px] rounded-lg shadow-lg bg-white hover:shadow-2xl p-4">
                    {/* <span className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">Earn Point: 450</span> */}
                    <img src={image} alt="Product Image" className="w-[90%] mx-auto mt-3 md:h-[180px] rounded" />
                    <h3 className="text-gray-700 text-lg text-start font-semibold mt-3">{name}</h3>
                    <h3 className="text-gray-700 text-lg text-start font-semibold mt-3">Category:{category}</h3>    
                    <h3 className="text-gray-700 text-lg text-start font-semibold mt-3">Brand:{brand}</h3>    
                    <p className="text-red-500 text-xl text-start font-bold mt-2">Price:{price}৳</p>
                    <p className="text-red-500 text-xl text-start font-bold mt-2">Stock:{stock}</p>
                </div>
        </button>
    );
};

export default FeaturedCard;