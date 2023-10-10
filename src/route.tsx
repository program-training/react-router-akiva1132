import { createBrowserRouter } from "react-router-dom";
import { ToDoList } from "./components/users/ToDoList/ToDoList";
import { UserDetails } from "./components/users/UserDetails/UserDetails";
import { ToDoDisplay } from "./components/users/ToDo/ToDo";
import { App } from "./App";
import { Home } from "./components/Home/Home";
import { Product } from "./components/Product/Product";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Product",
    element: <Product />,
  },
  {
    path: "/users",
    element: <App />,
    children: [
      {
        path: "/users/UserDetails/:id",
        element: <UserDetails />,
      },
      {
        path: "/users/ToDoList/:id",
        element: <ToDoList />,
      },
      {
        path: "/users/ToDo/:id",
        element: <ToDoDisplay />,
      },
    ],
  },
]);
