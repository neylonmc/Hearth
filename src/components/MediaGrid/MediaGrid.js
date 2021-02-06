import React from "react";
import "./MediaGrid.css";
import {
    Row,
    Col,

} from "rsuite"

import Entertainment from "../../utils/TopEntertainment";

function MediaGrid() {

    var shortEnt = Array.prototype.slice.call(Entertainment, 24);

    return(
        <Row className="media-container">
            { shortEnt.map(data => {
                console.log(shortEnt)
                return(
                    <Col 
                    md={6} 
                    id="button-column">
                        <img 
                            id="media-image" 
                            src={ data.img }
                            alt={ data.title }
                        />
                    </Col>
                )
            })}

        </Row>
    )
};

export default MediaGrid;