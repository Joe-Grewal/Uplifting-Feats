import React from "react";
import Bio from "../components/Bio";
import BioDivs from "../components/BioDivs";
import MyHealthJournal_NOT_logged_in from "../components/MyHealthJournal_NOT_logged_in";
import BLike from "../components/BLike";
import BShare from "../components/BShare";

export default function My_Profile_logged_in () {
  return (
    <>
      <Bio />
      <BioDivs />
      <MyHealthJournal_NOT_logged_in />
      <div className="profile_bottom_w_buttons"><BLike/><BShare/></div>
    </>
  );
}
