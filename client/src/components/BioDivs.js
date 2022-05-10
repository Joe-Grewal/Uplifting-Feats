import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BioDivs() {
  const [aboutMe, setAboutMe] = useState("");
  const [healthTips, setHealthTips] = useState("");
  const [futureGoals, setFutureGoals] = useState("");

  const getBioDivs = async () => {
    try {
      let response = await axios.get("/api/users/3");
      console.log(response);
      setAboutMe(response.data.user.about_me);
      setHealthTips(response.data.user.tips);
      setFutureGoals(response.data.user.future_goals);
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
        <p>{aboutMe}</p>
      </div>

      <div className="health_tips">
        <h3>Health Tips:</h3>
        <p>{healthTips}</p>
      </div>

      <div className="future_goals">
        {/* <section className="future_goals"> */}
        <h3>Future Goals:</h3>
        <p>{futureGoals}</p>
      </div>
    </div>
  );
}
