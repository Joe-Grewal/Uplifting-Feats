import React from "react";
import Share from "../images/share.svg";

export default function Share_small () {

  return (

    <div className="like_small_container">
        
        <div className="small_share_image">
        <img src={Share} alt="share"/>
        </div>

        <div className="number_of_likes">
        <p className="num_of_shares">12345<span className="likes_pink"> SHARES</span></p>
        </div>

   </div> 
  )
}