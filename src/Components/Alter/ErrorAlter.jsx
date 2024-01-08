import React from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import "../../css/Alter.css"
function ErrorAlter({message}) {
  return (
    <div className="alter">
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {message&&<p>{message}</p>}
      </Alert>
    </div>
  );
}

export default ErrorAlter;
