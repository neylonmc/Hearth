import React from 'react';
import { 
    Row,
    Col,
    Button 
} from "rsuite";
import 'rsuite/dist/styles/rsuite-dark.css';
// import Nav rom "../components/Nav";
// import UserInterests from "../components/UserInterests";
// import UserActivity from "../components/UserActivity";

function Profile(props) {

    return(
        <div id="page-container">
            {/* <Nav /> */}
            <Row>
                <Col>
                    {/* PROFILE PICTURE */}
                    <img 
                        className= "profile-picture"
                        src= { props.avatar_url || "./images/no-avatar.png" }
                        alt= "selected user's profile photograph"/>
                </Col>
            </Row>

            <Row>
                <Col>
                    {/* USERNAME */}
                    <h1 className="username">{ props.username || "username" }</h1>
                </Col>
            </Row>

            {/* NOW STREAMING */}
            <Row className="user-now-streaming">
                <Col 
                    id="usr-stream"
                    className="usr-listening"
                    xs={12} 
                >   
                    <h3 id="usr-stream-txt">
                        now listening to...
                    </h3>
                </Col>
                <Col 
                    id="usr-stream"
                    className="usr-watching"
                    xs={12}
                >
                    <h3 id="usr-stream-txt"> 
                        now watching... 
                    </h3>
                </Col>
            </Row>

            {/* USER INTERESTS */}
            <Row id="page-block" className="usr-int-container">
                <Row>
                    <Col xs={20}>
                        <h2 id="block-header">user interests</h2>
                    </Col>
                    <Col xs={4}>
                        <Button
                            className="edit-usr-int-btn"
                            size="sm"
                            appearance= "subtle"
                        > edit </Button>
                    </Col>
                </Row>
                <Row>
                    {/* PLACEHOLDER FOR USER INTERESTS */}
                    {/* <UserInterests /> */}
                </Row>
            </Row>

            <Row id="page-block" className="usr-act-container">
                <Row>
                    <Col xs={24}>
                        <h2 id="block-header">user activity</h2>
                    </Col>
                </Row>
                <Row>
                    {/* PLACEHOLDER FOR USER ACTIVITY */}
                    {/* <UserActivity /> */}
                </Row>
            </Row>
            
        </div>
    )

};

export default Profile;