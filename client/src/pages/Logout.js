import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  let navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user_details"))
  );

  const handleLogout = () => {
    setCurrentUser({});
    localStorage.clear();
  };

  if (currentUser) {
    navigate("/");
    // return (
    //   <div>
    //     <h1>Logout</h1>
    //     <button onClick={handleLogout}>Logout</button>
    //   </div>
    // );
  }

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout} navigate="/login">
        Logout
      </button>
    </div>
    // <div>
    //   <h1>Logout</h1>
    //   <button onClick={() => navigate("/login")}>Login</button>
    // </div>
  );

  // if (!currentUser) {
  //   navigate("/login");
  // }

  // return (
  //   <>
  //     <button onClick={handleLogout}>Logout</button>
  //   </>
  // );
}

export default Logout;
