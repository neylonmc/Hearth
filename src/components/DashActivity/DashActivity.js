import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
  import {
    ButtonGroup,
    Row,
    Col,
    Button
  } from "rsuite";
import "./DashActivity.css";
import API from "../../utils/API";

function DashActivity() {
    let { topic } = useParams();

    const [formObject, setFormObject] = useState([]);

    function loadActivities(topic) {
        API.getActivities(topic)
        .then(res => {
            setFormObject(res.data);
        })
        .catch(err => console.log(err));

    }

    useEffect(() => {
        loadActivities(topic);
    }, [topic])

    // recent activity from topics user follows
    return(
        <div className="animate__animated animate__fadeIn" >
        <ButtonGroup className="button-container">
          {formObject.map(data => {
            return (
                <Button
                  id="results-button"
                  href={`/topic/${data.local_ext}`}
                  bordered
                >
                  <img
                    id="topic-image"
                    src={data.Image || "/images/no-image.png"}
                    alt={data.title}
                  />
                  <p id="topic-title">{data.title}</p>
                </Button>
            );

          })}
        </ButtonGroup>
        </div>
    )
}

export default DashActivity;