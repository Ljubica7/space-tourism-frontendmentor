import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import burgerMenu from "../assets/shared/icon-hamburger.svg";
import closeMenu from "../assets/shared/icon-close.svg";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="logo-img">
        <img src={logo} alt="logo" />
      </Link>

      <button
        type="button"
        className="burger-menu"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <img src={burgerMenu} alt="open navigation icon" />
      </button>

      <button
        type="button"
        className={openMenu ? "close-icon" : "close-icon display-none"}
        onClick={() => setOpenMenu(false)}
      >
        <img src={closeMenu} alt="close navigation icon" />
      </button>

      <nav className={openMenu ? "navigation active-menu-nav" : "navigation"}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>00</span>
          Home
        </NavLink>
        <NavLink
          to="/destination"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>01</span>
          Destination
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>02</span>
          Crew
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>03</span>
          Technology
        </NavLink>
      </nav>
    </header>
  );
};
