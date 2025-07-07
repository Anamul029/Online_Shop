import { FaBook, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { FaCarTunnel, FaNoteSticky } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
// import UseRoll from "../Hooks/UseRoll";

const DashBoard = () => {
    const role=true;
    // const [role] = UseRoll();
    console.log('heelo');
    console.log(role)
        return (
            <div className="flex flex-col md:flex-row">
               
                <div className="md:w-64 min-h-screen bg-blue-400">
                    <ul className="menu">
                        <>
                          
                            <li><NavLink to="/dashboard">
                                <FaUtensils></FaUtensils>
                                Make Post</NavLink></li>
                           
                            {/* <li><NavLink to="/dashboard">
                                <FaBook></FaBook>
                                Agreement Request</NavLink></li> */}
                          
                        </>

                        {/* divider */}
                        <div className="divider"></div>
                        <li><NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink></li>

                    </ul>
                </div>
                <div className="flex-1 p-4">
                    <Outlet></Outlet>
                </div>
            </div>
        );
   
};

export default DashBoard;