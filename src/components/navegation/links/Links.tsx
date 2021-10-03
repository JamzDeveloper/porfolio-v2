import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../../../contexts/ThemeContext";

import "./Links.css";
const initialStateLogo: string =
  "https://res.cloudinary.com/duhbmesjr/image/upload/v1620852826/portafolio/version%201.0/assets/logo_bsdyjh.png";
const Links = () => {
  const { theme } = useContext(ThemeContext);
  const [logo, setLogo] = useState<string>(initialStateLogo);

  useEffect(() => {
    if (theme === "dark") {
      setLogo(
        "https://res.cloudinary.com/duhbmesjr/image/upload/v1620852825/portafolio/version%201.0/assets/logo-white_gbto5q.png"
      );
    } else {
      setLogo(
        "https://res.cloudinary.com/duhbmesjr/image/upload/v1620852826/portafolio/version%201.0/assets/logo_bsdyjh.png"
      );
    }
  }, [theme]);
  return (
    <div className="nav--container-routes">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="acerca" activeClassName="active">
            Acerca
          </NavLink>
        </li>

        <li>
          <NavLink exact to="/" activeClassName="not-active">
            <img src={logo} alt="logo" />
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/blog" activeClassName="active">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/retos" activeClassName="active">
            Retos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Links;
