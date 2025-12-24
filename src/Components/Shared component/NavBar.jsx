import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import logo from "/Images/logo.svg";
import menu from "/Images/mobile-menu.svg";

export default function NavBar() {
  return (
    <>
      <nav className="w-full py-3.5 bg-white outline-1">
        <div className="flex flex-row justify-between bg-white px-4 lg:w-5/6 md:w-5/6 sm:w-5/6 mx-auto items-center ">
          {/* Logo */}
          <NavLink to="/"> 
            <img src={logo} alt="" />
          </NavLink>

          {/* Navigation 🔗 Links */}
          <ul className="hidden flex-row justify-between navFont font-medium text-[12px] gap-x-3 sm:flex md:relative  sm:gap-x-2 sm:text-[12px] md:gap-x-5 md:text-[16px]  lg:gap-x-10  ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/features">Features</NavLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button 🍔 (Hamburger) */}
          <div className="block sm:hidden ">
            <img src={menu} alt="Menu" />

          feat: add first landing page section
            <ul className="flex flex-col absolute right-0 top-15 items-center gap-y-2  w-full outline-1 py-2 sm:hidden bg-[#2A2B67] text-white navFont font-bold text-12 bg-conic-180 from-violet-600 via-[#2A2B67] to-violet-600 ">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/features">Features</NavLink>
              </li>
              <li>
                <NavLink to="/pricing">Pricing</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
            
          </div>

          {/* Login and Sign Up Buttons 🔘*/}
          <div className="hidden sm:flex flex-row justify-between gap-x-2.5 text-white">
            <Button
              button="Login"
              buttonStyle={
                "bg-white text-black outline-2 outline-[#2A2B67] sm:text-[12px] md:text-[16px] md:px-4 lg:w-24 md:w-20  "
              }
            />
            <Button
              button="Sign Up"
              buttonStyle={"sm:text-[12px] md:text-[16px] md:px-4"}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
