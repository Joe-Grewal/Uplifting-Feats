import React from "react";
import Like from "../images/like.svg";

export default function Like_small () {

  return (

    <div className="like_small_container">
        
        <div className="small_like_image">
        <img src={Like} alt="like"/>
        </div>

        <div className="number_of_likes">
        <p className="num_of_likes">12345<span className="likes_pink"> LIKES</span></p>
        </div>

   </div> 
  )
}