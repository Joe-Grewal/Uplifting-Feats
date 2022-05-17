import {React, useState, useEffect} from "react";
// import "../styles/App.scss";
import Bio from "../components//Bio";
import BioDivs from "../components/BioDivs";
import MyHealthJournal from "../components//MyHealthJournal";
import BUpdateProfile from "../components/BUpdateProfile";
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
      <Bio />
      <BioDivs />
      <MyHealthJournal userId={loggedInUser}/>
      <div className="profile_bottom_w_buttons"><Like_small/><BUpdateProfile/><Share_small/></div>
    </>
  );
}
