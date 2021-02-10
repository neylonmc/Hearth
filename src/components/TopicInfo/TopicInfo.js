import React from "react";
import {
    Row
} from "rsuite";
import "./TopicInfo.css"

function TopicInfo(props) {

    const topic = props.type;

    if (topic === "Books") {
        return (
            <Row>
                <p><strong>Ages: </strong>{props.ageRange}</p>
                <p>{props.description}</p>
            </Row>
        )
    } else if (topic === "Music") {
        return (
            <Row>
                <p>{props.description}</p>
            </Row>
        )
    } else if (topic === "Film" || topic === "Television") {
        return (
            <Row>
                <p><strong>Rated: </strong>{props.ageRating}</p>
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