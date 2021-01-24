import React from "react";
import { 
    Row,
    Col,
    Button } from "rsuite";
import 'rsuite/dist/styles/rsuite-dark.css';

function Login() {


    return (
        <div className="login-container">
            <Row> 
                <Col>
                    <h1 className="login-header">hearth</h1>
                </Col>
            </Row>
            <Row> 
                <Col>
                    <Button 
                        id="login-buttons" 
                        className="login-btn"
                        size="lg" 
                        appearance="primary"
                        block
                    > Login </Button>
                </Col>
            </Row>
            <Row> 
                <Col>
                    <Button 
                        id="login-buttons" 
                        className="account-btn"
                        size="lg" 
                        block
                    > Create Account </Button>
                </Col>
            </Row>
        </div>
        
    )

};

export default Login;