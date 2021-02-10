import React, { useState, useEffect } from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import {
  ButtonGroup,
  Row,
  Col,
  Button
} from "rsuite";
import "rsuite/lib/styles/index.less";
import "./Browse.css";
import allTopics from "../../utils/Topics";
import API from "../../utils/API";

export default function Topics() {
  let { path, url } = useRouteMatch();

  return (
    <div className="browse-container  animate__animated animate__fadeIn">
      <h3 className="browse-title">browse by topic</h3>
      <Row className="topic-links">
        {allTopics.map(topic => {
          return (
            <Col id="link-container" md={6} sm={12}>
              <Link
                id="topic-button"
                to={`${url}/${topic.topic}`}
              >
                {topic.topic}
              </Link>
            </Col>

          )
        })
        }
      </Row>

      <Switch>
        <Route exact path={path}>
          <div className="empty-container" />
        </Route>
        <Route exact path={`${path}/:topic`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
};

function Topic() {

  let { topic } = useParams();

  const [formObject, setFormObject] = useState([]);

  useEffect(() => {
    loadActivities(topic);
  }, [topic])


  function loadActivities(topic) {
    API.getActivitiesByType(topic)
      .then(res => {
        setFormObject(res.data);
      })
      .catch(err => console.log(err));

  }

  return (
    <div className="animate__animated animate__fadeIn" >
        <ButtonGroup className="button-container">
          {formObject.map(data => {
            return (
                <Button
                  id="results-button"
                  href={`/topic/${data.local_ext}`}
                  bordered
                >
                  <img
                    id="topic-image"
                    src={data.Image || "/images/no-image.png"}
                    alt={data.title}
                  />
                  <p id="topic-title">{data.title}</p>
                </Button>
            );

          })}
        </ButtonGroup>
    </div>
  )

}




