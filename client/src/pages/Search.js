import React from "react";
import Filter from "../components/Filter";

export default function Search () {
  return (
    <>
    <div className="background_image_container">
      <div className="search_page_top_copy_container">
        <h2>Search Through Our Uplifting Profiles Here</h2>
        <p className="body_copy_padding">Select your search parameters below to filter though our user profiles. Perhaps you are looking for someone that aligns with your current health status or goals, or perhaps you just want to search at random. Regardless of your search, you'll find inspiration, insights, and real results achieved through food and fitness! </p>
      </div>
      <Filter />
      </div>
    </>
  );
}
