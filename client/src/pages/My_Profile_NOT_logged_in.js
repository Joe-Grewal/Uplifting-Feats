import {React, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Bio from "../components/Bio";
import BioDivs from "../components/BioDivs";
import MyHealthJournal_NOT_logged_in from "../components/MyHealthJournal_NOT_logged_in";
import BLike from "../components/BLike";
import BShare from "../components/BShare";
import MyHealthJournal from "../components/MyHealthJournal";
import Like_small from "../components/Like_small";
// import Like_small_clicked from "../components/Like_small_clicked";
import Share_small from "../components/Share_small";
import BUpdateProfile from "../components/BUpdateProfile";

export default function My_Profile_logged_in () {

  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState(id);
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

  const getUser = async () => {
    try {
      let response = await axios.get(`/api/users/${id}`);
      console.log("getUser response:", response);
      setSelectedUser(response.data.user.id);
      console.log("***selectedUser:", selectedUser);
    } catch (error) {
      console.log(error);
    }
  };

  getUser();

  if (loggedInUser !== selectedUser) {
    return (
      <>
      <div className="background_image_container">
        <Bio />
        <BioDivs />
        <MyHealthJournal_NOT_logged_in userId={selectedUser}/>
        <div className="profile_bottom_w_buttons"><Like_small/><div className="spacer"></div><Share_small/></div>
        </div>
      </>
    );
  }
  return (
    <>
    <div className="background_image_container">
      <Bio />
      <BioDivs />
      <MyHealthJournal userId={loggedInUser}/>
      <div className="profile_bottom_w_buttons"><Like_small/><BUpdateProfile/><Share_small/></div>
      </div>
    </>
  );
}
