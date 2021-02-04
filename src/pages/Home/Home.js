import React from "react";
import { Row, Col, Button } from "rsuite";
import "rsuite/dist/styles/rsuite-dark.css";
import "./Home.css";
import LoginForm from "../Login/Login";

function Login() {
  return (
    <div className="login-container">
      <Row>
        <Col>
          <h1 className="login-header animate__animated animate__fadeInUp">
            welcome
          </h1>
        </Col>
      </Row>
      <div className="login-btn-container animate__animated animate__fadeIn">
        <Row>
          <Col>
            <Button
              id="login-buttons"
              className="login-btn"
              size="lg"
              appearance="primary"
              href="/login"
              block
            >
              login
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button 
              id="login-buttons" 
              className="account-btn" 
              size="lg" 
              href="/select"
              block
            >
              create account
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Login;
