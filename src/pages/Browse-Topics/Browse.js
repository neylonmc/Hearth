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
  Panel,
  Button
} from "rsuite";
import "rsuite/lib/styles/index.less";
import "./Browse.css";
import allTopics from "../../utils/Topics";
import Entertainment from "../../utils/TopEntertainment";
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
                to={`${url}/${topic.api}`}
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
    <div className="topic-container  animate__animated animate__fadeIn" >
      <Panel
        className="topic-panel"
      >
        <ButtonGroup className="button-container">
          {formObject.map(data => {
            return (
              <Col
                id="results-container"
                className="animate__animated animate__fadeIn"
                md={4}
                sm={12}
              >
                <p>{data.title}</p>
                <Button
                  id="results-button"
                  href={data.local_ext}
                  bordered
                >
                  <img
                    id="topic-image"
                    src={data.img}
                    alt={data.title}
                  />
                </Button>
              </Col>

            );

          })}
        </ButtonGroup>
      </Panel>
    </div>
  )

}




