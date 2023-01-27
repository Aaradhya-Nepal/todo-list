import React from "react";
import { useState } from "react";

let nextId = 0;

function TodoForm() {
  const emptyTask = { id: 0, name: "" };
  const [task, setTask] = useState(emptyTask);
  const [tasks, setTasks] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setTask({
      ...task,
      name: e.target.value,
    });
  };

  // const getNextId=()=>{

  // }

  const handleAdd = () => {
    setTasks([...tasks, task]);
    setTask({
      ...emptyTask,
      id: nextId++,
    });
  };

  const handleDelete = (t) => {
    setTasks(tasks.filter((a) => a.id !== t.id));
  };

  const handleEdit = (t) => {
    setTask(tasks.find((a) => a.id === t.id));
    setEditMode(true);
  };

  const handleUpdate = () => {
    let nextTasks = tasks.filter((a) => a.id !== task.id);
    setTasks([...nextTasks, task]);
    handleCancel();
  };

  const handleCancel = () => {
    setTask({
      ...emptyTask,
      id: nextId,
    });
    setEditMode(false);
  };  

  return (
    <>
      <input
        type="text"
        placeholder="Enter Title"
        className="todo-input"
        value={task.name}
        onChange={handleChange}
      />
      {!editMode ? (
        <button onClick={handleAdd}>Add</button>
      ) : (
        <>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      )}

      <ul>
        {tasks &&
          tasks.map((t) => (
            <li key={t.id}>
              {t.name}
              {""}
              <button
                onClick={(e) => {
                  handleEdit(t);
                }}
              >
                Edit
              </button>
              <button
                onClick={(e) => {
                  handleDelete(t);
                }}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default TodoForm;
