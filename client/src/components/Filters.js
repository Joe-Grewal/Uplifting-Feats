import React from "react";
import '../styles/App.scss';

export default function Filters () {

  return (
    <div className="search_filters_container">
      
      <div className="age_range">
      <label for="age_range"><h3>Age Range:</h3></label>
        <select className="dropdown" name="age_range" id="age-range">
        <option value="20-25">20 - 25</option>
        <option value="25-30">25 - 30</option>
        <option value="35-40">35 - 40</option>
        <option value="40-45">40 - 45</option>
        <option value="45-50">45 - 50</option>
        <option value="55-60">55 - 60</option>
        <option value="60-65">60 - 65</option>
        <option value="65-70">65 - 70</option>
        <option value="75-80">75 - 80</option>
        <option value="85-90">85 - 90</option>
        <option value="90-95">90 - 95</option>
        </select>
      </div>

      <div className="gender">
      <label for="gender"><h3>Gender:</h3></label>
        <select className="dropdown" name="gender" id="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="female">Other</option>
        </select>
      </div>

      <div className="height">
       <h3>Height</h3>
       <input className="enter_height" type="text" placeholder="Height in inches"/>
      </div>

      <div className="diet">
      <label for="diet_type"><h3>Diet Type:</h3></label>
        <select className="dropdown" name="diet_type" id="diet-type">
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="keto">Keto</option>
        <option value="paleo">Paleo</option>
        <option value="low_fat">Low Fat</option>
        <option value="low_carb">Low Carb</option>
        <option value="other">Other</option>
        </select>
      </div>

      <div className="primary_workout">
      <label for="primary_workout"><h3>Primary Workout:</h3></label>
        <select className="dropdown" name="primary_workout" id="primary_workouy">
        <option value="cardio">Cardio</option>
        <option value="strength">Strength</option>
        <option value="hiit">HIIT</option>
        <option value="calisthetics">Calisthetics</option>
        <option value="yoga">Yoga</option>
        <option value="pilates">Pilates</option>
        <option value="spin">Spin</option>
        <option value="aerobics">Aerobics</option>
        <option value="circuit Training">Circuit Training</option>
        </select>
      </div>

      <div className="fitness_goal">
      <label for="fitness_goal"><h3>Fitness Goal:</h3></label>
        <select className="dropdown" name="fitness_goal" id="fitness_goal">
        <option value="weight_loss">Weight Loss</option>
        <option value="weight_gain">Weight Gain</option>
        <option value="maintain">Maintain</option>
        <option value="strength">Strength</option>
        <option value="endurance">Endurance</option>
        </select>
      </div>
     
    
  </div>
    
  )
}