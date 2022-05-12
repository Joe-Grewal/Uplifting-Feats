import React, { useState, useEffect } from "react";
import axios from "axios";
import Profile from "../images/Abby.jpg";

export default function Bio() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [profileImg, setProfileImg] = useState(""); //this doesn't return the image
  const [fitGoal, setFitGoal] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [country, setCountry] = useState("");
  const [diet, setDiet] = useState("");
  const [primaryWorkout, setPrimaryWorkout] = useState("");
  const [weight, setWeight] = useState("");

  const getBio = async () => {
    try {
      let response = await axios.get("/api/users/1/log");
      // console.log(response);
      // console.log(response.data.user_name);

      setName(response.data.user.user_name);
      setAge(response.data.user.age);
      setFitGoal(response.data.user.fitness_goal);
      setGender(response.data.user.gender);
      setHeight(response.data.user.height);
      setCountry(response.data.user.country);
      setDiet(response.data.user.diet_type);
      setPrimaryWorkout(response.data.user.primary_workout);
      setWeight(response.data.user.weight);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBio();
  }, []);

  return (
    <div className="picturebox">
      <img src={Profile} alt="profile" className="profile_picture_frame" />
      <section>
        <div className="name_and_goal">
          <p className="name">{name}</p>
          <span className="fitnessgoal">
            <strong>{fitGoal}</strong>
          </span>
        </div>
        <p className="profilestats">
          <strong>Age:</strong> {age} <span className="stick">|</span>{" "}
          <strong>Gender:</strong> {gender} <span className="stick">|</span>{" "}
          <strong>Height:</strong> {height} <span className="stick">|</span>{" "}
          <strong>Country:</strong> {country} <br></br> <strong>Diet:</strong>{" "}
          {diet} <span className="stick">|</span>{" "}
          <strong>Primary Workout:</strong> {primaryWorkout}{" "}
          <span className="stick">|</span> <strong>Weight:</strong> {weight}
          lbs. <span className="stick">|</span> <strong>BMI:</strong> XXXX{" "}
        </p>
      </section>
    </div>
  );
}
