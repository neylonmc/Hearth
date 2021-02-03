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
                <p><strong>Ages: </strong>{ props.ageRange }</p>
                <p>{ props.description }</p>
            </Row>
        )
    } else if (topic === "Film" || topic === "Television") {
        return (
            <Row>
                <p><strong>Rated: </strong>{ props.ageRating }</p>
                <p>{ props.description }</p>
            </Row>
        )
    } 
}

export default TopicInfo;