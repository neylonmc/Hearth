import React from "react";
import { ButtonToolbar, Button } from "rsuite";
import { Link } from "react-router-dom";
import "rsuite/lib/styles/index.less";
import "./Topics.css";

const Topics = () => {
  return (
    <div className="select-container">
      <h3 className="select-title">select entertainment type</h3>
      <ButtonToolbar className="button">
        <Button id="select-button" block >
            books
          </Button>
          <Button id="select-button" block >
            movies
          </Button>
          <Button id="select-button" block >
            television
          </Button>
          <Button id="select-button" block >
            music
          </Button>
          <Button id="select-button" block >
            <Link style={{"color": "#dee2e6"}} to="/create-new">
              {" "}
              create new review
            </Link>
          </Button>
      </ButtonToolbar>
    </div>
  );
};

export default Topics;
