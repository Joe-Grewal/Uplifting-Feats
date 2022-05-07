import React from "react";
import Profile from "../images/Abby.jpg"
export default function Bio () {

  return (
    <div className="picturebox">
      <img src={Profile} alt="profile"/>
        <section>
          <div className="name_and_goal">
            <p className="name">Abby xxxx</p>
            <span className="fitnessgoal">WEIGHT LOSS</span>
          </div>
          <p className="profilestats">Age: 43 <span className="stick">|</span> Gender: Male <span className="stick">|</span> Height: 160 <span className="stick">|</span> Country: Japan <br></br> Diet: Keto <span className="stick">|</span> Primary Workout: Cardio <span className="stick">|</span>  Weight: 180 lbs. <span className="stick">|</span> BMI: XXXX </p>
        </section>
    </div>
      
  )
}