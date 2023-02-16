import React from "react";
import "../styles/hamburger.scss";
import CloseIcon from "./CloseIcon.js";
import { FaSignOutAlt } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";

const HamburgerMenu = () => {
  return (
    <>
      <div className="main-container">
        <div className="menu-container">
          <div className="menu-header">
            <div className="app-name">
              <div className="todo-logo">
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5113 0.500004C13.1112 0.49753 9.80463 1.61311 7.10099 3.67487C4.39736 5.73664 2.44666 8.63019 1.54942 11.9097C0.652187 15.1893 0.858199 18.6729 2.13572 21.8238C3.41324 24.9748 5.69139 27.6183 8.61919 29.347C11.547 31.0757 14.962 31.7938 18.3381 31.3906C21.7142 30.9874 24.864 29.4853 27.3023 27.1157C29.7407 24.7461 31.3322 21.6405 31.8318 18.2773C32.3313 14.9141 31.7112 11.48 30.0668 8.50395C21.9772 13.7537 16.1554 22.8217 16.1554 22.8217L8.37477 14.1514L10.4114 12.2235L15.7116 15.9892C15.7116 15.9892 22.985 9.95993 29.0337 6.87867C27.5972 4.90345 25.7139 3.29596 23.5376 2.1874C21.3613 1.07884 18.9536 0.50064 16.5113 0.500004Z"
                    fill="#E4F1FF"
                    stroke="#027AFF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="todo-name">
                <p>List.y</p>
              </div>
            </div>
            <CloseIcon />
          </div>
          <div className="user-profile">
            <div className="user-details">
              <div className="user-picture-profile">
                profile here
              </div>
              <div className="user-credentials">
                <div className="user-name">John Doe</div>
                <div className="user-email">john@gmail.com</div>
              </div>
            </div>
            <div className="signout-button">
              <FaSignOutAlt size={20} />
            </div>
          </div>
          <div className="menu-categories">
            <div className="menu-favourites-title">
              <p>Favourites</p>
            </div>
            <div className="menu-favourite-categories">
              <div className="categories">
                <div className="category-name">
                  <BsLightningCharge size={24} className="category-icon" />
                  <p>Assigned to me</p>
                </div>
                <div className="category-task-count">
                  <p>8</p>
                </div>
              </div>
            </div>
            <hr className="line" />
            <div className="menu-tags-lists">
              <p>Tags</p>
              <div className="tags-list">
                <div className="tags">
                  <div className="tags-title">
                    <p>GoPay</p>
                  </div>
                  <div className="tags-count">
                    <p>4</p>
                  </div>
                </div>
              </div>
              <div className="tags-list">
                <div className="tags">
                  <div className="tags-title">
                    <p>GoPay</p>
                  </div>
                  <div className="tags-count">
                    <p>4</p>
                  </div>
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
