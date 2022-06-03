import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useEffect } from "react";

export default function SnackbarAlert({ open, message }) {
  const [state, setState] = React.useState(false);

  const handleOpen = () => {
    setState(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={state}
      autoHideDuration={2000}
      onClose={handleClose}
      message={message}
    />
  );
}
