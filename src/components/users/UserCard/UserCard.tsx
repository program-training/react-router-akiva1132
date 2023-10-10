import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { UserInterface } from "../SideBar/sideBar";
import { useNavigate } from "react-router";
type User = { user: UserInterface };

export function UserCard({ user }: User) {
  const navigate = useNavigate();
  return (
    <div className="page">
      <Card sx={{ maxWidth: 345, minWidth: 300 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {user.company.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => navigate(`/users/ToDoList/${user.id}`)}
            size="medium"
            variant="contained"
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
