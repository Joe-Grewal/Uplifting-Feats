import React, { useState, useEffect } from "react";
import axios from "axios";
import BPrevious from "./BPrevious";
import BNext from "./BNext";
import BViewAllEntries from "./BViewAllEntries";
import BAddEntry from "./BAddEntry";
import BEditEntry from "./BEditEntry";
import BDeleteEntry from "./BDeleteEntry";

export default function MyHealthJournal() {
  const [entryname, setEntryname] = useState("");
  const [story, setStory] = useState("");
  const [mydiet, setmyDiet] = useState("");
  const [myworkout, setmyWorkout] = useState("");

  const getEntries = async () => {
    try {
      let response = await axios.get("/api/myentry");
      console.log(response);
      console.log(response.data.user.entry_name);
      setStory(response.data.user.my_story);
      setEntryname(response.data.user.entry_name);
      setmyDiet(response.data.user.my_diet);
      setmyWorkout(response.data.user.my_workout);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEntries();
  }, []);

  return (
    <div className="outer_container2">
      <div className="my_health_journal_w_buttons">
        <BPrevious />
        <h3>My Health Journal</h3>
        <BNext />
      </div>

      <div className="entry">
        <h3 className="entry_name">Entry Name: {entryname}</h3>
        <span>
          <strong>Entry Date:</strong>
        </span>
        <p>{story}</p>
      </div>

      <div className="my_workout_routine">
        <h3>My Workout Routine:</h3>
        <p> {myworkout}</p>
      </div>

      <div className="my_diet_diary">
        <h3>Diet Diary:</h3>
        <p> {mydiet}</p>
      </div>

      <div className="bottom_w_buttons">
        <BViewAllEntries />
        <BAddEntry />
        <BEditEntry />
        <BDeleteEntry />
      </div>
    </div>
  );
}
