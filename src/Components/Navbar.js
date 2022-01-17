import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom"
import "../util/font.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#707070",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: "Raleway",
    flexGrow: 1,
    fontWeight: 800,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={1} color="inherit">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Task
          </Typography>
          <Typography style={{ fontSize: 18 }} color="inherit">
            <NavLink style={ isActive => ({textDecoration: 'none', color: '#707070'})} to="/">Home</NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
