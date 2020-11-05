import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Joi from "joi";
import "./signin.css";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const schema = {
    email: Joi.string()
      .required()
      .min(4)
      .label("Email")
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(6).label("Password"),
  };
  const validateProperty = ({ name, value }) => {
    const s = Joi.object({ name: schema[name] });
    const { error } = s.validate({ name: value });
    return error ? error.details[0].message : null;
  };
  const handleChange = (input) => {
    const error = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) error[input.name] = errorMessage;
    else delete error[input.name];
    const data = { email: email, password: password };
    data[input.name] = input.value;
    setEmail(data.email);
    setPassword(data.password);
    setErrors(error);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors({ errors: errors || {} });
    if (errors) return;
    submit();
  };
  const submit = () => {
    console.log(email, password);
  };
  const validate = () => {
    const options = { abortEarly: false };
    const s = Joi.object(schema);
    const { error } = s.validate({ email: email, password: password }, options);
    if (!error) return null;
    const errors = {};
    error.details.map((item) => {
      return (errors[item.path[0]] = item.message);
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="signinForm">
        <Avatar
          className="avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/480px-Dell_Logo.svg.png"
        />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              handleChange({ name: e.target.name, value: e.target.value })
            }
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="off"
            autoFocus
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
          <TextField
            onChange={(e) =>
              handleChange({ name: e.target.name, value: e.target.value })
            }
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="off"
          />
          {errors.password && (
            <div style={{ color: "red" }}>{errors.password}</div>
          )}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
