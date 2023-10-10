import { useEffect, useState } from "react";
import { ToDo } from "../ToDoList/ToDoList";
import { useParams } from "react-router";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export function ToDoDisplay() {
  const { id } = useParams();
  const [toDoData, setToDoData] = useState<ToDo | null>(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((data) => data.json())
      .then((toDos) => setToDoData(toDos));
  }, []);
  if (!toDoData) {
    return <></>;
  }
  return (
    <div className="page">
      <Stack sx={{ width: "70%" }} spacing={2}>
        <Alert
          variant="outlined"
          severity={toDoData.completed ? "success" : "info"}
        >
          {toDoData.title}
        </Alert>
      </Stack>
    </div>
  );
}
