import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaFireAlt } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { MdAccountCircle, MdDashboard } from "react-icons/md";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully user Logout",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <nav className="bg-black text-white font-[Inter] w-full px-4 md:px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-bold">
          Electro<span className="text-green-700">Solutions</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/specialdeal" className="flex items-center gap-1 hover:text-green-500">
            <FaFireAlt className="text-2xl" />
            <span className="font-semibold hidden mt-4 lg:block">
              Happy Hour <br />
              <span className="text-xs">special deal</span>
            </span>
          </Link>

          {user ? (
            <button onClick={handleLogout} className="flex items-center gap-1 hover:text-green-500">
              <MdAccountCircle className="text-2xl" />
              <span className="font-semibold hidden lg:block">Logout</span>
            </button>
          ) : (
            <Link to="/login" className="flex items-center gap-1 hover:text-green-500">
              <MdAccountCircle className="text-2xl" />
              <span className="font-semibold hidden lg:block">Account</span>
            </Link>
          )}

          <Link to="/shopCart" className="btn btn-primary uppercase">
            Shop Cart
          </Link>

          <Link to="/dashboard" className="flex items-center gap-1 hover:text-green-500">
            <MdDashboard className="text-2xl" />
            <span className="font-semibold hidden lg:block">Dashboard</span>
          </Link>
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
        {/* Search */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full px-4 py-2 rounded-lg pl-10 bg-gray-900 border-gray-700 text-white"
          />
          <AiOutlineSearch className="absolute left-3 top-3 text-gray-500 text-lg" />
        </div>

        {/* Menu Items */}
        <Link to="/specialdeal" className="flex items-center gap-1 hover:text-green-500 justify-center">
          <FaFireAlt className="text-2xl" />
          <span className="font-semibold mt-4">Happy Hour</span>
        </Link>

        {user ? (
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 hover:text-green-500 w-full justify-center"
          >
            <MdAccountCircle className="text-2xl" />
            <span className="font-semibold">Logout</span>
          </button>
        ) : (
          <Link
            to="/login"
            className="flex items-center gap-1 hover:text-green-500 w-full justify-center"
          >
            <MdAccountCircle className="text-2xl" />
            <span className="font-semibold">Account</span>
          </Link>
        )}

        <Link to="/shopCart" className="btn btn-primary uppercase w-full">
          Shop Cart
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
