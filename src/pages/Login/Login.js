import React from "react";
import "./Login.css";
import GoogleLogin from "../../components/GoogleAuth/GoogleLogin/GoogleLogin";
import LoginLogo from "../../components/Logo/LoginLogo";
import MediaGrid from "../../components/MediaGrid/MediaGrid";
import { Row, Col } from "rsuite";

function Login() {
  return (
    <div className="login-container">
      <Row>
        <Col className="left-panel animate__animated animate__fadeIn" md={12}>
          <LoginLogo />
          <h3 className="sub-head">
            let your hobbies{" "}
            <br class="mobile-break" style={{ width: "2000px" }}></br> do the
            talking
          </h3>
          <div className="login-btn">
            <GoogleLogin />
          </div>
        </Col>

        <Col className="right-panel animate__animated animate__fadeIn" md={12}>
          <MediaGrid />
        </Col>
      </Row>
    </div>
  );
}

export default Login;
