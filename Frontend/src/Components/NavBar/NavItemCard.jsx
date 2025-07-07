import React from 'react';
import { Link } from 'react-router-dom';

const NavItemCard = ({ item, idx }) => {
    const handleReload = e => {
        e.preventDefault();
        window.location.reload()
    }
    return (
        <button onClick={handleReload}>
            <Link to="/checkout"  >
                <div
                    key={idx}
                    className="bg-white border rounded-lg p-4 shadow-md transition hover:shadow-lg"
                >
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover rounded mb-3"
                    />
                    <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                    <p className="text-gray-700">Brand: {item.brand}</p>
                    <p className="text-gray-700">Price: ৳{item.price}</p>
                    <p className="text-gray-700">
                        Stock:{" "}
                        <span
                            className={
                                item.stock ? "text-green-600" : "text-red-500 font-semibold"
                            }
                        >
                            {item.stock ? "Available" : "Out of Stock"}
                        </span>
                    </p>
                </div>
            </Link > 
        </button>
    );
};

export default NavItemCard;