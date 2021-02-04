import React from "react";
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

function NewRec() {

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
                    />
                </FormGroup>

                <FormGroup>
                    <ButtonToolbar>
                        <Button 
                            className="submit-button"
                            appearance="primary"
                        > submit</Button>
                    </ButtonToolbar>
                </FormGroup>
            </Form>
        </div>
    )
};

export default NewRec;