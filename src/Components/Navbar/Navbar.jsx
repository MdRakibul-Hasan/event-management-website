import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Services/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

const handleSignOut = () => {
  logOut()
  .then()
  .catch()

  // akahne task baki amar optional
}

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };




    return (
<div>

<nav className="bg-black bg-opacity-75 fixed top-0 w-full z-10">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <div className="text-white text-lg font-bold">Logo</div>

          {/* Menu items in the middle */}
          <div className="hidden md:flex space-x-4">

          <NavLink to="/" className={({isActive, isPending}) =>
isPending ? "pending" : isActive ? "text-blue-400 font-bold" : "text-white"}>Home</NavLink>



            {/* <a href="#" className="text-white">
              Menu 1
            </a> */}
            <a href="#" className="text-white">
              Menu 2
            </a>
            <a href="#" className="text-white">
              Menu 3
            </a>

          </div>

         
          {
 user ? 
<Link onClick={handleSignOut} to="/login" className="bg-white text-black py-2 px-4 rounded-full mt-4 hover:bg-slate-200">Sign Out</Link>
    :
 <Link to="/login" className="bg-white text-black py-2 px-4 rounded-full mt-4 hover:bg-slate-200">Login</Link>

 }

          {/* Mobile menu button (shown on small screens) */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>


        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="block text-white py-2">
            Menu 1
          </a>
          <a href="#" className="block text-white py-2">
            Menu 2
          </a>
          <a href="#" className="block text-white py-2">
            Menu 3
          </a>


          {
 user ? 
<Link onClick={handleSignOut} to="/login" className="bg-white text-black py-2 px-4 rounded-full mt-4">Sign Out</Link>
    :
 <Link to="/login" className="bg-white text-black py-2 px-4 rounded-full mt-4">Login</Link>

 }



        </div>
      </div>
    </nav>




</div>




    )};
 

export default Navbar;