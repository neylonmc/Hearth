import React, { useState, useEffect } from "react";
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
import API from "../../utils/API";


const CreateNew = () => {
  const [developerState, setDeveloperState] = useState({});
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
  }, [])


  function createPost() {
  }

  /*function handleInputChange(event) {
    console.log(event.target);
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };*/


  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject);
  }

  function handleFormCancel(event) {
    event.preventDefault();
    setFormObject({ })
  }


  //need these over handleInputChange because event.target is undefined for non-input forms
  function handleInputChangeRadio(event) {
    setFormObject({ ...formObject, type: event })
  };

  function handleInputChangeTitle(event) {
    setFormObject({ ...formObject, title: event })
  };

  function handleInputChangeRating(event) {
    setFormObject({ ...formObject, rating: event })
  };

  function handleInputChangeGenre(event) {
    setFormObject({ ...formObject, category: event })
  };

  function handleInputChangeReview(event) {
    setFormObject({ ...formObject, review: event })
  };



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

          <RadioGroup onChange={handleInputChangeRadio} name="radioList" className="createnew-radio" inline>
            <Radio value="Movie">movie</Radio>
            <Radio value="TV">tv</Radio>
            <Radio value="Book">book</Radio>
            <Radio value="Music">music</Radio>
          </RadioGroup>

          {/* REVIEW TITLE */}
          <FormGroup>
            <FormControlLabel>please enter a title</FormControlLabel>
            <FormControl onChange={handleInputChangeTitle} name="title" type="input" className="form-title" />
            <FormHelpText>required</FormHelpText>
          </FormGroup>

          {/* REVIEW RATING */}
          <FormGroup>
            <FormControlLabel className="createnew-rating">
              please select your rating
            </FormControlLabel>
            <Rate onChange={handleInputChangeRating} defaultValue={2.5} allowHalf />
          </FormGroup>

          {/* REVIEW GENRE */}

          <FormGroup>
            <FormControlLabel className="createnew-genre">
              please select a genre
            </FormControlLabel>
            <SelectPicker onChange={handleInputChangeGenre} data={selections} />
          </FormGroup>

          {/* COMMENT REVIEW */}
          <FormGroup>
            <FormControlLabel className="createnew-review">
              leave a review
            </FormControlLabel>
            <FormControl onChange={handleInputChangeReview} rows={3} name="textarea" componentClass="textarea" />
          </FormGroup>

          {/* SUBMIT BUTTON */}
          <ButtonToolbar>
            <Button id="createnew-submit"  appearance="primary" onClick={handleFormSubmit}>
              submit
            </Button>
            <Button id="createnew-cancel" appearance="default" onClick={handleFormCancel}>
              cancel
            </Button>
          </ButtonToolbar>
        </Form>
      </div>
    </div>
  );
};

export default CreateNew;
