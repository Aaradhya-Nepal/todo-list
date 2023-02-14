import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiSearch2Line, RiNotification4Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { AiTwotoneStar } from "react-icons/ai";
import "../styles/home.scss";
import { RxDotFilled } from "react-icons/rx";
const HomePage = () => {
  return (
    <>
      <div className="main-container">
        <div className="todo-container">
          <div className="todo-navbar">
            <RxHamburgerMenu size={24} />
            <div className="search">
              <RiSearch2Line size={18} />
              <RiNotification4Line size={18} />
              <IoSettingsOutline size={18} />
            </div>
          </div>
          <div className="todo-header">
            <div className="header-title">
              <p className="myday">My Day</p>
              <p className="date">December 2022</p>
            </div>
            <div className="new-task-button">
              <button type="button" className="task-button">
                <div className="icon-text">
                  <IoIosAdd size={19} className="plus" />
                  <div className="new-task">New task</div>
                </div>
              </button>
            </div>
          </div>
          <ul className="tasks">
            <li className="task-list">
              <div>
                <input type="checkbox" className="checkbox" />
              </div>
              <div className="task-title-description">
                <div className="task-title">
                  <div>Promotion banner</div>
                </div>
                <div className="category">
                  <div className="sub-category">GoPay</div>
                  <div>
                    <RxDotFilled className="dot" />
                  </div>
                  <div className="sub-tasks">0 of 4</div>
                  <div>
                    <RxDotFilled className="dot" />
                  </div>
                  <div className="sub-date">Today</div>
                </div>
              </div>
              <div className="star">
                <AiTwotoneStar />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
