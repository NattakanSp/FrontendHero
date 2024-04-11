import React from "react";
import ReactDOM from "react-dom/client";
import About from "./routes/about.jsx";
import Portfolio from "./routes/portfolio.jsx";
import Job from "./routes/job.jsx";
import Skill from "./routes/skill.jsx";
import ToDos from "./routes/todos.jsx";
import ToDoItem from "./routes/todoItem.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/job",
    element: <Job />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/skill",
    element: <Skill />,
  },
  {
    path: "/todos",
    element: <ToDos />,
  },
  { path: "/todos/:toDoItemId", element: <ToDoItem /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
