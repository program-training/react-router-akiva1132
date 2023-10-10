import { useEffect, useState } from "react";
import { UserInterface } from "../SideBar/sideBar";
import { useParams } from "react-router-dom";
import { UserCard } from "../UserCard/UserCard";

export function UserDetails() {
  const [userData, setUserData] = useState<UserInterface | null>(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((data) => data.json())
      .then((users) => {
        setUserData(users), console.log(users);
      });
  }, [id]);
  if (!userData) {
    return <></>;
  }
  return (
    <div className="page">
      <UserCard user={userData} />
      {/* {userData.name} */}
    </div>
  );
}
