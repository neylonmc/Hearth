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
import SimilarUsers from "../../components/SimilarUsers/SimilarUsers";
// import movie from "../assets/images/movieIcon.jpeg";
// import book from "../assets/images/bookIcon.jpg";
// import tv from "../assets/images/tvIcon.jpg";
// import musicIcon from "../assets/images/musicIcon.jpeg";

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">

        {/* INITIAL BLOCKS */}
        <Row className="header-container">

          {/* USER INFO */}
          <Col xs={12}>
            <Panel
              id="right-block"
              className="user-container"
              bordered
            >

                <Row className="user-header">
                  <Col xs={4}>
                    <img 
                      className="dash-avatar" 
                      src="./images/no-avatar.png"
                    />
                  </Col>

                </Row>

            </Panel>

            {/* SIMILAR USERS */}
            <Panel
              id="right-block"
              className="similar-container"
              bordered
            >
              <h2>similar users</h2>
              <SimilarUsers />
            </Panel>
          </Col>

          {/* POLLS */}
          <Col xs={12}>
            <Panel
              id="poll-act-block"
              className="polls-container"
              bordered
            >
              <h2>top polls</h2>
            </Panel>
          </Col>
        </Row>

        {/* DASHBOARD ACTIVITY */}
        <Row>
          <Col xs={24}>
            <Panel
              id="poll-act-block"
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
