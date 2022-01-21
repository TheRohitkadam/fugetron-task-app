import { useState, useEffect, useRef } from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useLocation, NavLink } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import StyledButton from "../Components/StyledButton";
import usePreviousEffect from "../hooks/usePreviousEffect";

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
    color: "#707070",
    padding: "12px",
    fontSize: 20,
    width: "90%",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "center",
    marginTop: 70,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  select: {
    border: "2px solid lightgrey",
    borderRadius: 7,
    color: "#707070",
    backgroundColor: "white",
    padding: "11px 11px 11px 11px",
    fontSize: 20,
    width: "98%",
  },
  selectRoot: {
    "&:focus": {
      backgroundColor: "#fff",
    },
  },
}));

const Form = () => {
  const location = useLocation();
  const form = useRef(null);
  const classes = useStyles();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    states: "",
    city: "",
    pincode: "",
  });

  async function updateData() {
    try {
      const response = await axios.get(
        `https://o1wm686yz2.execute-api.us-east-1.amazonaws.com/v1/edit?param1=${formData.email}&param2=${formData.first_name}&param3=${formData.last_name}&param4=${formData.pincode}&param5=${formData.city}&param6=${formData.states}`
      );
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  }

  async function addData() {
    try {
      const response = await axios(
        `https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add?param1=${formData.email}&param2=${formData.first_name}&param3=${formData.last_name}&param4=${formData.pincode}&param5=${formData.city}&param6=${formData.states}`
      );
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    location && location.state
      ? setFormData(location.state.row)
      : setFormData({
          first_name: "",
          last_name: "",
          email: "",
          states: "",
          city: "",
          pincode: "",
        });
  }, []);

  usePreviousEffect(
    ([prevFormData]) => {
      if (prevFormData !== formData && location && location.state) {
        updateData();
      }
    },
    [formData]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('data added');
    addData();
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <form className={classes.root} ref={form} onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Typography varient="p" className={classes.InputLabel}>
                First Name
              </Typography>
              <input
                type="text"
                name="first_name"
                className={classes.Input}
                onChange={handleChange}
                defaultValue={formData.first_name}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography varient="p" className={classes.InputLabel}>
                Last Name
              </Typography>
              <input
                type="text"
                name="last_name"
                className={classes.Input}
                onChange={handleChange}
                defaultValue={formData.last_name}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography varient="p" className={classes.InputLabel}>
                Email
              </Typography>
              <input
                type="email"
                name="email"
                className={classes.Input}
                onChange={handleChange}
                defaultValue={formData.email}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} style={{ marginTop: 20 }}>
            <Grid item xs={3}>
              <Typography varient="p" className={classes.InputLabel}>
                State
              </Typography>
              <select
                value={formData.states}
                onChange={handleChange}
                className={classes.select}
                name="states"
              >
                <option value="none"></option>
                <option value="maharashtra">Maharashtra</option>
                <option value="goa">Goa</option>
                <option value="gujrat">Gujrat</option>
                <option value="delhi">Delhi</option>
              </select>
            </Grid>
            <Grid item xs={3}>
              <Typography varient="p" className={classes.InputLabel}>
                City
              </Typography>
              <input
                type="text"
                name="city"
                className={classes.Input}
                onChange={handleChange}
                defaultValue={formData.city}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography varient="p" className={classes.InputLabel}>
                Pincode
              </Typography>
              <input
                type="number"
                name="pincode"
                className={classes.Input}
                onChange={handleChange}
                defaultValue={formData.pincode}
                // min={5}
                // max={5}
              />
            </Grid>
          </Grid>
          <div className={classes.btnGroup}>
            <StyledButton type="submit" bgcolor="#5663e1">
              <NavLink
                style={{ textDecoration: "none", color: '#fff' }}
                to="/"
                onClick={handleSubmit}
              >
                Add
              </NavLink>
            </StyledButton>
            <NavLink style={{ textDecoration: "none" }} to="/">
              <StyledButton bgcolor="#bea6a6">Cancel</StyledButton>
            </NavLink>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Form;
