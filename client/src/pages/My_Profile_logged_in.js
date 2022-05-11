import React from "react";
// import "../styles/App.scss";
import Bio from "../components//Bio";
import BioDivs from "../components/BioDivs";
import MyHealthJournal from "../components//MyHealthJournal";
import BUpdateProfile from "../components/BUpdateProfile";
import Like_small from "../components/Like_small";
import Share_small from "../components/Share_small";

export default function My_Profile_logged_in () {
  return (
    <>
      <Bio />
      <BioDivs />
      <MyHealthJournal />
      <div className="profile_bottom_w_buttons"><Like_small/><BUpdateProfile/><Share_small/></div>
    </>
  );
}
