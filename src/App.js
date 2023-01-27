import React from "react";
import "./App.css"; 
import Banner from "./components/Banner";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <>
     <div>
      <Banner/>
      <TodoForm/>
     </div>
    </>
  );
};

export default App;
