import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useNavigate, useParams } from "react-router-dom";
import "./ToDoList.css";
import { useEffect, useState } from "react";

export interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export function ToDoList() {
  const { id } = useParams();
  const [toDoListData, setToDoListData] = useState<ToDo[]>([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/ToDos`)
      .then((data) => data.json())
      .then((toDos) => setToDoListData(toDos));
  }, []);
  const navigate = useNavigate();
  return (
    <div className="page">
      <h2>to do</h2>
      <div id="list">
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
            {toDoListData.map((toDo) => (
              <ListItem
                onClick={() => navigate(`/users/ToDo/${toDo.id}`)}
                key={toDo.id}
              >
                {toDo.title}
              </ListItem>
            ))}
          </ul>
        </List>
      </div>
    </div>
  );
}
