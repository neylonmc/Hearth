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
        }).then(() => {
            console.log("user data pulled")
        }).catch(err => err)

  }, [sessionState.Id]);

    return(
        <div className="page-container animate__animated animate__fadeIn">
            <Row className="header-container">
                <Col sm= {3} >
                    <img 
                        className = "page-image"
                        src= {sessionState.Image || "./images/no-image.png"}
                        alt= "icon of topic poster"
                    />
                </Col>
                <Col sm= {20}>
                    <h3 className="page-title">{sessionState.Name || "username" }</h3>
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
                    <div className="info-container">
                        <Row>
                            <Streaming />
                        </Row>
                        <Row>
                            <Col md={12}>
                                <p>
                                    <strong 
                                        id="bold"
                                    > Interests : </strong>
                                    
                                    { userState.Interests || "none saved" }
                                </p>
                            </Col>
                            <Col id="right-info" md={12}>
                                <p>
                                    <strong 
                                        id="bold"
                                    > Following : </strong>

                                    { 0 } 
                                </p>
                                <p>
                                    <strong 
                                        id="bold"
                                    > Followers : </strong>

                                    { 0 } 
                                </p>
                            </Col>
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