import React from "react";
import "../styles/createTask.scss";
import CloseIcon from "./CloseIcon";

const CreateNewTask = () => {
  return (
    <>
      <div className="main-container">
        <div className="header-and-body-container">
          <div className="header">
            <p>Create new task</p>
            <CloseIcon />
          </div>
          <div className="input-field">
            <div className="input-field-title">
              <label>Title</label>
              <input type="text" placeholder="Your task title" />
            </div>
            <div className="input-field-description">
              <label>Description</label>
              <input type="text" placeholder="Describe your task..." />
            </div>
          </div>
          <div className="sub-tasks">
            <label>Sub Tasks</label>
            <div className="sub-task-field">
              <p>plus icon</p>
              <input type="text" placeholder="Add a subtask" />
            </div>
          </div>
        </div>
        <div className="footer-container">
          <hr />
          <div className="footer-date-category">
            <div className="footer-due-date">
              <p>Due date</p>
              <div className="choose-a-date">
                <input type="date" />
              </div>
            </div>
            <div className="footer-category">
              <p>Category</p>
              <div className="choose-a-category">
                <p>category dropdown here</p>
              </div>
            </div>
          </div>
          <div className="save-button">
            <button type="button">Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewTask;
