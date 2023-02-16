import React from "react";
import "./styles/app.scss";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import TodoForm from "./components/TodoForm";
import HamburgerMenu from "./components/HamburgerMenu";

function App() {
  return (
    <>
      <div>
        {/* <HomePage /> */}
        <HamburgerMenu />
        {/* <SignupPage /> */}
        {/* <LoginPage/> */}
        {/* <TodoForm /> */}
      </div>
    </>
  );
}

export default App;
