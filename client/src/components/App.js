import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "../styles/App.scss";
import Nav from "./Nav";
import Filter from "./Filter";
import My_Profile_logged_in from "../pages/My_Profile_logged_in";
import My_Profile_NOT_logged_in from "../pages/My_Profile_NOT_logged_in";
import EditProfile from "./EditProfile";
import Login from "./Login";
import Search from "../pages/Search";

export default function App() {
  return (
    <>
      <Nav />
      {/* <My_Profile_logged_in/> */}
      {/* <My_Profile_NOT_logged_in/> */}
      {/* <EditProfile /> */}
      <Search />
      <Router>
        <Routes>
        <Route path="/" element={<My_Profile_NOT_logged_in/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/My_Profile" element={<My_Profile_logged_in/>}/>
          <Route path="/update_profile" element={<EditProfile/>}/>
        </Routes>
      </Router>
    </>
  );
}

