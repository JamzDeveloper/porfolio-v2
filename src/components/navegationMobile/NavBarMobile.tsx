import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "../../assets/components-svg/Home";
import Acerca from "../../assets/components-svg/Acerca";
import Challenges from "../../assets/components-svg/Challenges";
import Blog from "../../assets/components-svg/Blog";
import ThemeContext from "../../contexts/ThemeContext";

import "./NavBarMobile.css";

type NavBarMobileObject = {
  color: string;
  logoUrl: string;
};
const initialState = {
  color: "#0A0A17",
  logoUrl:
    "https://res.cloudinary.com/duhbmesjr/image/upload/v1620852826/portafolio/version%201.0/assets/logo_bsdyjh.png",
};
const NavBarMobile = (): JSX.Element => {
  const [color, setColor] = useState<NavBarMobileObject>(initialState);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      setColor({
        color: "#ffffff",
        logoUrl:
          "https://res.cloudinary.com/duhbmesjr/image/upload/v1620852825/portafolio/version%201.0/assets/logo-white_gbto5q.png",
      });
    } else {
      setColor({
        color: "#0A0A17",
        logoUrl:
          "https://res.cloudinary.com/duhbmesjr/image/upload/v1620852826/portafolio/version%201.0/assets/logo_bsdyjh.png",
      });
    }
  }, [theme]);

  return (
    <nav className="navbar--mobile--container">
      <ul className="navbar--mobile-container-ul">
        <li>
          <Link  to="/">
            <Home color={color.color} />
          </Link>
        </li>
        <li>
          <Link to="/acerca">
            <Acerca color={color.color} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img
              src={"" + color.logoUrl}
              alt="logo"
              className="navbar--mobile--logo-mobile"
            />
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <Blog color={color.color} />
          </Link>
        </li>
        <li>
          <Link to="/retos">
            <Challenges color={color.color} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarMobile;
