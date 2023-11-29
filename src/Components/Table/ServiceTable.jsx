import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const ServiceTable = () => {
  const [SvcsInfo, setRows] = React.useState([]);
  React.useEffect(() => {
    getSvcsInfo();
  }, []);
  function getSvcsInfo() {
    axios
      .get(
        "http://127.0.0.1:8000/workLoad/svc/get?ns=" +
          localStorage.getItem("namespace")
      )
      .then((Response) => {
        const Svcs_info = Response.data.result.items.map((item) => ({
          name: item.metadata.name,
          type: item.spec.type,
          clusterIP: item.spec.clusterIP,
          ports: item.spec.ports,
          selector: item.metadata.labels,
        }));
        setRows(Svcs_info);
        console.log(SvcsInfo);
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
            <TableCell align="right">类型</TableCell>
            <TableCell align="right">集群IP</TableCell>
            <TableCell align="right">端口</TableCell>
            <TableCell align="right">选择器</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {SvcsInfo.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.clusterIP}</TableCell>
              <TableCell align="right">
                {row.ports.map((portInfo, index) => (
                  <div key={index}>
                    <strong>
                      {portInfo.port}/{portInfo.protocol}:
                    </strong>{" "}
                    {portInfo.targetPort}
                  </div>
                ))}
              </TableCell>

              <TableCell align="right">
                {Object.entries(row.selector).map(([key, value]) => (
                  <div key={key}>
                    <strong>{key}:</strong> {value}
                  </div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ServiceTable;
