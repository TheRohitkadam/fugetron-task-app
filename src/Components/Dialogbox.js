import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { makeStyles } from "@material-ui/core";
import StyledButton from "./StyledButton";

const useStyles = makeStyles((theme) => ({
  btnGroup: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: 52,
  },
  msg: {
    fontSize: 22,
    color: "#5663e1",
    fontFamily: "Raleway",
    fontWeight: 800,
  },
}));

export default function FormDialog({ name, open, onClose }) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      aria-labelledby="form-dialog-title"
    >
      <DialogContent style={{ padding: "52px 52px 0px 52px" }}>
        <DialogContentText className={classes.msg}>
          Are You Sure to Delete {name}
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.btnGroup}>
        <StyledButton bgcolor="#c95555" onClick={onClose}>
          DELETE
        </StyledButton>
        <StyledButton bgcolor="#bea6a6" onClick={onClose}>
          Cancel
        </StyledButton>
      </DialogActions>
    </Dialog>
  );
}
