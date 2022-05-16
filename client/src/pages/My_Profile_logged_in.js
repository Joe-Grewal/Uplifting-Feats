import React from "react";
// import "../styles/App.scss";
import Bio from "../components//Bio";
import BioDivs from "../components/BioDivs";
import MyHealthJournal from "../components//MyHealthJournal";
import BEditProfile from "../components/BUpdateProfile";
import Like_small from "../components/Like_small";
import Share_small from "../components/Share_small";

export default function My_Profile_logged_in () {
  return (
    <>
    <div className="background_image_container">
      <Bio />
      <BioDivs />
      <MyHealthJournal />
      <div className="profile_bottom_w_buttons"><Like_small/><BEditProfile/><Share_small/></div>
      </div>
    </>
  );
}
