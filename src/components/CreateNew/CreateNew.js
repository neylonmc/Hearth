import React from "react";
import {
  Checkbox,
  CheckboxGroup,
  Whisper,
  Tooltip,
  Input,
  Rate,
  Button,
  SelectPicker,
} from "rsuite";
import "rsuite/lib/styles/index.less";
import "./CreateNewStyle.css";
import selection from "../../pages/Selection";

const CreateNew = () => {
  return (
    <div className="flex">
      <h1 className="title-item">Create New Review</h1>

      <div className="checkbox">
        <CheckboxGroup
          inline
          className="checkboxList"
          style={{
            backgroundColor: "#C3C49E",
            color: "#62130A",
          }}
        >
          <h2
            style={{
              fontFamily: "Raleway",
              fontSize: "25px",
              color: "#62130A",
            }}
          >
            What type of entertainment?
          </h2>
          <Checkbox>Book</Checkbox>
          <Checkbox>Movie</Checkbox>
          <Checkbox>Television</Checkbox>
          <Checkbox>Music</Checkbox>
        </CheckboxGroup>

        <h2
          className="select-item"
          style={{
            marginTop: "10px",
            fontFamily: "Raleway",
            fontSize: "25px",
            color: "#62130A",
            backgroundColor: "#C3C49E",
          }}
        >
          Please select a genre
          <div>
            <SelectPicker
              data={selection}
              style={{
                width: 224,
                display: "block",
                backgroundColor: "#C3C49E",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
                borderRadius: "10px",
              }}
            />
          </div>
        </h2>

        <h2
          className="select-item"
          style={{
            marginTop: "10px",
            fontFamily: "Raleway",
            fontSize: "25px",
            color: "#62130A",
            backgroundColor: "#C3C49E",
          }}
        >
          Please enter a title.
          <Whisper trigger="focus" speaker={<Tooltip>Required</Tooltip>}>
            <Input
              style={{
                width: 300,
                backgroundColor: "fbfef9",
                fontFamily: "Raleway",
                color: "#62130A",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              placeholder="Please enter a title."
            />
          </Whisper>
        </h2>

        <h2
          className="select-item"
          style={{
            marginTop: "10px",
            fontFamily: "Raleway",
            fontSize: "25px",
            color: "#62130A",
            backgroundColor: "#C3C49E",
          }}
        >
          Please type a review if you'd like!
          <Rate
            defaultValue={2.5}
            allowHalf
            style={{
              backgroundColor: "#C3C49E",
              color: "#62130A",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              borderRadius: "10px",
            }}
          />
        </h2>

        <h2
          className="select-item"
          style={{
            marginTop: "10px",
            fontFamily: "Raleway",
            fontSize: "25px",
            color: "#62130A",
            backgroundColor: "#C3C49E",
          }}
        >
          Please type a review if you'd like!
          <Input
            componentClass="textarea"
            rows={3}
            placeholder="Add a review."
            style={{
              marginTop: "10px",
              fontFamily: "Raleway",
              fontSize: "15px",
              color: "#62130A",
              backgroundColor: "#fbfef9",
            }}
          />
        </h2>

        <Button
          type="submit"
          style={{
            marginTop: "10px",
            fontFamily: "Raleway",
            fontSize: "20px",
            color: "#D9A51F",
            backgroundColor: "#62130A",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CreateNew;
