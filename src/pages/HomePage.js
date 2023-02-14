import React from "react";
import { IoIosAdd } from "react-icons/io";
import { AiTwotoneStar } from "react-icons/ai";
import "../styles/home.scss";
import { RxDotFilled } from "react-icons/rx";
import NavBar from "../components/NavBar";

const data = [
  {
    id: "1",
    title: "Promotion banner",
    category: "GoPay",
    subtasks: {
      total: 4,
      completed: 0
    },
    date: "Today",
    favourite: false,
  },
  {
    id: "2",
    title: "Daily workout",
    category: "Personal",
    subtasks: {
      total: 4,
      completed: 1
    },
    date: "Today",
    favourite: true,
  },
  {
    id: "3",
    title: "Make Dribbble shoot",
    category: "Kretya Studio",
    subtasks: {
      total: 3,
      completed: 2
    },
    date: "Wednesday, Dec 28",
    favourite: false,
  }
]


const HomePage = () => {
  return (
    <>
      <div className="main-container">
        <NavBar></NavBar>
        <div className="todo-container">
          <div className="todo-header">
            <div className="header-title">
              <p className="header-title-text">My Day</p>
              <p className="header-title-date">December 2022</p>
            </div>
            <div className="header-actions">
              <button type="button" className="button">
                <div className="button-icon">
                  <IoIosAdd size={19} className="plus" />
                </div>
                <div className="button-label">New task</div>
              </button>
            </div>
          </div>
          <ul className="tasks">
            {
              data.map(task => (
                  <li key={task.id} className="task">
                    <div className="task-body">
                      <div className="task-complete">
                        <div className="task-complete-checkbox">
                          {/*<div className="checked"></div>*/}
                        </div>
                      </div>
                      <div className="task-content">
                        <div className="task-title">
                          {task.title}
                        </div>
                        <div className="task-category">
                          <div className="task-category-title">{task.category}</div>
                          <div className="task-category-separator">
                            <RxDotFilled className="dot" />
                          </div>
                          <div className="task-subtasks-count">{task.subtasks.completed} of {task.subtasks.total}</div>
                          <div className="task-category-separator">
                            <RxDotFilled className="dot" />
                          </div>
                          <div className="task-category-date">{task.date}</div>
                        </div>
                      </div>
                    </div>
                    <div className={"task-actions " + (task.favourite && "active")}>
                      <AiTwotoneStar />
                    </div>
                  </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
