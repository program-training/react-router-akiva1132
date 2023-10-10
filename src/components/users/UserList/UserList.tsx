import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useNavigate } from "react-router-dom";
import { User } from "../User/User";
import { UserInterface } from "../SideBar/sideBar";
import "./UserList.css";

type Props = { users: UserInterface[] };

export function UserList(arr: Props) {
  const navigate = useNavigate();
  const { users } = arr;
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        "& ul": { padding: 0 },
        "& .css-hhvo2v-MuiListItem-root": { flexWrap: "wrap" },
      }}
      subheader={<li />}
    >
      <ul>
        {users.map((item) => (
          <ListItem
            onClick={() => navigate(`/users/UserDetails/${item.id}`)}
            key={item.id}
          >
            <User user={item} />
          </ListItem>
        ))}
      </ul>
    </List>
  );
}
