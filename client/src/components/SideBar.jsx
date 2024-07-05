import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data/navLinks";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/slices/commonSlice";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { openSidebar } = useSelector((state) => state.common);
  const dispatch = useDispatch();
  console.log("open sidebar : ", openSidebar);

  return (
    <div
      className={`${
        openSidebar ? "left-0" : "-left-60"
      } transition-all duration-200 fixed top-0 -left-60 md:left-0 h-full md:w-[15vw] bg-gray-800 text-white flex flex-col p-4`}
    >
      {/* Logo */}
      <div className="w-full flex mb-9 justify-between items-center">
        <Link to={"/"} className=" text-lg font-bold">
          codeXpath
        </Link>
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="text-xl flex md:hidden"
        >
          <IoArrowBackCircleOutline />
        </button>
      </div>
      <nav className="flex flex-col space-y-4">
        {navLinks.map((link, i) => (
          <Link
            onClick={() => dispatch(toggleSidebar())}
            key={i}
            to={link.to}
            className={`p-2 rounded hover:bg-gray-700 transition  ${
              pathname === link.to
                ? "sm:border border-b border-orange-500"
                : "border-none"
            }`}
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
