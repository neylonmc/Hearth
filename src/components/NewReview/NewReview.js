import React, { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ButtonToolbar,
  Button,
  Rate,
  InputPicker,
  TagPicker
} from "rsuite";
import "rsuite/lib/styles/index.less";
import "./NewReview.css";
import Entertainment from "../../utils/TopEntertainment";
import API from "../../utils/API";

const NewReview = () => {

//  States
  const [ topicState, setTopic ]  = useState("");
  const [ titleState, setTitle ] = useState("");
  const [ textState, setText ] = useState("");
  const [ simState, setSim ] = useState([]);
  const [ rateState, setRate ] = useState(0);

//  Final Review State
  const [ reviewState, setReview ] = useState({});

  const [activityState, setActivity] = useState([]);

  useEffect(() => {
    API.getActivities()
          .then(res => {
            setActivity(res.data);
            console.log(res.data);
            console.log(activityState);
          })
          .catch(err => console.log(err));
  }, [])



  function handleFormSubmit(event) {
    event.preventDefault();
    let form ={
      topic: topicState, 
      title: titleState,
      review: textState,
      rating: rateState,
      related_titles: simState
    };
    console.log(form);
   API.saveComment(form);
}


  return (
    <div className="review-container  animate__animated animate__fadeIn">

        <p className="subheader">
            choose which topic you'd 
            like to review - if you don't see it, 
            <a id="link"href="/post/topic"> create it!</a>
        </p>

      {/* FORM TO CREATE NEW REVIEW */}
      <div className="createnew-form-container">
        <Form fluid className="createnew-form">

            <InputPicker 
                className="topic-picker"
                data={ activityState }
                size="md"
                placeholder="topic (required)"
                defaultValue=""
                block
                onSelect= { function(value, item) {
                    setTopic(item.title)
                }}
                    
            />

          <FormGroup>
            <FormControl 
                className="review-title" 
                rows={5} 
                name="textarea" 
                placeholder="review title"
                onChange={
                    function(value) {
                        setTitle(value)
                    }
                }
            />
          </FormGroup>


          <FormGroup>
            <FormControl 
                rows={3} 
                className="review-text" 
                componentclass="textarea" 
                placeholder="my review"
                onChange={
                    function(value) {
                        setText(value)
                    }
                }
            />
          </FormGroup>

          {/* SIMILAR TOPICS */}
          <FormGroup>
              <TagPicker 
                  className="similar-topics"
                  data={ Entertainment }
                  defaultValue=""
                  placeholder="similar topics"
                  onSelect= { function(value, item) {
                    setSim(item.title)
                }}
                  block
              />
              <p>this helps us spread the word</p>
          </FormGroup>

          {/* REVIEW RATING */}
          <FormGroup>
            <Rate 
                className="review-rating" 
                onChange={
                    function(value) {
                        setRate(value);
                    }
                }
                defaultValue={3.5} 
                allowHalf 
            />
          </FormGroup>

          {/* SUBMIT BUTTON */}
          <ButtonToolbar>
            <Button 
                className="submit-button"  
                appearance="primary"
                onClick= {handleFormSubmit}                
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
