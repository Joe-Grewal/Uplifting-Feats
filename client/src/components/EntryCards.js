import React from "react";

export default function EntryCards () {

  return (

    <div className="outer_entry_card_container">
      
      <div className="view_all_button_container">
        <button className="view_all_button"><h2>VIEW ENTRY</h2></button>
      </div>

      <div className="entry_preview">
      <h3 className="entry_name">Entry Name:</h3><span><strong>Entry Date:</strong></span>
        <p>...</p>
      </div>

    </div> 
  )
}