import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Components/Navbar";
import StyledButton from "../Components/StyledButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  InputLabel: {
    color: "#5663e1",
    fontWeight: 600,
    fontSize: 14,
    marginBottom: 5,
  },
  Input: {
    border: "2px solid lightgrey",
    borderRadius: 7,
    color: "darkgrey",
    padding: "12px",
    width: "90%",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "center",
    marginTop: 70,
  },
}));

const Form = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Typography varient="p" className={classes.InputLabel}>
                First Name
              </Typography>
              <input className={classes.Input} placeholder="" />
            </Grid>
            <Grid item xs={3}>
              <Typography varient="p" className={classes.InputLabel}>
                Last Name
              </Typography>
              <input className={classes.Input} placeholder="" />
            </Grid>
            <Grid item xs={3}>
              <Typography varient="p" className={classes.InputLabel}>
                Email
              </Typography>
              <input className={classes.Input} placeholder="" />
            </Grid>
          </Grid>
          <Grid container spacing={1} style={{ marginTop: 20 }}>
            <Grid item xs={3}>
              <Typography varient="p" className={classes.InputLabel}>
                State
              </Typography>
              <input className={classes.Input} placeholder="" />
            </Grid>
            <Grid item xs={3}>
              <Typography varient="p" className={classes.InputLabel}>
                City
              </Typography>
              <input className={classes.Input} placeholder="" />
            </Grid>
            <Grid item xs={3}>
              <Typography varient="p" className={classes.InputLabel}>
                Pincode
              </Typography>
              <input className={classes.Input} placeholder="" />
            </Grid>
          </Grid>
          <div className={classes.btnGroup}>
            <StyledButton bgcolor="#5663e1">Add</StyledButton>
            <StyledButton bgcolor="#bea6a6">Cancel</StyledButton>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Form;
