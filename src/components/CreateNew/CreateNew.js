import React from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormControlLabel,
  FormHelpText,
  ButtonToolbar,
  Button,
  Radio,
  RadioGroup,
  Rate,
  SelectPicker,
} from "rsuite";
import "./CreateNewStyle.css";
import selections from "../../utils/Genre";

const CreateNew = () => {
  return (
    <div className="flex">
      <h1 className="title-item" style={{ backgroundColor: "#d9a51f" }}>
        Create New Review
      </h1>

      <Form fluid className="form-style">
        <FormGroup controlId="radioList">
          <FormControlLabel>What Would You Like To Review?</FormControlLabel>
          <RadioGroup name="radioList" inline>
            <Radio value="A">Movie</Radio>
            <Radio value="B">Tv</Radio>
            <Radio value="C">Book</Radio>
            <Radio value="D">Music</Radio>
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <FormControlLabel>Please Enter the Title</FormControlLabel>
          <FormControl name="title" type="input" className="form-title" />
          <FormHelpText>Required</FormHelpText>
        </FormGroup>
        <FormGroup>
          <FormControlLabel>Please Select You Rating</FormControlLabel>
          <Rate defaultValue={2.5} allowHalf style={{ color: "#62130a" }} />
        </FormGroup>
        <FormGroup>
          <FormControlLabel>Please Select a Genre</FormControlLabel>
          <SelectPicker
            data={selections}
            style={{ width: 224, marginBottom: "10px" }}
          />
          <FormControlLabel>Leave A Review!</FormControlLabel>
          <FormControl rows={3} name="textarea" componentClass="textarea" />
        </FormGroup>
        <FormGroup>
          <ButtonToolbar>
            <Button style={{ backgroundColor: "#62130a", color: "#d9a51f" }}>
              Submit
            </Button>
            <Button appearance="default">Cancel</Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </div>
  );
};

export default CreateNew;
