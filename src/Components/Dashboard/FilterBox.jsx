import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

export default function ComboBox() {
  const [namespaces, setNamespaces] = useState([]);
  const [selectedNamespace, setSelectedNamespace] = useState(null);

  useEffect(() => {
    getNamespace();
  }, []);

  useEffect(() => {
    // 当 selectedNamespace 变化时重新加载数据
    if (selectedNamespace !== null) {
      getNamespace();
    }
  }, [selectedNamespace]);

  function getNamespace() {
    axios
      .get("http://127.0.0.1:8000/common/namespace")
      .then((response) => {
        const namespaceNames = response.data.result.items.map(
          (item) => item.metadata.name
        );
        setNamespaces(namespaceNames);
      })
      .catch((error) => {
        console.error("捕获错误信息:", error);
      });
  }

  const handleNamespcaeChange = (event, newValue) => {
    localStorage.setItem("namespace", JSON.stringify(newValue));
    // 设置 selectedNamespace 以触发 useEffect
    setSelectedNamespace(newValue);
    window.location.reload();
  };
  const current_namespace = localStorage.getItem("namespace");
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={namespaces}
      onChange={handleNamespcaeChange}
      value={JSON.parse(current_namespace)}
      sx={{ width: 250, backgroundColor: "white" }}
      renderInput={(params) => <TextField {...params} label="" />}
    />
  );
}
