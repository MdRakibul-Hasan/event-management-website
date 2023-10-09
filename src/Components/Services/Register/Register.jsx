import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    

const handleRegister = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

if (password.length < 6){
    const notify3 = () => toast.error('The password is less than 6 characters', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    notify3();
    return;
}

else if(!/[A-Z]/.test(password)){
    const notify5 = () => toast.error("The password don't have a capital letter", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    notify5();
    return;
}
else if(!/[@!#$%*&]/.test(password)){
  const notify5 = () => toast.error("The password don't have a special character", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  notify5();
  return;
}




createUser(email, password)
    .then(result => {
        const notify2 = () => toast.success('Congratulation, Your registration is Successful', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        console.log(result.user);
        notify2();
        navigate(location?.state ? location.state : '/');

    })
    .catch( error => {
        const notify = () => toast.error(error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        console.log(error);
        notify();
        
    })

}


    return (
      <div
      className="bg-cover min-h-screen flex items-center justify-center"
      style={{ backgroundImage: 'url(https://ebook.projectbd.com/wp-content/uploads/2023/10/Aniversary-big.jpg)' }}>
      <ToastContainer />
      <div className="bg-black bg-opacity-40 p-4 my-24 sm:p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-3xl text-white font-semibold mb-4 mt-2 text-center">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-white">
              Email
            </label>
            <input
              type="email" id="email" name="email"
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="email" required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">
              Password
            </label>
            <input
              type="password" id="password" name="password"
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="password" required />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white w-full px-4 py-2 rounded hover:bg-blue-600"
            >Register </button>
            
          <p className="text-center m-1 text-white ">Already have an account, <Link to="/login" className="text-blue-500 font-bold">
      Login</Link></p>
         

          </div>
        </form>
      </div>

            {/* <div className="min-h-screen bg-base-200"> */}
            {/* <h2 className="text-3xl my-8 text-center">Register now</h2>
  <div className="hero-content min-h-screen bg-base-100">

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <form onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <button className="btn btn-primary">Register</button>
        </div>
        
        </form>
        <p className="text-center mt-4">Already have an account, <Link to="/login" className="text-blue-500 font-bold">
      Login</Link></p>
        </div>
      

 
    </div>
  </div> */}
 </div>
        
    );
};

export default Register;