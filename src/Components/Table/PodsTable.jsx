import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import ContainersSelect from "./Containers";

const PodsTable = () => {
  const [PodsInfo, setRows] = React.useState([]);

  React.useEffect(() => {
    getPodsInfo();
  }, []);

  function getPodsInfo() {
    axios
      .get(
        "http://127.0.0.1:8000/pod/getByNs?ns=" +
          localStorage.getItem("namespace")
      )
      .then((Response) => {
        const Pods_info = Response.data.result.items.map((item) => ({
          name: item.metadata.name,
          podIP: item.status.podIP,
          labels: item.metadata.labels || {}, // Ensure labels is an object
          node: item.spec.nodeName,
          status: item.status.phase,
        }));
        setRows(Pods_info);
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
            <TableCell align="right">Pod IP</TableCell>
            <TableCell align="right">标签</TableCell>
            <TableCell align="right">节点</TableCell>
            <TableCell align="right">状态</TableCell>
            <TableCell align="right">容器</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {PodsInfo.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.podIP}</TableCell>
              <TableCell align="right">
                {Object.keys(row.labels).length === 0 ? (
                  "None"
                ) : (
                  Object.entries(row.labels).map(([key, value]) => (
                    <div key={key}>
                      <strong>{key}:</strong> {value}
                    </div>
                  ))
                )}
              </TableCell>
              <TableCell align="right">{row.node}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">
                <ContainersSelect pod_name={row.name} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PodsTable;
