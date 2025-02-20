import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const navigate=useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const first = e.target.firstname.value;
        const last = e.target.lastname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const info = { first, last, email, password };
        console.log(info);
        // register auth here
        createUser(email, password)
        .then(res=>{
            console.log(res.user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Succesfully User Created",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/')
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div className="flex justify-center bg-[#ffffff]">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-bl">
                <h1 className="text-2xl font-bold text-center">Account Register</h1>
                <form onSubmit={handleRegister} className="space-y-4">
                    <div className="flex gap-[5px]">
                        <div className="space-y-1 text-sm">
                            <label className="block dark:text-gray-600">First Name</label>
                            <input type="text" name="firstname" placeholder="First name" className="w-full bg-green-50 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block dark:text-gray-600">Last Name</label>
                            <input type="text" name="lastname" placeholder="Last name" className="w-full bg-green-50 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Email</label>
                        <input type="text" name="email" id="username" placeholder="Email" className="w-full bg-green-50 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Phone Number</label>
                        <input type="text" name="password" placeholder="Phone number" className="w-full bg-green-50 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>
                    <button className="block btn btn-primary w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600" >Register</button>
                </form>

                <p className="text-xs text-center md:text-[15px] sm:px-6 dark:text-gray-600">Already have an account?
                    <Link to='/login' className="block btn md:mt-4 w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600" >Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;