import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Services/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

const handleSignOut = () => {
  logOut()
  .then(result => {
    const notify2 = () => toast.success('Your Sign Out is Successful', {
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
  .catch()

  // akahne task baki amar optional
}

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };




    return (
<div>
<ToastContainer />

<nav className="bg-black bg-opacity-70 fixed top-0 w-full z-10">
      <div className="container mx-auto py-2">
        <div className="flex items-center justify-between">
         
          <div> <Link to="/"><img className="w-[30%]" src="https://ebook.projectbd.com/wp-content/uploads/2023/10/event-logo-white-bg-remove.png" alt="" /></Link> </div>

         
          <div className="hidden md:flex space-x-4">

          <NavLink to="/" className={({isActive, isPending}) =>
isPending ? "pending" : isActive ? "text-blue-400 font-bold" : "text-white"}>Home</NavLink>

            <NavLink to="/event" className={({isActive, isPending}) =>
isPending ? "pending" : isActive ? "text-blue-400 font-bold" : "text-white"}>My Event</NavLink>
                        
            <NavLink to="/getquote" className={({isActive, isPending}) =>
isPending ? "pending" : isActive ? "text-blue-400 font-bold" : "text-white"}>Get Quote</NavLink>

          </div>

         
          {
 user ? 
<Link onClick={handleSignOut} to="/login" className="hidden md:block bg-white text-black py-1 px-3 rounded-full mt-1 hover:bg-slate-200">Sign Out</Link>
    :
 <Link to="/login" className="hidden md:block bg-white text-black py-1 px-3 rounded-full mt-1 hover:bg-slate-200">Login</Link>

 }

         
  <div className="md:hidden">
    <button
      onClick={toggleMobileMenu}
      className="text-white focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor"
      >
        <path
          strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
</div>


        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <NavLink to="/" className={({isActive, isPending}) =>
isPending ? "pending" : isActive ? "text-blue-400 font-bold" : "text-white"}>Home</NavLink>
<br />
            <NavLink to="/event" className={({isActive, isPending}) =>
isPending ? "pending" : isActive ? "text-blue-400 font-bold" : "text-white"}>My Event</NavLink>
   <br />                     
            <NavLink to="/getquote" className={({isActive, isPending}) =>
isPending ? "pending" : isActive ? "text-blue-400 font-bold" : "text-white"}>Get Quote</NavLink>

<br />
          {
 user ? 
<Link onClick={handleSignOut} to="/login" className="bg-white text-black py-1 px-4 rounded-full mt-2">Sign Out</Link>
    :
 <Link to="/login" className="bg-white text-black py-1 px-4 rounded-full mt-2">Login</Link>

 }



        </div>
      </div>
    </nav>




</div>




    )};
 

export default Navbar;