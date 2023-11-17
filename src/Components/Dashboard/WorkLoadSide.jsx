import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import AppsIcon from "@mui/icons-material/Apps";
import AnchorIcon from "@mui/icons-material/Anchor";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import { useNavigate } from "react-router-dom";
export default function WorkLoadSide() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        工作负载
      </ListSubheader>

      <ListItemButton onClick={() => navigate("/pods")}>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="Pods" />
      </ListItemButton>

      <ListItemButton onClick={() => navigate("/deploys")}>
        <ListItemIcon>
          <AnchorIcon />
        </ListItemIcon>
        <ListItemText primary="Deployments" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AutoModeIcon />
        </ListItemIcon>
        <ListItemText primary="Replica Sets" />
      </ListItemButton>
    </React.Fragment>
  );
}
