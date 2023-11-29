import React from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import "../../css/SuccessAlter.css"
function SuccessAlter({message}) {
  return (
    <div className="success-alter">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        {message&&<p>{message}</p>}
      </Alert>
    </div>
  );
}

export default SuccessAlter;
