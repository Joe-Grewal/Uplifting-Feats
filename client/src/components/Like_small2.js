import React, { useState, useEffect } from "react";
import Like_clicked from "../images/like_clicked.svg";
import Like from "../images/like.svg";

import axios from "axios";

export default function Like_small(props) {
  const [likes, setLikes] = useState(0);
  const [loggedInUserLikes, setLoggedInUserLikes] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  const getLikesCount = async () => {
    const userDetails = JSON.parse(localStorage.getItem("user_details"));
    try {
      console.log("props for likes:", props);
      let response = await axios.get(`/api/likes/count/${props.selectedUser}`);
      console.log("likes response:", response);
      setLikes(response.data.likes.count);
      let secondResponse = await axios.get(`/api/likes/${userDetails.user.id}`);
      console.log("USER likes response:", secondResponse);
      setLoggedInUserLikes(secondResponse.data.likes);
      const usersLiked = secondResponse.data.likes;
      if (usersLiked) {
        console.log("usersLIKED:", usersLiked)
        usersLiked.forEach((el) => {
          console.log("el.Liked_Profile", el, el.liked_profile, props.selectedUser);
          if (el.liked_profile.toString() === props.selectedUser.toString()) {
            console.log("WE made iT!!:", el.liked_profile, props.selectedUser);
            setIsLiked(true);
          }
        })
      } 
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    getLikesCount();
  }, []);

  const incrementCount = () => {
    setLikes(previousValue => ++previousValue);
  };

  const subtractCount = () => {
    setLikes(previousValue => --previousValue);
  };

  const handleLike = (e) => {
    e.preventDefault();
    console.log("Has it been liked already?:", isLiked)
    if (isLiked) {
      setIsLiked(false)
      subtractCount();
      axios.delete(`/api/likes/${props.selectedUser}`)
    } else {
      setIsLiked(true)
      incrementCount();
      axios.post(`/api/likes`, {selectedUser: props.selectedUser}) //<---not sending props in req.body yet
    }
  };

  return (
    <div className="click_button_container">

      <div className="small_like_image_container">
        <button className="stupid_button" onClick={handleLike}><img src={(!isLiked) ? Like : Like_clicked} alt="like" />
      { props.selectedUser && 
        <form action="/api/likes" method="POST">
          <input type="hidden" name="selectedUser" value={props.selectedUser}></input>
        </form> }
        </button>
      </div>

      <div className="number_of_clicks">
        <p className="num_of_likes">
          {likes}
          <span className="likes_pink"> LIKES</span>
        </p>
      </div>
    </div>
  );
}
