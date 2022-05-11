import React from "react";
import "../styles/App.scss";
import Nav from "./Nav";
import Bio from "./Bio";
import BioDivs from "./BioDivs";
import MyHealthJournal from "./MyHealthJournal";
import Filters from "./Filters";
import EditProfile from "./EditProfile";
import CreateEntryForm from "./CreateEntryForm";
import ProfileCards from "./ProfileCards";
import EntryCards from "./EntryCards";
import BSeeProfile from "./BSeeProfile";
import BSubmit from "./BSubmit";
import BBackToProfile from "./BBackToProfile";
import BSend from "./BSend";
import BUpdateProfile from "./BUpdateProfile";
import BResetAll from "./BResetAll";
import BSaveEntry from "./BSaveEntry";
import BSaveProfile from "./BSaveProfile";
import BPrevious from "./BPrevious";
import BNext from "./BNext";
import BViewAllEntries from "./BViewAllEntries";
import BAddEntry from "./BAddEntry";
import BEditEntry from "./BEditEntry";
import BDeleteEntry from "./BDeleteEntry";
import BLike from "./BLike";
import BShare from "./BShare";

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
      <CreateEntryForm/>
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
      <BSeeProfile/><BSubmit/><BBackToProfile/><BSend/><BUpdateProfile/><BResetAll/><BSaveEntry/><BSaveProfile/><BPrevious/><BNext/><BViewAllEntries/><BAddEntry/><BEditEntry/><BDeleteEntry/><BLike/><BShare/>
      <div>
        <p>
          <br></br>
        </p>
      </div>
    </>
  );
}
