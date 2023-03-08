import React from "react";
import "./styles/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import TodoForm from "./components/TodoForm";
import HamburgerMenu from "./components/HamburgerMenu";
import CreateNewTask from "./components/CreateNewTask";
import EditTask from "./components/EditTask";
import Search from "./components/Search";
import Calendar from "./components/Calendar";
import Category from "./components/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/new-task",
    element: <CreateNewTask />,
  },
  {
    path: "/menu",
    element: <HamburgerMenu />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
