import React, { useEffect, useState } from 'react';
import { 
    Row,
    Col,
    PanelGroup,
    Panel 
} from "rsuite";
import "./Profile-Topic.css";
// import UserInfo from "../../components/UserInfo/UserInfo";
import UserActivity from "../../components/Activity/UserActivity";
import API from "../../utils/API";
import Streaming from "../../components/Streaming/Streaming";

function Profile() {

  const [ sessionState, setSession ] = useState([]);
  const [ userState, setUser ] = useState([]);

  useEffect(() => {

    setSession(JSON.parse(window.sessionStorage.getItem("myUserEntity")));
    
        API.getUser(sessionState.Id)
          .then((res) => {
            setUser(res.data)
            console.log(res.data)
        }).then(() => {
            console.log("user data pulled")
        }).catch(err => err)

  }, [sessionState.Id]);

    return(
        <div className="page-container animate__animated animate__fadeIn">
            <Row>
                <Col md= {8} />
                <Col md= {8} >
                    <img 
                        className = "page-image"
                        src= {sessionState.Image || "./images/no-image.png"}
                        alt= "icon of topic poster"
                    />
                </Col>
                <Col md= {8}/>
            </Row>
            <Row>
                <Col md= {8}/>
                <Col md= {8}>
                    <h3 className="page-title">my profile</h3>
                </Col>
                <Col md= {8}/>
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
                    <div className="info-container">
                        <Row className="stream-container">
                            <Streaming />
                        </Row>
                    </div>
                </Panel>
                <Panel 
                    id="panel"
                    className="activity-panel"
                    header="activity"
                    defaultExpanded
                >
                    <UserActivity user= {userState}/>
                </Panel>
            </PanelGroup>
        </div>


    )

};

export default Profile;