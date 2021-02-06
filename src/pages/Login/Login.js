import React, { useState } from "react";
import { Form, FormGroup, FormControl, Button } from "rsuite";
import "./Login.css";
import GoogleLogin from "../../components/GoogleAuth/GoogleLogin/GoogleLogin";
import GoogleLogout from "../../components/GoogleAuth/GoogleLogout/GoogleLogout";
// import LoginButton from "../../components/LoginButton/LoginButton";
import LoginLogo from "../../components/Logo/LoginLogo";

function LoginForm() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  return (
    <div className="login-container">
      <LoginLogo />
      <GoogleLogin />
      <GoogleLogout />
      {/* <Form onSubmit={handleSubmit}>
        <FormGroup size="lg" controlId="email">
          <FormControl
            autoFocus
            type="email"
            value={email}
            placeholder="email"
            onChange={(value) => setEmail(value)}
            block
          />
        </FormGroup>
        <FormGroup size="lg" controlId="password">
          <FormControl
            type="password"
            value={password}
            placeholder="password"
            onChange={(value) => setPassword(value)}
            block
          />
        </FormGroup>
        <Button 
          id="login-buttons" 
          className="account-btn" 
          size="lg" 
          type="submit" 
          disabled={!validateForm()}
        >
          login
        </Button>
        
        <div className="sub-container">
          <p id="sub-btn"><a href="/">reset password</a></p>
          <p id="sub-btn"><a href="/select">create account</a></p>
        </div>
      </Form> */}
    </div>
  );
}

export default LoginForm;
