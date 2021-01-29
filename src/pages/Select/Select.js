import React from "react";
import {
    Row,
    Col,
    Button
} from 'rsuite';
import "./Select.css";
import Entertainment from "./utils/TopEntertainment";

function Select() {

    // Shuffle Data [Fisher-Yates Method]
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    }

    var shuffledArray = shuffle(Entertainment);

    return(
        <div className="select-container animate__animated animate__fadeIn">
            <div className="select-header-container">
                <Row>
                    <Col>
                        <h1>select your favorites</h1>
                    </Col>
                </Row>
                <Row><Col>
                        <p>
                            give us an idea of what
                            you're interested in
                        </p>
                    </Col>
                </Row>
            </div>
            <Row className="button-parent-container">
                { shuffledArray.map(data => {
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