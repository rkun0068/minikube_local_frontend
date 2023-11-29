import React from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
function ErrorAlter() {
  return (
    <div>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
      </Alert>
    </div>
  );
}

export default ErrorAlter;
