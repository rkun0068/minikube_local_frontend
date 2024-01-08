import React from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import "../../css/Alter.css"
function SuccessAlter({message}) {
  return (
    <div className="alter">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        {message&&<p>{message}</p>}
      </Alert>
    </div>
  );
}

export default SuccessAlter;
