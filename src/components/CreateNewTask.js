import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import HomePage from "../pages/HomePage";
import "../styles/createTask.scss";
import Calendar from "./Calendar";
import Category from "./Category";
import CloseIcon from "./CloseIcon";

const CreateNewTask = () => {
  const [showHomePageNewTask, setShowHomePageNewTask] = useState(false);
  return (
    <>
      {showHomePageNewTask ? (
        <HomePage />
      ) : (
        <div className="create-task-main-container">
          <div className="create-task-container">
            <div className="header-and-body-container">
              <div className="header">
                <p>Create new task</p>
                <div onClick={() => setShowHomePageNewTask(true)}>
                  <CloseIcon />
                </div>
              </div>
              <div className="input-field">
                <div className="input-field-title">
                  <label>Title</label>
                  <input type="text" placeholder="Your task title" />
                </div>
                <div className="input-field-description">
                  <label>Description</label>
                  <textarea placeholder="Describe your task..." />
                </div>
              </div>
              <div className="sub-tasks">
                <label>Sub Tasks</label>
                <div className="sub-task-field">
                  <IoIosAdd size={17} className="plus" />
                  <input type="text" placeholder="Add a subtask" />
                </div>
              </div>
            </div>
            <div className="footer-container">
              <hr className="line" />
              <div className="footer-date-and-category">
                <div className="footer-due-date">
                  <p>Due date</p>
                  <div className="choose-a-date">
                    <Calendar />
                  </div>
                </div>
                <div className="footer-category">
                  <p>Category</p>
                  <div className="choose-a-category">
                    <Category />
                  </div>
                </div>
              </div>
              <div className="save-button">
                <button type="button">Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateNewTask;
