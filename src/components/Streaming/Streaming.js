import React from 'react';
import {
    Row,
    Col
} from 'rsuite';
import "./Streaming.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faVideo } from '@fortawesome/free-solid-svg-icons'

function Streaming() {

    return(
        <Row className="user-now-streaming"  >
            <Col 
                id="usr-stream"
                className="usr-listening"
                xs={12} 
            >   
                <h3 id="usr-stream-txt">
                    <FontAwesomeIcon 
                        icon={ faMusic} 
                    /> now listening to...
                </h3>
            </Col>
            <Col 
                id="usr-stream"
                className="usr-watching"
                xs={12}
            >
                <h3 id="usr-stream-txt"> 
                    <FontAwesomeIcon 
                        icon={ faVideo} 
                    /> now watching... 
                </h3>
            </Col>
        </Row>

    )

}

export default Streaming;