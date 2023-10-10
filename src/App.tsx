import { SideBar } from "./components/users/SideBar/sideBar.tsx";
import { router } from "./route.tsx";
import { Outlet } from "react-router-dom";
import "./App.css";

export function App() {
  return (
    <div id="App">
      <SideBar />
      <Outlet />
    </div>
  );
}
