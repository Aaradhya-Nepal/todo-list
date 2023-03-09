import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import Calendar from "../components/Calendar";
import HomePage from "../pages/HomePage";
import "../styles/createTask.scss";
import CloseIcon from "./CloseIcon";

const EditTask = () => {
  const [showHomePage, setShowHomePage] = useState(false);
  return (
    <>
      {showHomePage === true ? (
        <HomePage />
      ) : (
        <div className="create-task-main-container">
          <div className="create-task-container">
            <div className="header-and-body-container">
              <div className="header">
                <p>Edit task</p>
                <div onClick={() => setShowHomePage(true)}>
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
                    <select name="category">
                      <option value="category">Personal</option>
                      <option value="category">GoPay</option>
                      <option value="category">Kreta Studios</option>
                    </select>
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

export default EditTask;
