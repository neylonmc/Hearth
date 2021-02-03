import React from "react";
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

    return(
        <div className="poll-container">    

            <p className="subheader">
                select a topic you'd like to
                create a poll for
            </p>

            <Form fluid>

                <InputPicker 
                    className="topic-picker"
                    data={Entertainment}
                    size="md"
                    placeholder="select topic title"
                    block
                />

                <FormGroup>
                        <FormControl 
                            name="question" 
                            placeholder="poll question"
                        />
                </FormGroup>
                
                <Row className="option-container">
                    <Col md={12}>
                        <FormGroup>
                            <FormControl 
                                name="option-1" 
                                placeholder="option 1"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControl 
                                name="option-2" 
                                placeholder="option 2"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup>
                            <FormControl 
                                name="option-3" 
                                placeholder="option 3"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControl 
                                name="option-4" 
                                placeholder="option 4"
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup className="submit-container">
                    <Button 
                        className="submit-button"
                        appearance="primary"
                    > Submit </Button>
                </FormGroup>
            </Form>
        </div>
    )
};

export default NewPoll;