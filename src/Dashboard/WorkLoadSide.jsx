import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import AppsIcon from '@mui/icons-material/Apps';
import AnchorIcon from '@mui/icons-material/Anchor';
import AutoModeIcon from '@mui/icons-material/AutoMode';
export default function WorkLoadSide() {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        工作负载
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="Pods" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AnchorIcon/>
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
