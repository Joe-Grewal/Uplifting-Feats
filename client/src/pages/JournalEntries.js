import React from "react";
import EntryCards from "../components/EntryCards";
import EntryCards_NOT_logged_in from "../components/EntryCards_NOT_logged_in";
import BBackToProfile from "../components/BBackToProfile";



export default function Search () {
  return (
    <>
    <div className="background_image_container">

    {/* if logged in / my journal entries */}
      <div className="search_page_top_copy_container">
        <h3>Your Journal Entries</h3>
        <p>Search through and "view", "edit" or "delete" past entries.</p>
      </div>
      <EntryCards/>


      {/* other users entries / not mine */}
      <div className="search_page_top_copy_container">
        <h3>Journal Entries</h3>
        <p>Here is a listing of all the stories from your chosen health enthusiast. Happy reading!</p>
      </div>

      <EntryCards_NOT_logged_in/>
      
      <div className="button_spacing_container">
        <BBackToProfile />
      </div>
      </div>
    </>
  );
}