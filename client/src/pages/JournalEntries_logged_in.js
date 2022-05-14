import React from "react";
import EntryCards from "../components/EntryCards";



export default function Search () {
  return (
    <>
      <div className="search_page_top_copy_container">
        <h3>Your Journal Entries</h3>
        <p>Search through and edit or delete past entries</p>
      </div>
      <EntryCards/>
    </>
  );
}
