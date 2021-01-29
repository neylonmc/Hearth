import React from 'react';
import { 
    Row,
    Col
} from "rsuite";
import 'rsuite/dist/styles/rsuite-dark.css';
import "./Profile-Topic.css";
// import TopicInfo from "../components/TopicInfo";
// import TopicActivity from "../components/TopicActivity";

function Topic(props) {

    return(
        <div id="page-container" className=" animate__animated animate__fadeIn">
            <div id="page-header">
                <Row>
                    <Col id="page-image-cont">
                        {/* TOPIC PICTURE */}
                        <img 
                            id="page-image"
                            className= "topic-picture"
                            src= { props.avatar_url || "./images/no-image.png" }
                            alt= "page photograph"/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {/* TOPIC NAME */}
                        <h1 id="page-title" className="topic-name">{ props.topicName || "topic name" }</h1>
                    </Col>
                </Row>
            </div>


            {/* TOPIC INFO */}
            <Row id="page-block-1" className="topic-info-container">
                <Row>
                    <Col xs={24}>
                        <h2 id="block-header">topic info</h2>
                    </Col>
                </Row>
                <Row>
                    {/* PLACEHOLDER FOR TOPIC INFO */}
                    {/* <TopicInfo /> */}
                </Row>
            </Row>

            <Row id="page-block-2" className="topic-act-container">
                <Row>
                    <Col xs={24}>
                        <h2 id="block-header">topic activity</h2>
                    </Col>
                </Row>
                <Row>
                    {/* PLACEHOLDER FOR TOPIC ACTIVITY */}
                    {/* <TopicActivity /> */}
                </Row>
            </Row>
            
        </div>
    )

};

export default Topic;