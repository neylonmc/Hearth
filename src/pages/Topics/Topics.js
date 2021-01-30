import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { ButtonToolbar, Button } from "rsuite";
import "rsuite/lib/styles/index.less";
import "./Topics.css";
import allTopics from "../../utils/Topics";

export default function Topics() {

  let { path, url } = useRouteMatch();

  return (
    <div className="select-container">
      <h3 className="select-title">browse by topic</h3>
      <ButtonToolbar className="button">

        { allTopics.map(topic => {
            return( 
              <Link 
                id="select-button"
                to={`${url}/${topic.topic}`}
              >
                {topic.topic}
              </Link>

            )
          })
        }

      </ButtonToolbar>
      
      <Switch>
        <Route exact path={path}>
          <h3>select a topic</h3>
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

  return (
    <div>
      <p>{ topic }</p>
    </div>
  )

}


  

