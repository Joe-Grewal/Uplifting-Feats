import React from "react";
import "../styles/App.scss";
import Nav from "./Nav";
import Bio from "./Bio";
import BioDivs from "./BioDivs";
import MyHealthJournal from "./MyHealthJournal";
import Filters from "./Filters";
import EditProfile from "./EditProfile";

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
    </>
  );
}
