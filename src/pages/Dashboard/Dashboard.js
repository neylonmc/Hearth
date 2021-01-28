import React, { Component } from "react";
import { 
  Row,
  Col,
  Panel, 
  Button, 
  ButtonToolbar, 
  ButtonGroup } from "rsuite";
import "rsuite/lib/styles/index.less";
import "./Dashboard.css";
import Streaming from "../../components/Streaming/Streaming";
import SimilarUsers from "../../components/SimilarUsers/SimilarUsers";
// import movie from "../assets/images/movieIcon.jpeg";
// import book from "../assets/images/bookIcon.jpg";
// import tv from "../assets/images/tvIcon.jpg";
// import musicIcon from "../assets/images/musicIcon.jpeg";

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container  animate__animated animate__fadeIn">
        {/* INITIAL BLOCKS */}
        <Row>
          {/* USER INFO */}
          <Col xs={7} id="block-container">
            <Panel
              id="left-block"
              className="user-container"
              bordered
            >
              <Row>
                <Col>
                  <img
                    className="dash-avatar"
                    src="./images/no-avatar.jpg"
                    alt="dashboard user avatar"
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                   <h1 className="dash-username">username</h1>
                </Col>
              </Row>

              <Streaming />

            </Panel>

            {/* POLLS */}
            <Panel
              id="left-block"
              className="polls-container"
              bordered
            >
              <h2>top polls</h2>
            </Panel>
            
            {/* SIMILAR USERS */}
            <Panel
              id="left-block"
              className="similar-container"
              bordered
            >
              <h2>similar users</h2>
              <SimilarUsers />
            </Panel>

          </Col>

        {/* DASHBOARD ACTIVITY */}
          <Col xs={17} id="block-container">
            <Panel
              className="activity-container"
              bordered
            >
              <h2>activity</h2>
            </Panel>
          </Col>

        </Row>

      </div>
    );
  }
}
export default Dashboard;
