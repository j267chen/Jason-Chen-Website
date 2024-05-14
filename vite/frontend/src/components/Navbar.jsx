import { NavLink, useLocation } from "react-router-dom";

import {EXTRA_LINKS} from "../constants";

import { github, linkedin} from "../assets/icons";


// navbar
const Navbar = () => {

  
  return (
    <header className="header">
      <NavLink to="/" className="">
      </NavLink>
      <nav className="flex text-lg gap-3 font-medium items-center justify-center">

        
      <NavLink to="/about" className={({isActive}) => isActive ? "w-24 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md" : "w-24 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"}>
          About
      </NavLink>
      <NavLink to="/projects" className={({isActive}) => isActive ? "w-28 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md" : "w-28 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"}>
          Projects
      </NavLink>

{/*

the current problem is that this nav bar is universal.
2
i want this one for home page and contact
but a custom one for when im in about or projects

const location = useLocation();
const isAboutPage = location.pathname === '/about';


    <nav className="flex text-lg gap-3 font-medium items-center justify-center">
      <NavLink
        to="/about"
        className="w-24 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        {isAboutPage ? 'Projects' : 'About'}
      </NavLink>
      
*/}

      <NavLink
          className = "w-14 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
          to={EXTRA_LINKS.github}
          target="_blank"
          rel="noreferrer noopener"
          title="GitHub"
        >
          <img src={github} alt="GitHub" className="w8 h-8 object-contain" />
      </NavLink>
      <NavLink
          className = "w-14 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
          to={EXTRA_LINKS.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          title="LinkedIn"
        >
          <img src={linkedin} alt="LinkedIn" className="w8 h-8 object-contain" />
      </NavLink>
      </nav>

    </header>
  );
};

export default Navbar;
