import { useEffect, useState } from "react";
import "./SideBar.css";
import { UserList } from "../UserList/UserList";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/Ai";

export interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export function SideBar() {
  const [usersData, setUsersData] = useState<UserInterface[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((users) => setUsersData(users));
  }, []);

  return (
    <div id="SideBar">
      <div>
        <Link to={"/"}>
          <AiOutlineHome />
        </Link>
        <h1>users:</h1>
      </div>
      <UserList users={usersData} />
    </div>
  );
}
