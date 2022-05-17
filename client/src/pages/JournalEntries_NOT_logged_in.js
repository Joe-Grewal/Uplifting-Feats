import {React, useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EntryCards_NOT_logged_in from "../components/EntryCards_NOT_logged_in";
import BBackToProfile from "../components/BBackToProfile";
import EntryCards from "../components/EntryCards";

export default function Search () {

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

  if (loggedInUser !== selectedUser) {
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
  return (
    <>
    <div className="background_image_container">
      <div className="search_page_top_copy_container">
        <h3>Your Journal Entries</h3>
        <p>Search through and edit or delete past entries</p>
      </div>
      <EntryCards userId={selectedUser}/>
      <div className="button_spacing_container">
        <BBackToProfile userId={selectedUser} onClick={handleSubmit}/>
      </div>
      </div>
    </>
  );
}
