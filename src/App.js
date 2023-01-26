import React from "react";
import "./App.css"; 
import Banner from "./components/Banner";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
     <div>
      <Banner/>
      <TodoForm/>
      <TodoList/>
     </div>
    </>
  );
};

export default App;
