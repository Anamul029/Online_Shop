import { useEffect, useRef, useState } from "react";
import NavItemCard from "./NavItemCard";

const DownNavBar = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const navRef = useRef();

  useEffect(() => {
    fetch("/navbarData.json")
      .then((res) => res.json())
      .then((data) => setMenuItems(data));
  }, []);

  // Hide dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdownIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategoryClick = (index) => {
    setOpenDropdownIndex(index === openDropdownIndex ? null : index);
  };

  const handleSubCategoryClick = (category, subCategory) => {
    const items =
      menuItems
        .find((menu) => menu.title === category)
        ?.subItems?.find((sub) => sub.name === subCategory)?.items || [];
    setSelectedItems(items);
    setOpenDropdownIndex(null); // close dropdown after click
  };

  return (
    <>
      {/* Navigation Bar */}
      <header className="font-[Inter] bg-blue-50 shadow-lg w-full z-50 sticky top-0" ref={navRef}>
        <div className="container flex justify-center mx-auto h-16 items-center">
          <ul className="flex space-x-6">
            {menuItems.map((menu, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => handleCategoryClick(index)}
                  className={`px-4 py-2 font-semibold text-gray-800 ${
                    openDropdownIndex === index ? "border-b-2 border-violet-600" : ""
                  }`}
                >
                  {menu.title}
                </button>

                {/* Dropdown */}
                {openDropdownIndex === index && menu.subItems && (
                  <ul className="absolute left-0 top-full bg-white shadow-md rounded border mt-2 z-50 min-w-[160px]">
                    {menu.subItems.map((sub, subIndex) => (
                      <li key={subIndex} className="hover:bg-gray-100">
                        <span
                          onClick={() =>
                            handleSubCategoryClick(menu.title, sub.name)
                          }
                          className="block px-6 py-2 cursor-pointer text-sm text-gray-800 hover:text-violet-600"
                        >
                          {sub.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Item Cards */}
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {selectedItems.length > 0 ? (
          selectedItems.map((item, idx) => (
            <NavItemCard item={item} idx={idx} key={item.idx || idx} />
          ))
        ) : (
          <div className="col-span-full text-center hidden text-gray-500">
            <p className="text-lg hidden">কোনো আইটেম সিলেক্ট করা হয়নি</p>
          </div>
        )}
      </section>
    </>
  );
};

export default DownNavBar;
