import React, { useState, useEffect } from "react";
import Like from "../images/like.svg";
import axios from "axios";

export default function Like_small(props) {
  const [likes, setLikes] = useState(0);

  const getLikesCount = async () => {
    const userDetails = JSON.parse(localStorage.getItem("user_details"));
    try {
      let response = await axios.get(`/api/likes/count/${props.userId}`);
      console.log("likes response:", response);
      setLikes(response.data.likes.count);
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
        <img src={Like} alt="like" />
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
