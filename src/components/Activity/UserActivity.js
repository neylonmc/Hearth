import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Activity.css"
import API from "../../utils/API";  

function UserActivity() {

    let { topic } = useParams();

    const [ topicState, setState ] = useState([]);

    useEffect(() => {

        setState(API.getUser());
        console.log(topicState);
    }, []);

    return (
        <p>hello world</p>
    )

}

export default UserActivity;