import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { UserInterface } from "../SideBar/sideBar";

type UserData = { user: UserInterface };

export function User({ user }: UserData) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
        </ListItemAvatar>
        <ListItemText
          primary={user.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {user.address.street + ", " + user.address.city}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
