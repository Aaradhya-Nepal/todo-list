import { RxHamburgerMenu } from "react-icons/rx";
import { RiNotification4Line, RiSearch2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import React, { useState } from "react";
import "../styles/navbar.scss";
import Search from "../components/Search";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {showSearch === true ? (
        <Search />
      ) : (
        <div className="navbar">
          <div className="navbar-menu">
            <RxHamburgerMenu size={22} />
          </div>
          <div className="navbar-actions">
            <RiSearch2Line size={22} onClick={() => setShowSearch(true)} />
            <RiNotification4Line size={22} />
            <IoSettingsOutline size={22} />
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
