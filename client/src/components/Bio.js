import React from "react";
<<<<<<< HEAD
import Profile from "../images/Abby.jpg";
export default function Bio() {
  return (
    <div className="picturebox">
      <img src={Profile} alt="profile" />
      <section>
        <div className="name_and_goal">
          <p className="name">Abby xxxx</p>
          <span className="fitnessgoal">WEIGHT LOSS</span>
        </div>
        <p className="profilestats">
          Age: 43 <span className="stick">|</span> Gender: Male{" "}
          <span className="stick">|</span> Height: 160{" "}
          <span className="stick">|</span> Country: Japan <br></br> Diet: Keto{" "}
          <span className="stick">|</span> Primary Workout: Cardio{" "}
          <span className="stick">|</span> Weight: 180 lbs.{" "}
          <span className="stick">|</span> BMI: XXXX{" "}
        </p>
      </section>
=======
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
>>>>>>> 66850f95b2a0feb0659dd89741824d2408d1a673
    </div>
  );
}
