import React, { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");
  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Enter Title"
        value={input}
        name="text"
        className="todo-input"
      />
      <br />
      <button className="todo-button">Add</button>
    </form>
  );
}

export default TodoForm;
