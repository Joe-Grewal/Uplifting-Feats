import {React, useState, useEffect} from "react";
import axios from "axios";
import BViewEntry from "./BViewEntry";

export default function EntryCards (props) {


  const [entries, setEntries] = useState([]);
  const [userId, setUserId] = useState(props.userId);
  console.log("stateOfEntries:", entries);
  const getEntries = () => {
  
     axios.get(`/api/${userId}/allmyentries`)
        .then((res) => {
          console.log("allMyEntries:", res.data.entries);
          const allMyEntries = res.data.entries;
          setEntries(allMyEntries);
        })
      // console.log("allMyEntries:", response.data.entries);
      // setEntries(response.data.entries);
      // console.log("stateOfEntries2:", entries);
      // console.log("response.data.user.user_id:", response.data.user.user_id)
      // setUserId(response.data.user.user_id);
      // console.log("userId", userId)
    // }
  };

  useEffect(()=>{
    console.log("useEffectlog:", entries);
  },[entries])

  useEffect(
    getEntries, []);

  const date = (postedAt) => {
    const dateOfCard = new Date(postedAt);
    return "Date: "+dateOfCard.getDate()+
                "/"+(dateOfCard.getMonth()+1)+
                "/"+dateOfCard.getFullYear();
  };

  return (

    <div className="entry_card_spacing_container">
      {entries.map((entry, i) => 
      <div key={entry.id}>
        <div className="outer_entry_card_container">

          <div className="entry_card_date">
            <span><strong>{date(entry.posted_at)}</strong></span>
          </div>
      
          <div className="entry_card_entry_name">
            <h3 className="entry_name">{entry.entry_name}</h3>
          </div> 
      
          <div className="entry_card_edit_entry_button">
            {/* <BEditEntry/> */}
          </div>

          <div className="entry_card_view_entry_button">
            <BViewEntry userId={props.userId} index={i}/>
          </div>

          <div className="entry_preview">
            <p>{entry.my_story.slice(0, 120) + "..."}</p>
          </div>
        </div>
        <br></br>
        </div> 
      )}
    </div> 
  )
}