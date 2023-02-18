import React from "react";
import CloseIcon from "./CloseIcon";
import "../styles/searchBar.scss";
const Search = () => {
  return (
    <>
      <div className="main-container">
        <div className="header">
          <p>Search</p>
          <CloseIcon />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <p>Start typing to get the result</p>
        </div>
      </div>
    </>
  );
};

export default Search;
