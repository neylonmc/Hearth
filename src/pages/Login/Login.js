import React from "react";
import "./Login.css";
import GoogleLogin from "../../components/GoogleAuth/GoogleLogin/GoogleLogin";
import GoogleLogout from "../../components/GoogleAuth/GoogleLogout/GoogleLogout";
// import LoginButton from "../../components/LoginButton/LoginButton";
import LoginLogo from "../../components/Logo/LoginLogo";

function Login() {

  return (
    <div className="login-container">
        <GoogleLogin />
    </div>
  );
}

export default Login;
