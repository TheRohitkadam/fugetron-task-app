import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import { NavLink } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 20,
    padding: "0px 6px",
    borderRadius: 0,
    lineHeight: 1.3,
    color: "#5663e1",
    borderBottom: "6px solid #5663e1",
    fontWeight: 400,
    fontFamily: "Segoe UI",
    marginLeft: 10,
    marginTop: 13,
  },
})(Button);

export default function SubBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <BootstrapButton startIcon={<AddIcon style={{ fontSize: 24 }} />}>
            <NavLink style={ isActive => ({textDecoration: 'none', color: '#5663e1'})} to="/add-record">Add record</NavLink>
          </BootstrapButton>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs>
          <input
            style={{
              border: "1px solid lightgrey",
              borderRadius: 9,
              padding: "4px 10px",
              height: 25,
              marginTop: 10,
              fontSize: 19,
              maxWidth: 170,
              marginLeft: 30
            }}
            placeholder="search"
          />
        </Grid>
      </Grid>
    </div>
  );
}
