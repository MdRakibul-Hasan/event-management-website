import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// import auth from "../firebase.config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import { AuthContext } from "../AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from "../firebase.config";
const auth = getAuth(app)

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const {handleGoogleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef(null);

    const handleGoogleBtn = ()=>{
      handleGoogleSignIn()
         
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

   .catch(error => {
    console.log('error', error.message);
   })
    }



    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
       
        signIn(email, password)
    
        .then(result => {const notify2 = () => toast.success('Your Login is Successful', {
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
          const notify = () => toast.error("Password or Email dosen't match", {
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
    
const handleForgetPass = () => {
  const email = emailRef.current.value;
  console.log(email);

  if(!email){
    // console.log('Please give me a valid email', emailRef.current.value)

    const notify = () => toast.error("Please give me a valid email", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  notify();

  return;
  }
  else if (!/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/.test(email))
  {
    // console.log('Please write a valid email')

    const notify = () => toast.error("Please write a valid email", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  notify();



    return;
  }

  sendPasswordResetEmail(auth,email)

.then(() => {
  // console.log('please check your email')

  const notify2 = () => toast.success('Please check your email', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
notify2();



})
.catch(error => {
  console.log(error);
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

notify();





})



}

    
        return (
            <div>
                <ToastContainer />
                {/* <div className="min-h-screen bg-base-200"> */}
                <h2 className="text-3xl my-8 text-center">Login now</h2>
      <div className="hero-content flex-col lg:flex-row-reverse pb-32">
    
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" ref={emailRef} name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a onClick={handleForgetPass} href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center m-4">Don't have an account? <Link to="/register" className="text-blue-500 font-bold">
          Register</Link></p>

          <div className="form-control mt-6">
              <button onClick={handleGoogleBtn} className="btn btn-primary">Google login</button>
            </div>
        </div>
      </div>
    
    </div>
            
        );
    };

export default Login;