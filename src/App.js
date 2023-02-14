import React from "react";
import "./styles/app.scss";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
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
