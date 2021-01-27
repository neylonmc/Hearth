import React, { Component } from "react";
import { Panel, Button, ButtonToolbar, ButtonGroup } from "rsuite";
import "rsuite/lib/styles/index.less";
import "./DashboardStyle.css";
import movie from "../assets/images/movieIcon.jpeg";
import book from "../assets/images/bookIcon.jpg";
import tv from "../assets/images/tvIcon.jpg";
import musicIcon from "../assets/images/musicIcon.jpeg";

export class Dashboard extends Component {
  render() {
    return (
      <div className="flex-dashboard">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="dashboard-cards">
          <Panel
            shaded
            bordered
            bodyFill
            style={{ display: "inline-block", width: 240 }}
          >
            <img
              src={movie}
              alt="movie"
              style={{ width: "100%", height: "300px" }}
            />
            <Panel header="Top Movie" className="panel-item">
              <p>
                <small>Top movie from users. maybe show rating</small>
              </p>
            </Panel>
          </Panel>

          <Panel
            shaded
            bordered
            bodyFill
            style={{ display: "inline-block", width: 240 }}
          >
            <img
              src={book}
              style={{ width: "100%", height: "300px" }}
              alt="book"
            />
            <Panel header="Top Book" className="panel-item">
              <p>
                <small>Top book from users. maybe show rating</small>
              </p>
            </Panel>
          </Panel>

          <Panel
            shaded
            bordered
            bodyFill
            style={{ display: "inline-block", width: 240 }}
          >
            <img
              src={tv}
              alt="movie"
              style={{ width: "100%", height: "300px" }}
            />
            <Panel header="Top Televison" className="panel-item">
              <p>
                <small>Top artist from users. maybe show rating</small>
              </p>
            </Panel>
          </Panel>

          <Panel
            shaded
            bordered
            bodyFill
            style={{ display: "inline-block", width: 240 }}
          >
            <img
              src={musicIcon}
              alt="music"
              style={{ width: "100%", height: "300px" }}
            />
            <Panel header="Top Music" className="panel-item">
              <p>
                <small>Top television from users. maybe show rating</small>
              </p>
            </Panel>
          </Panel>
        </div>

        <Panel
          header="dashboard"
          className="dashboard-panel"
          collapsible
          bordered
          style={{ marginBottom: "5px" }}
        >
          Find something cool
          <ButtonToolbar>
            <ButtonGroup>
              <Button>Movies</Button>
              <Button>Books</Button>
              <Button>TV</Button>
              <Button>Music</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Panel>
      </div>
    );
  }
}

export default Dashboard;
