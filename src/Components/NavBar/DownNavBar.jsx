
// const DownNavBar = () => {
//     return (
//         <header className="p-4 bg-blue-50 shadow-lg w-full z-50   dark:text-gray-800">
//             <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
//                 <ul className="items-stretch hidden space-x-3 md:flex">
//                     <li className="flex">
//                         <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
//                     </li>
//                     <li className="flex">
//                         <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
//                     </li>
//                     <li className="flex">
//                         <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Link</a>
//                     </li>
//                     <li className="flex">
//                         <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
//                     </li>
//                     <li className="flex">
//                         <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
//                     </li>
//                     <li className="flex">
//                         <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
//                     </li>
//                 </ul>
//             </div>
//         </header>
//     );
// };

// export default DownNavBar;
import React from "react";

const DownNavBar = () => {
    return (
        <header className="p-4 bg-blue-50 shadow-lg w-full z-50 dark:text-gray-800">
            <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
                <ul className="items-stretch hidden space-x-3 md:flex">
                    {["Desktop", "Laptop", "Monitor", "Phone", "Tablet", "Camera"].map((link, index) => (
                        <li key={index} className="relative group flex">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-violet-600"
                            >
                                {link}
                            </a>
                            {/* Dropdown Menu */}
                            <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg border rounded-md pr-8 mt- z-50">
                                {["Option 1", "Option 2", "Option 3"].map((item, idx) => (
                                    <li key={idx} className="hover:bg-gray-100">
                                        <a
                                            href="#"
                                            className="block px-8 py-2 text-gray-700 hover:text-violet-600"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default DownNavBar;
