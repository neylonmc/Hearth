import React from "react";
import { Row, Col } from "rsuite";
import "./Streaming.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faVideo } from "@fortawesome/free-solid-svg-icons";

function Streaming() {
  return (
    <div className="user-now-streaming">
      <Row>
        <Col id="usr-stream" className="usr-listening" xs={24} sm={24} md={24}>
          <h3 id="usr-stream-txt">
            <FontAwesomeIcon icon={faMusic} /> listening to <strong>Swimming by Mac Miller</strong>
          </h3>
        </Col>
      </Row>
      <Row>
        <Col id="usr-stream" className="usr-watching" xs={24} sm={24} md={24}>
          <h3 id="usr-stream-txt">
            <FontAwesomeIcon icon={faVideo} /> watching <strong>Disenchanted on Netflix</strong>
          </h3>
        </Col>
      </Row>
    </div>
  );
}

export default Streaming;
