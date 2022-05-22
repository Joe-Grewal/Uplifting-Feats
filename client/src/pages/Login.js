import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  FormControl,
  InputLabel,
  IconButton,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircle from "@mui/icons-material/AccountCircle";
import BSubmit from "../components/BSubmit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.scss";

export default function Login3() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState();

  const [values, setValues] = useState({ showPassword: false });

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
        setUser(response.data);
        localStorage.setItem("user_details", JSON.stringify(response.data));
        //Put code here for redirecting to profile page ---> *** if possible ***
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
    window.location.reload(); //<---cause a page refresh so navbar can immediately change from showing login to logout
    navigate(`/users/${user.user.id}`); //changed this from myprofile
  }

  return (
    <>
      <div className="background_image_container">
        <div className="outer_login_container">
          <div className="login_heading">
            <h1>Welcome to Uplifting Feats!</h1>
          </div>
          
          <div className="login_picture">
            <img />
          </div>

          <div className="login_marketing_message">
            <h3 className="sub_head_login">
              Have you struggled to achieve your health goals?
            </h3>
            <h4 className="login_sub_message">
              Join the club! Here at Uplifting Feats, let other humans just like
              you, be your guide to success.
            </h4>
          </div>

          <div className="login_fields_submit_button">
            <Container size="sm">
              <form
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
                className="form_fields2"
                id="edit-profile-form"
              >
                <TextField
                  sx={{
                    width: "80%",
                    "& .MuiInputLabel-root": { color: "#6A18A8" },
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        borderColor: "#6A18A8",
                        borderRadius: "20px",
                      },
                    },
                    mb: "20px",
                    mr: "1%",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle id="account" />
                      </InputAdornment>
                    ),
                  }}
                  id="username"
                  className="text_field2"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username *"
                  label="username"
                  variant="outlined"
                  color="secondary"
                  required
                  error={userNameError}
                />
                <FormControl
                  sx={{
                    width: "80%",
                    "& .MuiInputLabel-root": { color: "#6A18A8" },
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        borderColor: "#6A18A8",
                        borderRadius: "20px",
                      },
                    },
                    mb: "20px",
                    mr: "1%",
                  }}
                  className="text_field2"
                >
                  <InputLabel
                    htmlFor="outlined-adornment-password"
                    id="password0"
                  >
                    Password *
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
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
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <BSubmit onClick={handleSubmit} />
              </form>
            </Container>
          </div>

          <div className="login_register_forgot_password">
            <p>
              <strong>Register</strong>
              <span className="stick"> | </span>
              <strong></strong>Forgot Password
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
