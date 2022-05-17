import {React, useState, useEffect} from "react";
// import "../styles/App.scss";
import Bio from "../components//Bio";
import BioDivs from "../components/BioDivs";
import MyHealthJournal from "../components//MyHealthJournal";
import BEditProfile from "../components/BUpdateProfile";
import Like_small from "../components/Like_small";
import Share_small from "../components/Share_small";

export default function My_Profile_logged_in () {

  const [loggedInUser, setLoggedInUser] = useState("");
  console.log("loggedInUser:", loggedInUser);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user_details");
    console.log("localstorage", JSON.parse(loggedInUser),"id:", JSON.parse(loggedInUser).user.id);
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setLoggedInUser(foundUser.user.id);
    }
  }, []);

  return (
    <>
    <div className="background_image_container">
      <Bio />
      <BioDivs />
      <MyHealthJournal userId={loggedInUser}/>
      <div className="profile_bottom_w_buttons"><Like_small/><BEditProfile/><Share_small/></div>
      </div>
    </>
  );
}
