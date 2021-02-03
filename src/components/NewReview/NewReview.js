import React, { useState } from "react";
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
  Rate
} from "rsuite";
import "rsuite/lib/styles/index.less";
import "./NewReview.css";
import API from "../../utils/API";

const NewReview = () => {

//  States
  const [ topicState, setTopic ]  = useState("");
  const [ titleState, setTitle ] = useState("");
  const [ rateState, setRate ] = useState();
  const [ textState, setText ] = useState("");

//  Final Review State
  const [ reviewState, setReview ] = useState({});

  return (
    <div className="review-container">

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

          {/* COMMENT REVIEW */}
          <FormGroup>
            <FormControlLabel className="createnew-review" />
            <FormControl 
                rows={5} 
                name="textarea" 
                placeholder="my review"
                onChange={
                    function(value) {
                        setText(value)
                    }
                }
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
            <FormHelpText>required</FormHelpText>
          </FormGroup>

          {/* SUBMIT BUTTON */}
          <ButtonToolbar>
            <Button 
                id="createnew-submit"  
                appearance="primary"
                onClick={
                    function() {
                        setReview({
                            topic: topicState, 
                            title: titleState,
                            review: textState,
                            rating: rateState
                        })

                        console.log(reviewState);
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
