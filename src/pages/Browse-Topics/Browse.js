import React from "react";
import {
  BrowserRouter as Router,
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

export default function Topics() {
  let { path, url } = useRouteMatch();

  return (
    <div className="browse-container">
      <h3 className="browse-title">browse by topic</h3>
      <Row className="topic-links">
        { allTopics.map(topic => {
            return( 
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
        <Route exact path={path} />
        <Route exact path={`${path}/:topic`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
};

function Topic() {

  let { topic } = useParams();

  // Shuffle Data [Fisher-Yates Method]
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  var shuffledArray = shuffle(Entertainment);

  return (
    <div className="topic-container">
      <Panel
        className="topic-panel"
      >
        <ButtonGroup className="button-container">
            { shuffledArray.map(data => {
              if (data.topic === topic) {
                return(
                  <Col md={4} sm={12}>
                      <Button  
                        id="results-button"
                        bordered
                      >
                          <img 
                              id= "topic-image"
                              src= { data.img }
                              alt= { data.title }
                              href={ data.topic_url }
                          />
                      </Button>
                  </Col>

                );
              } 
            }) }
        </ButtonGroup>
      </Panel>
    </div>
  )

}


  

