import React from "react";
import BSeeProfile from "./BSeeProfile"
import Like_small from "./Like_small"
import Share_small from "./Share_small"
export default function ProfileCards (props) {

  return (
    <div className="profile_card_container_spacing">

    <div className="outer_profile_card_container">

      <div className="profile_card_image">
        <img src={props.profilePic} alt="profile" className="tiny_profile_image"/>
      </div>

      <div className="profile_card_copy">
        <h3 className="profile_name">{props.firstName} {props.lastName}</h3>
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