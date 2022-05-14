import React from "react";
import BViewAllEntries from "./BViewAllEntries";

export default function EntryCards () {

  return (

    <div className="entry_card_spacing_container">

        <div className="outer_entry_card_container">

          <div className="entry_card_date">
            <span><strong>Date:</strong></span>
          </div>
      
          <div className="entry_card_entry_name">
            <h3 className="entry_name">Entry Name:</h3>
          </div> 
      
          <div className="entry_card_edit_entry_button">
            {/* <BEditEntry/> */}
          </div>

          <div className="entry_card_view_entry_button">
            <BViewAllEntries/>
          </div>

          <div className="entry_preview">
            <p></p>
          </div>

        </div>

    </div> 
  )
}