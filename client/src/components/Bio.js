import React from "react";
import Profile from "../images/Abby.jpg"

export default function Bio () {

  return (
    <div className="picturebox">
      <img src={Profile} alt="profile" className="profile_picture_frame" />
        <section>
          <div className="name_and_goal">
            <p className="name">Abby xxxx</p>
            <span className="fitnessgoal"><strong>WEIGHT LOSS</strong></span>
          </div>
          <p className="profilestats"><strong>Age:</strong> 43 <span className="stick">|</span> <strong>Gender:</strong> Male <span className="stick">|</span> <strong>Height:</strong> 160 <span className="stick">|</span> <strong>Country:</strong> Japan <br></br> <strong>Diet:</strong> Keto <span className="stick">|</span> <strong>Primary Workout:</strong> Cardio <span className="stick">|</span> <strong>Weight:</strong> 180 lbs. <span className="stick">|</span> <strong>BMI:</strong> XXXX </p>
        </section>
    </div>
      
  )
}