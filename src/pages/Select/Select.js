import React from "react";
import {
    Row,
    Col,
    Button
} from 'rsuite';
import "./Select.css";

function Select() {
    return(
        <Row className="select-container">
            <Col 
                id="button-container"
                md={6} 
                sm={12}
            >
                <Button bordered>
                    <img 
                        id="button-image" 
                        src="./images/no-image.png"
                        alt="artist or work"
                    />
                    <h1 id="button-title">title</h1>
                </Button>
            </Col>
            <Col 
                id="button-container"
                md={6} 
                sm={12}
            >
                <Button bordered>
                    <img 
                        id="button-image" 
                        src="./images/no-image.png"
                        alt="artist or work"
                    />
                    <h1 id="button-title">title</h1>
                </Button>
            </Col>
            <Col 
                id="button-container"
                md={6} 
                sm={12}
            >
                <Button bordered>
                    <img 
                        id="button-image" 
                        src="./images/no-image.png"
                        alt="artist or work"
                    />
                    <h1 id="button-title">title</h1>
                </Button>
            </Col>
            <Col 
                id="button-container"
                md={6} 
                sm={12}
            >
                <Button bordered>
                    <img 
                        id="button-image" 
                        src="./images/no-image.png"
                        alt="artist or work"
                    />
                    <h1 id="button-title">title</h1>
                </Button>
            </Col>
        </Row>
    )

};

export default Select;