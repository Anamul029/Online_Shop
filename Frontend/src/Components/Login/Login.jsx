import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const password = e.target.password.value;
  
      // login 
      signIn(name, password)
        .then(res => {
          console.log(res.user);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Succesfully Logged In",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/')
        })
        .catch(error => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong",
          });
        })
    }
    return (
        <div className="flex font-[Inter] justify-center bg-[#ffffff]">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-bl">
                <h1 className="text-2xl font-bold text-center">Account Login</h1>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Email</label>
                        <input type="text" name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        <div className="flex justify-end text-xs dark:text-gray-600">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block btn btn-primary w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600" >Login</button>
                </form>
                <p className="text-xs text-center md:text-[15px] sm:px-6 dark:text-gray-600">Don't have an account?
                    <Link to='/register' className="block btn md:mt-4 w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600" >Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;