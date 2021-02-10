import React, { useEffect, useState } from 'react';
import { 
    Row,
    Col,
    PanelGroup,
    Panel 
} from "rsuite";
import "./Profile-Topic.css";
import UserInfo from "../../components/UserInfo/UserInfo";
import UserActivity from "../../components/Activity/UserActivity";

function Profile() {

  const [ userState, setUser ] = useState([])

  useEffect(() => {

    setUser(JSON.parse(window.sessionStorage.getItem("myUserEntity")));
  }, []);

    return(
        <div className="page-container animate__animated animate__fadeIn">
            <Row className="header-container">
                <Col sm= {3} >
                    <img 
                        className = "page-image"
                        src= {userState.Image || "./images/no-image.png"}
                        alt= "icon of topic poster"
                    />
                </Col>
                <Col sm= {20}>
                    <h3 className="page-title">{userState.Name || "username" }</h3>
                </Col>
            </Row>

            <PanelGroup 
                className= "panel-container"
                accordion 
            >
                <Panel 
                    id="panel"
                    className="about-panel"
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
                    <UserActivity />
                </Panel>
            </PanelGroup>

        </div>
    )

};

export default Profile;