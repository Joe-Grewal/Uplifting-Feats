import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BioDivs(props) {
  const [aboutme, setAboutMe] = useState("");
  const [tips, setTips] = useState("");
  const [goals, setGoals] = useState("");

  const getBioDivs = async () => {
    try {
      let response = await axios.get(`/api/users/${props.userId}`);
      // console.log(response);
      setAboutMe(response.data.user.about_me);
      setTips(response.data.user.tips);
      setGoals(response.data.user.future_goals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBioDivs();
  }, []);

  return (
    <div className="outer_container">
      <div className="about_me">
        <h2>About Me</h2>
        <p>{aboutme}</p>
      </div>

      <div className="health_tips">
        <h2>Health Tips</h2>
        <p>{tips}</p>
      </div>

      <div className="future_goals">
        {/* <section className="future_goals"> */}
        <h2>Future Goals</h2>
        <p>{goals}</p>
      </div>
    </div>
  );
}
