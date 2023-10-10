import { Button } from "@mui/material";
import "./Home.css";
import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();
  return (
    <div id="home">
      <Button
        onClick={() => navigate("/users")}
        sx={{ width: "20%" }}
        variant="contained"
      >
        users
      </Button>
      <Button
        onClick={() => navigate("/product")}
        sx={{ width: "20%" }}
        variant="contained"
      >
        product
      </Button>
    </div>
  );
}
