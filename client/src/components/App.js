import React from "react";
import "../styles/App.scss";
import Nav from "./Nav";
import My_Profile_logged_in from "../pages/My_Profile_logged_in";
import My_Profile_NOT_logged_in from "../pages/My_Profile_NOT_logged_in";

export default function App() {
  return (
    <>
      <Nav />
      {/* <My_Profile_logged_in/> */}
      {/* <My_Profile_NOT_logged_in/> */}
    </>
  );
}
