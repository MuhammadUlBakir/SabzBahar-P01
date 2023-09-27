import React from "react";
import LeafFill from "remixicon-react/LeafFillIcon";
import Helmet from "react-helmet";
import Cart_Icon from "../nav_component/cart_component/Cart_Icon";
import ProfileIcon from "../nav_component/profile_component/ProfileIcon";
import { Link } from "react-router-dom";
const PageHeader = () => {
  const Click = localStorage.getItem("TotalClick");
  console.log(Click)
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <Link to = {"/"} className="nav__logo" style={{fontSize : "20px"}}>
            <LeafFill size="2em"></LeafFill>PlantNest
          </Link>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to={"/"} className="nav__link active-link">
                  Home
                </Link>
              </li>
              <Link to={"/about"} className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </Link>
              <li className="nav__item">
                <Link to={"/product"} className="nav__link">
                  Products
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/qa"} className="nav__link">
                  FAQs
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/contact"} className="nav__link">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="nav__close" id="nav-close">
              <i className="ri-close-line" />
            </div>
          </div>
          <div className="nav__btns">
            <button className="ri-moon-line change-theme" id="theme-button" ></button>
            <Cart_Icon />
            <ProfileIcon/>
            <div className="nav__toggle" id="nav-toggle">
              <i className="ri-menu-line" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default PageHeader;
