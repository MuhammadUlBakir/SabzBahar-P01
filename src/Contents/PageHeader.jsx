import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Cart_Icon from "../nav_component/cart_component/Cart_Icon";
import ProfileIcon from "../nav_component/profile_component/ProfileIcon";
import { useContext } from "react";
import { ThemeContext } from "../Mainpage_Routes/Test/Testpage";

const PageHeader = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('selected-theme') || 'light');
  const [icon, setIcon] = useState(() => localStorage.getItem('selected-icon') || 'ri-sun-line');
  const {getTheme} = useContext(ThemeContext)
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('selected-theme', newTheme);
    getTheme(theme)
  };
  
  const toggleIcon = () => {
    const newIcon = icon === 'ri-sun-line' ? 'ri-moon-line' : 'ri-sun-line';
    setIcon(newIcon);
    localStorage.setItem('selected-icon', newIcon);
  };

  const scrollHeader = () => {
    const header = document.getElementById('header');
    if (window.scrollY >= 80) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const themeButton = document.getElementById('theme-button');
    themeButton.classList.toggle('ri-moon-line', icon === 'ri-moon-line');
    themeButton.classList.toggle('ri-sun-line', icon === 'ri-sun-line');
  }, [icon]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []); // Empty dependency array to only add the event listener once

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <NavLink exact to={"/"} className="nav__logo" style={{ fontSize: "20px" }}>
            <img src="/images/smp3logo.png" alt="" style={{ height: "40px" }} />
            SABZBAHAR
          </NavLink>
          <div
            className={`nav__menu ${isMenuVisible ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  to={"/"}
                  className="nav__link"
                  onClick={closeMenu}
                  isActive={() => location.pathname === "/" || location.pathname === "/home"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to={"/about"}
                  className="nav__link"
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to={"/product"}
                  className="nav__link"
                  onClick={closeMenu}
                >
                  Products
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to={"/qa"}
                  className="nav__link"
                  onClick={closeMenu}
                >
                  FAQs
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to={"/rent"}
                  className="nav__link"
                  onClick={closeMenu}
                >
                  Rent
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to={"/contact"}
                  className="nav__link"
                  onClick={closeMenu}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="nav__close" id="nav-close" onClick={closeMenu}>
              <i className="ri-close-line" />
            </div>
          </div>
          <div className="nav__btns">
            <button className={`ri-moon-line change-theme ${theme}`} id="theme-button" onClick={() => { toggleTheme(); toggleIcon(); }}>
            </button>
            <Cart_Icon theme = {theme} />
            <ProfileIcon theme = {theme} />
            <div className="nav__toggle" onClick={toggleMenu}>
              <i className="ri-menu-line" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default PageHeader;
