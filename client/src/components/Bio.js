import React, { useState, useEffect } from "react";
import axios from "axios";
// import Profile from "../images/Abby.jpg";

export default function Bio() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [profileImg, setProfileImg] = useState(""); //this doesn't return the image
  const [fitGoal, setFitGoal] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState(0);
  const [country, setCountry] = useState("");
  const [diet, setDiet] = useState("");
  const [primaryWorkout, setPrimaryWorkout] = useState("");
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  // currently not updating values in database(edit form to include bmi as read only)
  useEffect(() => {
    if (age && weight && height) {
      const options = {
        method: "GET",
        url: "https://fitness-calculator.p.rapidapi.com/bmi",
        params: { age, weight: weight * 0.454, height: height * 2.54 },
        headers: {
          "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
          "X-RapidAPI-Key":
            "39af0b6b19mshcb25c6004b475d1p1c84b4jsn4141178f10aa",
        },
      };
      console.log("age", age);
      console.log("height", height);
      console.log("weight", weight);
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          console.log(response.data[0]);
          const result = response.data;
          console.log("result", result);
          console.log("result bmi", result.bmi);
          console.log(Object.values(result.data)[0]);
          //setHeight(Object.values(result.data)[0]); // set this for bmi when database updated
          setBmi(Object.values(result.data)[0]);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [age, weight, height]);

  const getBio = async () => {
    try {
      let response = await axios.get("/api/myprofile");
      // console.log(response);
      setName(response.data.user.user_name);
      setAge(response.data.user.age);
      setFitGoal(response.data.user.fitness_goal);
      setGender(response.data.user.gender);
      setHeight(response.data.user.height);
      setCountry(response.data.user.country);
      setDiet(response.data.user.diet_type);
      setPrimaryWorkout(response.data.user.primary_workout);
      setWeight(response.data.user.weight);
      setProfileImg(response.data.user.profile_img_url);
      setBmi(response.data.user.bmi);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBio();
  }, []);

  return (
    <div className="picturebox">
      <img src={profileImg} alt="profile" className="profile_picture_frame" />
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
          lbs. <span className="stick">|</span> <strong>BMI:</strong> {bmi}{" "}
        </p>
      </section>
    </div>
  );
}
