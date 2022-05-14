import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "../styles/App.scss";
import Nav from "./Nav";
import Filter from "./Filter";
import My_Profile_logged_in from "../pages/My_Profile_logged_in";
import My_Profile_NOT_logged_in from "../pages/My_Profile_NOT_logged_in";
import ProfileForm from "../pages/ProfileForm";
import Login from "./Login";
import Search from "../pages/Search";
import EntryForm from "../pages/EntryForm";
import ProfileCards from "./ProfileCards";
import EntryCards from "./EntryCards";
import JournalEntries_logged_in from "../pages/JournalEntries_logged_in";
import JournalEntries_NOT_logged_in from "../pages/JournalEntries_NOT_logged_in";
import EditEntryForm from "../pages/EditEntryForm";

export default function App() {
  return (
    <>
      <Nav />
      {/* <My_Profile_logged_in/> */}
      {/* <My_Profile_NOT_logged_in/> */}
      {/* <EditProfile /> */}
      {/* <Search /> */}
      {/* <Profile_Form/> */}
      {/* <EntryForm/> */}
      {/* <JournalEntries_logged_in />
       <JournalEntries_NOT_logged_in /> */}
      

      <Router>
        <Routes>
          <Route path="/" element={<My_Profile_NOT_logged_in/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/My_Profile" element={<My_Profile_logged_in/>}/>
          <Route path="/update_profile" element={<ProfileForm/>}/>
          <Route path="/create_entry" element={<EntryForm/>}/>
          <Route path="/edit_entry" element={<EditEntryForm/>}/>
          <Route path="/home" element={<Search/>}/>
        </Routes>
      </Router>
    </>
  );
}

