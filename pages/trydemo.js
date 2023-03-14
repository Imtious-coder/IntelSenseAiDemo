import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button, Paper, Typography } from "@material-ui/core";
import { sendEmail } from "../utils/api";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    background: "#ececec",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  paper: {
    padding: "2rem",
  },
}));

export default function InputAdornments() {
  const classes = useStyles();
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [values, setValues] = React.useState({
    name: "",
    company: "",
    message: "",
    email: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();

    const data = {
      name: values.name,
      country: "Unknown",
      phone: "Unknown",
      message: `Company: ${values.company}`,
      email: values.email,
    };

    setSubmitting(true);

    sendEmail(data)
      .then((status) => {
        if (status === 200) {
          alert("Thank you for contacting us");
        } else alert("Couldn't sent email", status);

        setSubmitting(false);
      })
      .catch((e) => setSubmitting(false));
  };

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.paper}>
        <img src="/images/logo.svg" alt="intensense.ai" width={150} />
        <Typography variant="h5">Fix a meeting with us!</Typography>
        <FormControl>
          <div>
            <TextField
              label="Name"
              required
              value={values.name}
              onChange={handleChange("name")}
              id="standard-start-adornment"
              className={clsx(classes.margin, classes.textField)}
            />
            <FormControl required fullWidth className={classes.margin}>
              <InputLabel htmlFor="standard-adornment-amount">Email</InputLabel>
              <Input
                id="standard-adornment-amount"
                value={values.email}
                onChange={handleChange("email")}
              />
            </FormControl>
            <FormControl required fullWidth className={classes.margin}>
              <InputLabel htmlFor="standard-adornment-company">
                Company Name
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                value={values.company}
                onChange={handleChange("company")}
              />
            </FormControl>
          </div>
          <div>
            <TextField
              required
              multiline
              minRows={4}
              fullWidth
              className={classes.margin}
              label="Message"
              id="outlined-adornment-amount"
              value={values.message}
              onChange={handleChange("message")}
              // startAdornment={<InputAdornment position="start">T</InputAdornment>}
              labelWidth={60}
            />
          </div>

          <Button
            onClick={handleClick}
            className={classes.margin}
            variant="contained"
            color="primary"
            disableElevation
            disable={isSubmitting}
          >
            Submit
          </Button>
        </FormControl>
      </Paper>
    </div>
  );
}
