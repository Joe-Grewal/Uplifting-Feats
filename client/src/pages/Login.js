import React, { useState, useEffect } from "react";
import { Button, Container, TextField, FormControl, InputLabel, IconButton, OutlinedInput, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import AccountCircle from '@mui/icons-material/AccountCircle';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import BSubmit from '../components/BSubmit';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import axios from "axios";
import "../styles/Login.scss"

export default function Login3() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState();

  const [values, setValues] = useState({showPassword: false});

  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user_details");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
    window.location.href = "/";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserNameError(false);
    setPasswordError(false);
    if (username === "") {
      setUserNameError(true);
     }
     if (password === "") {
      setPasswordError(true);
     }
    if (username && password) {
    const user = { username, password };
    try {
      const response = await axios.post("/api/login", user);
      //console.log(response);
      setUser(response.data);
      localStorage.setItem("user_details", JSON.stringify(response.data));
      //Put code here for redirecting to profile page
      console.log(response.data.user.user_name);
      return response;
    } catch (error) {
      console.log(error);
      window.alert("Incorrect username or password");
      window.location.href = "/";
    }
  }
  };

  if (user) {
    return (
      <section className="welcome">
        <br />
        <h1>
          Welcome <span>{user.user.user_name} !</span>
        </h1>
        <Button
          onClick={handleLogout}
          type="submit" 
          color="secondary" 
          variant="contained"
          endIcon={<LogoutRoundedIcon/>}
        >
          Logout
        </Button>
      </section>
    );
  }

  return (
    <>
    <div className="background_image_container">

      <div className="outer_login_container">
        
        <div className="login_heading">
          <h1>Welcome to Uplifting Feats!</h1>
        </div>


        <div className="login_picture">
          <img/>
        </div>


        <div className="login_marketing_message">
          <h3 className="sub_head_login">Have you struggled to achieve your health goals?</h3><h4 className="login_sub_message">Join the club! Here at Uplifting Feats, let other humans just like you, be your guide to success.</h4>
        </div>


        <div className="login_fields_submit_button">
        <Container size="sm">
          <form onSubmit={handleSubmit} noValidate autoComplete="off" className="form_fields2" id="edit-profile-form">
          {/* <label htmlFor="username">Username</label> */}
          {/* <input
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          /> */}
          <TextField 
          sx={{
            width: "80%",
            "& .MuiInputLabel-root": {color: '#6A18A8'},
          "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
          },
          mb: '20px',
          mr: '1%'
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle id="account"/>
              </InputAdornment>
            ),
          }}
          id="username"
          className="text_field2"
          // value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username *"
          label="username"
          variant="outlined"
          color="secondary"
          required
          error={userNameError}
        />
          {/* <label htmlFor="password">Password</label> */}
          {/* <input
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          /> */}
          <FormControl 
          sx={{
            width: "80%",
            "& .MuiInputLabel-root": {color: '#6A18A8'},
            "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
          },
          mb: '20px',
          mr: '1%',
          }}
          className="text_field2">
        <InputLabel htmlFor="outlined-adornment-password" id="password0">Password *</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            // value={password}
            variant="outlined"
            color="secondary"
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                id="eye1"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {/* <Button
          type="submit" 
          color="primary" 
          variant="contained"
          endIcon={<LoginRoundedIcon/>}
        >
          Sign In
        </Button> */}
          <BSubmit onClick={handleSubmit}/>
          </form>
          </Container>
        </div>

        <div className="login_register_forgot_password">
          <p>
          <strong>Register</strong><span className="stick"> | </span><strong></strong>Forgot Password</p>
        </div>

      </div>
      {/* </img> */}
      </div>
    </>
  );
}
