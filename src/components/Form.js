import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { FormGroup } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { formSubmit } from "../redux/FormSlice";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    hobbies: [],
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "hobbies") {
      if (e.target.checked) {
        setState({
          ...state,
          hobbies: [...state.hobbies, e.target.value],
        });
      } else {
        const hobbiesname = state.hobbies.filter((e) => e !== e.target.value);
        setState({
          ...state,
          hobbies: hobbiesname,
        });
      }
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const submit = () => {
    dispatch(formSubmit(state));
    alert("successfully registered");
    navigate("/table");
    setState({
      firstname: "",
      lastname: "",
      gender: "",
      hobbies: [],
    });
  };
  const paperStyle = {
    padding: "50px 150px",
    width: 800,
    margin: "150px auto",
  };
  const paperStyle1 = {
    marginLeft: "0px",
  };
  return (
    <>
      <Grid>
        <div className="formm">
          <Paper elevation={10} style={paperStyle}>
            <h2>Add A Student</h2>
            <Typography variant="caption">
              Please fill this form for Add A Student
            </Typography>

            <div className="formmm mt-4">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                style={paperStyle1}
              >
                <br />
                <h5 className="mt-2">First Name</h5>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  name="firstname"
                  variant="outlined"
                  value={state.firstname}
                  onChange={handleChange}
                />
              </Box>
            </div>
            <div className="formmm mt-4">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                style={paperStyle1}
              >
                <br />
                <h5 className="mt-2">Last Name</h5>
                <TextField
                  id="outlined-basic"
                  label=" Last Name"
                  variant="outlined"
                  name="lastname"
                  value={state.lastname}
                  onChange={handleChange}
                />
              </Box>
            </div>
            <br />
            <br />
            <FormControl>
              <h5>Gender</h5>
              <RadioGroup
                name="gender"
                value={state.gender}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <br />
            <br />
            <div>
              <h5>Hobbies</h5>
            </div>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    value="Reading"
                    name="hobbies"
                    onChange={handleChange}
                    checked={state.hobbies.includes("Reading")}
                  />
                }
                label="Reading"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Bike Riding"
                    name="hobbies"
                    onChange={handleChange}
                    checked={state.hobbies.includes("Bike Riding")}
                  />
                }
                label="Bike Riding"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Car Driving"
                    name="hobbies"
                    onChange={handleChange}
                    checked={state.hobbies.includes("Car Driving")}
                  />
                }
                label="Car Driving"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Listening to music"
                    name="hobbies"
                    onChange={handleChange}
                    checked={state.hobbies.includes("Listening to music")}
                  />
                }
                label="Listening to music"
              />
            </FormGroup>
            <br />
            <br />
            <button type="Submit" className="btn btn-primary" onClick={submit}>
              Submit
            </button>
          </Paper>
        </div>
      </Grid>
    </>
  );
};
export default Form;
