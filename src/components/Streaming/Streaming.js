import React from "react";
import { Row, Col } from "rsuite";
import "./Streaming.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faVideo } from "@fortawesome/free-solid-svg-icons";

function Streaming() {
  return (
    <Row className="user-now-streaming">
      <Col id="usr-stream" className="usr-listening" xs={24} sm={12} md={12}>
        <h3 id="usr-stream-txt">
          <FontAwesomeIcon icon={faMusic} /> now listening to Swimming by Mac Miller
        </h3>
      </Col>
      <Col id="usr-stream" className="usr-watching" xs={24} sm={12} md={12}>
        <h3 id="usr-stream-txt">
          <FontAwesomeIcon icon={faVideo} /> now watching Disenchanted on Netflix
        </h3>
      </Col>
    </Row>
  );
}

export default Streaming;
