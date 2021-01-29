import React from "react";
import {
    Row,
    Col,
    Button
} from 'rsuite';
import "./Select.css";
import Entertainment from "./utils/TopEntertainment";

function Select() {
    console.log(Entertainment)

    return(
        <div className="select-container">
            <div className="select-header-container">
                <Row>
                    <Col>
                        <h1>select your favorites</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            give us an idea of what
                            you're interested in
                        </p>
                    </Col>
                </Row>
            </div>
            <Row>
                { Entertainment.map(data => {
                        return(
                            <Col md={6} sm={12} id="button-column">
                                <Button id="button-container" bordered>
                                    <img 
                                        id="button-image" 
                                        src={ data.img }
                                        alt={ data.title }
                                    />
                                </Button>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
};

export default Select;