import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";

const NavBgBtn = ({ to, text, isBlue = false }) => {
  const location = useLocation();
  const role = JSON.parse(localStorage.getItem("roles"));
  let roleInformation = role;
  if (!role) {
    roleInformation = "EM-201";
  }
  if (text === "login") {
    return (
      <Link
        to={to}
        state={{ background: location }}
        className={` transition-all  duration-200 capitalize group w-full h-8  cursor-pointer flex-row-centered gap-2 text-white text-sm ${
          isBlue
            ? "bg-primary hover:bg-purple-500 "
            : "hover:rounded-b-lg  bg-slate-700 hover:bg-slate-900   "
        } `}
      >
        <span>Login</span>
        <ArrowLeftOnRectangleIcon
          className={`icon-styling text-white group-hover:text-white`}
        />
      </Link>
    );
  } else if (text === "register") {
    return (
      <Link
        to={to}
        state={{ background: location, role: roleInformation }}
        className={` capitalize group w-full h-8 text-white  cursor-pointer flex-row-centered rounded-t-lg  text-sm ${
          isBlue
            ? "bg-primary hover:bg-purple-500 "
            : "bg-slate-700 hover:bg-slate-900"
        } `}
      >
        {text}
      </Link>
    );
  } else {
    return (
      <Link
        to={to}
        state={{ background: location }}
        className={`navbar-link h-8 rounded-lg group text-sm ${
          isBlue
            ? "bg-primary hover:bg-purple-500"
            : "bg-slate-700 hover:bg-slate-900  "
        } `}
      >
        {text}
      </Link>
    );
  }
};

export default NavBgBtn;
