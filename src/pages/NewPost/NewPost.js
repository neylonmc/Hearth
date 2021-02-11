import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Row, Col } from "rsuite";
import "rsuite/lib/styles/index.less";
import NewReview from "../../components/NewReview/NewReview";
import NewPoll from "../../components/NewPoll/NewPoll";
import NewTopic from "../../components/NewTopic/NewTopic";
import "./NewPost.css";

export default function NewPost() {
  let { path, url } = useRouteMatch();

  return (
    <div className="post-container  animate__animated animate__fadeIn">
      <h3 className="post-header">create something new</h3>
      <Row className="post-links">
        <Col id="link-container" md={12}>
          <Link id="post-button" to={`${url}/review`}>
            New Review
          </Link>
        </Col>

        {/* <Col id="link-container" md={8}>
          <Link id="post-button" to={`${url}/poll`}>
            New Poll
          </Link>
        </Col> */}
        
        <Col id="link-container" md={12}>
          <Link id="post-button" to={`${url}/topic`}>
            New Topic
          </Link>
        </Col>
      </Row>

      <Switch>
        <Route exact path={path}>
          <div className="empty-container" />
        </Route>
        <Route exact path={`${path}/review`}>
          <NewReview />
        </Route>
        <Route exact path={`${path}/poll`}>
          <NewPoll />
        </Route>
        <Route exact path={`${path}/topic`}>
          <NewTopic />
        </Route>
      </Switch>
    </div>
  );
}
