import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="main-menu" id="main-menu">
        <ul className="main-menu-list">
          <li>
            <NavLink to="/home" className="link-page">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className="link-page">
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/skill" className="link-page">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className="link-page">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="link-page">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="link-page">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
