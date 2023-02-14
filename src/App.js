import React from "react";
import "./styles/app.scss";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <>
      <div>
        <HomePage />
        {/* <SignupPage /> */}
        {/* <LoginPage/> */}
        {/* <TodoForm /> */}
      </div>
    </>
  );
}

export default App;
