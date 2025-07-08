import Swal from "sweetalert2";

const PostData = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = {
            id: form.id.value,
            name: form.name.value,
            category: form.category.value,
            brand: form.brand.value,
            price: form.price.value,
            stock: form.stock.value,
            image: form.image.value,
        };

              // cart data post
                 fetch('https://electro-server-nine.vercel.app/featuredProduct', {
                     method: 'POST',
                     headers: {
                         'content-type': 'application/json'
                     },
                     body: JSON.stringify(data)
                 })
                     .then(res => res.json())
                     .then(data => {
                         console.log(data)
                         if (data.acknowledged === true) {
                             Swal.fire({
                                 position: "top-end",
                                 icon: "success",
                                 title: "Successfully Data Added to the Database",
                                 showConfirmButton: false,
                                 timer: 1500
                             });
                         }
                          window.location.reload();
                     })
                        
    }
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-100 to-indigo-100 flex items-center justify-center px-4">
                <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-2xl">
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                        Add Product Information
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* ID */}
                        <div>
                            <label htmlFor="id" className="block text-sm font-medium text-gray-600">
                                Product ID
                            </label>
                            <input
                                type="number"
                                id="id"
                                name="id"
                                defaultValue="7"
                                readOnly
                                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 text-gray-700 shadow-sm focus:outline-none"
                            />
                        </div>

                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                                Product Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                defaultValue="Cooler Master MWE 650W 80+ Bronze Power Supply"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-600">
                                Category
                            </label>
                            <input
                                type="text"
                                id="category"
                                name="category"
                                defaultValue="Power Supply"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            />
                        </div>

                        {/* Brand */}
                        <div>
                            <label htmlFor="brand" className="block text-sm font-medium text-gray-600">
                                Brand
                            </label>
                            <input
                                type="text"
                                id="brand"
                                name="brand"
                                defaultValue="Cooler Master"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            />
                        </div>

                        {/* Price */}
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-600">
                                Price (BDT)
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                defaultValue="7000"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            />
                        </div>

                        {/* Stock */}
                        <div>
                            <label htmlFor="stock" className="block text-sm font-medium text-gray-600">
                                Stock Quantity
                            </label>
                            <input
                                type="number"
                                id="stock"
                                name="stock"
                                defaultValue="12"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            />
                        </div>

                        {/* Image */}
                        <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-600">
                                Image (Base64)
                            </label>
                            <textarea
                                id="image"
                                name="image"
                                rows="4"
                                defaultValue="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAA..."
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            ></textarea>
                        </div>

                        {/* Submit */}
                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-200"
                            >
                                Submit Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    export default PostData;