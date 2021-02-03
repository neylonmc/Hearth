import React from "react";
import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { 
  Row,
  Col,
  Panel
} from "rsuite";
import "rsuite/lib/styles/index.less";
import NewReview from "../../components/NewReview/NewReview";
import NewRec from "../../components/NewRec/NewRec";
import NewPoll from "../../components/NewPoll/NewPoll";
import "./NewPost.css";

export default function NewPost() {
  let { path, url } = useRouteMatch();

  return (
    <div className="post-container">
      <h3 className="post-title">create post</h3>
      <h4>select post type</h4>
      <Row className="post-links">
        
              <Col id="link-container" md={6} sm={12}>
                <Link 
                  id="post-button"
                  to={`${url}/review`}
                >
                  Review
                </Link>
              </Col>

              <Col id="link-container" md={6} sm={12}>
                <Link 
                  id="post-button"
                  to={`${url}/recommendation`}
                >
                  Recommendation
                </Link>
              </Col>

              <Col id="link-container" md={6} sm={12}>
                <Link 
                  id="post-button"
                  to={`${url}/poll`}
                >
                  Poll
                </Link>
              </Col>
      </Row>
      
      <Switch>
        <Route exact path={path}>
          <div className="empty-container"/>
        </Route>
        <Route exact path={`${path}/review`}> 
            <NewReview />
        </Route>
        <Route exact path={`${path}/recommendation`}> 
            <NewRec />
        </Route>
        <Route exact path={`${path}/poll`}> 
            <NewPoll />
        </Route>
      </Switch>
    </div>
  );
};



  

