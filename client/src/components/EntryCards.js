import {React, useState, useEffect} from "react";
import axios from "axios";
import BEditEntry from './BEditEntry'
import BDeleteEntry from './BDeleteEntry'
import BViewEntry from './BViewEntry'
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
        <div className="outer_entry_card_container_me">

          <div className="entry_card_date_me">
            <span><strong>{date(entry.posted_at)}</strong></span>
          </div>
      
          <div className="entry_card_entry_name_me">
            <h3 className="entry_name">{entry.entry_name}</h3>
          </div> 

          <div className="entry_card_view_entry_button_me">
            <BViewEntry 
            // entryId={entry.id} userId={entry.user_id}
            />
          </div>
      
          <div className="entry_card_edit_entry_button_me">
            <BEditEntry entryId={entry.id} userId={entry.user_id}/>
          </div>

          <div className="entry_card_delete_entry_button_me">
            <BDeleteEntry entryId={entry.id} userId={entry.user_id}/>
          </div>

          <div className="entry_preview_me">
            <p>{entry.my_story.slice(0, 120) + "..."}</p>
          </div>
          </div>
          <br></br>
        </div>
      )}
    </div> 
  )
}