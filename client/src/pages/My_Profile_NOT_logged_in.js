import {React, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Bio from "../components/Bio";
import Bio2 from "../components/Bio2";
import BioDivs from "../components/BioDivs";
import BioDivs2 from "../components/BioDivs2";
import MyHealthJournal_NOT_logged_in from "../components/MyHealthJournal_NOT_logged_in";
import MyHealthJournal from "../components/MyHealthJournal";
import Like_small from "../components/Like_small";
import Like_small2 from "../components/Like_small2";
import Share_small from "../components/Share_small";
import BUpdateProfile from "../components/BUpdateProfile";
import { getThemeProps } from "@mui/system";

export default function My_Profile_logged_in () {

  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState(id);
  const [loggedInUser, setLoggedInUser] = useState("");

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
        <Bio2 userId={selectedUser}/>
        <BioDivs2 userId={selectedUser}/>
        <MyHealthJournal_NOT_logged_in userId={selectedUser}/>
        <div className="profile_bottom_w_buttons"><Like_small2 userId={loggedInUser} selectedUser={selectedUser}/><div className="spacer"></div><Share_small/></div>
        </div>
      </>
    );
  }
  return (
    <>
    <div className="background_image_container">
      <Bio2 userId={loggedInUser}/>
      <BioDivs2 userId={loggedInUser}/>
      <MyHealthJournal userId={loggedInUser}/>
      <div className="profile_bottom_w_buttons"><Like_small userId={loggedInUser}/><BUpdateProfile/><Share_small/></div>
      </div>
    </>
  );
}
