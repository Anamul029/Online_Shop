import { Link, useLoaderData } from "react-router-dom";
import ItemCard from "./ItemCard";

const ShopCart = () => {
    const cartInformation = useLoaderData();
    console.log(cartInformation);
    let total = 0;
    // total price count
    cartInformation.forEach(product => {
        total += product.price;
    });
    console.log(total);
    return (
        <div className="mx-auto flex justify-center bg-blue-100">
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <h2 className="text-xl font-semibold">Your cart</h2>
                {/* all shoping cart item */}
                <ul className="flex border-2 border-b-black flex-col divide-y divide-gray-500">
                   {
                    cartInformation.map(item=><ItemCard item={item} key={item._id}></ItemCard>)
                   }
                   
                </ul>
                <div className="space-y-1 text-right">
                    <p className="font-semibold text-green-700">Total Payable amount:
                        <span className="font-semibold">{total}</span>
                    </p>
                    <p className="text-sm dark:text-gray-600">Not including taxes and shipping costs</p>
                </div>
                <div className="flex justify-end space-x-4">
                    <Link to="/" type="button" className="px-6 bg-blue-400 py-2 border rounded-md dark:border-violet-600">Back
                        <span className="sr-only sm:not-sr-only ">to shop</span>
                    </Link>
                    <Link to='/checkout' type="button" className="px-6 py-2 border bg-green-400 rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600">
                        <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;