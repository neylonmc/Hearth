import React from "react";
import { ButtonToolbar, Button } from "rsuite";
import "rsuite/lib/styles/index.less";
import "./SelectStyle.css";

const Select = () => {
  return (
    <div className="flex-container">
      <h1 className="select-item">Select An Entertainment Type</h1>
      <ButtonToolbar className="button">
        <Button
          className="select-button"
          style={{
            backgroundColor: "#dcddc7",
            fontFamily: "Raleway",
            color: "#62130A",
            fontSize: "20px",
          }}
          block
        >
          Books
        </Button>
        <Button
          className="select-button"
          style={{
            backgroundColor: "#dcddc7",
            fontFamily: "Raleway",
            color: "#62130A",
            fontSize: "20px",
          }}
          block
        >
          Movies
        </Button>
        <Button
          className="select-button"
          style={{
            backgroundColor: "#dcddc7",
            fontFamily: "Raleway",
            color: "#62130A",
            fontSize: "20px",
          }}
          block
        >
          Television
        </Button>
        <Button
          className="select-button"
          style={{
            backgroundColor: "#dcddc7",
            fontFamily: "Raleway",
            color: "#62130A",
            fontSize: "20px",
          }}
          block
        >
          Music
        </Button>
      </ButtonToolbar>
    </div>
  );
};

export default Select;
