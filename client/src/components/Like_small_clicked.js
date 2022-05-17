import React, { useState, useEffect } from "react";
import Like_Clicked from "../images/like_clicked.svg"
import axios from "axios";

export default function Like_small() {
  const [likes, setLikes] = useState(0);

  const getLikesCount = async () => {
    const userDetails = JSON.parse(localStorage.getItem("user_details"));
    try {
      let response = await axios.get(`/api/likes/count/${userDetails.user.id}`);
      //console.log(response);
      setLikes(response.data.likes);
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    getLikesCount();
  }, []);

  return (
    <div className="like_small_container">
      <div className="small_like_image">
        <img src={Like_Clicked} alt="like" />
      </div>

      <div className="number_of_likes">
        <p className="num_of_likes">
          {likes}
          <span className="likes_pink"> LIKES</span>
        </p>
      </div>
    </div>
  );
}
