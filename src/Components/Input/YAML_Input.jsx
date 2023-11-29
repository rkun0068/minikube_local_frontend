import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";
import axios from "axios";
import SuccessAlter from "../Alter/SuccessAlter";

export default function YAML_Input() {
  const [yamlInput, setYamlInput] = React.useState("");
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");

  const textFieldStyle = {
    width: "70%", // 调整宽度
    maxWidth: "1000px", // 设置最大宽度
    height: "400px", // 设置高度
  };
  const handleCreateResource = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/common/createByYaml",
        {
          YAML_INPUT: yamlInput,
        }
      );
      console.log(response.data);
      console.log(yamlInput);
      if (response.data.code === 200) {
        setShowSuccess(true);
        setSuccessMessage(response.data.message);
      }
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("错误:", error);
    }
  };

  return (
    <>
   
        {showSuccess && <SuccessAlter message={successMessage} />}

      <Box>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <TextField
              id="outlined-multiline-static"
              label="YAML文件"
              multiline
              rows={15}
              style={textFieldStyle}
              value={yamlInput}
              onChange={(e) => setYamlInput(e.target.value)}
            />
          </Grid>
          <Grid item xs={5}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleCreateResource}
            >
              创建资源
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
