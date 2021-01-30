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
  Row,
  Col,
} from "rsuite";
import "./CreateNewStyle.css";
import selections from "../../utils/Genre";

const CreateNew = () => {
  return (
    <div className="create-container">
      <Row>
        <Col>
          <h1 className="createnew-header">create new review</h1>
        </Col>
      </Row>

      {/* FORM TO CREATE NEW REVIEW */}
      <div className="createnew-form-container">
        <Form fluid className="createnew-form">
          {/* REVIEW RADIO */}
          <FormControlLabel>what would you like to review?</FormControlLabel>

          <RadioGroup name="radioList" className="createnew-radio" inline>
            <Radio value="A">movie</Radio>
            <Radio value="B">tv</Radio>
            <Radio value="C">book</Radio>
            <Radio value="D">music</Radio>
          </RadioGroup>

          {/* REVIEW TITLE */}
          <FormGroup>
            <FormControlLabel>please enter a title</FormControlLabel>
            <FormControl name="title" type="input" className="form-title" />
            <FormHelpText>required</FormHelpText>
          </FormGroup>

          {/* REVIEW RATING */}
          <FormGroup>
            <FormControlLabel className="createnew-rating">
              please select your rating
            </FormControlLabel>
            <Rate defaultValue={2.5} allowHalf />
          </FormGroup>

          {/* REVIEW GENRE */}

          <FormGroup>
            <FormControlLabel className="createnew-genre">
              please select a genre
            </FormControlLabel>
            <SelectPicker data={selections} />
          </FormGroup>

          {/* COMMENT REVIEW */}
          <FormGroup>
            <FormControlLabel className="createnew-review">
              leave a review
            </FormControlLabel>
            <FormControl rows={3} name="textarea" componentClass="textarea" />
          </FormGroup>

          {/* SUBMIT BUTTON */}
          <ButtonToolbar>
            <Button id="createnew-submit" appearance="primary">
              submit
            </Button>
            <Button id="createnew-cancel" appearance="default">
              cancel
            </Button>
          </ButtonToolbar>
        </Form>
      </div>
    </div>
  );
};

export default CreateNew;
