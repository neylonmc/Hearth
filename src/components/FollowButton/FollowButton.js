import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Row,
    Col,
    Button
} from "rsuite";
import API from "../../utils/API";
import "./FollowButton.css";

function FollowButton(props) {

   const user = props.user

    const [ followState, setFollow ] = useState({});

    useEffect(() => {
        
    }, []) 

    return (
        <Button
            className= "follow-btn"
        > + Follow</Button>
    )

}

export default FollowButton;