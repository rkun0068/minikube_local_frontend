import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

export default function ComboBox() {
  const [namespaces, setNamespaces] = useState([]);
  //加载组件时获取数据
  useEffect(() => {
    getNamespace();
  }, []);

  function getNamespace() {
    axios
      .get("http://127.0.0.1:8000/common/namespace")
      .then((Response) => {
        const namespaceNames = Response.data.result.items.map(
          (item) => item.metadata.name
        );
        setNamespaces(namespaceNames);
        console.log(namespaceNames);
      })
      .catch((error) => {
        console.error("捕获错误信息:", error);
      });
  }

  const handleNamespcaeChange = (event, newValue) => {
    localStorage.setItem("namespace", JSON.stringify(newValue));
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={namespaces} // Ensure that options is always an array
      onChange={handleNamespcaeChange}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="命名空间" />}
    />
  );
}
