import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { useNavigate } from "react-router";
export default function FastDeploySide() {
  const navigate = useNavigate()
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
      <ListItemButton onClick={()=>navigate("/createByYaml")}>
        <ListItemIcon>
          <AspectRatioIcon />
        </ListItemIcon>
        <ListItemText primary="资源创建-YAML" />
      </ListItemButton >
    </React.Fragment>
  );
}
