import React from "react";
import "../styles/hamburger.scss";
const HamburgerMenu = () => {
  return (
    <>
      <div className="main-container">
        <div className="menu-container">
          <div className="menu-header">
            <div className="todo-logo">
              
            </div>
            <div className="todo-name">
              <p>list.y</p>
            </div>
            <div className="close-icon">
              <p>icon here</p>
            </div>
          </div>
          <div className="user-profile">
            <div className="user-details">
              <div className="userpicture">picture here</div>
              <div className="user-name">John Doe</div>
              <div className="user-email">john@gmail.com</div>
            </div>
            <div className="signout-button">signout button here</div>
          </div>
          <div className="menu-catalogs">
            <div className="menu-favourites">
              <p>Favourites</p>
              <div className="menu-favourite-categories">
                <div className="category">
                  <div className="category-name">
                    <p>Icon here</p>
                    <p>My Day</p>
                  </div>
                  <div className="category-tasks-count">
                    <p>8</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="menu-tags-list">
              <p>tags</p>
              <div className="tags-list">
                <div className="tags">
                  <div className="tags-title">GoPay</div>
                  <div className="tags-count">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
