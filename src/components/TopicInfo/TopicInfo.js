import React from "react";
import {
    Row
} from "rsuite";
import "./TopicInfo.css"

function TopicInfo(props) {

    const topic = props.topic;
    
    if (topic === "Books" || topic === "Music") {
        return (
            <Row>
                <p>{ props.description }</p>
                <p><strong>Rating: </strong>{ props.ageRange }</p>
            </Row>
        )
    } else if (topic === "Film" || topic === "Television") {
        return (
            <Row>
                <p>{ props.description }</p>
            </Row>
        )
    } 
}

export default TopicInfo;