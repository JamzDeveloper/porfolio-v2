import React from "react";
import "./NavBar.css";
import  Links  from "./links/Links";
import  Subscribe  from "./subscribe/Subscribe";
import  DarkMode  from "./darkmode/DarkMode";
const NavBar = (): JSX.Element => {
  return (
    <nav className="nav--container">
     <DarkMode/>
      <Links />
      <Subscribe />
    </nav>
  );
};

export default NavBar;
