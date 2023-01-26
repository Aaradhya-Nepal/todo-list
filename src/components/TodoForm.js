import React from "react";
import { useState } from "react";

let nextId = 0;

function TodoForm() {
  const [inputList, setInputList] = useState("");
  const [task, setTask] = useState([]);

  const handleChange = (e) => {
    setInputList(e.target.value);
  };

  const handleClick = () => {
    setInputList("");
    setTask([...task, { id: nextId++, inputList: inputList }]);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Title"
        className="todo-input"
        value={inputList}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
      <ul>
        {task.map((t) => (
          <li key={t.id}>
            {t.inputList}
            {""}
            <button
              onClick={() => {
                setTask(task.filter((a) => a.id !== t.id));
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoForm;
