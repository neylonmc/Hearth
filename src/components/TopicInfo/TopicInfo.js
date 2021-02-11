import React from "react";
import {
    Row
} from "rsuite";
import "./TopicInfo.css"

function TopicInfo(props) {

    const topic = props.topic;
    console.log(topic);

    if (topic === "Books") {
        return (
            <Row id="info-text">
                <p><strong>Ages: </strong>{props.ageRange}</p>
                <p>{props.description}</p>
            </Row>
        )
    } else if (topic === "Music") {
        return (
            <Row id="info-text">
                <p>{props.description}</p>
            </Row>
        )
    } else if (topic === "Film" || topic === "Television") {
        return (
            <Row id="info-text">
                <p><strong>Ages: </strong>{props.ageRange.join(", ")}</p>
                <p><strong>Stream: </strong> Netflix, Amazon Prime, HULU</p>
                <p>{props.description}</p>
            </Row>
        )
    } else {
        return (
            <Row>
                <p>Error</p>
            </Row>
        )
    }
}


export default TopicInfo;