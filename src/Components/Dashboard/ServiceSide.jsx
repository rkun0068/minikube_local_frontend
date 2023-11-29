import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { useNavigate } from "react-router";
export default function WorkLoadSide() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        服务
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AccountTreeIcon />
        </ListItemIcon>
        <ListItemText primary="Ingresses" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/svcs")}>
        <ListItemIcon>
          <CloudQueueIcon />
        </ListItemIcon>
        <ListItemText primary="Services" />
      </ListItemButton>
    </React.Fragment>
  );
}
