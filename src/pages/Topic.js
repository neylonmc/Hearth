import React from "react";
import { Row, Col, Panel, PanelGroup, Rate, Button } from "rsuite";
import "rsuite/dist/styles/rsuite-dark.css";
// import TopicInfo from "../components/TopicInfo";
// import TopicActivity from "../components/TopicActivity";

function Topic(props) {
  return (
    <div id="page-container">
      <div id="page-header">
        <Row>
          <Col id="page-image-cont">
            {/* TOPIC PICTURE */}
            <img
              id="page-image"
              className="topic-picture"
              src={props.avatar_url || "./images/no-image.png"}
              alt="page photograph"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            {/* TOPIC NAME */}
            <h1 id="page-title" className="topic-name">
              {props.topicName || "topic name"}
            </h1>
          </Col>
        </Row>
      </div>

      {/* TOPIC INFO */}
      <Row id="page-block-1" className="topic-info-container">
        <Row>
          <Col xs={24}>
            <h2 id="block-header">topic info</h2>
          </Col>
        </Row>
        <Row>
          {/* PLACEHOLDER FOR TOPIC INFO */}
          {/* <TopicInfo /> */}
        </Row>
      </Row>

      {/* TOPIC ACTIVITY  */}
      <Row id="page-block-2" className="topic-act-container">
        <PanelGroup accordion id="panelgroup-review">
          <Col xs={24}>
            <h2 id="block-header">topic activity</h2>
          </Col>

          {/* USER RATING  */}
          <Rate
            id="topic-rating"
            className="rating-stars"
            defaultValue={2.5}
            allowHalf
          />
          <Panel
            id="user-review-1"
            className="user-review-topics"
            header="user1"
            defaultExpanded
          >
            <p class="user-review"> user1 comments </p>
          </Panel>

          {/* USER RATING  */}
          <Rate className="rating-stars" defaultValue={2.5} allowHalf />
          <Panel
            id="user-review-2"
            className="user-review-topics"
            header="user2"
          >
            <p class="user-review"> user2 comments </p>
          </Panel>

          {/* USER RATING  */}

          <Rate className="rating-stars" defaultValue={2.5} allowHalf />
          <Panel
            id="user-review-3"
            className="user-review-topics"
            header="user3"
          >
            <p class="user-comments-topics"> user3 comments </p>
          </Panel>
        </PanelGroup>
      </Row>
      <Row>
        <Col>
          {/* GET RANDOM TOPIC GENERATED */}
          <Button
            id="topic-button"
            className="topic-btn"
            size="lg"
            appearance="primary"
            block
          >
            get another
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Topic;
