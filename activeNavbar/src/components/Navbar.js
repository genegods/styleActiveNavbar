import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = " bg-blue-100 text-black";
  const normalLink = "";

  return (
    <React.Fragment>
      <section>
        <div className="w-full h-16 bg-black text-white text-xl uppercase font-bold grid grid-cols-4 overflow-hidden">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <p className="border w-full h-full px-4 centered">Home</p>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <p className="border w-full h-full px-4 centered">About</p>
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <p className="border w-full h-full px-4 centered">news</p>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <p className="border w-full h-full px-4 centered">contact</p>
          </NavLink>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
