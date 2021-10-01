import { Link } from "react-router-dom";
import Home from "../../assets/components-svg/Home";
import Acerca from "../../assets/components-svg/Acerca";
import Challenges from "../../assets/components-svg/Challenges";
import Blog from "../../assets/components-svg/Blog";
import './NavBarMobile.css';
const NavBarMobile = () => {
  return (
    <nav className="navbar--mobile--container">
      <ul className="navbar--mobile-container-ul">
        <li>
          <Link to="/">
            <Home />
          </Link>
        </li>
        <li>
          <Link to="/acerca">
            <Acerca />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852826/portafolio/version%201.0/assets/logo_bsdyjh.png"
              alt="logo"
              className="navbar--mobile--logo-mobile"
            />
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <Blog />
          </Link>
        </li>
        <li>
          <Link to="/retos">
            <Challenges />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarMobile;
