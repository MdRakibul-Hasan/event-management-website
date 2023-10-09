import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-slate-950 text-base-content">
  <aside>
    <img className="w-[30%]" src="https://ebook.projectbd.com/wp-content/uploads/2023/10/event-logo-white-bg-remove.png" alt="" />
    <p className=" text-white ">Event Ltd.<br/>A social event company since 2000</p>
  </aside> 
  <nav>
    <header className="footer-title text-white">Services</header> 

    
    <Link to="/login"><a className="link link-hover text-white">Login</a></Link> 
    <Link to="/register"><a className="link link-hover text-white">Register</a></Link> 
    <Link to="/event"><a className="link link-hover text-white">Event</a></Link> 
    
  </nav> 
  <nav>
    <header className="footer-title text-white">Company</header> 
    <Link to="/about-us"><a className="link link-hover text-white">About us</a></Link> 
    {/* <Link to="/login"><a className="link link-hover text-white">Contact</a></Link>  */}
    <Link to="/getquote"><a className="link link-hover text-white">Get a Quote</a></Link> 
    
  </nav> 
  <nav>
    <header className="footer-title text-white">Legal</header> 
    <Link to="/terms"><a className="link link-hover text-white">Terms of use</a></Link> 
    <Link to="/privacy"><a className="link link-hover text-white">Privacy policy</a></Link> 
    
  </nav>
</footer>
    );
};

export default Footer;