import {React, useState, useEffect} from "react";
import BPrevious from "./BPrevious";
import BNext from "./BNext";
import BViewAllEntries from "./BViewAllEntries";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BAddEntry from "./BAddEntry";
import BEditEntry from "./BEditEntry";
import BDeleteEntry from "./BDeleteEntry";


export default function MyHealthJournal (props) {

  const [entryname, setEntryname] = useState("");
  const [story, setStory] = useState("");
  const [mydiet, setmyDiet] = useState([]);
  const [myworkout, setmyWorkout] = useState("");
  const [postedAt, setPostedAt] = useState("");
  const [userId, setUserId] = useState(props.userId);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("props:", props)
    navigate(`/users/${props.userId}/view_entries`);
  }

  const getEntries = async () => {
    try {
      let response = await axios.get("/api/myentry");
      console.log("getEntries:", response);
      setStory(response.data.user.my_story);
      setEntryname(response.data.user.entry_name);
      //setmyDiet(response.data.user.my_diet);
      setmyWorkout(response.data.user.my_workout);
      setPostedAt(response.data.user.posted_at);
      console.log("response.data.user.user_id:", response.data.user.user_id)
      setUserId(response.data.user.user_id);
      console.log("userId", userId)
    } catch (error) {
      console.log(error);
    }
  };

  const getCalories = async () => {
    const userDetails = JSON.parse(localStorage.getItem("user_details"));
    console.log("userDetails:", userDetails);
    console.log("userId2", userId);
    let response = await axios.get(`/api/calorie/${userId}`);

    console.log(response);
    setmyDiet(response.data);
  };

  useEffect(() => {
    getEntries();
  }, []);

  useEffect(() => {
    getCalories();
  }, []);

  const date = new Date(postedAt);
  console.log("Date: "+date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear());

  return (
    <div className="outer_container2">
      <div className="my_health_journal_w_buttons">
       <BPrevious/><div className="health_journal_title"><h3>My Health Journal</h3></div><BNext/>
      </div>

      <div className="entry">
        <h3 className="entry_name">{entryname}</h3><span><strong>{"Date: "+date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()}</strong></span>
        <p>{story}</p>
      </div>
      
      
      <div className="my_workout_routine">
        <h3>My Workout Routine:</h3>
        <p> {myworkout}</p>
      </div>

      <div className="my_diet_diary">
        <h3>Diet Diary:</h3>
        <ul className="food_list_begins">
          {mydiet.map((item, i) => {
            console.log("dietLength:", mydiet.length)
            if (i < mydiet.length - 1 ) {
              let itemList = item.split(", ");
              console.log("itemList:", itemList)
              let calList = itemList[1].replace("calories:", "");
              console.log("look:", itemList);
             return <li className="food_calories" key={i}>{item.split(", ")[0]}{calList}</li> //calList is for calories and {item.split(", ")[0]} is for foods
            } 
            return <li className="food_calories">{item.split(", ")[0]}</li> //this is for the total calories count
          })} 
            {/* // <li className="food_calories" key={i}>{item.split(", ")[0]}{item.split(",")[1]}</li> */}
          
        </ul>
      </div>

    <div className="bottom_w_buttons">
      <BViewAllEntries userId={userId} onClick={handleSubmit}/>
    </div>
  </div>
    
  )
}
