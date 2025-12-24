import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import logo from "/Images/logo.svg";

export default function NavBar() {
  return (
    <>
      <nav className="w-full py-3.5 bg-white">

        <div className="flex flex-row justify-between bg-white lg:w-5/6 md:w-5/6 sm:w-5/6 mx-auto items-center ">

          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>

          <ul className="flex flex-row justify-between navFont font-medium sm:gap-x-2 sm:text-[12px] md:gap-x-5 md:text-[16px]  lg:gap-x-10  ">
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

          <div className="flex flex-row justify-between gap-x-2.5 text-white">
            <Button button="Login" buttonStyle={'bg-white text-black outline-2 outline-[#2A2B67] lg:w-24 md:w-20 sm:text-[12px] md:text-[16px] '} />
            <Button button="Sign Up" />
          </div>

        </div>

      </nav>
    </>
  );
}
