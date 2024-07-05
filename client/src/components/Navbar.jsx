import React from "react";
import { Link, useLocation } from "react-router-dom";
import { token } from "../data/user";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/slices/commonSlice";

const Navbar = () => {
  const { pathname } = useLocation();
  const { openSidebar } = useSelector((state) => state.common);
  const dispatch = useDispatch();
  console.log("open sidebar : ", openSidebar);

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-20 bg-gray-800 text-white px-4">
      <div className="w-[90%] mx-auto  flex justify-between items-center">
        <button onClick={() => dispatch(toggleSidebar())}>
          <GiHamburgerMenu />
        </button>
        <div className="flex space-x-4">
          {!token ? (
            <>
              <Link
                to="/login"
                className={`p-2 rounded hover:bg-gray-700 transition ${
                  pathname === "/login" ? "border-b-2 border-orange-500" : ""
                }`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`p-2 rounded hover:bg-gray-700 transition ${
                  pathname === "/signup" ? "border-b-2 border-orange-500" : ""
                }`}
              >
                Signup
              </Link>
            </>
          ) : (
            <div className="relative">
              <span
                className="rounded-full h-8 w-8 cursor-pointer"
                onClick={() => alert("Profile menu goes here")}
              >
                Profile
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
