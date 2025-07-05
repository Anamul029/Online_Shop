import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const FeaturedDetail = () => {
    const information = useLoaderData()
    const { _id } = useParams();
    const { user } = useContext(AuthContext)
    const userName = user.displayName;
    const userEmail = user.email;
    console.log(userName, userEmail);
    const info = information.filter(info => info._id === _id)
    // console.log(info);
    const [{ name, category, brand, price, stock, image, specs }] = info;
    const cartInformation = { userName, userEmail, name, category, brand, price, image }

    // handleAddCart
    const handleAddCart = e => {
        e.preventDefault();
        // cart data post
        fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartInformation)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully Data Added to the cart",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className="min-h-screen mx-auto w-[80%] py-[5%]">
            <h1 className="text-xl font-semibold text-center pb-6">Detail Information for this product</h1>
            <div className="flow-root bg-blue-100">
                <dl
                    className="-my-3 p-10 divide-y divide-gray-300 rounded border border-gray-200 text-sm *:even:bg-gray-50"
                >
                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Product Name</dt>

                        <dd className="text-gray-700 sm:col-span-2">{name}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Brand</dt>

                        <dd className="text-gray-700 sm:col-span-2">{brand}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Category</dt>

                        <dd className="text-gray-700 sm:col-span-2">{category}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Price</dt>

                        <dd className="text-gray-700 sm:col-span-2">{price}</dd>
                    </div>
                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Stock</dt>

                        <dd className="text-gray-700 sm:col-span-2">{stock}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">About Product</dt>

                        <dd className="text-gray-700 sm:col-span-2">
                            🎯 Best For: Students, professionals, and creatives who need performance on the go.
                        </dd>
                    </div>
                    <div className="py-2 flex gap-2">
                        <button onClick={handleAddCart} className="btn btn-secondary">Add to Cart</button><Link to="/shopCart" className="btn btn-primary">Buy Now</Link>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default FeaturedDetail;