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
        <CheckboxGroup inline className="checkboxList">
          <h2 className="review-header">What type of entertainment?</h2>
          <Checkbox>Book</Checkbox>
          <Checkbox>Movie</Checkbox>
          <Checkbox>Television</Checkbox>
          <Checkbox>Music</Checkbox>
        </CheckboxGroup>

        <div className="checkboxList">
          <h2 className="review-header">What type of genre?</h2>
          <div>
            <SelectPicker data={selection} />
          </div>
        </div>

        <div className="checkboxList">
          <h2 className="review-header">
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
                  paddingBottom: "5px",
                }}
                placeholder="Please enter a title."
              />
            </Whisper>
          </h2>
        </div>

        <div className="checkboxList">
          <h2 className="review-header">
            Select your rating
            <Rate
              defaultValue={2.5}
              allowHalf
              style={{
                backgroundColor: "#DCDDC7",
                color: "#62130A",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
                borderRadius: "10px",
              }}
            />
          </h2>
        </div>

        <div className="checkboxList">
          <h2 className="review-header">
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
                backgroundColor: "rgb(251, 254, 249, .8)",
              }}
            />
          </h2>
        </div>

        <Button
          type="submit"
          className="sumbit-button"
          style={{
            marginTop: "10px",
            fontFamily: "Righteous",
            fontSize: "20px",
            color: "#62130a",
            backgroundColor: "#d9a51f",
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
