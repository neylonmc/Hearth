import React, { useState } from "react";
import {
    Row,
    Col,
    InputPicker,
    Form,
    FormGroup,
    FormControl,
    Button
} from "rsuite";
import "./NewPoll.css"
import Entertainment from "../../utils/TopEntertainment";

function NewPoll() {

    const [ topicState, setTopic ] = useState("");
    const [ questState, setQuest ] = useState("");
    const [ firstState, setFirst ] = useState("");
    const [ secondState, setSecond ] = useState("");
    const [ thirdState, setThird ] = useState("");
    const [ fourthState, setFourth ] = useState("");
    
    const [ pollState, setPoll ] = useState({});

    return(
        <div className="poll-container">    

            <p className="subheader">
                choose which topic you'd 
                like to poll - if you don't see it, 
                <a id="link"href="/post/topic"> create it!</a>
            </p>

            <Form fluid>

                <InputPicker 
                    className="topic-picker"
                    data={ Entertainment }
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
                            name="question" 
                            placeholder="question (required)"
                            onChange={
                                function(value) {
                                    setQuest(value);
                                }
                            }
                        />
                </FormGroup>
                
                <Row className="option-container">
                    <Col md={12}>
                        <FormGroup>
                            <FormControl 
                                name="option-1" 
                                placeholder="option 1 (required)"
                                onChange={
                                    function(value) {
                                        setFirst(value);
                                    }
                                }
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControl 
                                name="option-2" 
                                placeholder="option 2 (required)"
                                onChange={
                                    function(value) {
                                        setSecond(value);
                                    }
                                }
                            />
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup>
                            <FormControl 
                                name="option-3" 
                                placeholder="option 3"
                                onChange={
                                    function(value) {
                                        setThird(value);
                                    }
                                }
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControl 
                                name="option-4" 
                                placeholder="option 4"
                                onChange={
                                    function(value) {
                                        setFourth(value);
                                    }
                                }
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup className="submit-container">
                    <Button 
                        className="submit-button"
                        appearance="primary"
                        onClick= {
                            function() {
                                setPoll({
                                    title: topicState,
                                    question: questState,
                                    option_1: firstState,
                                    option_2: secondState,
                                    option_3: thirdState,
                                    option_4: fourthState
                                })

                                console.log(pollState);
                            }
                        }
                    > Submit </Button>
                </FormGroup>
            </Form>
        </div>
    )
};

export default NewPoll;