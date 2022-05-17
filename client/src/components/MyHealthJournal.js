import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BPrevious from "./BPrevious";
import BNext from "./BNext";
import BViewAllEntries from "./BViewAllEntries";
import BAddEntry from "./BAddEntry";
import BEditEntry from "./BEditEntry";
import BDeleteEntry from "./BDeleteEntry";

export default function MyHealthJournal(props) {
  const [entryId, setEntryId] = useState("");
  const [entryname, setEntryname] = useState("");
  const [story, setStory] = useState("");
  const [mydiet, setmyDiet] = useState([]);
  const [myworkout, setmyWorkout] = useState("");
  const [postedAt, setPostedAt] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("props:", props)
    navigate(`/users/${props.userId}/view_entries`);
  }

  const getEntries = async () => {
    try {
      let response = await axios.get("/api/myentry");
      console.log(response);
      setEntryId(response.data.user.id);
      console.log("entryId:", response.data.user.id);
      setStory(response.data.user.my_story);
      setEntryname(response.data.user.entry_name);
      //setmyDiet(response.data.user.my_diet);
      setmyWorkout(response.data.user.my_workout);
      setPostedAt(response.data.user.posted_at);
    } catch (error) {
      console.log(error);
    }
  };

  const getCalories = async () => {
    // const userDetails = JSON.parse(localStorage.getItem("user_details"));
    console.log("calorieId:", entryId);
    let response = await axios.get(`/api/calorie/${entryId}`);

    console.log(response);
    setmyDiet(response.data);
  };

  useEffect(() => {
    getEntries();
  }, []);

  useEffect(() => {
    getCalories();
  }, [entryId]);

  const date = new Date(postedAt);
  console.log("Date: "+date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear());

  return (
    <div className="outer_container2">
      <div className="my_health_journal_w_buttons">
        <BPrevious />
        <div className="health_journal_title"><h2>My Health Journal</h2></div>
        <BNext />
      </div>

      <div className="entry">
        <h3 className="entry_name">{entryname}</h3>
        <span className="date">
          {"Date: "+date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()}
        </span>
        <p>{story}</p>
      </div>

      <div className="my_workout_routine">
        <h2 className="heading_light_weight">Workout Routine</h2>
        <p> {myworkout}</p>
      </div>

      {/* <div className="my_diet_diary">
        <h3>Diet Diary:</h3>
        <p> {mydiet}</p>
      </div> */}
      {/* map through mydiet and display each item in a list */}
      <div className="my_diet_diary">
        <h2 className="heading_light_weight">Diet Diary</h2>
        <ul className="food_list_begins">
          {mydiet.map((item, i) => {
            console.log("dietLength:", mydiet.length)
            if (i < mydiet.length - 1 ) {
              let itemList = item.split(", ");
              console.log("itemList:", itemList)
              let calList = itemList[1].replace("calories:", "");
              console.log("look:", itemList);
             return <li className="food_calories" key={i}>{item.split(", ")[0]}<span className="cals"> {calList}</span></li> //calList is for calories and {item.split(", ")[0]} is for foods
             
            } 
            
            return <li className="total_calories"><hr/>{item.split(", ")[0]}<hr/></li> //this is for the total calories count
          })} 
            {/* // <li className="food_calories" key={i}>{item.split(", ")[0]}{item.split(",")[1]}</li> */}
          
        </ul>
      </div>

      <div className="bottom_w_buttons">
        <BViewAllEntries onClick={handleSubmit}/>
        <BAddEntry />
        <BEditEntry />
        <BDeleteEntry />
      </div>
    </div>
  );
}
