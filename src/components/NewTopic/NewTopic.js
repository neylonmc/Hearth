import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    TagPicker,
    SelectPicker,
    Form,
    FormGroup,
    FormControl,
    ButtonToolbar,
    Button
} from "rsuite";
import "./NewTopic.css"
import Entertainment from "../../utils/TopEntertainment";
import Topic from "../../utils/Topics";
import Genre from "../../utils/Genre";
import Ages from "../../utils/AgeRange";
import API from "../../utils/API";

function NewRec() {

    const [ titleState, setTitle ] = useState("");
    const [ typeState, setType ] = useState("");
    const [ genreState, setGenre ] = useState("");
    const [ ageState, setAge ] = useState("");
    const [ textState, setText ] = useState("");

    const [ topicState, setTopic ] = useState({});


    useEffect(() => {
    }, [])

    function handleFormSubmit(event) {
        event.preventDefault();
        let form ={
            title: titleState,
            topic: typeState,
            genre: genreState,
            age_range: ageState,
            description: textState

        };
        console.log(form);
       API.saveActivity(form);
    }

    return(
        <div className="topic-container   animate__animated animate__fadeIn">

        <p className="subheader">
            create a new topic and get 
            the conversation flowing
        </p>


            <Form fluid>
                <FormGroup>
                    <FormControl 
                        className="topic-title"
                        name="name" 
                        placeholder="topic title"
                        onChange= {
                            function(value) {
                                setTitle(value)
                            }
                        }
                    />
                </FormGroup>

                <Row className="mini-container">
                    <Col md={8}>
                        <FormGroup id="mini-picker">
                            <SelectPicker 
                                className="type"
                                data={ Topic }
                                defaultValue=""
                                placeholder="type"
                                onSelect= {
                                    function(value, item) {
                                        setType(item.topic)
                                    }
                                }
                                block
                            />
                        </FormGroup>
                    </Col>
                    <Col md={8}>
                        <FormGroup id="mini-picker">
                            <TagPicker 
                                className="genre"
                                data={ Genre }
                                defaultValue=""
                                placeholder="genre"
                                onChange= {
                                    function(value) {
                                        setGenre(value)
                                    }
                                }
                                block
                            />
                        </FormGroup>
                    </Col>
                    <Col md={8}>
                        <FormGroup id="mini-picker">
                            <TagPicker 
                                className="ages"
                                data={ Ages }
                                defaultValue=""
                                placeholder="audiance"
                                onChange= {
                                    function(value) {
                                        setAge(value)
                                    }
                                }
                                block
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup>
                    <FormControl 
                        className="topic-description"
                        name="description" 
                        type="textarea" 
                        placeholder="topic description"
                        onChange= {
                            function(value) {
                                setText(value)
                            }
                        }
                    />
                </FormGroup>

                <FormGroup>
                    <ButtonToolbar>
                        <Button 
                            className="submit-button"
                            appearance="primary"
                            onClick= {handleFormSubmit}
                        > submit</Button>
                    </ButtonToolbar>
                </FormGroup>
            </Form>
        </div>
    )
};

export default NewRec;