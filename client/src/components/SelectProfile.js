import React from "react";
import Profile from "../images/Abby.jpg";
import Like from "../images/like.svg";
import Share from "../images/share.svg";

export default function SelectProfile () {

  return (

    <div className="outer_profile_card_container">
      
      <div className="profile_card_one">
        <img src={Profile} alt="profile" className="tiny_profile_image"/>
        <h3 className="profile_name">Abby Xxxxxx</h3>
      </div>

      <div className="profile_card_two">
        <button className="see_profile_button"><h2>SEE PROFILE</h2></button>
      </div>

      <div className="profile_card_three">
        <img src={Like} alt="like" className="like_image"/>
        <p className="number_of_likes_shares"><strong>12345<span className="likes_shares"> LIKES</span></strong></p>
        <img src={Share} alt="share" className="share_image"/>
        <p className="number_of_likes_shares"><strong>12345<span className="likes_shares"> SHARES</span></strong></p>
      </div>


   </div> 
  )
}