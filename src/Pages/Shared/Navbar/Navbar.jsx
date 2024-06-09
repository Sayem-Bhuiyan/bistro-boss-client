import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navMenus = <>
        <li><NavLink className={({isActive}) => isActive ? "text-[#EEFF25] font-bold text-base font-inter" : "text-white font-bold text-base font-inter"}>Home</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "text-[#EEFF25] font-bold text-base font-inter" : "text-white font-bold text-base font-inter"}>Contact Us</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "text-[#EEFF25] font-bold text-base font-inter" : "text-white font-bold text-base font-inter"}>Dashboard</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "text-[#EEFF25] font-bold text-base font-inter" : "text-white font-bold text-base font-inter"}>Our Menu</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "text-[#EEFF25] font-bold text-base font-inter" : "text-white font-bold text-base font-inter"}>Our Shop</NavLink></li>
    </>
  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-[#15151580]/15 text-white max-w-6xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase"
          >
            {navMenus}
          </ul>
        </div>
        <a className="uppercase"> <span className="font-cinzel text-3xl font-black ">Bistro Boss</span>
        <br /><span className="text-2xl font-bold tracking-[9.12px]">Resturent</span></a>
       
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 uppercase">
            {navMenus}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};


export default Navbar;
