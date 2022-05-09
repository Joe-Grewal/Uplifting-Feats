import React from "react";

export default function Nav () {

  return (
    <header className="nav_container">
    <nav className="navigation">
      <div className="logo"><a className="logo_link" href="/home">Uplifting Feats</a></div>
      <div className="navlinks">
        <a className="right_links" href="/home">Search</a>
        <a className="right_links" href="/My_Profile">My Profile</a>
        <a className="right_links" href="/login">Login</a>
      </div>
    </nav>
    </header>
  )
}