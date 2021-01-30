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
} from "rsuite";
import "rsuite/lib/styles/index.less";
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
    <div className="flex">
      <h1 className="title-item" style={{ backgroundColor: "#d9a51f" }}>
        Create New Review
      </h1>

      <Form fluid className="form-style">
        <FormGroup controlId="radioList">
          <FormControlLabel>What Would You Like To Review?</FormControlLabel>
          <RadioGroup
            onChange={handleInputChangeRadio}
            name="radioList" inline>
            <Radio value="Movie">Movie</Radio>
            <Radio value="TV">Tv</Radio>
            <Radio value="Book">Book</Radio>
            <Radio value="Music">Music</Radio>
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <FormControlLabel>Please Enter the Title</FormControlLabel>
          <FormControl onChange={handleInputChangeTitle}
            name="title" type="input" className="form-title" />
          <FormHelpText>Required</FormHelpText>
        </FormGroup>
        <FormGroup>
          <FormControlLabel>Please Select You Rating</FormControlLabel>
          <Rate onChange={handleInputChangeRating} name="rating" defaultValue={2.5} allowHalf style={{ color: "#62130a" }} />
        </FormGroup>
        <FormGroup>
          <FormControlLabel>Please Select a Genre</FormControlLabel>
          <SelectPicker
            data={selections}
            style={{ width: 224, marginBottom: "10px" }}
            onChange={handleInputChangeGenre}
            name="category"
          />
          <FormControlLabel>Leave A Review!</FormControlLabel>
          <FormControl onChange={handleInputChangeReview} rows={3} name="textarea" componentClass="textarea" />
        </FormGroup>
        <FormGroup>
          <ButtonToolbar>
            <Button style={{ backgroundColor: "#62130a", color: "#d9a51f" }}
              onClick={handleFormSubmit}>
              Submit
            </Button>
            <Button appearance="default"  onClick={handleFormCancel}>Cancel</Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </div>
  );
};

export default CreateNew;
