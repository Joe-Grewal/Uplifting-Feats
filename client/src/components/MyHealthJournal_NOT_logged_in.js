import React from "react";
import BPrevious from "./BPrevious";
import BNext from "./BNext";
import BViewAllEntries from "./BViewAllEntries";
import BAddEntry from "./BAddEntry";
import BEditEntry from "./BEditEntry";
import BDeleteEntry from "./BDeleteEntry";


export default function MyHealthJournal () {

  return (
    <div className="outer_container2">
      <div className="my_health_journal_w_buttons">
       <BPrevious/><h3>My Health Journal</h3><BNext/>
      </div>

      <div className="entry">
        <h3 className="entry_name">Entry Name:</h3><span><strong>Entry Date:</strong></span>
        <p></p>
      </div>
      
      
      <div className="my_workout_routine">
        <h3>My Workout Routine:</h3>
        <p></p>
      </div>

      <div className="my_diet_diary">
        <h3>Diet Diary:</h3>
        <p></p>
      </div>

    <div className="bottom_w_buttons">
      <BViewAllEntries/>
    </div>
  </div>
    
  )
}