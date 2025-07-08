import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const CheckoutPage = () => {
    const { user } = useContext(AuthContext);
  const handlePayment = (e) => {
  e.preventDefault();

  fetch('https://electro-server-nine.vercel.app/payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user), // or cart data
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.url) {
        window.location.href = data.url; // ✅ Manual redirect to SSLCommerz
      } else {
        console.error("No URL found in response", data);
      }
    })
    .catch((error) => {
      console.error("Payment error:", error);
    });
};

    return (
        <section className="p-6 bg-gradient-to-r from-violet-100 to-indigo-100 min-h-screen">
            <form
                noValidate
                action=""
                className="container max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-12"
            >
                <fieldset className="grid grid-cols-4 gap-6">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <h2 className="text-xl font-semibold text-indigo-600">Checkout Page</h2>
                        <p className="text-sm text-gray-600">
                            Please provide your contact and shipping details.
                        </p>
                    </div>

                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-medium text-gray-700">First Name</label>
                            <input
                                id="firstname"
                                type="text"
                                defaultValue={user?.displayName}
                                disabled
                                className="w-full px-4 py-2 mt-1 rounded-md border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                defaultValue={user?.email}
                                disabled
                                className="w-full px-4 py-2 mt-1 rounded-md border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="text-sm font-medium text-gray-700">Address</label>
                            <input
                                id="address"
                                type="text"
                                placeholder="123 Main Street"
                                className="w-full px-4 py-2 mt-1 rounded-md border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-sm font-medium text-gray-700">Currency</label>
                            <input
                                id="currency"
                                type="text"
                                placeholder="BDT"
                                className="w-full px-4 py-2 mt-1 rounded-md border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm font-medium text-gray-700">State / Province</label>
                            <input
                                id="state"
                                type="text"
                                placeholder="Division"
                                className="w-full px-4 py-2 mt-1 rounded-md border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="zip" className="text-sm font-medium text-gray-700">ZIP / Postal</label>
                            <input
                                id="zip"
                                type="text"
                                placeholder="1205"
                                className="w-full px-4 py-2 mt-1 rounded-md border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>
                </fieldset>

                <div className="text-right">
                    <button
                        onClick={handlePayment}
                        type="submit"
                        className="px-6 py-3 text-white font-semibold bg-indigo-600 hover:bg-indigo-700 rounded-md transition duration-300"
                    >
                        Pay
                    </button>
                </div>
            </form>
        </section>
    );
};

export default CheckoutPage;
