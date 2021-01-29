import React from 'react';
import { 
    Row,
    Col,
    Button 
} from "rsuite";
import 'rsuite/dist/styles/rsuite-dark.css';
import "./Profile-Topic.css";
import Streaming from "../../components/Streaming/Streaming";
// import UserInterests from "../components/UserInterests";
// import UserActivity from "../components/UserActivity";

function Profile(props) {

    return(
        <div id="page-container" className=" animate__animated animate__fadeIn">
            <div id="page-header">
                <Row>
                    <Col id="page-image-cont">
                        {/* PROFILE PICTURE */}
                        <img 
                            id="page-image"
                            className= "profile-picture"
                            src= { props.avatar_url || "./images/no-image.png" }
                            alt= "page photograph"/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {/* USERNAME */}
                        <h1 
                            id="page-title" 
                            className="username"
                        > { props.username || "username" } </h1>
                    </Col>
                </Row>

                {/* NOW STREAMING */}
                <Streaming />
            </div>

            {/* USER INTERESTS */}
            <Row id="page-block-1" className="usr-int-container">
                <Row>
                    <Col xs={20}>
                        <h2 id="block-header">user interests</h2>
                    </Col>
                    <Col xs={4}>
                        <Button
                            className="edit-usr-int-btn"
                            size="lg"
                            appearance= "subtle"
                        > edit </Button>
                    </Col>
                </Row>
                <Row>
                    {/* PLACEHOLDER FOR USER INTERESTS */}
                    {/* <UserInterests /> */}
                </Row>
            </Row>

            <Row id="page-block-2" className="usr-act-container">
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