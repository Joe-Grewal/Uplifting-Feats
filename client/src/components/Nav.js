import React from "react";

export default function Nav() {
  // const [currentUser, setCurrentUser] = useState(
  //   JSON.parse(localStorage.getItem("user_details"))
  // );

  //   handleLogout = () => {
  //     setCurrentUser({});
  //     localStorage.clear();
  //   };

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
          <a className="right_links" href="/My_Profile">
            My Profile
          </a>
          <a className="right_links" href="/login">
            Login
          </a>
          <a className="right_links" href="/logout">
            Logout
          </a>
        </div>
      </nav>
    </header>
  );
}
