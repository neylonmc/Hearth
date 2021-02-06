import React from "react";
import "./Login.css";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";

function Login() {

  return (
    <div className="login-container">
        <GoogleLogin />
    </div>
  );
}

export default Login;
