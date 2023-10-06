import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Services/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

const handleSignOut = () => {
  logOut()
  .then()
  .catch()
}

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-52">
        {/* <li><NavLink to="/">Home</NavLink></li> */}
        <li><NavLink to="/" className={({isActive, isPending}) =>
isPending ? "pending" : isActive ? "text-blue-600 font-bold" : ""}>Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        
      </ul>
    </div>
    <img className="w-[40%]" src="/src/assets/event logo bg remove.png" alt="" />
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to="/" className={({isActive, isPending}) =>
isPending ? "pending" : isActive ? "text-blue-600" : ""}>Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    
{
    user ? 
<Link onClick={handleSignOut} to="/login" className="py-1 px-3 text-sm font-normal text-white  rounded-lg bg-slate-800 hover:bg-slate-400">Sign Out</Link>
    :
<Link to="/login" className="py-1 px-3 text-sm font-normal text-white  rounded-lg bg-slate-800 hover:bg-slate-400">Login</Link>

}

  </div>
</div>
        </div>
    );
};

export default Navbar;