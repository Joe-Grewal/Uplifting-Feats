import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BioDivs() {
  const [aboutme, setAboutMe] = useState("");
  const [tips, setTips] = useState("");
  const [goals, setGoals] = useState("");

  const getBioDivs = async () => {
    try {
      let response = await axios.get("/api/users/1/log");
      console.log(response);
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
        <h3>About Me:</h3>
        <p>{aboutme}</p>
      </div>

      <div className="health_tips">
        <h3>Health Tips:</h3>
        <p>{tips}</p>
      </div>

      <div className="future_goals">
        {/* <section className="future_goals"> */}
        <h3>Future Goals:</h3>
        <p>{goals}</p>
      </div>
    </div>
  );
}
