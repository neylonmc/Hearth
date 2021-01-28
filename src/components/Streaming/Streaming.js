import React from 'react';
import {
    Row,
    Col
} from 'rsuite';
import "./Streaming.css"

function Streaming() {

    return(
        <Row className="user-now-streaming"  >
            <Col 
                id="usr-stream"
                className="usr-listening"
                xs={12} 
            >   
                <h3 id="usr-stream-txt">
                    now listening to...
                </h3>
            </Col>
            <Col 
                id="usr-stream"
                className="usr-watching"
                xs={12}
            >
                <h3 id="usr-stream-txt"> 
                    now watching... 
                </h3>
            </Col>
        </Row>

    )

}

export default Streaming;