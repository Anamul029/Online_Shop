import { FaFireAlt } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar font-[Inter]  w-[100%] px-[8%] bg-black py-5">
            <div className="flex-1 items-center justify-center flex pr-8">
                <a className="btn btn-ghost text-3xl text-white">Electro<span className="text-green-700">Solutions</span></a>
                <input type="text" placeholder="Search" className="input input-bordered w-[70%]" />
            </div>
            <div className="flex-none  text-white gap-10">
                <button className="flex items-center gap-1">
                    <IoBagCheck className="text-3xl " />
                    <h1 className="font-semibold">Offers</h1>
                </button>
                <button className="flex items-center gap-1">
                <FaFireAlt
                className="text-3xl" />
                    <h1 className="font-semibold">Laptop Mela</h1>
                </button>
                <Link to='/login' className="flex items-center gap-1">
                    <MdAccountCircle
                        className="text-3xl" />
                    <h1 className="font-semibold">Account</h1>
                </Link>
                  <button className="btn btn-primary uppercase">Pc Builder</button>
            </div>
        </div>
    );
};

export default NavBar;