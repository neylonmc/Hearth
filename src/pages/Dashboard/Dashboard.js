import React, { Component, useEffect, useState } from "react";
import {
  Row,
  Col,
  Panel,
  // Button,
  // ButtonToolbar,
  // ButtonGroup
} from "rsuite";
import "./Dashboard.css";
import API from "../../utils/API";
import Streaming from "../../components/Streaming/Streaming";
import SimilarUsers from "../../components/SimilarUsers/SimilarUsers";
import Activity from "../../components/Activity/TopicActivity";

function Dashboard() {
  const [userState, setUser] = useState([]);

  useEffect(() => {
    setUser(JSON.parse(window.sessionStorage.getItem("myUserEntity")));

    API.getUser(userState.Id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => err);
  }, [userState.Id]);

  return (
    <div className="dashboard-container animate__animated animate__fadeIn">
      {/* INITIAL BLOCKS */}
      <Row>
        {/* USER INFO */}
        <Col xs={7} id="block-container">
          <Panel id="left-block" className="user-container" bordered>
            <Row>
              <Col>
                <img
                  className="dash-avatar"
                  src={userState.Image || "./images/no-avatar.jpg"}
                  alt="dashboard user avatar"
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <h1 className="dash-username">{userState.Name}</h1>
              </Col>
            </Row>

            <Streaming />
          </Panel>

          {/* POLLS */}
          <Panel id="left-block" className="polls-container" bordered>
            <h2>top polls</h2>
          </Panel>

          {/* SIMILAR USERS */}
          <Panel id="left-block" className="similar-container" bordered>
            <h2>similar users</h2>
            <SimilarUsers />
          </Panel>
        </Col>

        {/* DASHBOARD ACTIVITY */}
        <Col xs={17} id="block-container">
          <Panel className="activity-container">
            <Activity />
          </Panel>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
