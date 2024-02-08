import { ImEarth } from "react-icons/im";
// import styles from "../modularCSS/NavScroll.module.css";
// import { useEffect, useRef, useState } from "react";

const NavbarComp = () => {
  return (
    <div
      className={`navbar bg-white bg-opacity-50 px-[10px] py-[15px] md:px-[50px] md:py-[20px] fixed top-0 z-50`}
    >
      <div className="navbar-start">
        <div className="w-[60px] h-[60px] bg-[#228be6] text-xl sm:block md:block lg:hidden text-center">
          <div className="text-white text-[30px] w-[60px] h-[60px] flex justify-center items-center mx-auto">
            <ImEarth />
          </div>
        </div>

        <div className="w-[100px] h-[100px] bg-[#228be6] hidden sm:hidden md:hidden lg:block">
          <div className="text-white text-[50px] w-[100px] h-[100px] flex justify-center items-center mx-auto">
            <ImEarth />
          </div>
        </div>
      </div>
      <div className="navbar-end">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 fixed right-1/2 font-poppins font-normal"
          >
            <li>
              <a>About SM</a>
            </li>
            <li>
              <a>Expertise</a>
              <ul className="p-2">
                <li>
                  <a>Software</a>
                </li>
                <li>
                  <a>Graphics</a>
                </li>
                <li>
                  <a>Digital Marketing</a>
                </li>
              </ul>
            </li>
            <li>
              <a>work</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <button class="btn btn-sm bg-[#228be6] hover:bg-[#1864ab] text-white flex items-center justify-center pt-[5px]">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:navbar-start lg:flex lg:w-[100%]">
        <ul className="menu menu-horizontal px-1 font-poppins font-semibold">
          <li>
            <a>About Big</a>
          </li>
          <li>
            <details>
              <summary>Expertise</summary>
              <ul className="p-2">
                <li>
                  <a>Software</a>
                </li>
                <li>
                  <a>Graphics</a>
                </li>
                <li>
                  <a>Digital Marketing</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Work</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <button class="btn bg-[#228be6] hover:bg-[#1864ab] text-white flex items-center justify-center pt-[15px]">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarComp;
