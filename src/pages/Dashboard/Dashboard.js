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
import movie from "../assets/images/movieIcon.jpeg";
import book from "../assets/images/bookIcon.jpg";
import tv from "../assets/images/tvIcon.jpg";
import musicIcon from "../assets/images/musicIcon.jpeg";

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">

        {/* INITIAL BLOCKS */}
        <Row className="header-container">
          <Col xs={12}>
            <Panel
              id="right-block"
              className="user-container"
              header="user info"
              bordered
            >
            </Panel>
            <Panel
              id="right-block"
              className="similar-container"
              header="similar users"
              bordered
            >
            </Panel>
          </Col>
          
          <Col xs={12}>
            <Panel
              id="poll-act"
              className="polls-container"
              header="polls"
              bordered
            >
            </Panel>
          </Col>
        </Row>

        {/* DASHBOARD ACTIVITY */}
        <Row>
          <Col xs={24}>
            <Panel
              id="poll-act"
              className="activity-container"
              header="activity"
              bordered
            >
            </Panel>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Dashboard;
