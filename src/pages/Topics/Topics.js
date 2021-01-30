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
  Row,
  Col,
  Panel,
  Button
} from "rsuite";
import "rsuite/lib/styles/index.less";
import "./Topics.css";
import allTopics from "../../utils/Topics";
import Entertainment from "../../utils/TopEntertainment";

export default function Topics() {
  let { path, url } = useRouteMatch();

  return (
    <div className="browse-container">
      <h3 className="browse-title">browse by topic</h3>
      <div className="topic-links">
        { allTopics.map(topic => {
            return( 
              <Link 
                id="topic-button"
                to={`${url}/${topic.topic}`}
              >
                {topic.topic}
              </Link>

            )
          })
        }
      </div>
      
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
        header={ topic }
        bordered
      >
        <div className="topic-results">
            { shuffledArray.map(data => {
              if (data.topic === topic) {
                return(

                  <Col md={6} sm={12} id="button-column">
                      <Button bordered>
                          <img 
                              src={ data.img }
                              alt={ data.title }
                          />
                      </Button>
                  </Col>

                );
              } 
            }) }
        </div>
      </Panel>
    </div>
  )

}


  

