import React from "react";
import "./Logout.css";
import GoogleLogout from "../../components/GoogleAuth/GoogleLogout/GoogleLogout";
// import LoginButton from "../../components/LoginButton/LoginButton";

function Logout() {


  return (
    <div className="login-container">   
        <GoogleLogout />
    </div>
  );
};

export default Logout;