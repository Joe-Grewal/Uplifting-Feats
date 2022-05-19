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

  // const [allEntries, setAllEntries] = useState(""); // will come back later if needed
  // const [entryIndex, setEntryIndex] = useState(""); // for the next and previous buttons

    //for using url params to find view entry index
    const params = new URLSearchParams(window.location.search);
    const viewIndex = params.get("entry");
    console.log("ENTRYINDEX FROM PARAMS:", viewIndex);

  const [entries, setEntries] = useState([]);
  console.log("stateOfEntries:", entries);
  const [entryIndex, setEntryIndex] = useState(""); //for next and previous

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
    console.log("***entryIndex:", entryIndex, "***entries.length", entries.length);
    if (entryIndex < entries.length - 1) {
      setEntryIndex(() => entryIndex + 1);
    }
  }

  const handlePrevious = (e) => {
    e.preventDefault();
    console.log("***entryIndex:", entryIndex, "***entries.length", entries.length);
    if (entryIndex > 0) {
      setEntryIndex(() => entryIndex - 1);
    }
  }

  const getEntries = () => {
     axios.get(`/api/${userId}/allmyentries`)
        .then((res) => {
          console.log("allMyEntries:", res.data.entries);
          const allMyEntries = res.data.entries;
          setEntries(allMyEntries);
          console.log("************LastEntryObject:", allMyEntries[allMyEntries.length - 1]);
          setEntryIndex(allMyEntries.length - 1);
          if (viewIndex) {
            setEntryIndex(viewIndex);
           }
          setEntryId(allMyEntries[allMyEntries.length - 1].id);
          setStory(allMyEntries[allMyEntries.length - 1].my_story);
          setEntryName(allMyEntries[allMyEntries.length - 1].entry_name);
          setMyWorkout(allMyEntries[allMyEntries.length - 1].my_workout);
          setPostedAt(allMyEntries[allMyEntries.length - 1].posted_at);
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
  //     console.log("getEntries:", response);
  //     setStory(response.data.user.my_story);
  //     setEntryName(response.data.user.entry_name);
  //     //setmyDiet(response.data.user.my_diet);
  //     setMyWorkout(response.data.user.my_workout);
  //     setPostedAt(response.data.user.posted_at);
  //     console.log("response.data.user.user_id:", response.data.user.user_id)
  //     setUserId(response.data.user.user_id);
  //     console.log("userId", userId)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getCalories = async () => {
    const userDetails = JSON.parse(localStorage.getItem("user_details"));
    console.log("userDetails:", userDetails);
    console.log("#entryId:", entries[entryIndex].id);
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

  const date = new Date(postedAt); // change this date value to actual value (entries[entryIndex].posted_at)
  console.log("Date: "+date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear());

  return (
    <div className="outer_container2">
      <div className="my_health_journal_w_buttons">
      { entryIndex > 0 && <BPrevious onClick={handlePrevious}/>}<div className="health_journal_title"><h2>My Health Journal</h2></div>{ entryIndex < entries.length - 1 && <BNext onClick={handleNext}/>}
      </div>

      <div className="entry">
      {entries[entryIndex] && <h3 className="entry_name">{entries[entryIndex].entry_name}</h3>}<span className="date">{"Date: "+date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()}</span> 
        {entries[entryIndex] && <p>{entries[entryIndex].my_story}</p> }
      </div>
      
      
      <div className="my_workout_routine">
        <h2 className="heading_light_weight">My Workout Routine:</h2>
        {entries[entryIndex] && <p> {entries[entryIndex].my_workout}</p> }
      </div>

      <div className="my_diet_diary">
        <h2 className="heading_light_weight">Diet Diary:</h2>
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
      <BViewAllEntries userId={userId} onClick={handleSubmit}/>
    </div>
  </div>
    
  )
}
