import {RxHamburgerMenu} from "react-icons/rx";
import {RiNotification4Line, RiSearch2Line} from "react-icons/ri";
import {IoSettingsOutline} from "react-icons/io5";
import React from "react";
import "../styles/ navbar.scss";

const NavBar = () => {
  return (
      <div className="navbar">
          <div className="navbar-menu">
              <RxHamburgerMenu size={22} />
          </div>
          <div className="navbar-actions">
              <RiSearch2Line size={22} />
              <RiNotification4Line size={22} />
              <IoSettingsOutline size={22} />
          </div>
      </div>
  )
}

export default NavBar;