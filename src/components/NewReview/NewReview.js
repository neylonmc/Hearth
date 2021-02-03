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
  SelectPicker
} from "rsuite";
import "rsuite/lib/styles/index.less";
import "./NewReview.css";
import selections from "../../utils/Genre";
import API from "../../utils/API";

const NewReview = () => {

//   Review States
  const [ topicState, setTopic ]  = useState("");
  const [ titleState, setTitle ] = useState("");
  const [ rateState, setRate ] = useState();
  const [ genreState, setGenre ] = useState([]);
  const [ reviewState, setReview ] = useState("");

//   Final Post State
  const [ postState, setPost ] = useState({});

  return (
    <div className="create-container">

      {/* FORM TO CREATE NEW REVIEW */}
      <div className="createnew-form-container">
        <Form fluid className="createnew-form">
          {/* REVIEW RADIO */}
          <FormControlLabel/>

          <RadioGroup 
            onChange={ function(value) {
                setTopic(value);
            } } 
            name="radioList" 
            className="createnew-radio" 
            inline
            >
            <Radio value="Film">film</Radio>
            <Radio value="TV">tv</Radio>
            <Radio value="Book">book</Radio>
            <Radio value="Music">music</Radio>
          </RadioGroup>

          {/* REVIEW TITLE */}
          <FormGroup>
            <FormControlLabel/>
            <FormControl 
                onChange={
                    function(value){
                        setTitle(value)
                    } 
                }
                name="title" 
                type="input" 
                className="form-title" 
                placeholder={`${topicState.toLowerCase()} title`}
            />
            <FormHelpText>required</FormHelpText>
          </FormGroup>

          {/* REVIEW RATING */}
          <FormGroup>
            <FormControlLabel className="createnew-rating" />
            <Rate onChange={
                function(value) {
                    setRate(value);
                }
            }
            defaultValue={2.5} 
            allowHalf />
          </FormGroup>

          {/* REVIEW GENRE */}
          <FormGroup>
            <FormControlLabel className="createnew-genre"/>
            <SelectPicker 
                data={selections} 
                placeholder="genre"
                onChange={
                    function(value) {
                        setGenre(value);
                    }
                }
            />
          </FormGroup>

          {/* COMMENT REVIEW */}
          <FormGroup>
            <FormControlLabel className="createnew-review" />
            <FormControl 
                rows={3} 
                name="textarea" 
                componentClass="textarea" 
                placeholder="type review here"
                onChange={
                    function(value) {
                        setReview(value)
                    }
                }
            />
          </FormGroup>

          {/* SUBMIT BUTTON */}
          <ButtonToolbar>
            <Button 
                id="createnew-submit"  
                appearance="primary"
                onClick={
                    function() {
                        setPost({
                            topic: topicState, 
                            title: titleState,
                            rating: rateState,
                            genre: genreState,
                            review: reviewState
                        })

                        console.log(postState);
                    }
                }
            >
              submit
            </Button>
          </ButtonToolbar>
        </Form>
      </div>
    </div>
  );
};

export default NewReview;
