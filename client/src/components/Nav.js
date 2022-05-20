import { React, useState, useEffect } from "react";

export default function Nav() {
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("user_details"));
  }, [loggedInUser]);

  let myProfileLink = "";
  if (localStorage.getItem("user_details")) {
    console.log(
      "LOOK HERE:",
      JSON.parse(localStorage.getItem("user_details")).user.id
    );
    myProfileLink = `/users/${
      JSON.parse(localStorage.getItem("user_details")).user.id
    }`;
  }

  const handleLogout = () => {
    setLoggedInUser({});
    localStorage.clear();
  };

  if (loggedInUser) {
    return (
      <header className="nav_container">
        <nav className="navigation">
          <div className="logo">
            <a className="logo_link" href="/home">
              Uplifting Feats
            </a>
          </div>
          <div className="navlinks">
            <a className="right_links" href="/home">
              Search
            </a>
            <a className="right_links" href={myProfileLink}>
              My Profile
            </a>
            <a className="right_links" href="/login" onClick={handleLogout}>
              Logout
            </a>
          </div>
        </nav>
      </header>
    );
  }
  return (
    <header className="nav_container">
      <nav className="navigation">
        <div className="logo">
          <a className="logo_link" href="/home">
            Uplifting Feats
          </a>
        </div>
        <div className="navlinks">
          <a className="right_links" href="/home">
            Search
          </a>
          <a className="right_links" href="/login">
            Login
          </a>
        </div>
      </nav>
    </header>
  );
}
