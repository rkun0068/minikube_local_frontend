import Deploys from "../Components/Page/Deploys";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Components/Page/DashBoard";
import Pods from "../Components/Page/Pods";
import CreateDeploy from "../Components/Page/CreateDeploy";
import Services from "../Components/Page/Services";
import YamlInput from "../Components/Input/YAML_Input";
import Yaml from "../Components/Page/YAML";
const router = createBrowserRouter([
  {
    path: "",
    element: <Dashboard />,
  },

  {
    path: "/deploy/create",
    element: <CreateDeploy />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/pods",
    element: <Pods />,
  },
  {
    path: "/deploys",
    element: <Deploys />,
  },
  {
    path: "/svcs",
    element: <Services />,
  },
  {
    path: "/createByYaml",
    element: <Yaml />,

  }
]);

export default router;
