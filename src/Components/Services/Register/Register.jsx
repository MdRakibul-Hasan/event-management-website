import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    

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
        <div>
            <ToastContainer />
            {/* <div className="min-h-screen bg-base-200"> */}
            <h2 className="text-3xl my-8 text-center">Register now</h2>
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
  </div>
 </div>
        
    );
};

export default Register;