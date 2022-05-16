import {React, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Bio from "../components/Bio";
import BioDivs from "../components/BioDivs";
import MyHealthJournal_NOT_logged_in from "../components/MyHealthJournal_NOT_logged_in";
import BLike from "../components/BLike";
import BShare from "../components/BShare";

export default function My_Profile_logged_in () {

  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState(id);

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

  return (
    <>
      <Bio />
      <BioDivs />
      <MyHealthJournal_NOT_logged_in userId={selectedUser}/>
      <div className="profile_bottom_w_buttons"><BLike/><BShare/></div>
    </>
  );
}
