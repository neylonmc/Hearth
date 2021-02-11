import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Row,
    Col,
    Button
} from "rsuite";
import API from "../../utils/API";
import "./FollowButton.css";

function FollowButton() {

    let { topic } = useParams();

    const [ followState, setFollow ] = useState({});

    useEffect(() => {

        
        
    }, []) 

    return (
        <Button
            className= "follow-btn"
            onClick={
                function(topic) {
                    setFollow(topic)
                }
            }
        > + Follow</Button>
    )

}

export default FollowButton;