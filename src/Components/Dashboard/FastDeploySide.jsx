import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
export default function FastDeploySide() {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        快速部署
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <DeviceHubIcon />
        </ListItemIcon>
        <ListItemText primary="Deploy+SVC" />
      </ListItemButton>
    </React.Fragment>
  );
}
