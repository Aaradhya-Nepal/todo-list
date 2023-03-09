import React, { useState } from "react";
import CloseIcon from "./CloseIcon";
import "../styles/searchBar.scss";
import NavBar from "./NavBar";

const Search = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      {showNavbar === true ? (
        <NavBar />
      ) : (
        <div className="search-main-container">
          <div className="header">
            <p>Search</p>
            <div onClick={() => setShowNavbar(true)}>
              <CloseIcon />
            </div>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <p>Start typing to get the result</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
