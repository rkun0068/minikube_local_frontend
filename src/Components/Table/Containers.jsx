import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import axios from 'axios';

export default function ContainersSelect({ pod_name }) {
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    getContainers();
  }, []);

  function getContainers() {
    axios
      .get(`http://127.0.0.1:8000/pod/getContainers?ns=${localStorage.getItem("namespace")}&pod_name=${pod_name}`)
      .then((response) => {
        // Assuming response.data.result is an array with an 'items' field
        const items = response.data.result || [];
        setContainers(items);
      })
      .catch((error) => {
        console.error("捕获错误信息:", error);
      });
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        </InputLabel>
        <NativeSelect defaultValue={30}>
          {containers.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
