import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Activity.css"
import API from "../../utils/API";  

function TopicActivity() {

    let { topic } = useParams();

    const [ topicState, setState ] = useState([]);

    useEffect(() => {

        setState(API.getActivitybyTitle(topic));
        console.log(topicState);
    }, []);

    return (
        <p>hello world</p>
    )

}

export default TopicActivity;