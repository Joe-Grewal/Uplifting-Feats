import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Login3() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState();

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
  };

  if (user) {
    return (
      <section>
        <br />
        <h1>
          Welcome <span>{user.user.user_name} !</span>
        </h1>
        <button onClick={handleLogout}>Logout</button>
      </section>
    );
  }

  return (
    <>
      <section>
        <h1> Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
        <p>
          Dont have an account? <a href="/signup">Sign Up</a>
        </p>
      </section>
    </>
  );
}
