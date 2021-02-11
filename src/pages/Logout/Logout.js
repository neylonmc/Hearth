import React from "react";
import "./Logout.css";
import GoogleLogout from "../../components/GoogleAuth/GoogleLogout/GoogleLogout";
import Logo from "../../components/Logo/Logo";
function Logout() {
  return (
    <div className="logout-container">
      <Logo />
      <div className="logout-button">
        <GoogleLogout />
      </div>
    </div>
  );
}

export default Logout;
