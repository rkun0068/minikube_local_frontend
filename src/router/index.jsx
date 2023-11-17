import Deploys from "../Components/Page/Deploys";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Components/Page/DashBoard";
import Pods from "../Components/Page/Pods";
import CreateDeploy from "../Components/Page/CreateDeploy";
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
]);

export default router;
