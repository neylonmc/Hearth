import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormControlLabel,
  FormControl,
  Button
} from "rsuite";
import "rsuite/lib/styles/index.less";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <FormGroup size="lg" controlId="email">
          <FormControlLabel>Email</FormControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup size="lg" controlId="password">
          <FormControlLabel>Password</FormControlLabel>
          <FormControl
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button id="login-buttons" className="account-btn" size="lg" block type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <Button id="login-buttons" className="account-btn" size="lg" block>
            Create Account
          </Button>
      </Form>
    </div>
  );
};

export default LoginForm;