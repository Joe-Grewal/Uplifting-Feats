import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Login() {
  const userRef = useRef(); // hook that allows us to access the DOM element
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  //const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    userRef.current.focus(); // focus on the username input field when the page loads and the component is mounted to the DOM
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };

    try {
      let response = await axios(
        {
          method: "POST",
          url: "/api/login",
          data: user,
        },
        { withCredentials: true }
      );
      console.log(response);
      setSuccess(true);
      //setRedirect(true);
      //return response;
    } catch (error) {
      console.log(error);
    }
  };

  // if (redirect) {
  //   return <Redirect to="/home" />; // Redirect is a property of react router dom, this will get enabled when the package is installed.
  // }

  return (
    <>
      {success ? (
        <section>
          <h1>Login Successful</h1>
          <p>
            <a href="/home">Click here</a> to go to the home page.
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="pasword"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              required
            />
            <button>Sign In</button>
          </form>
          <p>
            Don't have an account?{" "}
            <span className="line">
              <a href="#">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
}
