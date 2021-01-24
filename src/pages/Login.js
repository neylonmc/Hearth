import React from "react";
import { 
    Row,
    Col,
    Button } from "rsuite";
import 'rsuite/dist/styles/rsuite-default.css';

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
                    <Button appearance="primary">Login</Button>
                </Col>
            </Row>
            <Row> 
                <Col>
                    <Button appearance="ghost">Create Account</Button>
                </Col>
            </Row>
        </div>
        
    )

};

export default Login;