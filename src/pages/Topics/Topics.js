import React from "react";
import { ButtonToolbar, Button } from "rsuite";
import { Link } from "react-router-dom";
import "rsuite/lib/styles/index.less";
import "./Topics.css";
import Categories from "../Categories/Categories";
import allTopics from "../../utils/Topics";

const Topics = () => {

  console.log(allTopics);

  return (
    <div className="select-container">
      <h3 className="select-title">browse by topic</h3>

      <ButtonToolbar className="button">
        { allTopics.map(topic => {
            return( 
              <Button 
                id="select-button"
                href= {topic.topic_url}
                block 
              >
                  { topic.topic }
              </Button>
            )
          })
        }
      </ButtonToolbar>
    </div>
  );
};

export default Topics;
