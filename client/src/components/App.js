import React from "react";
import "../styles/App.scss";
import Nav from "./Nav";
import Bio from "./Bio";
import BioDivs from "./BioDivs";
import MyHealthJournal from "./MyHealthJournal";
import Filters from "./Filters";
import EditProfile from "./EditProfile";
<<<<<<< HEAD
import CreateEntryForm from "./CreateEntryForm";
=======
import ProfileCards from "./ProfileCards";
import EntryCards from "./EntryCards";
>>>>>>> origin/main

export default function App() {
  return (
    <>
      <Nav />
      <Bio />
      <BioDivs />
      <MyHealthJournal />
      <div>
        <p>
          <br></br>
        </p>
      </div>
      <Filters/>
      <div>
        <p>
          <br></br>
        </p>
      </div>
      <EditProfile/>
<<<<<<< HEAD
      <CreateEntryForm/>
=======
      <div>
        <p>
          <br></br>
        </p>
      </div>
      <ProfileCards/>
      <div>
        <p>
          <br></br>
        </p>
      </div>
      <EntryCards/>
      <div>
        <p>
          <br></br>
        </p>
      </div>
>>>>>>> origin/main
    </>
  );
}
