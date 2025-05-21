import { useState } from "react";
import { FaFireAlt } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white font-[Inter] w-full px-4 md:px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-bold">
          Electro<span className="text-green-700">Solutions</span>
        </Link>

        {/* Search Bar (Visible on Medium & Large Screens) */}
        <div className="hidden lg:flex relative w-[40%]">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full px-4 py-2 rounded-lg pl-10 bg-gray-900 border-gray-700 text-white"
          />
          <AiOutlineSearch className="absolute left-3 top-3 text-gray-500 text-lg" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {/* <button className="flex items-center gap-1 hover:text-green-500">
            <IoBagCheck className="text-2xl" />
            <span className="font-semibold hidden lg:block">Offers</span>
          </button> */}
          <Link to='/specialdeal' className="flex items-center gap-1 hover:text-green-500">
            <FaFireAlt className="text-2xl" />
            <span className="font-semibold hidden mt-4 lg:block">Happy Hour <br /><span className="text-xs">special deal</span></span>
          </Link>
          <Link to="/login" className="flex items-center gap-1 hover:text-green-500">
            <MdAccountCircle className="text-2xl" />
            <span className="font-semibold hidden lg:block">Account</span>
          </Link>
          <button className="btn btn-primary uppercase">PC Builder</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? "block" : "hidden"
          } md:hidden mt-4 space-y-4 text-center transition-all duration-300 ease-in-out`}
      >
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full px-4 py-2 rounded-lg pl-10 bg-gray-900 border-gray-700 text-white"
          />
          <AiOutlineSearch className="absolute left-3 top-3 text-gray-500 text-lg" />
        </div>
        <button className="flex items-center justify-center gap-1 hover:text-green-500 w-full">
          <IoBagCheck className="text-2xl" />
          <span className="font-semibold">Offers</span>
        </button>
        <button className="flex items-center justify-center gap-1 hover:text-green-500 w-full">
          <FaFireAlt className="text-2xl" />
          <span className="font-semibold">Laptop Mela</span>
        </button>
        <Link to="/login" className="flex items-center justify-center gap-1 hover:text-green-500 w-full">
          <MdAccountCircle className="text-2xl" />
          <span className="font-semibold">Account</span>
        </Link>
        <button className="btn btn-primary uppercase w-full">PC Builder</button>
      </div>
    </nav>
  );
};

export default NavBar;
