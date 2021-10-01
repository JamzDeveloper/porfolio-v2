import React from "react";
import { NavLink } from "react-router-dom";
import './Links.css'
 const Links = () => {
    return(
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
              <img
                src="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852826/portafolio/version%201.0/assets/logo_bsdyjh.png"
                alt="logo"
              />
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
}
export default Links;