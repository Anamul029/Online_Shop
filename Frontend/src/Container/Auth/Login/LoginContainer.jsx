import React from 'react'

const LoginContainer = ({}) => {
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
    <Login handleLogin={handleLogin}   f />
  )
}

export default LoginContainer
