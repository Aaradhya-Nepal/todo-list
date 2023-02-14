import React from "react";
import { useState } from "react";
import Task from "./Task";

function TodoForm() {
  const emptyTask = { id: 0, name: "", description: "", complete: false };
  const [task, setTask] = useState(emptyTask);
  const [tasks, setTasks] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setTask({
      ...task,
      name: e.target.value,
    });
  };

  const handleDescriptionChange = (e) => {
    setTask({
      ...task,
      description: e.target.value,
    });
  };

  const handleAdd = () => {
    setTasks([...tasks, task]);
    setTask({
      ...emptyTask,
      id: task.id + 1,
    });
  };

  const getNextId = () => {
    let maxId = Math.max(...tasks.map((t) => t.id));
    return maxId + 1;
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
    nextTasks.sort((t1, t2) => (t1.id > t2.id ? 1 : t1.id < t2.id ? -1 : 0));
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

  // const handleComplete = (id) => {
  //   let cTasks = tasks.find((a) => a.id === id);
  //   let nextTasks = [
  //     ...tasks.filter((t) => t.id !== id),
  //     { ...cTasks, complete: !cTasks.complete },
  //   ];
  //   nextTasks.sort((t1, t2) => (t1.id > t2.id ? 1 : t1.id < t2.id ? -1 : 0));
  //   setTasks(nextTasks);
  // };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Title"
        value={task.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Describe the task"
        value={task.description}
        onChange={handleDescriptionChange}
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
            <>
              <Task
              
                task={t}
                onEdit={handleEdit}
                onDelete={handleDelete}
                key={t.id}
              />
            </>
          ))}
      </ul>
    </>
  );
}

export default TodoForm;
