import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BPrevious from "./BPrevious";
import BNext from "./BNext";
import BViewAllEntries from "./BViewAllEntries";
import BAddEntry from "./BAddEntry";
import BEditEntry from "./BEditEntry";
import BDeleteEntryOnProfile from "./BDeleteEntryOnProfile";

export default function MyHealthJournal(props) {

  const [entries, setEntries] = useState([]);
  console.log("stateOfEntries:", entries);
  const [entryIndex, setEntryIndex] = useState(""); //for next and previous

  const [currentEntry, setCurrentEntry] = useState("");

  const [entryId, setEntryId] = useState("");
  const [entryname, setEntryName] = useState("");
  const [story, setStory] = useState("");
  const [mydiet, setMyDiet] = useState([]);
  const [myworkout, setMyWorkout] = useState("");
  const [postedAt, setPostedAt] = useState("");
  const [userId, setUserId] = useState(props.userId);

  const navigate = useNavigate();

  console.log("entryIndex1:", entryIndex, "entries.length1", entries.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("props:", props)
    navigate(`/users/${props.userId}/view_entries`);
  }

  const handleNext = (e) => {
    e.preventDefault();
    console.log("***entryIndex:", entryIndex, "***entries.length", entries.length, entries[entryIndex]);
    if (entryIndex < entries.length - 1) {
      setEntryIndex(() => entryIndex + 1);
      setCurrentEntry(entries[entryIndex]);
    }
  }

  const handlePrevious = (e) => {
    e.preventDefault();
    console.log("***entryIndex:", entryIndex, "***entries.length", entries.length);
    if (entryIndex > 0) {
      setEntryIndex(() => entryIndex - 1);
      setCurrentEntry(entries[entryIndex]);
    }
  }

  const getEntries = () => {
    console.log("props.userId", props.userId)
    axios.get(`/api/${props.userId}/allmyentries`)
       .then((res) => {
         console.log("allMyEntries:", res.data.entries);
         const allMyEntries = res.data.entries;
         setEntries(allMyEntries);
         console.log("************LastEntryObject:", allMyEntries[allMyEntries.length - 1]);
         setEntryIndex(allMyEntries.length - 1);
         setEntryId(allMyEntries[allMyEntries.length - 1].id);
         setStory(allMyEntries[allMyEntries.length - 1].my_story);
         setEntryName(allMyEntries[allMyEntries.length - 1].entry_name);
         setMyWorkout(allMyEntries[allMyEntries.length - 1].my_workout);
         setPostedAt(allMyEntries[allMyEntries.length - 1].posted_at);
         setCurrentEntry(allMyEntries[allMyEntries - 1]);
       })
 };

 useEffect(()=>{
   console.log("stateOfEntries:", entries);
 },[entries])

 useEffect(
   getEntries, []);

  // const getEntries = async () => {
  //   try {
  //     let response = await axios.get("/api/myentry");
  //     console.log(response);
  //     setEntryId(response.data.user.id);
  //     console.log("entryId:", response.data.user.id);
  //     setStory(response.data.user.my_story);
  //     setEntryname(response.data.user.entry_name);
  //     //setmyDiet(response.data.user.my_diet);
  //     setmyWorkout(response.data.user.my_workout);
  //     setPostedAt(response.data.user.posted_at);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getCalories = async () => {
    // const userDetails = JSON.parse(localStorage.getItem("user_details"));
    console.log("calorieId:", entries[entryIndex]);
    let response = await axios.get(`/api/calorie/${entries[entryIndex].id}`);

    console.log(response);
    setMyDiet(response.data);
  };

  useEffect(() => {
    getEntries();
  }, []);

  useEffect(() => {
    getCalories();
  }, [entryIndex]);

  const date = new Date(postedAt);
  console.log("Date: "+date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear());

  return (
    <div className="outer_container2">
      <div className="my_health_journal_w_buttons">
        { entryIndex > 0 && <BPrevious onClick={handlePrevious}/> }
        <div className="health_journal_title"><h2>My Health Journal</h2></div>
        { entryIndex < entries.length - 1 && <BNext onClick={handleNext}/> }
      </div>

      <div className="entry">
        {entries[entryIndex] && <h3 className="entry_name">{entries[entryIndex].entry_name}</h3>}
        <span className="date">
          {"Date: "+date.getDate()+ // look into date here
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()}
        </span>
       {entries[entryIndex] && <p>{entries[entryIndex].my_story}</p> }
      </div>

      <div className="my_workout_routine">
        <h2 className="heading_light_weight">Workout Routine</h2>
      {entries[entryIndex] && <p> {entries[entryIndex].my_workout}</p> }
      </div>

      {/* <div className="my_diet_diary">
        <h3>Diet Diary:</h3>
        <p> {mydiet}</p>
      </div> */}
      {/* map through mydiet and display each item in a list */}
      <div className="my_diet_diary">
        <h2 className="heading_light_weight">Diet Diary</h2>
        <table className="food_cals_table" CELLSPACING='0'>
          <colgroup>
          <col className="food_column"></col>
          <col className="calories_column"></col>
          </colgroup>

            <tr>
              <th className="table_header">Food Items</th>
              <th className="table_header">Calories</th>
            </tr>
                      
          {mydiet.map((item, i) => {
            console.log("dietLength:", mydiet.length)
            if (i < mydiet.length - 1 ) {
              let itemList = item.split(", ");
              console.log("itemList:", itemList)
              let calList = itemList[1].replace("calories:", "");
              console.log("look:", itemList);

             return   <tr>
                        <td className="foods" key={i}>{item.split(", ")[0]}</td>
                        <td className="calories"> {calList}</td>
                      </tr>
                    }             
                    return  <tr className="total_cals_row">
                              <td colspan='2' className="total_calories">{(item.split(", ")[0].substring(0, 21))}</td>
                            </tr>  
                  })} 
          
           </table>
          </div>

      <div className="bottom_w_buttons">
        <BViewAllEntries onClick={handleSubmit}/>
        <BAddEntry />
        { entries[entryIndex] && <BEditEntry entryId={entries[entryIndex].id}/> }
        { entries[entryIndex] && <BDeleteEntryOnProfile entryId={entries[entryIndex].id} userId={props.userId}/>}
      </div>
    </div>
  );
}
