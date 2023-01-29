import React from "react";
import { useState } from "react";

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

  const getNextId = () => {
    let maxId = Math.max(...tasks.map((t) => t.id));
    return maxId + 1;
  };

  const handleAdd = () => {
    setTasks([...tasks, task]);
    setTask({
      ...emptyTask,
      id: task.id + 1,
    });
  };

  const handleDelete = (t) => {
    setTasks(tasks.filter((a) => a.id !== t.id));
    /*
    [1,2,3]
    t = 2
    1 !== 2 true
    2 !== 2 false
    3 !== 2 true
    [1,3]
    */
  };

  const handleEdit = (t) => {
    setTask(tasks.find((a) => a.id === t.id));
    setEditMode(true);
    /*
    [1,2,3]
    t = 3
    1 === 3 false
    2 === 3 false
    3 === 3 true
    3
    */
  };

  const handleUpdate = () => {
    let nextTasks = [...tasks.filter((t) => t.id !== task.id), task];
    nextTasks.sort((t1, t2) => (t1.id > t2.id) ? 1 : (t1.id < t2.id) ? -1 : 0);
    // https://www.scaler.com/topics/javascript-sort-an-array-of-objects/
    setTasks(nextTasks);
    handleCancel();
  };

  const handleCancel = () => {
    setTask({
      ...emptyTask,
      id: getNextId(),
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
