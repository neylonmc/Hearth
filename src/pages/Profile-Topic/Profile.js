import React from 'react';
import { 
    Row,
    Col,
    PanelGroup,
    Panel 
} from "rsuite";
import 'rsuite/dist/styles/rsuite-dark.css';
import "./Profile-Topic.css";
import Streaming from "../../components/Streaming/Streaming";
import UserInfo from "../../components/UserInfo/UserInfo";
import Activity from "../../components/Activity/Activity";

function Profile() {

    return(
        <div className="page-container animate__animated animate__fadeIn">
            <Row className="header-container">
                <Col sm= {3} >
                    <img 
                        className = "page-image"
                        src= "./images/no-image.png"
                        alt= "icon of topic poster"
                    />
                </Col>
                <Col sm= {21}>
                    <Row>
                        <h3 className="page-title">username</h3>
                    </Row>
                    
                </Col>
            </Row>

            <Streaming />

            <PanelGroup 
                className= "panel-container"
                accordion 
            >
                <Panel 
                    id="panel"
                    className="about-panel"
                    header="about" 
                    defaultExpanded
                >
                    <UserInfo />
                </Panel>
                <Panel 
                    id="panel"
                    className="activity-panel"
                    header="activity" 
                    defaultExpanded
                >
                    <Activity />
                </Panel>
            </PanelGroup>

        </div>
    )

};

export default Profile;