import React from "react";

export default function Nav() {
  return (
    <nav className="navigation">
      <div className="navlogo">
        <a href="/home">Uplifting Feats</a>
      </div>
      <div className="navlinks">
        <a href="/home">Search</a>
        <a href="/My_Profile">My Profile</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}
