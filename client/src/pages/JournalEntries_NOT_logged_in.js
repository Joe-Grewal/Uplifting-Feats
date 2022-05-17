import {React, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EntryCards_NOT_logged_in from "../components/EntryCards_NOT_logged_in";
import BBackToProfile from "../components/BBackToProfile";



export default function Search () {

  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState(id);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("selectedUser:", selectedUser)
    navigate(`/users/${selectedUser}`);
  }

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
    <div className="background_image_container">
    
      <div className="search_page_top_copy_container">
        <h3>Journal Entries</h3>
        <p>Here is a listing of all the stories from your chosen health enthusiast. Happy reading!</p>
      </div>

      <EntryCards_NOT_logged_in userId={selectedUser}/>
      
      <div className="button_spacing_container">
        <BBackToProfile userId={selectedUser} onClick={handleSubmit}/>
      </div>
      </div>
    </>
  );
}
