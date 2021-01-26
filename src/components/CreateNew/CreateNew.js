import React from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  ButtonToolbar,
  Button,
  Radio,
  RadioGroup,
  Rate,
  SelectPicker,
} from "rsuite";
import "rsuite/lib/styles/index.less";
import "./CreateNewStyle.css";
import selections from "../../pages/Genre";

const CreateNew = () => {
  return (
    <div className="flex">
      <h1 className="title-item" style={{ backgroundColor: "#d9a51f" }}>
        Create New Review
      </h1>

      <Form fluid className="form-style">
        <FormGroup controlId="radioList">
          <ControlLabel>What Would You Like To Review?</ControlLabel>
          <RadioGroup name="radioList" inline>
            <Radio value="A">Movie</Radio>
            <Radio value="B">Tv</Radio>
            <Radio value="C">Book</Radio>
            <Radio value="D">Music</Radio>
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Please Enter the Title</ControlLabel>
          <FormControl name="title" type="input" className="form-title" />
          <HelpBlock>Required</HelpBlock>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Please Select You Rating</ControlLabel>
          <Rate defaultValue={2.5} allowHalf style={{ color: "#62130a" }} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Please Select a Genre</ControlLabel>
          <SelectPicker
            data={selections}
            style={{ width: 224, marginBottom: "10px" }}
          />
          <ControlLabel>Leave A Review!</ControlLabel>
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
