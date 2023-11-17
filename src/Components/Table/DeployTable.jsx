import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const DeployTable = () => {
  const [DeploysInfo, setRows] = React.useState([]);
  React.useEffect(() => {
    getPodsInfo();
  }, []);
  function getPodsInfo() {
    axios
      .get(
        "http://127.0.0.1:8000/workLoad/deploy/get?ns=" +
          localStorage.getItem("namespace")
      )
      .then((Response) => {
        const deploys_info = Response.data.result.items.map((item) => ({
          name: item.metadata.name,
          labels: item.metadata.labels,
          images: item.spec.template.spec.containers,
          Pods: item.status.availableReplicas + "/" + item.status.replicas,
        }));
        setRows(deploys_info);
        console.log(deploys_info);
      })
      .catch((error) => {
        console.error("捕获错误信息：", error);
      });
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>名称</TableCell>
            <TableCell align="right">镜像</TableCell>
            <TableCell align="right">标签</TableCell>
            <TableCell align="right">Pods</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {DeploysInfo.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                {row.images.map((imageInfo, index) => (
                  <div key={index}>
                    <strong>Image{index}:</strong> {imageInfo.image}
                  </div>
                ))}
              </TableCell>

              <TableCell align="right">
                {Object.entries(row.labels).map(([key, value]) => (
                  <div key={key}>
                    <strong>{key}:</strong> {value}
                  </div>
                ))}
              </TableCell>

              <TableCell align="right">{row.Pods}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DeployTable;
