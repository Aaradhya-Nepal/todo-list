import React, { useEffect } from "react";
import { useState } from "react";

const Task = (props) => {
  const [task, setTask] = useState({ id: 0, name: "", complete: false });

  const handleComplete = () => {
    setTask({ ...task, complete: !task.complete });
  };

  useEffect(() => {
    setTask(props.task);
  }, [props.task]);

  return (
    <>
      <div key={task.id}>
        <li style={{ textDecoration: task.complete ? "line-through" : null }}>
          {task.name}
        </li>
        <button
          onClick={(e) => {
            handleComplete();
          }}
        >
          Complete
        </button>
        <button
          onClick={(e) => {
            props.onEdit(task);
          }}
        >
          Edit
        </button>
        <button
          onClick={(e) => {
            props.onDelete(task);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Task;
