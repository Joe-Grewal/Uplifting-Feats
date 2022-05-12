import React from "react";
import ProfilePic from "../images/Abby.jpg";
import BSeeProfile from "./BSeeProfile"
import Like_small from "./Like_small"
import Share_small from "./Share_small"
export default function ProfileCards () {

  return (
    <div className="profile_card_container_spacing">

    <div className="outer_profile_card_container">

      <div className="profile_card_image">
        <img src={ProfilePic} alt="profile" className="tiny_profile_image"/>
      </div>

      <div className="profile_card_copy">
        <h3 className="profile_name">Abby Mylastnameis</h3>
      </div>

      <div className="see_profile_button">
        <BSeeProfile/>
      </div>
      
      <div className="likes">
        <Like_small/>
      </div>

      <div className="shares">
        <Share_small/>
      </div>

   </div> 

   </div>
  )
}